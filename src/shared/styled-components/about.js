import styled from 'styled-components';


const Text = styled.p`
    color: white;
    font-family: "sans-serif";
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

export {Text, TextWrapper};