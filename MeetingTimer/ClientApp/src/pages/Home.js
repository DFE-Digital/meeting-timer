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
        <div className="govuk-width-container">
            <a href="/" className="govuk-back-link">Back</a>
            <main className="govuk-main-wrapper">
                <div className="govuk-grid-row">
                    <div className="govuk-grid-column-two-thirds">
                        <h1 className="govuk-heading-xl">Start a session</h1>
                        <div>
                            <button className="govuk-button" type="button" onClick={() => beginSession()}>Begin session</button>
                            {loading ? (
                                <p>Loading...</p>
                            ) : (
                                    session && <p>{`Started session number ${session}`}</p>
                                )}
                        </div>
                    </div>
                </div>
            </main>
        </div>
    );
};

export default Home;