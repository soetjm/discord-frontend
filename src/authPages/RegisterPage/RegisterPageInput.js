import React from "react";
import InputWithLabel from '../../shared/components/InputWithLabel'

const RagisterPageInput = (props)=>{

    const { mail ,setMail,username,setUsername,password,setPassword}= props;
    return(
        <>
            <InputWithLabel
                value = {mail}
                setValue = {setMail}
                label="E-mail Address"
                type='email'
                placeholder='Enter E-mail Address'
            />
            <InputWithLabel
                value = {username}
                setValue = {setUsername}
                label="Username"
                type='text'
                placeholder='Enter username '
            />
            <InputWithLabel
                value = {password}
                setValue = {setPassword}
                label="your password"
                type='password'
                placeholder='Enter your password'
            />
        
        </>
    );
}

export default RagisterPageInput;