import Header from 'components/Header'
import { Button, Col, Form, Row } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'

function MakeRsrv() {
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
            aria-label="Default select example"
          >
            <option>拠点を選択してください。</option>
            <option value="1">横浜本社</option>
            <option value="2">大阪</option>
            <option value="3">広島</option>
            <option value="4">福岡</option>
            <option value="5">仙台</option>
            <option value="6">札幌</option>
            <option value="7">高松</option>
            <option value="8">新潟</option>
          </Form.Select>
          <Form.Select
            className="col-6 mb-1"
            aria-label="Default select example"
          >
            <option>施設を選択してください。</option>
            <option value="1">2F小会議室A</option>
            <option value="2">2F小会議室B</option>
            <option value="3">2F中会議室C</option>
            <option value="4">3F面談室D</option>
            <option value="5">3F面談室E</option>
            <option value="6">4F中会議室F</option>
            <option value="7">4F大会議室G</option>
            <option value="8">5F全体ホールH</option>
          </Form.Select>
          <Form.Text>
            選択した施設の利用料金は、1時間あたり 1,500 円です。
          </Form.Text>
          <Form.Control className="mt-3" type="text" placeholder="タイトル" />
          <Row className="align-items-center">
            <Col>
              <Form.Label column lg={2}>
                予約開始日時
              </Form.Label>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
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
              <Form.Label column lg={2}>
                予約終了日時
              </Form.Label>
            </Col>
            <Col>
              <Form.Select
                className="col-6 mt-3 mb-1"
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
          <Form.Text>
            選択した施設の利用料金は、〇時間のご利用で 計 〇〇〇 円です。
          </Form.Text>
          <br />
          <Form.Label column="lg" lg={2}>
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
              <Form.Check label="参加者情報を非公開にする" />
            </Col>
          </Form.Group>
          <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
            <Form.Label>備考欄</Form.Label>
            <Form.Control as="textarea" rows={3} />
          </Form.Group>
        </Form>
        <Row className="align-items-center">
          <Col>
            <Button className="col-6" variant="primary" type="submit">
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
