import React, {FC, useEffect} from 'react';
import {ITodo} from "../types/types";
import TodoItem from "./TodoItem";

interface ListProps {
    todos: ITodo[];
    completeTask(todoIdComplete: string): void;
}

const List: FC<ListProps> = ({todos, completeTask}) => {

    useEffect(() => {

    }, [todos]);

    return (
        <div>
            {todos.map((todo: ITodo) => (
               <TodoItem todo={todo} completeTask={completeTask}/>
            ))}
        </div>
    )
};

export default List;

