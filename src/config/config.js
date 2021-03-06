const navOptions = [
  {
    key: 1,
    name: "Home",
    route: "/"
  },
  {
    key: 2,
    name: "About me",
    route: "about"
  },
  {
    key: 3,
    name: "Projects",
    route: "projects"
  }
];

const socialMedia = [
  {
    key: 1,
    link: "https://twitter.com/LuisF11_",
    icon: "icon fa-twitter",
    name: "Twitter"
  },
  {
    key: 2,
    link: "https://www.linkedin.com/in/luis-fernando-pe%C3%B1a-9aba16116/",
    icon: "icon fa-linkedin",
    name: "LinkedIn"
  },
  {
    key: 3,
    link: "https://github.com/luisf11",
    icon: "icon fa-github",
    name: "Github"
  },
  {
    key: 4,
    link: "mailto:luisfernandop1110@gmail.com?subject=I%20saw%20your%20page",
    icon: "icon fa-envelope-o",
    name: "Email"
  }
];

const about = {
  text: `Hi, my name is Luis F. Peña. I am a highly motivated software developer with
  more than 5 years of professional experience.
  I'm a technology enthusiast, Javascript lover, Linux lover,
  and open source contributor, always looking to something new to learn.`
};
const projects = [
  {
    id: 1,
    title: "Sentiment Analisys",
    description: `Sentiment analysis text application with Node.js that let you now 
    the impresion that your text generates. Made with node js using sentiment API, 
    and served with vanila javascript, chart.js for the charts.`,
    link: "http://api.luisf11.com/sentiment/",
    technologies: ["javascript", "node js"],
    libraries: ["body-parser", "express", "sentiment"]
  },
  {
    id: 2,
    title: "Ebay Auctions Hunter",
    description: `Ebay hunter is an scrapper of ebay that brings you data of the top oferts
     autions of the item you are looking at the moment. Backend made with node js and front end with react js
     styled-components for reusable components, redux for state management, and redux-saga to manage asycn API calls.`,
    link: "http://project.luisf11.com/ebay/",
    technologies: ["javascript", "node js", "react js"],
    libraries: ["body-parser", "cheerio", "cors", "express", "request"]
  },
  {
    id: 3,
    title: " React Porfolio",
    description: `Personal porfolio made with react js, styled components to show my work and test my 
    abilies with react, i use styled-components to add reusable components.`,
    link: "http://luisf11.com",
    technologies: ["javascript", "react js"],
    libraries: ["styled-components"]
  },
  {
    id: 4,
    title: "Html Porfolio",
    description: `Personal porfolio made with html and css hosted on github page.`,
    link: "http://luisf11.tk",
    technologies: ["html", "css","micro-project"],
    libraries: ["styled-components"]
  },
  {
    id: 5,
    title: "React Notes",
    description: `Its a react notes taker, where you can save your quick notes, they save on your browser local storage.
    i use flexbox to build the notes grid and styled-components to add reusable components.
    `,
    link: "https://luisf11.github.io/react-notes/",
    technologies: ["javascript", "react js","micro-project"],
    libraries: ["styled-components"]
  },
  {
    id: 6,
    title: "Levitate-blog",
    description: `Angular js blog made for an work interview, this site perform the entire crud to 
    JSONPlaceholder (Fake Online REST API for Testing and Prototyping), i use Lumx (A front-end framework based on Google Material Design )
    components.`,
    link: "https://luisf11.github.io/Levitate-blog/home",
    technologies: ["javascript", "angular js","micro-project"],
    libraries: ["styled-components"]
  }

];
export { navOptions, socialMedia, about, projects };
