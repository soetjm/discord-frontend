import React from "react";
import CustomePrimaryButton from '../../shared/components/CustomePrimaryButton'
import RedirectInfo from "../../shared/components/RedirectInfo";
import { useNavigate } from 'react-router-dom';
import { Tooltip } from "@mui/material";

const getFormNotValidMessage = ()=>{
    return 'Enter correct e-mail and password schould contaion 6 -12 character,username schould contain 3-12 character'
}

const getformValidMessage = ()=>{
    return 'Press to to register';
}

const RegisterPageFooter = ({ handelRegister, isFormValid }) => {
    const navigate = useNavigate();

    const handelPushToLogin = () => {
        navigate("/login");
    };

    return (
        <>
            <Tooltip
                title = {!isFormValid ? getFormNotValidMessage(): getformValidMessage()}
            >
            <div>
                <CustomePrimaryButton
                    label="Register"
                    additionalStyle={{
                        marginTop: '30px'
                    }}
                    disabled={!isFormValid}
                    onClick={handelRegister}
                />
            </div>
            </Tooltip>
            <RedirectInfo
                text=''
                redirectText='Alrady have an account?'
                additionalStyle={{ marginTop: '5px' }}
                redirectHandler={handelPushToLogin}
            />
        </>
    );
}

export default RegisterPageFooter;
