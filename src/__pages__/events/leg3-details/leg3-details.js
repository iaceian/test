import React from 'react'
import { Link } from 'react-router-dom'
import { Panel, PanelHeader, PanelBody } from '../../../components/panel/panel.jsx'

function Leg3Details() {
  return (
    <div>
      <ol className='breadcrumb float-xl-end'>
        <li className='breadcrumb-item'>
          <Link to='/events'>Events</Link>
        </li>
        <li className='breadcrumb-item active'>3rd Leg Details</li>
      </ol>
      <h1 className='page-header'>3rd Leg Details</h1>
      <Panel>
        <PanelHeader>
          <div style={{ textAlign: 'center' }}>2026 3rd leg of MCC Fide-rated Standard 1800 below Tournament</div>
          <div style={{ textAlign: 'center' }}>Aug.15-16, from 10:15am- 7:30pm at the 3/F, Starmall Edsa Shaw in Mandaluyong City</div>
        </PanelHeader>
        <PanelBody>
          <h4 style={{ textAlign: 'center' }}>Rules and Regulations</h4>
          <ol>
            <li>The event is Fide-rated and open to all unrated and rated players, regardless of ages and gender.</li>
            <li>The rated participants must have a Fide Standard rating not over 1799.</li>
            <li>The starting rank of players shall be based on the latest FIDE Standard Rating List.</li>
            <li>Recording of moves in Algebraic Notation is mandatory throughout the game.</li>
            <li>No offer of draw before the Black’s 30th move.</li>
            <br />
            <li>
              <strong>Schedule</strong>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='col-xl-5 col-md-6'>
                    <table className='table mb-0'>
                      <tbody>
                        <tr>
                          <td>August 15 (Sat)</td>
                          <td>10:15am Round 1</td>
                          <td>03:15pm Round 3</td>
                        </tr>
                        <tr>
                          <td></td>
                          <td>12:45pm Round 2</td>
                          <td>05:30pm Round 4</td>
                        </tr>
                        <tr>
                          <td rowSpan={4}>August 16 (Sun)</td>
                          <td>10:15am Round 5</td>
                          <td>03:15pm Round 7</td>
                        </tr>
                        <tr>
                          <td>12:45pm Round 6</td>
                        </tr>
                        <tr>
                          <td>06:00pm Awarding</td>
                        </tr>
                        <tr>
                          <td>07:30pm Photo session of the winners</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
            </li>
            <br />
            <li>
                <strong>Registration</strong>
              <ol type='a'>
                <li>Registration is done thru online only. Can download the registration form at mccchess.com.</li>
                <li>Participants must be of good standing with MCC.</li>
                <li>Entry fees are P400 for currently enrolled on the Milo Checkmate program and P500 for the others. Can pay thru gcash 0922-822-6319 or BDO acct# 001480-1353-70 both under account name Milagros Emperado.</li>
                <li>The full details of entries - name, date of birth, screenshot copies for proof of payment and Fide-standard rating can be submitted thru viber, messenger, text, fb fan page: milo checkmate chess clinics and sports academy or email at mccchess@yahoo.com. Gcash reference number with date of payment, can be sent thru text at 0922-822-6319.</li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Tournament Format</strong>
              <br />
              The tournament shall be played as a seven (7) - round Swiss System. The FIDE Laws of Chess shall apply and the MCC rules and regulations shall be enforced. The time control is thirty (30) minutes with thirty (30) second’s increment. Defaulting time is fifteen (15) minutes (Running Time) after the official start of the game.
            </li>
            <br />
            <li>
              <strong>Tie-Break System</strong>
              <br />
              <ol type='a'>
                <li>Direct Encounter</li>
                <li>Buccholz</li>
                <li>Buccholz Cut 1</li>
                <li>Buccholz Cut 2</li>
                <li>Sonnenborn Berger</li>
                <li>Number of wins.</li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Corresponding Penalty for the following offenses, such as:</strong>
              <ol type='a'>
                <li>ILLEGAL Moves such as:</li>
                <ol>
                    <li>wrong movement of piece;</li>
                    <li>exposing the king to an attack</li>
                    <li>King remaining under check</li>
                    <li>capturing the opponent's king</li>
                    <li>using two hands in making a move (castling, capturing and promotion)</li>
                    <li>non-replacement of piece after pawn promotion</li>
                    <li>pressing the clock before making a move</li>
                    <div class="text-center col-xl-2">The Penalties are:</div>
                    <div>1st Offense - plus 2 minutes to the opponent’s time</div>
                    <div>2nd Offense - loss of the game</div>
                </ol>
                <br />
                <li>Infringement made by a player such as:</li>
                    <ol>
                        <li>displacement of piece/s on the chess board</li>
                        <li>use of use of force in pressing the clock</li>
                        <li>improper clock handling</li>
                        <li>non-recording of moves; and</li>
                        <li>bullying or annoying or causing disturbing acts against his/her opponent by tapping the chess table or whistling</li>
                        <div class="text-center col-xl-2">The Penalties are:</div>
                        <div>1st Offense - oral warning</div>
                        <div>2nd Offense - plus 2 minutes to the opponent’s time</div>
                        <div>3rd Offense - forfeiture of the game</div>
                    </ol>
              </ol>
            </li>
            <br />
            <li>The use of mobile phones or any electronic means of communication is not allowed during a game. A player who will violate the aforementioned rule shall lose his/her game by forfeiture.</li>
            <br />
            <li>Spectators: All non-players are prohibited from remaining in the playing area. Additionally, players are not allowed to analyze or stay in the area after their games.</li>
            <br />
            <li>
              <strong>Chief Arbiter and the Appeals Committee</strong>
              <br />
              The Metropolitan Chess Center’ President, who is also acting as the Chief Arbiter, shall appoint the Chairman of Appeals. The Appeals Committee shall consist of three members and two reserves representing five different cities.
            </li>
            <br />
            <li>
              <strong>Appeals</strong>
              <br />
              A protest against a decision of an Arbiter must be submitted in writing to the Chief Arbiter   
              within 15 minutes after the end of the relevant playing session. In submitting a protest, a protest fee of P2,000.00 (Two Thousand Pesos) shall be paid to the Appeals Committee which is non-refundable. The decision of the Appeals Committee shall be final and binding immediately.
            </li>
            <br />
            <li>
              <strong>CHESS CLOCKS AND MCC CHESS SETS </strong>
              are numbered according to the
              <p>
                “designated board numbers”. Players having the same designated board number, as indicated in the pairing round involved, take the
                responsibilities in keeping the safety of the clock and the set of chess pieces.
              </p>
            </li>
            <br />
            <li>
              <strong>Cash Prizes and Consolation Awards</strong>
              <div className='row'>
                <div className='col-xl-12'>
                  <div className='col-xl-6 col-md-6'>
                    <table className='table mb-0'>
                      <tbody>
                        <tr>
                          <td>Champion</td>
                          <td>P 7,000.00 + Trophy + Gold Medal</td>
                        </tr>
                        <tr>
                          <td>Second</td>
                          <td>P 4,000.00 + Silver Medal</td>
                        </tr>
                        <tr>
                          <td>Third</td>
                          <td>P 2,500.00 + Bronze Medal</td>
                        </tr>
                        <tr>
                          <td>Fourth</td>
                          <td>P 1,500.00 + Bronze Medal</td>
                        </tr>
                        <tr>
                          <td>Fifth</td>
                          <td>P 1,500.00 + Bronze Medal</td>
                        </tr>
                        <tr>
                          <td>6th – 10th</td>
                          <td>P 1200.00 + Bronze Medal ea.</td>
                        </tr>
                      </tbody>
                    </table>
                    <br />
                    <div>Top Category Performers - P800 + Trophy + Gold Medal (5 entries are required/category)</div>
                    <div>PWDs; Seniors (60 yr old & above); Adults (40-59 yr old); Provisional Adulthood (21-39 yr old)</div>
                    <div> Juniors - male/female (20 yr old & below); Kiddies (9-12 yr old); Kiddies (8 yr old & below) & PWD.</div>
                  </div>
                </div>
              </div>
            </li>
            <br />
            <li>Wear proper attire. Casual wear with long pants for men. No revealing attire please.</li>
            <br />
            <li>The organizer reserves the right to amend these rules for the interest and success of the event.</li>
            <br />
            <li>ERRING PLAYERS will be subjected to disciplinary actions by the organizer and can be banned for future MCC events.</li>
            <br />
            <li>All results made by the Tournament officials/committee shall be considered final.</li>
            <br />
          </ol>
          <p>Prepared by:</p>
          <p>WNM Milagros C. Emperado</p>
          <p>President- Metropolitan Chess Center & Organizer of Milo Checkmate Chess Clinics</p>
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

export default Leg3Details
