import React from "react";
import ToDo from "./ToDo";

const ToDoList = (props) => {
  const alltodos = props.todos.map((item) => {
    return (
      <ToDo
        key={item.id}
        id={item.id}
        todo={item.todo}
        checked={item.checked}
        deleteTodo={props.deleteTodo}
        updateTodo={props.updateTodo}
      />
    );
  });
  return (
    <div>
      <ul>{alltodos}</ul>
    </div>
  );
};

export default ToDoList;
