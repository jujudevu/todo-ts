import React, {useEffect, useState} from "react";
import {ITodo} from "types/types";
import List from "./components/List";
import {Button, TextField} from "@mui/material";


const App = () => {

    const shortid = require('shortid');
    const [todo, setTodo] = useState<ITodo[]>([]);
    const [value, setValue] = useState<string>('');


    const completeTask = (todoIdComplete: string): void => {
        setTodo(todo.map((todo) =>
            todo.id === todoIdComplete ? {...todo, completed: !todo.completed} : todo,
        ));
    };
    const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
        event.preventDefault();
        setValue(event.target.value);
    };
    const clickButton = (event: React.MouseEvent<HTMLButtonElement>): void => {
        event.preventDefault();
        const createTodo: ITodo = {
            id: shortid.generate(),
            title: value,
            completed: false
        };
        setTodo([createTodo, ...todo]);
        setValue('');
    };

    useEffect(() => {
    }, [todo]);
    return (
        <div>
            <div>
                <TextField onChange={changeHandler} value={value} variant="filled" label="Your Task"/>
                <Button variant="text" onClick={clickButton}>Add</Button>
            </div>
            <List todos={todo} completeTask={completeTask}/>
        </div>
    );
};

export default App;