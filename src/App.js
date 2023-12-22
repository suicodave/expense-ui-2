// Step 4
import { useEffect, useState } from "react";

function App() {
  // Step 1
  const [expenses, setExpenses] = useState([]);

  // Step 2
  const fetchExpenses = async () => {
    const apiUrl = "http://localhost:1234";

    const endpoint = `${apiUrl}/api/expenses`;

    const response = await fetch(endpoint);

    const expenseData = response.json();

    setExpenses(expenseData);
  };

  // Step 3
  useEffect(() => {
    fetchExpenses();
  }, []);

  return (
    <div>
      <form>
        <textarea cols="30" rows="10"></textarea>
        <input type="number" />
        <input type="date" />
        <button>Save</button>
      </form>

      <h2>My Expenses</h2>

      <table width="100%">
        <thead>
          <tr>
            <th>Id</th>
            <th>Description</th>
            <th>Amount</th>
            <th>Date</th>
          </tr>
        </thead>

        <tbody></tbody>
      </table>
    </div>
  );
}

export default App;
