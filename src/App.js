import React, { Component } from 'react';
import Portfolio from './portfolio/Portfolio';
import Landing from './landing/Landing';
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
    transition: '1s ease',
    textDecoration: 'underline'
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
                    <NavLink exact to="/404">404</NavLink>
                </li>
                <li>
                    ###Work#In#Progress###
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
                            <Route path="*" component={FourOhFour}/>
                        </Switch>
                    </div>
                </PageFade>

            </TransitionGroup>
            <div className="slide-button"><a>↑</a></div>
        </NavLayout>
    );
};

export default withRouter(App);
