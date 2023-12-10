import React from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoSquareOutline } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";

export const Todo = ({ task, completedTodo, removeTodo }) => {
  return (
    <div className="todo-row">
      {task.completed ? (
        <IoCheckboxOutline onClick={() => completedTodo(task.id)} />
      ) : (
        <IoSquareOutline onClick={() => completedTodo(task.id)} />
      )}

      <p className="todo-content">{task.task}</p>
      <IoCloseCircleOutline onClick={() => removeTodo(task.id)} />
    </div>
  );
};
