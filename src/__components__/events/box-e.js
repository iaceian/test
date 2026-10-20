import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel'
import { PreEnrollmentForm } from '../download/pre-enrollment-form'
import { Details } from '../redirect/details'
import data from './box-e-data';

const displayData = () => {
    return data.lines.map(
        line => <tr>{
            line.columns.map(col => <td>{col.col}</td>)
        }</tr>
    );
}

export const BoxE = () => {
  return (
    <Panel>
      <PanelHeader className='bg-blue-700 text-white'>E. Sundays classes</PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <tbody>
              {displayData()}
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
