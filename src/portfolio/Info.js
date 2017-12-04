import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import items from './items';

import './Info.css';

let timeout;
export default class Info extends Component {
  constructor(props) {
    super(props);

    this.state = {
      info: items[this.props.match.params.id],
      loadedImgs: 0,
      displayImg: false,
      currentImg: 0,
      translateValue: 0,
    };

    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.createImages = this.createImages.bind(this);
  }

  componentDidMount() {
    document.title = `${this.state.info.name} - Henri Kankaanpää`;
  }

  componentWillUnmount() {
    clearTimeout(timeout);
  }

  getSlideWidth = () => {
    console.log('hee');
    const img = document.querySelector('.info-image');
    return img.clientWidth;
  };

  nextImg() {
    if (this.state.currentImg === this.state.info.images.length - 1) {
      this.setState({ currentImg: 0, translateValue: 0 });
    } else {
      this.setState({
        currentImg: (this.state.currentImg += 1),
        translateValue: (this.state.translateValue -= this.getSlideWidth()),
      });
    }
  }

  prevImg() {
    if (this.state.currentImg === 0) {
      this.setState({
        currentImg: this.state.info.images.length - 1,
        translateValue: -((this.state.info.images.length - 1) * this.getSlideWidth()),
      });
    } else {
      this.setState({
        currentImg: (this.state.currentImg -= 1),
        translateValue: (this.state.translateValue += this.getSlideWidth()),
      });
    }
  }

  close() {
    timeout = setTimeout(() => {
      this.setState({
        currentImg: 0,
        displayImg: false,
        loadedImgs: 0,
        translateValue: 0,
      });
    }, 250);
  }

  confirmImageLoad() {
    this.setState({ loadedImgs: (this.state.loadedImgs += 1) });
    if (this.state.loadedImgs === this.state.info.images.length) {
      this.setState({ displayImg: true });
    }
  }

  createImages() {
    const imageSlides = [];

    this.state.info.images.forEach((o, i) => {
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
      <div className="info-overlay">
        <div
          ref={(ref) => {
            this.infoContainer = ref;
          }}
          className="info-container"
        >
          <div className="top">
            <h1 className="info-name">{this.state.info.name}</h1>
            <div className="info-links">
              {this.state.info.links.map(link => (
                <a key={link.url} href={link.url} rel="noopener noreferrer" target="_blank">
                  {link.img} <span> {link.alt}</span>
                </a>
              ))}
            </div>
          </div>
          <div className="info-description">
            {this.state.info.description.split('\n').map(o => <div key={o}>{o}</div>)}
          </div>

          <Slider
            width={this.state.imgWidth}
            height={this.state.imgHeight}
            display={this.state.displayImg}
            nextImg={this.nextImg}
            prevImg={this.prevImg}
            createImages={this.createImages}
            translateValue={this.state.translateValue}
          />

          <h2>About this project</h2>
          <p>{this.state.info.about}</p>
          <h2>Technologies</h2>
          <ul>{this.state.info.technologies.map(o => <li key={o}>{o}</li>)}</ul>

          {/* <div
            onKeyDown={(e) => {
              if (e.key === 'Enter') {
                this.close();
              }
            }}
            className="close-button"
            role="button"
            tabIndex="-1"
          > */}

          {/* </div> */}
        </div>
      </div>
    );
  }
}

Info.propTypes = {
  match: PropTypes.shape().isRequired,
};
