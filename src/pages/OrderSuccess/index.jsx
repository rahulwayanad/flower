import { Link } from 'react-router-dom'
import Logo from '@/components/shared/Logo'
import '@/assets/css/checkout.css'
import '@/assets/css/order-success.css'

const DEMO_ITEMS = [
  { id:1, name:'100 Romantic Red Roses Flowers Arrangement', price:1499, qty:2, img:'https://images.unsplash.com/photo-1490750967868-88df5691cc13?w=80&h=80&fit=crop' },
  { id:2, name:'100 Red Roses Hand Bouquet', price:1499, qty:2, img:'https://images.unsplash.com/photo-1548263594-a71ea65a8598?w=80&h=80&fit=crop' },
]

function fmt(n) {
  return 'AED ' + n.toLocaleString('en-AE', { minimumFractionDigits: 2 })
}

export default function OrderSuccess() {
  const subtotal = DEMO_ITEMS.reduce((s, i) => s + i.price * i.qty, 0)
  const tax = +(subtotal * 0.05).toFixed(2)
  const total = subtotal + tax

  return (
    <div className="checkout-wrap">
      {/* LEFT column */}
      <div className="co-left">
        {/* Logo */}
        <div className="co-logobar co-logobar--center">
          <Link to="/" className="co-logo">
            <Logo size={32} />
            <span className="co-logo__name">Flowerify</span>
          </Link>
        </div>

        {/* Confirmation header */}
        <div className="os-confirm-head">
          <div className="os-check">
            <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="20 6 9 17 4 12"/>
            </svg>
          </div>
          <div>
            <p className="os-order-num">Confirmation #FLW-2026-00342</p>
            <h1 className="os-thank">Thank you!</h1>
          </div>
        </div>

        {/* Map */}
        <div className="os-map-wrap">
          <iframe
            className="os-map"
            src="https://www.openstreetmap.org/export/embed.html?bbox=55.2337%2C25.1772%2C55.2737%2C25.2072&layer=mapnik&marker=25.1920%2C55.2537"
            title="Delivery Location – Business Bay, Dubai"
            loading="lazy"
          />
          <div className="os-map-pin">
            <p className="os-map-pin__label">Shipping address</p>
            <p className="os-map-pin__addr">Dubai, United Arab Emirates</p>
          </div>
        </div>

        {/* Confirmed box */}
        <div className="os-box">
          <p className="os-box__title">Your order is confirmed</p>
          <p className="os-box__body">You'll receive a confirmation email with your order number shortly. Our team is preparing your bouquet with love.</p>
        </div>

        {/* Email opt-in */}
        <label className="os-optin co-checkbox-label">
          <input type="checkbox" className="co-checkbox" />
          <span>Email me with news and offers</span>
        </label>

        {/* Order details */}
        <div className="os-box os-details-box">
          <p className="os-details-title">Order details</p>
          <div className="os-details-grid">
            <div className="os-detail-col">
              <p className="os-detail-head">Contact information</p>
              <p className="os-detail-val">customer@email.com</p>
            </div>
            <div className="os-detail-col">
              <p className="os-detail-head">Payment method</p>
              <p className="os-detail-val">Credit Card ****4242</p>
            </div>
            <div className="os-detail-col">
              <p className="os-detail-head">Shipping address</p>
              <address className="os-detail-val os-address">Business Bay{'\n'}Dubai, UAE</address>
            </div>
            <div className="os-detail-col">
              <p className="os-detail-head">Billing address</p>
              <address className="os-detail-val os-address">Business Bay{'\n'}Dubai, UAE</address>
            </div>
            <div className="os-detail-col os-detail-col--full">
              <p className="os-detail-head">Shipping method</p>
              <p className="os-detail-val">Same-Day Delivery (2pm – 6pm)</p>
            </div>
          </div>
        </div>

        {/* Actions */}
        <div className="os-actions">
          <p className="os-help">Need help? <Link to="/contact" className="os-help__link">Contact us</Link></p>
          <Link to="/" className="os-continue-btn">Continue shopping</Link>
        </div>
      </div>

      {/* RIGHT column — order summary */}
      <div className="co-right">
        <ul className="co-items">
          {DEMO_ITEMS.map(item => (
            <li className="co-item" key={item.id}>
              <div className="co-item__img">
                <img src={item.img} alt={item.name} onError={e => { e.target.style.display='none' }} />
                <span className="co-item__qty">{item.qty}</span>
              </div>
              <span className="co-item__name">{item.name}</span>
              <span className="co-item__price">{fmt(item.price * item.qty)}</span>
            </li>
          ))}
        </ul>

        <div className="co-totals">
          <div className="co-totals__row">
            <span className="co-totals__label">Subtotal</span>
            <span className="co-totals__val">{fmt(subtotal)}</span>
          </div>
          <div className="co-totals__row">
            <span className="co-totals__label">Shipping</span>
            <span className="co-totals__val os-free">FREE</span>
          </div>
        </div>

        <div className="co-total-final">
          <div>
            <span className="co-total-final__label">Total</span>
            <p className="co-total-final__tax">Including VAT (5%) {fmt(tax)}</p>
          </div>
          <div className="co-total-final__right os-total-right">
            <span className="os-total-currency">AED</span>
            <strong style={{ fontSize:'1.35rem', fontWeight:800, color:'#222' }}>{total.toLocaleString('en-AE', { minimumFractionDigits:2 })}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
