import React from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";

export const TodoWrapper = () => {
  return (
    <div className="todowrapper">
      <h1>What is your plan today?</h1>
      <Todo />
      <TodoForm />
    </div>
  );
};
