import { Link } from 'react-router-dom'
import { Panel, PanelBody, PanelHeader } from '../../components/panel/panel'
import { StandardRegistrationForm } from '../download/standard-registration-form'

export const BoxH = () => {
  return (
    <Panel>
      <PanelHeader className='bg-teal-700 text-white'>
        2026 MCC Fide-rated Standard events and Invitational Standard Training Games at Starmall Edsa Shaw, Mandaluyong 10am-07:30pm
      </PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Feb. 21-22 1st MCC Fide-rated Standard 1800 below Tournament</td>
                <td>April 11-12 2nd leg MCC Fide-rated Standard 1800 below Tournament</td>
                <td>May 16-17 (3rd leg); Aug. 15-16 (4th leg) </td>
                <td>Oct. 17-18 (5th leg) MCC Standard 2000 below Tournament</td>
                <td>Dec. 19-20 MCC Pamasko Handog Invitational Standard Training Games</td>
              </tr>
              <tr>
                <td>
                  <button type='button' className='btn btn-outline-info me-1 mb-1'>
                    <Link to='/events/leg1-details'>Details</Link>
                  </button>
                </td>
                <td>
                  <StandardRegistrationForm />
                </td>
                <td>
                  <StandardRegistrationForm />
                </td>
                <td>
                  <StandardRegistrationForm />
                </td>
                <td>
                  <StandardRegistrationForm />
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
