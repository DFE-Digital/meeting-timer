import React, { useLayoutEffect } from 'react';
import { Route } from 'react-router';
import { useLocation } from 'react-router-dom';
import { initAll } from 'govuk-frontend';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {
  const { pathname } = useLocation();

  useLayoutEffect(() => {
    initAll();
  }, [pathname]);

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Layout>
  );
};

export default App;
