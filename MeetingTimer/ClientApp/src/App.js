import React from 'react';
import { Route } from 'react-router';
/* import './main.scss';
// import { initAll } from 'govuk-frontend'; */
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';

const App = () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
  </Layout>
);

/* initAll(); */

export default App;
