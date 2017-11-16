import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { ChevronRight, ChevronUp } from 'react-feather'
import './Nav.css';

const activeStyle = {
  transition: 'all 0.6s ease-in-out',
  // textDecoration: 'underline',
  color: 'rgba(255,255,255,1)',
};

export default class Nav extends Component {
  constructor(props) {
    super(props);

    this.state = {
      open: false
    };

    this.click = this.click.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.goToNext = this.goToNext.bind(this);
  }

  click() {
    this.setState({open: !this.state.open})
  }

  menuClick() {
    this.click();
    this.props.scrollToTop;
  }

  goToNext() {
    switch(this.props.location.pathname) {
      case "/":
        return "/works";
      case "/works":
        return "/about";
      case "/about":
        return "/contact";
      case "/contact":
        return "/";
      default:
        return "/";
    }
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="nav-container">
          <div className="top-container">
            <div ref="menu" className={this.state.open ? "menu-container open" : "menu-container close"} onClick={this.click}>
              <span />
              <span />
            </div>
            <div className="nav-location">
              <span>{this.props.location.pathname === "/" ? "HOME" : this.props.location.pathname.slice(1).toUpperCase()}</span>
            </div>
            <div className="nav-contact">
              <NavLink to={this.goToNext()} style={{textDecoration: 'none', color: '#eee'}}>
                {this.goToNext() === "/" ? <ChevronUp/> : <ChevronRight/>}
              </NavLink>
            </div>
          </div>
          <div className={this.state.open ? "overlay open" : "overlay close"}>
            <ul>
              <li>
                <NavLink exact onClick={this.menuClick} to="/" activeStyle={activeStyle}>
                  home
                </NavLink>
              </li>
              <li>
                <NavLink exact onClick={this.menuClick} to="/works" activeStyle={activeStyle}>
                  works
                </NavLink>
              </li>
              <li>
                <NavLink exact onClick={this.menuClick} to="/about" activeStyle={activeStyle}>
                  about
                </NavLink>
              </li>
              <li>
                <NavLink exact onClick={this.menuClick} to="/contact" activeStyle={activeStyle}>
                  contact
                </NavLink>
              </li>
            </ul>
          </div>
        </div>
        {this.props.children}
      </div>
    );
  }
}
