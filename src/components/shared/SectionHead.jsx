import { Link } from 'react-router-dom'

export default function SectionHead({ title, viewAllHref, center }) {
  return (
    <div className={`sec-head${center ? ' sec-head--center' : ''}`}>
      <h2>{title}</h2>
      {viewAllHref && (
        <Link to={viewAllHref} className="viewall-link">View All ›</Link>
      )}
    </div>
  )
}
