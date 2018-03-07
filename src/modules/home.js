import React from "react";
import styled from "styled-components";

import { Switch, Route } from "react-router-dom";
import Intro from "./Intro";
import Projects from "./Projects";
import About from "./About";
import CardHeader from "../components/CardHeader";
import CardFooter from "../components/CardFooter";
import Footer from "../components/Footer";
import Card from "../shared/styled-components/card";

const CardBody = () => {
  return (
    <Switch>
      <Route exact path="/" component={Intro} />
      <Route path="/about" component={About} />
      <Route path="/projects" component={Projects} />
    </Switch>
  );
};

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
            <CardBody />
            <CardFooter />
          </Card>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Home;
