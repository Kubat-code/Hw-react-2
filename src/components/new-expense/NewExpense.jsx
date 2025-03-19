import React, { useState } from "react";
import "./NewExpense.css";
import Button from "../UI/Button";
import { ExpenseForm } from "./ExpenseForm";
export const NewExpense = ({ onNewExpense }) => {
  const [state, setState] = useState(false);
  const showHandler = () => {
    setState(!state);
  };
  return (
    <div className="wrapper">
      {state ? (
        <ExpenseForm onShow={showHandler} onNewExpense={onNewExpense} />
      ) : (
        <Button
          style={{
            width: "228px",
            height: "51px",
          }}
          onClick={showHandler}
        >
          Добавить новый расход
        </Button>
      )}
    </div>
  );
};
