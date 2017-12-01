import React from "react";
import "./About.css";

const img = require("../images/Untitled.png");

const About = () => (
  <div className="about-container">
    <div className="about-img-container">
      <img className="about-img" src={img} alt="" />
    </div>
    <div className="bottom-container">
      <div className="left-container">
        <h3>Hello!</h3>
        <p>
          I'm Henri Kankaanpää, a third-year business information systems
          student at Tampere University of Applied Sciences.
        </p>
        <p>
          What I like to do is create software that feels good to use and looks
          even better. My main focus has been full stack web and mobile
          development, but there isn't much I'm not interested in doing - who
          doesn't like learning new things?
        </p>
      </div>
      <div className="right-container">
        <h3>Skills</h3>
        <div className="skills-container">
          <div className="frontend-container">
            <h4>Front end</h4>
            <ul>
              <li>HTML5</li>
              <li>CSS3</li>
              <li>JavaScript</li>
              <li>React</li>
              <li>React Native</li>
              <li>Redux</li>
              <li>Java + Java for Android</li>
              <li>libgdx</li>
              <li>C++</li>
            </ul>
          </div>
          <div className="backend-container">
            <h4>Back end</h4>
            <ul>
              <li>Node + Express</li>
              <li>Passwordjs</li>
              <li>Spring</li>
              <li>MySQL</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  </div>
);

export default About;
