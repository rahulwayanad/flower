import { useState } from 'react'
import { Link } from 'react-router-dom'
import '@/assets/css/orders.css'

const ORDERS = [
  { id:'FLW-2026-00342', date:'25 Mar 2026', status:'Processing', total:'AED 5,810.00', items:4, img:'https://images.unsplash.com/photo-1490750967868-88df5691cc13?w=80&h=80&fit=crop' },
  { id:'FLW-2026-00331', date:'18 Mar 2026', status:'Delivered', total:'AED 349.00', items:1, img:'https://images.unsplash.com/photo-1548094773-3b5a9b20b2e4?w=80&h=80&fit=crop' },
  { id:'FLW-2026-00298', date:'10 Mar 2026', status:'Delivered', total:'AED 199.00', items:1, img:'https://images.unsplash.com/photo-1487530811015-780f5eb81ba3?w=80&h=80&fit=crop' },
  { id:'FLW-2026-00265', date:'01 Mar 2026', status:'Delivered', total:'AED 450.00', items:2, img:'https://images.unsplash.com/photo-1541538655219-e0d4f2ebf0bf?w=80&h=80&fit=crop' },
  { id:'FLW-2026-00240', date:'20 Feb 2026', status:'Cancelled', total:'AED 289.00', items:1, img:'https://images.unsplash.com/photo-1559181567-c3190bfcd0c4?w=80&h=80&fit=crop' },
]

const TABS = ['All', 'Processing', 'Delivered', 'Cancelled']

const STATUS_COLORS = {
  Processing: '#f59e0b',
  Delivered: '#16a34a',
  Cancelled: '#dc2626',
}

export default function Orders() {
  const [tab, setTab] = useState('All')
  const filtered = tab === 'All' ? ORDERS : ORDERS.filter(o => o.status === tab)

  return (
    <main className="orders-page">
      <div className="container">
        <h1 className="orders-title">My Orders</h1>

        <div className="orders-tabs">
          {TABS.map(t => (
            <button key={t} className={`orders-tab${tab===t?' orders-tab--active':''}`} onClick={() => setTab(t)}>{t}</button>
          ))}
        </div>

        {filtered.length === 0 ? (
          <div className="orders-empty">
            <p>No orders found.</p>
            <Link to="/" className="btn-hero" style={{ display:'inline-block', marginTop:'1rem' }}>Start Shopping</Link>
          </div>
        ) : (
          <div className="orders-list">
            {filtered.map(order => (
              <div className="order-card" key={order.id}>
                <div className="order-card__img">
                  <img src={order.img} alt={order.id} onError={e => { e.target.style.display='none' }} />
                </div>
                <div className="order-card__info">
                  <p className="order-card__id">{order.id}</p>
                  <p className="order-card__date">{order.date} · {order.items} item{order.items > 1 ? 's' : ''}</p>
                  <p className="order-card__total">{order.total}</p>
                </div>
                <div className="order-card__right">
                  <span className="order-card__status" style={{ color: STATUS_COLORS[order.status] }}>
                    {order.status}
                  </span>
                  <Link to={`/orders/${order.id}`} className="order-card__btn">View Details</Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </main>
  )
}
