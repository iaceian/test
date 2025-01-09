import React from 'react'
import { BoxA } from '../../__components__/events/box-a'
import { BoxB } from '../../__components__/events/box-b'
import { BoxC } from '../../__components__/events/box-c'
import { BoxD } from '../../__components__/events/box-d'
import { BoxG } from '../../__components__/events/box-g'
import { Footer } from '../../__components__/footer/footer'

function Events() {
  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item active'>Events</li>
      </ol>
      <h1 className='page-header'>2025 Schedule for Milo Checkmate Year-round Program (F2F/Online) and MCC Invitational Standard Training Games</h1>
      <BoxA />
      <BoxB />
      <BoxC />
      <BoxD />
      <BoxG />
      <Footer />
    </div>
  )
}

export default Events
