import React from 'react'
import DataTable from 'react-data-table-component'
import { Panel, PanelBody, PanelHeader } from '../../components/panel/panel'
import { Footer } from '../../__components__/footer/footer'
import data from './tournaments-data'

function Tournaments() {
  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item active'>Youth Standard Open</li>
      </ol>
      <h1 className='page-header'>
        Youth Standard Open <small>Held October 26-27, 2019 at Starmall Edsa Shaw in Mandaluyong City</small>
      </h1>

      <div className='card-group mb-20px'>
        <div className='card'>
          <img className='card-img-top' src='/assets/img/tournaments/1.jpg' alt='' />
          <div className='card-body'>
            <p className='card-text'>
              Shown in the picture, standing in the second row, seventh from the right side, was the champion AGM Srihaan Poddar (in yellow shirt). Besides him
              at his right was the runner-up Ruther Barredo, Andrew Sopungco, Jet Miguel Mendoza and together with the other winners and tournament officials.
            </p>
          </div>
        </div>
      </div>
      <Panel>
        <PanelHeader>Tournament Winners</PanelHeader>
        <PanelBody>
          <DataTable columns={data.columns1} data={data.rows1} conditionalRowStyles={data.conditionalRowStyles} />
        </PanelBody>
      </Panel>

      <Panel>
        <PanelHeader>Category Winners</PanelHeader>
        <PanelBody>
          <DataTable columns={data.columns2} data={data.rows2} conditionalRowStyles={data.conditionalRowStyles} />
        </PanelBody>
      </Panel>

      <Footer />
    </div>
  )
}

export default Tournaments
