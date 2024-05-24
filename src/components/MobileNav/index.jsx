
import React from 'react';
import './styles.css';
import Logo from '../Navbar/assets/logo.jpg'

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
                <a className='menu-item' href="#">Work Experince</a>
            </li>
            <li>
                <a className='menu-item' href="#">Contact Me</a>
            </li>

            <button className='contact-btn' onClick={() => {}}>
                Hire Me

            </button>
        </ul>

        <button className='menu-btn' onClick={() => {}}>
            <span class={"material-symbols-outlined"}
            style={{fontSize: "1.8rem"}}            
            >
                Menu

            </span>

        </button>

    </div>

   </div>
   </>
    )
}


export default MobileNav;