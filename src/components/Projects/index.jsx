import React from 'react';
import './styles.modules.css';
import projects from '../../util/projects.json';
import { ProjectCards } from '../ProjectCards';



export const Projects = () => {  
   return (

 <section>
   <h2>Projects</h2>   
   <div>
     {projects.map((project, id) => {
      return (
          <ProjectCards key={id} project={project}/>

      )
     })}
   </div>
 </section>

    )
}

