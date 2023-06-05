import { useState } from "react";
import Card from "../Card/Card";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";
import ExpensesList from "./ExpensesList";

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
    <li>
      <Card className="expenses">
        <ExpenseFilter selected={filteredYear} onSelectYear={selectYear} />
        <ExpensesList items={filteredItems} />
      </Card>
    </li>
  );
}

export default Expenses;
