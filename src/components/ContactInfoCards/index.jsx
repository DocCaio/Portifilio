import React from "react";
import './styles.css';

const   ContactInfoCards = ({ iconUrl ,text}) => {
  return (
   <div className="contact-details-card">   
       <div className="icon">
           <img src={iconUrl} alt={text} />
       </div>

       <p>{text}</p>    
 
   </div>
  )
}

export default ContactInfoCards;