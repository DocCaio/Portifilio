import React from 'react';
import './styles.css';
import Pro from './assets/programador.jpg';
import Linkedin from './assets/linkedin.svg';
import Github from './assets/github.svg';
import Email from './assets/envelope-fill.svg';
import Dev from './assets/dev-to.svg';

const Hero = () => {
    return (
       <section className='hero-container'>
        <div className='hero-content'>
            <h2>Hi 👋,My name is Caio I'm a developer</h2>
            <p>
                I am passionate about 
                technology, which led me to pursue a career 
                in programming. I have experience in web 
                development, and I study and create projects 
                related to educational management,APIs, and 
                database handling. Currently, 
                I am focusing on Frontend technologies.
            </p>

            <div className='social'>
              <a 
              target='blank'
              href="https://www.linkedin.com/in/caio-martins-2ba009207/">
                 <img alt='Linkedin icon' src={Linkedin}/>
              </a>
          
              <a 
              target='blank'
              href="https://github.com/doccaio">
                 <img alt='github icon' src={Github}/>
              </a>
              
              <a 
              id='mail'
              target='blank'
              href="#email">
                 <img alt='e-mail icon' src={Email}/>
              </a>

              <a 
              target='blank'
              href="https://dev.to/doccaio">
                 <img src={Dev}/>
              </a>
          </div>

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