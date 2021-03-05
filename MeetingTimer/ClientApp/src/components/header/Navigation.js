import React from 'react';
import { Link } from 'react-router-dom';

const Navigation = () => (
  <nav>
    <ul
      id="navigation"
      className="govuk-header__navigation "
      aria-label="Navigation menu"
    >
      <li className="govuk-header__navigation-item">
        <Link className="govuk-header__link" to="/about">
          About
        </Link>
      </li>
    </ul>
  </nav>
);

export default Navigation;
