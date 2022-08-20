import { useEffect, useRef, useState } from "react";
export default function Timer() {
  const [countdownTimerOn, setCountdownTimerOn] = useState(false);
  const [timer, setTimer] = useState(60);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
  };

  document.title =
    ("0" + Math.floor((timer / 60) % 60)).slice(-2) +
    ":" +
    ("0" + Math.floor(timer % 60)).slice(-2);

  useEffect(() => {
    if (countdownTimerOn) {
      id.current = window.setInterval(() => {
        setTimer((time) => time - 1);
      }, 1000);
    }

    return () => clear();
  }, [countdownTimerOn]);

  useEffect(() => {
    if (timer === 0) {
      clear();
    }
  }, [timer]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <p className="Timers">
        <span> {("0" + Math.floor((timer / 60) % 60)).slice(-2)}</span>
        Minutes
        <br />
        <br />
        <span>{("0" + Math.floor(timer % 60)).slice(-2)}</span>
        Seconds
        <br />
      </p>
      <button onClick={() => setCountdownTimerOn(true)}>Start</button>
      <button onClick={() => setCountdownTimerOn(false)}>Stop</button>
      <input
        defaultValue={timer}
        onInput={(e) => setTimer(e.target.value)}
        type="number"
        step="1"
        min="0"
        max="111599"
      />
    </main>
  );
}
