import { useEffect, useState } from "react";

export default function Stopwatch() {
  // store and modify current stopwatch time
  const [stopwatchTime, setStopwatchTime] = useState(0);
  // toggle stopwatch running on or off
  const [stopwatchTimerOn, setStopwatchTimerOn] = useState(false);

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
      <h2>Stopwatch</h2>
      <h1>{stopwatchTime}</h1>
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
