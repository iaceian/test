import React from 'react'
import { Link } from 'react-router-dom'
import { Panel, PanelHeader, PanelBody } from '../../../components/panel/panel.jsx'

function Leg1Details() {
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
        1st leg MCC Fide-rated Invitational Standard 1800 below Chess Tournament
        Oct. 11-12, 10:10am- 07:00pm, at Starmall Edsa Shaw, Mandaluyong City
        </PanelHeader>
        <PanelBody>
          <ol>
            <li>
              The tournament is open to all players with Fide-standard ratings below 1800, regardless of ages and gender.
              Registration for unrated is limited and accepted on a first come, first serve basis.
            </li>
            <br />
            <li>The starting rank of players shall be based on the latest FIDE Standard Rating List.</li>
            <br />
            <li>Recording of moves in Algebraic Notation is mandatory throughout the game.</li>
            <br />
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
                          <td rowSpan={4}>Oct.11 (Sat)</td>
                          <td>10:15am</td>
                          <td>Round 1</td>
                        </tr>
                        <tr>
                          <td>12:45pm</td>
                          <td>Round 2</td>
                        </tr>
                        <tr>
                          <td>03:15pm</td>
                          <td>Round 3</td>
                        </tr>
                        <tr>
                          <td>05:30pm</td>
                          <td>Round 4</td>
                        </tr>
                        <br />
                        <tr>
                          <td rowSpan={5}>Oct.12 (Sun)</td>
                          <td>10:15am</td>
                          <td>Round 5</td>
                        </tr>
                        <tr>
                          <td>12:45pm</td>
                          <td>Round 6</td>
                        </tr>
                        <tr>
                          <td>03:15pm</td>
                          <td>Round 7</td>
                        </tr>
                        <tr>
                          <td>06:00pm</td>
                          <td>Awarding</td>
                        </tr>
                        <tr>
                          <td>07:00pm</td>
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
              <strong>Registration.</strong>
              <ol type='a'>
                <li>
                  Registration is done thru online only. Can download the registration form at mccchess.com or may submit the
                  full details of entries thru viber, messenger, text or at fb page: milo checkmate chess clinics and sports academy.
                </li>
                <li>
                  Deadline for rated players is set on October 8. As entries for unrated is limited, registration can be closed anytime.
                </li>
                <li>
                  The entry fees are P400 for currently enrolled on the Milo Checkmate program and P500 for the others.
                  Can pay thru gcash 0922-822-6319 or BDO acct# 001480-1353-70 both under account name Milagros Emperado.
                </li>
                <li>
                  Proof of payment can be submitted thru our messenger, viber or fb: milo checkmate chess clinics and sports academy.
                  Gcash reference number with date of payment, can be sent thru text at 0922-822-6319. No proof, No play.
                </li>
                <li>
                  Participants must have a valid NCFP IDs and are of good standing with MCC.
                </li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Tournament Format</strong>
              <p>
                The tournament shall be played as a seven (7) - round Swiss System. The FIDE Laws of Chess shall apply and the MCC rules and regulations shall be enforced.
                Time control is thirty (30) minutes with thirty (30) second’s increment.   Defaulting time is fifteen (15) minutes (Running Time) after the official start of the game.
              </p>
            </li>
            <li>
              <strong>Tie-Break System</strong>
              <ol type='a'>
                <li>Direct Encounter (DE) - If some or all the tied participants have met each other, the sum of the scores from these encounters is used to produce separate standings.</li>
                <li>Buchholz (BH) - The sum of the scores of each of the opponents of a participant.</li>
                <li>Buchholz Cut-1 (BH-C1) - exclude the opponent's lowest score)</li>
                <li>Buchholz Cut-2 (BH-C2) - Cut the two Least Significant Values</li>
                <li>Sonneborn-Berger (SB) - It is calculated by adding, for each round, a value given by multiplying the final score of the opponents by the points scored against them.</li>
                <li>Number of Wins (WIN) including forfeits- The number of rounds where a participant obtains, with or without playing, as many points as awarded for a win.</li>
              </ol>
            </li>
            <br />
            <li>
              <strong>Corresponding Penalty for the following offenses:</strong>
              <ol>
                <li>ILLEGAL Moves
                  <ul>
                    <li>wrong movement of piece</li>
                    <li>exposing the king to an attack</li>
                    <li>King remaining under check</li>
                    <li>capturing the opponent’s king</li>
                    <li>using two hands in making a move (castling, capturing and promotion)</li>
                    <li>non - replacement of piece after pawn promotion</li>
                    <li>pressing the clock before making a move.</li>
                  </ul>
                  <p>Penalties
                    <div className='row'>
                      <div className='col-xl-6'>
                        <div className='col-xl-10 col-md-6'>
                          <table className='table mb-0'>
                            <tbody>
                              <tr>
                                <td>1st Offense	</td>
                                <td>plus 2 minutes to the opponent’s time</td>
                              </tr>
                              <tr>
                                <td>2nd Offense	</td>
                                <td>loss of the game</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                  </p>
                </li>
                <li>
                  Infringement made by a player such as:(1) displacement of piece/s on the chess board; (2) use of use of force in pressing the clock,
                  (3) improper clock handing, (4) non-recording of moves; and (5) annoying or causing disturbing acts, such as tapping the chess table or whistling shall be penalized as follows:
                  <div className='row'>
                      <div className='col-xl-6'>
                        <div className='col-xl-10 col-md-6'>
                          <table className='table mb-0'>
                            <tbody>
                              <tr>
                                <td>1st Offense	</td>
                                <td>oral warning</td>
                              </tr>
                              <tr>
                                <td>2nd Offense	</td>
                                <td>plus 2 minutes to the opponent’s time</td>
                              </tr>
                              <tr>
                                <td>3rd Offense</td>
                                <td>forfeiture of the game</td>
                              </tr>
                            </tbody>
                          </table>
                        </div>
                      </div>
                    </div>
                </li>
              </ol>
            </li>
            <br />
            <li>
              The use of <b>mobile phones</b> or <b>any electronic means of communication</b> is not allowed during a game.
              A player who will violate the aforementioned rule shall lose his/her game by forfeiture.
            </li>
            <br />
            <li><b>Spectators:</b> All non-players are prohibited from remaining in the playing area. Additionally, players are not allowed to analyze or stay in the area after their games.</li>
            <br />
            <li>
              <strong>Chief Arbiter and the Appeals Committee</strong>
              <br />
                The Metropolitan Chess Center’ President, who is also acting as the Chief Arbiter, shall appoint the Chairman of Appeals.
                The Appeals Committee shall consist of three members and two reserves representing five different cities.
            </li>
            <br />
            <li>
              <strong>Appeals</strong>
              <br />
              A protest against a decision of an Arbiter must be submitted in writing to the Chief Arbiter within 15 minutes after the end of the relevant playing session.
              In submitting a protest, a protest fee of P1,000.00 (One Thousand Pesos) shall be paid to the Appeals Committee which is non-refundable.
              The decision of the Appeals Committee shall be final and binding immediately.
            </li>
            <br />
            <li>
              <strong>CHESS CLOCKS AND MCC CHESS SETS </strong>
              are numbered according to the “designated board numbers”. Players having the same designated board number, as indicated in the pairing round involved,
              take the responsibilities in keeping the safety of the clock and the set of chess pieces.
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
                          <td>P 7,000.00</td>
                          <td>+ Gold Medal</td>
                        </tr>
                        <tr>
                          <td>Second</td>
                          <td>P 4,000.00</td>
                          <td>+ Silver Medal</td>
                        </tr>
                        <tr>
                          <td>Third</td>
                          <td>P 2,500.00</td>
                          <td>+ Bronze Medal</td>
                        </tr>
                        <tr>
                          <td>Fourth</td>
                          <td>P 1,500.00</td>
                          <td>+ Bronze Medal</td>
                        </tr>
                        <tr>
                          <td>Fifth</td>
                          <td>P 1,500.00</td>
                          <td>+ Bronze Medal</td>
                        </tr>
                        <tr>
                          <td>6th – 10th</td>
                          <td>P 1200.00</td>
                          <td>+ Bronze Medal ea.</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </div>
              <br />
              <div>
                Top Category Performers P800 ea. + Gold Medal (5 entries are required/category)
              </div>
              <div>Seniors (60 yr old & above); Adults (40-59 yr old); Provisional Adulthood (21-39 yr old);</div>
              <div>Juniors - male/female (20 yr old & below); Kiddies (9-12 yr old) and Kiddies (8 yr old & below)</div>
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

export default Leg1Details
