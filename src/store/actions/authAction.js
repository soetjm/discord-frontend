import * as api from '../../api'
import { openAlertMessage } from './alertAction';
export const authActions = {
    SET_USER_DETAILS:'AUTH.SET_USER_DETAILS'
};


export const getAction  = (dispatch)=>{
    return {
        login:(userDetails,navigate)=>dispatch(login(userDetails,navigate)),
        register:(userDetails,navigator)=>dispatch(register(userDetails,navigator)),
        setUserDetails:(userDetails)=>dispatch(setUserDetails(userDetails))
    }
}

const setUserDetails = (userDetail)=>{
    return {
        type:authActions.SET_USER_DETAILS,
        userDetail,
    }
}

const login = (userDetails,navigator)=>{
    return async (dispatch)=>{
        const response = await api.login(userDetails);
        console.log("response",response);
        if(response.error){
            //handel error
            dispatch(openAlertMessage(response?.exception?.response?.data));
        }else{
            const { userDetail }=response.data;
            console.log('userDetail to be store',userDetail);
            localStorage.setItem("user",JSON.stringify(userDetail));

            dispatch(setUserDetails(userDetail));
            navigator("/dashbord");
        }
    }
}
const register = (userDetails,navigator)=>{
    return async (dispatch)=>{
        const response = await api.register(userDetails);
        console.log("response",response);
        if(response.error){
            //handel error
            dispatch(openAlertMessage(response?.exception?.response?.data));
        }else{
            const { userDetail }=response.data;
            console.log('userDetail to be store',userDetail);
            localStorage.setItem("user",JSON.stringify(userDetail));

            dispatch(setUserDetails(userDetail));
            navigator("/dashbord");
        }
    }
}