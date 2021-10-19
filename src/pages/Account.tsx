import Header from 'components/Header'
import ReactTooltip from 'react-tooltip'

function Account() {
  return (
    <div>
      <Header />
      <div className="main-top container">
        <h1
          data-tip="このページは下記の仕様を満たす必要があります。<br />
          （仕様はなし）
          "
          data-for="title"
        >
          アカウント設定ページ
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

export default Account
