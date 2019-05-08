import React from "react";
import {about} from '../config/config'
import styled from "styled-components";

const Text = styled.p`
    color: white;
    font-family: sans-serif;
    font-size: 1.2em;
    /* margin: 0.75em 0 0.25em 0; */
    margin: 5px;
    opacity: 0.90;

`;
const TextWrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    margin: 10px;
    height: 280px;
    text-align: justify;
    // background: #0c033852;
`;

const About = () => {
  return (
    <TextWrapper>
        <Text>{about.text}</Text>
    </TextWrapper>
  );
};

export default About;
