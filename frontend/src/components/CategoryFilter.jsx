import { CATEGORIES } from '../categories'

// Dropdown that changes which category is shown. '' means all categories.
export default function CategoryFilter({ category, onChange }) {
  return (
    <label className="filter">
      Filter:
      <select value={category} onChange={(e) => onChange(e.target.value)}>
        <option value="">All</option>
        {CATEGORIES.map((c) => (
          <option key={c} value={c}>
            {c}
          </option>
        ))}
      </select>
    </label>
  )
}
