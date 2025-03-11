import React from "react";
import Box from "@mui/material/Box";
import { styled } from "@mui/material"; /** @importnat mui/system may also work  */

const Wrapper = styled('div')({
    display:'flex',
    justifyContent:'center',
    flexDirection:'column',
    width:'100%',
})

const Label = styled('p')({
    color:'#b9bbbe',
    textTransform:'uppercase',
    fontWeight:'600',
    fontSize:'16px',
})

const Input = styled('input')({
    flexGrow:1,
    height:'40px',
    border:'1px solid black',
    borderRadius:'5px',
    color:'#dcddde',
    background:'#35393f',
    margin:0,
    fontSize:'16px',
    padding:'0 5px',
})

const InputWithLabel = (props)=>{
    const { value,setValue,label,type,placeholder}=props;
    const handelValeChange = (event)=>{
        setValue(event.target.value);
    }
    return(
        <Wrapper>
            <Label>{label}</Label>
            <Input 
            value={value} 
            onChange={handelValeChange} 
            type={type} 
            placeholder={placeholder}
            />
        </Wrapper>
    );
}


export default InputWithLabel