import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
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
      open: false,
    };

    this.click = this.click.bind(this);
    this.menuClick = this.menuClick.bind(this);
    this.goToNext = this.goToNext.bind(this);
    this.onKeyDown = this.onKeyDown.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', this.onKeyDown);
  }

  componentWillUnmount() {
    window.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown(e) {
    if (e.key === 'Escape' && this.state.open) {
      this.setState({ open: false });
    }
  }

  click() {
    this.setState({ open: !this.state.open });
  }

  menuClick() {
    this.click();
    this.props.scrollToTop();
  }

  goToNext() {
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
  }

  render() {
    return (
      <div className="content-wrapper">
        <div className="nav-container">
          <div
            className={this.state.open ? 'menu-container open' : 'menu-container close'}
            onClick={this.click}
            onKeyPress={() => {
              this.setState({ open: false });
            }}
            role="button"
            tabIndex="0"
          >
            <span />
            <span />
            <span />
          </div>
          <NavLink
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
        {this.props.children}
      </div>
    );
  }
}

Nav.propTypes = {
  location: PropTypes.shape().isRequired,
  children: PropTypes.shape().isRequired,
  scrollToTop: PropTypes.func.isRequired,
};
