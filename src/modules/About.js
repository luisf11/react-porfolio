import React from "react";
import {about} from '../config/config'
import {TextWrapper}from '../shared/styled-components/about';

const Text = styled.p`
    color: white;
    font-family: "Source Sans Pro";
    font-size: 1em;
    /* margin: 0.75em 0 0.25em 0; */
    margin: 1em;
    opacity: 0.75;

`;

const About = () => {
  return (
    <TextWrapper>
        <Text>{about.text}</Text>
    </TextWrapper>
  );
};

export default About;
