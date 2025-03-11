import React from "react";
import { styled, Typography } from "@mui/material";

const RedirectTextComponent = styled('span')({
    color:'#00AFF4',
    fontWeight:5000,
    cursor:'pointer'
});

const RedirectInfo = ({ text,redirectText,additionalStyle,redirectHandler })=>{
    return(
        <Typography
            sx={{color:'#72767d'}}
            style={additionalStyle ? additionalStyle : {}}
            variant='subtitle2'
        >
            {text}
            <RedirectTextComponent onClick={redirectHandler}>
                {redirectText}
            </RedirectTextComponent>
        </Typography>
    );
}

export default RedirectInfo;