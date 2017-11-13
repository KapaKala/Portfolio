import React, {Component} from 'react';
import './About.css'

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-container">
        <div className="about-img-container">
          <img className="about-img" src={require('../images/me.jpg')} alt=""/>
        </div>
      </div>
    )
  }
}