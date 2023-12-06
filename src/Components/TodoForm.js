import React from "react";

export const TodoForm = () => {
  return (
    <form className="todoform">
      <input
        type="text"
        className="todo-input"
        placeholder="Input your task here"
      />
    </form>
  );
};
