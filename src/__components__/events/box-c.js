import React from 'react'
import { Link } from 'react-router-dom'
import { Panel, PanelHeader, PanelBody, PanelFooter } from '../../components/panel/panel.jsx'

export const BoxC = () => {
  return (
    <Panel>
      <PanelHeader className='bg-red-700 text-white'>
        C. NCR F2F Batch 4 Summer Schedules with Physical Sports Program - (General Assembly: Jul. 23, Starmall Edsa Shaw 10:00am-05:00pm)
      </PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Mon & Thu</td>
                <td>Jul. 6, 10, 13, 17, 20 & 23 w/PSP</td>
                <td></td>
                <td>JCO Lucky China Town Mall, Manila 02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Tue & Fri</td>
                <td>Jul. 7, 11, 14, 18, 21 & 23 w/PSP</td>
                <td>Santana Grooves, Parañaque 09:00-11:00am</td>
                <td>Starmall Edsa Shaw Mandaluyong 02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Wed & Sat</td>
                <td>Jul. 8, 12, 15, 19, 22, & 23 w/PSP</td>
                <td>JCO Trinoma, Quezon City 09:15-11:30am</td>
                <td>Starmall Edsa Shaw Mandaluyong 02:00-04:15pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelBody>
      <PanelFooter>
        <button type='button' className='btn btn-outline-info me-1 mb-1'>
          Register
        </button>
        <button type='button' className='btn btn-outline-info me-1 mb-1'>
          <Link to='/events/class-details'>Details</Link>
        </button>
      </PanelFooter>
    </Panel>
  )
}
