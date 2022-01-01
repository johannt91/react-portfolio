import React from 'react'
import { FaGithub, FaLinkedin, FaEnvelope } from 'react-icons/fa';


function Footer() {
    return (
        <>
        <footer>
        <span className="contact-header">Let's connect</span>
            <div className="contact">
                <div>
                    <a href="https://github.com/johannt91"><FaGithub className="fa github"/></a>
                    </div>
                <div>
                    <a href="https://www.linkedin.com/in/johann-taylor-6936143a/"><FaLinkedin className="fa linkedin"/></a>
                </div>
                <div>
                    <a href="mailto:j.taylor1343@gmail.com"><FaEnvelope className="fa email"/></a>
                </div>
            </div>
        
            <div className="copyright">
                <small>Copyright &copy; Johann Taylor</small>
            </div>
        </footer>
        </>
    )
}

export default Footer;
