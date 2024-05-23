import './Navbar.css'
import MobileNav from '../MobileNav/MobileNav'
import { useState } from 'react';

const Navbar = () => {
    const [openMenu , setOpenMenu] = useState(false);
     
    const toggleMenu = () => {
        setOpenMenu(!openMenu);
    };

  <>

   <MobileNav isOpen={openMenu} toggleMenu={toggleMenu}/>
  <nav className="nav-wrapper">
    <div className="nav-content">
        <img className="logo" src="../assets/logo.jpg" alt="logo"/>
        <ul>
            <li> 
                <a className="menu-item" href="#">Home</a>
            </li>
            <li>
                <a className="menu-item" href="#">Skills</a>
            </li>
            <li>
                <a className="menu-item" href="#">Work Experience</a>
            </li>
            <li>
                <a className="menu-item" href="#" >Contact me</a>
            </li>

            <button  className="contact-bnt" onClick={() => {}}>
               Hire me
            </ button >
        </ul>
       
    </div>

  </nav>
  </>
}

export default Navbar;