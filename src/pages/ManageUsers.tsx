import Header from 'components/Header'
import ReactTooltip from 'react-tooltip'

function ManageUsers() {
  return (
    <div>
      <Header />
      <div className="main-top container">
        <h1
          data-tip="このページは下記の仕様を満たす必要があります。<br />
          ・施設を予約した従業員が所属している部署毎に施設利用料金を計算（月ごと）できる<br />ようにしたい。<br />
          ・施設予約情報には、予約者情報（部署、電話番号）、予約対象施設詳細（拠点名、施<br />設名、利用料金（１時間あたり））、予約情報（タイトル、開始日時、終了日<br />時）、参加者情報（氏名、会社名）、備考を含められるようにしたい。<br />
          ・予約者、管理者、庶務係のログイン方法は同一とし、ログイン後のメニューで役割毎<br />の機能が選択できるようにして欲しい。<br />
          ・将来的に人事システム（部門、社員情報を管理）と連携したい。<br />
          "
          data-for="title"
        >
          ユーザ管理ページ
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

export default ManageUsers
