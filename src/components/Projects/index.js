import React from 'react'
import { FaGithub, FaLaptopCode } from 'react-icons/fa'

const Projects = ({ projectList }) => {

const { name, description, technologies, git, app, projectTitle } = projectList;

return (
        <div className="card" key={name}>
                <img 
                src={require(`../../assets/images/${projectTitle}.jpg`).default}
                alt={name}
                className="card-img"
            />
            <div className="card-body d-flex flex-column align-items-center">
                <h4 className="card-title">
                    {name}
                </h4>
                <p>{description}</p>
                <span>{technologies}</span>
                <div className="button-container">
                    <a href={git} className="btn btn-dark" target="_blank" rel="noreferrer"><FaGithub/>GitHub</a>
                    <a href={app} className="btn btn-primary" target="_blank" rel="noreferrer"><FaLaptopCode/>Demo</a>
                </div>   
            </div>
        </div>
    )
}

export default Projects;

