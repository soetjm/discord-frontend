import React, { useState,useEffect} from "react";
import AuthBox from '../../shared/components/AuthBox';
import LoginPageHeader from './LoginPageHeader'
import LoginPageInput from './LoginPageInput'
import LoginPageFooter from './LoginPageFooter'
import {validetLoginForm} from '../../shared/utils/validetors'
import {connect} from 'react-redux';
import {getAction} from '../../store/actions/authAction'
import { useNavigate } from "react-router-dom";
const LoginPage = ({login})=>{
    const navigate = useNavigate();
    const [mail,setMail]= useState('');
    const [password,setPassword]=useState('');
    const [isFormValid,setIsFormValid]=useState(false);

    useEffect(()=>{
        setIsFormValid(validetLoginForm({mail,password}))
    },[mail,password,setIsFormValid])

    const handelLogin = ()=>{
        const userDetails = {
            mail,
            password
        }
        login(userDetails,navigate);
    }
    return(
        <AuthBox>
            <LoginPageHeader/>
            <LoginPageInput
                mail = {mail}
                setMail = {setMail}
                password = {password}
                setPassword = {setPassword}
            />
            <LoginPageFooter isFormValid={isFormValid} handelLogin={handelLogin}/>
        </AuthBox>
    );
}

const mapActionsToProps = (dispatch)=>{
    return{
        ...getAction(dispatch)
    }
}

export default connect(null,mapActionsToProps) (LoginPage);