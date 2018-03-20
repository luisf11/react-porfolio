import React from 'react';
import Project from './Project';
import {projects} from '../config/config';
import {ContainerList,List} from '../shared/styled-components/projectList'
import styled, { keyframes } from 'styled-components';

const bounce = keyframes`
    from {
        transform: translateY(0);
    }
    to {
      
        transform: translateY(10px);
       
    }
    }
`;

const ArrowContainer = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;



const DownArrow = styled.div`
    position: absolute;
    width: 0; 
    height: 0; 
    border-left: 10px solid transparent;
    border-right: 10px solid transparent;  
    border-top: 10px solid white;
     animation: ${bounce} 1s linear infinite;
`;

const renderList = () =>{
    return(
        <List>
        {projects.map((project,i) =>(
            <Project
            key={i}
            header={project.title}
            description={project.description}
            technologies={project.technologies}
            link={project.link}/>
        ))}
        </List>
        
    )
 }

const ProjectList = () => {
    return(
       <ContainerList>
           {renderList()}
           <ArrowContainer>
           <DownArrow/>
           </ArrowContainer>
       </ContainerList>
    );

};

export default ProjectList;