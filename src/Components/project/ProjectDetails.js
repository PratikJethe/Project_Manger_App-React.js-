import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import {Redirect} from 'react-router-dom'
import moment from 'moment/moment'

const ProjectDetails = (props) => {
  //  let id = props.match.params.id
  console.log('jjssjjsjsjs')
  console.log(props)
  const { project, auth } = props;
  
  if(!auth.uid) return <Redirect to='/signin'/>
 
 
  if (project) {
    

    return (
      <div className='container section project-details'>
        <div className="card z-depth-0">
          <div className="card-content">
            <span className='card-title'>{project.title}</span>
            <p>{project.content}</p>
          </div>
          <div className="card-action grey lighten-4 gery-text">
            <div>Posted by {project.authorFirstName} {project.authorLastName}</div>
            <div>{moment(project.createAt.toDate()).calendar()}</div>
          </div>
        </div>
      </div>
    )

  } else return <p>No Project</p>

}
const mapStateToProps = (state, ownProps) => {
  // console.log(state)
  const id = ownProps.match.params.id;
  const projects = state.firestore.data.projects;
  console.log(projects)
const project = projects ?projects[id]:null
  

return {
  project:project,
  auth : state.firebase.auth
}

}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props=>[{
    collection: 'projects',
    doc: props.match.params.id
  }])

)(ProjectDetails)