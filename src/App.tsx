import './App.css'
// import Header from './components/Header';
import Login from './pages/Login'
import MakeRsrv from './pages/MakeRsrv'
import RsrvList from './pages/RsrvList'
import CreateUser from './pages/CreateUser'
import UserList from './pages/UserList'
import UsageFee from './pages/UsageFee'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route path="/make_rsrv">
          <MakeRsrv />
        </Route>
        <Route path="/rsrv_list">
          <RsrvList />
        </Route>
        <Route path="/create_user">
          <CreateUser />
        </Route>
        <Route path="/user_list">
          <UserList />
        </Route>
        <Route path="/usage_fee">
          <UsageFee />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
