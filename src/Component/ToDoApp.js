import React, { useState, useEffect } from "react";
import ToDoList from "./ToDoList";
import Form from "./Form";
import "./ToDoApp.css";

const ToDoApp = () => {
  const DUMMY_LIST = JSON.parse(window.localStorage.getItem("todos") || "[]");
  const [todos, setTodos] = useState(DUMMY_LIST);

  useEffect(() => {
    window.localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = (todo) => {
    setTodos([...todos, todo]);
  };
  const updateTodo = (id) => {
    const newTodos = todos.map((item) =>
      item.id === id ? { ...item, checked: !item.checked } : item
    );
    setTodos(newTodos);
  };
  const deleteTodo = (id) => {
    const newTodos = todos.filter((item) => item.id !== id);
    setTodos(newTodos);
  };
  return (
    <div>
      <Form addTodo={addTodo} todos={todos} />
      <div className="hero">
        <ToDoList
          todos={todos}
          deleteTodo={deleteTodo}
          updateTodo={updateTodo}
        />
      </div>
    </div>
  );
};

export default ToDoApp;
