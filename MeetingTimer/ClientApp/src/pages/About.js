import React, { useEffect } from 'react';
import { initAll } from 'govuk-frontend';
import AccordionItem from '../components/AccordionItem';

function About() {
    useEffect(() => {
        initAll();
    })
    return (
        <div className="govuk-width-container">
            <a href="/" className="govuk-back-link">Back</a>
            <h1>About</h1>
            <div
                className="govuk-accordion"
                data-module="govuk-accordion"
                id="accordion-default"
            >
                <AccordionItem title="Hello" content="World"/>
                <AccordionItem title="Hello" content="World"/>
                <AccordionItem title="Hello" content="World"/>
                </div>
            </div>
     
    );
}

export default About;
