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
              <li>The curriculum is patterned after the famous and former USSR chess development scheme.
                  The courses are for beginners, intermediate, advance and master levels.
              </li>
              <br />
              <li>
                  Enrollees are assessed to determine their respective levels. The assessment is done through a test
                  questionnaire which will be sent at your email add.
              </li>
              <br />
              <li>
                  The F2F program offers weekend classes (Saturdays or Sundays) during school days and twice a week
                  during summer. Venues are located at Quezon City, Mandaluyong, Manila and Parañaque.
              </li>
              <br />
              <li>
                  The online program is done via zoom and held during Sundays and weekdays except Thursdays. The link
                  is emailed at least three hours before the session starts.
              </li>
              <br />
              <li>
                  Now on its 34th year of inception, the program has produced countless of titled players whom include the
                  US-based grandmaster (GM) Wesley So, GM Mark Paragua, GM John Paul Gomez, GM Catalino Sadorra
                  and GM Ronald Dableo,
              </li>
              <br />
              <li>
                  Each batch of the Milo Checkmate F2F program consists of five sessions for the lessons and concludes
                  with a final evaluation tournament. The lesson runs for 2 hrs. & 15min/session and 4 hours for the tournament.
              </li>
              <br />
              <li>
                  All enrollees (of same batch) from various venues and online program are assembled together during the
                  final evaluation tournament and mandatory to participate. They compete according to their levels to
                  evaluate their performance after having given them a series of lessons. Winners are awarded medals,
                  courtesy of the supporting Milo, the No.1 energy drink in the country.
              </li>
              <br />
              <li>
                  The enrollment fee for F2F program is P5950/batch/child; P4800 for eight (1-on-1) online sessions and
                  P5500 for ten sessions of group class of 4 pax. One hour/online session.  Advance payment is required.
                  Can pay thru gcash 0922-822-6319 or BDO account # 001480 1353 70 both under Milagros C. Emperado
              </li>
              <br />
              <li>
                  Receipt copy of payment can be emailed at mccchess@yahoo.com or send it thru our facebook fan page:
                  milo checkmate chess clinics and sports academy or thru our messenger and viber. An acknowledgement
                  for payment received will be forwarded thru messages.
              </li>
              <br />
              <li>
                  F2F program’s enrollees are required to bring their own chess set, notebook and pen during the session.
                  Wear or bring face mask. For online classes, the chess positions are shared on the screen.
              </li>
              <br />
              <li>
                  To enroll online, please download the pre-enrollment form. Can also register onsite and fill-up the
                  Milo Checkmate enrollment form and pay to the designated coach and ask for a receipt.
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
