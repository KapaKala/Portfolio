import React, { Component } from 'react';
import './Nav.css';

export default class Nav extends Component {
    render() {
        return (
            <div className="nav-container">
                <h1 className="nav-header">
                    Henkan sivu :^)
                </h1>
                <ul className="nav-links">
                    <li><a href="#">Stuff</a></li>
                    <li><a href="#">More stuff</a></li>
                </ul>
            </div>
        )
    }
}

