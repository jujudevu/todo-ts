import React, {FC} from "react";
import {InputLabel} from "@mui/material";

type LabelProps = {
    id?:string;
    text:string;

}

const Label : FC<LabelProps>=({id, text})=>{
    return(
        <InputLabel htmlFor={id}>
            {text}
        </InputLabel>
    )
}
export default Label;