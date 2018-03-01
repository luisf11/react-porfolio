import React from 'react';
import {NavLink } from "react-router-dom";
import {navOptions} from "../config/config";
import styled from 'styled-components';
 

const TabContainer = styled.div`
    margin: 20px 20px;
    font-size: 1.5em;
 
   
    
}
`;

const StyledNavLink = styled(NavLink)`
    transition: transform .2s;
        &:link{
            padding: 3px;
            margin:10px;
        }
        &:hover{
          transition: 0.5s ;
           background-color: #ffffff3b;
           border-bottom: 1px solid;
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