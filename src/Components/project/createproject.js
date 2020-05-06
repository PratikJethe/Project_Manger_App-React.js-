import React, { Component } from 'react'
import {connect} from 'react-redux'
import {createProject} from '../../store/action/projectAction'
import {Redirect} from 'react-router-dom'
 class CreateProject extends Component {
   
   state = {
      title:null,
      content:null,
   }

   handlechange =(e)=>{
  
    this.setState({

    [e.target.id]:e.target.value

    })

   }

   handleSubmit=(e)=>{
    e.preventDefault() 
    this.props.createProject(this.state)
    this.props.history.push('/')
   }
   
    render() {
        const {auth} = this.props
        if(!auth.uid) return <Redirect to='/signin'/>

        return (
            <div className='container'>
            <div className='row'>
            
            
            <form  className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">
            CreateProject
            </h5>
            <div className="input-field">
            <label htmlFor="Title">Title</label>           
            <input type='text' id ='title' onChange={this.handlechange}  />
            </div>
            <div className="input-field">
            <label htmlFor="content">Project Content</label>           
            <textarea  id="content" onChange={this.handlechange} className="materialize-textarea"></textarea>
            
            </div>

            <button className="btn pink lighten-1 z-depth0" onClick={this.handleSubmit}>Create Project</button>
            </form>
                
            </div>
            </div>
        )
    }
}
const mapStateToProp=(state)=>{
return {
    auth:state.firebase.auth,
}
}

const mapDispatchToProp = (dispatch)=>{
   
    return {
        createProject:(project)=>dispatch(createProject(project))
    }

}
export default connect(mapStateToProp,mapDispatchToProp)(CreateProject)