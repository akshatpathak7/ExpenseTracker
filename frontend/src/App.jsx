import { useEffect, useState } from 'react'
import { fetchExpenses, fetchTotal, createExpense, deleteExpense } from './api/expenses'
import ExpenseForm from './components/ExpenseForm'
import CategoryFilter from './components/CategoryFilter'
import ExpenseList from './components/ExpenseList'
import Summary from './components/Summary'

export default function App() {
  // State: React re-renders the UI whenever these values change.
  const [expenses, setExpenses] = useState([])
  const [total, setTotal] = useState(0)
  const [category, setCategory] = useState('') // '' means "All categories"

  // Load the list and total from the API for the current filter.
  async function loadData() {
    const [expenseData, totalData] = await Promise.all([
      fetchExpenses(category),
      fetchTotal(category),
    ])
    setExpenses(expenseData)
    setTotal(totalData)
  }

  // useEffect runs loadData on first render and whenever `category` changes.
  useEffect(() => {
    loadData()
  }, [category])

  async function handleAdd(expense) {
    await createExpense(expense)
    // Reset the filter to "All" so the new expense is always visible,
    // even if it belongs to a different category than the current filter.
    if (category !== '') {
      setCategory('') // changing category re-runs the effect, which reloads
    } else {
      loadData() // already showing all, so reload manually
    }
  }

  async function handleDelete(id) {
    await deleteExpense(id)
    loadData()
  }

  return (
    <div className="app">
      <h1>Expense Tracker</h1>

      <ExpenseForm onAdd={handleAdd} />

      <div className="controls">
        <CategoryFilter category={category} onChange={setCategory} />
        <Summary total={total} category={category} />
      </div>

      <ExpenseList expenses={expenses} onDelete={handleDelete} />
    </div>
  )
}
