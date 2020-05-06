export const SignIn = (credentials) => {

    return (dispatch, getState, { getFirebase }) => {
        const firebase = getFirebase();
        firebase.auth().signInWithEmailAndPassword(
            credentials.email,
            credentials.password
        ).then(()=>{
            dispatch({type:'LOGIN_SUCCESS'})
        }).catch((err)=>{
            dispatch({type:'LOGIN_ERROR',err})
        })

    }
} 


export const SignOut = ()=>{
return (dispatch,getState,{getFirebase})=>{
const firebase = getFirebase();

firebase.auth().signOut().then(()=>{

    dispatch({type:'SIGNOUT_SUCCESS'})

})

}

}

export const Signup = (newuser)=>{
  return (dispatch,getState,{ getFirebase,getFirestore}) =>{
const firebase = getFirebase();
const firestore = getFirestore();
firebase.auth().createUserWithEmailAndPassword(
    newuser.email,
    newuser.password
).then((res)=>{
    return firestore.collection('users').doc(res.user.uid).set(
      {
      firstName : newuser.firstName,
      lastName:newuser.lastName,
      intials: newuser.firstName[0]+newuser.lastName[0] 
    
    })
}).then(()=>{
dispatch({type:'SIGNUP_SUCCESS'})

}).catch(err=>{
    dispatch({type:'SIGNUP_ERROR',err:err})
})
  
}


}


// export default SignIn