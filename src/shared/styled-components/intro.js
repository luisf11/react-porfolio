import styled from "styled-components";

const FlexWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 290px;
`;

const Image = styled.img`
    border-radius: 50%;
    width:200px;
`;
const Element = styled.div``;

const Text = styled.p`
    font-size: ${props => props.size}em;
    margin: 5px;
`;

export {FlexWrapper,
        Image,
        Element,
        Text};