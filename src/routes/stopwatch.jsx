import { useEffect, useState } from "react";

export default function Stopwatch() {
  // store and modify current stopwatch time
  const [stopwatchTime, setStopwatchTime] = useState(0);

  // toggle stopwatch running on or off
  const [stopwatchTimerOn, setStopwatchTimerOn] = useState(false);

  // update browser tab title with timer
  document.title =
    ("0" + Math.floor((stopwatchTime / 60000) % 60)).slice(-2) +
    ":" +
    ("0" + Math.floor((stopwatchTime / 1000) % 60)).slice(-2);

  useEffect(() => {
    let stopwatchInterval = null;

    if (stopwatchTimerOn) {
      stopwatchInterval = setInterval(() => {
        setStopwatchTime((prevTime) => prevTime + 10);
      }, 10);
    } else if (!stopwatchTimerOn) {
      clearInterval(stopwatchInterval);
    }

    return () => clearInterval(stopwatchInterval);
  }, [stopwatchTimerOn]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <p className="Timers">
        <span>
          {/*min*/ ("0" + Math.floor((stopwatchTime / 60000) % 60)).slice(-2)}
        </span>
        Minutes
        <br />
        <br />
        <span>
          {/*sec*/ ("0" + Math.floor((stopwatchTime / 1000) % 60)).slice(-2)}
        </span>
        Seconds
        {/*hundreds*/}
        {/*<span>*/}
        {/*  {("0" + ((stopwatchTime / 10) % 100)).slice(-2)}*/}
        {/*</span>*/}
      </p>
      <button
        onClick={() => {
          setStopwatchTimerOn(true);
        }}
      >
        Start
      </button>{" "}
      {""}
      <button
        onClick={() => {
          setStopwatchTimerOn(false);
        }}
      >
        Stop
      </button>{" "}
      {""}
      <button
        onClick={() => {
          setStopwatchTime(0);
        }}
      >
        Reset
      </button>
    </main>
  );
}
