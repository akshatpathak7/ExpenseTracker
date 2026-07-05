// Renders the expenses in a table. Each row has a delete button.
export default function ExpenseList({ expenses, onDelete }) {
  if (expenses.length === 0) {
    return <p className="empty">No expenses yet.</p>
  }

  return (
    <table className="expense-list">
      <thead>
        <tr>
          <th>Description</th>
          <th>Category</th>
          <th>Date</th>
          <th className="right">Amount</th>
          <th></th>
        </tr>
      </thead>
      <tbody>
        {expenses.map((expense) => (
          <tr key={expense.id}>
            <td>{expense.description}</td>
            <td>{expense.category}</td>
            <td>{expense.date}</td>
            <td className="right">₹{Number(expense.amount).toFixed(2)}</td>
            <td>
              <button className="delete" onClick={() => onDelete(expense.id)}>
                Delete
              </button>
            </td>
          </tr>
        ))}
      </tbody>
    </table>
  )
}
