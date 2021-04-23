import React from 'react';

const AccordionItem = (props) => {
  const { title, content } = props;

  return (
    <div className="govuk-accordion__section ">
      <div className="govuk-accordion__section-header">
        <h2 className="govuk-accordion__section-heading">
          <span
            className="govuk-accordion__section-button"
            id="accordion-default-heading-1"
            data-testid="title"
          >
            {title}
          </span>
        </h2>
      </div>
      <div
        id="accordion-default-content-1"
        className="govuk-accordion__section-content"
        aria-labelledby="accordion-default-heading-1"
        data-testid="content"
      >
        <p className="govuk-body">{content}</p>
      </div>
    </div>
  );
};

export default AccordionItem;
