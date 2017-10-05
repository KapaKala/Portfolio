import React, {Component} from 'react';

export default class FourOhFour extends Component {
    render() {
        return (
            <div className="four-oh-four-container"
                 style={{backgroundImage: "url(" + require('../images/1401994195056.gif') + ")",
                         backgroundSize: 'cover', backgroundPosition: '50% 70%', height: '100%',
                         display: 'flex'}}>
                <div style={{fontSize: 200, margin: 'auto'}}>
                    <h1 className="not-found" style={{margin: 'auto', padding: 0}}>404</h1>
                </div>
            </div>
        )
    }
}