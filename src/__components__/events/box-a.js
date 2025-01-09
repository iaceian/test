import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxA = () => {
  return (
    <Panel>
      <PanelHeader className='bg-red-700 text-white'>A. Saturdays classes Face-to-face (F2F)</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Batch 1</td>
                <td>Jan.11, 18, Feb.01, 08, 15 & 16</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 2</td>
                <td>Mar.01, 08, 15, 22, Apr.5 & 6</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:15am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td colSpan={6} className='fw-bolder'>Summer Classes 1</td>
              </tr>
              <tr>
                <td>Batch 3 (Tues & Fri)</td>
                <td>Apr.22, 25, 29, May 2, 6 & 11</td>
                <td>Ayala Mall Manila Bay</td>
                <td>09:30-11:45am</td>
                <td>Lucky China Town, Manila</td>
                <td>02:00-4:15pm</td>
              </tr>
              <tr>
                <td>Batch 3 (Wed & Sat)</td>
                <td>Apr.23, 26, 30, May 3, 7 & 11</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-4:15pm</td>
              </tr>
              <tr>
                <td>Batch 3 (Thurs & Sun)</td>
                <td>Apr.24, 27, May 1, 4, 8 & 11</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Alabang, Muntinlupa</td>
                <td>02:30-4:30pm</td>
              </tr>
              <tr>
                <td colSpan={6} className='fw-bolder'>Summer Classes 2</td>
              </tr>
              <tr>
                <td>Batch 4 (Tues & Fri)</td>
                <td>May 13, 16, 20, 23, 27 & June 08</td>
                <td>Ayala Mall Manila Bay</td>
                <td>09:30-11:45am</td>
                <td>Lucky China Town, Manila</td>
                <td>02:00-4:15pm</td>
              </tr>
              <tr>
                <td>Batch 4 (Wed & Sat)</td>
                <td>May 14, 17, 21, 24, 28 & June 08</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-4:15pm</td>
              </tr>
              <tr>
                <td>Batch 4 (Thurs & Sun)</td>
                <td>May 15, 18, 22, 25, 29 & June 08</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Alabang, Muntinlupa</td>
                <td>02:30-4:30pm</td>
              </tr>
              <tr>
                <td>Batch 5</td>
                <td>June 14, 21, 28, July 05, 12 & 13</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 6</td>
                <td>July 26, Aug.2, 9, 23, 30 & 31</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 7</td>
                <td>Sept.6, 13, 20, 27, Oct.4 & 5</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 8</td>
                <td>Oct.18, 25, Nov.8, 15, 22 & 23</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelBody>
      <PanelFooter>
        <PreEnrollmentForm />
        <Details />
      </PanelFooter>
    </Panel>
  )
}

/*

*/
