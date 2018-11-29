import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Nav.css';

export default class Nav extends Component {
  state = { open: false };

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    if (e.key === 'Escape' && this.state.open) {
      this.setState({ open: false });
    }
  };

  activeStyle = {
    color: 'rgba(255,255,255,1)',
  };

  click = () => {
    this.setState({ open: !this.state.open });
  };

  menuClick = () => {
    this.click();
    this.props.scrollToTop();
  };

  goToNext = () => {
    switch (this.props.location.pathname) {
      case '/':
        document.title = 'Home - Henri Kankaanpää';
        return '/works';
      case '/works':
        document.title = 'Works - Henri Kankaanpää';
        return '/about';
      case `/works/${this.props.location.pathname.slice(-1)}`:
        return '/works';
      case '/about':
        document.title = 'About - Henri Kankaanpää';
        return '/contact';
      case '/contact':
        document.title = 'Contact - Henri Kankaanpää';
        return '/';
      default:
        return '/';
    }
  };

  render() {
    return (
      <div>
        <div className={this.state.open ? 'nav-container open' : 'nav-container'}>
          <div
            className={this.state.open ? 'menu-container open' : 'menu-container close'}
            onClick={this.click}
            onKeyPress={() => {
              this.onKeyDown();
            }}
            role="button"
            tabIndex="0"
          >
            <span />
            <span />
            <span />
          </div>
          <NavLink
            onClick={() => {
              this.setState({ open: false });
            }}
            className={
              this.props.location.pathname === '/contact' ||
              this.props.location.pathname === `/works/${this.props.location.pathname.slice(-1)}`
                ? 'nextpage-container up'
                : 'nextpage-container'
            }
            to={this.goToNext()}
            style={{ textDecoration: 'none', color: '#eee' }}
          >
            <span />
            <span />
          </NavLink>
        </div>
        <div
          onClick={this.click}
          onKeyDown={this.click}
          role="button"
          tabIndex="0"
          className={this.state.open ? 'overlay open' : 'overlay close'}
        >
          <ul>
            <li>
              <NavLink exact onClick={this.menuClick} to="/" activeStyle={this.activeStyle}>
                home
              </NavLink>
            </li>
            <li>
              <NavLink exact onClick={this.menuClick} to="/works" activeStyle={this.activeStyle}>
                works
              </NavLink>
            </li>
            <li>
              <NavLink exact onClick={this.menuClick} to="/about" activeStyle={this.activeStyle}>
                about
              </NavLink>
            </li>
            <li>
              <NavLink exact onClick={this.menuClick} to="/contact" activeStyle={this.activeStyle}>
                contact
              </NavLink>
            </li>
          </ul>
        </div>
        <div className="content-wrapper">{this.props.children}</div>
      </div>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.shape().isRequired,
  children: PropTypes.shape().isRequired,
  scrollToTop: PropTypes.func.isRequired,
};
