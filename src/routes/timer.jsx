import { useEffect, useRef, useState } from "react";
export default function Timer() {
  const [countdownTimerOn, setCountdownTimerOn] = useState(false);
  const [timer, setTimer] = useState(60);
  const id = useRef(null);

  const clear = () => {
    window.clearInterval(id.current);
  };

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

  // const [timerDays, setTimerDays] = useState(10);
  // const [timerHours, setTimerHours] = useState(24);
  // const [timerMinutes, setTimerMinutes] = useState(60);
  // const [timerSeconds, setTimerSeconds] = useState(60);
  // const [countdownTime, setCountdownTime] = useState(0);

  // setup end datetime for timer
  // const countdownTotal =
  //   1000 * timerSeconds * timerMinutes * timerHours * timerDays;
  // const end = new Date(new Date().getTime() + countdownTotal);

  // let counter = 10;
  // let newYearCountdown = setInterval(function(){
  //   console.log(counter);
  //   counter--
  //   if (counter === 0) {
  //     console.log("HAPPY NEW YEAR!!");
  //     clearInterval(newYearCountdown);
  //   }
  // }, 1000);

  // useEffect(() => {
  //   let countdownInterval = null;
  //
  //   if (countdownTimerOn) {
  //     countdownInterval = setInterval(() => {
  //       setCountdownTime((prevTime) => prevTime + 10);
  //     }, 10);
  //   } else if (!countdownTimerOn) {
  //     clearInterval(countdownInterval);
  //   }
  //
  //   return () => clearInterval(countdownInterval);
  // }, [countdownTimerOn]);

  return (
    <main style={{ padding: "1rem 0" }}>
      <p className="Timers">

      {/*<p className="Timers">{timer}</p>Seconds Remaining*/}
      <span>
        {" "}
        {("0" + Math.floor((timer / 60) % 60)).slice(-2)}
      </span>
      Minutes
      <br />
      <br />
      <span>{("0" + Math.floor(timer % 60)).slice(-2)}</span>
      Seconds
      <br/>
      </p>
      <input
        defaultValue={timer}
        onInput={(e) => setTimer(e.target.value)}
        type="number"
        step="1"
        min="0"
        max="9999"
      />{" "}
      <button onClick={() => setCountdownTimerOn(true)}>Start</button>{" "}
      <button onClick={() => setCountdownTimerOn(false)}>Stop</button>
    </main>
  );
}
