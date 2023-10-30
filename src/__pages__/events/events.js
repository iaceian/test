import React from 'react'
import { BoxA } from '../../__components__/events/box-a'
import { BoxB } from '../../__components__/events/box-b'
import { BoxC } from '../../__components__/events/box-c'
import { BoxE } from '../../__components__/events/box-e'
import { BoxF } from '../../__components__/events/box-f'
import { BoxG } from '../../__components__/events/box-g'

function Events() {
  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item active'>Events</li>
      </ol>
      <h1 className='page-header'>2023 Updated Milo Checkmate Year-round Program Nationwide (F2F/Online) and MCC Standard Training Games</h1>

      <BoxA />
      <BoxB />
      <BoxC />
      <BoxE />
      <BoxF />
      <BoxG />

    </div>
  )
}

export default Events
