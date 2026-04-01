import React from 'react'
import { BoxA } from '../../__components__/events/box-a'
import { BoxB } from '../../__components__/events/box-b'
import { BoxC } from '../../__components__/events/box-c'
import { BoxD } from '../../__components__/events/box-d'
import { BoxG } from '../../__components__/events/box-g'
import { Footer } from '../../__components__/footer/footer'
import { BoxE } from './../../__components__/events/box-e';
import { BoxF } from '../../__components__/events/box-f'
import { BoxH } from '../../__components__/events/box-h'

function Events() {
  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item active'>Events</li>
      </ol>
      <h1 className='page-header'>2026 Schedule for Milo Checkmate Year-round Program and Metropolitan Chess Center (MCC) Events</h1>
      <BoxA />
      <BoxB />
      <BoxC />
      <BoxD />
      <BoxE />
      <BoxF />
      <BoxG />
      <BoxH />
      <Footer />
    </div>
  )
}

export default Events
