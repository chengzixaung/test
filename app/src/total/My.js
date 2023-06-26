import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import './css/my.min.css'
import { NavBar, Uploader,Icon } from '@nutui/nutui-react';
import { Friends,Bill,SendGift,Shop,CartCircle } from '@react-vant/icons';
const My = (props) => {
  useEffect(() =>{
    {localStorage.getItem('token')?props.history.push('/total/my'):props.history.push('/register')}
  },[])
  const faces = function (e) {
    var list = e.target.files
    for (var i = 0; i < list.length; i++) {
      readfile(list[i
      ])
    }
  }
  function readfile(data) {
    var fr = new FileReader()
    fr.readAsDataURL(data)
    fr.onload = function () {
      var img = document.getElementById('face_img')
      img.src = fr.result
    }
  }
  const gogoods=(index)=>{
    props.history.push(`/total/mygoods?index=${index}`)
  }
  return (
    <div className='my'><NavBar
      className='navbar'
      title="我的"
      desc=""
      leftShow
      onClickTitle={(e) => console.log('搜索')}
      onClickBack={() => { props.history.push('/total/home') }}
    />
      <div className='my_top'>
        <div className='user_top'>
          <div className='user_top_left'>
            <div className='face'>
              <img className='my_img' id='face_img' src={`${require('../img/1.png')}`} alt='加载中...' />
              <input type='file' className='my_inpu' onChange={(e) => { faces(e) }} />
            </div>

            <div>
              <p><b>周晓明</b></p>
              <p><small>身份: VIP</small></p>
            </div>
          </div>
          <div className='user_top_right'>
            <p>我要加盟</p>
          </div>
        </div>
        <div className='user_bot'>
          <div className='user_bot_noe'>
            <div className='my_icon'><Friends />我的资产</div>
            <div>收益中&gt;</div>
          </div>
          <div className='user_bot_two'>
            <span>消费投资</span>
            <span>10986.00</span>
            <span>商户钱包</span>
            <span>9689.00</span>
          </div>
          <div className='user_bot_two'>
            <span>消费收益</span>
            <span>999.00</span>
            <span>消费养老</span>
            <span>9899.00</span>
          </div>
          <div className='user_bot_thr'>
            <div>商户充值&gt;</div>
          </div>
        </div>
      </div>
      <div className='awit'>
          <div className='awit_top'>
            <p><b>我的订单</b></p>
            <p onClick={()=>{gogoods(0)}}>全部&gt;</p>
          </div>
          <div className='awit_bot'>
            <div className='awit_bot_item' onClick={()=>{gogoods(1)}}>
            <Bill  />
            <p>待付款</p>
            </div>
            <div className='awit_bot_item' onClick={()=>{gogoods(2)}}>
            <CartCircle  />
            <p>待发货</p>
            </div>
            <div className='awit_bot_item' onClick={()=>{gogoods(3)}}>
            <Shop  />
            <p>待收货</p>
            </div>
            <div className='awit_bot_item' onClick={()=>{gogoods(4)}}>
            <SendGift  />
            <p>待评价</p>
            </div>
          </div>
      </div>
      <div className='awit abt'>
          <div className='awit_top '>
            <p><b>我的服务</b></p>
          </div>
          <div className='awit_bot abot '>
            <div className='awit_bot_item'>
            <Bill  />
            <p>商品收藏</p>
            </div>
            <div className='awit_bot_item'>
            <CartCircle  />
            <p>客服热线</p>
            </div>
            <div className='awit_bot_item'>
            <Shop  />
            <p>我的金币</p>
            </div>
            <div className='awit_bot_item'>
            <SendGift  />
            <p>收货地址</p>
            </div>
          </div>
          <div className='awit_bot abot'>
            <div className='awit_bot_item'>
            <Bill  />
            <p>赚钱攻略</p>
            </div>
            <div className='awit_bot_item'>
            <CartCircle  />
            <p>好友管理</p>
            </div>
            <div className='awit_bot_item'>
            <Shop  />
            <p>我的二维码</p>
            </div>
            <div className='awit_bot_item'>
            <SendGift  />
            <p>关于我们</p>
            </div>
          </div>
      </div>
      <Nav></Nav>
    </div>
  )
}

export default My