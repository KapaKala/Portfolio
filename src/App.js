import React from 'react';
import Portfolio from './portfolio/Portfolio';
import Landing from './landing/Landing';
import About from './about/About';
import Contact from './contact/Contact';
import FourOhFour from './fourOhFour/FourOhFour';
import { Route, NavLink, Switch, withRouter } from 'react-router-dom';
import { TransitionGroup, CSSTransition} from 'react-transition-group';
import './App.css';
import {ClearShit} from './landing/Landing';

const PageFade = props => (
    <CSSTransition
        {...props}
        classNames="fadeTranslate"
        timeout={600}
        mountOnEnter={true}
        unmountOnExit={true}
    />
);

const scrollToTop = () => {
    window.scrollTo(0, 0);
    ClearShit();
};

const activeStyle = {
    transition: 'all 0.6s ease-in-out',
    // textDecoration: 'underline',
    background: 'blue'
};

const NavLayout = ({ children }) => (
    <div className="nav">
            <ul>
                <li>
                    <NavLink exact onClick={scrollToTop()} to="/" activeStyle={activeStyle}>Home</NavLink>
                </li>
                <li>
                    <NavLink exact onClick={scrollToTop()} to="/works" activeStyle={activeStyle}>Works</NavLink>
                </li>
                <li>
                    <NavLink exact onClick={scrollToTop()} to="/about" activeStyle={activeStyle}>About</NavLink>
                </li>
                <li>
                    <NavLink exact onClick={scrollToTop()} to="/contact" activeStyle={activeStyle}>Contact</NavLink>
                </li>
            </ul>
        {children}
    </div>
);

const App = props => {
    return (
        <NavLayout>
            <TransitionGroup>
                <PageFade key={props.location.key}>
                    <div className="App fix-container">
                        <Switch location={props.location}>
                            <Route exact path="/" component={Landing}/>
                            <Route exact path="/works" component={Portfolio}/>
                            <Route exact path="/about" component={About}/>
                            <Route exact path="/contact" component={Contact}/>
                            <Route path="*" component={FourOhFour}/>
                        </Switch>
                    </div>
                </PageFade>

            </TransitionGroup>
            {/*<div className="slide-button"><a>↑</a></div>*/}
        </NavLayout>
    );
};

export default withRouter(App);
