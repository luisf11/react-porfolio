import React from "react";
import emoji from "../images/LF-emoji.png";
import {
  FlexWrapper,
  Image,
  Element,
  Text
} from "../shared/styled-components/intro";

const Intro = () => {
  return (
    <FlexWrapper>
      <Element>
        <Image alt="emoji" src={emoji} />
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
