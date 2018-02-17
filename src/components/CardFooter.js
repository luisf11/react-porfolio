import React from "react";
import { socialMedia } from "../config/config";
import styled from "styled-components";

const ListItem = styled.li`
  -moz-animation: nav-icons 0.5s ease-in-out forwards;
  -webkit-animation: nav-icons 0.5s ease-in-out forwards;
  -ms-animation: nav-icons 0.5s ease-in-out forwards;
  animation: nav-icons 0.5s ease-in-out forwards;
  -moz-backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  -ms-backface-visibility: hidden;
  backface-visibility: hidden;
  -moz-transform: translate3d(0, 0, 0);
  -webkit-transform: translate3d(0, 0, 0);
  -ms-transform: translate3d(0, 0, 0);
  transform: translate3d(0, 0, 0);
  display: inline-block;
  height: 5.35em;
  line-height: 5.885em;
  opacity: 0;
  position: relative;
  top: 0;
  width: 5.35em;

  &:nth-child(1) {
    -moz-animation-delay: 2.5s;
    -webkit-animation-delay: 2.5s;
    -ms-animation-delay: 2.5s;
    animation-delay: 2.5s;
  }
  &:nth-child(2) {
    -moz-animation-delay: 2.75s;
    -webkit-animation-delay: 2.75s;
    -ms-animation-delay: 2.75s;
    animation-delay: 2.75s;
  }

  &:nth-child(3) {
    -moz-animation-delay: 3s;
    -webkit-animation-delay: 3s;
    -ms-animation-delay: 3s;
    animation-delay: 3s;
  }

  &:nth-child(4) {
    -moz-animation-delay: 3.25s;
    -webkit-animation-delay: 3.25s;
    -ms-animation-delay: 3.25s;
    animation-delay: 3.25s;
  }
  &:nth-child(5) {
    -moz-animation-delay: 3.5s;
    -webkit-animation-delay: 3.5s;
    -ms-animation-delay: 3.5s;
    animation-delay: 3.5s;
  }

  &:nth-child(6) {
    -moz-animation-delay: 3.75s;
    -webkit-animation-delay: 3.75s;
    -ms-animation-delay: 3.75s;
    animation-delay: 3.75s;
  }

  &:nth-child(7) {
    -moz-animation-delay: 4s;
    -webkit-animation-delay: 4s;
    -ms-animation-delay: 4s;
    animation-delay: 4s;
  }

  &:nth-child(8) {
    -moz-animation-delay: 4.25s;
    -webkit-animation-delay: 4.25s;
    -ms-animation-delay: 4.25s;
    animation-delay: 4.25s;
  }

  &:nth-child(9) {
    -moz-animation-delay: 4.5s;
    -webkit-animation-delay: 4.5s;
    -ms-animation-delay: 4.5s;
    animation-delay: 4.5s;
  }

  &:nth-child(10) {
    -moz-animation-delay: 4.75s;
    -webkit-animation-delay: 4.75s;
    -ms-animation-delay: 4.75s;
    animation-delay: 4.75s;
  }
`;

const ItemLink = styled.a`
  -webkit-tap-highlight-color: transparent;
  -webkit-touch-callout: none;
  border: 0;
  display: inline-block;
  color: white;
  text-decoration-line: none;
  &:before {
    -moz-transition: all 0.2s ease-in-out;
    -webkit-transition: all 0.2s ease-in-out;
    -ms-transition: all 0.2s ease-in-out;
    transition: all 0.2s ease-in-out;
    border-radius: 100%;
    border: solid 1px #fff;
    display: block;
    font-size: 1.75em;
    height: 2.5em;
    line-height: 2.5em;
    position: relative;
    text-align: center;
    top: 0;
    width: 2.5em;
  }

  &:hover {
    font-size: 1.1em;
    /* background-color: rgba(0, 0, 0, 0.404); */
  }

  &:hover:before {
    background-color: rgba(255, 255, 255, 0.175);
    color: #fff;
  }

  &:active {
    font-size: 0.95em;
    background: none;
  }

  &:active:before {
    background-color: rgba(255, 255, 255, 0.35);
    color: #fff;
  }
`;

const Tab = props => {
  return (
    <ListItem>
      <ItemLink href={props.link} className={props.icon}>
        <span className="label">{props.name}</span>
      </ItemLink>
    </ListItem>
  );
};

const TabList = () => {
  return socialMedia.map(social => (
    <Tab
      key={social.key}
      link={social.link}
      icon={social.icon}
      name={social.name}
    />
  ));
};

const CardFooter = () => {
  return <TabList />;
};

export default CardFooter;
