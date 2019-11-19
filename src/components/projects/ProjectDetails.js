import React from 'react'

const ProjectDetails = (props) => {
    const id = props.match.params.id;
    return (
        <div className="container section project-details">
            <div className="card z-depth-0">
                <div className="card-content">
                    <span className="card-title">Project Title - {id}</span>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Doloremque voluptate soluta rem officia porro ipsum saepe quae enim sed, natus esse assumenda omnis minus alias sit sapiente beatae provident inventore!</p>
                </div>
                <div className="card-action grey lighten-4 grey-text">
                    <div>Posted by Ayomide Bajo</div>
                    <div>15th November, 1pm</div>
                </div>
            </div>
        </div>
    )
}

export default ProjectDetails;
