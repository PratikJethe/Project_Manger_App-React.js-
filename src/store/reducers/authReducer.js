const initstate = {

    authError: null

}

const authReducer = (state = initstate, action) => {

    switch (action.type) {
        case 'LOGIN_ERROR': return {
            ...state,
            authError: 'Login_Failed'
        }
        case 'LOGIN_SUCCESS': {console.log('SUCCESS'); 
        return { ...state, authError: null }
        }

        case 'SIGNOUT_SUCCESS':console.log('SIGNOUT_SUCCESS');return(state) 
        case 'SIGNUP_SUCCESS':console.log('SIGNED UP');return{...state,authError:null}
        case 'SIGNUP_ERROR':console.log('SIGNED FAILED');console.log(action.err) ;return{...state,authError:action.err.message}
        
        
        default: return state

    }




}
export default authReducer