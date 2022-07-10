import React, { useState, useEffect } from 'react';

function Timer({ time }) {
  const [seconds, setSeconds] = useState(time);
  const [intervalId, setIntervalId] = useState(0);

  useEffect(() => {
    if (seconds === 0) {
      clearInterval(intervalId);
    }
  });

  let formattedTime = new Date(seconds * 1000).toISOString();
  let formattedTimeSubstring;

  if (seconds < 60) {
    formattedTimeSubstring = formattedTime.substring(15, 19);
  } else if (seconds < 3600) {
    formattedTimeSubstring = formattedTime.substring(14, 19);
  } else {
    formattedTimeSubstring = formattedTime.substring(11, 19);
  }

  const startTimer = () => {
    let newIntervalId = setInterval(() => {
      setSeconds(seconds => seconds - 1);
    }, 1000);
    setIntervalId(newIntervalId);
  }

  return (
    <div
      className="time"
      onClick={startTimer}
    >
      {formattedTimeSubstring}
    </div>
  );
}

export default Timer;
