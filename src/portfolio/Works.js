import React from 'react';
import { Switch, Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Portfolio from './Portfolio';
import Info from './Info';

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateY(${styles.offset}px)`,
  };
}

const Works = () => (
  <AnimatedSwitch
    atEnter={{ opacity: 0, offset: -100 }}
    atLeave={{ opacity: 0, offset: 100 }}
    atActive={{ opacity: 1, offset: 0 }}
    mapStyles={mapStyles}
    className="sub-app"
  >
    <Route exact path="/works" component={Portfolio} />
    <Route path="/works/:id" component={Info} />
  </AnimatedSwitch>
);

export default Works;
