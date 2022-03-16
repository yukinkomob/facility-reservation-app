// @ts-nocheck
import Header from 'components/Header'
import { useState, useEffect } from 'react'
import { Col, Form, ListGroup, Row } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import { defaultHeaders, callApiGet, callApiPost } from 'common/ApiWrapper'
import { INVALID_ID } from 'common/Constants'

type Reservation = {
  id: number
  reservation_person_id: number
  account_name: string
  department_name: string
  tel: string
  start_time: string
  end_time: string
  date: string
}

function RsrvList() {
  const [hubs, setHubs] = useState<Array<Hub>>()
  const [facilities, setFacilities] = useState<Array<Facility>>()
  const [reservations, setReservations] = useState<Array<Reservation>>()
  const [currentHub, setCurrentHub] = useState<number>(INVALID_ID)
  const [currentFacility, setCurrentFacility] = useState<string>('')
  const [currentYear, setCurrentYear] = useState<string>('')
  const [currentMonth, setCurrentMonth] = useState<string>('')
  const [currentDay, setCurrentDay] = useState<string>('')

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

  useEffect(() => {
    // 予約情報を取得
    if (
      currentFacility === '' ||
      currentYear === '' ||
      currentMonth === '' ||
      currentDay === ''
    ) {
      console.log('予約情報の取得に必要な情報が不足しています。')
      return
    }
    const body = {
      facility_id: currentFacility,
      usage_date: currentYear + '-' + currentMonth + '-' + currentDay,
    }
    callApiPost(
      '/reservation-info',
      defaultHeaders,
      body,
      (res: any) => {
        const reservationList = new Array<Reservation>()
        console.log('reservations=', res.data)
        for (const key in res.data) {
          reservationList.push(res.data[key])
        }
        setReservations(reservationList)
      },
      (e: any) => {},
    )
  }, [currentFacility, currentYear, currentMonth, currentDay])

  function getHeaderLabel() {
    if (
      currentYear === '' ||
      currentMonth === '' ||
      currentDay === '' ||
      hubs.length <= 0 ||
      currentHub === INVALID_ID ||
      facilities <= 0 ||
      currentFacility === INVALID_ID
    ) {
      console.log('ラベルの作成に必要な情報が不足しています。')
      return
    }
    const hubName = hubs[parseInt(currentHub)].name
    console.log('hubName=' + hubName)
    const facilityName = facilities[parseInt(currentFacility)].name
    console.log('facilityName=' + facilityName)

    return (
      currentYear +
      '年' +
      currentMonth +
      '月' +
      currentDay +
      '日、拠点: ' +
      hubName +
      '、施設: ' +
      facilityName
    )
  }

  function changeHub(event: any) {
    console.log('currentHub', event.currentTarget.value)
    setCurrentHub(event.currentTarget.value)
  }

  function changeFacility(event: any) {
    console.log('currentFacility', event.currentTarget.value)
    setCurrentFacility(event.currentTarget.value)
  }

  function changeYear(event: any) {
    console.log('year', event.currentTarget.value)
    setCurrentYear(event.currentTarget.value)
  }

  function changeMonth(event: any) {
    console.log('month', event.currentTarget.value)
    setCurrentMonth(event.currentTarget.value)
  }

  function changeDay(event: any) {
    console.log('day', event.currentTarget.value)
    setCurrentDay(event.currentTarget.value)
  }

  function tidyTime(time: string): string {
    const timeParts = time.split(':')
    return timeParts[0] + ':' + timeParts[1]
  }

  return (
    <div>
      <Header />
      <div className="main-top container">
        <h1
          data-tip="このページは下記の仕様を満たす必要があります。<br />
          ・施設予約情報には、予約者情報（部署、電話番号）、予約対象施設詳細（拠点名、施<br />設名、利用料金（１時間あたり））、予約情報（タイトル、開始日時、終了日<br />時）、参加者情報（氏名、会社名）、備考を含められるようにしたい。<br />
          ・施設予約情報の参加者情報は、プライバシーを考慮して非公開設定ができるようにし<br />て欲しい。非公開にした場合には、予約者のみが参照できるようにして欲しい。<br />
          ・施設利用料金を部署へ請求する場合は、15分単位とする。<br />
          ・予約者は、拠点を指定して施設の予約を照会できるようにして欲しい。過去の予約も<br />見られるようにして欲しい。<br />
          ・予約一覧照会では、参加者や備考は表示されなくてよい。<br />
          ・予約者は、自分の予約を取り消したり、変更できるようにして欲しい。取り消された<br />情報も何らかのカタチで残して欲しい。"
          data-for="title"
        >
          予約一覧ページ
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
            data-tip="拠点情報はAPIで取得：getHubs()"
            onChange={changeHub}
            aria-label="Default select example"
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
          <Row className="align-items-center">
            <Col>
              <Form.Label
                column
                lg={2}
                data-tip="使いやすくするためには、週単位で表示や日送りのUIを追加など工夫が必要そう"
              >
                予約日
              </Form.Label>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                onChange={changeYear}
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
                onChange={changeMonth}
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
                onChange={changeDay}
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
          </Row>
        </Form>
        <ListGroup className="mt-5">
          <h3 data-tip="変数がいっぱい並んでいて少し息苦しい（日付、拠点、施設）">
            {getHeaderLabel()}
          </h3>
          {reservations?.map((item) => {
            return (
              <ListGroup.Item>
                <div>
                  予約者: {item.department_name} {item.account_name} （
                  {item.tel}）
                </div>
                <div>
                  予約時間帯: {tidyTime(item.start_time)}-
                  {tidyTime(item.end_time)}
                </div>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </div>
    </div>
  )
}

export default RsrvList
