import React from "react";
import styles from './styles.module.css';
//import { getImageUrl } from "../../util/path";
import Email from '../../assets/envelope-fill.svg'

const  Footer = () => {
  return (
  <footer id="footer"  className={styles.footer}>
   <div className={styles.text}>      
        
      <span>©️ CaioDev All Rights</span>
   </div>
   {/*<ul className={styles.links}>
        <li className={styles.link}>
        <img src={Email}/>
          <a href="caiomib@outlook.com">Caiomib@outlook.com</a>
        </li>       
      </ul>*/}
   </footer>
  )
}

export default Footer;