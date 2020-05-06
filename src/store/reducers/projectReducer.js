const initstate={
projects:[
    {id:1,title:'react',content:'firebase react project'},
    {id:2,title:'react',content:'firebase react project'},
    {id:3,title:'react',content:'firebase react project'}
]
}

const projectReducer = (state=initstate,action)=>{
 switch(action.type){
 case 'CREATE_PROJECT': console.log('CREATED'); return state
 case 'CREATE_PROJECT_ERROR': console.log('ERROR',action.err);return state
 default : return state
 
 
 
 }
    
}
export default projectReducer