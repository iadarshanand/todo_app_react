import React, { useState } from "react";
import "./Form.css";
import { v4 as uuid } from "uuid";

const Form = (props) => {
  const [input, setInput] = useState("");
  const [isValid, setValid] = useState(true);
  const readInput = (e) => {
    setInput(e.target.value);
    if (input.trim().length > 0) setValid(true);
  };

  const submitHandler = (e) => {
    e.preventDefault();
    if (input.trim() === "") {
      setValid(false);
      return;
    }
    props.addTodo({
      id: uuid(),
      todo: input.trim(),
      checked: false,
    });
    setInput("");
  };

  return (
    <form onSubmit={submitHandler}>
      <input
        onChange={readInput}
        className="form"
        style={{ border: `${!isValid ? "1.8px solid red" : ""}` }}
        type="text"
        placeholder="Add Todo"
        value={input}
      ></input>
    </form>
  );
};

export default Form;
