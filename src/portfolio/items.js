import React from 'react';
import FontAwesome from 'react-fontawesome';
import '../font-awesome.css';

const smCover = require('../images/sm_cover.png');
const sm1 = require('../images/sm_screen1.jpg');
const sm2 = require('../images/sm_screen2.jpg');
const sm3 = require('../images/sm_screen3.jpg');

const kCover = require('../images/k_cover.png');
const k1 = require('../images/k_addworker.png');
const k2 = require('../images/k_hourform.png');
const k3 = require('../images/k_login.png');

const sCover = require('../images/s_cover2.png');
const s1 = require('../images/sunko_screen1.jpg');
const s2 = require('../images/sunko_screen2.jpg');
const s3 = require('../images/sunko_screen3.jpg');
const s4 = require('../images/sunko_screen4.jpg');
const s5 = require('../images/sunko_screen5.jpg');

const bsCover = require('../images/bs_cover.png');
const bs1 = require('../images/bs_screen1.jpg');
const bs2 = require('../images/bs_screen2.jpg');
const bs3 = require('../images/bs_screen3.jpg');
const bs4 = require('../images/bs_screen4.jpg');
const bs5 = require('../images/bs_screen5.jpg');

export default [
  {
    id: 0,
    name: 'Sandman',
    description:
      'A school game project made for UKK-instituutti.\nMade with Java for Android and libgdx',
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
        url: 'http://www.github.com',
        img: <FontAwesome name="github" />,
        alt: 'github',
      },
      {
        url: 'https://play.google.com/store/apps/details?id=fi.thunder.cyborg',
        img: <FontAwesome name="android" />,
        alt: 'store',
      },
    ],
    technologies: ['Java', 'libGDX'],
  },
  {
    id: 1,
    name: 'Kuippana',
    description:
      'A web app for tracking and managing the work hours of employees, done as a school project for Tampereen Urho Oy. \n \n' +
      '\nMade with React + Redux',
    img: kCover,
    images: [k1, k2, k3],
    links: [
      {
        url: 'https://github.com/eetukallio/Uhro-Kuippana',
        img: <FontAwesome name="github" />,
        alt: 'github',
      },
    ],
    technologies: ['React', 'Redux'],
  },
  {
    id: 2,
    name: 'Sunko',
    description:
      'A minimalistic weather app that tells you the weather quite literally. \nMade with Java',
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
    technologies: ['Android'],
  },
  {
    id: 3,
    name: 'Baka Store',
    description:
      'Done as a school project, Baka Store is a web store template made with React + Redux',
    img: bsCover,
    images: [bs1, bs2, bs3, bs4, bs5],
    links: [
      {
        url: 'https://github.com/eetukallio/TeamBakaProject',
        img: <FontAwesome name="github" />,
        alt: 'github',
      },
    ],
    technologies: ['React', 'Redux'],
  },
];
