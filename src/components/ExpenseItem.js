import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

/**
 * Expense Item Component
 * @param {object} props
 * @returns {html}
 */
function ExpenseItem(props) {
  return (
    <div className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
