import React, {ChangeEvent, FC} from "react";
import {InputLabel, OutlinedInput} from "@mui/material";
import {FieldInputProps, FormikProps} from "formik";

type InputProps ={
    id?:string;
    name?:string;
    value?:string | number;
    label?:string;
    onBlur?: (value:string) => void;
    onChange?: (value:string | number) => void;
    field?: FieldInputProps<string | number>;
    form?: FormikProps<any>;
    placeholder?: string;
}
const Input: FC<InputProps> =({id,name, label, field, placeholder})=>{

    return(
        <OutlinedInput
            id={id} name={name} value={field?.value} label={label} onChange={field?.onChange} onBlur={field?.onBlur} placeholder={placeholder}
        />
    )
};

export default Input;