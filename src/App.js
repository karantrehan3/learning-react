import { useState } from "react";
import Expenses from "./components/Expenses/Expenses";
import NewExpense from "./components/NewExpense/NewExpense";

function App() {
  const [expenses, setExpenses] = useState([
    { title: "Car Insurance", amount: "₹10,000", date: new Date(2022, 7, 14) },
    { title: "UPS", amount: "₹2,500", date: new Date(2022, 6, 25) },
    { title: "Monitor", amount: "₹17,000", date: new Date(2021, 10, 4) },
    { title: "Soundbar", amount: "₹6,441", date: new Date(2022, 7, 2) },
  ]);
  const addExpenseHandler = (expense) => {
    setExpenses((prevState) => {
      return [...prevState, expense];
    });
  };
  return (
    <div>
      <NewExpense onAddExpense={addExpenseHandler} />
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
