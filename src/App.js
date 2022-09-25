import "./App.css";
import React, { useState, useEffect } from "react";

export default function App() {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    let interval = null;

    if (timerOn) {
      interval = setInterval(() => {
        setTime((prevTime) => {
          return prevTime + 10;
        });
      }, 10);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [timerOn]);

  return (
    <div className="container">
    <div className="title">
      <span>Stopwatch</span>
    </div>
      <div className="timer">
        <span>{("0" + (Math.floor(time / 60000) % 60)).slice(-2)}m</span>
        <span>:{("0" + (Math.floor(time / 1000) % 60)).slice(-2)}s</span>
        <span>:{("0" + (time % 100)).slice(-2)}ms</span>
      </div>
      <div className="buttonContainer">
        {!timerOn && time === 0 && (
          <button
            className="Start"
            onClick={() => {
              setTimerOn(true);
            }}
          >
            Start
          </button>
        )}
        {timerOn && (
          <button
            className="Stop"
            onClick={() => {
              setTimerOn(false);
            }}
          >
            Stop
          </button>
        )}
        {!timerOn && time !== 0 && (
          <button
            className="Resume"
            onClick={() => {
              setTimerOn(true);
            }}
          >
            Resume
          </button>
        )}
        {!timerOn && time !== 0 && (
          <button
            className="Restart"
            onClick={() => {
              setTime(0);
            }}
          >
            Restart
          </button>
        )}
      </div>
    </div>
  );
}
