// @ts-nocheck
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Col, Form, ListGroup, Row } from 'react-bootstrap'
import { forwardRef, useImperativeHandle, useState } from 'react'

type FacilityModalProps = {
  onCreatedCallback: VoidFunction
  onClose: VoidFunction
  handleShow: VoidFunction
  hubs: Array<Hub>
}

type FacilityData = {
  name: string
  hub_id: number
  hourly_fees: number
  start_time_hour: string
  start_time_minute: string
  end_time_hour: string
  end_time_minute: string
  continuous_time_hour: string
  continuous_time_minute: string
}

const FacilityModalBase: forwardRef<FacilityModalProps> = (props, ref) => {
  const [show, setShow] = useState<boolean>(false)
  const [item, setItem] = useState<FacilityData>({})

  // props.handleShow = (isShow: boolean) => setShow(isShow)

  useImperativeHandle(ref, () => {
    return {
      handleShow() {
        console.log('call handleShow')
        setShow(true)
      },
    }
  })

  function registerFacility() {
    // TODO
  }

  function cancel() {
    // TODO
  }

  function changeHub(event: any) {
    console.log('currentHub', event.currentTarget.value)
    item.hub_id = event.currentTarget.value
    console.log(item)
  }

  function changeName(event: any) {
    console.log('changeName event=' + event)
    item.name = event.target.value
    console.log(item)
  }

  function changeHourlyFees(event: any) {
    console.log('changeHourlyFees event=' + event)
    item.hourly_fees = event.target.value
    console.log(item)
  }

  function changeStartHour(event: any) {
    console.log('changeStartHour event=' + event)
    let hour = event.target.value
    if (hour.length === 1) {
      hour = '0' + hour
    }
    item.start_time_hour = hour
    console.log(item)
  }

  function changeStartMinute(event: any) {
    console.log('changeStartMinute event=' + event)
    let minute = event.target.value
    if (minute.length === 1) {
      minute = '0' + minute
    }
    item.start_time_minute = minute
    console.log(item)
  }

  function changeEndHour(event: any) {
    console.log('changeEndHour event=' + event)
    let hour = event.target.value
    if (hour.length === 1) {
      hour = '0' + hour
    }
    item.end_time_hour = hour
    console.log(item)
  }

  function changeEndMinute(event: any) {
    console.log('changeEndMinute event=' + event)
    let minute = event.target.value
    if (minute.length === 1) {
      minute = '0' + minute
    }
    item.end_time_minute = minute
    console.log(item)
  }

  function changeContinuousHour(event: any) {
    console.log('changeContinuousHour event=' + event)
    let hour = event.target.value
    if (hour.length === 1) {
      hour = '0' + hour
    }
    item.continuous_time_hour = hour
    console.log(item)
  }

  function changeContinuousMinute(event: any) {
    console.log('changeContinuousMinute event=' + event)
    let minute = event.target.value
    if (minute.length === 1) {
      minute = '0' + minute
    }
    item.continuous_time_minute = minute
    console.log(item)
  }

  return (
    <>
      <Button variant="primary" onClick={() => setShow(true)}>
        Custom Width Modal
      </Button>

      <Modal
        show={show}
        onHide={() => setShow(false)}
        centered={true}
        size="xl"
        dialogClassName="modal-90w"
        aria-labelledby="example-custom-modal-styling-title"
      >
        <Modal.Header closeButton>
          <Modal.Title id="example-custom-modal-styling-title">
            新しい施設を追加
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mt-3">
            <Form.Select
              className="col-6 mt-3 mb-1"
              onChange={changeHub}
              aria-label="Default select example"
            >
              <option>拠点を選択してください。</option>
              {props.hubs &&
                props.hubs.map((hub) => {
                  return (
                    <option key={hub.id} value={hub.id}>
                      {hub.name}
                    </option>
                  )
                })}
            </Form.Select>
          </Form>
          <ListGroup className="mt-3 mb-5">
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
                      onChange={(e) => changeName(e)}
                      defaultValue=""
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
                      onChange={(e) => changeHourlyFees(e)}
                      defaultValue="0"
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
                      onChange={(e) => changeStartHour(e)}
                      defaultValue="0"
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
                      onChange={(e) => changeStartMinute(e)}
                      defaultValue="00"
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
                      onChange={(e) => changeEndHour(e)}
                      defaultValue="0"
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
                      onChange={(e) => changeEndMinute(e)}
                      defaultValue="00"
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
                      onChange={(e) => changeContinuousHour(e)}
                      defaultValue="0"
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
                      onChange={(e) => changeContinuousMinute(e)}
                      defaultValue="00"
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
                      variant="outline-primary"
                      type="submit"
                      data-tip="API: registerRsrv(...) を呼び出す"
                      onClick={props.onClose}
                    >
                      キャンセル
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="col-6"
                      variant="primary"
                      type="submit"
                      data-tip="API: registerRsrv(...) を呼び出す"
                      onClick={() => registerFacility()}
                    >
                      登　録
                    </Button>
                  </Col>
                </Row>
              </Form>
            </ListGroup.Item>
          </ListGroup>
        </Modal.Body>
      </Modal>
    </>
  )
}

const FacilityModal = forwardRef(FacilityModalBase)

export default FacilityModal
