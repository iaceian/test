import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxB = () => {
  return (
    <Panel>
      <PanelHeader className='bg-orange-700 text-white'>B. Summer Classes 1</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Batch 3 (Tues & Fri)</td>
                <td>Apr. 14, 17, 21, 24, 28 & May 2</td>
                <td>BGC, Taguig</td>
                <td>09:00 - 11:00am</td>
                <td></td>
                <td></td>
              </tr>
              <tr>
                <td>Batch 3 (Wed & Sat)</td>
                <td>Apr. 15, 18, 22, 25, 29 & May 2</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:00-11:15am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 3 (Thurs & Sun)</td>
                <td>Apr. 16, 19, 23, 26, 30 & May 2</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Starbucks, Robinson's Place Las Pinas</td>
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
