// All calls to the Spring Boot REST API live here.
const BASE_URL = 'http://localhost:8080/api/expenses'

// Build a "?category=Food" query string, or "" when no category is selected.
function categoryQuery(category) {
  return category ? `?category=${encodeURIComponent(category)}` : ''
}

export async function fetchExpenses(category) {
  const response = await fetch(`${BASE_URL}${categoryQuery(category)}`)
  return response.json()
}

export async function fetchTotal(category) {
  const response = await fetch(`${BASE_URL}/total${categoryQuery(category)}`)
  return response.json()
}

export async function createExpense(expense) {
  const response = await fetch(BASE_URL, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(expense),
  })
  return response.json()
}

export async function deleteExpense(id) {
  await fetch(`${BASE_URL}/${id}`, { method: 'DELETE' })
}
