import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <div className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </div>
  );
}

export default Expenses;
