import React, { lazy, Suspense } from 'react'
import { WithRouter, Link, BrowserRouter, Route, Switch, NavLink, Redirect } from 'react-router-dom'
import './css/total.min.css'
import { Provider } from 'react-redux'
import store from '../model/store'
import Home from './Home'
import Type from './Type'
import Shop from './Shop'
import My from './My'
import Datali from './Datali'
import Search from './Search'
import Lazy from './Lazy'
import MyGoods from './MyGoods'
const Total = () => {
    
    return (
        <div className='total'>
            <Provider store={store}>
                    <Route path='/total/home' component={Home}></Route>
                    <Route path='/total/type' component={Type}></Route>
                    <Route path='/total/shop' component={Shop}></Route>
                    <Route path='/total/my' component={My}></Route>
                    <Route path='/total/datali' component={Datali}></Route>
                    <Route path='/total/search' component={Search}></Route>
                    <Route path='/total/mygoods' component={MyGoods}></Route>
                    {localStorage.getItem('token')?<Redirect to='/total/home'></Redirect>:<Redirect to='/register'></Redirect>}
            </Provider>
        </div>
    )
}

export default Total