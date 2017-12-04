import React from 'react';
import PropTypes from 'prop-types';
import FontAwesome from 'react-fontawesome';
import Spinner from 'react-spinkit';
import '../font-awesome.css';
import './Info.css';

const Slider = props => (
  <div
    className="img-div"
    // style={{
    //   width: props.width,
    //   height: props.height,
    // }}
  >
    <div className="slider-img-container">
      <div
        className="img-loader"
        style={
          props.display
            ? { opacity: 0, visibility: 'hidden' }
            : { opacity: 1, visibility: 'visible' }
        }
      >
        <Spinner name="double-bounce" />
        <h3>loading</h3>
      </div>
      <div className="img-wrapper" style={{ transform: `translateX(${props.translateValue}px)` }}>
        {props.createImages()}
      </div>

      <div
        className="img-controls"
        // style={{ width: props.width, height: props.height }}
      >
        <div
          className="prev-img"
          onClick={() => {
            props.prevImg();
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowLeft') {
              props.prevImg();
            }
          }}
          role="button"
          tabIndex="0"
        >
          <span className="control">
            <FontAwesome name="angle-left" size="3x" />
          </span>
        </div>
        <div
          className="next-img"
          onClick={() => {
            props.nextImg();
          }}
          onKeyDown={(e) => {
            if (e.key === 'ArrowRight') {
              props.nextImg();
            }
          }}
          role="button"
          tabIndex="-1"
        >
          <span className="control">
            <FontAwesome name="angle-right" size="3x" />
          </span>
        </div>
      </div>
    </div>
  </div>
);

Slider.propTypes = {
  nextImg: PropTypes.func.isRequired,
  prevImg: PropTypes.func.isRequired,
  createImages: PropTypes.func.isRequired,
  translateValue: PropTypes.number.isRequired,
  display: PropTypes.bool.isRequired,
};

export default Slider;
