import React, { useState, useEffect } from "react";
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

  const updateTodo = (task, id) => {
    setTodos(todos.map((todo) => (todo.id === id ? { ...todo, task } : todo)));
  };

  useEffect(() => {
    // This effect runs after the component re-renders
    // console.log("Updated Todos:", todos);
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
      <TodoForm addTodos={addTodos} />
    </div>
  );
};
