import React, {FC} from 'react';
import TextField from "@mui/material/TextField";
import {Field} from "formik";

interface FormikFieldProps{
    label: string
}
const FormikField : FC<FormikFieldProps> = ({label}) => {
    return (
        <div className="FormikField">
            {/*<Field as={TextField}/>*/}
            <TextField label={label} variant="standard" autoComplete="off" fullWidth/>
        </div>
    );
};

export default FormikField;