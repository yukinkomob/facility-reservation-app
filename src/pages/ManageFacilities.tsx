// @ts-nocheck
import Header from 'components/Header'
import { Button, Col, Form, ListGroup, Row } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import { useState, useEffect } from 'react'
import { defaultHeaders, callApiGet, callApiPost } from 'common/ApiWrapper'
import { INVALID_ID } from 'common/Constants'

type Facility = {
  id: number
  name: string
  hub_id: number
  hourly_fees: number
  reservable_timezone_start_time: string
  reservable_timezone_end_time: string
  continuous_avairable_time: string
}

function ManageFacilities() {
  const [hubs, setHubs] = useState<Array<Hub>>()
  const [currentHub, setCurrentHub] = useState<number>(INVALID_ID)
  const [facilities, setFacilities] = useState<Array<Facility>>()

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
    // TODO 施設情報を取得: facility-info
    const body = {
      hub_id: currentHub,
    }
    callApiPost('/facility-info', defaultHeaders, body, (res: any) => {
      const facilityList = new Array<Facility>()
      console.log('facilities=', res.data)
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

  function getHour(time: string): string {
    const hour = time?.split(':')[0]
    return parseInt(hour).toString()
  }

  function getMinute(time: string): string {
    return time?.split(':')[1]
  }

  return (
    <div>
      <Header />
      <div className="main-top container">
        <h1
          data-tip="このページは下記の仕様を満たす必要があります。<br />
          ・拠点数：8拠点（横浜本社、大阪、広島、福岡、仙台、札幌、高松、新潟）<br />
          各拠点では、顧客を招いた会議や社内打合せが頻繁に行われている。そのための会議室<br />も数多く設置されている<br />
          ・観光地での外国客への対応から輸入食品の需要は伸びており、今後、拠点数（海外も<br />含む）を増やしていく<br />
          ・従業員は、全国拠点のどの施設も予約できるようにしたい。<br />
          ・施設予約情報には、予約者情報（部署、電話番号）、予約対象施設詳細（拠点名、施<br />設名、利用料金（１時間あたり））、予約情報（タイトル、開始日時、終了日<br />時）、参加者情報（氏名、会社名）、備考を含められるようにしたい。<br />
          ・管理者は、拠点に施設を登録、削除、変更できるようにして欲しい。<br />
          ・施設の利用料金は改訂される可能性がある、改訂前の予約は旧料金が算出できるよう<br />にして欲しい。<br />
          ・施設毎に利用可能時間帯、連続利用可能時間を設定できるようにして欲しい。<br />
          "
          data-for="title"
        >
          施設管理ページ
          <ReactTooltip
            id="title"
            effect="float"
            type="dark"
            place="bottom"
            multiline={true}
          />
        </h1>
        <Form className="mt-3">
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
        </Form>
        <Button
          className="col-6 mt-5"
          variant="outline-success"
          type="submit"
          data-tip="API: registerRsrv(...) を呼び出す"
        >
          新しい施設を追加する
        </Button>
        <ListGroup className="mt-3 mb-5">
          {facilities?.map((item) => {
            return (
              <ListGroup.Item>
                <Form className="mt-3">
                  <Form.Label>施設ID : {item.id}</Form.Label>
                  <Row>
                    <Col>
                      <Form.Label column lg={2}>
                        施設名
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Control
                        className="mt-3"
                        type="text"
                        placeholder="施設名"
                        defaultValue={item.name}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label column lg={2}>
                        1時間当たりの利用料金
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Control
                        className="mt-3"
                        type="number"
                        placeholder="1時間当たりの利用料金"
                        defaultValue={item.hourly_fees}
                      />
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label column lg={2}>
                        予約可能時間帯
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Select
                        className="col-6 mt-3 mb-1"
                        aria-label="Default select example"
                        defaultValue={getHour(
                          item?.reservable_timezone_start_time,
                        )}
                      >
                        <option>時</option>
                        <option value="0">0 時</option>
                        <option value="1">1 時</option>
                        <option value="2">2 時</option>
                        <option value="3">3 時</option>
                        <option value="4">4 時</option>
                        <option value="5">5 時</option>
                        <option value="6">6 時</option>
                        <option value="7">7 時</option>
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
                        <option value="23">23 時</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        className="col-6 mt-3 mb-1"
                        aria-label="Default select example"
                        defaultValue={getMinute(
                          item?.reservable_timezone_start_time,
                        )}
                      >
                        <option>分</option>
                        <option value="00">00 分</option>
                        <option value="15">15 分</option>
                        <option value="30">30 分</option>
                        <option value="45">45 分</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Label column lg={2}>
                        から
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Select
                        className="col-6 mt-3 mb-1"
                        aria-label="Default select example"
                        defaultValue={getHour(
                          item?.reservable_timezone_end_time,
                        )}
                      >
                        <option>時</option>
                        <option value="0">0 時</option>
                        <option value="1">1 時</option>
                        <option value="2">2 時</option>
                        <option value="3">3 時</option>
                        <option value="4">4 時</option>
                        <option value="5">5 時</option>
                        <option value="6">6 時</option>
                        <option value="7">7 時</option>
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
                        <option value="23">23 時</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        className="col-6 mt-3 mb-1"
                        aria-label="Default select example"
                        defaultValue={getMinute(
                          item?.reservable_timezone_end_time,
                        )}
                      >
                        <option>分</option>
                        <option value="00">00 分</option>
                        <option value="15">15 分</option>
                        <option value="30">30 分</option>
                        <option value="45">45 分</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Label column lg={2}>
                        まで
                      </Form.Label>
                    </Col>
                  </Row>
                  <Row>
                    <Col>
                      <Form.Label column lg={2}>
                        連続利用可能時間
                      </Form.Label>
                    </Col>
                    <Col>
                      <Form.Select
                        className="col-6 mt-3 mb-1"
                        aria-label="Default select example"
                        defaultValue={getHour(item?.continuous_avairable_time)}
                      >
                        <option>時間</option>
                        <option value="0">0 時間</option>
                        <option value="1">1 時間</option>
                        <option value="2">2 時間</option>
                        <option value="3">3 時間</option>
                        <option value="4">4 時間</option>
                        <option value="5">5 時間</option>
                        <option value="6">6 時間</option>
                        <option value="7">7 時間</option>
                        <option value="8">8 時間</option>
                        <option value="9">9 時間</option>
                        <option value="10">10 時間</option>
                        <option value="11">11 時間</option>
                        <option value="12">12 時間</option>
                        <option value="13">13 時間</option>
                        <option value="14">14 時間</option>
                        <option value="15">15 時間</option>
                        <option value="16">16 時間</option>
                        <option value="17">17 時間</option>
                        <option value="18">18 時間</option>
                        <option value="19">19 時間</option>
                        <option value="20">20 時間</option>
                        <option value="21">21 時間</option>
                        <option value="22">22 時間</option>
                        <option value="23">23 時間</option>
                        <option value="24">24 時間</option>
                      </Form.Select>
                    </Col>
                    <Col>
                      <Form.Select
                        className="col-6 mt-3 mb-1"
                        aria-label="Default select example"
                        defaultValue={getMinute(
                          item?.continuous_avairable_time,
                        )}
                      >
                        <option>分</option>
                        <option value="00">00 分</option>
                        <option value="15">15 分</option>
                        <option value="30">30 分</option>
                        <option value="45">45 分</option>
                      </Form.Select>
                    </Col>
                  </Row>
                  <Row className="my-3">
                    <Col>
                      <Button
                        className="col-6"
                        variant="primary"
                        type="submit"
                        data-tip="API: registerRsrv(...) を呼び出す"
                      >
                        保　存
                      </Button>
                    </Col>
                    <Col>
                      <Button
                        className="col-6"
                        variant="outline-danger"
                        type="submit"
                        data-tip="API: registerRsrv(...) を呼び出す"
                      >
                        削　除
                      </Button>
                    </Col>
                  </Row>
                </Form>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </div>
    </div>
  )
}

export default ManageFacilities
