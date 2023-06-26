import React, { useEffect, useState } from 'react'
import { SearchBar, NavBar } from '@nutui/nutui-react';
import { connect } from 'react-redux'
import '../total/css/search.min.css'
import { SEARCHRES } from '../model/action'
const Search = (props) => {
    const search = (val) => {

        let arr = []
        props.data.forEach(element => {
            element.children.filter((item) => {
                item.title.includes(val) && arr.push({ id: item.id, type: element.type, children: [item] })
            })
        })
        props.SEARCHRES(SEARCHRES(arr))
    }
    return (
        <div className='searchs'>
            <NavBar
                className='navbar'
                title="搜索"
                desc=""
                leftShow
                onClickTitle={(e) => console.log('搜索')}
                onClickBack={()=>{props.history.push('/total/home')}}
            />
            <SearchBar label="" actionText="搜索" onSearch={search} clearable />
            <div className='search_main'>
                {
                    props.search.length > 0 ?
                        props.search.map((item) => {
                            return <div className='search_list' key={item.id}>
                                {
                                    item.children.map((child) => {
                                        return <div className='search_item' key={child.id}>
                                            <img src={child.img} alt='加载中...' />
                                            <p>{child.title}</p>
                                            <p style={{ color: 'red', fontSize: '2rem' }}>&yen;{child.price}</p>
                                        </div>
                                    })
                                }
                            </div>
                        }) : props.data.map((item) => {
                            return <div className='search_list' key={item.id}>
                                {
                                    item.children.map((child) => {
                                        return <div className='search_item' key={child.id}>
                                            <img src={child.img} alt='加载中...' />
                                            <p>{child.title}</p>
                                            <p style={{ color: 'red', fontSize: '2rem' }}>&yen;{child.price}</p>
                                        </div>
                                    })
                                }
                            </div>
                        })

                }
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
        SEARCHRES: (action) => {
            dispatch(action)
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(Search)