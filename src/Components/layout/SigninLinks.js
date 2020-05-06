import React from 'react'
import { NavLink } from 'react-router-dom'
import {connect} from 'react-redux'
import { SignOut } from '../../store/action/authActions'

const SignedInLinks = (props) => {
    // console.log(props)
    const {profile}=props;
    console.log(profile)
    return (
        <ul className='right'>
            <li><NavLink to='/createproject'>New Project</NavLink></li>
            <li><a onClick = {props.SignOut}>Log Out</a></li>
            <li><NavLink to='/' className='btn btn-floating pink lighten-1'>{profile.intials}</NavLink></li>
        </ul>
    )


}

const mapDispatchToMap = (dispatch) => {
    return {
        SignOut: () => dispatch(SignOut())
    }


}
export default connect(null,mapDispatchToMap)(SignedInLinks);