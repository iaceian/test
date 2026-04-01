import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxC = () => {
  return (
    <Panel>
      <PanelHeader className='bg-yellow-700 text-white'>C. Summer Classes 2</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Batch 4 (Tues & Fri)</td>
                <td>May 12, 15, 19, 22, 26 & 30</td>
                <td>BGC, Taguig</td>
                <td>09:00 - 11:00am</td>
                <td>Starbucks, Aurora Ave., Quezon City</td>
                <td>02:45-4:45pm</td>
              </tr>
              <tr>
                <td>Batch 4 (Wed & Sat)</td>
                <td>May 13, 16, 20, 23, 27 & 30</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:15-11:30am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 4 (Thurs & Sun)</td>
                <td>May 14, 17, 21, 24, 28 & 30</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Starbucks SM Manila</td>
                <td>08:30-11:30am</td>
              </tr>
              <tr>
                <td>Batch 4 (Thurs & Sun)</td>
                <td>May 14, 17, 21, 24, 28 & 30</td>
                <td>MCC HQ, Las Piñas City</td>
                <td>01:30-03:45pm</td>
                <td>Bacoor near St. Dominic Medical Ctr</td>
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
