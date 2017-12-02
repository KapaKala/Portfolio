import { Route, Switch, withRouter } from 'react-router-dom';
import { AnimatedSwitch } from 'react-router-transition';
import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav/Nav';
import Works from './portfolio/Works';
import Landing, { ClearShit } from './landing/Landing';
import About from './about/About';
import Contact from './contact/Contact';
import FourOhFour from './fourOhFour/FourOhFour';
import './App.css';

function scrollToTop() {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 125);
}

function mapStyles(styles) {
  return {
    opacity: styles.opacity,
    transform: `translateY(${styles.offset}px)`,
  };
}

const App = props => (
  <Nav location={props.location} scrollToTop={scrollToTop}>
    <Switch location={props.location}>
      <AnimatedSwitch
        atEnter={{ opacity: 0, offset: -100 }}
        atLeave={{ opacity: 0, offset: 100 }}
        atActive={{ opacity: 1, offset: 0 }}
        mapStyles={mapStyles}
        className="App"
      >
        <Route exact path="/" component={Landing} />
        <Route path="/works" component={Works} />
        <Route path="/about" component={About} />
        <Route path="/contact" component={Contact} />
        <Route component={FourOhFour} />
      </AnimatedSwitch>
    </Switch>
  </Nav>
);

App.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default withRouter(App);
