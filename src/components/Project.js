import React from "react";
import {
  ProjectContainer,
  HeaderText,
  Text,
  FooterText,
  Header,
  Body,
  Footer,
  TechTag
} from "../shared/styled-components/project";

const Project = props => {
  console.log(props);
  return (
    <ProjectContainer
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Header>
        <HeaderText href={props.link} color="white" >{props.header}</HeaderText>
      </Header>
      <Body>
        <Text color="white">{props.description}</Text>
      </Body>
      <Footer>
        <FooterText>
          {" "}
          {props.technologies.map((tech, i) => (
            <TechTag key={i}>{tech}</TechTag>
          ))}
        </FooterText>
      </Footer>
    </ProjectContainer>
  );
}; 

export default Project;
