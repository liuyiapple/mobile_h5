import { Router, Route, Switch, Redirect } from 'react-router-dom'
import Layout from '@/pages/Layout'
import Login from '@/pages/Login'
import './App.scss'
import { customHistory } from './utils/history'
const App = () => {
  return (
    <Router history={customHistory}>
      <div className="app">
        <Switch>
          <Route
            path="/"
            exact
            render={() => <Redirect to={'/home'} />}
          ></Route>
          <Route path={'/home'} component={Layout}></Route>
          <Route path={'/login'} component={Login}></Route>
        </Switch>
      </div>
    </Router>
  )
}

export default App
