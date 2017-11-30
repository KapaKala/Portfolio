import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import '../font-awesome.css';
import './Info.css';

export default class Info extends Component {
  state = {
    displayImg: false,
    currentImg: 0,
  };

  nextImg() {
    if (this.state.currentImg === this.props.info.images.length - 1) {
      this.setState({ currentImg: 0 });
    } else {
      this.setState({ currentImg: this.state.currentImg + 1 });
    }
  }

  prevImg() {
    if (this.state.currentImg === 0) {
      this.setState({ currentImg: this.props.info.images.length - 1 });
    } else {
      this.setState({ currentImg: this.state.currentImg - 1 });
    }
  }

  close() {
    this.props.close();
    this.setState({ currentImg: 0 });
  }

  render() {
    return (
      <div className={this.props.visible ? 'info-overlay open' : 'info-overlay close'}>
        <div className={this.props.visible ? 'info-container open' : 'info-container close'}>
          <div className="top">
            <h1 className="info-name">{this.props.info.name}</h1>
            <div className="info-links">
              {this.props.info.links.map(link => (
                <a key={link.url} href={link.url} rel="noopener noreferrer" target="_blank">
                  {link.img} <span> {link.alt}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="info-description">
            {this.props.info.description.split('\n').map(o => <div key={o}>{o}</div>)}
          </div>
          <div
            className="img-div"
            style={
              this.state.displayImg
                ? {
                    display: 'inline-block',
                    backgroundImage: `url(${this.props.info.images[this.state.currentImg]})`,
                    width: document.body.scrollWidth * 0.55,
                    height: document.body.scrollWidth * 0.55 * 0.6,
                  }
                : { display: 'none' }
            }
          >
            <div className="img-controls">
              <div
                className="prev-img"
                onClick={() => {
                  this.prevImg();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowLeft') {
                    this.prevImg();
                  }
                }}
                role="button"
                tabIndex="0"
              >
                <span className="control">
                  <FontAwesome name="angle-left" size="3x" />
                </span>
              </div>
              <div
                className="next-img"
                onClick={() => {
                  this.nextImg();
                }}
                onKeyDown={(e) => {
                  if (e.key === 'ArrowRight') {
                    this.nextImg();
                  }
                }}
                role="button"
                tabIndex="-1"
              >
                <span className="control">
                  <FontAwesome name="angle-right" size="3x" />
                </span>
              </div>
            </div>
            <img
              ref={(img) => {
                this.image = img;
              }}
              className="info-image"
              src={this.props.info.images[this.state.currentImg]}
              alt={this.props.info.name}
              onLoad={() => {
                this.setState({ displayImg: true });
              }}
            />
          </div>

          <div
            onClick={() => {
              this.close();
            }}
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                this.close();
              }
            }}
            className="close-button"
            role="button"
            tabIndex="-1"
          >
            <span className="line-1" />
            <span className="line-2" />
          </div>
          {/* <p className="close-button" onClick={this.props.close}>close</p> */}
        </div>
      </div>
    );
  }
}

Info.propTypes = {
  info: PropTypes.shape().isRequired,
  visible: PropTypes.bool.isRequired,
  close: PropTypes.func.isRequired,
};
