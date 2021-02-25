import { Button } from 'govuk-react';
import React from 'react';
import { post } from '../api';

export const Home = () => (
  <div>
    <Button onClick={() => post('session')}>Begin session</Button>
  </div>
);

export default Home;
