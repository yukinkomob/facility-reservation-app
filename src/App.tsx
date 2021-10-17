import './App.css'
// import Header from './components/Header';
import Login from './pages/Login'
import CreateRsrv from './pages/CreateRsrv'
import RsrvList from './pages/RsrvList'

import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'

function App() {
  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Login />
        </Route>
        <Route path="/create">
          <CreateRsrv />
        </Route>
        <Route path="/list">
          <RsrvList />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
