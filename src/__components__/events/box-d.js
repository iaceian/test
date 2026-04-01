import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { Details } from '../redirect/details.js'
import { PreEnrollmentForm } from './../download/pre-enrollment-form';

export const BoxD = () => {
  return (
    <Panel>
      <PanelHeader className='bg-green-700 text-white'>D. Saturdays Classes Part 2</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Batch 5</td>
                <td>June 20, 27, July 04, 11, 18 & 19</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:00-11:15am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 6</td>
                <td>Aug. 01, 08, 22, 29, Sept. 05 & 6</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:00-11:15am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 7</td>
                <td>Sept. 19, 26, Oct. 3, 10, 24 & 25</td>
                <td>JCO Trinoma, Quezon City</td>
                <td>09:00-11:15am</td>
                <td>Starmall Edsa Shaw Mandaluyong</td>
                <td>02:00-04:15pm</td>
              </tr>
              <tr>
                <td>Batch 8</td>
                <td>Nov. 7, 14, 21, 28, Dec. 05 & 06</td>
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
