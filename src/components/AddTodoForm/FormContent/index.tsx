import {Button, FormControl, TextField} from "@mui/material";
import {ErrorMessage, Field, Form, FormikProps} from "formik";
import React, {FC} from "react";
import {AddTodoValues} from "../formConfiguration";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";

type FormContentProps = {
    props: FormikProps<AddTodoValues>;
};

const FormContent: FC<FormContentProps> = ({props}) => {
    return (
        <Form {...props}>
            <Field
                name="title"
                id="title"
                component={TextField}
                label="title"
                variant="standard"
                onChange={props.handleChange}
                value={props.values.title}
                onBlur={props.handleBlur}
            />
            <ErrorMessage name="title"/>
            <Field name="task" id="task" label="task" component={TextField} variant="standard"
                   onChange={props.handleChange} value={props.values.task} onBlur={props.handleBlur}/>
            <ErrorMessage name="task"/>
            <Field as="select" name="lifestyle" id="lifestyle" label="Lifestyle" component={FormControl}
                   variant="standard"
                   onChange={props.handleChange}
                   onBlur={props.handleBlur}
                   sx={{m: 1, minWidth: 120}}>
                <InputLabel id="demo-simple-select-standard-label">
                    Lifestyle
                </InputLabel>
                <Select
                    labelId="demo-simple-select-standard-label"
                    id="lifestyle"
                    onChange={props.handleChange}
                    label="Lifestyle"
                    name="lifestyle"
                    value={props.values.lifestyle}
                >
                    <MenuItem value="">
                        <em>None</em>
                    </MenuItem>
                    <MenuItem value="home">Home</MenuItem>
                    <MenuItem value="work">Work</MenuItem>
                    <MenuItem value="hobby">Hobby</MenuItem>
                </Select>
            </Field>
            <ErrorMessage name="lifestyle"/>
            <Button type="submit" variant="contained" disabled={!(props.isValid && props.dirty) || props.isSubmitting}>
                Add
            </Button>
        </Form>
    );
};

export default FormContent;
