import React from 'react';
import './FourOhFour.css';

const bg = require('../images/1401994195056.gif');

const FourOhFour = () => (
  <div className="four-oh-four-container" style={{ backgroundImage: `url(${bg})` }}>
    <div className="fof-text-container">
      <h1 className="not-found" style={{ margin: 'auto', padding: 0 }}>
        404
      </h1>
    </div>
  </div>
);

export default FourOhFour;
