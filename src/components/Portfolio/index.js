import React, { useState } from 'react'
import Projects from '../Projects'

function Portfolio() {
    const [projects] = useState([
        {
            name: "Dog Dash",
            description: "Welcome to Dog Dash! This is a web application for seeking dog walker.",
            technologies: "MERN",
            app: "https://dog-dash.herokuapp.com/",
            git: "https://github.com/pro3gro3/walk-my-dog",
            projectTitle: "dogdash"
        },
        {
            name: "The Coders Bay",
            description: "The Coders Bay is an online forum where like minded individuals can post about all things that are code.",
            technologies: "HTML, CSS, JavaScript, SQL, Socket.IO, handlebars",
            app: "https://the-coders-bay-app.herokuapp.com/",
            git: "https://github.com/johannt91/codersbay",
            projectTitle: "codersbay"
        },
        {
            name: "Piano Pedagogy Program",
            description: "Website designed for the Piano Pedagogy department in the Universty of Toronto's Faculty of Music.",
            technologies: "HTML, CSS, Bootstrap",
            app: "https://github.com/johannt91/pedagogy-site",
            git: "https://pianopedagogy.ca/",
            projectTitle: "pianopedagogy"
        },
        {
            name: "Weather Dashboard",
            description: "Weather app that provides current weather and a five day forecast for various cities.",
            technologies: "HTML, CSS, JavaScript, API",
            app: "https://johannt91.github.io/weather-dashboard/",
            git: "https://github.com/johannt91/weather-dashboard",
            projectTitle: "weatherdashboard"
        },
        {
            name: "Budget Tracker",
            description: "A PWA which allows users a fast and easy way to readily monitor their finances.",
            technologies: "HTML, CSS, JavaScript, MongoDB",
            app: "https://budget-trakr.herokuapp.com/",
            git: "https://github.com/johannt91/budget-tracker",
            projectTitle: "budgettracker"
        },
        {
            name: "Code Quiz",
            description: "Test your coding fundamentals. See if you can be your high score!",
            technologies: "HTML, CSS, JavaScript",
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