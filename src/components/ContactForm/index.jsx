import React, { useState } from "react";
import './styles.css';


const   ContactForm = () => {
 const [name ,setName] = useState('')
 const [email ,setEmail] = useState('')
 const [message ,setMessage] = useState('')

  return (
    <div className="contact-form-content">
     <form className="form" onSubmit={() => {}}>

   <div className="name-container">
     <input type="text" name="fistname" placeholder="First name" onChange={(e) => setName(e.target.value)} value={name}/>
     <input type="text" name="lastname" placeholder="Last name" onChange={(e) => setName(e.target.value)} value={name}/>
   </div>

   <input type="text" name="email" placeholder="Email"   onChange={(e) => setEmail(e.target.value)} value={email}/>
   <textarea type="text"name="message" placeholder="Message" rows={3}  onChange={(e) => setMessage(e.target.value)}    value={message}   />
   <button>Send</button>
   </form>
   </div>
  )

}
 export default ContactForm;