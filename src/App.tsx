import './App.css'
// import Header from './components/Header';
import Login from './pages/Login'
import MakeRsrv from 'pages/MakeRsrv'
import RsrvList from './pages/RsrvList'
import ManageUsers from './pages/ManageUsers'
import ManageFacilities from './pages/ManageFacilities'
import UsageFee from './pages/UsageFee'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import RsrvDetail from 'pages/RsrvDetail'

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
        <Route path="/rsrv_detail">
          <RsrvDetail />
        </Route>
        <Route path="/manage_users">
          <ManageUsers />
        </Route>
        <Route path="/manage_facilities">
          <ManageFacilities />
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
