import React  from "react";
import styled  from 'styled-components';

import { Switch, Route } from "react-router-dom";
import Intro from "./Intro";
import Projects from "./Projects";
import About from "./About";
import CardHeader from "../components/CardHeader";
import CardFooter from "../components/CardFooter";
import Footer from '../components/Footer'



const Card = styled.div`
-moz-animation: card 1s 2.25s forwards;
-webkit-animation: card 1s 2.25s forwards;
-ms-animation: card 1s 2.25s forwards;
animation: card 1s 2.25s forwards;
-moz-backface-visibility: hidden;
-webkit-backface-visibility: hidden;
-ms-backface-visibility: hidden;
backface-visibility: hidden;
-moz-transform: translate3d(0,0,0);
-webkit-transform: translate3d(0,0,0);
-ms-transform: translate3d(0,0,0);
transform: translate3d(0,0,0);
cursor: default;
background-color: rgba(3, 3, 56, 0.39);;
display: inline-block;
opacity: 0;
position: relative;
text-align: center;
top: -1em;
vertical-align: middle;
width: 400px;
height: 440px;
`;



const CardBody = () => {
  return(
    <Switch>
    <Route exact path="/" component={Intro} />
    <Route path="/about" component={About} />
    <Route path="/projects" component={Projects} />
    </Switch>
  )
}

const Home = () => {
 
    return (
      <div className="loading">
        <div id="wrapper">
          <div id="bg" />
          <div id="overlay" />
          <div id="main">
            {/* Header  */}

            <Card>
              <CardHeader />
              <CardBody/>
              <CardFooter />
            </Card>
            <Footer/>
          </div>
        </div>
      </div>
    );
  }


export default Home;
