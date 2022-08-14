import ExpenseItem from "./components/ExpenseItem";

function App() {
  return (
    <div>
      <h2>Expense Tracker 101!</h2>
      <ExpenseItem title="Car Insurance" price="₹10,000" date={new Date()} />
    </div>
  );
}

export default App;
