import React, { useState, useEffect } from 'react';

function Timer({ time }) {
  const [seconds, setSeconds] = useState(time);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalId);
      setIntervalId('done');
    }
  });

  const startTimer = () => {
    // track setInterval ID
    let newIntervalId = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    setIntervalId(newIntervalId);
  }

  let formattedTime = new Date(seconds * 1000).toISOString();
  let formattedTimeSubstring;

  if (seconds < 540) {
    formattedTimeSubstring = formattedTime.substring(15, 19);
  } else if (seconds < 3600) {
    formattedTimeSubstring = formattedTime.substring(14, 19);
  } else {
    formattedTimeSubstring = formattedTime.substring(12, 19);
  }


  return (
    <div
      className={'time '+(intervalId === 'done' ? 'done' : 'i')}
      onClick={startTimer}
    >
      {formattedTimeSubstring}
    </div>
  );
}

export default Timer;
