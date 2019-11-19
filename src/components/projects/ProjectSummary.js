import React from 'react'

const ProjectSummary = ({project}) => {
    return (
        <div className="card z depth-0 project-summary">
            <div className="card-content blue-text text-darken-3">
                <span className="card-title">{project.title}</span>
                    <p>Posted by Ayomide Bajo</p>
                    <p className="orange-text">14th November, 3pm</p>
            </div>
        </div>
    )
}

export default ProjectSummary;
