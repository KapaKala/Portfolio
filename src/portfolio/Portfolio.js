import React, { Component } from 'react';
import './Portfolio.css';
import anime from 'animejs';

export default class Portfolio extends Component {
    constructor(props) {
        super(props);

        this.state = {
            content: [
                {
                    id: 0,
                    name: "Sandman",
                    description: "A school game project made for UKK-instituutti." +
                                 "Made with Java for Android",
                    img: require('../images/sandman.png'),
                    links: [
                        {url: "http://www.ukkinstituutti.fi/uutiskirje/smartmoves/lue/Smart-Moves--uutiskirje-2-2016%3A-Vaihtelua-tunneille-hyvinvointiteemaisilla-mobiilipeleillä/1573d55c2828a9/573d64e8ba65a",
                            img: require('../images/document-outline.png'),
                            alt: "Newsletter"},
                        {url: "http://www.github.com",
                            img: require('../images/GitHub-Mark-32px.png'),
                            alt: "GitHub"
                        }]
                },
                {
                    id: 1,
                    name: 'Kuippana',
                    description: 'A web app for tracking and managing the work hours of employees, done as a school project for Tampereen Urho Oy. \n \n' +
                                 'Made with React + Redux',
                    img: require('../images/kuippana-3.png'),
                    links: [
                        {url: "http://www.ukkinstituutti.fi/uutiskirje/smartmoves/lue/Smart-Moves--uutiskirje-2-2016%3A-Vaihtelua-tunneille-hyvinvointiteemaisilla-mobiilipeleillä/1573d55c2828a9/573d64e8ba65a",
                            img: require('../images/document-outline.png'),
                            alt: "Newsletter"},
                        {url: "http://www.github.com",
                            img: require('../images/GitHub-Mark-32px.png'),
                            alt: "GitHub"
                        }]
                },
                {
                    id: 2,
                    name: 'Sunko',
                    description: 'A neat lil weather app for Android. Made with Java',
                    img: require('../images/sunko-1.png'),
                    links: [
                        {url: "http://www.ukkinstituutti.fi/uutiskirje/smartmoves/lue/Smart-Moves--uutiskirje-2-2016%3A-Vaihtelua-tunneille-hyvinvointiteemaisilla-mobiilipeleillä/1573d55c2828a9/573d64e8ba65a",
                            img: require('../images/document-outline.png'),
                            alt: "Newsletter"},
                        {url: "http://www.github.com",
                            img: require('../images/GitHub-Mark-32px.png'),
                            alt: "GitHub"
                        }]
                },
                {
                    id: 3,
                    name: 'Baka Store',
                    description: 'Done as a school project, Baka Store is a web store template made with React + Redux',
                    img: require('../images/bakastore-3.png'),
                    links: [
                        {url: "http://www.ukkinstituutti.fi/uutiskirje/smartmoves/lue/Smart-Moves--uutiskirje-2-2016%3A-Vaihtelua-tunneille-hyvinvointiteemaisilla-mobiilipeleillä/1573d55c2828a9/573d64e8ba65a",
                            img: require('../images/document-outline.png'),
                            alt: "Newsletter"},
                        {url: "http://www.github.com",
                            img: require('../images/GitHub-Mark-32px.png'),
                            alt: "GitHub"
                        }]
                }
                ]
        };

    }

    createContent() {
        return this.state.content.map((obj, i) => {
            return (
                <div key={obj.id} className={"portfolio-item item-"+i} onMouseOver={this.hovering} style={{backgroundImage: "url(" + obj.img + ")", width: 100/this.state.content.length + "%", opacity: 0, top: 50}}>
                    <div ref="name" className="hidden name">
                        <h3>{obj.name}</h3>
                    </div>
                    <div ref="description" className="hidden description">
                        <h5>{obj.description}</h5>
                    </div>
                    <div ref="links" className="hidden links">
                        {obj.links.map((link, i) => {
                            return <a key={i} href={link.url}><img src={link.img} alt={link.alt}/></a>
                        })}
                    </div>
                </div>
            )
        })
    }

    componentDidMount() {
        let animationTimeline = anime.timeline();

        animationTimeline
            .add({
                targets: ".item-0",
                translateY: -50,
                opacity: 1,
                easing: 'easeOutExpo'
            })
            .add({
                targets: ".item-1",
                translateY: -50,
                opacity: 1,
                offset: '-=850',
                easing: 'easeOutExpo'
            })
            .add({
                targets: ".item-2",
                translateY: -50,
                opacity: 1,
                offset: '-=850',
                easing: 'easeOutExpo'
            })
            .add({
                targets: ".item-3",
                translateY: -50,
                opacity: 1,
                offset: '-=850',
                easing: 'easeOutExpo'
            })
            .add({
                targets: ".portfolio-title",
                translateY: -10,
                opacity: 1,
                offset: '-=500'
            })
        //
        // let cssSelector = anime({
        //     targets: ".item-0, .item-1, .item-2, .item-3",
        //     translateY: 250,
        //     opacity: 1
        // });
    }

    render() {
        return (
            <div className="portfolio-container">
                <div className="portfolio-row">
                    <h1 className="portfolio-title">Stuff I've done</h1>
                </div>
                <div className="portfolio-row">
                    {this.createContent()}
                </div>
            </div>
        )
    }
}
