import React from 'react'
import { SiAdobeacrobatreader } from 'react-icons/si'
import { FaHtml5, FaCss3, FaReact, FaDatabase, FaBootstrap, FaNodeJs } from 'react-icons/fa'
import { SiJavascript, SiJquery, SiGraphql } from 'react-icons/si'

import Pdf from '../../assets/pdf/johann-taylor-resume.pdf'

function Resume() {
    return (
        <>
        <section className="resume">
            <h1>My Resume</h1>
            <a href={Pdf} className="download" target="_blank" rel="noreferrer" download>Download my resume<SiAdobeacrobatreader size={25} style={{ fill: 'black' }}/></a>
            <div className="proficiencies">
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
                </div>
                <div>
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
            </div>
        </section>
        <section className="resume-small">
            <h1>My Resume</h1>
            <a href={Pdf} className="download" target="_blank" rel="noreferrer" download>Download my resume<SiAdobeacrobatreader size={25} style={{ fill: 'black' }}/></a>
            <div className="proficiencies-small">
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
                </div>
                <div>
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
            </div>
        </section>
        </>
    )
}

export default Resume;
