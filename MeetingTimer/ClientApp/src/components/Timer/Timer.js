import React from 'react';
import Countdown from 'react-countdown';

const Timer = (props) => {
  const { time } = props;
  return <Countdown date={Date.now() + time} autoStart={false} />;
};
export default Timer;
