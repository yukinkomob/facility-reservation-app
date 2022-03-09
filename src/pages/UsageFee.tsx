import Header from 'components/Header'
import { useState, useEffect, useCallback } from 'react'
import { Col, Form, ListGroup, Row } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import axios from 'axios'
import { domain } from 'common/constants'

interface Hub {
  id: number
  name: string
}

interface Department {
  id: number
  name: string
  hub_id: number
}

type UsageFeeData = {
  date: string
  reservation_person_id: number
  time: string
  fee: number
  account_name: string
  facility_name: string
  hub_name: string
}

const headers = {
  'Content-Type': 'application/json',
  'Access-Control-Allow-Origin': 'desolate-gorge-20881.herokuapp.com',
  Authorization: 'Bearer ' + localStorage.getItem('token'),
}

const INVALID_ID = -1

function UsageFee() {
  const [hubs, setHubs] = useState<Array<Hub>>()
  const [departments, setDepartments] = useState<Array<Department>>()
  const [currentHub, setCurrentHub] = useState<number>(INVALID_ID)
  const [currentDepartment, setCurrentDepartment] = useState<number>(INVALID_ID)
  const [currentYear, setCurrentYear] = useState<string>('')
  const [currentMonth, setCurrentMonth] = useState<string>('')
  const [usageFees, setUsageFees] = useState<Array<UsageFeeData>>()

  const callApiGet = useCallback(
    (path: string, headers: any, callback: any) => {
      const url = domain + '/api' + path
      axios
        .get(url, {
          headers,
        })
        .then((res) => {
          callback(res)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    [],
  )

  const callApiPost = useCallback(
    (path: string, headers: any, body: any, callback: any) => {
      const url = domain + '/api' + path
      axios
        .post(url, body, {
          headers,
        })
        .then((res) => {
          callback(res)
        })
        .catch((e) => {
          console.log(e)
        })
    },
    [],
  )

  useEffect(() => {
    // 拠点を取得
    callApiGet('/hub', headers, (res: any) => {
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
    callApiGet('/department/' + currentHub, headers, (res: any) => {
      const departmentList = new Array<Department>()
      console.log('department', res.data)
      for (const key in res.data) {
        departmentList.push(res.data[key])
      }
      setDepartments(departmentList)
    })
  }, [currentHub])

  useEffect(() => {
    if (
      currentYear !== '' &&
      currentMonth !== '' &&
      currentDepartment !== INVALID_ID
    ) {
      // TODO /api/usage_fee_month を呼び出す
      callApiPost(
        '/usage_fee_month',
        headers,
        {
          year: currentYear,
          month: currentMonth,
          department_id: currentDepartment,
        },
        (res: any) => {
          console.log('data:', res.data)
          // TODO データを取得し、確保
          if (res.data === null && Object.keys(res.data).length === 0) {
            console.log('UsageFee データの取得に失敗')
            return
          }
          const items: Array<UsageFeeData> = new Array(
            Object.keys(res.data).length,
          )
          for (let key in res.data) {
            console.log('key=' + key)
            console.log(res.data[key])
            items.push(res.data[key])
          }
          setUsageFees(items)
        },
      )
    }
  }, [currentYear, currentMonth, currentDepartment])

  function changeHub(event: any) {
    console.log('hub', event.currentTarget.value)
    setCurrentHub(event.currentTarget.value)
  }

  function changeDepartment(event: any) {
    console.log('department', event.currentTarget.value)
    setCurrentDepartment(event.currentTarget.value)
  }

  function changeYear(event: any) {
    console.log('year', event.currentTarget.value)
    setCurrentYear(event.currentTarget.value)
  }

  function changeMonth(event: any) {
    console.log('month', event.currentTarget.value)
    setCurrentMonth(event.currentTarget.value)
  }

  function getSumData(): string {
    if (
      usageFees === undefined ||
      usageFees === null ||
      usageFees?.length <= 0
    ) {
      console.log('計算対象のデータがありません。')
      return ''
    }
    const sum = (usageFees as Array<UsageFeeData>).reduce((accum, item) => {
      return accum + item.fee
    }, 0)
    return sum.toString()
  }

  return (
    <div>
      <Header />
      <div className="main-top container">
        <h1
          data-tip="このページは下記の仕様を満たす必要があります。<br />
          ・施設の利用料金を利用者の部署に課金しているが、各拠点の庶務係が毎月手計算して<br />いる。計算作業に時間がかかり、計算間違いも含まれる。<br />
          ・施設を予約した従業員が所属している部署毎に施設利用料金を計算（月ごと）できる<br />ようにしたい。<br />
          ・施設利用料金を部署へ請求する場合は、15分単位とする。<br />
          ・予約者、管理者、庶務係のログイン方法は同一とし、ログイン後のメニューで役割毎<br />の機能が選択できるようにして欲しい。<br />
          ・庶務係は、月を指定して、部署ごとの施設利用料金を表示することができるようにし<br />て欲しい。<br />
          ・施設の利用料金は改訂される可能性がある、改訂前の予約は旧料金が算出できるよう<br />にして欲しい。<br />
          "
          data-for="title"
        >
          料金明細ページ
          <ReactTooltip
            id="title"
            effect="float"
            type="dark"
            place="bottom"
            multiline={true}
          />
        </h1>
        <Form>
          <Row>
            <Col>
              <Form.Label column lg={2}>
                閲覧年月
              </Form.Label>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                aria-label="Default select example"
                onChange={changeYear}
              >
                <option>年</option>
                <option value="2019">2019 年</option>
                <option value="2020">2020 年</option>
                <option value="2021">2021 年</option>
                <option value="2022">2022 年</option>
                <option value="2023">2023 年</option>
              </Form.Select>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                aria-label="Default select example"
                onChange={changeMonth}
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
          </Row>
          <Row>
            <Col>拠点</Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
                aria-label="Default select example"
                onChange={changeHub}
              >
                <option>拠点を選択してください</option>
                {hubs &&
                  hubs.map((hub) => {
                    return (
                      <option key={hub.id} value={hub.id}>
                        {hub.name}
                      </option>
                    )
                  })}
              </Form.Select>
            </Col>
          </Row>
          <Row>
            <Col>
              <Form.Label column lg={2}>
                部署
              </Form.Label>
            </Col>
            <Col>
              <Col>
                <Form.Select
                  className="col-6 mt-3 mb-1"
                  aria-label="Default select example"
                  onChange={changeDepartment}
                >
                  <option>部署を選択してください</option>
                  {departments &&
                    departments?.map((department) => {
                      return (
                        <option key={department.id} value={department.id}>
                          {department.name}
                        </option>
                      )
                    })}
                </Form.Select>
              </Col>
            </Col>
          </Row>
        </Form>
        <ListGroup className="my-5">
          <h3 className="my-3">利用料金総計: {getSumData()} 円</h3>
          {usageFees?.map((item) => {
            return (
              <ListGroup.Item>
                <div>
                  拠点名: {item.hub_name}、施設名: {item.facility_name}
                  、利用者名: no data{' '}
                </div>
                <div>利用日: {item.date}</div>
                <div>
                  利用時間: {item.time} 、利用料金: {item.fee} 円
                </div>
              </ListGroup.Item>
            )
          })}
        </ListGroup>
      </div>
    </div>
  )
}

export default UsageFee
