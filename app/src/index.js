import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import Nav from './total/Nav'
import Home from './total/Home'
import Total from './total/Total'
import '@nutui/nutui-react/dist/style.css'
import store from './model/store'
import Login from './Login'
import Register from './Register'
import { WithRouter, Link, BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'
(function () {
  setrem()
  window.onresize = function () {
    setrem()
  }
  function setrem() {
    var bili = document.body.clientWidth * 10 / 375
    bili = Math.ceil(bili)
    document.documentElement.style.fontSize = bili + 'px'
  }
})()

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <div>
    
    <BrowserRouter>
      <Switch>
        <Route path='/register' component={Register}></Route>
        <Route path='/login' component={Login}></Route>
        <Total></Total>
      </Switch>
    </BrowserRouter>
  </div>
)