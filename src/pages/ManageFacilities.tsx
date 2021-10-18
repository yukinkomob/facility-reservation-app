import Header from 'components/Header'
import ReactTooltip from 'react-tooltip'

function ManageFacilities() {
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
      </div>
    </div>
  )
}

export default ManageFacilities
