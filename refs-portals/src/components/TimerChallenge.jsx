import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";
import { useState, useRef } from "react";
import ResultModal from "./ResultModal.jsx";
// let timer; // all across all component have thrown away setTimeout function use useRef();

export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);
export default function TimerChallenge({ title, targetTime }) {
  const timer = useRef();
  const dialog = useRef();
  const [timerStarted, setTimerStarted] = useState(false);
  const [timerExpired, setTimerExpired] = useState(false);

  function handleStart() {
    setTimerStarted(true);
    timer.current = setTimeout(() => {
      setTimerExpired(true);
      dialog.current.open();
    }, targetTime * 1000);
  }
  function handleStop() {
    clearTimeout(timer.current);
  }
  return (
    <>
      {/* {timerExpired && <ResultModal ref={dialog} result="Lost" targetTime={targetTime}/>} */}
      <ResultModal ref={dialog} result="Lost" targetTime={targetTime}/>
      <section className="challenge">
        <h2>{title}</h2>
        {/* {timerExpired && <p>You lost</p>} */}
        <p className="challenge-time">
          {targetTime} second{targetTime > 1 && "s"}
        </p>
        <p>
          <button onClick={timerStarted ? handleStop : handleStart}>
            {timerStarted ? "Stop" : "Start"} Challenge
          </button>
        </p>
        <p className={timerStarted ? "active":''}>
          {timerStarted ? "Timer is running..." : "Timer inactive"}
        </p>
      </section>
    </>
  );
};
