import React, { useLayoutEffect } from 'react';
import { Route } from 'react-router';
import { initAll } from 'govuk-frontend';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

const App = () => {

  useLayoutEffect(() => {
    initAll();
  },[]);

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
    </Layout>
  );
};

export default App;
