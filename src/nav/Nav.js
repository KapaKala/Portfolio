import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const activeStyle = {
    transition: 'all 0.6s ease-in-out',
    // textDecoration: 'underline',
    backgroundColor: 'rgba(255,255,255,0.5)'
};

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
        this.menuClick = this.menuClick.bind(this);
    }

    click() {
        if (this.refs["overlay"].classList.contains("hidden")) {
            this.refs["overlay"].classList.remove("hidden");
            this.refs["menu"].innerHTML = "close menu";
            this.refs["menu"].style.color = "darkgray";
        } else {
            this.refs["overlay"].classList.add("hidden");
            this.refs["menu"].innerHTML = "menu";
            this.refs["menu"].style.color = "white";
        }
        console.log("click")
    }

    menuClick() {
        this.props.scrollToTop;
        this.refs["overlay"].classList.add("hidden");
        this.refs["menu"].innerHTML = "menu";
        this.refs["menu"].style.color = "white";
    }

    render() {
        return (
            <div className="nav-container">

                <div ref="menu" className="menu-container" onClick={this.click}>
                    <a>menu</a>
                </div>

                <div ref="overlay" className="overlay hidden">
                    <div className="overlay-content">
                        <div className="overlay-item item-1">
                            <NavLink exact onClick={this.menuClick} to="/" activeStyle={activeStyle}>home</NavLink>
                        </div>
                        <div className="overlay-item item-2">
                            <NavLink exact onClick={this.menuClick} to="/works" activeStyle={activeStyle}>works</NavLink>
                        </div>
                        <div className="overlay-item item-3">
                            <NavLink exact onClick={this.menuClick} to="/about" activeStyle={activeStyle}>about</NavLink>
                        </div>
                        <div className="overlay-item item-4">
                            <NavLink exact onClick={this.menuClick} to="/contact" activeStyle={activeStyle}>contact</NavLink>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}

