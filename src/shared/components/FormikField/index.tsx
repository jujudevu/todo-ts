import React, {FC} from 'react';
import TextField from "@mui/material/TextField";

interface FormikFieldProps{
    label: string
}
const FormikField : FC<FormikFieldProps> = ({label}) => {
    return (
        <div>
            <TextField label={label} variant="standard" autoComplete="off" fullWidth/>
        </div>
    );
};

export default FormikField;