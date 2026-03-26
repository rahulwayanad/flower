import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import '@/assets/css/checkout.css'

function fmt(n) {
  return 'AED ' + n.toLocaleString('en-AE', { minimumFractionDigits: 2 })
}

export default function Checkout() {
  const navigate = useNavigate()
  const { items, subtotal, totalQty } = useCart()
  const [payment, setPayment] = useState('cc')
  const [city, setCity] = useState('')
  const [cardNum, setCardNum] = useState('')
  const [cardExp, setCardExp] = useState('')
  const [cardCVV, setCardCVV] = useState('')
  const tax = subtotal * 0.05
  const hasCity = city.trim().length > 0

  function formatCardNum(v) {
    return v.replace(/\D/g,'').substring(0,16).replace(/(.{4})/g,'$1 ').trim()
  }
  function formatExp(v) {
    const d = v.replace(/\D/g,'').substring(0,4)
    return d.length >= 3 ? d.substring(0,2) + ' / ' + d.substring(2) : d
  }

  return (
    <div className="checkout-wrap">
      {/* LEFT: Form */}
      <div className="co-left">
        <div className="co-section">
          <p className="co-express-label">Express checkout</p>
          <button className="co-gpay-btn" type="button">G Pay</button>
          <div className="co-or"><span>OR</span></div>
        </div>

        <div className="co-section">
          <div className="co-section-head">
            <h2 className="co-section-title">Contact</h2>
            <a href="#" className="co-signin-link">Sign in</a>
          </div>
          <div className="co-field">
            <input type="email" className="co-input" placeholder="Email" />
          </div>
          <label className="co-checkbox-label">
            <input type="checkbox" className="co-checkbox" />
            <span>Email me with news and offers</span>
          </label>
        </div>

        <div className="co-section">
          <h2 className="co-section-title">Delivery</h2>
          <div className="co-field">
            <div className="co-select-wrap">
              <label className="co-float-label">Country/Region</label>
              <select className="co-select">
                <option value="ae">United Arab Emirates</option>
                <option value="sa">Saudi Arabia</option>
                <option value="kw">Kuwait</option>
                <option value="bh">Bahrain</option>
                <option value="om">Oman</option>
                <option value="qa">Qatar</option>
              </select>
              <svg className="co-select-chev" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="#888" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
            </div>
          </div>
          <div className="co-row">
            <div className="co-field"><input type="text" className="co-input" placeholder="First name" /></div>
            <div className="co-field"><input type="text" className="co-input" placeholder="Last name" /></div>
          </div>
          <div className="co-field"><input type="text" className="co-input" placeholder="Address" /></div>
          <div className="co-field"><input type="text" className="co-input" placeholder="Apartment, suite, etc. (optional)" /></div>
          <div className="co-row">
            <div className="co-field">
              <input type="text" className="co-input" placeholder="City" value={city} onChange={e => setCity(e.target.value)} />
            </div>
            <div className="co-field">
              <div className="co-select-wrap">
                <label className="co-float-label">Emirate</label>
                <select className="co-select">
                  <option value="">Emirate</option>
                  <option value="dubai">Dubai</option>
                  <option value="abu-dhabi">Abu Dhabi</option>
                  <option value="sharjah">Sharjah</option>
                  <option value="ajman">Ajman</option>
                  <option value="rak">Ras Al Khaimah</option>
                </select>
                <svg className="co-select-chev" width="12" height="8" viewBox="0 0 12 8"><path d="M1 1l5 5 5-5" stroke="#888" strokeWidth="1.5" fill="none" strokeLinecap="round"/></svg>
              </div>
            </div>
          </div>
          <div className="co-field co-field--phone">
            <input type="tel" className="co-input" placeholder="Phone" />
          </div>
          <label className="co-checkbox-label">
            <input type="checkbox" className="co-checkbox" />
            <span>Save this information for next time</span>
          </label>
        </div>

        <div className="co-section">
          <h2 className="co-section-title">Shipping method</h2>
          {!hasCity
            ? <div className="co-shipping-placeholder">Enter your shipping address to view available shipping methods.</div>
            : (
              <div className="co-shipping-methods">
                <label className="co-ship-option">
                  <input type="radio" name="shipping" defaultChecked />
                  <span className="co-ship-info"><span className="co-ship-name">Standard Delivery (2–4 hrs)</span></span>
                  <span className="co-ship-price">AED 25.00</span>
                </label>
                <label className="co-ship-option">
                  <input type="radio" name="shipping" />
                  <span className="co-ship-info"><span className="co-ship-name">Express Delivery (1–2 hrs)</span></span>
                  <span className="co-ship-price">AED 50.00</span>
                </label>
              </div>
            )
          }
        </div>

        <div className="co-section">
          <h2 className="co-section-title">Payment</h2>
          <p className="co-secure-note">
            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><rect x="3" y="11" width="18" height="11" rx="2" ry="2"/><path d="M7 11V7a5 5 0 0110 0v4"/></svg>
            All transactions are secure and encrypted.
          </p>
          <div className="co-payment-options">
            {[
              { value:'cc', label:'Credit card' },
              { value:'tabby', label:'Pay later with Tabby' },
              { value:'cod', label:'Cash on Delivery (COD)' },
            ].map(opt => (
              <label key={opt.value} className={`co-pay-option${payment===opt.value?' co-pay-option--active':''}`}>
                <div className="co-pay-option__head">
                  <input type="radio" name="payment" value={opt.value} checked={payment===opt.value} onChange={() => setPayment(opt.value)} className="co-pay-radio" />
                  <span className="co-pay-label">{opt.label}</span>
                  {opt.value==='cc' && (
                    <div className="co-card-logos">
                      <span className="co-card-badge">VISA</span>
                      <span className="co-card-badge co-card-badge--mc">MC</span>
                      <span className="co-card-badge co-card-badge--disc">DISC</span>
                    </div>
                  )}
                  {opt.value==='tabby' && <span className="co-tabby-badge">tabby</span>}
                </div>
                {opt.value==='cc' && payment==='cc' && (
                  <div className="co-cc-fields">
                    <div className="co-field co-field--icon">
                      <input type="text" className="co-input" placeholder="Card number" maxLength={19}
                        value={cardNum} onChange={e => setCardNum(formatCardNum(e.target.value))} />
                    </div>
                    <div className="co-row">
                      <div className="co-field">
                        <input type="text" className="co-input" placeholder="Expiration date (MM / YY)" maxLength={7}
                          value={cardExp} onChange={e => setCardExp(formatExp(e.target.value))} />
                      </div>
                      <div className="co-field">
                        <input type="text" className="co-input" placeholder="Security code" maxLength={4}
                          value={cardCVV} onChange={e => setCardCVV(e.target.value.replace(/\D/g,'').substring(0,4))} />
                      </div>
                    </div>
                    <div className="co-field">
                      <input type="text" className="co-input" placeholder="Name on card" />
                    </div>
                    <label className="co-checkbox-label">
                      <input type="checkbox" className="co-checkbox" defaultChecked />
                      <span>Use shipping address as billing address</span>
                    </label>
                  </div>
                )}
              </label>
            ))}
          </div>
        </div>

        <div className="co-section co-section--submit">
          <button className="co-pay-btn" type="button" onClick={() => navigate('/order-success')}>Pay now</button>
        </div>

        <div className="co-footer-links">
          <a href="#">Refund policy</a>
          <a href="#">Privacy policy</a>
          <a href="#">Terms of service</a>
          <a href="#">Contact</a>
        </div>
      </div>

      {/* RIGHT: Order summary */}
      <div className="co-right">
        <ul className="co-items">
          {items.length === 0 && (
            <li className="co-item co-item--empty">Your cart is empty.</li>
          )}
          {items.map(item => (
            <li className="co-item" key={item.id}>
              <div className="co-item__img">
                <img src={item.img} alt={item.name} onError={e => { e.target.style.opacity='.3' }} />
                <span className="co-item__qty">{item.qty}</span>
              </div>
              <div className="co-item__info">
                <span className="co-item__name">{item.name}</span>
                <span className="co-item__unit">{fmt(item.price)} × {item.qty}</span>
              </div>
              <span className="co-item__price">{fmt(item.price * item.qty)}</span>
            </li>
          ))}
        </ul>
        <div className="co-totals">
          <div className="co-totals__row">
            <span className="co-totals__label">Subtotal · {totalQty} item{totalQty !== 1 ? 's' : ''}</span>
            <span className="co-totals__val">{fmt(subtotal)}</span>
          </div>
          <div className="co-totals__row">
            <span className="co-totals__label">Shipping</span>
            <span className="co-totals__val co-totals__val--muted">{hasCity ? 'AED 25.00' : 'Enter shipping address'}</span>
          </div>
          <div className="co-totals__row">
            <span className="co-totals__label">Tax (5% VAT)</span>
            <span className="co-totals__val">{fmt(tax)}</span>
          </div>
        </div>
        <div className="co-total-final">
          <span>Total</span>
          <div className="co-total-final__right">
            <strong>{fmt(subtotal + tax + (hasCity ? 25 : 0))}</strong>
          </div>
        </div>
      </div>
    </div>
  )
}
