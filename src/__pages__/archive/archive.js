import { React, useEffect, useState } from 'react'
import { MyGroup } from '../../__components__/archive/my-group'
import { Footer } from '../../__components__/footer/footer'

function Archive() {
  const [pictures, setPictures] = useState([])

  useEffect(() => {
    const list = []
    for (let x = 0; x < 12; x += 2) {
      list.push(<MyGroup num={x} />)
    }
    setPictures(list)
  }, [])

  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item active'>Historical Events</li>
      </ol>
      <h1 className='page-header'>
      Historical Events <small>Photo archive taken from important events</small>
      </h1>
      <div className='row'>
        <div className='col-xl-12'>
          <div className='mb-10px fs-10px mt-20px'></div>
          {pictures}
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default Archive
