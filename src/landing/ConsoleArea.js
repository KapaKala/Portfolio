import React, {Component} from 'react';

export default class ConsoleArea extends Component {
    constructor(props) {
        super(props);

        this.state = {
            text: this.props.text,
            console: this.props.console,
            history: this.props.history
        };

        // this.iterateHistory = this.iterateHistory.bind(this);
    }

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

    render() {
        let history = this.props.history.map((o, i) => {
           return (
            <div ref="history-row" key={i}>
                <h1 ref={"history-command-" + i}>
                    <span key={i}>{this.props.console + o.text}</span>
                </h1>
                <h1 ref={"history-reply-" + i}>
                    <span key={i}>{o.reply}</span>
                </h1>
            </div>
           )});

        return (
            <div className="console-container">
                <div className="history">
                    {history}
                </div>
                <div className="prompt">
                    <h1>
                        <span id={this.props.id}>{this.state.console}</span>
                        <span className="console-text-area" >{this.props.text}</span>
                        <span ref="console-area-cursor" className={this.props.blinking ? "blinking" : "not-blinking"}>{this.props.cursor}</span>
                    </h1>
                </div>


            </div>
        )
    }
}