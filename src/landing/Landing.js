import React, {Component} from 'react';
import './Landing.css';
import ConsoleArea from './ConsoleArea';
import {reply} from './Commands';

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
    console.log("cleared shit");
};

export default class Landing extends Component {
    constructor (props) {
        super(props);

        this.state = {
            console: "$ > ",
            cursor: "_",
            text: "",
            print: [{text: ""}, {text: ""}, {text: ""}],
            consoleBlink: false,
            history: []
        };

        this.animateRow = this.animateRow.bind(this);
        this.onKeyDown = this.onKeyDown.bind(this);
    }

    animateRow(text, id, callback) {

        this.refs["cursor-" + id].classList.add("not-blinking");
        this.refs["cursor-" + id].classList.remove("hidden");
        this.refs["console-" + id].classList.remove("hidden");

        let index = 0;
        intObject = setInterval(() => {
            let stateCopy = this.state.print.slice();
            stateCopy[id-1].text += text[index];
            this.setState(stateCopy);
            index++;
            if(index===text.length){
                clearInterval(intObject);
                animationTimeout = setTimeout(() => {

                    this.refs["cursor-" + id].classList.remove("not-blinking");
                    this.refs["cursor-" + id].classList.add("blinking");
                    if (callback) {

                        let stateCopy = this.state.print.slice();
                        this.setState(stateCopy);
                        this.refs["cursor-" + id].classList.add("hidden");
                        callback();

                    }
                }, 200);

            }
        }, 60);
    };

    animateText() {
        const animateRow = this.animateRow;
        animateRow("Hello!", 1, () => {
            animateRow("I'm Henri", 2, () => {
                animateRow("I study web and software development", 3, () => {
                    this.refs["console-area"].classList.remove("hidden");
                    // this.refs["landing-container"].focus();


                    blinkTimeout = setTimeout(() => {
                        this.setState({consoleBlink: true})
                    }, 1000);

                });
            });
        });


    }

    onKeyDown(e) {
        let stateCopy = this.state;

        if (timer) {
            console.log("cleared timeout");
            window.clearTimeout(timer);
            timer = null;
        }

        this.setState({consoleBlink: false});

        // console.log(e.key);
        if (e.key.length === 1) {
            let textCopy = this.state.text;
            this.setState({text: textCopy += e.key});
            console.log(this.state.text);
        } else {
            switch (e.key) {
                case "ArrowUp":
                    e.preventDefault();
                    if (this.state.history.length > 0 && historyMover < this.state.history.length) {
                        historyMover++;
                        console.log("Arrow up!");

                        stateCopy.text = stateCopy.history[stateCopy.history.length-historyMover].text;
                        this.setState(stateCopy);
                    }
                    break;
                case "ArrowDown":
                    e.preventDefault();
                    if (historyMover > 0) {
                        historyMover--;
                        console.log("Arrow down!");
                        historyMover === 0 ? stateCopy.text = "" : stateCopy.text = stateCopy.history[stateCopy.history.length-historyMover].text;
                        this.setState(stateCopy);
                    }
                    break;
                case "Backspace":
                    e.preventDefault();
                    let text = this.state.text;
                    if (text.length > 0) this.setState({text: text.slice(0, text.length-1)});
                    break;
                case "Enter":
                    stateCopy.history.push({text: stateCopy.text,
                                            reply: reply(stateCopy.text)});
                    stateCopy.text = "";
                    this.setState(stateCopy);
                    console.log(this.state.history);
                    window.scrollBy(0, document.body.scrollHeight);
                    break;
                default:
                    break;
            }
        }
        timer = window.setTimeout(() => this.setState({consoleBlink: true}), 1000);

    }

    componentWillMount() {
        timer = null;
        animationTimeout = null;
        intObject = null;
        blinkTimeout = null;
    }

    componentDidMount() {
        this.animateText();
        document.addEventListener("keydown", this.onKeyDown);
        window.focus();
        if (document.activeElement) {
            document.activeElement.blur();
        }
    }

    componentWillUnmount() {
        document.removeEventListener("keydown", this.onKeyDown);
    }


    render() {
        const print = this.state.print;
        return (
            <div ref="landing-container" className="landing-container">
                <div className="landing-row-1">
                    <h1>
                        <span ref="console-1" className="hidden">{this.state.console}</span>
                        <span>{print[0].text}</span>
                        <span ref="cursor-1" className="hidden">{this.state.cursor}</span>
                    </h1>
                </div>
                <div className="landing-row-2">
                    <h1>
                        <span ref="console-2" className="hidden">{this.state.console}</span>
                        <span>{print[1].text}</span>
                        <span ref="cursor-2" className="hidden">{this.state.cursor}</span>
                    </h1>
                </div>
                <div className="landing-row-3">
                    <h1>
                        <span ref="console-3" className="hidden">{this.state.console}</span>
                        <span>{print[2].text}</span>
                        <span ref="cursor-3" className="hidden">{this.state.cursor}</span>
                    </h1>
                </div>
                <div ref="console-area" className="hidden">
                    <ConsoleArea id="input" history={this.state.history} blinking={this.state.consoleBlink} initialCommands={print} console={this.state.console} text={this.state.text} cursor={this.state.cursor}/>
                </div>
            </div>
        )
    }
}
