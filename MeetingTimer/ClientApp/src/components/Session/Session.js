import React, { useState } from 'react';
import { post } from '../../utils/api';

const Session = () => {
  const [session, setSession] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const beginSession = async () => {
    setLoading(true);
    try {
      const sessionData = await post('session');
      setSession(sessionData.sessionId);
    } catch (err) {
      setError(err);
    }
    setLoading(false);
    console.log('test');
    console.log('test');
  };

  const showMessage = () => {
    if (loading) return <p data-testid="loading">Loading...</p>;
    if (session)
      return <p data-testid="session">{`Started session number ${session}`}</p>;
    if (error) return <p data-testid="error">There has been an error</p>;
    return null;
  };

  return (
    <div>
      <button
        className="govuk-button"
        type="button"
        onClick={() => beginSession()}
        data-testid="button"
      >
        Begin session
      </button>
      {showMessage()}
    </div>
  );
};

export default Session;
