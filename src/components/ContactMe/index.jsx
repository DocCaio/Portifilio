import React from "react";
import './styles.css';
import ContactInfoCards from "../ContactInfoCards";
import Linkedin from "./assets/linkedin.svg";
import Mail from "./assets/e-mail.svg";

const   ContactMe = () => {
  return (
   <section className="contact-container">
    <h5>Contact Me</h5>

   <div className="contact-content">
    <div style={{flex:1}}>
      <ContactInfoCards
       iconUrl={Mail}
       text="Caiomib@outlook.com"

      />
        <ContactInfoCards
         iconUrl={Linkedin}
         text="https://www.linkedin.com/in/caio-martins-2ba009207/?original_referer=https%3A%2F%2Fgithub.com%2F"

      />      
      
    </div>

    <div style={{flex:1}}></div>
   </div>

   </section>
  )

}
 export default ContactMe;