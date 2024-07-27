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
                <td>Jan.20, 27, Feb. 03, 17, 24 & 25</td>
                <td>JCO Trinoma, Quezon City (09:15-11:30am)</td>
                <td>Starmall Edsa Shaw Mandaluyong (02:00-04:15pm)</td>
              </tr>
              <tr>
                <td>Batch 2</td>
                <td>Mar.02, 09,16, 23, Apr.06 & 07</td>
                <td>JCO Trinoma, Quezon City (09:15-11:15am)</td>
                <td>Starmall Edsa Shaw Mandaluyong (02:00-04:00pm)</td>
              </tr>
              <tr>
                <td>Batch 3</td>
                <td>Apr. 13, 20, 27, May 11,18 & 19</td>
                <td>JCO Trinoma, Quezon City (09:15-11:30am)</td>
                <td>Starmall Edsa Shaw Mandaluyong (02:00-04:15pm)</td>
              </tr>
              <tr>
                <td>Batch 4</td>
                <td>May 25, June 01, 08, 15, 22 & 23</td>
                <td>JCO Trinoma, Quezon City (09:15-11:30am)</td>
                <td>Starmall Edsa Shaw Mandaluyong (02:00-04:15pm)</td>
              </tr>
              <br />
              <tr>
                <td>Batch 5 (1st group)</td>
                <td>June 22, 29, July 06, 13, 20, 21 (tournament) </td>
                <td>JCO Trinoma, Quezon City (09:15-11:30am)</td>
                <td>Starmall Edsa Shaw Mandaluyong (02:00-04:15pm)</td>
              </tr>
              <tr>
                <td>Batch 5 (2nd group)</td>
                <td>July 06,13,20, 21 (tournament), 27 & Aug. 3</td>
                <td>JCO Trinoma, Quezon City (09:15-11:30am)</td>
                <td>Starmall Edsa Shaw Mandaluyong (02:00-04:15pm)</td>
              </tr>
              <tr>
                <td>Batch 5 (Wed & Sat)</td>
                <td>July 06, 10, 13, 17, 20 & 21</td>
                <td>JCO Trinoma, Quezon City (09:15-11:30am)</td>
                <td>Starmall Edsa Shaw Mandaluyong (02:00-04:15pm)</td>
              </tr>
              <br />
              <tr>
                <td>Batch 6</td>
                <td>July 27, Aug. 03,10,24,31 & Sept. 01</td>
                <td>JCO Trinoma, Quezon City (09:15-11:30am)</td>
                <td>Starmall Edsa Shaw Mandaluyong (02:00-04:15pm)</td>
              </tr>
              <tr>
                <td>Batch 7</td>
                <td>Sept 14,21,28,Oct.12,19 & 20</td>
                <td>JCO Trinoma, Quezon City (09:15-11:30am)</td>
                <td>Starmall Edsa Shaw Mandaluyong (02:00-04:15pm)</td>
              </tr>
              <tr>
                <td>Batch 8</td>
                <td>Oct.26,Nov.09,16,23,30 & Dec.01</td>
                <td>JCO Trinoma, Quezon City (09:15-11:30am)</td>
                <td>Starmall Edsa Shaw Mandaluyong (02:00-04:15pm)</td>
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
