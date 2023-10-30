import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel'
import { OnlineRegistrationForm } from '../download/online-registration-form'
import { Details } from '../redirect/details'

export const BoxF = () => {
  return (
    <Panel>
      <PanelHeader className='bg-cyan-700 text-white'>F. Online one-on-one classes via Zoom</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Tuesday</td>
                <td>01:30 - 02:30pm</td>
              </tr>
              <tr>
                <td>Wednesday</td>
                <td>01:30 - 02:30pm</td>
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
