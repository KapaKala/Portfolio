import React from 'react';
import { Github, File } from 'react-feather';

export default [
  {
    id: 0,
    name: "Sandman",
    description: "A school game project made for UKK-instituutti." +
    "\nMade with Java for Android",
    img: require('../images/sandman.png'),
    links: [
      {url: "http://www.ukkinstituutti.fi/uutiskirje/smartmoves/lue/Smart-Moves--uutiskirje-2-2016%3A-Vaihtelua-tunneille-hyvinvointiteemaisilla-mobiilipeleillä/1573d55c2828a9/573d64e8ba65a",
        img: <File/>,
        alt: "Newsletter"},
      {url: "http://www.github.com",
        img: <Github/>,
        alt: "GitHub"
      }],
    technologies: ["Java", "libGDX"]
  },
  {
    id: 1,
    name: 'Kuippana',
    description: 'A web app for tracking and managing the work hours of employees, done as a school project for Tampereen Urho Oy. \n \n' +
    '\nMade with React + Redux',
    img: require('../images/kuippana-3.png'),
    links: [
      {url: "http://www.ukkinstituutti.fi/uutiskirje/smartmoves/lue/Smart-Moves--uutiskirje-2-2016%3A-Vaihtelua-tunneille-hyvinvointiteemaisilla-mobiilipeleillä/1573d55c2828a9/573d64e8ba65a",
        img: <File/>,
        alt: "Newsletter"},
      {url: "http://www.github.com",
        img: <Github/>,
        alt: "GitHub"
      }],
    technologies: ["React", "Redux"]
  },
  {
    id: 2,
    name: 'Sunko',
    description: 'A neat lil weather app for Android. \nMade with Java',
    img: require('../images/sunko-1.png'),
    links: [
      {url: "http://www.ukkinstituutti.fi/uutiskirje/smartmoves/lue/Smart-Moves--uutiskirje-2-2016%3A-Vaihtelua-tunneille-hyvinvointiteemaisilla-mobiilipeleillä/1573d55c2828a9/573d64e8ba65a",
        img: <File/>,
        alt: "Newsletter"},
      {url: "http://www.github.com",
        img: <Github/>,
        alt: "GitHub"
      }],
    technologies: ["Android"]
  },
  {
    id: 3,
    name: 'Baka Store',
    description: 'Done as a school project, Baka Store is a web store template made with React + Redux',
    img: require('../images/bakastore-3.png'),
    links: [
      {url: "http://www.ukkinstituutti.fi/uutiskirje/smartmoves/lue/Smart-Moves--uutiskirje-2-2016%3A-Vaihtelua-tunneille-hyvinvointiteemaisilla-mobiilipeleillä/1573d55c2828a9/573d64e8ba65a",
        img: <File/>,
        alt: "Newsletter"},
      {url: "http://www.github.com",
        img: <Github/>,
        alt: "GitHub"
      }],
    technologies: ["React", "Redux"]
  }
]
