import Card from "./Card";
import ExpenseItem from "./ExpenseItem";
import "./Expenses.css";

function Expenses(props) {
  return (
    <Card className="expenses">
      {props.expenses.map((expense) => (
        <ExpenseItem
          title={expense.title}
          price={expense.price}
          date={expense.date}
        />
      ))}
    </Card>
  );
}

export default Expenses;
