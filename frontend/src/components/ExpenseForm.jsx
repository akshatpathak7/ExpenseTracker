import { useState } from 'react'
import { CATEGORIES } from '../categories'

// Controlled form: each input's value is stored in React state.
export default function ExpenseForm({ onAdd }) {
  const today = new Date().toISOString().slice(0, 10)

  const [description, setDescription] = useState('')
  const [amount, setAmount] = useState('')
  const [category, setCategory] = useState(CATEGORIES[0])
  const [date, setDate] = useState(today)

  function handleSubmit(event) {
    event.preventDefault() // stop the browser from reloading the page

    if (!description || !amount) {
      return
    }

    // Reject future dates (e.g. if one is typed in manually).
    if (date > today) {
      return
    }

    onAdd({
      description,
      amount: parseFloat(amount),
      category,
      date,
    })

    // Reset the form fields after adding.
    setDescription('')
    setAmount('')
  }

  return (
    <form className="expense-form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="Description"
        value={description}
        onChange={(e) => setDescription(e.target.value)}
      />
      <input
        type="number"
        step="0.01"
        min="0"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
      />
      <select value={category} onChange={(e) => setCategory(e.target.value)}>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
      <input
        type="date"
        max={today}
        value={date}
        onChange={(e) => setDate(e.target.value)}
      />
      <button type="submit">Add</button>
    </form>
  )
}
