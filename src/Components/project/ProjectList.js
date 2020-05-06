import React from 'react'
import ProjectSummary from './ProjectSummary'
import {Link} from 'react-router-dom'

const ProjectList = ({projects}) => {
   console.log('jdjdjdjdjdjjdjdd') 
   console.log(projects)
    
    return (
        <div className='project-list section'>
         {projects && projects.map(project=>{
        
            return (
               <Link to={'/project/'+project.id} key={project.id} ><ProjectSummary project={project}></ProjectSummary></Link>
           )

         })}       


        </div>
    )

}

export default ProjectList