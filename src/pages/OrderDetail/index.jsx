import { Link, useParams } from 'react-router-dom'
import '@/assets/css/orders.css'

const STEPS = ['Order Placed', 'Processing', 'Out for Delivery', 'Delivered']
const CURRENT_STEP = 1 // Processing (0-indexed)

const ITEMS = [
  { name:'100 Romantic Red Roses Flowers Arrangement', unitPrice:'AED 1,499.00', qty:2, total:'AED 2,998.00', img:'https://images.unsplash.com/photo-1490750967868-88df5691cc13?w=80&h=80&fit=crop' },
  { name:'100 Red Roses Hand Bouquet', unitPrice:'AED 1,499.00', qty:2, total:'AED 2,998.00', img:'https://images.unsplash.com/photo-1548263594-a71ea65a8598?w=80&h=80&fit=crop' },
]

export default function OrderDetail() {
  const { id } = useParams()
  const orderNum = id || 'FLW-2026-00342'

  return (
    <main className="orders-page">
      <div className="container">
        <Link to="/orders" className="od-back-btn" style={{ display:'inline-block', marginBottom:'18px' }}>← Back to Orders</Link>

        {/* Header card */}
        <div className="od-header-card">
          <div>
            <p className="od-order-num">Order {orderNum}</p>
            <p className="od-order-date">Placed on 25 Mar 2026</p>
          </div>
          <div className="od-header-right">
            <span className="order-card__status" style={{ background:'#fff3e0', color:'#e65100', border:'1px solid #ffcc80' }}>Processing</span>
            <button className="od-reorder-btn">Reorder</button>
          </div>
        </div>

        {/* Progress tracker */}
        <div className="od-progress">
          {STEPS.map((step, i) => {
            const isDone   = i < CURRENT_STEP
            const isActive = i === CURRENT_STEP
            return (
              <>
                <div
                  key={step}
                  className={`od-step${isDone ? ' od-step--done' : ''}${isActive ? ' od-step--active' : ''}`}
                >
                  <div className="od-step__dot" />
                  <span>{step}</span>
                </div>
                {i < STEPS.length - 1 && (
                  <div key={`line-${i}`} className={`od-step__line${isDone ? ' od-step--done' : ''}`} />
                )}
              </>
            )
          })}
        </div>

        {/* Body grid */}
        <div className="od-body">
          {/* Left / main */}
          <div className="od-main">
            <div className="od-section">
              <h3 className="od-section__title">Order Items</h3>
              <ul className="od-items">
                {ITEMS.map(item => (
                  <li className="od-item" key={item.name}>
                    <div className="od-item__img">
                      <img src={item.img} alt={item.name} onError={e => { e.target.style.display='none' }} />
                    </div>
                    <div className="od-item__info">
                      <p className="od-item__name">{item.name}</p>
                      <p className="od-item__unit">{item.unitPrice} each</p>
                    </div>
                    <span className="od-item__qty">× {item.qty}</span>
                    <span className="od-item__total">{item.total}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="od-section">
              <h3 className="od-section__title">Delivery Information</h3>
              <div className="od-info-grid">
                <div className="od-info-item">
                  <p className="od-info-label">Shipping Address</p>
                  <p className="od-info-val">Business Bay, Dubai, UAE</p>
                </div>
                <div className="od-info-item">
                  <p className="od-info-label">Shipping Method</p>
                  <p className="od-info-val">Same-Day Delivery (2pm – 6pm)</p>
                </div>
                <div className="od-info-item">
                  <p className="od-info-label">Payment Method</p>
                  <p className="od-info-val">Credit Card ****4242</p>
                </div>
                <div className="od-info-item">
                  <p className="od-info-label">Estimated Delivery</p>
                  <p className="od-info-val">Today, 25 Mar 2026</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right / sidebar */}
          <div className="od-sidebar">
            <div className="od-section od-summary">
              <h3 className="od-section__title">Order Summary</h3>
              {ITEMS.map(item => (
                <div className="od-summary-row od-summary-row--item" key={item.name}>
                  <span className="od-summary-item-name">{item.name}</span>
                  <span>{item.total}</span>
                </div>
              ))}
              <div className="od-summary-divider" />
              <div className="od-summary-row od-summary-row--subtotal">
                <span>Subtotal</span><span>AED 5,996.00</span>
              </div>
              <div className="od-summary-row">
                <span>Shipping</span><span className="od-free">FREE</span>
              </div>
              <div className="od-summary-row">
                <span>VAT (5%)</span><span>AED 299.80</span>
              </div>
              <div className="od-summary-divider" />
              <div className="od-summary-row od-summary-row--total">
                <span>Total</span><strong>AED 6,295.80</strong>
              </div>
            </div>

            <Link to="/" className="od-shop-btn">Continue Shopping</Link>
            <Link to="/orders" className="od-back-btn">Back to Orders</Link>
          </div>
        </div>
      </div>
    </main>
  )
}
