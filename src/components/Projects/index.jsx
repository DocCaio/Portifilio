import React from 'react';
import styles from "./styles.module.css";
import projects from '../../util/projects.json';
import { ProjectCards } from '../ProjectCards';



export const Projects = () => {  
   return (

 <section id='projects' className={styles.container}>
   <h2 className={styles.title}>Projects</h2>   
   <div className={styles.projects}>
     {projects.map((project, id) => {
      return (
          <ProjectCards key={id} project={project}/>

      )
     })}
   </div>
 </section>

    )
}

