import React, { Component } from "react";
import {about} from '../config/config'
import {Text, TextWrapper}from '../shared/styled-components/about';

const About = () => {
  return (
    <TextWrapper>
        <Text>{about.text}</Text>
    </TextWrapper>
  );
};

export default About;
