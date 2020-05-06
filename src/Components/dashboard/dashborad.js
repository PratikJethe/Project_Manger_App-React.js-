import React, { Component } from 'react'
import Notification from './Notification'
import ProjectList from '../project/ProjectList'
import {connect} from 'react-redux'
import {firestoreConnect} from 'react-redux-firebase'
import {compose} from 'redux'
import {Redirect} from 'react-router-dom'

class DashBorad extends Component {
    
    render() {
        console.log(this.props)
       const {projects,auth,notifications} = this.props
       if(!auth.uid) return <Redirect to='/signin'/>
       return (
            <div className='dashboard container'>
                <div className='row'>
                    <div className='col s12 m6'>
                    <ProjectList projects = {projects} ></ProjectList>
                    
                    </div>
                    <div className='col s12 m5 offset-m1'>
                    <Notification notifications={notifications}></Notification>
                    
                    </div>


                    
                </div>

            </div>
        )
    }
}
const mapStateToProps=(state)=>{
    
    console.log('shshhshshshshs')
    console.log(state)
    return{
        projects:state.firestore.ordered.projects,
        auth:state.firebase.auth,
        notifications:state.firestore.ordered.notifications      
    }
}
export default compose(connect(mapStateToProps),firestoreConnect([
    {collection:'projects',orderBy:['createAt','desc']},
    {collection:'notifications',limit:3,orderBy:['time','desc']}

]))(DashBorad)