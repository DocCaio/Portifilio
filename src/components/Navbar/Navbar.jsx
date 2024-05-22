import React, { useState } from "react";
import './Navbar.css';
import MobileNav from "./MobileNav/MobileNav";

  const Navbar = () =>{

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
                <a className="menu-item" href="https://ge.globo.com/">Home</a>
            </li>
            <li>
                <a className="menu-item" href="https://ge.globo.com/">Skills</a>
            </li>
            <li>
                <a className="menu-item" href="https://ge.globo.com/">Work Experience</a>
            </li>
            <li>
                <a className="menu-item" href="https://ge.globo.com/">Contact me</a>
            </li>

            <button  className="contact-bnt" onClick={() => {}}>
               Hire me
            </ button >
        </ul>

        <button className="menu-btn" onClick={toggleMenu}>
            <span
             className={"material-symbols-outlined"}
             style={{fontSize: "1.8rem"}}   
            
            >
            {openMenu ? 'close': 'menu'}
            </span>

        </button>

    </div>

  </nav>
  </>
}

export default Navbar; 