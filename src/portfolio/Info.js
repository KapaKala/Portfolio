import React, { Component } from 'react';
import './Info.css';

export default class Info extends Component {

  state = {
    displayImg: false
  }

  render() {
    return (
      <div className={this.props.visible ? "info-overlay open" : "info-overlay close"}>
        <div className={this.props.visible ? "info-container open" : "info-container close"}>
          <div className="info-left">
            <h1 className="info-name">{this.props.info.name}</h1>
            <div className="info-description">
              {this.props.info.description.split('\n').map((o, i) => {
                return <div key={i}>{o}</div>
              })}
            </div>
          </div>
          <div style={this.state.displayImg ? {display: 'block'} : {display: 'none'}}>
            <img className="info-image" src={this.props.info.img} alt={this.props.info.name} onLoad={() => {this.setState({displayImg: true})}}/>
          </div>
          <div className="info-bottom">
            {this.props.info.links.map((link, i) => {
              return <a key={i} href={link.url}>{link.img}</a>
            })}
          </div>
          <div onClick={this.props.close} className="close-button">
            <span className="line-1" />
            <span className="line-2" />
          </div>
          {/*<p className="close-button" onClick={this.props.close}>close</p>*/}
        </div>
      </div>

    )
  }
}