import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../assets/font-awesome.css';

const smCover = require('../assets/sm_cover_large.jpg');
const sm1 = require('../assets/sm_screen1.jpg');
const sm2 = require('../assets/sm_screen2.jpg');
const sm3 = require('../assets/sm_screen3.jpg');

const kCover = require('../assets/k_cover_large2.jpg');
const k1 = require('../assets/k_screen1.jpg');
const k2 = require('../assets/k_screen2.jpg');
const k3 = require('../assets/k_screen3.jpg');
const k4 = require('../assets/k_screen4.jpg');
const k5 = require('../assets/k_screen5.jpg');

const sCover = require('../assets/s_cover_large2.jpg');
const s1 = require('../assets/sunko_screen1.jpg');
const s2 = require('../assets/sunko_screen2.jpg');
const s3 = require('../assets/sunko_screen3.jpg');
const s4 = require('../assets/sunko_screen4.jpg');
const s5 = require('../assets/sunko_screen5.jpg');

const bsCover = require('../assets/bs_cover_large.jpg');
const bs1 = require('../assets/bs_screen1.jpg');
const bs2 = require('../assets/bs_screen2.jpg');
const bs3 = require('../assets/bs_screen3.jpg');
const bs4 = require('../assets/bs_screen4.jpg');
const bs5 = require('../assets/bs_screen5.jpg');
const bs6 = require('../assets/bs_screen1.png');

const pCover = require('../assets/p_cover_large.jpg');
const p1 = require('../assets/p_screen1.jpg');
const p2 = require('../assets/p_screen2.jpg');
const p3 = require('../assets/p_screen3.jpg');
const p4 = require('../assets/p_screen4.jpg');
const p5 = require('../assets/p_screen5.jpg');

const tCover = require('../assets/td_cover_large.jpg');
const t1 = require('../assets/td_screen1.gif');
const t2 = require('../assets/td_screen2.gif');

export default [
  {
    id: 0,
    name: 'to-do',
    description: "A really simple thing, but it's smooth and pointy.",
    img: tCover,
    images: [t1, t2],
    links: [
      {
        url: 'https://github.com/kapakala/cljs-to-do',
        img: <FontAwesome name="github" />,
        alt: 'github',
      },
    ],
    about:
      "Building a to-do app is one of the most common things to create when you want to try your hand at a new language/framework. This one is made with React Native, with the twist that instead of the standard JavaScript, it's written in ClojureScript, a functional language. The focus with the UI was to make it as simple as possible, with smooth native feeling animations (at least on iOS) and a slightly different UX, using double taps instead of the more standard buttons to manage the cards on the list.",
    technologies: ['ClojureScript', 'React Native', 'Reagent', 'Re-frame', 'SQLite'],
  },
  {
    id: 1,
    name: 'Sunko',
    description: 'A sleek weather app that literally tells you the weather.',
    img: sCover,
    images: [s1, s2, s3, s4, s5],
    links: [
      {
        url: 'https://github.com/KapaKala/Sunko',
        img: <FontAwesome name="github" />,
        alt: 'github',
      },
      {
        url: 'https://play.google.com/store/apps/details?id=fi.hk.sunko',
        img: <FontAwesome name="android" />,
        alt: 'store',
      },
    ],
    about:
      "My idea for Sunko was originally to make a sleek looking application that simply tells you whether or not the weather is good for sunbathing, but it eventually evolved into a more complete weather app that gives the user an easy-to-interpret assessment on the situation outside, with a text description and a dynamically changing background. The app displays weather information for the current moment, next few hours, as well as the next week, with data from WeatherUnderground's API.",
    technologies: ['Java for Android'],
  },
  {
    id: 2,
    name: 'Kuippana',
    description: 'A web app for tracking and managing the work hours of employees.',
    img: kCover,
    images: [k5, k1, k2, k3, k4],
    links: [
      {
        url: 'https://github.com/eetukallio/Uhro-Kuippana',
        img: <FontAwesome name="github" />,
        alt: 'github',
      },
    ],
    about:
      'Kuippana is a web app, made for Tampereen Urho Oy to improve on their work hour tracking and management. With it employees can report their work hours along with the location and client. The employer can manage information on the employees, and can view and manage all information related to the work hours, and the application calculates wages based on the information submitted.',
    technologies: [
      'HTML',
      'CSS',
      'JavaScript',
      'React',
      'Redux',
      'Node.js',
      'Express',
      'Passportjs',
      'MySQL',
    ],
  },
  {
    id: 3,
    name: 'Sandman',
    description: 'Sandman is an educational mobile game for Android devices.',
    img: smCover,
    images: [sm1, sm2, sm3],
    links: [
      {
        url:
          'http://www.ukkinstituutti.fi/uutiskirje/smartmoves/lue/Smart-Moves--uutiskirje-2-2016%3A-Vaihtelua-tunneille-hyvinvointiteemaisilla-mobiilipeleillä/1573d55c2828a9/573d64e8ba65a',
        img: <FontAwesome name="file" />,
        alt: 'newsletter',
      },
      {
        url: 'https://github.com/KapaKala/Sandman-Public',
        img: <FontAwesome name="github" />,
        alt: 'github',
      },
      {
        url: 'https://play.google.com/store/apps/details?id=fi.thunder.cyborg',
        img: <FontAwesome name="android" />,
        alt: 'store',
      },
    ],
    about:
      'Sandman is the product of a school game project commissioned by UKK-institute. The goal was to make an educative game, in our case related to good sleeping habits, that would appeal to junior high to high school aged kids. Our aim was to make a game that was simple but highly replayable while affirming to our guidelines. My role in this project was game logic and the actual development.',
    technologies: ['Java for Android', 'libgdx'],
  },
  {
    id: 4,
    name: 'Baka Store',
    description: 'Made as a school project, Baka Store is a web store template.',
    img: bsCover,
    images: [bs6, bs1, bs4, bs3, bs5, bs2],
    links: [
      {
        url: 'https://github.com/eetukallio/TeamBakaProject',
        img: <FontAwesome name="github" />,
        alt: 'github',
      },
    ],
    about:
      "I apologize for the contents of the web app, I swear it wasn't my idea. Our aim with Baka Store was to create a fully functional web store template, where the admin has the option to add and remove categories and products in the store as well as manage the quantities. The user has the ability to register and sign in, to review all products, to add items into their shopping cart, and to check out with the shipping information being filled out automatically in case the user has registered.",
    technologies: ['HTML', 'CSS', 'JavaScript', 'React', 'Redux', 'Spring', 'MySQL'],
  },
  {
    id: 5,
    name: 'Portfolio',
    description: "My personal site. You're looking at it!",
    img: pCover,
    images: [p1, p2, p3, p4, p5],
    links: [
      {
        url: 'https://github.com/kapakala/Portfolio',
        img: <FontAwesome name="github" />,
        alt: 'github',
      },
    ],
    about:
      "Even more so than simply being a platform alongside GitHub to showcase the projects I've worked on, I wanted my personal site to be something that looks and feels like me (not literally). Even if it's not the most technically magnificent thing in the world, I tried to create a site that the user would enjoy visiting for the couple of minutes they might be going through the content I have here. If you're actually reading this then thank you for visiting, and I hope you like what you're seeing 😘",
    technologies: ['HTML', 'CSS', 'JavaScript', 'React'],
  },
];
