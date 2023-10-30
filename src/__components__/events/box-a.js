import React from 'react'
import { Link } from 'react-router-dom'
import { Panel, PanelHeader, PanelBody, PanelFooter } from '../../components/panel/panel.jsx'

export const BoxA = () => {
  return (
    <Panel>
      <PanelHeader>A. NCR face-to-face (F2F) Saturdays classes</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>1st batch</td>
                <td>Jan. 14, 21, 28, Feb. 11, 18, 25, & Mar. 4</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>9:15-11:15am Starmall Edsa Shaw Mandaluyong 2:00-4:00pm</td>
              </tr>
              <tr>
                <td>2nd batch</td>
                <td>Mar. 18, 25, Apr. 2, 15, 22, May 6, & 13</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>9:15-11:15am Starmall Edsa Shaw Mandaluyong 2:00-4:00pm</td>
              </tr>
              <tr>
                <td>3rd batch</td>
                <td>May 27, Jun. 3, 10, 17, Jul. 1 & 2</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am Starmall Edsa Shaw Mandaluyong 02:00-04:15pm</td>
              </tr>
              <tr>
                <td>5th batch</td>
                <td>Aug. 5, 12, 19, Sept. 2, 9 & 10 w/PSP</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am Starmall Edsa Shaw Mandaluyong 02:00-04:15pm</td>
              </tr>
              <tr>
                <td>6th batch</td>
                <td>Sept. 16, 23, 30, Oct. 7, 14 & 15 w/PSP</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am Starmall Edsa Shaw Mandaluyong 02:00-04:15pm</td>
              </tr>
              <tr>
                <td>7th batch</td>
                <td>Nov. 4, 11, 18, 25, Dec. 2 & 3 w/PSP</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am Starmall Edsa Shaw Mandaluyong 02:00-04:15pm</td>
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
