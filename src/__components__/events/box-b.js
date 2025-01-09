import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxB = () => {
  return (
    <Panel>
      <PanelHeader className='bg-orange-700 text-white'>B. Sundays classes Face-to-Face</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Batch 1</td>
                <td>Jan.12, 19, 26, Feb.02, 09 & 16 </td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>MCC Hq, Las Piñas City</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 2</td>
                <td>Mar.02, 09, 16, 23, Apr.6 & 13</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>MCC Hq, Las Piñas City</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td colSpan={6} className='fw-bolder'>Summer Classes 1</td>
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
                <td>Batch 4 (Thurs & Sun)</td>
                <td>May 15, 18, 22, 25, 29 & June 08</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Alabang, Muntinlupa</td>
                <td>02:30-4:30pm</td>
              </tr>
              <tr>
                <td>Batch 5 (Sun & Thu)</td>
                <td>June 15, 22, 29, July 06, 13 & 20</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>MCC Hq, Las Piñas City</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 6</td>
                <td>July 27, Aug.3, 10, 24, 31 & Sept.7</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>MCC Hq, Las Piñas City</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 7</td>
                <td>Sept.6, 13, 20, 27, Oct.4 & 5</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>MCC Hq, Las Piñas City</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 8</td>
                <td>Oct.19, 26, Nov.9, 16, 23 & 30</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>MCC Hq, Las Piñas City</td>
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
