import React from "react";
import './styles.css';
import ContactInfoCards from "../ContactInfoCards";

import Send from './assets/Send-email.png'
import ContactForm from "../ContactForm";

const   ContactMe = () => {
  return (
   <section id="contact" className="contact-container">
    <h5 id="email">Contact Me</h5>

   <div className="contact-content">
    <div style={{flex:1}}>
      <ContactInfoCards
       iconUrl={Send}       

      />      

            
      
    </div>

    <div style={{flex:1}}>
      <ContactForm/>
    </div>
   </div>

   </section>
  )

}
 export default ContactMe;