import { Link } from 'react-router-dom'
import { Panel, PanelBody, PanelHeader } from '../../components/panel/panel'
import { StandardRegistrationForm } from '../download/standard-registration-form'

export const BoxG = () => {
  return (
    <Panel>
      <PanelHeader className='bg-teal-700 text-white'>
        2025 MCC Invitational Standard Training Games at Starmall Edsa Shaw, Mandaluyong 10am-06:30pm
      </PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>PWDs Jan.25 & 26</td>
                <td>Feb. 22-23 1st leg</td>
                <td>WOMENS Mar. 29 & 30</td>
                <td>May 31 - June 01 2nd leg</td>
                <td>Aug. 16-17 FIDE-Rated</td>
                <td>Oct. 11-12 4th leg</td>
                <td>Dec. 20-21 MCC Pamasko Handog</td>
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
                <td>
                  <button type='button' className='btn btn-outline-info me-1 mb-1'>
                    <Link to='/events/leg4-details'>Details</Link>
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
