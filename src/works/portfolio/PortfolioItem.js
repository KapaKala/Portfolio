import React from 'react';
import { NavLink } from 'react-router-dom';
import PropTypes from 'prop-types';

const PortfolioItem = props => (
  <div key={props.item.id} className="portfolio-item">
    <img src={props.item.img} alt="empty" onLoad={props.onLoad} style={{ display: 'none' }} />
    <div
      className="portfolio-image-container"
      style={{ backgroundImage: `url(${props.item.img})` }}
    >
      <div className="img-overlay" />
    </div>
    <div className="portfolio-info">
      <h1 className="portfolio-item-title">{props.item.name}</h1>
      <p>{props.item.description}</p>
      <div className="portfolio-buttons buttons">
        <NavLink
          onClick={() => {
            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 250);
          }}
          to={`${props.url}/${props.item.id}`}
        >
          Show me more!
        </NavLink>
      </div>
    </div>
  </div>
);

PortfolioItem.propTypes = {
  url: PropTypes.string.isRequired,
  item: PropTypes.shape().isRequired,
  onLoad: PropTypes.func.isRequired,
};

export default PortfolioItem;
