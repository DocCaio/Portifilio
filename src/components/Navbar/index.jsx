
import './styles.css'
import MobileNav from '../MobileNav'
import { useState } from 'react';
import Logo from './assets/logo.jpg';

const Navbar = () => {
    const [openMenu , setOpenMenu] = useState(false);
     
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

    return (
  <>

   <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
  <nav className="nav-wrapper">
    <div className="nav-content">
        <img className="logo" src={Logo} alt="logo"/>
        <ul>
            <li> 
                <a className="menu-item" href="#">Home</a>
            </li>
            <li>
                <a className="menu-item" href="#">Skills</a>
            </li>
            {/*<li>
                <a className="menu-item" href="#">Work Experience</a>
            </li>*/}
               <li>
                <a className="menu-item" href="#projects">Projects</a>
            </li>
            <li>
                <a className="menu-item" href="#contact" >Contact me</a>
            </li>

            <button className="contact-bnt" onClick={() => {}}>
               Hire me
            </ button >

            </ul>
            
            <button className='menu-btn' onClick={toggleMenu}>
            <span 
              class={"material-symbols-outlined"}
              style={{fontSize: "1.8rem"}}
            >                
                {openMenu ? "close" : "menu"}
                
            </span>
            </button>    
    </div>

  </nav>
  </>
  );

}

export default Navbar;
