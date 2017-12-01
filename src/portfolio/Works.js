import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Portfolio from './Portfolio';
import Info from './Info';

const Works = () => (
  <Switch>
    <Route exact path="/works" component={Portfolio} />
    <Route path="/works/:id" component={Info} />
  </Switch>
);

export default Works;
