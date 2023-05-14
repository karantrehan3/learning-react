import { useState } from "react";
import Card from "../Card/Card";
import ExpenseItem from "./ExpenseItem";
import ExpenseFilter from "./ExpensesFilter";
import "./Expenses.css";

function Expenses(props) {
  const [yearFilter, setYearFilter] = useState("All");
  const selectYear = (selectedYear) => {
    setYearFilter(selectedYear);
  };
  return (
    <div>
      <ExpenseFilter onSelectYear={selectYear} />
      <Card className="expenses">
        {props.expenses
          .filter(
            (e) =>
              yearFilter === "All" ||
              e.date.getFullYear() === Number(yearFilter)
          )
          .map((expense) => (
            <ExpenseItem
              title={expense.title}
              amount={expense.amount}
              date={expense.date}
            />
          ))}
      </Card>
    </div>
  );
}

export default Expenses;
