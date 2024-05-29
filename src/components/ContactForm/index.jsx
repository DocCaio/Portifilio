import React from "react";
import './styles.css';


const   ContactForm = () => {
  return (
    <div className="contact-form-content">
     <form>

   <div className="name-container">
     <input type="text" name="fistname" placeholder="First name"/>
     <input type="text" name="lastname" placeholder="Last name"/>
   </div>

   <input type="text" name="email" placeholder="Email"/>
   <textarea type="text" name="message" placeholder="Message" rows={3}/>
   <button>Send</button>
   </form>
   </div>
  )

}
 export default ContactForm;