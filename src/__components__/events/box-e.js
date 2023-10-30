import { Link } from "react-router-dom"
import { Panel, PanelBody, PanelFooter, PanelHeader } from "../../components/panel/panel"


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
                <td>Oct. 27, 28 & 29</td>
                <td>CDO</td>
              </tr>
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
