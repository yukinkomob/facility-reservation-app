// export type PageType = 'edit' | 'list' | 'warehouse'
// interface onChangePageType {
//   (type: PageType): void

import ReactTooltip from 'react-tooltip'

// }

// interface Props {
//   onNewTask: VoidFunction
//   onRecommendTask: VoidFunction
//   onChangePage: onChangePageType
// }

const Header = () => (
  <nav className="navbar navbar-expand-md navbar bg-light border fixed-top">
    <div className="container-fluid">
      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="http://www.google.com/navbarsExampleDefault"
        aria-controls="navbarsExampleDefault"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon" />
      </button>

      <div className="collapse navbar-collapse" id="navbarsExampleDefault">
        <ul className="navbar-nav me-auto mb-2 mb-md-0">
          <li
            id="list-"
            className="nav-item nav-link list-unstyled link-primary cursor-pointer link-purple-color"
            data-tip="予約登録ページへ（全ユーザ）"
            aria-hidden
          >
            <i className="far fa-sticky-note" /> 予約する
            <ReactTooltip effect="float" type="dark" place="bottom" />
          </li>
          <li
            id="list-"
            className="nav-item nav-link list-unstyled link-primary cursor-pointer link-purple-color"
            data-tip="予約一覧ページへ（全ユーザ）"
            aria-hidden
          >
            <i className="fas fa-list" /> 予約を見る
            <ReactTooltip effect="float" type="dark" place="bottom" />
          </li>
          <li
            id="list-"
            className="nav-item nav-link list-unstyled link-primary cursor-pointer link-purple-color"
            data-tip="ユーザ登録ページへ（管理者のみ）"
            aria-hidden
          >
            <i className="fas fa-boxes" /> ユーザを登録
            <ReactTooltip effect="float" type="dark" place="bottom" />
          </li>
          <li
            id="list-"
            className="nav-item nav-link list-unstyled link-primary cursor-pointer link-purple-color"
            data-tip="予約一覧ページへ（管理者のみ）"
            aria-hidden
          >
            <i className="fas fa-hand-holding-heart" /> ユーザを見る
            <ReactTooltip effect="float" type="dark" place="bottom" />
          </li>
          <li className="nav-item">
            <a
              className="nav-link link-purple-color"
              href="https://suzuri.jp/Miimo/"
              data-tip="料金明細ページへ（庶務係のみ）"
            >
              <i className="fas fa-store" /> 料金を見る
              <ReactTooltip effect="float" type="dark" place="bottom" />
            </a>
          </li>
          <li className="nav-item dropdown link-purple-color">
            <a
              className="nav-link dropdown-toggle link-purple-color"
              href="http://www.google.com/"
              id="dropdown01"
              data-bs-toggle="dropdown"
              aria-expanded="false"
              data-tip="各種設定（全ユーザ）"
            >
              <i className="fas fa-user-cog" /> 設定
              <ReactTooltip effect="float" type="dark" place="bottom" />
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdown01">
              <li>
                <a
                  className="dropdown-item link-purple-color"
                  href="http://www.google.com/"
                  data-tip="ログアウト（全ユーザ）"
                >
                  <i className="fas fa-sign-out-alt" /> ログアウト
                  <ReactTooltip effect="float" type="dark" place="bottom" />
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item link-purple-color"
                  href="http://www.google.com/"
                  data-tip="アカウント設定（全ユーザ）（不要かも）"
                >
                  <i className="fas fa-cog" /> アカウント設定
                  <ReactTooltip effect="float" type="dark" place="bottom" />
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item link-purple-color"
                  href="http://www.google.com/"
                  data-tip="ヘルプ（全ユーザ）（不要かも）"
                >
                  <i className="fas fa-running" /> ヘルプ
                  <ReactTooltip effect="float" type="dark" place="bottom" />
                </a>
              </li>
              <li>
                <a
                  className="dropdown-item link-purple-color"
                  href="http://www.google.com/"
                  data-tip="アプリバージョンなど（全ユーザ）（不要かも）"
                >
                  <i className="fas fa-laptop" /> このアプリについて
                  <ReactTooltip effect="float" type="dark" place="bottom" />
                </a>
              </li>
            </ul>
          </li>
        </ul>
      </div>
    </div>
  </nav>
)

export default Header
