import React from 'react'
import { Panel, PanelHeader, PanelBody } from '../../components/panel/panel'
import { FooterFixed } from '../../__components__/footer/footer-fixed'

function Contact() {
  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item active'>Contact</li>
      </ol>
      <h1 className='page-header'>
        Contact Information <small>Metropolitan Chess Center</small>
      </h1>

      <div className='row'>
        <div className='col-xl-6'>
          <Panel>
            <PanelHeader>Metropolitan Chess Center</PanelHeader>
            <PanelBody>
              <table>
                <tr>
                  <td width='80px' className='stats-title'>
                    Organizer
                  </td>
                  <td className='stats-title'>Milagros Emperado</td>
                </tr>
                <tr>
                  <td width='80px' className='stats-title'>
                    Mobile 1
                  </td>
                  <td className='stats-title'>0922-822-6319</td>
                </tr>
                <tr>
                  <td width='80px' className='stats-title'>
                    Landline
                  </td>
                  <td className='stats-title'>(02) 8-826-8560</td>
                </tr>
                <tr>
                  <td width='80px' className='stats-title'>
                    Email
                  </td>
                  <td className='stats-title'>mccchess@yahoo.com</td>
                </tr>
                <tr>
                  <td width='80px' className='stats-title'>
                    Facebook
                  </td>
                  <td className='stats-title'>
                    <a href='https://www.facebook.com/mccchess/' target='_blank' rel='noreferrer'>
                      Milo Checkmate Chess Clinic and Sports Academy
                    </a>
                  </td>
                </tr>
              </table>
            </PanelBody>
          </Panel>

          <FooterFixed />
        </div>
      </div>
    </div>
  )
}

export default Contact
