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
            projectTitle: "dogdash",
            status: "Completed"
        },
        {
            name: "Piano Pedagogy Program",
            description: "Website designed for the Piano Pedagogy department in the Universty of Toronto's Faculty of Music.",
            technologies: "HTML, CSS, Bootstrap",
            app: "https://pianopedagogy.ca/",
            git: "https://github.com/johannt91/pedagogy-site",
            projectTitle: "pianopedagogy",
            status: "Completed"
        },
        {
            name: "Weather Dashboard",
            description: "Weather app that provides current weather and a five day forecast for various cities.",
            technologies: "HTML, CSS, JavaScript, API",
            app: "https://johannt91.github.io/weather-dashboard/",
            git: "https://github.com/johannt91/weather-dashboard",
            projectTitle: "weatherdashboard",
            status: "Completed"
        },
        {
            name: "Tech Blog",
            description: "A content management system style blog site with CRUD functionality.",
            technologies: "JavaScript, Node, Handlebars, Express, Sequelize, MySQL",
            app: "https://johanntechblog.herokuapp.com/",
            git: "https://github.com/johannt91/tech-blog",
            projectTitle: "techblog",
            status: "Completed"
        },
        {
            name: "Code Quiz",
            description: "Test your coding fundamentals. See if you can be your high score!",
            technologies: "HTML, CSS, JavaScript",
            app: "https://https://johannt91.github.io/code-quiz/",
            git: "https://github.com/johannt91/code-quiz",
            projectTitle: "codequiz",
            status: "Completed"
        },
        {
            name: "Belles Artz",
            description: "A website for the Belles Artz graphic design company featuring a list of their services",
            technologies: "GatsbyJS",
            app: "https://johannt91.github.io/bellesite/",
            git: "https://github.com/johannt91/bellesite",
            projectTitle: "bellesartz",
            status: "In Progress"
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