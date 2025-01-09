import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { PreEnrollmentForm } from '../download/pre-enrollment-form.js'
import { Details } from '../redirect/details.js'

export const BoxD = () => {
  return (
    <Panel>
      <PanelHeader className='bg-green-700 text-white'>
        D. Online 1-on-1/ group class via Zoom
      </PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>One-on-one</td>
                <td>Mon, Wed, Sat & Sun.</td>
              </tr>
              <tr>
                <td>group class of 4 pax</td>
                <td>Wed, Sat & Sundays</td>
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
