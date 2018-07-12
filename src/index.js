import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import App from './components/App'
import Home from './containers/Home'
import Pen from './containers/Pen'
import registerServiceWorker from './registerServiceWorker'
import './index.css'

const routes = (
  <Router>
    <Switch>
      <App>
        <Route exact path='/' component={Home} />
        <Route exact path='/pen' component={Pen} />
        <Route exact path='/pen/:id' component={Pen} />
      </App>
    </Switch>
  </Router>
)

ReactDOM.render(routes, document.getElementById('root'))
registerServiceWorker()
