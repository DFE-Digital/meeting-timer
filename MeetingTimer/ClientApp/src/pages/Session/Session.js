import React from 'react';

const Session = (props) => {
  const { match } = props;
  const {
    params: { id },
  } = match;

  return (
    <div className="govuk-width-container">
      <h1>hi {id}</h1>
    </div>
  );
};

export default Session;
