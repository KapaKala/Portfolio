import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav/Nav';
import Works from './works/Works';
import Landing from './landing/Landing';
import About from './about/About';
import Contact from './contact/Contact';
import FourOhFour from './fourOhFour/FourOhFour';
import './App.css';

const PageFade = props => (
  <CSSTransition {...props} classNames="fadeTranslate" timeout={500} mountOnEnter unmountOnExit />
);

function scrollToTop() {
  setTimeout(() => {
    window.scrollTo(0, 0);
  }, 125);
}

const App = props => (
  <Nav location={props.location} scrollToTop={scrollToTop}>
    <TransitionGroup>
      <PageFade key={props.location.key}>
        <div className="App fix-container">
          <Switch location={props.location}>
            <Route exact path="/" component={Landing} />
            <Route path="/works" component={Works} />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={FourOhFour} />
          </Switch>
        </div>
      </PageFade>
    </TransitionGroup>
  </Nav>
);

App.propTypes = {
  location: PropTypes.shape().isRequired,
};

export default withRouter(App);
