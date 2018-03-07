import React, { Component } from "react";
import styled from 'styled-components';
import {about} from '../config/config'

const Text = styled.p`
    color: white;
    font-family: "Times New Roman";
    font-size: 1em;
    /* margin: 0.75em 0 0.25em 0; */
    margin: 1em;
    opacity: 0.75;

`;

const TextWrapper = styled.div`
    display:flex;
    justify-content: flex-start;
    margin: 10px;
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
