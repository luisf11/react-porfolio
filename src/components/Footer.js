import React from "react";
import {FooterContainer} from '../shared/styled-components/footer';

const Footer = () => {
  return (
    <FooterContainer>
      <span className="copyright">
        &copy; HandMade by <a href="https://github.com/luisf11">LuisF11</a>.
      </span>
    </FooterContainer>
  );
};

export default Footer;
