import React, { useState } from 'react'
import Projects from '../Projects'

function Portfolio() {
    const [projects] = useState([
        {
            name: "The Coders Bay",
            description: "HTML, CSS, JavaScript, SQL",
            app: "https://the-coders-bay-app.herokuapp.com/",
            git: "https://github.com/johannt91/codersbay",
            projectTitle: "codersbay"
        },
        {
            name: "Refrain",
            description: "HTML, CSS, JavaScript",
            app: "https://codinggroupproject1.github.io/REFRAIN/",
            git: "https://github.com/CodingGroupProject1/REFRAIN",
            projectTitle: "refrain"
        },
        {
            name: "Run Buddy",
            description: "HTML, CS",
            app: "https://johannt91.github.io/run-buddy/",
            git: "https://github.com/johannt91/run-buddy",
            projectTitle: "runbuddy"
        },
        {
            name: "Weather Dashboard",
            description: "HTML, CSS, JavaScript",
            app: "https://johannt91.github.io/weather-dashboard/",
            git: "https://github.com/johannt91/weather-dashboard",
            projectTitle: "weatherdashboard"
        },
        {
            name: "Budget Tracker",
            description: "HTML, CSS, JavaScript, MongoDB",
            app: "https://budget-trakr.herokuapp.com/",
            git: "https://github.com/johannt91/budget-tracker",
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
            <div>
                <h1>Portfolio</h1>
            </div>
            
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