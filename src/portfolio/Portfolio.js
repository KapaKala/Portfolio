import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import './Portfolio.css';
import items from './items';

export default class Portfolio extends Component {
  createContent() {
    return items.map(obj => (
      <div
        key={obj.id}
        className="portfolio-item"
        // Grid version
        // style={{ backgroundImage: `url(${obj.img})` }}
      >
        {/* Remove for grid version */}
        <div className="portfolio-image-container" style={{ backgroundImage: `url(${obj.img})` }}>
          <div className="img-overlay" />
          {/* <img className="portfolio-image" src={obj.img} alt={obj.name} /> */}
        </div>
        <div className="portfolio-info">
          <h1 className="portfolio-item-title">{obj.name}</h1>
          <p>{obj.description}</p>
          <div className="portfolio-buttons buttons">
            <NavLink
              onClick={() => {
                setTimeout(() => {
                  window.scrollTo(0, 0);
                }, 250);
              }}
              to={`${this.props.match.url}/${obj.id}`}
            >
              Show me more!
            </NavLink>
          </div>
        </div>
        {/* Grid version
        <div className="portfolio-item-name">
          <h2>{obj.name}</h2>
        </div>
        <div className="item-overlay" /> */}
      </div>
    ));
  }

  render() {
    return (
      <div className="portfolio-container">
        <div className="portfolio-row">{this.createContent()}</div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
};
