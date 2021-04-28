import React from 'react'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { FaHtml5, FaCss3, FaReact, FaDatabase, FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiJquery, SiGraphql } from 'react-icons/si'

import Pdf from '../../assets/pdf/johann-taylor-resume.pdf'

function Resume() {
    return (
        <section>
            <h1>My Resume</h1>
            <p>Download my resume <a href={Pdf} target="_blank" rel="noreferrer" download><SiAdobeacrobatreader size={25} style={{ fill: 'black' }}/></a></p>
            <div>
                <h3>Front-end Proficiencies</h3>
                <ul className="skills">
                    <li>HTML5 <FaHtml5/></li>
                    <li>CSS3 <FaCss3/></li>
                    <li>JavaScript <SiJavascript/></li>
                    <li>jQuery <SiJquery/></li>
                    <li>Responsive Design</li>
                    <li>React <FaReact/></li>
                    <li>Bootstrap <FaBootstrap/></li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul className="skills">
                    <li>APIs</li>
                    <li>Node <FaNodeJs/></li>
                    <li>Express</li>
                    <li>MySQL, Mongoose <FaDatabase/></li>
                    <li>REST</li>
                    <li>GraphQL <SiGraphql/></li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;
