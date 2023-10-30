import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel'
import { PreEnrollmentForm } from '../download/pre-enrollment-form'
import { Details } from '../redirect/details'

export const BoxE = () => {
  return (
    <Panel>
      <PanelHeader className='bg-blue-700 text-white'>
        E. PROVINCIAL F2F Summer Schedules and Venues - (10:00am-05:00pm with 1 hour lunchbreak ; Tournament is held on the last day)
      </PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Fri-Sat-Sun</td>
                <td>Nov. 24, 25 & 26</td>
                <td>Balayan, Batangas</td>
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
