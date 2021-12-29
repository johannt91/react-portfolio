import React, { useState } from 'react'
import Projects from '../Projects'

function Portfolio() {
    const [projects] = useState([
        {
            name: "Dog Dash",
            description: "MERN",
            app: "https://dog-dash.herokuapp.com/",
            git: "https://github.com/pro3gro3/walk-my-dog",
            projectTitle: "dogdash"
        },
        {
            name: "The Coders Bay",
            description: "HTML, CSS, JavaScript, SQL",
            app: "https://the-coders-bay-app.herokuapp.com/",
            git: "https://github.com/johannt91/codersbay",
            projectTitle: "codersbay"
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
            name: "Code Quiz",
            description: "HTML, CSS, JavaScript",
            app: "https://https://johannt91.github.io/code-quiz/",
            git: "https://github.com/johannt91/code-quiz",
            projectTitle: "codequiz"
        }
    ])


    return (
        <section className="portfolio">
            <h1>Portfolio</h1>
            <div className="projects">
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