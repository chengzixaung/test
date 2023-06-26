import React from 'react'
import { WapHomeO ,AppsO,CartO,UserO} from '@react-vant/icons';
import { WithRouter, Link, BrowserRouter, Route, Switch, NavLink } from 'react-router-dom'
import './css/nav.min.css'
const Nav = () => {
    return (
        <div className='nav'>
            <NavLink className='nav_icon' to='/total/home' ><WapHomeO  /><span>首页</span></NavLink>
            <NavLink className='nav_icon' to='/total/type' > <AppsO  /><span>分类</span></NavLink>
            <NavLink className='nav_icon' to='/total/shop' ><CartO  /><span>购物车</span></NavLink>
            <NavLink className='nav_icon' to='/total/my' ><UserO  /><span>我的</span></NavLink>
        </div>
    )
}

export default Nav