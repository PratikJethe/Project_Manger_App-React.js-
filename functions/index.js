const functions = require('firebase-functions');
const admin = require('firebase-admin')
admin.initializeApp(functions.config().firebase)



exports.helloWorld = functions.https.onRequest((request, response) => {
 response.send("Hello from Firebase!");
});

const createnotification =(notification)=>{

    return admin.firestore().collection('notifications').add(notification).then((doc)=>{console.log(doc)})
}


exports.projectcreaed = functions.firestore.document('projects/{projectId}').onCreate(doc =>{
    const project=doc.data();
    const notification = {
        content:'Added a new project',
        user:`${project.authorFirstName } ${project.authorLastName}`,
        time:admin.firestore.FieldValue.serverTimestamp()
    }
     
    return createnotification(notification)

})


exports.userloined = functions.auth.user().onCreate(user=>{
    return admin.firestore().collection('users').doc(user.uid).get().then((doc)=>{
        const newuser = doc.data()

        const notification ={
            content:'Joined the Website',
            user:`${newuser.firstName } ${newuser.lastName}`,
            time:admin.firestore.FieldValue.serverTimestamp()
        }
        return createnotification(notification)

    })
})