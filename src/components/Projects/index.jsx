import React from 'react';
import './styles.css';
import projects from '../../util/projects.json';



export const ProjectsCards = () => {  
   return (

 <section>
   <h2>Projects</h2>   
   <div>
     {projects.map((projetct , id) => {
      return (
        <div key={id}>
          <img src={projetct.imageSrc} alt= {`image of ${projetct.title}`}/>
           <h3>{projetct.title}</h3>
           <p>{projetct.description}</p>
           <ul>
            {projetct.skills.map((skills, id) => {
              <li key={id}>{skills}</li>
            })}
           </ul>
           <div>
            <a href={projetct.demo}>Demo</a>
            <a href={projetct.source}>Source</a>
           </div>
        </div>
      )
     })}
   </div>
 </section>

    )
}

