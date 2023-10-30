import React from 'react'
import { Panel, PanelBody, PanelHeader } from '../../components/panel/panel.jsx'
import { Footer } from '../../__components__/footer/footer.js'

function Tournaments2() {
  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item active'>1st Leg</li>
      </ol>
      <h1 className='page-header'>Winners in the 1st leg MCC Invitational Standard Open Training Games</h1>
      <div className='card-group mb-20px'>
        <div className='card'>
          <img className='card-img-top' src='/assets/img/tournaments/2.jpg' alt='' />
        </div>
      </div>
      <Panel>
      <PanelHeader>Winners in the 1st leg MCC Invitational Standard Open Training Games</PanelHeader>
        <PanelBody>
          <table className='table mb-0'>
            <tbody>
              <tr>
                <td>Names</td>
                <td>RESULT</td>
                <td colSpan='2'>Pts</td>
              </tr>
              <tr>
                <td>Rivera, Joseph Lawrence</td>
                <td>champion</td>
                <td colSpan='2'>6.5</td>
              </tr>
              <tr>
                <td>Penaranda, Neil Geofer</td>
                <td>2nd</td>
                <td colSpan='2'>6</td>
              </tr>
              <tr>
                <td>Santiaguel, Jerico</td>
                <td>3rd</td>
                <td colSpan='2'>5.5</td>
              </tr>
              <tr>
                <td>Pondoc, Conrad</td>
                <td>4th</td>
                <td colSpan='2'>5.5</td>
              </tr>
              <tr>
                <td>Lagrada, Matthew</td>
                <td>5th</td>
                <td colSpan='2'>5.5</td>
              </tr>
              <tr>
                <td>Gaffate, Rainier Santi Nino</td>
                <td>6th</td>
                <td colSpan='2'>5</td>
              </tr>
              <tr>
                <td>Santiaguel, Rafael</td>
                <td>7th</td>
                <td colSpan='2'>5</td>
              </tr>
              <tr>
                <td>Tan, Danny</td>
                <td>8th</td>
                <td colSpan='2'>5</td>
              </tr>
              <tr>
                <td>Medina, Ruben</td>
                <td>9th</td>
                <td colSpan='2'>5</td>
              </tr>
              <tr>
                <td>Caraig, Leo Aldrin</td>
                <td>10th</td>
                <td colSpan='2'>6</td>
              </tr>
              <tr>
                <td colSpan='4'>&nbsp;</td>
              </tr>
              <tr>
                <td colSpan='4'>&nbsp;</td>
              </tr>
              <tr>
                <td colSpan='2'>Rivera, Jian Carlo</td>
                <td>5</td>
                <td>Top Junior Male</td>
              </tr>
              <tr>
                <td colSpan='2'>Calonce, Gabriela</td>
                <td>3.5</td>
                <td>Top Junior Female</td>
              </tr>
              <tr>
                <td colSpan='2'>Modesto, David Francis</td>
                <td>4</td>
                <td>Top Kiddies Boy</td>
              </tr>
              <tr>
                <td colSpan='2'>Sharleez De Leon</td>
                <td>3</td>
                <td>Top Kiddies Girl</td>
              </tr>
              <tr>
                <td colSpan='2'>Villate, Raul</td>
                <td>5</td>
                <td>Top Senior</td>
              </tr>
            </tbody>
          </table>
        </PanelBody>
      </Panel>

      <Footer />
    </div>
  )
}

export default Tournaments2
