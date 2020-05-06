import React from 'react'
import moment from 'moment/moment'

const ProjectSummary = ({project}) => {
    return (
        <div>
            <div className='card z-depth-1 project-summary'>
                <div className='card-content grey-text text-darken-3 '>
                    <span className='card-title'>{project.title}</span>
                    <p className='grey-text'>Posted By {project.authorFirstName}  {project.authorLastName}</p>
                    <h6>{moment(project.createAt.toDate()).calendar()}</h6>
                </div>
            </div>
        </div>
    )
}

export default ProjectSummary