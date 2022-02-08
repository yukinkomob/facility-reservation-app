import { useState } from 'react'
import axios from 'axios'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
import { useHistory } from 'react-router'
// import history from '../history'
// import { useHistory } from 'react-router'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  const history = useHistory()

  // const history = useHistory()

  const headers = {
    'Content-Type': 'application/json',
    'Access-Control-Allow-Origin': 'facility-reserve-api.vercel.app',
  }

  const body = {
    employee_id: email,
    password,
  }

  function doLogin() {
    console.log('login')
    axios
      .post('https://desolate-gorge-20881.herokuapp.com/api/login', body, {
        headers,
      })
      .then((res) => {
        console.log(res)
        const { data } = res
        console.log('token', data.access_token)
        localStorage.setItem('token', data.access_token)
        history.push('/rsrv_list')
      })
      .catch((e) => {
        console.log(e)
      })
  }

  function changeEmail(e: any) {
    const newEmail = e.currentTarget.value
    setEmail(newEmail)
  }

  function changePassword(e: any) {
    const newPassword = e.currentTarget.value
    setPassword(newPassword)
  }

  return (
    <div>
      <Container
        className="position-absolute top-50 start-50 translate-middle"
        style={{ width: '18rem' }}
      >
        <Form>
          <div className="text-center mb-3">
            <h3
              data-tip="このページは下記の仕様を満たす必要があります。<br />
              ・従業員は、社員IDとパスワード（本システム用）を用いてログインできるように<br />して欲しい。<br />
              ・予約者、管理者、庶務係のログイン方法は同一とし、ログイン後のメニューで役<br />割毎の機能が選択できるようにして欲しい。<br />
              "
              data-for="title"
            >
              <img width="140px" src="/logo.png" alt="logo" />
              <ReactTooltip
                id="title"
                effect="float"
                type="dark"
                place="bottom"
                multiline={true}
              />
            </h3>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="text"
              className="rounded-0 rounded-top border-bottom-0"
              placeholder="社員ID"
              value={email}
              onChange={(e: any) => changeEmail(e)}
            />
          </Form.Group>

          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Control
              type="password"
              className="rounded-0 rounded-bottom"
              placeholder="パスワード"
              value={password}
              onChange={(e: any) => changePassword(e)}
            />
          </Form.Group>
          <Button
            variant="null"
            type="button"
            className="w-100 mb-2 btn btn-primary"
            onClick={() => doLogin()}
            data-tip="API: login(id, password)"
          >
            ログイン
            <ReactTooltip effect="float" type="dark" place="bottom" />
          </Button>
          <Button
            variant="btn btn-outline-primary"
            type="button"
            className="w-100 mb-3"
            href="#"
            data-tip="これは不要かも…。"
          >
            新規登録
            <ReactTooltip effect="float" type="dark" place="bottom" />
          </Button>
        </Form>
      </Container>
    </div>
  )
}

export default Login
