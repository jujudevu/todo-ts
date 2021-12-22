import React, {FC} from 'react';
import {ITodo} from "../../types/types";
import {Checkbox} from "@mui/material";
import styles from './_TodoItem.module.scss'

export interface TodoItemProps {
    todo: ITodo;

    completeTask(todoIdComplete: string): void;
}

const TodoItem: FC<TodoItemProps> = ({todo, completeTask}) => {
    return (
        <div className={styles.container} key={todo.id}>
            <Checkbox sx={{margin: "0 5px 0 0 ", padding: 0,}} id={todo.id} onChange={() => completeTask(todo.id)}
                      checked={todo.completed}/>
            <div className={styles.item}>
                <div className={styles.item__text}>
                    <div className={styles.item__title}>{todo.title}</div>
                    <div className={styles.item__task}>{todo.task}</div>
                </div>
                <div className={styles.item__lifestyle}>{todo.lifestyle}</div>
            </div>
        </div>
    )

};

export default TodoItem;
