import React from "react";
import './Navbar.css';

  const Navbar = () =>{
  <header>
  <nav className="nav-wrapper">
    <div className="nav-content">
        <img className="logo" src="./assets/logo.jpg" alt="logo"/>
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
                <a className="menu-item" href="#">Contact me</a>
            </li>

            <button  className="contact-bnt" onClick={() => {}}>
               Hire me
            </ button >
        </ul>

    </div>

  </nav>
  </header>
}

export default Navbar;