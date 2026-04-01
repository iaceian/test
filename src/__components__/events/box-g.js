import React from 'react'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel.jsx'
import { Details } from '../redirect/details.js'
import { OnlineRegistrationForm } from './../download/online-registration-form';

export const BoxG = () => {
  return (
    <Panel>
      <PanelHeader className='bg-purple-700 text-white'>D. Online 1-on-1/ group class via Zoom</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>One-on-one</td>
                <td>Wed</td>
                <td>5:00-6:00pm and 6:30-7:30pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelBody>
      <PanelFooter>
        <OnlineRegistrationForm />
        <Details />
      </PanelFooter>
    </Panel>
  )
}
