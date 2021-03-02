import React, { useState } from 'react';
import { post } from '../api';

const Home = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);

  const beginSession = async () => {
    setLoading(true);
    const sessionData = await post('session');
    setSession(sessionData.sessionId);
    setLoading(false);
  };

  return (
    <div>
          <button className="govuk-button" type="submit" onClick={() => beginSession()}>Begin session</button>
          {loading ? (
              <p>Loading...</p>
          ) : (
                  session && <p>{`Started session number ${session}`}</p>
              )}
      </div>
  );
};

export default Home;
