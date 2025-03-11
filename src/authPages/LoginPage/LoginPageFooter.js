import React from "react";
import CustomePrimaryButton from '../../shared/components/CustomePrimaryButton'
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from 'react-router-dom';
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = ()=>{
    return 'Enter correct e-mail and password schould contaion 6 -12 character'
}

const getformValidMessage = ()=>{
    return 'Press to log in';
}

const LoginPageFooter = ({ handelLogin, isFormValid }) => {
    const navigate = useNavigate();

    const handelPushToRegister = () => {
        navigate("/register");
    };

    return (
        <>
            <Tooltip
                title = {!isFormValid ? getFormNotValidMessage(): getformValidMessage()}
            >
            <div>
                <CustomePrimaryButton
                    label="Login"
                    additionalStyle={{
                        marginTop: '30px'
                    }}
                    disabled={!isFormValid}
                    onClick={handelLogin}
                />
            </div>
            </Tooltip>
            <RedirectInfo
                text='Need an account?  '
                redirectText='Create an account'
                additionalStyle={{ marginTop: '5px' }}
                redirectHandler={handelPushToRegister}
            />
        </>
    );
}

export default LoginPageFooter;
