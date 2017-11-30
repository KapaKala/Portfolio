import React, { Component } from 'react';
import './Portfolio.css';
import Info from './Info';
import items from './items';

const noinfo = {
  id: 0,
  name: '',
  description: '',
  img: '',
  images: [''],
  links: [
    {
      url: '1',
      img: '',
      alt: '',
    },
    {
      url: '2',
      img: '',
      alt: '',
    },
  ],
};

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentInfo: noinfo,
      displayInfo: false,
    };

    this.createInfo = this.createInfo.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }

  componentDidMount() {
    window.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && this.state.displayInfo) {
        this.setState({ displayInfo: false });
      }
    });
  }

  componentWillUnmount() {
    window.removeEventListener('keydown');
  }

  createContent() {
    return items.map((obj, i) => (
      <div
        key={obj.id}
        onClick={() => {
          this.createInfo(i);
        }}
        onKeyDown={(e) => {
          if (e.key === 'Enter') {
            this.createInfo(i);
          }
        }}
        role="button"
        tabIndex="0"
        className="portfolio-item"
        style={{ backgroundImage: `url(${obj.img})` }}
      >
        <div className="portfolio-item-name">
          <h2>{obj.name}</h2>
        </div>
        <div className="item-overlay" />
      </div>
    ));
  }

  createInfo(i) {
    this.setState({ currentInfo: items[i] });
    this.setState({ displayInfo: !this.state.displayInfo });
  }

  closeInfo() {
    window.setTimeout(() => {
      this.setState({ currentInfo: noinfo });
    }, 250);
    this.setState({ displayInfo: false });
  }

  render() {
    return (
      <div
        className={this.state.displayInfo ? 'portfolio-container no-scroll' : 'portfolio-container'}
      >
        <Info
          visible={this.state.displayInfo}
          close={this.closeInfo}
          info={this.state.currentInfo}
        />
        <div className="portfolio-row">{this.createContent()}</div>
      </div>
    );
  }
}
