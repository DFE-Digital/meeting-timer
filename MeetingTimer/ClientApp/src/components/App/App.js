import React from 'react';
import { Route } from 'react-router';
import Layout from '../Layout';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Session from '../../pages/Session/Session';

const App = () => (
  <Layout>
    <Route exact path="/" component={Home} />
    <Route exact path="/about" component={About} />
    <Route path="/session/:id" component={Session} />
  </Layout>
);

export default App;
