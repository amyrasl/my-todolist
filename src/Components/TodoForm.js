import React, { useState } from "react";
import { IoIosAddCircleOutline } from "react-icons/io";
import { IconContext } from "react-icons";

export const TodoForm = ({ addTodos }) => {
  const [value, setValue] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    if (value.length === 0 || /^\s*$/.test(value)) return;
    addTodos(value);
    setValue("");
  };
  return (
    <form
      id="text"
      className="todoform"
      onSubmit={handleSubmit}
      autoComplete="off"
    >
      <input
        name="myText"
        type="text"
        className="todo-input"
        placeholder="Input your task here"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      <button type="submit" className="button-with-icon">
        <IconContext.Provider
          value={{
            color: "#686866",
            size: "2rem",
          }}
        >
          <IoIosAddCircleOutline />
        </IconContext.Provider>
      </button>
    </form>
  );
};
