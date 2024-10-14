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
                <td>Jan.14, 21, 28, Feb. 04, 18 & 25</td>
                <td>Sucat, Parañaque City (09:00-11:15am)</td>
                <td></td>
              </tr>
              <tr>
                <td>Batch 2</td>
                <td>Mar.03, 10,17, 24, 31 & Apr.07</td>
                <td>Sucat, Parañaque City (09:00-11:15am)</td>
                <td></td>
              </tr>
              <tr>
                <td>Batch 3</td>
                <td>Apr. 14, 21, 28, May 12, 19 & 26</td>
                <td>Sucat, Parañaque City (09:00-11:15am)</td>
                <td></td>
              </tr>
              <tr>
                <td>Batch 4</td>
                <td>June 02,09,16,July 7,14 & 21</td>
                <td>Sucat, Parañaque City (09:00-11:15am)</td>
                <td></td>
              </tr>
              <tr>
                <td>Batch 5 (Sun & Thu)</td>
                <td>July 07,11,14,18, 21(tournament) & 25</td>
                <td>Sucat, Parañaque City (09:00-11:15am)</td>
                <td></td>
              </tr>
              <tr>
                <td>Batch 6</td>
                <td>July 28, Aug.04,11,25,Sept.01 & 08</td>
                <td>Sucat, Parañaque City (09:00-11:15am)</td>
                <td>SM Southmall (02:00-04:15pm)</td>
              </tr>
              <tr>
                <td>Batch 7</td>
                <td>Sept.15,22,29,Oct.6,13 & 20</td>
                <td>Sucat, Parañaque City (09:00-11:15am)</td>
                <td>MCC Headquarters, Las Piñas (02:45-05:00pm)</td>
                <td></td>
              </tr>
              <tr>
                <td>Batch 8</td>
                <td>Oct. 27, Nov. 3, 10, 24, Dec.01 & 08</td>
                <td>Sucat, Parañaque City (09:00-11:15am)</td>
                <td>MCC Headquarters, Las Piñas (02:45-05:00pm)</td>
                <td></td>
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
