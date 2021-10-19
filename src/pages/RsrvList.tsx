import Header from 'components/Header'
import { Col, Form, ListGroup, Row } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'

function RsrvList() {
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
            <option value="1">2F小会議室A (1,500 円 / 時間)</option>
            <option value="2">2F小会議室B (1,500 円 / 時間)</option>
            <option value="3">2F中会議室C (2,500 円 / 時間)</option>
            <option value="4">3F面談室D (1,000 円 / 時間)</option>
            <option value="5">3F面談室E (1,000 円 / 時間)</option>
            <option value="6">4F中会議室F (2,500 円 / 時間)</option>
            <option value="7">4F大会議室G (3,500 円 / 時間)</option>
            <option value="8">5F全体ホールH (5,000 円 / 時間)</option>
          </Form.Select>
          <Row className="align-items-center">
            <Col>
              <Form.Label column lg={2}>
                予約日
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
          </Row>
        </Form>
        <ListGroup className="mt-5">
          <h3>〇年〇月〇日　〇〇拠点　〇〇室　予約一覧</h3>
          <ListGroup.Item>
            <div>予約者：営業統括部本社営業部　中富太郎（090-2244-7755）</div>
            <div>予約時間帯：9:00-11:00</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>予約者：管理部　加藤次郎（090-1234-6644）</div>
            <div>予約時間帯：13:00-15:00</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>予約者：システム部　玉出三郎（090-9089-0135）</div>
            <div>予約時間帯：19:00-21:00</div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}

export default RsrvList
