import React, { FC, useState } from "react";
import "./TodoApp.css";
import * as Yup from "yup";
// @ts-ignore
import { ITodo } from "types/types";
import List from "../List/List";
import { Formik, Form, Field, ErrorMessage } from "formik";
import TextField from "@mui/material/TextField";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { Button } from "@mui/material";
import AddTodoForm from "../AddTodoForm";

const TodoApp: FC<{}> = () => {
  const [todo, setTodo] = useState<ITodo[]>([]);

  const completeTask = (todoIdComplete: string): void => {
    setTodo(
      todo.map((todo) =>
        todo.id === todoIdComplete
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    );
  };

  return (
    <div className="container">
      <h2>Todo app</h2>
      <AddTodoForm todo={todo} setTodo={setTodo} />
      <List todos={todo} completeTask={completeTask} />
    </div>
  );
};

export default TodoApp;
