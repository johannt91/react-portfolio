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
        },
        {
            name: "Budget Tracker",
            description: "HTML, CSS, JavaScript, MongoDB",
            app: "heroku link",
            git: "github link",
            projectTitle: "budgettracker"
        },
        {
            name: "Team Profile Generator",
            description: "HTML, CSS, JavaScript",
            app: "heroku link",
            git: "github link",
            projectTitle: "teamprofile"
        }
    ])


    return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            <div className="card-deck">
                {projects.map((projectList, index) => (
                    <Projects 
                    projectList={projectList}
                    key={index}
                    />
                ))}

            </div>
        </section>
    );
}

export default Portfolio;