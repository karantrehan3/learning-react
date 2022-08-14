import Expenses from "./components/Expenses";

function App() {
  const expenses = [
    { title: "Car Insurance", price: "₹10,000", date: new Date(2022, 7, 14) },
    { title: "UPS", price: "₹2,500", date: new Date(2022, 6, 25) },
    { title: "Monitor", price: "₹17,000", date: new Date(2021, 10, 4) },
    { title: "Soundbar", price: "₹6,441", date: new Date(2022, 7, 2) },
  ];
  return (
    <div>
      <h2>Expense Tracker 101!</h2>
      <Expenses expenses={expenses} />
    </div>
  );
}

export default App;
