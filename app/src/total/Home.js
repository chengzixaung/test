import React, { useRef, useState, useEffect } from 'react'
import '../total/css/home.css'
import { Button, Cell, Sticky, SearchBar, Swiper, SwiperItem, NoticeBar, Grid, GridItem } from '@nutui/nutui-react'
import { connect } from 'react-redux'
import Nav from './Nav'

const Home = (props) => {
    const horseLamp2 = ['NoticeBar 公告栏', 'Cascader 级联选择', 'DatePicker 日期选择器', 'CheckBox 复选按钮']
    const [list, setList] = useState([])
    const [initPage1, setInitPage1] = useState(0)
    const [height, setHeight] = useState(150)
    useEffect(() => {
        let brr = []
        props.data.map((item) => {
            item.children.map((child) => {
                brr.push(child)
            })
        })
        setList(brr)
    }, [])
    const onChange = (e) => {
        // do something
    }
    const gotoSearch = () => {
        props.history.push('/total/search')
    }
    const gotodatali = (id) => {
        props.history.push(`/total/datali?id=${id}`)
    }
    return (
        <div className='home'>
            <SearchBar placeholder="输入商品名称" className='search' onFocus={gotoSearch} />

            <Swiper
                height={height}
                paginationColor="#426543"
                paginationBgColor='#426ddd'
                autoPlay="3000"
                initPage={initPage1}
                paginationVisible
                onChange={onChange}
            >
                <SwiperItem >
                    <img src="https://storage.360buyimg.com/jdc-article/NutUItaro34.jpg" alt="" />
                </SwiperItem>
                <SwiperItem >
                    <img src="https://storage.360buyimg.com/jdc-article/NutUItaro2.jpg" alt="" />
                </SwiperItem>
                <SwiperItem >
                    <img src="https://storage.360buyimg.com/jdc-article/welcomenutui.jpg" alt="" />
                </SwiperItem>
                <SwiperItem >
                    <img src="https://storage.360buyimg.com/jdc-article/fristfabu.jpg" alt="" />
                </SwiperItem>
            </Swiper>
            <NoticeBar
                direction="vertical"
                list={horseLamp2}
                speed={20}
                standTime={2000}
                leftIcon="https://img13.360buyimg.com/imagetools/jfs/t1/72082/2/3006/1197/5d130c8dE1c71bcd6/e48a3b60804c9775.png"
                onClick={(e) => {
                    console.log('listClick', e.target)
                }}
                onClickItem={(e, val) => {
                    console.log('dom', e.target)
                    console.log('value', val)
                }}
            />

            <div className='cenimg'>
                <img src={`${require('../img/5.jpg')}`} alt='加载中...' />
            </div>

            <Grid>
                <GridItem icon="dshop" text="美妆" />
                <GridItem icon="comment" text="口红" />
                <GridItem icon="service" text="餐饮" />
                <GridItem icon="jdl" text="美食" />
            </Grid>

            <div className='mation'>
                <div className='mation_left'>
                    <img src={`${require('../img/1.png')}`} alt='加载中...' />
                    <span>女神节特惠</span>
                </div>
                <div className='mation_right'>
                    <div className='mation_top'>
                        <p>
                            <span>新品来袭</span>
                            <br />
                            <small>护肤新妙招</small>
                        </p>
                        <img src={`${require('../img/1.png')}`} alt='加载中...' />
                    </div>
                    <div className='mation_bot'>
                        <p>
                            <span>新品来袭</span>
                            <br />
                            <small>护肤新妙招</small>
                        </p>
                        <img src={`${require('../img/1.png')}`} alt='加载中...' />
                    </div>
                </div>
            </div>
            
            <div className='hot_title'>
                ----限时活动----
            </div>
            <div className='home_list'>
                {
                    list.map((item) => {
                        return <div key={item.id} className='home_item'>
                            <div className='home_item_top'>
                                <img src={item.img} alt='加载中...' onClick={() => { gotodatali(item.id) }} />
                            </div>
                            <div className='home_item_bot'>
                                <p>{item.title}</p>
                                <p style={{ fontSize: '2rem', color: 'red' }}>&yen;{item.price}</p>
                            </div>
                        </div>
                    })
                }
            </div>

            <Nav></Nav>
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

    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Home)