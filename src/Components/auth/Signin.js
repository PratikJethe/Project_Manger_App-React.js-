import React, { Component } from 'react'
import {SignIn} from '../../store/action/authActions'
import {connect} from 'react-redux'
import{Redirect} from 'react-router-dom'
 



class Signin extends Component {
   

   state={
       email:null,
       password:null,
   }

   handlechange =(e)=>{

    this.setState({

    [e.target.id]:e.target.value

    })

   }

   handleSubmit=(e)=>{
    e.preventDefault() 

    console.log(this.state)
   this.props.signIn(this.state)
   }
   
    render() {
        const {autherror,auth} = this.props
        if(auth.uid) return <Redirect to='/'></Redirect>

        return (
            <div className='container'>
            <div className='row'>
            
            
            <form  className="white" onSubmit={this.handleSubmit}>
            <h5 className="grey-text text-darken-3">
            SignIn
            </h5>
            <div className="input-field">
            <label htmlFor="email">Email</label>           
            <input type='email' id ='email' onChange={this.handlechange}  />
            </div>
            <div className="input-field">
            <label htmlFor="password">Password</label>           
            <input type='password' id ='password' onChange={this.handlechange} required ></input>
            
            </div>

            <button className="btn pink lighten-1 z-depth0" onClick={this.handleSubmit}>LogIn</button>
            <div className="red-text center">
            {autherror?<p>LogIn Failed</p>:null}
            </div>
            
            </form>
                
            </div>
            </div>
        )
    }
}

const mapDispatchToProp=(dispatch)=>
{
return {
    signIn: (creds) => dispatch(SignIn(creds))
}

}

const mapStatetoProps = (state)=>{
   
    return {
      autherror:state.auth.authError,
      auth:state.firebase.auth
  }

}

export default connect(mapStatetoProps,mapDispatchToProp)(Signin)