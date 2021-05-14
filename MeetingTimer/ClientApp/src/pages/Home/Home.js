import React from 'react';
import { Radios, Button } from 'govuk-react-jsx';

const Home = () => (
  <div className="govuk-width-container">
    <main className="govuk-main-wrapper">
      <div className="govuk-grid-row">
        <div className="govuk-grid-column-two-thirds">
          <h1 className="govuk-heading-xl">DfE Meeting Timer</h1>
          <Radios
            fieldset={{
              legend: {
                children: 'Length of timer',
                className: 'govuk-fieldset__legend--m',
              },
            }}
            hint={{
              children: 'Select one of the options below',
            }}
            items={[
              {
                children: '5 minutes',
                value: 300,
              },
              {
                children: '10 minutes',
                value: 600,
              },
              {
                children: '15 minutes',
                value: 900,
              },
              {
                children: '20 minutes',
                value: 1200,
              },
            ]}
            name="example-default"
          />
          <Button>Start now</Button>
        </div>
      </div>
    </main>
  </div>
);

export default Home;
