import React from 'react';

const bg = require('../images/1401994195056.gif');

const FourOhFour = () => (
  <div
    className="four-oh-four-container"
    style={{
      backgroundImage: `url(${bg})`,
      backgroundSize: 'cover',
      backgroundPosition: '50% 70%',
      width: '100%',
      height: '100%',
      display: 'flex',
    }}
  >
    <div style={{ fontSize: 200, margin: 'auto' }}>
      <h1 className="not-found" style={{ margin: 'auto', padding: 0 }}>
        404
      </h1>
    </div>
  </div>
);

export default FourOhFour;
