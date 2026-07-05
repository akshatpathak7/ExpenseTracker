// Shows the total spending returned by the API for the current filter.
export default function Summary({ total, category }) {
  const label = category ? `Total (${category})` : 'Total'
  return (
    <div className="summary">
      {label}: <strong>₹{Number(total).toFixed(2)}</strong>
    </div>
  )
}
