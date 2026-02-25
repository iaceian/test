import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxB = () => {
  return (
    <Panel>
      <PanelHeader className='bg-orange-700 text-white'>B. Sundays classes</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Batch 1</td>
                <td>Jan. 11, 18, 25, Feb. 01, 08 & 15</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Las Piñas/Manila</td>
                <td>02:30-4:30pm</td>
              </tr>
              <tr>
                <td>Batch 2</td>
                <td>Feb. 22, Mar. 01, 08, 15, 22 & 29</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Las Piñas/Manila</td>
                <td>02:30-4:30pm</td>
              </tr>
              <tr>
                <td colSpan={6} className='fw-bolder'>Summer Classes 1</td>
              </tr>
              <tr>
                <td>Batch 3 (Thurs & Sun)</td>
                <td>Apr. 16, 19, 23, 26, 30 & May 2</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Manila</td>
                <td>02:30-4:30pm</td>
              </tr>
              <tr>
                <td colSpan={6} className='fw-bolder'>Summer Classes 2</td>
              </tr>
              <tr>
                <td>Batch 4 (Thurs & Sun)</td>
                <td>May 14, 17, 21, 24, 28 & 30</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Manila</td>
                <td>02:30-4:30pm</td>
              </tr>
              <tr>
                <td>Batch 5</td>
                <td>June 14, 21, 28, July 05, 12 & 19</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Las Piñas/Manila</td>
                <td>02:30-4:30pm</td>
              </tr>
              <tr>
                <td>Batch 6</td>
                <td>July 26, Aug. 2, 09, 23, 30 & Sept. 06</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Las Piñas/Manila</td>
                <td>02:30-4:30pm</td>
              </tr>
              <tr>
                <td>Batch 7</td>
                <td>Sept. 20, 27, Oct. 04, 11, 18 & 25</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Las Piñas/Manila</td>
                <td>02:30-4:30pm</td>
              </tr>
              <tr>
                <td>Batch 8</td>
                <td>Nov. 8, 15, 22, 29, Dec. 06 & 13</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
                <td>Las Piñas/Manila</td>
                <td>02:30-4:30pm</td>
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
