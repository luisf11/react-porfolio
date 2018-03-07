import React from "react";
import { socialMedia } from "../config/config";
import {
  Container,
  ListItem,
  ItemLink
} from '../shared/styled-components/cardFooter'

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
  return (

    <Container>
    <TabList />
  </Container> 
  );
};

export default CardFooter;
