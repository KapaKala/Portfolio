import React, {Component} from 'react';
import './About.css'

export default class About extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="about-container">
        <div className="left-container">
          <div className="about-img-container">
            <img className="about-img" src={require('../images/me.jpg')} alt=""/>
          </div>
          <h3>Hello!</h3>
          <p>I am Henri Kankaanpää, a third-year student of business information systems at Tampere University of Applied Sciences.</p>
          <p>My goal is to always produce good-looking, usable and all around awesome products, mainly focusing on full-stack web and mobile development.</p>
        </div>
        <div className="right-container">
          <h3>Skills</h3>
        </div>

      </div>
    )
  }
}