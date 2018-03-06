import React from "react";
import emoji from "../images/LF-emoji.png";
import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 290px;
`;

const Image = styled.img`
    border-radius: 50%;
    width:200px
`;
const Element = styled.div``;

const Text = styled.p`
    font-size: ${props => props.size}em;
    margin: 5px;
`;


const Intro = () => {
  return (
    <FlexWrapper>
      <Element>
        <Image alt="emoji" src={emoji}  />
      </Element>
      <Element>
        <Text size="3">Luis F. Peña</Text>
      </Element>
      <Element>
        <Text size="1">
          Full Stack Developer &nbsp;&bull;&nbsp; Creator &nbsp;&bull;&nbsp;
          Enthusiast
        </Text>
      </Element>
    </FlexWrapper>
  );
};

export default Intro;
