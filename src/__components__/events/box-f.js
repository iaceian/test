import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel'
import { Details } from '../redirect/details'
import { PreEnrollmentForm } from './../download/pre-enrollment-form';

export const BoxF = () => {
  return (
    <Panel>
      <PanelHeader className='bg-indigo-700 text-white'>C. Provincial Classes with Tournament</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>reserved dates Dec.12 & 13</td>
              </tr>
              <tr>
                <td>Sept.12 & 13 Iloilo</td>
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
