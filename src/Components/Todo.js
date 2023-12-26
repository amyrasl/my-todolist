import React, { useState, useRef, useLayoutEffect } from "react";
import { HiOutlineTrash } from "react-icons/hi";
import { IoSquareOutline } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export const Todo = ({ task, completedTodo, removeTodo, updateTodo }) => {
  const [text, setText] = useState(task.task);
  const textareaRef = useRef(null);

  useLayoutEffect(() => {
    const scrollHeight = textareaRef.current.scrollHeight;
    if (!task.completed) {
      textareaRef.current.style.height = "0px";
      textareaRef.current.style.height = scrollHeight + "px";
    }
  }, [task.completed, text]);

  const handleEdit = (event) => {
    if (event.target.value.length === 0 || /^\s*$/.test(event.target.value)) {
      alert("Task could not be empty!");
      return;
    }
    setText(event.target.value);
  };

  const handleBlur = (event) => {
    event.preventDefault();
    updateTodo(text, task.id);
  };

  return (
    <div className="todo-row">
      {task.completed ? (
        <>
          <IconContext.Provider
            value={{
              color: "#686866",
              size: "1.75rem",
            }}
          >
            <IoCheckboxOutline onClick={() => completedTodo(task.id)} />
          </IconContext.Provider>
          <span className="todo-content">
            <textarea
              name="myText"
              rows={1}
              disabled={true}
              ref={textareaRef}
              value={text}
              className="textclass completed"
            >
              {task.task}
            </textarea>
          </span>
        </>
      ) : (
        <>
          <IconContext.Provider
            value={{
              color: "#686866",
              size: "1.75rem",
            }}
          >
            <IoSquareOutline onClick={() => completedTodo(task.id)} />
          </IconContext.Provider>
          <span className="todo-content">
            <form id="text">
              <textarea
                name="myText"
                rows={1}
                disabled={false}
                ref={textareaRef}
                value={text}
                className="textclass"
                onChange={(e) => handleEdit(e)}
                onBlur={(e) => handleBlur(e)}
                autoComplete="off"
              >
                {task.task}
              </textarea>
            </form>
          </span>
        </>
      )}

      <IconContext.Provider
        value={{
          color: "#FF8A8A",
          size: "1rem",
        }}
      >
        <HiOutlineTrash onClick={() => removeTodo(task.id)} />
      </IconContext.Provider>
    </div>
  );
};
