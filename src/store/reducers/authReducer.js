import {authActions} from '../actions/authAction'
const initState = {
    userDetails:null
}

const reducer = (state = initState,action)=>{
    switch(action.type){
        case authActions.SET_USER_DETAILS:
            return{
                ...state,
                userDetails:action.useDetails,
            };
        default:
            return state
    }
}

export default reducer;