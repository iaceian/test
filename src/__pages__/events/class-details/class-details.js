import React from 'react'
import { Link } from 'react-router-dom'
import { Panel, PanelHeader, PanelBody } from '../../../components/panel/panel.jsx'

function ClassDetails() {
  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item'>
          <Link to='/events'>Events</Link>
        </li>
        <li className='breadcrumb-item active'>Class Details</li>
      </ol>
      <h1 className='page-header'>Class Details</h1>
      <Panel>
        <PanelHeader>Details for Milo Checkmate Face-to-Face (F2F) or Online Program</PanelHeader>
        <PanelBody>
          <div style={{ marginRight: '50px'}}>
            <ol>
              <li>
                The program is designed to develop the chess talents of young children, aged 7- years old and above into masters’ strength level through formal
                and systematic method of teachings.
              </li>
              <br />
              <li>The curriculum is patterned after the famous and former USSR chess development scheme.</li>
              <br />
              <li>
                Courses offered are for beginners, intermediate, advance and master levels for specialization. Enrollees are assessed to determine their
                respective levels.
              </li>
              <br />
              <li>
                Now on its 33rd year of inception, the program has produced countless titled players. Among its foremost products include the country’s cream of
                the crop, namely, US-based grandmaster (GM) Wesley So, GM Mark Paragua, GM John Paul Gomez, GM Catalino Sadorra and GM Ronald Dableo,
              </li>
              <br />
              <li>
                The program offers online sessions, F2F weekends classes during school days and daily sessions during summer with physical sports program to
                sharpen the enrollees’ playing skills and mental quickness.
              </li>
              <br />
              <li>
                Each batch of the Milo Checkmate F2F classes consists of seven sessions spread for six days. Five days for the five sessions for the lesson and
                one day for the two sessions for the tournament. One session covers two hours and fifteen minutes (2hrs & 15min).
              </li>
              <br />
              <li>
                Each batch concludes with a tournament, normally held during weekends, either Saturday or Sunday, depending on the availability of the venue.
                All enrollees (of same batch) from various venues and online classes are assembled together during the tournament and mandatory to participate.
                They compete according to their levels to evaluate their performance after having given them a series of lessons.
              </li>
              <br />
              <li>Tournament winners are awarded medals, courtesy of the supporting Milo, the No.1 energy drink in the country.</li>
              <br />
              <li>
                Fees are: F2F program: P5950/batch/child. For online 1-on-1 P4800/eight sessions. Online group class P5500/ten sessions. Advance payment is
                required. Can pay thru gcash 0922-822-6319 or any branch of Banco de Oro (BDO) account # 001480 1353 70 both under Milagros C. Emperado.
              </li>
              <br />
              <li>An acknowledgement is forwarded thru messages for payment received.</li>
              <br />
              <li>
                Enrollees in the F2F program, are required to bring their own chess set, notebook and pen during the session. Wear or bring face mask. Online
                classes are via zoom and chess positions are shared on the screen.
              </li>
              <br />
              <li>
                For F2F onsite registration, please bring the copy of the pre-enrollment form and pay to the designated coach/MCC office staff and ask for a
                receipt.
              </li>
            </ol>
          </div>
        </PanelBody>
      </Panel>

      <h1>
        <Link to='/events' className='text-right'>
          <i className='fa fa-arrow-left fa-fw'></i>
        </Link>
      </h1>
    </div>
  )
}

export default ClassDetails
