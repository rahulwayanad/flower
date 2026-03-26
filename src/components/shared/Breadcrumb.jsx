import { Link } from 'react-router-dom'

export default function Breadcrumb({ items }) {
  return (
    <nav className="breadcrumb">
      {items.map((item, i) => (
        <span key={i}>
          {i > 0 && <span className="breadcrumb__sep"> › </span>}
          {item.href
            ? <Link to={item.href}>{item.label}</Link>
            : <span className="breadcrumb__current">{item.label}</span>
          }
        </span>
      ))}
    </nav>
  )
}
