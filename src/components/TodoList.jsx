import React, { useState } from "react";
export const TodoList = () => {
  const [inputValue, setInputValue] = useState("");
  const [todos, setTodos] = useState([]);
  const handelSubmit = (e) => {
    e.preventDefault();
    if (!inputValue) {
      alert("Заполниет данные");
    } else {
      const newTodo = {
        id: Date.now().toString(),
        title: inputValue,
      };
      setTodos([...todos, newTodo]);
      setInputValue("");
    }
  };
  const handelDelete = (id) => {
    setTodos(todos.filter((item) => item.id !== id));
  };
  const handelUpdate = (id) => {
    const finded = todos.find((i) => i.id === id);
    setInputValue(finded.title);
    handelDelete(id);
  };
  return (
    <div className="div-content">
      <form onSubmit={handelSubmit}>
        <input
          type="text"
          placeholder="Enter you "
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
        />
        <button type="submit">ADD</button>
      </form>
      <ul>
        {todos.map((i) => (
          <li key={i.id}>
            <p>{i.title}</p>
            <button onClick={() => handelDelete(i.id)}>Delete</button>
            <button onClick={() => handelUpdate(i.id)}>Update</button>
          </li>
        ))}
      </ul>
    </div>
  );
};
