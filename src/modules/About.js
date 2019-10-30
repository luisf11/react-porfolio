import React from "react";
import {about} from '../config/config'
import styled from "styled-components";

const Text = styled.p`
    color: white;
    font-family: sans-serif;
    font-size: 1.1rem;
    /* margin: 0.75em 0 0.25em 0; */
    margin: 5px;
    opacity: 0.90;

`;
const TextWrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    padding: 10px 25px;
    height: 280px;
    text-align: justify;
`;

const About = () => {
  return (
    <TextWrapper>
        <Text>{about.text}</Text>
    </TextWrapper>
  );
};

export default About;
