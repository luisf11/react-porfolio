import React from 'react';
import {NavLink } from "react-router-dom";
import {navOptions} from "../config/config";
import styled from 'styled-components';
 

const TabContainer = styled.div`
    margin: 20px 20px;
    font-size: 1.5em;
`;

const StyledNavLink = styled(NavLink)`
    transition: transform .2s;
        &:link{
            margin-right: 10px;
            text-decoration: none;
        }
        &:hover{
          transition: 0.5s ;
           background-color: #ffffff3b;
           font-size: 1.1em;
        }
`;

const  CardHeader = () => {
        return (
            <TabContainer>
            {navOptions.map(option =>(
                
                <StyledNavLink key={option.key} to={option.route}>
                      {option.name}
                </StyledNavLink>   
            
            ))}
              </TabContainer>
        );
    }

export default CardHeader;