import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxA = () => {
  return (
    <Panel>
      <PanelHeader className='bg-red-700 text-white'>A. Saturdays Classes Part 1</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Batch 1</td>
                <td>Jan. 10, 17, 24, 31, Feb. 07 & 08</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:00-11:15am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 2</td>
                <td>Feb. 28, Mar. 07, 14, 21, 28 & 29</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:00-11:15am</td>
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
