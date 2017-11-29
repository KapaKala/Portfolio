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
    {url: '',
      img: '',
      alt: ''},
    {url: '',
      img: '',
      alt: ''
    }],
};

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedImages: 0,
      loaded: false,
      currentInfo: noinfo,
      displayInfo: false,
    };

    this.createInfo = this.createInfo.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }

  loadedShit() {
    this.setState({loadedImages: this.state.loadedImages+1});
    if (this.state.loadedImages+1 === items.length) {
      this.setState({loaded: true});
    }
  }

  createContent() {
    return items.map((obj, i) => {
      return (
        <div key={i} onClick={() => {this.createInfo(i)}} className="portfolio-item" style={{backgroundImage: "url(" + obj.img + ")"}}>
          <div className="portfolio-item-name"><h2>{obj.name}</h2></div>
          <div className="item-overlay" />
        </div>);
    })
  }

  createInfo(i) {
    this.setState({currentInfo: items[i]});
    this.setState({displayInfo: !this.state.displayInfo});
  }

  closeInfo() {
    window.setTimeout(() => {
      this.setState({currentInfo: noinfo});
    }, 250);
    this.setState({displayInfo: false})
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log("component did mount");
  }


  render() {
    return (
      <div className={this.state.displayInfo ? "portfolio-container no-scroll" : "portfolio-container"}>
        <Info visible={this.state.displayInfo} close={this.closeInfo} info={this.state.currentInfo}/>
        <div className="portfolio-row">
          {this.createContent()}
        </div>
      </div>
    )
  }
}
