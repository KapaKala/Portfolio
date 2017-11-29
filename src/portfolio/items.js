import React from 'react';
import FontAwesome from 'react-fontawesome';
import faStyles from '../font-awesome.css';

export default [
  {
    id: 0,
    name: "Sandman",
    description: "A school game project made for UKK-instituutti." +
    "\nMade with Java for Android",
    img: require('../images/sm_cover.png'),
    images: [
      require('../images/sm_screen1.jpg'),
      require('../images/sm_screen2.jpg'),
      require('../images/sm_screen3.jpg')],
    links: [
      {url: "http://www.ukkinstituutti.fi/uutiskirje/smartmoves/lue/Smart-Moves--uutiskirje-2-2016%3A-Vaihtelua-tunneille-hyvinvointiteemaisilla-mobiilipeleillä/1573d55c2828a9/573d64e8ba65a",
        img: <FontAwesome name="file"/>,
        alt: "newsletter"},
      {url: "http://www.github.com",
        img: <FontAwesome name="github"/>,
        alt: "github"},
      {url: "https://play.google.com/store/apps/details?id=fi.thunder.cyborg",
        img: <FontAwesome name="android"/>,
        alt: "store"
      }],
    technologies: ["Java", "libGDX"]
  },
  {
    id: 1,
    name: 'Kuippana',
    description: 'A web app for tracking and managing the work hours of employees, done as a school project for Tampereen Urho Oy. \n \n' +
    '\nMade with React + Redux',
    img: require('../images/k_cover.png'),
    images: [require('../images/k_login.png'), require('../images/k_hourform.png')],
    links: [
      {url: "http://www.github.com",
        img: <FontAwesome name="github"/>,
        alt: "github"
      }],
    technologies: ["React", "Redux"]
  },
  {
    id: 2,
    name: 'Sunko',
    description: 'A neat lil weather app for Android. \nMade with Java',
    img: require('../images/s_cover2.png'),
    images: [
      require('../images/sunko_screen1.jpg'),
      require('../images/sunko_screen2.jpg'),
      require('../images/sunko_screen3.jpg'),
      require('../images/sunko_screen4.jpg'),
      require('../images/sunko_screen5.jpg')],
    links: [
      {url: "http://www.github.com",
        img: <FontAwesome name="github"/>,
        alt: "github"},
      {url: "https://play.google.com/store/apps/details?id=fi.hk.sunko",
        img: <FontAwesome name="android"/>,
        alt: "store"
      }],
    technologies: ["Android"]
  },
  {
    id: 3,
    name: 'Baka Store',
    description: 'Done as a school project, Baka Store is a web store template made with React + Redux',
    img: require('../images/bs_cover.png'),
    images: [
      require('../images/bs_screen1.jpg'),
      require('../images/bs_screen2.jpg'),
      require('../images/bs_screen3.jpg'),
      require('../images/bs_screen4.jpg'),
      require('../images/bs_screen5.jpg')],
    links: [
      {url: "http://www.github.com",
        img: <FontAwesome name="github"/>,
        alt: "github"
      }],
    technologies: ["React", "Redux"]
  }
]
