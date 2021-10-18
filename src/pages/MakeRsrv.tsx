import Header from 'components/Header'
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
      </div>
    </div>
  )
}

export default MakeRsrv
