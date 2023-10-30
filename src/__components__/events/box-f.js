import { Link } from 'react-router-dom'
import { Panel, PanelBody, PanelFooter, PanelHeader } from '../../components/panel/panel'

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
                <td>01:45 - 02:45pm; 03:00 - 04:00pm; 04:15 - 05:15pm</td>
              </tr>
              <tr>
                <td>Thursday</td>
                <td>03:00 - 04:00pm; 04:15 - 05:15pm; 05:30 - 06:30pm</td>
              </tr>
              <tr>
                <td>Friday</td>
                <td>02:30 - 03:30pm</td>
              </tr>
            </tbody>
          </table>
        </div>
      </PanelBody>
      <PanelFooter>
        <button type='button' className='btn btn-outline-info me-1 mb-1'>
          Register
        </button>
        <button type='button' className='btn btn-outline-info me-1 mb-1'>
          <Link to='/events/class-details'>Details</Link>
        </button>
      </PanelFooter>
    </Panel>
  )
}
