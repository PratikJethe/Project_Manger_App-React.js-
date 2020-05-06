export const createProject =(project)=>{
//    console.log('lllllllllllllllll')
//    console.log(project)
    return (dispatch,getstate,{getFirebase,getFirestore})=>{
    const profile = getstate().firebase.profile
    const authorUid= getstate().firebase.auth.uid
    console.log(authorUid)
     const firestore = getFirestore();
     firestore.collection('projects').add({
         title:project.title,
         content:project.content,
         authorFirstName:profile.firstName,
         authorLastName:profile.lastName,
         authorId :authorUid,
         createAt : new Date()
     }).then(()=>{
         
         dispatch({type:'CREATE_PROJECT',project:project})    

     }).catch((err)=>{
         console.log(err)
         dispatch({type:'CREATE_PROJECT_ERROR',err})
     })

    }
}