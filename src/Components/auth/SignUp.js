import React, { Component } from 'react'
import{Redirect} from 'react-router-dom'
import {connect} from 'react-redux'
import {Signup} from '../../store/action/authActions'

 
class SignUp extends Component {
   
   state={
       email:null,
       password:null,
       firstName:null,
       lastName:null

   }

   handlechange =(e)=>{
  
    this.setState({

    [e.target.id]:e.target.value

    })

   }

   handleSubmit=(e)=>{
    e.preventDefault() 
    console.log(this.props)
    console.log(this.state)
    this.props.Signup(this.state)

   }
   
    render() {
        console.log(this.props)
        const { auth,autherror} = this.props

        if(auth.uid) return <Redirect to='/'></Redirect>
        
        
        return (
            <div className='container'>
            <div className='row'>
            
            
            <form  className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">
            SignUp
            </h5>
            <div className="input-field">
            <label htmlFor="email">Email</label>           
            <input type='email' id ='email' onChange={this.handlechange}  />
            </div>
            <div className="input-field">
            <label htmlFor="password">Password</label>           
            <input type='password' id ='password' onChange={this.handlechange} required ></input>
            
            </div>


            <div className="input-field col l6 s12">
            <label htmlFor="firstName">First Name</label>           
            <input type='text' id ='firstName' onChange={this.handlechange} required ></input>
            
            </div>
            <div className="input-field  col l6 s12">
            <label htmlFor="lastName">Last Name</label>           
            <input type='text' id ='lastName' onChange={this.handlechange} required ></input>
            
            </div>
            <button className="btn pink lighten-1 z-depth0" onClick={this.handleSubmit}>SignUp</button>
           {autherror?<p className='red-text container'>{autherror}</p>:null}
          
            </form>
                
            </div>
            </div>
        )
    }
}
const mapStateToProp = (state)=>{
   return {
       auth:state.firebase.auth,
       autherror:state.auth.authError
   }

}
const mapDispatchToProp=(dispatch)=>{
    return{
        
        Signup:(newuser)=>dispatch(Signup(newuser))
    }
}



export default connect(mapStateToProp,mapDispatchToProp)(SignUp)