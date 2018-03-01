import React from "react";
import styled from "styled-components";
import { ContainerStyles, TextStyles } from "../shared/styles.js";

const Container = styled.div`
  ${ContainerStyles};
    height: 280px;
    overflow-y:scroll;
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

const Project = () => {
  return (
    <Container
      direction="column"
      justifyContent="center"
      alignItems="center"
      alignContent="center"
    >
      <Header>
        <Text color="white">Project Name</Text>
      </Header>
      <Body>
      <Text color="white">

     description lalala alalalal lalalalala bla bla blac lajsdjasljdasd
          masdlmklklmklmlmlmlm asdasdasdasdknknknn klnmaklsnjkdnan
      </Text>
        
      </Body>
      <Footer>
      <Text color="white">Technologies</Text>
      </Footer>
      
    </Container>
  );
};

export default Project;
