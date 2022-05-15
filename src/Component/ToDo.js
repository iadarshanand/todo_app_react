import React from "react";
import "./ToDo.css";
import { FaTrash } from "react-icons/fa";

const ToDo = (props) => {
  const deleteEvent = (id) => {
    props.deleteTodo(id);
  };

  const checkHandler = (id) => {
    props.updateTodo(id);
  };

  return (
    <div className="todo">
      <li className={props.checked ? "trueCheck" : "falseCheck"}>
        <span>
          <input
            onChange={() => checkHandler(props.id)}
            className="checkbox"
            type="checkbox"
            defaultChecked={props.checked}
          ></input>
        </span>
        {props.todo}{" "}
      </li>

      <span onClick={() => deleteEvent(props.id)}>
        <i>
          <FaTrash />
        </i>
      </span>
    </div>
  );
};

export default ToDo;
