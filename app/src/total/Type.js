import React, { Fragment, useState } from 'react'
import Nav from './Nav'
import './css/type.min.css'
import { connect } from 'react-redux'
import { Elevator } from '@nutui/nutui-react'
import { nanoid } from 'nanoid'
const Type = (props) => {
  let [dex, setDex] = useState(0)
  const lscroll = (index) => {
    let doms = document.querySelectorAll('.right_main')
    let main = document.querySelector('.type_right')

    main.scrollTo({
      top: doms[index].offsetTop,
      behavior: 'smooth'
    })
    setDex(index)
  }
  const move = (e) => {
    let big = document.querySelector('.type_right')
    let spans = document.querySelectorAll('.right_main')
    spans.forEach((item,index) => {
      if (big.scrollTop >= item.offsetTop) {
        setDex(index)
      }
    })
  }
  return (
    <div className='type'>
      <div className='type_left'>
        {
          props.data.map((item, index) => {
            return <div key={item.id}>
              <div className={dex == index ? 'type_left_item active' : 'type_left_item'} onClick={() => { lscroll(index) }}>
                {item.type}
              </div>
            </div>
          })
        }
      </div>
      <div className='type_right' onTouchMove={(e) => { move(e) }}>
        {
          props.data.map((item) => {
            return <div key={nanoid()}>
              <div className='right_main'>
                <h3>{item.type}</h3>
                <div className='test'>
                  {
                    item.children.map((child) => {
                      return <div key={nanoid()} className='right_auto'>
                        <div className='right_item'>
                          <img src={child.img} alt='' />
                          <div>{child.title}</div>
                        </div>
                      </div>
                    })
                  }
                </div>
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
export default connect(mapStateToProps, mapDispatchToProps)(Type)