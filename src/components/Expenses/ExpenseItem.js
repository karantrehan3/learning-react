import React, { useState } from "react";
import Card from "../Card/Card";
import ExpenseDate from "./ExpenseDate";
import "./ExpenseItem.css";

/**
 * Expense Item Component
 * @param {object} props
 * @returns {html}
 */
function ExpenseItem(props) {
  // function clickHandler() {}
  const [title, setTitle] = useState(props.title);
  console.log("ExpenseItem evaluated by React");

  const clickHandler = () => {
    setTitle("Updated!");
  };

  return (
    <Card className="expense-item">
      <ExpenseDate date={props.date} />
      <div className="expense-item__description">
        <h2>{title}</h2>
        <div className="expense-item__price">{props.price}</div>
      </div>
      <button onClick={clickHandler}>Change Title</button>
    </Card>
  );
}

export default ExpenseItem;