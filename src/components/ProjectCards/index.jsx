import React from "react";
import { getImageUrl } from "../../util/path";

export const ProjectCards = ({project : {title,imageSrc, description, skills, demo, source}}) => {
    return (
        <div>
        <img src={getImageUrl(imageSrc)} 
             alt= {`image of ${title}`}/>
         <h3>{title}</h3>
         <p>{description}</p>
         <ul>
          {skills.map((skills, id) => {
            <li key={id}>{skills}</li>
          })}
         </ul>
         <div>
          <a href={demo}>Demo</a>
          <a href={source}>Source</a>
         </div>
      </div>
    );
    
}