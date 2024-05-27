import React from "react";
import './styles.css';

const   ExperienceCards = ({details}) => {
  return (
   <div className="work-experience-card">
      <h6>{details.title}</h6>

      <div className="work-duration">{details.date}</div>
    <ul>
        {details.responsabilities.map((item) =>
         <li key={item}>{item}</li>
        
        )}
    </ul>
   </div>
  )
}

export default ExperienceCards;