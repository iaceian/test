import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxD = () => {
  return (
    <Panel>
      <PanelHeader className='bg-green-700 text-white'>
        D. Online 1-on-1/ group class via Zoom (depends on the available time slots and levels)
      </PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>one-on-one</td>
                <td>Tues and Fri</td>
              </tr>
              <tr>
                <td>group class of 4 pax</td>
                <td>Wed and Sunday</td>
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
