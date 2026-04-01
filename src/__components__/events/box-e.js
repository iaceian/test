import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel'
import { PreEnrollmentForm } from '../download/pre-enrollment-form'
import { Details } from '../redirect/details'

export const BoxE = () => {
  return (
    <Panel>
      <PanelHeader className='bg-blue-700 text-white'>E. Sundays classes</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Batch 1</td>
                <td>Jan. 11, 18, 25, Feb. 01, 08 & 15</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
              </tr>
              <tr>
                <td>Batch 2</td>
                <td>Feb. 22, Mar. 01, 08, 15, 22 & 29</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
              </tr>
              <tr>
                <td>Batch 5</td>
                <td>June 14, 21, 28, July 05, 12 & 19</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
              </tr>
              <tr>
                <td>Batch 6</td>
                <td>July 26, Aug. 2, 09, 23, 30 & Sept. 06</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
              </tr>
              <tr>
                <td>Batch 7</td>
                <td>Sept. 20, 27, Oct. 04, 11, 18 & 25</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
              </tr>
              <tr>
                <td>Batch 8</td>
                <td>Nov. 8, 15, 22, 29, Dec. 06 & 13</td>
                <td>Sucat, Parañaque City</td>
                <td>09:00-11:15am</td>
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
