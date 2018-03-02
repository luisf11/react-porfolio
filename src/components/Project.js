import React from "react";
import styled from "styled-components";
import { ContainerStyles, TextStyles } from "../shared/styles.js";

const Container = styled.div`
  ${ContainerStyles};
    height: 150px;
    /* overflow-y:scroll; */
`;

const Text = styled.p`
  ${TextStyles};
`;

const Header = styled.div`
     ${ContainerStyles};

`;

const Body =styled.div`
 ${ContainerStyles};
  flex: 2;
`;
const Footer = styled.div`
 ${ContainerStyles};
 
`;

const Project = (props) => {
  return (
    <Container
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Header>
        <Text color="white">{props.header}</Text>
      </Header>
      <Body>
      <Text color="white">
{props.description}
      </Text>
        
      </Body>
      <Footer>
      <Text color="white">{props.technologies}</Text>
      </Footer>
      
    </Container>
  );
};

export default Project;
