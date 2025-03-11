import React from "react";
import InputWithLabel from "../../shared/components/InputWithLabel";

const LoginPageHeader = ({mail,setMail,password,setPassword})=>{
    return(
        <>
          <InputWithLabel
            value={mail}
            setValue={setMail}
            label='E-maile'
            type='text'
            placeholder='Enter you email'
          />
          <InputWithLabel
            value={password}
            setValue={setPassword}
            label='password'
            type='password'
            placeholder='Enter you password'
          />
        </>
    );
}

export default LoginPageHeader;