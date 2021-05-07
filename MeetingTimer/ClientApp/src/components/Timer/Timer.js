import React from 'react';
// import Countdown from 'react-countdown';
import { CountdownCircleTimer } from 'react-countdown-circle-timer';

const renderTime = ({ remainingTime }) => {
  if (remainingTime === 0) {
    return <div className="timer">Break over!</div>;
  }

  return (
    <div className="timer">
      <div className="text">Remaining</div>
      <div className="value">
        {Math.floor(remainingTime / 60)}:{remainingTime % 60}
      </div>
    </div>
  );
};

const Timer = () => {
  return (
    <div className="App">
      <CountdownCircleTimer
        isPlaying
        duration={120}
        colors={[['#004777', 0.33], ['#F7B801', 0.33], ['#A30000']]}
        onComplete={() => [true, 1000]}
      >
        {renderTime}
      </CountdownCircleTimer>
    </div>
  );
};
export default Timer;
