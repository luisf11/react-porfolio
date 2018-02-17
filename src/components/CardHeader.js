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
            transform: scale(1.1);
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