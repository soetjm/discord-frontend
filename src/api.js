import axios from 'axios';
import {logout} from './shared/utils/auth'

const apiClient = axios.create({
    baseURL:'https://discord-backend-production-a2b4.up.railway.app/api',
    timeout:1000
}) 

apiClient.interceptors.request.use((config)=>{
    const userDetails = localStorage.getItem('user');
    if(userDetails){
        const token = JSON.parse(userDetails).token;
        config.headers.Authorization=`Bearer ${token}`;
    }

    return config;
},(err)=>{
    return Promise.reject(err);
})

export const login = async (data)=>{
    try{
        return await apiClient.post('/auth/login',data)
    }catch(exception){
        return {
            error:true,
            exception,
        }
    }
}

export const register = async (data)=>{
    try{
        return await apiClient.post('/auth/register',data)
    }catch(exception){
        return {
            error:true,
            exception,
        }
    }
}


//secure Route

export const sendFriendInvitation = async (data) => {
    try {
      return await apiClient.post("/friend-invitation/invite", data);
    } catch (exception) {
      checkResponseCode(exception);
      return {
        error: true,
        exception,
      };
    }
  };
  
  export const acceptFriendInvitation = async (data) => {
    try {
      console.log("Api acceptfirends buttons");
      return await apiClient.post("/friend-invitation/accept", data);
    } catch (exception) {
      checkResponseCode(exception);
      return {
        error: true,
        exception,
      };
    }
  };
  
  export const rejectFriendInvitation = async (data) => {
    try {
      return await apiClient.post("/friend-invitation/reject", data);
    } catch (exception) {
      checkResponseCode(exception);
      return {
        error: true,
        exception,
      };
    }
  };
  


const checkResponseCode = (exception)=>{
    const responseCode = exception?.response?.status;

    if(responseCode){
        (responseCode === 403 || responseCode === 401) && logout();
    }
}