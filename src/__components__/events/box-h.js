import { Link } from 'react-router-dom'
import { Panel, PanelBody, PanelHeader } from '../../components/panel/panel'
import data from './box-h-data'

const aaa = () => {
    return data.lines.map(line => <tr><td>{line.buttons.map(button => <button type='button' className='btn btn-outline-info me-1 mb-1'><Link to={button.to} target='_blank'>{button.caption}</Link></button>)}</td><td>{line.caption}</td></tr>)
}

export const BoxH = () => {
  return (
    <Panel>
      <PanelHeader className='bg-teal-700 text-white'>
        2026 MCC Fide-rated Standard events and Invitational Standard Training Games at Starmall Edsa Shaw, Mandaluyong
      </PanelHeader>
      <PanelBody>
        <div className='table-responsive'>
          <table className='table mb-0'>
            <thead>
                <tr>
                    <th style={{width: 200 + 'px'}}></th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {aaa()}
            </tbody>
          </table>
        </div>
      </PanelBody>
    </Panel>
  )
}
