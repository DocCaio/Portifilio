import React from "react";
import './Navbar.css';

  const Navbar = () =>{
  <>
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

    </div>

  </nav>
  </>
}

export default Navbar; 