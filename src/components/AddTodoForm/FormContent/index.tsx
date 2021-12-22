import {Button, FormControl, TextField, ThemeProvider} from "@mui/material";
import {ErrorMessage, Field, Form, FormikProps} from "formik";
import React, {FC} from "react";
import {AddTodoValues} from "../formConfiguration";
import InputLabel from "@mui/material/InputLabel";
import Select from "@mui/material/Select";
import MenuItem from "@mui/material/MenuItem";
import {inspect} from "util";
import styles from './_FormContent.module.scss'
import {makeStyles} from "@material-ui/core";
import {theme} from "../../../theme";

type FormContentProps = {
    props: FormikProps<AddTodoValues>;
};

// const useStyles = makeStyles()
const FormContent: FC<FormContentProps> = ({props}) => {
    // const classes = useStyles()
    return (
        <ThemeProvider theme={theme}>
            <Form {...props} className={styles.container}>
                <Field
                    className={styles.field}
                    name="title"
                    id="title"
                    component={TextField}
                    label="Title"
                    variant="standard"
                    onChange={props.handleChange}
                    value={props.values.title}
                    onBlur={props.handleBlur}
                />
                <ErrorMessage name="title"/>
                <Field className={styles.field} name="task" id="task" label="Task" component={TextField}
                       variant="standard"
                       onChange={props.handleChange} value={props.values.task} onBlur={props.handleBlur}/>
                <ErrorMessage name="task"/>
                <Field className={styles.field} as="select" name="lifestyle" id="lifestyle" label="Lifestyle"
                       component={FormControl}
                       variant="standard"
                       onChange={props.handleChange}
                       onBlur={props.handleBlur}
                       sx={{m: 1, minWidth: 120, margin:0,}}>
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
                        <MenuItem className={styles.MenuItem} value="home">Home</MenuItem>
                        <MenuItem value="work">Work</MenuItem>
                        <MenuItem value="hobby">Hobby</MenuItem>
                    </Select>
                </Field>
                <ErrorMessage name="lifestyle"/>
                <Button className={styles.button} type="submit" variant="contained"
                        disabled={!(props.isValid && props.dirty) || props.isSubmitting}>
                    Add
                </Button>
            </Form>
        </ThemeProvider>
    );
};

export default FormContent;
