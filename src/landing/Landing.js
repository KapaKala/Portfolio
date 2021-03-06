import React, { Component } from 'react';
import FontAwesome from 'react-fontawesome';
import ConsoleArea from './ConsoleArea';
import reply from '../constants/Commands';
import '../assets/font-awesome.css';
import './Landing.css';

let timer;
let animationTimeout;
let blinkTimeout;
let intObject;
let historyMover = 0;

export const ClearShit = () => {
  window.clearTimeout(timer);
  window.clearTimeout(animationTimeout);
  window.clearTimeout(blinkTimeout);
  window.clearInterval(intObject);
  historyMover = 0;
};

export default class Landing extends Component {
  state = {
    console: '~ $ ',
    cursor: '_',
    text: '',
    print: [{ text: '' }, { text: '' }, { text: '' }],
    consoleBlink: false,
    history: [],
    displayConsole: true,
    fullscreen: false,
  };

  componentWillMount() {
    ClearShit();
  }

  componentDidMount() {
    this.animateText();
    document.addEventListener('keydown', this.onKeyDown);
    window.focus();
    if (document.activeElement) {
      document.activeElement.blur();
    }
  }

  componentWillUnmount() {
    ClearShit();
    document.removeEventListener('keydown', this.onKeyDown);
  }

  onKeyDown = (e) => {
    const stateCopy = this.state;

    if (timer) {
      window.clearTimeout(timer);
      timer = null;
    }

    this.setState({ consoleBlink: false });

    // console.log(e.key);
    if (e.key.length === 1) {
      let textCopy = this.state.text;
      this.setState({ text: (textCopy += e.key) });
    } else {
      switch (e.key) {
        case 'ArrowUp':
          e.preventDefault();
          if (this.state.history.length > 0 && historyMover < this.state.history.length) {
            historyMover += 1;
            stateCopy.text = stateCopy.history[stateCopy.history.length - historyMover].text;
            this.setState(stateCopy);
          }
          break;
        case 'ArrowDown':
          e.preventDefault();
          if (historyMover > 0) {
            historyMover -= 1;
            if (historyMover === 0) {
              stateCopy.text = '';
            } else {
              stateCopy.text = stateCopy.history[stateCopy.history.length - historyMover].text;
            }
            this.setState(stateCopy);
          }
          break;
        case 'Backspace': {
          e.preventDefault();
          const { text } = this.state;
          if (text.length > 0) {
            this.setState({ text: text.slice(0, text.length - 1) });
          }
          break;
        }
        case 'Enter':
          stateCopy.history.push({
            id: stateCopy.history.length,
            text: stateCopy.text,
            reply: reply(stateCopy.text),
          });
          stateCopy.text = '';
          this.setState(stateCopy);
          this.landingContainer.scrollTop =
            this.landingContainer.scrollHeight - this.landingContainer.clientHeight;
          break;
        default:
          break;
      }
    }
    timer = window.setTimeout(() => this.setState({ consoleBlink: true }), 1000);
  };

  animateText = () => {
    const { animateRow } = this;
    animateRow('Hello!', 1, this.cursor1, this.console1, () => {
      animateRow('My name is Henri', 2, this.cursor2, this.console2, () => {
        animateRow("I'm a full stack developer", 3, this.cursor3, this.console3, () => {
          this.consoleArea.classList.remove('hidden');

          blinkTimeout = setTimeout(() => {
            this.setState({ consoleBlink: true });
          }, 1000);
        });
      });
    });
  };

  animateRow = (text, id, cursor, consoleElement, callback) => {
    cursor.classList.add('not-blinking');
    cursor.classList.remove('hidden');
    consoleElement.classList.remove('hidden');

    let index = 0;
    intObject = setInterval(() => {
      let stateCopy = this.state.print.slice();
      stateCopy[id - 1].text += text[index];
      this.setState(stateCopy);
      index += 1;
      if (index === text.length) {
        clearInterval(intObject);
        animationTimeout = setTimeout(() => {
          cursor.classList.remove('not-blinking');
          cursor.classList.add('blinking');
          if (callback) {
            stateCopy = this.state.print.slice();
            this.setState(stateCopy);
            cursor.classList.add('hidden');
            callback();
          }
        }, 200);
      }
    }, 60);
  };

