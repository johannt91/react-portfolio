import React, { useState } from 'react'
import Projects from '../Projects'

function Portfolio() {
    const [projects] = useState([
        {
            name: "The Coders Bay",
            description: "HTML, CSS, JavaScript, SQL",
            app: "heroku link",
            git: "github link",
            projectTitle: "codersbay"
        },
        {
            name: "Refrain",
            description: "HTML, CSS, JavaScript",
            app: "heroku link",
            git: "github link",
            projectTitle: "refrain"
        },
        {
            name: "Run Buddy",
            description: "HTML, CS",
            app: "heroku link",
            git: "github link",
            projectTitle: "runbuddy"
        },
        {
            name: "Weather Dashboard",
            description: "HTML, CSS, JavaScript",
            app: "heroku link",
            git: "github link",
            projectTitle: "weatherdashboard"
        }
    ])


    return (
        <section>
            <h1>Portfolio</h1>
            <div>
                {projects.map((project, index) => (
                    <Projects 
                    project={project}
                    key={index}
                    />
                ))}

            </div>
        </section>
    );
}

export default Portfolio;