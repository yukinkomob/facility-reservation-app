import Header from 'components/Header'
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
      </div>
    </div>
  )
}

export default UsageFee