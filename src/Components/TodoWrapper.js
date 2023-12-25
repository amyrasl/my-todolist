import React, { useState, useEffect } from "react";
import { TodoForm } from "./TodoForm";
import { Todo } from "./Todo";
import { v4 as uuidv4 } from "uuid";

export const TodoWrapper = () => {
  const [todos, setTodos] = useState(() => {
    const storageTodos = localStorage.getItem("todos");
    return storageTodos ? JSON.parse(storageTodos) : [];
  });

  const addTodos = (todo) => {
    const newTodos = [...todos, { id: uuidv4(), task: todo, completed: false }];
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const completedTodo = (id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, completed: !todo.completed } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const removeTodo = (id) => {
    const newTodos = todos.filter((todo) => todo.id !== id);
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  const updateTodo = (task, id) => {
    const newTodos = todos.map((todo) =>
      todo.id === id ? { ...todo, task } : todo
    );
    setTodos(newTodos);
    localStorage.setItem("todos", JSON.stringify(newTodos));
  };

  useEffect(() => {
    // This effect runs after the component re-renders
    console.log("Updated Todos:", todos);
    if (localStorage.getItem("todos")) {
      console.log("true");
    } else {
      console.log("false");
    }
    console.log(localStorage);
  }, [todos]); // Dependency array ensures the effect runs only when 'todos' changes

  return (
    <div className="todowrapper">
      <h1 className="title">Tell me your plans!</h1>

      <div className="todo-container">
        {todos.length === 0 && (
          <img className="imageclass" src="\content.svg" alt="my svg" />
        )}
        {todos.map((todo) => (
          <Todo
            task={todo}
            key={todo.id}
            completedTodo={completedTodo}
            removeTodo={removeTodo}
            updateTodo={updateTodo}
          />
        ))}
      </div>
      <button onClick={() => localStorage.clear()}>Click me</button>
      <TodoForm addTodos={addTodos} />
    </div>
  );
};
