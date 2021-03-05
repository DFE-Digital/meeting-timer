import React from 'react';
import { initAll } from 'govuk-frontend';
import '../main.scss';
import Header from './header/Header';
import Footer from './Footer';

const Layout = (props) => {
  const { children } = props;

  return (
    <div>
      <Header />
      {children}

      <Footer />
    </div>
  );
};

initAll();

export default Layout;
