import React, { useState } from 'react';
import { Radios, Button } from 'govuk-react-jsx';
import { useHistory } from 'react-router-dom';
import { post } from '../../utils/api';

const Home = () => {
  const history = useHistory();
  const [length, setLength] = useState(null);

  const beginSession = async () => {
    let sessionData = { sessionId: 1 };
    try {
      sessionData = await post('session');
    } catch (err) {
      console.log(err); // Set message
    }
    return sessionData.sessionId;
  };

  const handleChange = (event) => {
    setLength(event.target.value);
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    const id = await beginSession();
    history.push(`/session/${id}?length=${length}`);
  };

  return (
    <div className="govuk-width-container">
      <main className="govuk-main-wrapper">
        <div className="govuk-grid-row">
          <div className="govuk-grid-column-two-thirds">
            <h1 className="govuk-heading-xl">DfE Meeting Timer</h1>
            <form onSubmit={handleSubmit}>
              <Radios
                onChange={handleChange}
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
              />
              <Button>Start now</Button>
            </form>
          </div>
        </div>
      </main>
    </div>
  );
};

export default Home;
