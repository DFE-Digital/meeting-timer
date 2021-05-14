import React from 'react';
import { Route, useLocation } from 'react-router';
import Layout from '../Layout';
import Home from '../../pages/Home';
import About from '../../pages/About';
import Session from '../../pages/Session/Session';

const useQuery = () => new URLSearchParams(useLocation().search);

const App = () => {
  const query = useQuery();

  return (
    <Layout>
      <Route exact path="/" component={Home} />
      <Route exact path="/about" component={About} />
      <Route exact path="/session/:id">
        <Session timeInSeconds={query.get('length')} />;
      </Route>
    </Layout>
  );
};

export default App;
