import React, { useState } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState([]);

  const addTodos = (todo) => {
    setTodos([
      ...todos,
      {
        id: uuidv4(),
        task: todo,
        completed: false,
        isEditing: false,
      },
    ]);
  };

  const completedTodo = (id) => {
    setTodos(
      todos.map((todo) =>
        todo.id === id ? { ...todo, completed: !todo.completed } : todo
      )
    );
  };

  const removeTodo = (id) => {
    setTodos(todos.filter((todo) => todo.id !== id));
  };

  return (
    <div className="todowrapper">
      <h1>What is your plan today?</h1>
      {todos.length === 0 && (
        <img
          className="imageclass"
          src="\content.svg"
          alt="My Happy SVG"
          width="584px"
          height="454.64px"
        />
      )}
      <div className="todo-container">
        {todos.map((todo) => (
          <Todo
            task={todo}
            key={todo.id}
            completedTodo={completedTodo}
            removeTodo={removeTodo}
          />
        ))}
      </div>
      <TodoForm addTodos={addTodos} />
    </div>
  );
};
