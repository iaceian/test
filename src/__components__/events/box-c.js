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
                <td>May 09-10 Calapan, Mindoro</td>
                <td>June 06 & 07 Olongapo</td>
                <td>July 25 & 26 CDO</td>
                <td>reserved dates Dec. 12 & 13</td>
              </tr>
              <tr>
                <td></td>
                <td>June 12 & 13 Cavite</td>
                <td>Sept. 12 & 13 Iloilo</td>
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
