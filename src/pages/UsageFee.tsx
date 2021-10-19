import Header from 'components/Header'
import { Col, Form, ListGroup, Row } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'

function UsageFee() {
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
                >
                  <option>部署を選択してください</option>
                  <option value="株主総会">株主総会</option>
                  <option value="取締役会">取締役会</option>
                  <option value="社長室">社長室</option>
                  <option value="営業統括部">営業統括部</option>
                  <option value="営業統括部本社営業部">
                    営業統括部本社営業部
                  </option>
                  <option value="営業統括部大阪営業部">
                    営業統括部大阪営業部
                  </option>
                  <option value="営業統括部広島営業部">
                    営業統括部広島営業部
                  </option>
                  <option value="営業統括部福岡営業部">
                    営業統括部福岡営業部
                  </option>
                  <option value="営業統括部仙台営業部">
                    営業統括部仙台営業部
                  </option>
                  <option value="営業統括部札幌営業部">
                    営業統括部札幌営業部
                  </option>
                  <option value="営業統括部高松営業部">
                    営業統括部高松営業部
                  </option>
                  <option value="営業統括部新潟営業部">
                    営業統括部新潟営業部
                  </option>
                  <option value="監査部">監査部</option>
                  <option value="管理部">管理部</option>
                  <option value="業務支援部">業務支援部</option>
                  <option value="システム部">システム部</option>
                  <option value="経営企画部">経営企画部</option>
                </Form.Select>
              </Col>
            </Col>
          </Row>
        </Form>
        <ListGroup className="my-5">
          <h3 className="my-3">利用料金総計：〇〇〇〇 円</h3>
          <ListGroup.Item>
            <div>拠点名：〇〇、施設名：〇〇、利用者名：〇〇 〇〇</div>
            <div>利用時間帯：DD:DD～DD:DD</div>
            <div>利用時間：〇時間〇分、利用料金：dddd 円</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>拠点名：〇〇、施設名：〇〇、利用者名：〇〇 〇〇</div>
            <div>利用時間帯：DD:DD～DD:DD</div>
            <div>利用時間：〇時間〇分、利用料金：dddd 円</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>拠点名：〇〇、施設名：〇〇、利用者名：〇〇 〇〇</div>
            <div>利用時間帯：DD:DD～DD:DD</div>
            <div>利用時間：〇時間〇分、利用料金：dddd 円</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>拠点名：〇〇、施設名：〇〇、利用者名：〇〇 〇〇</div>
            <div>利用時間帯：DD:DD～DD:DD</div>
            <div>利用時間：〇時間〇分、利用料金：dddd 円</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>拠点名：〇〇、施設名：〇〇、利用者名：〇〇 〇〇</div>
            <div>利用時間帯：DD:DD～DD:DD</div>
            <div>利用時間：〇時間〇分、利用料金：dddd 円</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>拠点名：〇〇、施設名：〇〇、利用者名：〇〇 〇〇</div>
            <div>利用時間帯：DD:DD～DD:DD</div>
            <div>利用時間：〇時間〇分、利用料金：dddd 円</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>拠点名：〇〇、施設名：〇〇、利用者名：〇〇 〇〇</div>
            <div>利用時間帯：DD:DD～DD:DD</div>
            <div>利用時間：〇時間〇分、利用料金：dddd 円</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>拠点名：〇〇、施設名：〇〇、利用者名：〇〇 〇〇</div>
            <div>利用時間帯：DD:DD～DD:DD</div>
            <div>利用時間：〇時間〇分、利用料金：dddd 円</div>
          </ListGroup.Item>
          <ListGroup.Item>
            <div>拠点名：〇〇、施設名：〇〇、利用者名：〇〇 〇〇</div>
            <div>利用時間帯：DD:DD～DD:DD</div>
            <div>利用時間：〇時間〇分、利用料金：dddd 円</div>
          </ListGroup.Item>
        </ListGroup>
      </div>
    </div>
  )
}

export default UsageFee
