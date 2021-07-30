import React from 'react';
import './styles.scss';
import logo from "./images/logogreen2.png"
import tape1 from "./images/tape1.png"
import { useEffect, useState } from 'react';

function App() {
  const [isPressed, setIsPressed] = useState(true);
  const [audio] = useState(new Audio('http://84.32.162.3/NOIZE.mp3'));
  const [playing, setPlaying] = useState(false);

  const handleClick = () => {
    setIsPressed(!isPressed);
    setPlaying(!playing);
  }

  useEffect(() => {
      playing ? audio.play() : audio.pause();
    },
    [playing]
  );

  useEffect(() => {
    audio.addEventListener('ended', () => setPlaying(false));
    return () => {
      audio.removeEventListener('ended', () => setPlaying(false));
    };
  }, []);

  return (
    <div className="App">
      <main>
      <div className="center">
          <div className="player">
            {/* // frame */}
            <div id="f1" className="frame"></div>
            <div id="f2" className="frame"></div>
            <div id="f3" className="frame"></div>
            <div id="f4" className="frame"></div>

            <div id="f5" className="bg"></div>
            <div id="f6" className="bg"></div>
            <div id="f7" className="bg"></div>
            <div id="f8" className="bg"></div>

            <div id="e1" className="empty">
              <div id="rLeft" className={!isPressed ? "rotate" : ""}><img src={tape1} alt="Tape1"/></div>
              <div id="rRight" className={!isPressed ? "rotate" : ""}><img src={tape1} alt="Tape1"/></div>
            </div>

            <div id="e9" className="empty">
              <img src={logo} alt="Logo"/>
            </div>


            {/* // cassette */}

            <div id="c1" className="cassetteA"></div>
            <div id="c2" className="cassetteA"></div>
            <div id="c3" className="cassetteA"></div>
            <div id="c4" className="cassetteA"></div>

            <div id="c5" className="cassetteB"></div>
            <div id="c6" className="cassetteB"></div>
            <div id="c7" className="cassetteB"></div>
            <div id="c8" className="cassetteB"></div>

            <div id="c9" className="cassetteA"></div>
            <div id="c10" className="cassetteA"></div>
            <div id="c11" className="cassetteA"></div>
            <div id="c12" className="cassetteA"></div>

            <div id="c13" className="cassetteA"></div>
            <div id="c14" className="cassetteA"></div>
            <div id="c15" className="cassetteA"></div>
            <div id="c16" className="cassetteA"></div>

            <div id="c17" className="cassetteA"></div>
            <div id="c18" className="cassetteA"></div>
            <div id="c19" className="cassetteA"></div>
            <div id="c20" className="cassetteA"></div>

            <div id="c21" className="cassetteA"></div>
            <div id="c22" className="cassetteA"></div>
            <div id="c23" className="cassetteA"></div>
            <div id="c24" className="cassetteA"></div>

            {/* // label */}
              <div id="l2" className="labelB"></div>
              <div id="l3" className="labelA"></div>
              <div id="l1" className="labelA"></div>
              <div id="l4" className="labelC"></div>

            {/* // dots */}
            <div id="d1" className="bg"></div>
            <div id="d2" className="bg"></div>
            <div id="d3" className="bg"></div>
            <div id="d4" className="bg"></div>

            <div id="d5" className="labelA"></div>
            <div id="d6" className="bg"></div>
            <div id="d7" className="bg"></div>
            <div id="d8" className="labelB"></div>

            {/* // button */}
            <div role = "button" tabIndex={0} id="button" className={isPressed ? "buttonUp" : "buttonDown"} onClick={handleClick} onKeyDown={() => this.setIsPressed(!isPressed)}>
              {isPressed && <div className="buttonUpIcon"></div>}
              {!isPressed && <div className="buttonDownIcon"></div>}
            </div>

          </div>
        </div>
      </main>
    </div>
  );
}

export default App;
