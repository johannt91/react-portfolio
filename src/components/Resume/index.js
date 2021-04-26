import React from 'react'
import { SiAdobeacrobatreader } from 'react-icons/si'
import Pdf from '../../assets/pdf/johann-taylor-resume.pdf'

function Resume() {
    return (
        <section>
            <h1>My Resume</h1>
            <p>Download my resume <a href={Pdf} target="_blank" rel="noreferrer" download><SiAdobeacrobatreader size={25} style={{ fill: 'black' }}/></a></p>
            <div>
                <h3>Front-end Proficiencies</h3>
                <ul className="skills">
                    <li>HTML5</li>
                    <li>CSS3</li>
                    <li>JavaScript</li>
                    <li>jQuery</li>
                    <li>Responsive Design</li>
                    <li>React</li>
                    <li>Bootstrap</li>
                </ul>
                <h3>Back-end Proficiencies</h3>
                <ul className="skills">
                    <li>APIs</li>
                    <li>Node</li>
                    <li>Express</li>
                    <li>MySQYL, Sequelize</li>
                    <li>MongoDB, Mongoose</li>
                    <li>REST</li>
                    <li>GraphQL</li>
                </ul>
            </div>
        </section>
    )
}

export default Resume;