  toggleFullscreen = () => {
    this.setState({ fullscreen: !this.state.fullscreen });
  };

  toggleClose = () => {
    this.setState({ displayConsole: !this.state.displayConsole });
  };

  render() {
    return (
      <div className="landing-wrapper">
        <div
          ref={(ref) => {
            this.landingContainer = ref;
          }}
          className={
            this.state.displayConsole
              ? `landing-container ${this.state.fullscreen ? 'fullscreen' : ''}`
              : 'landing-container hidden'
          }
        >
          <div className={this.state.fullscreen ? 'window-titlebar fullscreen' : 'window-titlebar'}>
            <span
              onClick={() => this.toggleClose()}
              onKeyDown={() => {}}
              role="button"
              tabIndex="0"
              className="titlebar-button clickable"
            />
            <span
              onClick={() => this.toggleClose()}
              onKeyDown={() => {}}
              role="button"
              tabIndex="-1"
              className="titlebar-button clickable"
            />
            <span
              onClick={() => this.toggleFullscreen()}
              onKeyDown={() => {}}
              role="button"
              tabIndex="-1"
              className="titlebar-button clickable"
            />
          </div>
          <div className="console-content">
            <div className="landing-row-1">
              <h1>
                <span
                  ref={(ref) => {
                    this.console1 = ref;
                  }}
                  className="hidden"
                >
                  {this.state.console}
                </span>
                <span>{this.state.print[0].text}</span>
                <span
                  ref={(ref) => {
                    this.cursor1 = ref;
                  }}
                  className="hidden"
                >
                  {this.state.cursor}
                </span>
              </h1>
            </div>
            <div className="landing-row-2">
              <h1>
                <span
                  ref={(ref) => {
                    this.console2 = ref;
                  }}
                  className="hidden"
                >
                  {this.state.console}
                </span>
                <span>{this.state.print[1].text}</span>
                <span
                  ref={(ref) => {
                    this.cursor2 = ref;
                  }}
                  className="hidden"
                >
                  {this.state.cursor}
                </span>
              </h1>
            </div>
            <div className="landing-row-3">
              <h1>
                <span
                  ref={(ref) => {
                    this.console3 = ref;
                  }}
                  className="hidden"
                >
                  {this.state.console}
                </span>
                <span>{this.state.print[2].text}</span>
                <span
                  ref={(ref) => {
                    this.cursor3 = ref;
                  }}
                  className="hidden"
                >
                  {this.state.cursor}
                </span>
              </h1>
            </div>
            <div
              ref={(ref) => {
                this.consoleArea = ref;
              }}
              className="hidden"
            >
              <ConsoleArea
                id="input"
                history={this.state.history}
                blinking={this.state.consoleBlink}
                initialCommands={this.state.print}
                console={this.state.console}
                text={this.state.text}
                cursor={this.state.cursor}
              />
              <input className="noinput" autoCapitalize="none" autoComplete="off" type="text" />
            </div>
          </div>
        </div>
        <div
          className={
            this.state.displayConsole ? 'terminal-icon-wrapper hidden' : 'terminal-icon-wrapper'
          }
        >
          <div
            onClick={() => this.toggleClose()}
            onKeyDown={() => {}}
            role="button"
            tabIndex="0"
            className={
              this.state.displayConsole ? 'terminal-icon hidden' : 'terminal-icon clickable'
            }
          >
            <FontAwesome name="terminal" size="3x" className="actual-icon" />
            <span>terminal</span>
          </div>
        </div>
      </div>
    );
  }
}
