import React, { useState, useEffect } from 'react'
import Nav from './Nav'
import { connect } from 'react-redux'
import './css/shop.min.css'
import { SearchBar, NavBar } from '@nutui/nutui-react';
import { ADDNUM, DESC, DEL, ADDGOODS, DELSHOP, UPDATAGOODS, DELITEM } from '../model/action'
import Lazy from './Lazy';
import { SwipeCell, Flex, Button, Image, Typography, SubmitBar, Checkbox } from 'react-vant';
const Shop = (props) => {
  useEffect(() =>{

    { localStorage.getItem('token') ? props.history.push('/total/shop') : props.history.push('/register') }
  },[])
  const [value, setValue] = useState(0)
  let [price, setPrice] = useState(0)
  const [brr, setBrr] = useState([])
  const addnum = (id, index) => {
    props.card.forEach(element => {
      if (element.selectedSkuComb.id == id) {
        setPrice(price += element.selectedSkuComb.price)
      }
    })
    props.ADDNUM(ADDNUM(id, index))
    setValue(props.card[index].selectedNum)

  }
  const changestate = (e, item) => {

    let id = item.datali.id
    let shopid = item.selectedSkuComb.id
    let arr = [...brr]
    if (e.target.checked) {
      arr.push(id)
      setBrr(arr)
      props.card.forEach(element => {
        if (element.selectedSkuComb.id == shopid) {
          setPrice(price += element.selectedSkuComb.price * element.selectedNum)
        }
      })
    } else {
      props.card.forEach(element => {
        if (element.selectedSkuComb.id == shopid) {
          setPrice(price -= element.selectedSkuComb.price * element.selectedNum)
        }
      })
      arr = arr.filter((item) => {
        return item != id
      })
      setBrr(arr)
    }
    let res = props.card.filter((item) => {
      return arr.includes(item.datali.id)
    })

  }
  const sub = () => {
    let res = props.card.filter(item => {
      if (brr.includes(item.datali.id)) {
        item.desc = '待发货'
        return item
      }
    })
    let newarr = props.card.filter(item => {
      if (!brr.includes(item.datali.id)) {
        item.desc = '待付款'
        return item
      }
    })
    props.ADDGOODS(ADDGOODS(res))
    props.DELITEM(DELITEM(res))
    props.DELSHOP(DELSHOP(newarr))
    props.history.push('/total/mygoods')
  }
  const desc = (id, index) => {
    if (props.card[index].selectedNum > 0) {
      props.card.forEach(element => {
        if (element.selectedSkuComb.id == id) {
          setPrice(price -= element.selectedSkuComb.price)
        }
      })
    }
    props.DESC(DESC(id, index))
    setValue(props.card[index].selectedNum)
  }
  const checkall = (e) => {


    let arr = []
    if (e) {
      props.card.map((item) => {
        arr.push(item.datali.id)
      })
      setBrr(arr)
    } else {
      setBrr(arr)
    }
    props.card.forEach(element => {
      let res = props.card.filter((item) => {
        if (arr.includes(element.datali.id)) {
          setPrice(price += item.selectedSkuComb.price)

          return item
        }
      })
      if (arr.length == 0) {
        setPrice(0)
      }
    })
  }
  const deldom = (id) => {
    let num = 0
    let rs = props.card.filter((item) => {
      return item.datali.id != id
    })
    props.DEL(DEL(rs))
    let res = props.card.filter((item) => {
      if (brr.includes(item.datali.id)) {
        setPrice(num += item.selectedSkuComb.price)
        num += item.selectedSkuComb.price
        return item
      }
    })
    if (brr.length == 0) {
      setPrice(0)
    }
  }
  return (
    <div className='shop'>
      {props.card.length == 0 ? <div><Lazy></Lazy><Nav></Nav></div> : <div>
        <NavBar
          className='navbar'
          title="购物车"
          desc=""
          leftShow
          onClickTitle={(e) => console.log('搜索')}
          onClickBack={() => { props.history.push('/total/home') }}
        />
        {
          props.card.length > 0 && props.card.map((item, index) => {
            return <div key={item.datali.id} className='shop_lists' >
              <input type='checkbox' checked={brr.includes(item.datali.id)} className='checkb' onChange={(e) => { changestate(e, item) }} />
              <SwipeCell
                rightAction={
                  <Button style={{ height: '100%' }} square type="danger" onClick={() => { deldom(item.datali.id) }}>
                    删除
                  </Button>
                }
              >
                <Flex className="demo-product-card" align="stretch">
                  <Image src={item.datali.img} className="demo-product-card__img" />
                  <Flex direction="column" justify="between" className="demo-product-card__content">
                    <div>
                      <Typography.Title level={5}>{item.datali.title}</Typography.Title>
                    </div>
                    <Flex justify="between" align="center">
                      <Typography.Text strong size="lg">
                        <span style={{ color: 'red' }}>&yen;{item.selectedSkuComb.price / 100}</span>
                      </Typography.Text>
                      <Typography.Text size="sm" type="secondary">
                        <button className='shop_bt1' onClick={() => { desc(item.selectedSkuComb.id, index) }}>-</button>
                        <input className='shop_inpu' type='text' value={item.selectedNum} readOnly />
                        <button className='shop_bt2' onClick={() => { addnum(item.selectedSkuComb.id, index) }}>+</button>
                      </Typography.Text>
                    </Flex>
                  </Flex>
                </Flex>
              </SwipeCell>
            </div>
          })
        }
        <div className="demo-submit-bar">
          <SubmitBar

            onSubmit={() => { sub() }}
            price={price}
            buttonText="提交订单"
          >
            <Checkbox onChange={(e) => { checkall(e) }} checked={brr.length == props.card.length && brr.length != 0}>全选</Checkbox>
          </SubmitBar>
        </div>
        <Nav></Nav></div>}
    </div>
  )
}
const mapStateToProps = (state) => {
  return {
    ...state
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    ADDNUM: (action) => {
      dispatch(action)
    },
    DESC: (action) => {
      dispatch(action)
    },
    DEL: (action) => {
      dispatch(action)
    },
    ADDGOODS: (action) => {
      dispatch(action)
    },
    DELSHOP: (action) => {
      dispatch(action)
    },
    UPDATAGOODS: (action) => {
      dispatch(action)
    },
    DELITEM: (action) => {
      dispatch(action)
    }
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Shop)