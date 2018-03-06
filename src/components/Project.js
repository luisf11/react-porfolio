import React from "react";
import styled from "styled-components";
import { ContainerStyles, TextStyles } from "../shared/styles.js";

const Container = styled.div`
  ${ContainerStyles};
  /* height: 200px; */
`;

const HeaderText = styled.p`
  ${TextStyles};
  border-bottom: 1px solid white;
`;
const Text = styled.p`
margin:20px;
word-wrap: break-word;
`;
const FooterText = styled.span`
  
`;

const Header = styled.div`
  ${ContainerStyles};
`;

const Body = styled.div`
  ${ContainerStyles};
 
  
`;
const Footer = styled.div`
  ${ContainerStyles};
  padding-top: 10px;
  flex-direction:column;
  
`;

const TechTag = styled.p`
      display: inline-block;
    padding: 0.1em 0.2em;
    margin: 0 0.5em 0.5em 0;
    white-space: nowrap;
    background-color: #f1f8ff1c;
    border-radius: 3px;
    border: 1px solid;
`;

const Project = props => {
  console.log(props.technologies)
  return (
    <Container
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Header>
        <HeaderText color="white"
        >{props.header}</HeaderText>
      </Header>
      <Body>
        <Text color="white">{props.description}</Text>
      </Body>
      <Footer>

        
        <FooterText > {props.technologies.map((tech,i) => 
        <TechTag key={i}>{tech}</TechTag>
        )}</FooterText>
      </Footer>
    </Container>
  );
};

export default Project;
