import React from 'react';
import { Route, Switch } from 'react-router-dom';
import Portfolio from './portfolio/Portfolio';
import Info from './info/Info';

const Works = () => (
  <Switch>
    <Route exact path="/works" component={Portfolio} />
    <Route path="/works/:id" component={Info} />
  </Switch>
);

export default Works;
