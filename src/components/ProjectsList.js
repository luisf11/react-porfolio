import React from 'react';
import Project from './Project';
import {projects} from '../config/config';


const renderList = () =>{
    return(
        <div className="Project-list">
        {projects.map((project,i) =>(
            <Project
            key={i}
            header={project.title}
            description={project.description}
            technologies={project.technologies}/>
        ))}
        </div>
        
    )
 }

const ProjectList = () => {
    return(
    <div className="Container-Project-list">
      {renderList()}
    </div>
    );

};

export default ProjectList;