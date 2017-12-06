import React, { Component } from 'react';
import PropTypes from 'prop-types';
import PortfolioItem from './PortfolioItem';
import './Portfolio.css';
import items from '../../constants/items';

export default class Portfolio extends Component {
  createContent() {
    return items.map(obj => <PortfolioItem key={obj.id} item={obj} url={this.props.match.url} />);
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
