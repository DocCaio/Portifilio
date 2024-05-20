import React from "react";
import './Navbar.css';

  const Navbar = () =>{
  <> 
  <nav className="nav-wrapper">
    <div className="nav-content">
        <img className="logo" src="#" alt="logo"/>
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

            <button className="contact-bnt" onClick={() => {}}>
               Hire me
            </button>
        </ul>

    </div>

  </nav>
  </>
}

export default Navbar;