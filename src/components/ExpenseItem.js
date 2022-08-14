import "./ExpenseItem.css";

/**
 * Expense Item Component
 * @param {object} props
 * @returns {html}
 */
function ExpenseItem(props) {
  const month = props.date.toLocaleString("en-us", { month: "long" });
  const year = props.date.getFullYear();
  const date = props.date.toLocaleString("en-us", { day: "2-digit" });
  return (
    <div className="expense-item">
      <div>
        <div>{month}</div>
        <div>{year}</div>
        <div>{date}</div>
      </div>
      <div className="expense-item__description">
        <h2>{props.title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
    </div>
  );
}

export default ExpenseItem;
