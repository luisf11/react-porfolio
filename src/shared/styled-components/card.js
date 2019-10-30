import styled  from 'styled-components';

const Card = styled.div`
  -moz-animation: card 1s 2.25s forwards;
  -webkit-animation: card 1s 2.25s forwards;
  -ms-animation: card 1s 2.25s forwards;
  animation: card 1s 2.25s forwards;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transform: translate3d(0,0,0);
  -webkit-transform: translate3d(0,0,0);
  -ms-transform: translate3d(0,0,0);
  transform: translate3d(0,0,0);
  cursor: default;
  background-color: rgba(3, 3, 56, 0.39);;
  display: inline-block;
  opacity: 0;
  position: relative;
  text-align: center;
  top: -1em;
  vertical-align: middle;
  width: 400px;
  height: auto;
  border-radius: 5px;

  @media only screen and (max-width: 400px) {
          height: 100%;
          display: inline;
    }
`;

export default Card;




