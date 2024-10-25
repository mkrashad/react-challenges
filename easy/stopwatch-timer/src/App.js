import './App.css';
import { useState } from 'react';

export default function App() {
  const [seconds, setSeconds] = useState(55);
  const [minutes, setMinutes] = useState(0);
  const [intervalId, setIntervalId] = useState(0);

  const startTimer = () => {
    const newIntervalId = setInterval(() => {
      setSeconds((seconds) => seconds + 1);
    }, 1000);
    setIntervalId(newIntervalId);
  };
  const stopTimer = () => {
    clearInterval(intervalId);
  };

  const resetTimer = () => {
    clearInterval(intervalId);
    setMinutes(0);
    setSeconds(0);
  };

  return (
    <div className='container'>
      <h1>Timer</h1>
      <span> {minutes} mins </span>
      <span>
        {seconds >= 60 && (
          <span>
            {setMinutes(minutes + 1)} {setSeconds(0)}
          </span>
        )}{' '}
        secs
      </span>
      <div>
        <button onClick={startTimer}>Start</button>
        <button onClick={stopTimer}>Stop</button>
        <button onClick={resetTimer}>Reset</button>
      </div>
    </div>
  );
}
