import { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [filteredYear, setFilteredYear] = useState("All");
  const selectYear = (selectedYear) => {
    setFilteredYear(selectedYear);
  };
  const filteredItems = props.expenses.filter(
    (e) =>
      filteredYear === "All" || e.date.getFullYear() === Number(filteredYear)
  );
  return (
    <Card className="expenses">
      <ExpenseFilter selected={filteredYear} onSelectYear={selectYear} />
      {!filteredItems.length ? (
        <p>No expenses found.</p>
      ) : (
        filteredItems.map((expense) => (
          <ExpenseItem
            key={expense.id}
            title={expense.title}
            amount={expense.amount}
            date={expense.date}
          />
        ))
      )}
    </Card>
  );
}

export default Expenses;
