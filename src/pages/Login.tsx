import { useState } from 'react'
// import axios from 'axios'

import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import { Container } from 'react-bootstrap'
import ReactTooltip from 'react-tooltip'
// import { useHistory } from 'react-router'

function Login() {
  const [email, setEmail] = useState<string>('')
  const [password, setPassword] = useState<string>('')

  // const history = useHistory()

  // const headers = {
  //   'Content-Type': 'application/json',
  // }

  // const body = {
  //   email,
  //   password,
  // }

  function login() {
    console.log('login')
    // axios
    //   .post('https://raisetech-memo-api.herokuapp.com/api/login', body, {
    //     headers,
    //   })
    //   .then((res) => {
    //     console.log(res)
    //     const { data } = res
    //     console.log('token', data.access_token)
    //     localStorage.setItem('token', data.access_token)
    //     history.push('/Edit')
    //   })
    //   .catch((e) => {
    //     console.log(e)
    //   })
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
            <h3>予約サービス</h3>
          </div>
          <Form.Group controlId="formBasicEmail">
            <Form.Control
              type="email"
              className="rounded-0 rounded-top border-bottom-0"
              placeholder="メールアドレス"
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
            onClick={() => login()}
          >
            ログイン
          </Button>
          <Button
            variant="btn btn-outline-primary"
            type="button"
            className="w-100 mb-3"
            href="#"
            data-tip="現在は非対応です…。"
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