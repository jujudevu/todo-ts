import React, {FC, useState} from "react";
import "./TodoApp.css"
import * as Yup from 'yup'
// @ts-ignore
import {ITodo} from "types/types";
import List from "../List/List";
import {
    Formik,
    Form,
    Field,
    ErrorMessage
} from 'formik';
import TextField from "@mui/material/TextField";
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import {Button} from "@mui/material";

interface TodoAppProps {
    title: string;
    task: string;
    lifestyle: string;
}

const initialValues: TodoAppProps = {title: '', task: '', lifestyle: ''};

const TodoApp: FC<{}> = () => {
    const shortid = require('shortid');
    const [todo, setTodo] = useState<ITodo[]>([]);


    const completeTask = (todoIdComplete: string): void => {
        setTodo(todo.map((todo) =>
            todo.id === todoIdComplete ? {...todo, completed: !todo.completed} : todo,
        ));
    };

    const todoScheme = Yup.object().shape({
        title: Yup.string()
            .min(2, "Too short")
            .required('Required'),
        task: Yup.string()
            .min(2, "Too short")
            .required('Required'),
        lifestyle: Yup.string()
            .required('Required'),

    });
    const handleSubmit = (values: TodoAppProps): void => {
        const createTodo: ITodo = {
            id: shortid.generate(),
            title: values.title,
            task: values.task,
            lifestyle: values.lifestyle,
            completed: false
        };
        values.title = "";
        values.task = "";
        values.lifestyle = "";
        setTodo([createTodo, ...todo]);
    };
    return (
        <div className="container">
            <h2>Todo app</h2>
            <Formik<TodoAppProps> initialValues={initialValues} validationSchema={todoScheme} onSubmit={handleSubmit}>
                {({values, dirty, isValid, handleChange}) => (
                    <Form>
                        <TextField label="Title" name="title" value={values.title} variant="standard" autoComplete="off"
                                   onChange={handleChange} fullWidth/>
                        <ErrorMessage name="title"/>
                        <TextField label="Task" name="task" value={values.task} variant="standard" autoComplete="off"
                                   onChange={handleChange} fullWidth/>
                        <ErrorMessage name="title"/>
                        <FormControl variant="standard" sx={{m: 1, minWidth: 120}}>
                            <InputLabel id="demo-simple-select-standard-label">Lifestyle</InputLabel>
                            <Select
                                labelId="demo-simple-select-standard-label"
                                id="demo-simple-select-standard"
                                value={values.lifestyle}
                                onChange={handleChange}
                                label="Lifestyle"
                                name="lifestyle"
                            >
                                <MenuItem value="">
                                    <em>None</em>
                                </MenuItem>
                                <MenuItem value="home">Home</MenuItem>
                                <MenuItem value="work">Work</MenuItem>
                                <MenuItem value="hobby">Hobby</MenuItem>
                            </Select>
                        </FormControl>
                        <ErrorMessage name="lifestyle"/>
                        <Button disabled={!dirty || !isValid} type="submit" variant="contained">Add</Button>
                    </Form>
                )}
            </Formik>
            <List todos={todo} completeTask={completeTask}/>
        </div>
    );
};

export default TodoApp;