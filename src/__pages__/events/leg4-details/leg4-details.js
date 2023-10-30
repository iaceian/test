import React from 'react'
import { Link } from 'react-router-dom'
import { Panel, PanelHeader, PanelBody } from '../../../components/panel/panel.jsx'

function Leg4Details() {
  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item'>
          <Link to='/events'>Events</Link>
        </li>
        <li className='breadcrumb-item active'>4th Leg Details</li>
      </ol>
      <h1 className='page-header'>4th Leg Details</h1>
      <Panel>
        <PanelHeader>
          4th Leg MCC invitational STANDARD OPEN Training games with prizes - (Aug. 26-27, 2023 at G/F, Starmall Edsa Shaw, Mandaluyong City)
        </PanelHeader>
        <PanelBody>
          <ol>
            <li>
              <strong>Objective:</strong> to revive playing with more time to help players, especially those who are starting up, to practice and refine their
              mental processes required during analysis, which lead to greater precision and speed in recognizing and providing solutions for certain positions
              during competitions and to give better tournament experience.
            </li>
            <br />
            <li>
              <strong>Schedule</strong>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='col-xl-5 col-md-6'>
                    <table className='table mb-0'>
                      <tbody>
                        <tr>
                          <td rowSpan={4}>Aug. 26(Sat)</td>
                          <td>10:10am</td>
                          <td>Round 1</td>
                        </tr>
                        <tr>
                          <td>12:30pm</td>
                          <td>Round 2</td>
                        </tr>
                        <tr>
                          <td>02:30pm</td>
                          <td>Round 3</td>
                        </tr>
                        <tr>
                          <td>04:30pm</td>
                          <td>Round 4</td>
                        </tr>
                        <br />
                        <tr>
                          <td rowSpan={5}>Aug. 27(Sun)</td>
                          <td>10:10am</td>
                          <td>Round 5</td>
                        </tr>
                        <tr>
                          <td>12:30pm</td>
                          <td>Round 6</td>
                        </tr>
                        <tr>
                          <td>02:30pm</td>
                          <td>Round 7</td>
                        </tr>
                        <tr>
                          <td>05:00pm</td>
                          <td>Awarding</td>
                        </tr>
                        <tr>
                          <td>06:15pm</td>
                          <td>Photo session of the winners</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </li>
            <br />
            <li>
              <strong>Tournament Format</strong>
              <ol type='a'>
                <li>
                  It is a non-rated event and open to all untitled players and invited masters, regardless of ages and sexes. Participants must be of good
                  standing with MCC.
                </li>
                <li>The seven-round Swiss System shall be applied with time control of 40 minutes and one (1) second increment.</li>
                <li>
                  The FIDE Laws of Chess shall apply and the MCC rules and regulations shall be enforced. (Note: Please read posted updated FIDE Laws of Chess
                  approved July 08/2022 and take effect on Jan. 01, 2023.)
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Tie-Break System</strong>
              <br />
              The order of the players that finish with the same number of points shall be determined by the application of the following
              <br />
              tie-break procedures in sequence, proceeding from (a) to (b) to (c) to (d) to (e) and to (f).
              <ol type='a'>
                <li>Direct Encounter. Winner over the other.</li>
                <li>Greater number of wins.</li>
                <li>Buccholz</li>
                <li>Buccholz Cut 1</li>
                <li>Buccholz Cut 2</li>
                <li>Sonnenborn Berger</li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Registration is online. No onsite registration will be accommodated.</strong>
              <ol type='a'>
                <li>Deadline is set on August 23.</li>
                <li>Download the registration form at MCC website mccchess.com.</li>
                <li>
                  Entry fees: P200 for currently enrolled Milo Checkmate program and masters; P300 for former Milo Checkmate studes; and P350 for others. Can
                  pay thru gcash 0922-822-6319 or BDO acct# 001480-1353-70 both under Milagros Emperado.
                </li>
                <li>
                  Your registration is confirmed once you receive an acknowledgement thru text or messages re payment made for your entry. Must make sure that
                  your name is properly indicated when paying for your entry fee.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Appeals Committee</strong>
              <br />
              The Metropolitan Chess Center President, who is also acting as the Chief Arbiter, shall appoint the Chairman of Appeals. The Appeals Committee
              shall consist of three members and two reserves representing five different cities.
            </li>
            <br />
            <li>
              <strong>Appeals</strong>
              <br />A protest against a decision of an Arbiter must be submitted in writing to the Chief Arbiter within 15 minutes after the end of the relevant
              playing session. In submitting a protest, a protest fee of P1,000.00 (One Thousand Pesos) shall be paid to the Appeals Committee which is
              non-refundable. The decision of the Appeals Committee shall be final and binding immediately.
            </li>
            <br />
            <li>
              <strong>CHESS CLOCKS AND MCC CHESS SETS </strong>
              are numbered according to the
              <p style={{ textDecorationLine: 'underline' }}>
                “designated board numbers”. Players having the same designated board number, as indicated in the pairing round involved, take the
                responsibilities in keeping the safety of the clock and the set of chess pieces.
              </p>
            </li>
            <br />
            <li>Recording of moves is mandatory until the last second. Score sheets must reflect properly the result of the game.</li>
            <br />
            <li>Rearrange the pieces before leaving your board.</li>
            <br />
            <li>No analysis of games is permitted within the playing area.</li>
            <br />
            <li>
              <strong>Corresponding Penalty for the following offenses, such as:</strong>
              <ol type='a'>
                <li>Having cellphone that is switch ON;</li>
                <li>
                  Use of cellphone inside or outside the tournament area while his/her game is in progress,
                  <p className='text-danger'>The penalty for One Offense is forfeiture of the offending player’s game</p>
                </li>
                <li>Exposing or moving his/her King to check;</li>
                <li>Capturing the King;</li>
                <li>
                  Pressing the clock after promoting a pawn without physically changing it to another piece of higher value. (The promoted pawn must have been
                  physically changed before pressing the clock);
                </li>
                <li>Using two hands in castling or in capturing and or in promoting; and</li>
                <li>
                  Bullying the opponent with obvious ruddiness and ill-mannered or improper behavior for an athlete
                  <p className='text-danger'>The penalty for Two Offenses is forfeiture of the offending player’s game</p>
                </li>
                <li>Unnecessary use of force, like using the palm of your hand or pieces, in pressing the clock;</li>
                <li>
                  Disturbing opponent’s vision like having two hands hanging over the board as if in the act of moving a piece with one hand and pressing the
                  clock with the other hand;
                </li>
                <li>
                  Failing to arrange nor return to its original square displaced piece/s before pressing his/her clock; and
                  <p className='text-danger'>The penalty for Three Offenses is forfeiture of the offending player’s game.</p>
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Cash Prizes and Consolation Awards</strong>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='col-xl-10 col-md-6'>
                    <table className='table mb-0'>
                      <tbody>
                        <tr>
                          <td>Champion</td>
                          <td>P 5,000.00</td>
                        </tr>
                        <tr>
                          <td>Second</td>
                          <td>P 3,000.00</td>
                        </tr>
                        <tr>
                          <td>Third</td>
                          <td>P 2,000.00</td>
                        </tr>
                        <tr>
                          <td>Fourth</td>
                          <td>P 1,500.00</td>
                        </tr>
                        <tr>
                          <td>Fifth</td>
                          <td>P 1,000.00</td>
                        </tr>
                        <tr>
                          <td>6th – 10th</td>
                          <td>P 500.00 ea.</td>
                        </tr>
                        <tr>
                          <td>Top Category Performers</td>
                          <td>P750 ea. (five entries are required/category)</td>
                        </tr>
                        <tr>
                          <td>Seniors (60-78 yr old);</td>
                          <td>Adults (40-59 yr old);</td>
                          <td>Provisional Adulthood (21-39 yr old);</td>
                          <td>Juniors (20 yr old & below);</td>
                          <td>(12 yr old & below)</td>
                          <td>and Kiddies (8 yr old & below)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </li>
            <br />
            <li>Wear proper attire. No revealing attire please.</li>
            <br />
            <li>The organizer reserves the right to amend these rules for the interest and success of the event.</li>
            <br />
            <li>ERRING PLAYERS will be subjected to disciplinary actions by the organizer and can be ban for future MCC events.</li>
            <br />
            <li>All results made by the Tournament officials/committee shall be considered final.</li>
            <br />
          </ol>
          <p>Prepared by:</p>
          <img src='/assets/img/signature.png' alt='' style={{ objectFit: 'contain' }} />
          <p>WNM Milagros C. Emperado</p>
          <p>Tournament Director/Chief Arbiter</p>
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

export default Leg4Details
