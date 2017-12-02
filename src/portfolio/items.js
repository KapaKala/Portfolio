import React from "react";
import FontAwesome from "react-fontawesome";
import "../font-awesome.css";

const smCover = require("../images/sm_cover.png");
const sm1 = require("../images/sm_screen1.jpg");
const sm2 = require("../images/sm_screen2.jpg");
const sm3 = require("../images/sm_screen3.jpg");

const kCover = require("../images/k_cover.png");
const k1 = require("../images/k_screen1.jpg");
const k2 = require("../images/k_screen2.jpg");
const k3 = require("../images/k_screen3.jpg");
const k4 = require("../images/k_screen4.jpg");
const k5 = require("../images/k_screen5.jpg");

const sCover = require("../images/s_cover2.png");
const s1 = require("../images/sunko_screen1.jpg");
const s2 = require("../images/sunko_screen2.jpg");
const s3 = require("../images/sunko_screen3.jpg");
const s4 = require("../images/sunko_screen4.jpg");
const s5 = require("../images/sunko_screen5.jpg");

const bsCover = require("../images/bs_cover.png");
const bs1 = require("../images/bs_screen1.jpg");
const bs2 = require("../images/bs_screen2.jpg");
const bs3 = require("../images/bs_screen3.jpg");
const bs4 = require("../images/bs_screen4.jpg");
const bs5 = require("../images/bs_screen5.jpg");
const bs6 = require("../images/bs_screen6.jpg");

export default [
  {
    id: 0,
    name: "Sandman",
    description: "Sandman is an educational mobile game for Android devices.",
    img: smCover,
    images: [sm1, sm2, sm3],
    links: [
      {
        url:
          "http://www.ukkinstituutti.fi/uutiskirje/smartmoves/lue/Smart-Moves--uutiskirje-2-2016%3A-Vaihtelua-tunneille-hyvinvointiteemaisilla-mobiilipeleillä/1573d55c2828a9/573d64e8ba65a",
        img: <FontAwesome name="file" />,
        alt: "newsletter"
      },
      {
        url: "https://github.com/KapaKala/Sandman-Public",
        img: <FontAwesome name="github" />,
        alt: "github"
      },
      {
        url: "https://play.google.com/store/apps/details?id=fi.thunder.cyborg",
        img: <FontAwesome name="android" />,
        alt: "store"
      }
    ],
    about:
      "Sandman is the product of a school game project commissioned by UKK-institute. The goal was to make an educative game, in our case related to good sleeping habits, that would appeal to junior high to high school aged kids. Our aim was to make a game that was simple but highly replayable while affirming to our guidelines. My role in this project was game logic and the actual development.",
    technologies: ["Java for Android", "libgdx"]
  },
  {
    id: 1,
    name: "Kuippana",
    description:
      "A web app for tracking and managing the work hours of employees.",
    img: kCover,
    images: [k1, k2, k3, k4, k5],
    links: [
      {
        url: "https://github.com/eetukallio/Uhro-Kuippana",
        img: <FontAwesome name="github" />,
        alt: "github"
      }
    ],
    about:
      "Kuippana is a web app, made for Tampereen Urho Oy to improve on their work hour tracking and management. With it employees can report their work hours along with the location and client. The employer can manage information on the employees, and can view and manage all information related to the work hours, and the application calculates wages based on the information submitted.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Node.js",
      "Express",
      "Passportjs",
      "MySQL"
    ]
  },
  {
    id: 2,
    name: "Sunko",
    description:
      "A sleek weather app that tells you the weather quite literally.",
    img: sCover,
    images: [s1, s2, s3, s4, s5],
    links: [
      {
        url: "https://github.com/KapaKala/Sunko",
        img: <FontAwesome name="github" />,
        alt: "github"
      },
      {
        url: "https://play.google.com/store/apps/details?id=fi.hk.sunko",
        img: <FontAwesome name="android" />,
        alt: "store"
      }
    ],
    about:
      "My idea for Sunko was originally to make a sleek looking application that simply tells you whether or not the weather is good for sunbathing or not, but it eventually evolved into a more complete weather app that gives the user an easy-to-interpret assessment on the situation outside, with a text description and a dynamically changing background. The app displays weather information for the current moment, next few hours, as well as the next week, with data from WeatherUnderground's API.",
    technologies: ["Java for Android"]
  },
  {
    id: 3,
    name: "Baka Store",
    description:
      "Done as a school project, Baka Store is a web store template.",
    img: bsCover,
    images: [bs1, bs4, bs3, bs5, bs2, bs6],
    links: [
      {
        url: "https://github.com/eetukallio/TeamBakaProject",
        img: <FontAwesome name="github" />,
        alt: "github"
      }
    ],
    about:
      "I apologize for the contents of the web app, I swear it wasn't my idea. Our aim with Baka Store was to create a fully functional web store template, where the admin has the option to add and remove categories and products in the store as well as manage the quantities. The user has the ability to register and sign in, to review all products, to add items into their shopping cart, and to check out with the shipping information being filled out automatically in case the user has registered.",
    technologies: [
      "HTML",
      "CSS",
      "JavaScript",
      "React",
      "Redux",
      "Spring",
      "MySQL"
    ]
  }
];
