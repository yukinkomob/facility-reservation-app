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
        <Route path="/create">
          <CreateRsrv />
        </Route>
        <Route path="/list">
          <RsrvList />
        </Route>
        <Route exact path="/">
          <Login />
        </Route>
      </Switch>
    </Router>
  )
}

export default App
