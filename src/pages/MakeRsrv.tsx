// @ts-nocheck
import Header from 'components/Header'
import { Button, Col, Form, Row } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import { useState, useEffect } from 'react'
import { defaultHeaders, callApiGet } from 'common/ApiWrapper'
import { INVALID_ID } from 'common/Constants'

// TODO 予約者 ID は自分自身であり、ログイン成功時に ID をlocalStorageに保存しておくこと

type Participant = {
  company_name: string
  name: string
}

type Reservation = {
  hub_id: string
  facility_id: string
  title: string
  tel: string
  start_year: string
  start_month: string
  start_day: string
  start_hour: string
  start_minute: string
  end_year: string
  end_month: string
  end_day: string
  end_hour: string
  end_minute: string
  participants: Array<Participant>
  is_private: boolean
  notice: string
}

enum RSRV_TYPE {
  HubId,
  FacilityId,
  Title,
  Tel,
  StartYear,
  StartMonth,
  StartDay,
  StartHour,
  StartMinute,
  EndYear,
  EndMonth,
  EndDay,
  EndHour,
  EndMinute,
  Participants,
  IsPrivate,
  Notice,
}

function MakeRsrv() {
  const [hubs, setHubs] = useState<Array<Hub>>()
  const [facilities, setFacilities] = useState<Array<Facility>>()

  const [currentHub, setCurrentHub] = useState<number>(INVALID_ID)
  const [currentFacility, setCurrentFacility] = useState<string>('')
  const [currentItem, setItem] = useState<Reservation>({})

  useEffect(() => {
    // 拠点を取得
    callApiGet('/hub', defaultHeaders, (res: any) => {
      const HubList = new Array<Hub>()
      console.log('hub', res.data)
      for (const key in res.data) {
        HubList.push(res.data[key])
      }
      setHubs(HubList)
    })
  }, [])

  useEffect(() => {
    // 部署を取得
    callApiGet('/facility/' + currentHub, defaultHeaders, (res: any) => {
      const facilityList = new Array<Facility>()
      console.log('facilities', res.data)
      for (const key in res.data) {
        facilityList.push(res.data[key])
      }
      setFacilities(facilityList)
    })
  }, [currentHub])

  function changeHub(event: any) {
    console.log('currentHub', event.currentTarget.value)
    setCurrentHub(event.currentTarget.value)
  }

  function changeFacility(event: any) {
    console.log('currentFacility', event.currentTarget.value)
    setCurrentFacility(event.currentTarget.value)
  }

  function changeReservation(event: any, type: RSRV_TYPE) {
    console.log('Reservation data=', event.currentTarget.value)
    const value = event.currentTarget.value
    const item = currentItem
    if (item === null || item === undefined) {
      console.log('予約データがありません。')
      return
    }
    switch (type) {
      case RSRV_TYPE.HubId:
        item.hub_id = value
        break
      case RSRV_TYPE.FacilityId:
        item.facility_id = value
        break
      case RSRV_TYPE.Title:
        item.title = value
        break
      case RSRV_TYPE.Tel:
        item.tel = value
        break
      case RSRV_TYPE.StartYear:
        item.start_year = value
        break
      case RSRV_TYPE.StartMonth:
        item.start_month = value
        break
      case RSRV_TYPE.StartDay:
        item.start_day = value
        break
      case RSRV_TYPE.StartHour:
        item.start_hour = value
        break
      case RSRV_TYPE.StartMinute:
        item.start_minute = value
        break
      case RSRV_TYPE.EndYear:
        item.end_year = value
        break
      case RSRV_TYPE.EndMonth:
        item.end_month = value
        break
      case RSRV_TYPE.EndDay:
        item.end_day = value
        break
      case RSRV_TYPE.EndHour:
        item.end_hour = value
        break
      case RSRV_TYPE.EndMinute:
        item.end_minute = value
        break
      case RSRV_TYPE.Participants:
        item.participants = value
        break
      case RSRV_TYPE.IsPrivate:
        item.is_private = event.currentTarget.checked
        break
      case RSRV_TYPE.Notice:
        item.notice = value
        break
      default:
        break
    }
    console.log(item)
  }

  return (
    <div>
      <Header />
      <div className="main-top container">
        <h1
          data-tip="このページは下記の仕様を満たす必要があります。<br />
          ・拠点数：8拠点（横浜本社、大阪、広島、福岡、仙台、札幌、高松、新潟）<br />
          ・従業員は、全国拠点のどの施設も予約できるようにしたい。<br />
          ・施設予約情報には、予約者情報（部署、電話番号）、予約対象施設詳細（拠点名、施<br />設名、利用料金（１時間あたり））、予約情報（タイトル、開始日時、終了日<br />時）、参加者情報（氏名、会社名）、備考を含められるようにしたい。<br />
          ・施設予約情報の参加者情報は、プライバシーを考慮して非公開設定ができるようにし<br />て欲しい。非公開にした場合には、予約者のみが参照できるようにして欲しい。<br />
          ・施設利用料金を部署へ請求する場合は、15分単位とする。<br />
          ・予約者は、施設を選択して予約ができるようにして欲しい。<br />
          "
          data-for="title"
        >
          予約作成ページ
          <ReactTooltip
            id="title"
            effect="float"
            type="dark"
            place="bottom"
            multiline={true}
          />
        </h1>
        <Form>
          <Form.Select
            className="col-6 mt-3 mb-1"
            onChange={changeHub}
            aria-label="Default select example"
            data-tip="拠点情報はAPIで取得：getHubs()"
          >
            <option>拠点を選択してください。</option>
            {hubs &&
              hubs.map((hub) => {
                return (
                  <option key={hub.id} value={hub.id}>
                    {hub.name}
                  </option>
                )
              })}
          </Form.Select>
          <Form.Select
            className="col-6 mb-1"
            onChange={changeFacility}
            data-tip="施設情報はAPIで取得：getHubs()で拠点と同時に取得するのが良いかも"
            aria-label="Default select example"
          >
            <option>施設を選択してください。</option>
            {facilities?.map((item, index) => {
              return (
                <option key={index} value={index}>
                  {item.name} ({item.hourly_fees.toLocaleString()} 円 / 時間)
                </option>
              )
            })}
          </Form.Select>
          <Form.Text data-tip="ここの料金の部分は選択した施設の値を表示">
            選択した施設の利用料金は、1時間あたり 1,500 円です。
          </Form.Text>
          <Form.Control
            className="mt-3"
            type="text"
            placeholder="タイトル"
            onChange={(e) => changeReservation(e, RSRV_TYPE.Title)}
          />
          <Row>
            <Col>
              <Form.Label
                column
                lg={2}
                data-tip="電話番号は場合により変わる可能性があるので、毎回入力。予約者名はアカウント情報から抽出するので不要"
              >
                予約者電話番号
              </Form.Label>
            </Col>
            <Col>
              <Form.Control
                className="mt-3"
                type="tel"
                placeholder="電話番号"
                onChange={(e) => changeReservation(e, RSRV_TYPE.Tel)}
              />
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <Form.Label
                column
                lg={2}
                data-tip="ピッカーUIを利用するのが良さそう。利用可能時間帯や連続利用可能時間を考慮する必要がある"
              >
                予約開始日時
              </Form.Label>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                onChange={(e) => changeReservation(e, RSRV_TYPE.StartYear)}
                aria-label="Default select example"
              >
                <option>年</option>
                <option value="2021">2021 年</option>
                <option value="2022">2022 年</option>
                <option value="2023">2023 年</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                onChange={(e) => changeReservation(e, RSRV_TYPE.StartMonth)}
                aria-label="Default select example"
              >
                <option>月</option>
                <option value="01">1 月</option>
                <option value="02">2 月</option>
                <option value="03">3 月</option>
                <option value="04">4 月</option>
                <option value="05">5 月</option>
                <option value="06">6 月</option>
                <option value="07">7 月</option>
                <option value="08">8 月</option>
                <option value="09">9 月</option>
                <option value="10">10 月</option>
                <option value="11">11 月</option>
                <option value="12">12 月</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                onChange={(e) => changeReservation(e, RSRV_TYPE.StartDay)}
                aria-label="Default select example"
              >
                <option>日</option>
                <option value="01">1 日</option>
                <option value="02">2 日</option>
                <option value="03">3 日</option>
                <option value="04">4 日</option>
                <option value="05">5 日</option>
                <option value="06">6 日</option>
                <option value="07">7 日</option>
                <option value="08">8 日</option>
                <option value="09">9 日</option>
                <option value="10">10 日</option>
                <option value="11">11 日</option>
                <option value="12">12 日</option>
                <option value="13">13 日</option>
                <option value="14">14 日</option>
                <option value="15">15 日</option>
                <option value="16">16 日</option>
                <option value="17">17 日</option>
                <option value="18">18 日</option>
                <option value="19">19 日</option>
                <option value="20">20 日</option>
                <option value="21">21 日</option>
                <option value="22">22 日</option>
                <option value="23">23 日</option>
                <option value="24">24 日</option>
                <option value="25">25 日</option>
                <option value="26">26 日</option>
                <option value="27">27 日</option>
                <option value="28">28 日</option>
                <option value="29">29 日</option>
                <option value="30">30 日</option>
                <option value="31">31 日</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                onChange={(e) => changeReservation(e, RSRV_TYPE.StartHour)}
                aria-label="Default select example"
              >
                <option>時</option>
                <option value="08">8 時</option>
                <option value="09">9 時</option>
                <option value="10">10 時</option>
                <option value="11">11 時</option>
                <option value="12">12 時</option>
                <option value="13">13 時</option>
                <option value="14">14 時</option>
                <option value="15">15 時</option>
                <option value="16">16 時</option>
                <option value="17">17 時</option>
                <option value="18">18 時</option>
                <option value="19">19 時</option>
                <option value="20">20 時</option>
                <option value="21">21 時</option>
                <option value="22">22 時</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                onChange={(e) => changeReservation(e, RSRV_TYPE.StartMinute)}
                aria-label="Default select example"
              >
                <option>分</option>
                <option value="00">00 分</option>
                <option value="15">15 分</option>
                <option value="30">30 分</option>
                <option value="45">45 分</option>
              </Form.Select>
            </Col>
          </Row>
          <Row className="align-items-center">
            <Col>
              <Form.Label
                column
                lg={2}
                data-tip="日をまたいだ予約を可能とするか否かで、日付の実装有無が変わる"
              >
                予約終了日時
              </Form.Label>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                onChange={(e) => changeReservation(e, RSRV_TYPE.EndYear)}
                aria-label="Default select example"
              >
                <option>年</option>
                <option value="2021">2021 年</option>
                <option value="2022">2022 年</option>
                <option value="2023">2023 年</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                onChange={(e) => changeReservation(e, RSRV_TYPE.EndMonth)}
                aria-label="Default select example"
              >
                <option>月</option>
                <option value="1">1 月</option>
                <option value="2">2 月</option>
                <option value="3">3 月</option>
                <option value="4">4 月</option>
                <option value="5">5 月</option>
                <option value="6">6 月</option>
                <option value="7">7 月</option>
                <option value="8">8 月</option>
                <option value="9">9 月</option>
                <option value="10">10 月</option>
                <option value="11">11 月</option>
                <option value="12">12 月</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                onChange={(e) => changeReservation(e, RSRV_TYPE.EndDay)}
                aria-label="Default select example"
              >
                <option>日</option>
                <option value="1">1 日</option>
                <option value="2">2 日</option>
                <option value="3">3 日</option>
                <option value="4">4 日</option>
                <option value="5">5 日</option>
                <option value="6">6 日</option>
                <option value="7">7 日</option>
                <option value="8">8 日</option>
                <option value="9">9 日</option>
                <option value="10">10 日</option>
                <option value="11">11 日</option>
                <option value="12">12 日</option>
                <option value="13">13 日</option>
                <option value="14">14 日</option>
                <option value="15">15 日</option>
                <option value="16">16 日</option>
                <option value="17">17 日</option>
                <option value="18">18 日</option>
                <option value="19">19 日</option>
                <option value="20">20 日</option>
                <option value="21">21 日</option>
                <option value="22">22 日</option>
                <option value="23">23 日</option>
                <option value="24">24 日</option>
                <option value="25">25 日</option>
                <option value="26">26 日</option>
                <option value="27">27 日</option>
                <option value="28">28 日</option>
                <option value="29">29 日</option>
                <option value="30">30 日</option>
                <option value="31">31 日</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                onChange={(e) => changeReservation(e, RSRV_TYPE.EndHour)}
                aria-label="Default select example"
              >
                <option>時</option>
                <option value="8">8 時</option>
                <option value="9">9 時</option>
                <option value="10">10 時</option>
                <option value="11">11 時</option>
                <option value="12">12 時</option>
                <option value="13">13 時</option>
                <option value="14">14 時</option>
                <option value="15">15 時</option>
                <option value="16">16 時</option>
                <option value="17">17 時</option>
                <option value="18">18 時</option>
                <option value="19">19 時</option>
                <option value="20">20 時</option>
                <option value="21">21 時</option>
                <option value="22">22 時</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                onChange={(e) => changeReservation(e, RSRV_TYPE.EndMinute)}
                aria-label="Default select example"
              >
                <option>分</option>
                <option value="00">00 分</option>
                <option value="15">15 分</option>
                <option value="30">30 分</option>
                <option value="45">45 分</option>
              </Form.Select>
            </Col>
          </Row>
          <Form.Text data-tip="ここも入力内容から自動計算で処理する">
            選択した施設の利用料金は、〇時間のご利用で 計 〇〇〇 円です。
          </Form.Text>
          <br />
          <Form.Label
            column="lg"
            lg={2}
            data-tip="参加者情報はアカウントと紐づけるか？リマインダーなどは将来的にも不要？"
          >
            参加者情報
          </Form.Label>
          <Row>
            <Col>
              <Form.Control className="mt-3" type="text" placeholder="会社名" />
            </Col>
            <Col>
              <Form.Control className="mt-3" type="text" placeholder="氏名" />
            </Col>
            <Col>
              <Button
                className="mt-3 me-3"
                variant="outline-secondary"
                type="button"
                data-tip="参加者データを追加"
              >
                +
              </Button>
              <Button
                className="mt-3"
                variant="outline-secondary"
                type="button"
                data-tip="参加者データを削除"
              >
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control className="mt-3" type="text" placeholder="会社名" />
            </Col>
            <Col>
              <Form.Control className="mt-3" type="text" placeholder="氏名" />
            </Col>
            <Col>
              <Button
                className="mt-3 me-3"
                variant="outline-secondary"
                type="button"
              >
                +
              </Button>
              <Button
                className="mt-3"
                variant="outline-secondary"
                type="button"
              >
                -
              </Button>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Control className="mt-3" type="text" placeholder="会社名" />
            </Col>
            <Col>
              <Form.Control className="mt-3" type="text" placeholder="氏名" />
            </Col>
            <Col>
              <Button
                className="mt-3 me-3"
                variant="outline-secondary"
                type="button"
              >
                +
              </Button>
              <Button
                className="mt-3"
                variant="outline-secondary"
                type="button"
              >
                -
              </Button>
            </Col>
          </Row>
          <Form.Group
            as={Row}
            className="mt-3 mb-3"
            controlId="formHorizontalCheck"
          >
            <Col>
              <Form.Check
                label="参加者情報を非公開にする"
                onClick={(e) => changeReservation(e, RSRV_TYPE.IsPrivate)}
              />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>備考欄</Form.Label>
            <Form.Control
              as="textarea"
              rows={3}
              onChange={(e) => changeReservation(e, RSRV_TYPE.Notice)}
            />
          </Form.Group>
        </Form>
        <Row className="align-items-center mb-5">
          <Col>
            <Button
              className="col-6"
              variant="primary"
              type="submit"
              data-tip="API: registerRsrv(...) を呼び出す"
            >
              申　請
            </Button>
          </Col>
          <Col>
            <Button className="col-6" variant="outline-primary" type="submit">
              キャンセル
            </Button>
          </Col>
        </Row>
      </div>
    </div>
  )
}

export default MakeRsrv
