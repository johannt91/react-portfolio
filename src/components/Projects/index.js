import React from 'react'
import { capitalizeFirstLetter } from '../../utils/helpers'
import image from '../../assets/projects/codersbay.jpg'

function Projects() {
    const currentProject = {
        name: "the coder's bay"
    }

    return (
        <section>
            <h1>Projects</h1>
            <div className="card">
                <img 
                src={image}
                alt="project"
                className="card-img"
                />
                <div className="card-body d-flex flex-column align-items-center">
                    <h4 className="card-title">{capitalizeFirstLetter(currentProject.name)}</h4>
                    <div className="button-container">
                    <a href="#" className="btn btn-primary">GitHub</a>
                    <a href="#" className="btn btn-primary">Demo</a>
                    </div>
                    
                </div>
            </div>
        </section>
    );
}

export default Projects;