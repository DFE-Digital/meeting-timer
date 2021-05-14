import React from 'react';
import Timer from '../../components/Timer';

const Session = (props) => {
  const { timeInSeconds } = props;

  return (
    <div className="govuk-width-container">
      <h1 className="govuk-heading-xl">Timer set</h1>
      <Timer timeInSeconds={timeInSeconds} />
    </div>
  );
};

export default Session;
