import React from 'react';
import PropTypes from 'prop-types';

const ConsoleArea = (props) => {
  // iterateHistory() {
  //     let objects = this.state.history;
  //
  //     if (objects.length > 0) {
  //         objects.map((o, i) => {
  //             console.log(o);
  //             return <h1 key={i}>{o.text}</h1>
  //         })
  //     }
  //
  // }

  const history = props.history.map(o => (
    <div key={o.id}>
      <h1>
        <span>{props.console + o.text}</span>
      </h1>
      <h1 style={{ whiteSpace: 'pre-wrap', width: '100%', wordWrap: 'break-word' }}>
        <span style={o.reply.length > 50 ? { fontSize: '0.5em' } : { fontSize: '1em' }}>
          {o.reply}
        </span>
      </h1>
    </div>
  ));

  return (
    <div className="console-container">
      <div className="history">{history}</div>
      <div className="prompt">
        <h1 className="prompt-text">
          <span id={props.id}>{props.console}</span>
          <span className="console-text-area">{props.text}</span>
          <span className={props.blinking ? 'blinking' : 'not-blinking'}>{props.cursor}</span>
        </h1>
      </div>
    </div>
  );
};

ConsoleArea.propTypes = {
  id: PropTypes.string.isRequired,
  blinking: PropTypes.bool,
  history: PropTypes.arrayOf(PropTypes.shape()).isRequired,
  console: PropTypes.string,
  text: PropTypes.string.isRequired,
  cursor: PropTypes.string,
};

ConsoleArea.defaultProps = {
  blinking: true,
  console: '$',
  cursor: '_',
};

export default ConsoleArea;
