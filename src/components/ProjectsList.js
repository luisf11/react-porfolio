import React from 'react';
import Project from './Project';
import {projects} from '../config/config';
import {ContainerList,List} from '../shared/styled-components/projectList'



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