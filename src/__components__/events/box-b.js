import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxB = () => {
  return (
    <Panel>
      <PanelHeader className='bg-orange-700 text-white'>B. NCR face-to-face Sundays classes</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>1st batch</td>
                <td>Jan. 8, 15, 22, 29, Feb. 5, 12, & Mar. 4</td>
                <td>MCC HQ, Las Piñas 10:00am-12:00nn</td>
              </tr>
              <tr>
                <td>2nd batch</td>
                <td>Apr. 2, 16, 23, May 7, 13, 14, & 21</td>
                <td>Santana Grooves, Parañaque 09:00-11:00am</td>
              </tr>
              <tr>
                <td>3rd batch</td>
                <td>May 28, Jun. 4, 11, 18, Jul. 2 & 9 w/PSP</td>
                <td>Santana Grooves, Parañaque 09:00-11:15am</td>
              </tr>
              <tr>
                <td>5th batch</td>
                <td>Aug. 6, 13, 20, Sept. 3, 10 & 17 w/PSP</td>
                <td></td>
                <td>JCO Southmall Las Piñas 02:00-04:15pm</td>
              </tr>
              <tr>
                <td>6th batch</td>
                <td>Sept. 17, 24, Oct. 1, 8, 15 & 29 w/PSP</td>
                <td>Santana Grooves, Parañaque 09:00-11:15am</td>
              </tr>
              <tr>
                <td>7th batch</td>
                <td>Oct. 29, Nov. 05,12,19,26 & Dec.03 w/PSP</td>
                <td>SM Sucat Bldg B, Parañaque 09:15-11:30am</td>
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
