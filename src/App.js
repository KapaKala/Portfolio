import { Route, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';
import React from 'react';
import PropTypes from 'prop-types';
import Nav from './nav/Nav';
import Portfolio from './portfolio/Portfolio';
import Landing, { ClearShit } from './landing/Landing';
import About from './about/About';
import Contact from './contact/Contact';
import FourOhFour from './fourOhFour/FourOhFour';
import './App.css';

const PageFade = props => (
  <CSSTransition {...props} classNames="fadeTranslate" timeout={1000} mountOnEnter unmountOnExit />
);

const scrollToTop = () => {
  window.scrollTo(0, 0);
  ClearShit();
};

const App = props => (
  <Nav location={props.location} scrollToTop={scrollToTop}>
    <TransitionGroup>
      <PageFade key={props.location.key}>
        <div className="App fix-container">
          <Switch location={props.location}>
            <Route exact path="/" component={Landing} />
            <Route exact path="/works" component={Portfolio} />
            <Route exact path="/about" component={About} />
            <Route exact path="/contact" component={Contact} />
            <Route path="*" component={FourOhFour} />
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
