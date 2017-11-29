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
          <img className="about-img" src={require('../images/Untitled.png')} alt=""/>
        </div>
        <div className="bottom-container">
          <div className="left-container">
            <h3>Hello!</h3>
            <p>I am Henri Kankaanpää, a third-year student of business information systems at Tampere University of Applied Sciences.</p>
            <p>My goal is to always produce good-looking, usable and all around awesome products, mainly focusing on full-stack web and mobile development.</p>
          </div>
          <div className="right-container">
            <h3>Skills</h3>
            <h4>Frontend</h4>
            <ul>
              <li>React + Redux</li>
              <li>React Native</li>
              <li>Java + Java for Android</li>
              <li>libgdx</li>
              <li>C++</li>
            </ul>
            <h4>Backend</h4>
            <ul>
              <li>Node + Express</li>
              <li>Spring</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    )
  }
}