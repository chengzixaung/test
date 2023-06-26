import React, { useEffect, useState, useRef } from 'react'
import './css/datali.min.css'
import { SearchBar, NavBar } from '@nutui/nutui-react';
import { connect } from 'react-redux'
import { Icon } from '@nutui/nutui-react';
import { Sku, Button, Toast, } from 'react-vant';

import { ADDCARD, ADDGOODS, DELSHOP, UPDATAGOODS } from '../model/action'
const Datali = (props) => {

    const addcard = (v, o) => {
        let newobj = obj[0]
        props.ADDCARD(ADDCARD(Object.assign({ datali: newobj }, { ...v })))
        props.UPDATAGOODS(UPDATAGOODS(Object.assign({ datali: newobj }, { ...v }, { desc: '待付款' })))
        props.history.push('/total/shop')
    }
    const settlement = (v, o) => {
        let objs = o[0]
        let newobj = Object.assign({ datali: objs }, { ...v })
        newobj.desc = '待发货'
        let bigarr = [newobj]
        props.ADDGOODS(ADDGOODS(bigarr))
        props.history.push('/total/mygoods')
    }
    const ref = useRef(null);
    const [obj, setObj] = useState([])
    useEffect(() => {
        let id = props.location.search.slice(1).split('=')[1]
        props.data.map((item) => {
            item.children.map((child) => {
                child.id == id && setObj([child])
            })
        })
    }, [])
    return (
        <div>
            <NavBar
                className='navbar'
                title="详情信息"
                desc=""
                leftShow
                onClickTitle={(e) => console.log('详情')}
                onClickBack={() => { props.history.push('/total/home') }}
            />

            {
                obj.length > 0 && obj.map((item) => {
                    return <div key={item.id}>
                        <img src={item.img} alt='' style={{ width: '100vw', height: '30rem' }} />
                        <b>{item.title}</b>
                        <br />
                        <b style={{ color: 'red' }}>&yen;{item.price}</b>
                        <div className='settlement'>
                            <p>
                                <Icon name="message"></Icon>
                                客服
                            </p>
                            <p>
                                <Icon name="cart2"></Icon>
                                投资
                            </p>
                            <p>
                                <Icon name="follow"></Icon>
                                收藏
                            </p>
                            <Button
                                className='btn1'
                                block
                                type="primary"
                                color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
                                style={{ marginBottom: 10 }}
                                onClick={() => ref.current?.show()}

                            >
                                加入购物车
                            </Button>


                            {
                                obj.length > 0 && <Sku
                                    
                                    ref={ref}
                                    sku={obj[0].mation.sku}
                                    goods={obj[0].mation.goods_info}
                                    goodsId={obj[0].mation.goods_id}
                                    onAddCart={(value) => { addcard(value, obj) }}
                                    onBuyClicked={(value) => { settlement(value, obj) }}
                                />
                            }
                            <Button
                                className='btn2'
                                block
                                type="primary"
                                color="linear-gradient( 135deg, #3f45ff 10%, #7367F0 100%)"
                                style={{ marginBottom: 10 }}
                                onClick={() => ref.current?.show()}
                            >
                                立即购买
                            </Button>
                        </div>
                    </div>
                })
            }

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
        ADDCARD: (action) => {
            dispatch(action)
        },
        DELSHOP: (action) => {
            dispatch(action)
        },
        ADDGOODS: (action) => {
            dispatch(action)
        },
        UPDATAGOODS: (action) => {
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Datali)