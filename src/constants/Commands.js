import React from 'react';

const randomFact = ['internal_fact_error'];

const reply = (command) => {
  switch (command) {
    case 'fact':
      return randomFact[Math.floor(Math.random() * randomFact.length)];
    case 'help':
      return (
        'Following commands are defined internally:\n' +
        ' fact\t\tA random fact about yours truly\n' +
        ' github\t\tOpens my GitHub page\n' +
        ' nethack\tPlay an in-browser implementation of Nethack\n' +
        ' time\t\tDisplay the current time\n'
      );
    case 'github':
      window.open('https://github.com/KapaKala');
      return '';
    case 'nethack':
      return (
        <iframe
          title="player"
          width="560"
          height="315"
          src="https://www.youtube-nocookie.com/embed/dQw4w9WgXcQ?rel=0&amp;controls=0&amp;showinfo=0&amp;autoplay=1"
          frameBorder="0"
          allowFullScreen
        />
      );
    case 'time': {
      const currentTime = new Date().toLocaleTimeString();
      return `Current time is ${currentTime}`;
    }
    case '':
      return '';
    default:
      return `${command} is not a valid command`;
  }
};

export default reply;
