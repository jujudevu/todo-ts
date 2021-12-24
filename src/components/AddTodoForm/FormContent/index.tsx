import {Button, FormControl, TextField, ThemeProvider} from "@mui/material";
import {ErrorMessage, Field, Form, FormikProps} from "formik";
import React, {FC} from "react";
import {AddTodoValues} from "../formConfiguration";
import styles from './_FormContent.module.scss'
import {theme} from "../../../theme";
import Input from '../../../shared/components/Input/index'
import Label from "../../../shared/components/Label";
import Dropdown from "../../../shared/components/Dropdown";

type FormContentProps = {
    props: FormikProps<AddTodoValues>;
};

// const useStyles = makeStyles()
const FormContent: FC<FormContentProps> = ({props}) => {
    // const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Form {...props} className={styles.container}>
                <Label id="title" text="Title"/>
                <Field
                    className={styles.field}
                    name="title"
                    id="title"
                    component={Input}
                    label="Title"
                    onChange={props.handleChange}
                    value={props.values.title}
                    onBlur={props.handleBlur}
                    placeholder="Enter title"
                />
                <ErrorMessage name="title"/>
                <Label id="task" text="Task"/>
                <Field className={styles.field} name="task" id="task" label="Task" component={Input}
                       onChange={props.handleChange} value={props.values.task} onBlur={props.handleBlur}
                       placeholder="Enter task"/>
                <ErrorMessage name="task"/>
                <Label id="lifestyle" text="Lifestyle"/>
                <Field className={styles.field} as="select" name="lifestyle" id="lifestyle" label="Lifestyle"
                       component={Dropdown}
                       onChange={props.handleChange}
                       onBlur={props.handleBlur}
                       sx={{m: 1, minWidth: 120, margin: 0,}}>
                </Field>
                <ErrorMessage name="lifestyle"/>
                <Button className={styles.button} type="submit"
                        disabled={!(props.isValid && props.dirty) || props.isSubmitting}>
                    Add
                </Button>
            </Form>
        </ThemeProvider>
    );
};

export default FormContent;
