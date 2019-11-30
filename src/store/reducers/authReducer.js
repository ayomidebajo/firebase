//initial state
const initState = {
    authError: null
}
//authenticated/authenticator reducer(i.e for login,login error,signup, signup error and signout)
const authReducer = (state = initState,action) => {
    switch(action.type){
        case 'LOGIN_ERROR':
            console.log('login error');
            
            return {
                ...state,
                authError: 'Login failed'
            }
        case 'LOGIN_SUCCESS' :
            console.log('login success');
            return {
                ...state,
                authError: null
            }
        case 'SIGNOUT_SUCCESS':
            console.log('signout successful');
        return state;
            
        case 'SIGNUP_SUCCESS':
            console.log('signup successful');
            return {
                ...state,
                authError: null
            }
        case 'SIGNUP_ERROR':
            console.log('signup error');
            return {
                ...state, 
                authError: action.err.message
            }
        case 'RESET_SUCCESS': 
            console.log('password reset successful');
            return {
                ...state,
                authError:null
            }
        case 'RESET_ERROR':
            console.log('password not reset');
            return {
                ...state,
                authError: null
            }
            
        
            
    default: 
    return state;
}
}

export default authReducer;