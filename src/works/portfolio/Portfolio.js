import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Spinner from 'react-spinkit';
import PortfolioItem from './PortfolioItem';
import './Portfolio.css';
import items from '../../constants/items';

export default class Portfolio extends Component {
  state = {
    images: items.length,
    loadedImages: 0,
    display: false,
  };

  confirmImageLoad = () => {
    this.setState({ loadedImages: (this.state.loadedImages += 1) });
    if (this.state.loadedImages === this.state.images) {
      this.setState({ display: true });
    }
  };

  createContent() {
    return items.map(obj => (
      <PortfolioItem
        onLoad={this.confirmImageLoad}
        key={obj.id}
        item={obj}
        url={this.props.match.url}
      />
    ));
  }

  render() {
    return (
      <div className="portfolio-container">
        <div className={this.state.display ? 'portfolio-loader p-hidden' : 'portfolio-loader'}>
          <Spinner name="double-bounce" fadeIn="none" color="white" />
          <h1>Loading</h1>
        </div>
        <div className={this.state.display ? 'portfolio-row' : 'portfolio-row p-hidden'}>
          {this.createContent()}
        </div>
      </div>
    );
  }
}

Portfolio.propTypes = {
  match: PropTypes.shape({ url: PropTypes.string.isRequired }).isRequired,
};
