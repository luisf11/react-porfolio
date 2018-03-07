 const navOptions = [
  {
    key: 1,
    name: "Home",
    route: "/"
  },
  {
    key: 2,
    name: "About me",
    route: "/about"
  },
  {
    key: 3,
    name: "Projects",
    route: "/projects"
  }
];

 const socialMedia = [
    {
        key: 1,
        link: "https://twitter.com/LFernandoDleon",
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
        link: "#",
        icon: "icon fa-envelope-o",
        name: "Email"
    },
];

const about = 
{
    text: `Hi, my name is Luis F. Peña. I am a highly motivated software developer with more than 3 years of
    professional experience. I live in Dominican Republic, Santo Domingo. I work as a web developer
    but i also do freelancing with mobile applications on React Native. I'm a technology enthusiast, Javascript lover
    and open source contributor, always looking to something new to learn.`
}
;
const projects =[
    {
        title: "Sentiment Analisys",
        description: "Sentiment analysis application with Node.js",
        demo: "http://url-demo.com",
        technologies: [
            "javascript",
            "node js",
        ],
        libraries: [
            "body-parser",
            "express",
            "sentiment"
        ]
    },
    {
        title: "Ebay Actions Hunter",
        description: `Ebay hunter is an scrapper of ebay that brings you data of the top 
          oferts autions of the item you are looking at the moment`,
        demo: "http://url-demo.com",
        technologies: [
            "javascript",
            "node js",
            "react js"
        ],
        libraries: [
            "body-parser",
            "cheerio",
            "cors",
            "express",
            "request"
        ]
    },
    {
        title: "Porfolio",
        description: `Personal porfolio exactly this page`,
        demo: "http://url-demo.com",
        technologies: [
            "javascript",
            "react js"
        ],
        libraries: [
            "styled-components"
        ]
    }
];
export {navOptions,
        socialMedia,
        about,
        projects} ;
