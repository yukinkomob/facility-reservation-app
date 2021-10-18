// export type PageType = 'edit' | 'list' | 'warehouse'
// interface onChangePageType {
//   (type: PageType): void

import { useHistory } from 'react-router'
import ReactTooltip from 'react-tooltip'

// }

// interface Props {
//   onNewTask: VoidFunction
//   onRecommendTask: VoidFunction
//   onChangePage: onChangePageType
// }

function Header() {
  const history = useHistory()

  return (
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
              onClick={() => history.push('/make_rsrv')}
              data-tip="予約登録ページへ（全ユーザ）"
              aria-hidden
            >
              <i className="far fa-sticky-note" /> 予約する
              <ReactTooltip effect="float" type="dark" place="bottom" />
            </li>
            <li
              id="list-"
              className="nav-item nav-link list-unstyled link-primary cursor-pointer link-purple-color"
              onClick={() => history.push('/rsrv_list')}
              data-tip="予約一覧ページへ（全ユーザ）"
              aria-hidden
            >
              <i className="fas fa-list" /> 予約を見る
              <ReactTooltip effect="float" type="dark" place="bottom" />
            </li>
            <li
              id="list-"
              className="nav-item nav-link list-unstyled link-primary cursor-pointer link-purple-color"
              onClick={() => history.push('/create_user')}
              data-tip="ユーザ登録ページへ（管理者のみ）"
              aria-hidden
            >
              <i className="fas fa-boxes" /> ユーザを登録
              <ReactTooltip effect="float" type="dark" place="bottom" />
            </li>
            <li
              id="list-"
              className="nav-item nav-link list-unstyled link-primary cursor-pointer link-purple-color"
              onClick={() => history.push('/user_list')}
              data-tip="予約一覧ページへ（管理者のみ）"
              aria-hidden
            >
              <i className="fas fa-hand-holding-heart" /> ユーザを見る
              <ReactTooltip effect="float" type="dark" place="bottom" />
            </li>
            <li
              id="list-"
              className="nav-item nav-link list-unstyled link-primary cursor-pointer link-purple-color"
              onClick={() => history.push('/usage_fee')}
              data-tip="料金明細ページへ（庶務係のみ）"
              aria-hidden
            >
              <i className="fas fa-hand-holding-heart" /> 料金を見る
              <ReactTooltip effect="float" type="dark" place="bottom" />
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
            <li className="nav-item dropdown link-secondary">
              <a
                className="nav-link dropdown-toggle link-secondary"
                href="http://www.google.com/"
                id="dropdown01"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                data-tip="本アプリの設計情報リンク（開発者）"
              >
                <i className="fas fa-user-cog" /> 設計情報
                <ReactTooltip effect="float" type="dark" place="bottom" />
              </a>
              <ul className="dropdown-menu" aria-labelledby="dropdown01">
                <li>
                  <h6 className="dropdown-header">準備資料</h6>
                </li>
                <li>
                  <a
                    className="dropdown-item link-primary"
                    href="https://docs.google.com/document/d/1-kFU7rRkBtfA0IBggwJ2HuQGoURDMNoelnOfSnYKO_o/edit?usp=sharing"
                    data-tip="主にチャンネルでの情報をメモ（開発者）"
                  >
                    <i className="fas fa-running" /> 課題覚え書き
                    <ReactTooltip effect="float" type="dark" place="bottom" />
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item link-primary"
                    href="https://drive.google.com/file/d/1mMyTRoarZ3Y-5BUZrI_eVyJYuUOmT9Ud/view?usp=sharing"
                    data-tip="配布された課題PDF（開発者）"
                  >
                    <i className="fas fa-running" /> 課題定義書
                    <ReactTooltip effect="float" type="dark" place="bottom" />
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item link-purple-color"
                    href="http://www.google.com/"
                    data-tip="ヒアリング結果を記載（開発者）"
                  >
                    <i className="fas fa-running" /> ヒアリング報告書
                    <ReactTooltip effect="float" type="dark" place="bottom" />
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <h6 className="dropdown-header">設計資料</h6>
                <li>
                  <a
                    className="dropdown-item link-purple-color"
                    href="http://www.google.com/"
                    data-tip="顧客要求を整理（開発者）"
                  >
                    <i className="fas fa-running" /> 要求仕様書
                    <ReactTooltip effect="float" type="dark" place="bottom" />
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item link-purple-color"
                    href="http://www.google.com/"
                    data-tip="要求を基に開発要件を作成（開発者）"
                  >
                    <i className="fas fa-running" /> 要件定義書
                    <ReactTooltip effect="float" type="dark" place="bottom" />
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item link-purple-color"
                    href="http://www.google.com/"
                    data-tip="システムの基本仕様（開発者）"
                  >
                    <i className="fas fa-running" /> 基本設計仕様書
                    <ReactTooltip effect="float" type="dark" place="bottom" />
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item link-purple-color"
                    href="http://www.google.com/"
                    data-tip="システムの詳細仕様（開発者）"
                  >
                    <i className="fas fa-laptop" /> 詳細設計仕様書
                    <ReactTooltip effect="float" type="dark" place="bottom" />
                  </a>
                </li>
                <li>
                  <hr className="dropdown-divider" />
                </li>
                <h6 className="dropdown-header">実装資料</h6>
                <li>
                  <a
                    className="dropdown-item link-purple-color"
                    href="http://www.google.com/"
                    data-tip="DB構成の設計（開発者）"
                  >
                    <i className="fas fa-laptop" /> DB設計資料
                    <ReactTooltip effect="float" type="dark" place="bottom" />
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item link-purple-color"
                    href="http://www.google.com/"
                    data-tip="バックエンドAPIの設計（開発者）"
                  >
                    <i className="fas fa-laptop" /> WebAPI設計資料
                    <ReactTooltip effect="float" type="dark" place="bottom" />
                  </a>
                </li>
                <li>
                  <a
                    className="dropdown-item link-purple-color"
                    href="http://www.google.com/"
                    data-tip="画面の設計（開発者）"
                  >
                    <i className="fas fa-laptop" /> 画面設計資料
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
}

export default Header
