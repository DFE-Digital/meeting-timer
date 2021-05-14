import React from 'react';
import Session from '../../components/Session';
import Timer from '../../components/Timer';

const Home = () => (
  <div className="govuk-width-container">
    <main className="govuk-main-wrapper">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl">Start a session</h1>
          <Session />
          <Timer timeInSeconds={120} />
        </div>
      </div>
    </main>
  </div>
);

export default Home;
