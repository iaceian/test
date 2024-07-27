import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxC = () => {
  return (
    <Panel>
      <PanelHeader className='bg-yellow-700 text-white'>
        C. Provincial Summer Clinics/ Week-ends Clinics
      </PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>July 24,25 & 26</td>
                <td>Victory Town Center Lemery</td>
                <td>Wed, Thurs & Fri</td>
              </tr>
              <tr>
                <td>Oct. 05 - 06</td>
                <td>(to be announced later)</td>
                <td>Sat & Sun</td>
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
