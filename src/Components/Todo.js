import React, { useState, useRef, useEffect } from "react";
import { IoCloseCircleOutline } from "react-icons/io5";
import { IoSquareOutline } from "react-icons/io5";
import { IoCheckboxOutline } from "react-icons/io5";
import { IconContext } from "react-icons";

export const Todo = ({ task, completedTodo, removeTodo, updateTodo }) => {
  const [text, setText] = useState(task.task);
  const textareaRef = useRef(null);

  useEffect(() => {
    textareaRef.current.style.height = "0px";
    const scrollHeight = textareaRef.current.scrollHeight;
    textareaRef.current.style.height = scrollHeight + "px";
  }, [text]);

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
            <form id="myForm">
              <textarea
                ref={textareaRef}
                value={text}
                className="textclass"
                onChange={(e) => setText(e.target.value)}
                onBlur={(e) => handleBlur(e)}
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
          size: "1.2rem",
        }}
      >
        <IoCloseCircleOutline onClick={() => removeTodo(task.id)} />
      </IconContext.Provider>
    </div>
  );
};
