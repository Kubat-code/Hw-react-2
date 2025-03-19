import React, { useState } from "react";
import { FormInput } from "../UI/FormInput";
import Button from "../UI/Button";
import "./ExpenseForm.css";
export const ExpenseForm = ({ onShow, onNewExpense }) => {
  const [title, setTitle] = useState("");
  const [amount, setAmount] = useState("");
  const [date, setDate] = useState("");

  const handleTitleChange = (event) => {
    setTitle(event.target.value);
  };
  const handleAmountChange = (event) => {
    setAmount(event.target.value);
  };
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };
  const handleSubmit = (event) => {
    if (!title || !amount || !date) {
      alert("Write!");
    } else {
      event.preventDefault();
      const newExpense = {
        id: Date.now().toString(),
        title: title,
        amount: +amount,
        date: new Date(date),
      };
      setTitle("");
      setAmount("");
      setDate("");
      onNewExpense(newExpense);
    }
  };
  return (
    <form onSubmit={handleSubmit}>
      <div className="row">
        <FormInput
          lableText="Заголовок"
          id="title"
          inputType="text"
          value={title}
          onChange={handleTitleChange}
        />
        <FormInput
          lableText="Цена"
          id="amount"
          inputType="number"
          value={amount}
          onChange={handleAmountChange}
        />
        <FormInput
          lableText="Датировать"
          id="date"
          inputType="date"
          value={date}
          onChange={handleDateChange}
        />
      </div>
      <div className="buttonContainer">
        <Button type="button" onClick={onShow} style={{ width: "97px" }}>
          Отмена
        </Button>
        <Button type="submit" style={{ width: "186px" }}>
          Добавить расходы
        </Button>
      </div>
    </form>
  );
};
