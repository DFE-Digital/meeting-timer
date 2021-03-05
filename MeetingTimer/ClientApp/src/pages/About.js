import React from 'react';
import { Link } from 'react-router-dom';
import AccordionItem from '../components/AccordionItem';
import useGovUKFrontend from '../utils/initialiseComponent'

const About = () => {
  const inputEl = useGovUKFrontend();

  return (
    <div className="govuk-width-container" ref={inputEl}>
      <Link to="/" className="govuk-back-link">
        Back
      </Link>
      <h1>About</h1>
      <div
        className="govuk-accordion"
        data-module="govuk-accordion"
        id="accordion-default"
      >
        <AccordionItem title="Hello" content="World" />
        <AccordionItem title="Hello" content="World" />
        <AccordionItem title="Hello" content="World" />
      </div>
    </div>
  );
};

export default About;
