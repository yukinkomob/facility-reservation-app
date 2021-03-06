// @ts-nocheck
import Modal from 'react-bootstrap/Modal'
import Button from 'react-bootstrap/Button'
import { Col, Form, ListGroup, Row } from 'react-bootstrap'
import { forwardRef, useImperativeHandle, useState } from 'react'
import { callApiPost, defaultHeaders } from 'common/ApiWrapper'

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

const defaultName = ''
const defaultHubId = -1
const defaultHourlyFees = 0
const defaultStartTime = '00:00:00'
const defaultEndTime = '00:00:00'
const defaultContinuousTime = '00:00:00'

const defaultFacilityData: FacilityData = {
  name: defaultName,
  hub_id: defaultHubId,
  hourly_fees: defaultHourlyFees,
  start_time_hour: defaultStartTime.split(':')[0],
  start_time_minute: defaultStartTime.split(':')[1],
  end_time_hour: defaultEndTime.split(':')[0],
  end_time_minute: defaultEndTime.split(':')[1],
  continuous_time_hour: defaultContinuousTime.split(':')[0],
  continuous_time_minute: defaultContinuousTime.split(':')[1],
}

const FacilityModalBase: forwardRef<FacilityModalProps> = (props, ref) => {
  const [show, setShow] = useState<boolean>(false)
  const [item, setItem] = useState<FacilityData>(defaultFacilityData)

  // props.handleShow = (isShow: boolean) => setShow(isShow)

  useImperativeHandle(ref, () => {
    return {
      handleShow() {
        console.log('call handleShow')
        setShow(true)
      },
    }
  })

  function registerFacility(event: any) {
    event.preventDefault()
    console.log(item)
    if (!validateFacility()) {
      return
    }
    const facility = {
      name: item.name,
      hub_id: parseInt(item.hub_id),
      hourly_fees: parseInt(item.hourly_fees),
      reservable_timezone_start_time:
        item.start_time_hour + ':' + item.start_time_minute + ':00',
      reservable_timezone_end_time:
        item.end_time_hour + ':' + item.end_time_minute + ':00',
      continuous_avairable_time:
        item.continuous_time_hour + ':' + item.continuous_time_minute + ':00',
    }
    callApiPost(
      '/facility',
      defaultHeaders,
      facility,
      (res: any) => {
        console.log('res.data=' + res.data)
        setShow(false)
      },
      (e: any) => {},
    )
  }

  function validateFacility(): boolean {
    if (Object.keys(item).indexOf('name') === -1 || item.name === '') {
      console.log('??????????????????')
      return false
    }
    if (Object.keys(item).indexOf('hub_id') === -1 || item.hub_id === -1) {
      console.log('?????? ID ????????????')
      return false
    }
    if (Object.keys(item).indexOf('hourly_fees') === -1) {
      console.log('1??????????????????????????????????????????')
      return false
    }
    if (Object.keys(item).indexOf('start_time_hour') === -1) {
      console.log('?????????????????????????????????')
      return false
    }
    if (Object.keys(item).indexOf('start_time_minute') === -1) {
      console.log('?????????????????????????????????')
      return false
    }
    if (Object.keys(item).indexOf('end_time_hour') === -1) {
      console.log('?????????????????????????????????')
      return false
    }
    if (Object.keys(item).indexOf('end_time_minute') === -1) {
      console.log('?????????????????????????????????')
      return false
    }
    if (Object.keys(item).indexOf('continuous_time_hour') === -1) {
      console.log('?????????????????????????????????')
      return false
    }
    if (Object.keys(item).indexOf('continuous_time_minute') === -1) {
      console.log('?????????????????????????????????')
      return false
    }
    return true
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
            ????????????????????????
          </Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form className="mt-3">
            <Form.Select
              className="col-6 mt-3 mb-1"
              onChange={changeHub}
              aria-label="Default select example"
              defaultValue={defaultHubId}
            >
              <option>????????????????????????????????????</option>
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
                <Row>
                  <Col>
                    <Form.Label column lg={2}>
                      ?????????
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      className="mt-3"
                      type="text"
                      placeholder="?????????"
                      onChange={(e) => changeName(e)}
                      defaultValue={defaultName}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label column lg={10}>
                      1??????????????????????????????
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Control
                      className="mt-3"
                      type="number"
                      placeholder="1??????????????????????????????"
                      onChange={(e) => changeHourlyFees(e)}
                      defaultValue={defaultHourlyFees}
                    />
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label column lg={10}>
                      ?????????????????????
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Select
                      className="col-6 mt-3 mb-1"
                      aria-label="Default select example"
                      onChange={(e) => changeStartHour(e)}
                      defaultValue={defaultStartTime.split(':')[0]}
                    >
                      <option>???</option>
                      <option value="00">0 ???</option>
                      <option value="01">1 ???</option>
                      <option value="02">2 ???</option>
                      <option value="03">3 ???</option>
                      <option value="04">4 ???</option>
                      <option value="05">5 ???</option>
                      <option value="06">6 ???</option>
                      <option value="07">7 ???</option>
                      <option value="08">8 ???</option>
                      <option value="09">9 ???</option>
                      <option value="10">10 ???</option>
                      <option value="11">11 ???</option>
                      <option value="12">12 ???</option>
                      <option value="13">13 ???</option>
                      <option value="14">14 ???</option>
                      <option value="15">15 ???</option>
                      <option value="16">16 ???</option>
                      <option value="17">17 ???</option>
                      <option value="18">18 ???</option>
                      <option value="19">19 ???</option>
                      <option value="20">20 ???</option>
                      <option value="21">21 ???</option>
                      <option value="22">22 ???</option>
                      <option value="23">23 ???</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Select
                      className="col-6 mt-3 mb-1"
                      aria-label="Default select example"
                      onChange={(e) => changeStartMinute(e)}
                      defaultValue={defaultStartTime.split(':')[1]}
                    >
                      <option>???</option>
                      <option value="00">00 ???</option>
                      <option value="15">15 ???</option>
                      <option value="30">30 ???</option>
                      <option value="45">45 ???</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label column lg={2}>
                      ??????
                    </Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col></Col>
                  <Col>
                    <Form.Select
                      className="col-6 mt-3 mb-1"
                      aria-label="Default select example"
                      onChange={(e) => changeEndHour(e)}
                      defaultValue={defaultEndTime.split(':')[0]}
                    >
                      <option>???</option>
                      <option value="00">0 ???</option>
                      <option value="01">1 ???</option>
                      <option value="02">2 ???</option>
                      <option value="03">3 ???</option>
                      <option value="04">4 ???</option>
                      <option value="05">5 ???</option>
                      <option value="06">6 ???</option>
                      <option value="07">7 ???</option>
                      <option value="08">8 ???</option>
                      <option value="09">9 ???</option>
                      <option value="10">10 ???</option>
                      <option value="11">11 ???</option>
                      <option value="12">12 ???</option>
                      <option value="13">13 ???</option>
                      <option value="14">14 ???</option>
                      <option value="15">15 ???</option>
                      <option value="16">16 ???</option>
                      <option value="17">17 ???</option>
                      <option value="18">18 ???</option>
                      <option value="19">19 ???</option>
                      <option value="20">20 ???</option>
                      <option value="21">21 ???</option>
                      <option value="22">22 ???</option>
                      <option value="23">23 ???</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Select
                      className="col-6 mt-3 mb-1"
                      aria-label="Default select example"
                      onChange={(e) => changeEndMinute(e)}
                      defaultValue={defaultEndTime.split(':')[1]}
                    >
                      <option>???</option>
                      <option value="00">00 ???</option>
                      <option value="15">15 ???</option>
                      <option value="30">30 ???</option>
                      <option value="45">45 ???</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Label column lg={2}>
                      ??????
                    </Form.Label>
                  </Col>
                </Row>
                <Row>
                  <Col>
                    <Form.Label column lg={10}>
                      ????????????????????????
                    </Form.Label>
                  </Col>
                  <Col>
                    <Form.Select
                      className="col-6 mt-3 mb-1"
                      aria-label="Default select example"
                      onChange={(e) => changeContinuousHour(e)}
                      defaultValue={defaultContinuousTime.split(':')[0]}
                    >
                      <option>??????</option>
                      <option value="00">0 ??????</option>
                      <option value="01">1 ??????</option>
                      <option value="02">2 ??????</option>
                      <option value="03">3 ??????</option>
                      <option value="04">4 ??????</option>
                      <option value="05">5 ??????</option>
                      <option value="06">6 ??????</option>
                      <option value="07">7 ??????</option>
                      <option value="08">8 ??????</option>
                      <option value="09">9 ??????</option>
                      <option value="10">10 ??????</option>
                      <option value="11">11 ??????</option>
                      <option value="12">12 ??????</option>
                      <option value="13">13 ??????</option>
                      <option value="14">14 ??????</option>
                      <option value="15">15 ??????</option>
                      <option value="16">16 ??????</option>
                      <option value="17">17 ??????</option>
                      <option value="18">18 ??????</option>
                      <option value="19">19 ??????</option>
                      <option value="20">20 ??????</option>
                      <option value="21">21 ??????</option>
                      <option value="22">22 ??????</option>
                      <option value="23">23 ??????</option>
                      <option value="24">24 ??????</option>
                    </Form.Select>
                  </Col>
                  <Col>
                    <Form.Select
                      className="col-6 mt-3 mb-1"
                      aria-label="Default select example"
                      onChange={(e) => changeContinuousMinute(e)}
                      defaultValue={defaultContinuousTime.split(':')[1]}
                    >
                      <option>???</option>
                      <option value="00">00 ???</option>
                      <option value="15">15 ???</option>
                      <option value="30">30 ???</option>
                      <option value="45">45 ???</option>
                    </Form.Select>
                  </Col>
                </Row>
                <Row className="my-3">
                  <Col>
                    <Button
                      className="col-6"
                      variant="outline-primary"
                      type="submit"
                      data-tip="API: registerRsrv(...) ???????????????"
                      onClick={() => setShow(false)}
                    >
                      ???????????????
                    </Button>
                  </Col>
                  <Col>
                    <Button
                      className="col-6"
                      variant="primary"
                      type="submit"
                      data-tip="API: registerRsrv(...) ???????????????"
                      onClick={(e) => registerFacility(e)}
                    >
                      ?????????
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
