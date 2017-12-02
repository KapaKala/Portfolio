import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../font-awesome.css';
import './Contact.css';

const Contact = () => (
  <div className="contact-wrapper">
    <div className="contact-container">
      <h1>Get in touch!</h1>
      <p>
        Drop me an email at{' '}
        <a
          className="email-link"
          href="mailto:henri.kankaanpaa@outlook.com?Subject=Hello"
          rel="noopener noreferrer"
          target="_blank"
        >
          henri.kankaanpaa@outlook.com
        </a>{' '}
        and say hi!
      </p>
      <p>You can also find me on the following social media: </p>
      <div className="links">
        <a
          href="https://www.facebook.com/henri.kankaanpaa"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesome name="facebook" />
          <span> facebook</span>
        </a>
        <a
          href="https://www.linkedin.com/in/henri-kankaanpää-877549114"
          rel="noopener noreferrer"
          target="_blank"
        >
          <FontAwesome name="linkedin" />
          <span> linkedin</span>
        </a>
        <a href="https://www.github.com/KapaKala" rel="noopener noreferrer" target="_blank">
          <FontAwesome name="github" />
          <span> github</span>
        </a>
        <a href="https://www.instagram.com/kvpis" rel="noopener noreferrer" target="_blank">
          <FontAwesome name="instagram" />
          <span> instagram</span>
        </a>
      </div>
    </div>
    <div className="footer">
      <span>Made by hand with React and love in Tampere, Finland ❤</span>
    </div>
  </div>
);

export default Contact;
