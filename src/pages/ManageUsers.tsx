// @ts-nocheck
import Header from 'components/Header'
import { Form, ListGroup } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import { useState, useEffect } from 'react'
import { defaultHeaders, callApiGet } from 'common/ApiWrapper'

interface Account {
  employee_id: number
  name: string
  furigana: string
  hub_id: number
  department_id: number
  tel: string
  email: string
  role_id: number
}

function ManageUsers() {
  const [accounts, setAccounts] = useState<Array<Account>>()

  useEffect(() => {
    callApiGet(
      '/account',
      defaultHeaders,
      (res: any) => {
        const accountList = new Array<Account>()
        for (const key in res.data) {
          accountList.push(res.data[key])
        }
        setAccounts(accountList)
      },
      (e: any) => {},
    )
  }, [])

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
        <Form>
          <Form.Control
            className="mt-4"
            type="text"
            placeholder="氏名、部署、電話番号で検索"
          />
        </Form>
        <ListGroup className="mt-5 mb-5">
          {accounts &&
            accounts.map((account: any) => {
              return (
                <ListGroup.Item>
                  <div>
                    ID: {account.employee_id} {account.name}
                  </div>
                  <div>拠点: 横浜本社、所属: 社長室、役割: 管理者</div>
                  <div>
                    TEL: {account.tel}、Email: {account.email}
                  </div>
                </ListGroup.Item>
              )
            })}
        </ListGroup>
      </div>
    </div>
  )
}

export default ManageUsers
