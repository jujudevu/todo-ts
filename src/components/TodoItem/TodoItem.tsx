import React, {FC} from 'react';
import {ITodo} from "../../types/types";
import {Checkbox} from "@mui/material";

export interface TodoItemProps {
    todo: ITodo;
    completeTask(todoIdComplete: string): void;
}

const TodoItem: FC<TodoItemProps> = ({todo, completeTask}) => {
    return (
        <div key={todo.id}>
            <Checkbox id={todo.id} onChange={() => completeTask(todo.id)} checked={todo.completed}/>
            {todo.title}
            {todo.task}
            {todo.lifestyle}
        </div>
    )

};

export default TodoItem;
