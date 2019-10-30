import styled from "styled-components";

const FooterContainer = styled.footer`
  background-image: -moz-linear-gradient(
    top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5) 75%
  );
  background-image: -webkit-linear-gradient(
    top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5) 75%
  );
  background-image: -ms-linear-gradient(
    top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5) 75%
  );
  background-image: linear-gradient(
    top,
    rgba(0, 0, 0, 0),
    rgba(0, 0, 0, 0.5) 75%
  );
  bottom: 0;
  cursor: default;
  height: 6em;
  left: 0;
  line-height: 8em;
  position: absolute;
  text-align: center;
  width: 100%;
  color: #ffffff;
`;

export { FooterContainer };
