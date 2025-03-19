import React, { useState } from "react";
import styled from "styled-components";

export const LogoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [todos, setTodos] = useState([]);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!inputValue && !inputValue2) {
      alert("Заполниет данные");
    } else {
      const newTodo = {
        id: Date.now().toString(),
        title: inputValue,
        title2: inputValue2,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
      setInputValue2("");
    }
  };
  const handelDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  return (
    <div>
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Enter you email"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <input
          type="text"
          placeholder="Enter you pasword"
          value={inputValue2}
          onChange={(e) => setInputValue2(e.target.value)}
        />
        <button type="submit">Войти</button>
      </form>
      <ul>
        {todos.map((i) => (
          <li key={i.id}>
            <p>{i.title}</p>
            <p>{i.title2}</p>
            <button onClick={() => handelDelete(i.id)}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};
