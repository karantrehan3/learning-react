import Card from "../Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

/**
 * Expense Item Component
 * @param {object} props
 * @returns {html}
 */
function ExpenseItem(props) {
  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__amount">{props.amount}</div>
      </div>
    </Card>
  );
}

export default ExpenseItem;
