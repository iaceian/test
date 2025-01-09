import React from 'react'
import { Link } from 'react-router-dom'
import { Panel, PanelHeader, PanelBody } from '../../../components/panel/panel.jsx'

function WomensDetails() {
  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item'>
          <Link to='/events'>Events</Link>
        </li>
        <li className='breadcrumb-item active'>1st Leg Details</li>
      </ol>
      <h1 className='page-header'>1st Leg Details</h1>
      <Panel>
        <PanelHeader>
        1st leg 2025 MCC Invitational Standard Training Games February 22-23 at Starmall Edsa Shaw, Mandaluyong City
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
                          <td rowSpan={4}>February 22 (Sat)</td>
                          <td>10:15am</td>
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
                          <td rowSpan={5}>February 23 (Sun)</td>
                          <td>10:15am</td>
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
                  It is a non-rated event and open to all untitled players and invited masters, regardless of ages and sexes. 
                </li>
                <li>
                  Participants must be of good standing with MCC.
                </li>
                <li>
                  The seven-round Swiss System shall be applied with time control of 40 minutes and three (3) seconds increment. Defaulting time is 30 minutes after the arbiter announces the start of the games.
                </li>
                <li>
                  The FIDE Laws of Chess and the updated FIDE Laws of Chess approved on July 08/2022 which took effect last Jan. 01, 2023 shall be applied and the MCC rules and regulations shall be enforced.
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
              Registration is done thru online only. Deadline is set on February 19. Download the registration form at MCC website mccchess.com.
              (If it failed to open, refresh it by key in Ctrl F5). Entry fees: P300 for currently enrolled on the Milo Checkmate program and invited masters.
              P350 for others. Can pay thru gcash 0922-822-6319 or BDO acct# 001480-1353-70 both under Milagros Emperado.
              Proof of payment can be submitted thru our messenger, viber or fb: milo checkmate chess clinics and sports academy.
              Gcash reference number, can be sent thru text at 0922-822-6319. Your payment will be acknowledged accordingly. No proof, No play.
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
              are numbered according to the “designated board numbers”. Players having the same designated board number, as indicated in the pairing round involved, take the responsibilities in keeping the safety of the clock and the set of chess pieces.
            </li>
            <br />
            <li>Recording of moves is mandatory until the last second. Score sheets must reflect properly the result of the game.</li>
            <br />
            <li>Rearrange the pieces before leaving your board. No analysis of games is permitted within the playing area.</li>
            <br />
            <li>
              <strong>Corresponding Penalty for the following offenses, such as:</strong>
              <ol type='a'>
                <li>Having cellphone that is switch ON;</li>
                <li>
                  Use of cellphone inside or outside the tournament area while his/her game is in progress,
                </li>
                <li>
                  Violation of the TOUCH-MOVE RULE.
                  <p className='text-danger'>THE PENALTY for One Offense is forfeiture of the offending player’s game</p>
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
                </li>
                <li>Unnecessary use of force, like using the palm of your hand or pieces, in pressing the clock;</li>
                <li>
                  Disturbing opponent’s vision like having two hands hanging over the board as if in the act of moving a piece with one hand and pressing the
                  clock with the other hand;
                </li>
                <li>
                  Failing to arrange nor return to its original square displaced piece/s before pressing his/her clock; and
                  <p className='text-danger'>THE PENALTY for TWO Offenses is forfeiture of the offending player’s game</p>
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
                          <td>+ Trophy + Gold Medal</td>
                        </tr>
                        <tr>
                          <td>Second</td>
                          <td>P 3,000.00</td>
                          <td>+ Silver Medal</td>
                        </tr>
                        <tr>
                          <td>Third</td>
                          <td>P 2,000.00</td>
                          <td>+ Bronze Medal</td>
                        </tr>
                        <tr>
                          <td>Fourth</td>
                          <td>P 1,500.00</td>
                          <td>+ Bronze Medal</td>
                        </tr>
                        <tr>
                          <td>Fifth</td>
                          <td>P 1,200.00</td>
                          <td>+ Bronze Medal</td>
                        </tr>
                        <tr>
                          <td>6th – 10th</td>
                          <td>P 1000.00 ea.</td>
                          <td>+ Bronze Medal ea.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <br />
              <div>
                Top Category Performers P750 ea. + Gold Medal (5 entries are required/category)
              </div>
              <div>Seniors (60 yr old & above); Adults (40-59 yr old); Provisional Adulthood (21-39 yr old);</div>
              <div>Juniors - male/female (20 yr old & below); Kiddies (9-12 yr old) and Kiddies (8 yr old & below)</div>
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

export default WomensDetails
