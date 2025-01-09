import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxC = () => {
  return (
    <Panel>
      <PanelHeader className='bg-yellow-700 text-white'>
        C. Provincial Classes with Tournament
      </PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Apr. 12-13 Mindoro</td>
                <td>June 10-12 CDO</td>
                <td>July 19 - T, F or S</td>
              </tr>
              <tr>
                <td>Apr. 14-15 Tanza, Cavite</td>
                <td>Dec. 06-07 Nasugbu, Batangas</td>
                <td>Sept. 3 - T, F or S</td>
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
