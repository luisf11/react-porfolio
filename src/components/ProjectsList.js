import React from 'react';
import Project from './Project';
import {projects} from '../config/config';
import styled from 'styled-components';

const ContainerList = styled.div`
    overflow: hidden;
    height: 290px;
`;

const List = styled.div`
    overflow: auto;
    height: 290px;
  
    
`;



const renderList = () =>{
    return(
        <List>
        {projects.map((project,i) =>(
            <Project
            key={i}
            header={project.title}
            description={project.description}
            technologies={project.technologies}/>
        ))}
        </List>
        
    )
 }

const ProjectList = () => {
    return(
       <ContainerList>
           {renderList()}
       </ContainerList>
    );

};

export default ProjectList;