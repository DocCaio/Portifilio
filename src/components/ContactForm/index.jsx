import React, { useState } from "react";
import './styles.css';
import emailjs from '@emailjs/browser';
   


 const   ContactForm = () => {

 const [name ,setName] = useState('')
 const [lastName ,setLastName] = useState('')
 const [email ,setEmail] = useState('')
 const [message ,setMessage] = useState('')

 function sendEmail(e) {
  e.preventDefault();

  if (name === "" || email === "" || message === "") {
    alert("Preencha todos os campo");
    return;
  }

  const templateParams = {
    from_name: name,
    message: message,
    email:email
  }

  emailjs.send("service_l1x0usq" , "template_tq6qbml" , templateParams , "TzxOZ28V9TioDTnyX")
  .then((response) => {
     console.log("Email enviado" , response.status , response.text)
     setName('')
     setEmail('')
     setMessage('')
     setLastName('')
  }, (erro) => {
    console.log("ERRO: " , erro)

  }) 
 }

  return (
    <div className="contact-form-content">
     <form className="form" onSubmit={sendEmail}>

   <div className="name-container">
     <input type="text" name="fistname" placeholder="First name" onChange={(e) => setName(e.target.value)} value={name}/>
     <input type="text" name="lastname" placeholder="Last name" onChange={(e) => setLastName(e.target.value)} value={lastName}/>
   </div>

   <input type="text" name="email" placeholder="Email"   onChange={(e) => setEmail(e.target.value)} value={email}/>
   <textarea type="text"name="message" placeholder="Message" rows={3}  onChange={(e) => setMessage(e.target.value)}    value={message}   />
   <button>Send</button>
   </form>
   </div>
  )

}
 export default ContactForm;