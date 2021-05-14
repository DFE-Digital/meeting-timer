import React from 'react';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const renderTime = ({ remainingTime }) => {
  const SECONDS_IN_MINUTE = 60;

  const calculateMinutes = (time) => Math.floor(time / SECONDS_IN_MINUTE);

  const calculateSeconds = (time) => time % SECONDS_IN_MINUTE;

  const padSeconds = (seconds) => (seconds < 10 ? `0${seconds}` : seconds);

  return remainingTime === 0 ? (
    <p>Break over!</p>
  ) : (
    <div>
      <p>Remaining</p>
      <div>
        {calculateMinutes(remainingTime)}:
        {padSeconds(calculateSeconds(remainingTime))}
      </div>
    </div>
  );
};

const Timer = (props) => {
  const { timeInSeconds } = props;

  return (
    <CountdownCircleTimer
      isPlaying
      duration={timeInSeconds}
      colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
    >
      {renderTime}
    </CountdownCircleTimer>
  );
};

export default Timer;
