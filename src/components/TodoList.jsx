import React, { useState } from "react";
import styled from "styled-components";
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
    <TodoListContainer>
      <form onSubmit={handelSubmit}>
        <TodoListHeader>TODO-LIST</TodoListHeader>
        <AddTaskContainer>
          <InputField
            type="text"
            placeholder="Enter you "
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
          />
          <AddButton type="submit">ADD</AddButton>
        </AddTaskContainer>
      </form>
      <ul>
        {todos.map((i) => (
          <TaskItem key={i.id}>
            <TaskText>{i.title}</TaskText>
            <AddButton onClick={() => handelDelete(i.id)}>Delete</AddButton>
            <AddButton onClick={() => handelUpdate(i.id)}>Update</AddButton>
          </TaskItem>
        ))}
      </ul>
    </TodoListContainer>
  );
};
const TodoListContainer = styled.div`
  max-width: 32rem;
  margin: 0 auto;
  background-color: #b0e0ff;
  padding: 1.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
`;
const TodoListHeader = styled.h1`
  font-size: 2rem;
  color: #003366;
  font-family: sans-serif;
`;
const AddTaskContainer = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 1rem;
  background-color: white;
  padding: 0.5rem;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const InputField = styled.input`
  flex: 1;
  padding: 0.75rem;
  border: 1px solid #e5e7eb;
  border-radius: 0.5rem 0 0 0.5rem;
  outline: none;
  color: #374151;
  font-size: 1rem;
`;
const AddButton = styled.button`
  background-color: #ff3845;
  color: white;
  padding: 0.75rem 1.5rem;
  border-radius: 25px;
  font-weight: bold;
  cursor: pointer;
`;
const TaskItem = styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #1d4ed8;
  color: white;
  padding: 1rem;
  margin: 0.5rem 0;
  border-radius: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
`;
const TaskText = styled.p`
  font-size: 1.125rem;
  font-weight: 500;
`;
