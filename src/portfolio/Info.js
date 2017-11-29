import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import faStyles from '../font-awesome.css';
import './Info.css';

export default class Info extends Component {

  state = {
    displayImg: false,
    currentImg: 0
  };

  nextImg() {
    if (this.state.currentImg === this.props.info.images.length-1) {
      this.setState({currentImg: 0});
    } else {
      this.setState({currentImg: this.state.currentImg + 1})
    }
  }

  prevImg() {
    if (this.state.currentImg === 0) {
      this.setState({currentImg: this.props.info.images.length-1})
    } else {
      this.setState({currentImg: this.state.currentImg - 1})
    }
  }

  close() {
    this.props.close();
    this.setState({currentImg: 0});
  }

  render() {
    return (
      <div className={this.props.visible ? "info-overlay open" : "info-overlay close"}>
        <div className={this.props.visible ? "info-container open" : "info-container close"}>
          <div className="top">
            <h1 className="info-name">{this.props.info.name}</h1>
            <div className="info-links">
              {this.props.info.links.map((link, i) => {
                return <a key={i} href={link.url} target="_blank">{link.img} <span> {link.alt}</span></a>
              })}
            </div>
          </div>
          <div className="info-description">
            {this.props.info.description.split('\n').map((o, i) => {
              return <div key={i}>{o}</div>
            })}
          </div>
          <div className="img-div" style={this.state.displayImg ?
            {display: 'inline-block', backgroundImage: "url(" + this.props.info.images[this.state.currentImg] + ")", width: (document.body.scrollWidth * 0.55), height: (document.body.scrollWidth * 0.55) * 0.6} :
            {display: 'none'}}>
            <div className="img-controls">
              <div className="prev-img" onClick={() => {this.prevImg()}}>
                <a className="control" ><FontAwesome name="angle-left" size="3x"/></a>
              </div>
              <div className="next-img" onClick={() => {this.nextImg()}}>
                <a className="control"><FontAwesome name="angle-right" size="3x"/></a>
              </div>
            </div>
            <img ref={ref => this.image = ref} className="info-image" src={this.props.info.images[this.state.currentImg]} alt={this.props.info.name} onLoad={() => {this.setState({displayImg: true})}}/>
          </div>

          <div onClick={() => {this.close()}} className="close-button">
            <span className="line-1" />
            <span className="line-2" />
          </div>
          {/*<p className="close-button" onClick={this.props.close}>close</p>*/}
        </div>
      </div>
    )
  }
}