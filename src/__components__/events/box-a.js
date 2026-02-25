import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxA = () => {
  return (
    <Panel>
      <PanelHeader className='bg-red-700 text-white'>A. Saturdays classes</PanelHeader>
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
              <tr>
                <td colSpan={6} className='fw-bolder'>Summer Classes 1</td>
              </tr>
              <tr>
                <td>Batch 3 (Tues & Fri)</td>
                <td>Apr. 14, 17, 21, 24, 28 & May 2</td>
                <td>BGC,Taguig</td>
                <td>09:00 - 11:00am</td>
                <td>Alabang, Muntinlupa</td>
                <td>02:45-4:45pm</td>
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
                <td colSpan={6} className='fw-bolder'>Summer Classes 2</td>
              </tr>
              <tr>
                <td>Batch 4 (Tues & Fri)</td>
                <td>May 12, 15, 19, 22, 26 & 30</td>
                <td>BGC,Taguig</td>
                <td>09:00 - 11:00am</td>
                <td>Alabang, Muntinlupa</td>
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

/*

*/
