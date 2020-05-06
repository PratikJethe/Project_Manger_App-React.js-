import React from 'react'
import {Link} from 'react-router-dom'
import SignedInLinks from './SigninLinks'
import SignedOutLink from './SignoutLink'
import {connect} from 'react-redux'

const Navbar = (props)=>{
    const {auth,profile} =props
    console.log(auth)
    
    let Links = auth.uid ?<SignedInLinks profile={profile}/>:<SignedOutLink/>
return(
  <nav className='nav-wrapper grey darken-3'>
  <div className='container'>
    
  <Link to='/' className='brand-logo'>ProjectManager</Link>
  
  {Links}
  
  </div>
  </nav>
 )


}
const mapStateToProps = (state)=>{
   console.log(state)
    return{
        auth : state.firebase.auth,
        profile:state.firebase.profile
    }
}

export default connect(mapStateToProps)(Navbar);