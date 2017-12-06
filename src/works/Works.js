import React from 'react';
import { Route } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import Portfolio from './portfolio/Portfolio';
import Info from './info/Info';

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
  >
    <Route exact path="/works" component={Portfolio} />
    <Route path="/works/:id" component={Info} />
  </AnimatedSwitch>
);

export default Works;
