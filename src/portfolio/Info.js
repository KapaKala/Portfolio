import React, { Component } from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import '../font-awesome.css';
import './Info.css';

export default class Info extends Component {
  state = {
    loadedImgs: 0,
    displayImg: false,
    currentImg: 0,
    imgWidth: 0,
    imgHeight: document.body.scrollWidth * 0.56 * 0.6,
    translateValue: 0,
  };

  componentDidMount() {
    this.adjustSize();
    window.addEventListener('resize', () => {
      this.adjustSize();
    });
  }

  adjustSize() {
    this.setState({
      imgWidth: this.infoContainer.clientWidth - 32,
      imgHeight: (this.infoContainer.clientWidth - 32) * 0.6,
    });
  }

  nextImg() {
    if (this.state.currentImg === this.props.info.images.length - 1) {
      this.setState({ currentImg: 0, translateValue: 0 });
    } else {
      this.setState({
        currentImg: (this.state.currentImg += 1),
        translateValue: (this.state.translateValue -= this.state.imgWidth),
      });
    }
  }

  prevImg() {
    if (this.state.currentImg === 0) {
      this.setState({
        currentImg: this.props.info.images.length - 1,
        translateValue: -((this.props.info.images.length - 1) * this.state.imgWidth),
      });
    } else {
      this.setState({
        currentImg: (this.state.currentImg -= 1),
        translateValue: (this.state.translateValue += this.state.imgWidth),
      });
    }
  }

  close() {
    this.props.close();
    this.setState({ currentImg: 0, displayImg: false, loadedImgs: 0 });
  }

  confirmImageLoad() {
    this.setState({ loadedImgs: (this.state.loadedImgs += 1) });
    if (this.state.loadedImgs === this.props.info.images.length) {
      this.setState({ displayImg: true });
    }
  }

  createImages() {
    const imageSlides = [];

    this.props.info.images.forEach((o, i) => {
      imageSlides.push(<img
        key={o}
        className="info-image"
        src={o}
        alt={`info-${i}`}
        onLoad={() => this.confirmImageLoad()}
      />);
    });

    return imageSlides;
  }

  render() {
    return (
      <div className={this.props.visible ? 'info-overlay open' : 'info-overlay close'}>
        <div
          ref={(ref) => {
            this.infoContainer = ref;
          }}
          className={this.props.visible ? 'info-container open' : 'info-container close'}
        >
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
            style={{
              display: 'flex',
              width: this.state.imgWidth,
              height: this.state.imgHeight,
            }}
          >
            {!this.state.displayImg ? (
              <div className="img-loader">
                <h1>wait</h1>
              </div>
            ) : null}
            <div
              className="img-wrapper"
              style={{ transform: `translateX(${this.state.translateValue}px)` }}
            >
              {this.createImages()}
            </div>

            <div
              className="img-controls"
              style={{ width: this.state.imgWidth, height: this.state.imgHeight }}
            >
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
