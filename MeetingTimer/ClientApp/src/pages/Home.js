import React, { useState } from 'react';
import { Button } from 'govuk-react';
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
      <Button onClick={() => beginSession()}>Begin session</Button>
      {loading ? (
        <p>Loading...</p>
      ) : (
        session && <p>{`Started session number ${session}`}</p>
      )}
    </div>
  );
};

export default Home;
