import React, { FC, useState } from "react";
import styles from "./_TodoApp.module.scss";
// @ts-ignore
import { ITodo } from "types/types";
import List from "../List/List";
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
    <div className={styles.container}>
      <h2>Todo app</h2>
      <AddTodoForm todo={todo} setTodo={setTodo} />
      <List todos={todo} completeTask={completeTask} />
    </div>
  );
};

export default TodoApp;
