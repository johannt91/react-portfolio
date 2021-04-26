import React from 'react'
import { FaGithub, FaLinkedin } from 'react-icons/fa';


function Footer() {
    return (
        <footer>
            <a href="https://github.com/johannt91"><FaGithub size={50} style={{ fill: 'black' }}/></a>
            <a href="https://www.linkedin.com/in/johann-taylor-6936143a/"><FaLinkedin size={50} style={{ fill: 'black' }}/></a>
        </footer>
    )
}

export default Footer;
