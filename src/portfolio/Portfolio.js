import React, { Component } from 'react';
import './Portfolio.css';
import Info from './Info';
import anime from 'animejs';
import items from './items';

export default class Portfolio extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loadedImages: 0,
      loaded: false,
      currentInfo: 0,
      displayInfo: false,
    };

    this.createInfo = this.createInfo.bind(this);
    this.closeInfo = this.closeInfo.bind(this);
  }

  loadedShit() {
    this.setState({loadedImages: this.state.loadedImages+1});
    if (this.state.loadedImages+1 === items.length) {
      this.setState({loaded: true});
      // this.animate();
    }
  }

  createContent() {
    return items.map((obj, i) => {
      return (
        <div key={i} onClick={() => {this.createInfo(i)}} className={"portfolio-item item-"+i} style={{opacity: 1, transform: "translateY(0 )", backgroundImage: "url(" + obj.img + ")"}}>
          <div className="portfolio-item-name">{obj.name}</div>
          <div className="item-overlay" />
          {/*<img className="portfolio-item-img" src={obj.img} onLoad={this.loadedShit.bind(this)} alt=""/>*/}
        </div>);
      {/*<div key={obj.id} className={"portfolio-item item-"+i} style={{backgroundImage: "url(" + obj.img + ")", opacity: 1}}>*/}
      {/*<div ref="name" className="hidden name">*/}
      {/*<h3>{obj.name}</h3>*/}
      {/*</div>*/}
      {/*<div ref="description" className="hidden description">*/}
      {/*<h5>{obj.description}</h5>*/}
      {/*</div>*/}
      {/*<div ref="links" className="hidden links">*/}
      {/*{obj.links.map((link, i) => {*/}
      {/*return <a key={i} href={link.url}><img src={link.img} alt={link.alt}/></a>*/}
      {/*})}*/}
      {/*</div>*/}
      {/*</div>*/}
    })
  }

  createInfo(i) {
    this.setState({currentInfo: i});
    this.setState({displayInfo: !this.state.displayInfo});
  }

  closeInfo() {
    this.setState({displayInfo: false})
  }

  componentWillMount() {

  }

  componentDidMount() {
    console.log("component did mount");
    // this.animate();
  }


  render() {
    return (
      <div className="portfolio-wrapper">
        <div className="portfolio-container">
          <Info visible={this.state.displayInfo} close={this.closeInfo} info={items[this.state.currentInfo]}/>
          <div className="portfolio-row">
            {this.createContent()}
          </div>
        </div>
      </div>
    )
  }
}
