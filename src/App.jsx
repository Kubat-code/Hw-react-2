import { useState } from "react";
import { Expenses } from "./components/expenses/Expenses";
import { NewExpense } from "./components/new-expense/NewExpense";
import { Task2 } from "./components/hw-3/task2";
import { LogoList } from "./components/hw-3/LogoList";
function App() {
  const [expenses, setExpenses] = useState([]);

  const getNewExpense = (newObject) => {
    setExpenses((prevExpenses) => {
      const updatedExpenses = [...prevExpenses, newObject];
      return updatedExpenses;
    });
  };
  return (
    // <div className="root-div">
    //   {/* <NewExpense onNewExpense={getNewExpense} />
    //   <Expenses array={expenses} /> */}
    // </div>
    <div>
      {/* <Task2 /> */}
      <LogoList />
    </div>
  );
}

export default App;
