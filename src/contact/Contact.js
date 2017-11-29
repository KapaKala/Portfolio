import React, { Component } from 'react';
import { Github, Facebook, Instagram } from 'react-feather';
import FontAwesome from 'react-fontawesome';
import faStyles from '../font-awesome.css';
import './Contact.css';

export default class Contact extends Component {
  render() {
    return (
      <div className="contact-container">
        <h1>Get in touch!</h1>
        <p>Drop me an email at
          <span> </span>
          <a className="email-link"
             href="mailto:henri.kankaanpaa@outlook.com?Subject=Hello"
             target="_blank">
            henri.kankaanpaa@outlook.com
          </a>
          <span> </span>
          and say hi!
        </p>
        <p>You can also find me on the following social media: </p>
        <div className="links">
          <a href="https://www.facebook.com/henri.kankaanpaa" target="_blank"><FontAwesome name="facebook"/><span> facebook</span></a>
          <a href="https://www.linkedin.com/in/henri-kankaanpää-877549114" target="_blank"><FontAwesome name="linkedin"/><span> linkedin</span></a>
          <a href="https://www.github.com/KapaKala" target="_blank"><FontAwesome name="github"/><span> github</span></a>
          <a href="https://www.instagram.com/kvpis" target="_blank"><FontAwesome name="instagram"/><span> instagram</span></a>
        </div>
        <div className="footer">
          <span>Made by hand with React and love in Tampere, Finland ❤</span>
        </div>
      </div>
    )
  }
}