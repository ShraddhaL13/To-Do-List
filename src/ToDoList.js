import React from "react";
import ToDo from "./ToDo";
import './App.css';

const ToDoList = ({ toDoList, handleToggle, handleFilter }) => {
  return (
    <div>
      {toDoList.map((todo) => {
        return (
          <ToDo
            todo={todo}
            handleToggle={handleToggle}
            handleFilter={handleFilter}
          />
        );
      })}
      <button style={{ margin: "20px" }} onClick={handleFilter} className="btn btn-primary">
        Clear Completed
      </button>
    </div>
  );
};

export default ToDoList;
