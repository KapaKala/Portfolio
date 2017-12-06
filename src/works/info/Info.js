import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Slider from './Slider';
import items from '../../constants/items';
import FourOhFour from '../../fourOhFour/FourOhFour';

import './Info.css';

let timeout;
export default class Info extends Component {
  constructor(props) {
    super(props);

    if (this.props.match.params.id >= items.length || isNaN(this.props.match.params.id)) {
      this.state = { redirect: true };
    } else {
      this.state = {
        info: items[this.props.match.params.id] || [],
        imgs: items[this.props.match.params.id].images.length || [],
        loadedImgs: 0,
        displayImg: false,
        currentImg: 0,
        translateValue: 0,
      };
    }

    this.nextImg = this.nextImg.bind(this);
    this.prevImg = this.prevImg.bind(this);
    this.createImages = this.createImages.bind(this);
  }

  componentDidMount() {
    if (this.state.redirect) {
      document.title = "Not found";
    } else {
      document.title = `${this.state.info.name} - Henri Kankaanpää`;
    }
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

  createButtons() {
    const buttons = [];

    for (let i = 0; i < this.state.imgs; i += 1) {
      buttons.push(<div key={i} className="slider-button-wrapper">
        <div
          className={this.state.currentImg === i ? 'slider-button active' : 'slider-button'}
          role="button"
          tabIndex="-1"
          onKeyPress={() => {}}
          onClick={() => this.clickButton(i)}
        >
          {i + 1}
        </div>
                   </div>);
    }

    return buttons;
  }

  clickButton(imgNum) {
    this.setState({ currentImg: imgNum });
    if (imgNum === 0) {
      this.setState({ translateValue: 0 });
    } else {
      this.setState({ translateValue: -this.getSlideWidth() * imgNum });
    }
  }

  render() {
    return (
      <div className="info-overlay">
      {this.state.redirect ? (<FourOhFour />) : (
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
            imgs={this.state.imgs}
            nextImg={this.nextImg}
            prevImg={this.prevImg}
            createImages={this.createImages}
            translateValue={this.state.translateValue}
          />

          <div className="slider-button-container">{this.createButtons()}</div>

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
        )}
      </div>
    );
  }
}

Info.propTypes = {
  match: PropTypes.shape().isRequired,
};
