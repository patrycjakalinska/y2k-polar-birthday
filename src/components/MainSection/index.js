import React, { useState } from 'react'
import styles from './styles.module.css'

const Wave = () => {
  return (
    <div className={styles.waveContainer}>
      <img src='/static/img/fala.png' />
      <img src='/static/img/harnas.png' />
    </div>
  )
}

const Fish = () => {
  return (
    <div className={styles.fishContainer}>
      <div className={styles.fish}>
        <img src='/static/img/ryby.png' />
      </div>
    </div>
  )
}

const Container = () => {
  const [showPopup, setShowPopup] = useState(true)

  const handlePopupClick = () => {
    setShowPopup(false)
    enableSoundAndAutoplay()
  }

  const enableSoundAndAutoplay = () => {
    const video = document.getElementById('myVideo')
    video.muted = false
    video.play()
  }
  return (
    <div className={styles.tableContainer}>
      <table width='780px' border='2px' className={styles.table}>
        <tbody>
          <tr>
            <td width='100px' rowspan='2' class='sidebar'>
              <div align='center'>
                <br />
                <div className={styles.personContainer}>
                  <img width={100} src='/static/img/ogien.gif' />
                </div>
                Plan jest taki że koło 15 zaczniemy grylla na ms, będą jakieś
                atrakcje, gry, zabawy, paluszki, spirytus, kiełba,{' '}
                <strong>Wojciech Trybulec</strong>, kiełba Trybulca (Trybulca
                święta) Potem koło 22 pewnie miasto, shototo, tance, swawola,
                karaoke, libacja, prostytucja, Ziemka nadal nie będzie xd W
                piątek jak ktoś chce to Auchan, potem robimy marynowanko.
              </div>
              <div style={{ marginTop: '1.5rem' }} align='center'>
                <a href='https://www.free-website-hit-counter.com'>
                  <img
                    src='https://www.free-website-hit-counter.com/c.php?d=4&id=171304&s=38'
                    border='0'
                    alt='Free Website Hit Counter'
                  />
                </a>
                <br />
                <small>
                  <a
                    href='https://www.free-website-hit-counter.com'
                    title='Free Website Hit Counter'
                  >
                    Free website hit counter
                  </a>
                </small>
              </div>
            </td>
            <td width='700px' class='content' colspan='2'>
              <p>
                <div className={styles.ziemekContainer}>
                  <img width={350} src='/static/img/ziemka.gif' />
                  <div className={styles.ziemek}>
                    <img width={300} src='/static/img/noentry.gif' />
                    <img width={150} src='/static/img/ziemekprofile.jpeg' />
                  </div>
                </div>
              </p>
            </td>
          </tr>
          <tr>
            <td class='content' colspan='1'>
              <p className={styles.ramiewRamie}>
                ♪♪♪ Za swojego brata jedynego za ekipę pójdę aż po grób Ramię w
                ramię kurwa jak spartanie nas nie złamie ten frajerski gnój ....
                ♪♪♪
              </p>
              <center>
                <form method='post' action='https://poll.pollcode.com/46488418'>
                  <div>
                    <div>
                      <strong>Czy bd na imprezce??</strong>
                    </div>
                    <input
                      type='radio'
                      name='answer'
                      value='1'
                      id='answer464884181'
                    />
                    <label for='answer464884181'>
                      jasne, ze bede byczkuuuu
                    </label>
                    <div></div>
                    <input
                      type='radio'
                      name='answer'
                      value='2'
                      id='answer464884182'
                    />
                    <label for='answer464884182'>
                      Δεν θα περάσω γιατί το gothic περιμένει
                    </label>
                    <div></div>
                    <input
                      type='radio'
                      name='answer'
                      value='3'
                      id='answer464884183'
                    />
                    <label for='answer464884183'>sprzedam opla</label>
                    <div></div>
                    <div align='center'>
                      <input type='submit' value=' Vote ' /> 
                      <input type='submit' name='view' value=' View ' />
                    </div>
                    <div align='right'>
                      pollcode.com{' '}
                      <a href='https://pollcode.com/'>free polls</a>
                    </div>
                  </div>
                </form>
              </center>
            </td>
            <td class='content' rowspan='1'>
              <br />
            </td>
          </tr>
          <tr>
            <td class='content' rowspan='1' colspan='1'>
              <center>
                <h2 style={{ margin: 0 }}>Nasza nutka!!!!</h2>
              </center>
              <center>
                <video width={200} id='myVideo' controls>
                  <source src='/static/hymn.mp4' type='video/mp4' />
                </video>

                <p>
                  <em>
                    <b>Loading: totalny banger</b>
                  </em>
                </p>
              </center>
            </td>
            <td className={styles.reklamaContainer} colspan='2'></td>
          </tr>
        </tbody>
      </table>
      {showPopup && (
        <div className={styles.backdrop}>
          <div className={styles.popup}>
            <p>hejo stary, zgodz sie na puszczenie nutki okej</p>
            <img width={250} src='/static/img/soshy.png' />

            <button onClick={handlePopupClick}>dobrze byczku</button>
          </div>
        </div>
      )}
    </div>
  )
}

const MainSection = () => {
  return (
    <div>
      <marquee className={styles.marquee} direction='right' height='20px'>
        SOBOTA ||| POLAR ||| SOBOTA ||| POLAR ||| SOBOTA ||| POLAR ||| SOBOTA
        ||| POLAR ||| SOBOTA ||| POLAR ||| SOBOTA ||| POLAR ||| SOBOTA ||| POLAR
        ||| SOBOTA ||| POLAR |||
      </marquee>
      <marquee
        className={styles.partyMakersMarquee}
        direction='right'
        height='40px'
      >
        <img height={40} src='/static/img/pawel.png' />
        <img height={40} src='/static/img/olek.png' />
        <img height={40} src='/static/img/arek.png' />
        <img height={40} src='/static/img/pawel.png' />
        <img height={40} src='/static/img/olek.png' />
        <img height={40} src='/static/img/arek.png' />
        <img height={40} src='/static/img/pawel.png' />
        <img height={40} src='/static/img/olek.png' />
        <img height={40} src='/static/img/arek.png' />
      </marquee>
      <Wave />
      <Container />
      <Fish />
    </div>
  )
}

export default MainSection
