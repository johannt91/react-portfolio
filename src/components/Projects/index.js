import React from 'react'
import { FaGithub } from 'react-icons/fa'

const Projects = ({ projectList }) => {

const { name, description, git, app, projectTitle } = projectList;

return (
        <div className="card" key={name}>
                <img 
                src={require(`../../assets/images/${projectTitle}.jpg`).default}
                alt={name}
                className="card-img"
            />
            <div className="card-body d-flex flex-column align-items-center">
                <h4 className="card-title">{name}
                </h4>
                <p>{description}</p>
                <div className="button-container">
                    <a href={git} className="btn btn-dark"><FaGithub/>GitHub</a>
                    <a href={app} className="btn btn-primary">Demo</a>
                </div>   
            </div>
        </div>
    )
}

export default Projects;

