import React from 'react';
import '../main.scss';
import Header from './Header/Header';
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

export default Layout;
