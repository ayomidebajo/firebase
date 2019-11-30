import React from 'react';
import moment from 'moment'

//project summary(i.e title,name,date)
const ProjectSummary = ({project}) => {
    return (
        <div className="card z depth-0 project-summary">
            <div className="card-content blue-text text-darken-3">
                <span className="card-title">{project.title}</span>
                    <p>Posted by {project.authorFirstName} { project.authorLastName}</p>
                    <p className="orange-text">{moment(project.createdAt.toDate()).calendar()}</p>
            </div>
        </div>
    )
}

//for dates use moment (install moments.js)
export default ProjectSummary;
