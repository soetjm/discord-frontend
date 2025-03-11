import React , {useState,useEffect} from "react";
import { Typography } from "@mui/material";
import AuthBox from '../../shared/components/AuthBox';
import RagisterPageInput from "./RegisterPageInput";
import RegisterPageFooter from "./RegisterPageFooter";
import {validateRegisterForm} from '../../shared/utils/validetors'
import {connect} from 'react-redux';
import {getAction} from '../../store/actions/authAction'
import { useNavigate } from "react-router-dom";

const RegisterPage = ({register})=>{
    const navigate = useNavigate();
    const [mail,setMail]= useState('')
    const [username,setUsername]= useState('')
    const [password,setPassword]= useState('')


    const [isFormValid,setIsFormValid] = useState(false)

    const handelRegister = ()=>{
        const userDetails={
            mail,
            password,
            username
        };
        register(userDetails,navigate);
    }

    useEffect(()=>{
        setIsFormValid(validateRegisterForm({
            mail,
            username,
            password,
        }))
    },[mail,username,password,setIsFormValid])

    return(
        <AuthBox>
                <Typography variant='h5' sx={{color:'white'}}>
                    Create account
                </Typography>
                <RagisterPageInput
                    mail={mail}
                    setMail = {setMail}
                    username={username}
                    setUsername = {setUsername}
                    password={password}
                    setPassword={setPassword}
                />
                <RegisterPageFooter
                    handelRegister={handelRegister}
                    isFormValid={ isFormValid}
                />
        </AuthBox>
    );
}

const mapActionsToProps = (dispatch)=>{
    return{
        ...getAction(dispatch)
    }
}

export default connect(null,mapActionsToProps) (RegisterPage);