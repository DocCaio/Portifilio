import React from 'react';
import './styles.css';
import Pro from './assets/programador.jpg';

const Hero = () => {
    return (
       <section className='hero-container'>
        <div className='hero-content'>
            <h2>Hi 👋,My name is Caio I'm a developer</h2>
            <p>
                My name is Caio, and I am passionate about 
                technology, which led me to pursue a career 
                in programming. I have experience in web 
                development, and I study and create projects 
                related to educational management,APIs, and 
                database handling. Currently, 
                I am focusing on Frontend technologies.
            </p>

        </div>

        <div className='hero-img'>

        <div>
         <div className='tech-icon'>           
           <i class="devicon-react-original colored"></i>  
         </div>
          <img src={Pro} alt='programming guy' />
        </div>      

        <div>
        <div className='tech-icon'>   

         <i class="devicon-html5-plain colored"></i>

        </div> 
          
                   
        <div className='tech-icon'>  

         <i class="devicon-typescript-plain colored"></i>    

        </div>   
       

        <div className='tech-icon'>                        
        
        <i class="devicon-javascript-plain colored"></i>

        </div>

        </div>
        
        </div>  
   
          
       
                     
       </section>

    )
}

export default Hero;