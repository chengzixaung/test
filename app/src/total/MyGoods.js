import React, { useEffect, useState } from 'react'
import { Tabs, ProductCard, Tag, Button } from 'react-vant'
import { SearchBar, NavBar } from '@nutui/nutui-react';
import './css/mygoods.min.css'
import { connect } from 'react-redux'
import { nanoid } from 'nanoid'
const MyGoods = (props) => {
    let index1 = props.location.search.slice(1).split('=')[1]
    index1 = Number(index1)
    const [index, setIndex] = useState(index1 ? index1 : 0)
    let res = props.goods.filter((item) => {
        if (index == 0) {
            return item
        } else if (index == 1) {
            if (item.desc == '待付款') {
                return item
            }
        } else if (index == 2) {
            if (item.desc == '待发货') {
                return item
            }
        }
    })
    const [data, setDate] = useState(res)
    const showitem = (tabIndex) => {
        let res = props.goods.filter((item) => {
            if (tabIndex == 0) {
                return item
            } else if (tabIndex == 1) {
                if (item.desc == '待付款') {
                    return item
                }
            } else if (tabIndex == 2) {
                if (item.desc == '待发货') {
                    return item
                }
            }
        })
       
        
        setDate(res)
    }


    return (
        <div>
            <NavBar
                className='navbar'
                title="我的订单"
                desc=""
                leftShow
                onClickTitle={(e) => console.log('我的订单')}
                onClickBack={() => { props.history.push('/total/my') }}
            />

            <div className='demo-tabs'>
                <Tabs align='start' active={index} onChange={(tabIndex) => { showitem(tabIndex) }} >
                    {['全部', '待付款', '代发货', '待收货', '待评价'].map(item => (
                        <Tabs.TabPane key={item} title={`${item}`}   >
                            {
                                data.length > 0 && data.map((item) => {
                                    return <div key={nanoid()}>
                                        <ProductCard
                                            className='mygoods_item'
                                            num={item.selectedNum}
                                            price={item.selectedSkuComb.price / 100}
                                            desc={`${item.desc}`}
                                            title={item.datali.title}
                                            thumb={item.datali.img}

                                        />
                                        <div className='card_bot' >
                                            <span>合计 &yen;{item.selectedSkuComb.price * item.selectedNum / 100}</span>
                                            <div>立即评价</div>
                                            <div>查看订单</div>
                                        </div>
                                    </div>
                                })
                            }

                        </Tabs.TabPane>
                    ))}
                </Tabs>

            </div>
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
        UPDATAGOODS: (action) => {
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(MyGoods)