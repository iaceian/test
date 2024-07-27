import { Link } from 'react-router-dom'
import { Panel, PanelBody, PanelHeader } from '../../components/panel/panel'
import { StandardRegistrationForm } from '../download/standard-registration-form'

export const BoxG = () => {
  return (
    <Panel>
      <PanelHeader className='bg-teal-700 text-white'>
        2024 MCC Invitational Standard Training Games at Starmall Edsa Shaw, Mandaluyong 10am-06:30pm
      </PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Feb.10-11 (1st leg)</td>
                <td>May 04-05 (2nd leg)</td>
                <td>Aug, 17-18 (3rd leg)</td>
                <td>Dec. 14-15 (5th leg)</td>
              </tr>
              <tr>
                <td>
                  <button type='button' className='btn btn-outline-info me-1 mb-1'>
                    <Link to='/events/leg1-details'>Details</Link>
                  </button>
                  <StandardRegistrationForm />
                </td>
                <td></td>
                <td>
                  <button type='button' className='btn btn-outline-info me-1 mb-1'>
                    <Link to='/events/leg3-details'>Details</Link>
                  </button>
                </td>
              </tr>
              <tr>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelBody>
    </Panel>
  )
}
