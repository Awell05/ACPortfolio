import React from 'react';
import './footer.css';
import { FaLinkedin, FaGithub } from "react-icons/fa";

function Footer(){
    return ( <div className="footer">
        <a href= "https://github.com/Awell05" >
        <FaGithub  className="github-link" /> 
        </a>
        <a href="https://www.linkedin.com/in/andreshe-a-caldwell-67091997/">
        <FaLinkedin  className="linkedin"/> </a>
    </div> )
}
export default Footer;