import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import './Nav.css';

const activeStyle = {
    transition: 'all 0.6s ease-in-out',
    // textDecoration: 'underline',
    color: 'rgba(255,255,255,1)'
};

export default class Nav extends Component {
    constructor(props) {
        super(props);

        this.click = this.click.bind(this);
        this.menuClick = this.menuClick.bind(this);
    }

    click() {
        if (this.refs["overlay"].classList.contains("open")) {
            this.refs["overlay"].classList.remove("open");
            this.refs["overlay"].classList.add("close");
            this.refs["menu"].innerHTML = "menu";
            this.refs["menu"].style.color = "white";
        } else {
            this.refs["overlay"].classList.remove("close");
            this.refs["overlay"].classList.add("open");
            this.refs["menu"].innerHTML = "close menu";
            this.refs["menu"].style.color = "gray";
        }
        console.log("click")
    }

    menuClick() {
        this.click();
        this.props.scrollToTop;
    }

    render() {
        return (
            <div className="nav-container">

                <div ref="menu" className="menu-container" onClick={this.click}>
                    <a>menu</a>
                </div>

                <div ref="overlay" className="overlay">
                    <ul>
                        <li>
                            <NavLink exact onClick={this.menuClick} to="/" activeStyle={activeStyle}>home</NavLink>
                        </li>
                        <li>
                            <NavLink exact onClick={this.menuClick} to="/works" activeStyle={activeStyle}>works</NavLink>
                        </li>
                        <li>
                            <NavLink exact onClick={this.menuClick} to="/about" activeStyle={activeStyle}>about</NavLink>
                        </li>
                        <li>
                            <NavLink exact onClick={this.menuClick} to="/contact" activeStyle={activeStyle}>contact</NavLink>
                        </li>
                    </ul>
                </div>
            </div>
        )
    }
}

