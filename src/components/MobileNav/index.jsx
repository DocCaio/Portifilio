
import React from 'react';
import './styles.css';
import Logo from '../Navbar/assets/logo.jpg';


   const MobileNav =({isOpen, toggleMenu}) => {  

    return (
   <>   
   <div className={`mobile-menu ${isOpen ? "active": ""}`}
         onClick={toggleMenu}
   >

    <div className='mobile-menu-container'>
        <img className='logo' src={Logo}  alt='logo'/>

        <ul>
            <li>
                <a className='menu-item' href="#">Home</a>
            </li>
            <li>
                <a className='menu-item' href="#">Skill</a>
            </li>
            <li>
                <a className='menu-item' href="#projects">Projects</a>
            </li>
            <li>
                <a className='menu-item' href="#contact">Contact Me</a>
            </li>

            <button className='contact-bnt' onClick={() => {}}>
                Hire Me

            </button>
        </ul>      

    </div>

   </div>
   </>
    )
}


export default MobileNav;