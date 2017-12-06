import React from 'react';
import './FourOhFour.css';

const bg = require('../images/1401994195056.gif');

const FourOhFour = () => (
  <div className="four-oh-four-container" style={{ backgroundImage: `url(${bg})` }}>
    <div className="fof-text-container">
      <span className="not-found">404</span>
    </div>
  </div>
);

export default FourOhFour;
