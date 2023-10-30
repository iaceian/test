import { Link } from 'react-router-dom'
import { Panel, PanelBody, PanelHeader } from '../../components/panel/panel'
import { StandardRegistrationForm } from '../download/standard-registration-form'

export const BoxG = () => {
  return (
    <Panel>
      <PanelHeader className='bg-teal-700 text-white'>
        2023 MCC Invitational Standard Open Training Games with Prizes at G/F, Starmall Edsa Shaw in Mandaluyong from 10:00am-06:00pm
      </PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>1st leg Apr. 29-30</td>
                <td>2nd leg Jun. 24-25</td>
                <td>3rd leg Jul. 29-30</td>
                <td>4th leg Aug. 26-27</td>
                <td>5th leg Oct. 21-22</td>
                <td>MCC Pamaskong Handog Dec. 09-10</td>
              </tr>
              <tr>
                <td>
                  <StandardRegistrationForm />
                </td>
                <td>
                  <button type='button' className='btn btn-outline-info me-1 mb-1'>
                    <Link to='/events/leg2-details'>Details</Link>
                  </button>
                </td>
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
                <td>
                  <button type='button' className='btn btn-outline-info me-1 mb-1'>
                    <Link to='/events/leg5-details'>Details</Link>
                  </button>
                </td>
                <td>
                  <button type='button' className='btn btn-outline-info me-1 mb-1'>
                    <Link to='/events/pamaskong-handog-details'>Details</Link>
                  </button>
                </td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelBody>
    </Panel>
  )
}
