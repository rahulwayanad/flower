import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import '@/assets/css/cart.css'
import { useCart } from '@/context/CartContext'

const TIME_SLOTS = ['9am - 1pm','10am - 3pm','2pm - 6pm','5pm - 10pm']

function fmt(n) {
  return 'AED ' + n.toLocaleString('en-AE', { minimumFractionDigits: 2 })
}

export default function Cart() {
  const navigate = useNavigate()
  const { items, updateQty, removeItem } = useCart()
  const [method, setMethod] = useState('delivery')
  const [city, setCity] = useState('')
  const [dateTab, setDateTab] = useState('today')
  const [customDate, setCustomDate] = useState('')
  const [timeSlot, setTimeSlot] = useState('')
  const [greeting, setGreeting] = useState('')
  const [comments, setComments] = useState('')
  const [anon, setAnon] = useState(false)

  const subtotal = items.reduce((s, i) => s + i.price * i.qty, 0)
  const showSlots = method === 'pickup' || (city && (dateTab === 'today' || dateTab === 'tomorrow' || customDate))

  return (
    <main className="cart-page">
      <div className="container">

        {/* Header */}
        <div className="cart-pg-header">
          <h1 className="cart-pg-title">Your Shopping Cart</h1>
          <p className="cart-pg-sub">Review your items and complete your order below.</p>
        </div>

        {items.length === 0 ? (
          <div className="cart-pg-empty">
            <p>Your cart is empty.</p>
            <Link to="/" className="btn-hero" style={{ display:'inline-block', marginTop:'1rem' }}>Continue Shopping</Link>
          </div>
        ) : (
          <>
            {/* Items list */}
            <div className="cart-pg-items">
              {items.map(item => (
                <div className="cart-pg-item" key={item.id}>
                  <div className="cart-pg-item__img" style={{ background: item.imgBg || '#f5f0f2' }}>
                    <img src={item.img} alt={item.name} onError={e => { e.target.style.display='none' }} />
                  </div>

                  <div className="cart-pg-item__info">
                    <p className="cart-pg-item__name">{item.name}</p>
                    <p className="cart-pg-item__unit">Unit Price: AED {item.price}</p>
                    <div style={{ display:'flex', alignItems:'center' }}>
                      <div className="cart-pg-item__qty">
                        <button className="cart-pg-qty-btn" type="button" onClick={() => updateQty(item.id, -1)}>−</button>
                        <span className="cart-pg-qty-val">{item.qty}</span>
                        <button className="cart-pg-qty-btn" type="button" onClick={() => updateQty(item.id, +1)}>+</button>
                      </div>
                      <button className="cart-pg-remove" type="button" onClick={() => removeItem(item.id)}>Remove</button>
                    </div>
                  </div>

                  <p className="cart-pg-item__total">{fmt(item.price * item.qty)}</p>
                </div>
              ))}
            </div>

            {/* Delivery details */}
            <div className="delivery-box" style={{ maxWidth:'820px', margin:'0 auto 28px' }}>
              <h3 className="delivery-box__title">Delivery Details</h3>

              <div className="delivery-field">
                <label className="delivery-label">Delivery Method</label>
                <div className="method-toggle">
                  <button className={`method-btn${method==='delivery'?' method-btn--active':''}`} type="button" onClick={() => setMethod('delivery')}>Delivery</button>
                  <button className={`method-btn${method==='pickup'?' method-btn--active':''}`} type="button" onClick={() => setMethod('pickup')}>Store Pickup</button>
                </div>
              </div>

              {method === 'pickup' && (
                <div className="pickup-location">
                  <div className="pickup-store">
                    <div className="pickup-store__icon">
                      <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                        <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z"/>
                        <polyline points="9 22 9 12 15 12 15 22"/>
                      </svg>
                    </div>
                    <div>
                      <strong>Flowerify Store</strong>
                      <p>Shop No. 17, Al Wafi Centre, Sheikh Zayed Collector Road, Dubai.</p>
                    </div>
                  </div>
                </div>
              )}

              {method === 'delivery' && (
                <div className="delivery-field">
                  <label className="delivery-label" htmlFor="citySelect">Emirate / City <span className="req">*</span></label>
                  <select className="delivery-select" id="citySelect" value={city} onChange={e => setCity(e.target.value)}>
                    <option value="">Please Choose Delivery Location</option>
                    <option value="dubai">Dubai</option>
                    <option value="abu-dhabi">Abu Dhabi</option>
                    <option value="sharjah">Sharjah</option>
                    <option value="ajman">Ajman</option>
                    <option value="ras-al-khaimah">Ras Al Khaimah</option>
                    <option value="fujairah">Fujairah</option>
                    <option value="umm-al-quwain">Umm Al Quwain</option>
                  </select>
                </div>
              )}

              <div className="delivery-field">
                <label className="delivery-label">Select Delivery Date <span className="req">*</span></label>
                <div className="date-tabs">
                  <button className={`date-tab${dateTab==='today'?' date-tab--active':''}`} type="button" onClick={() => setDateTab('today')}>Today</button>
                  <button className={`date-tab${dateTab==='tomorrow'?' date-tab--active':''}`} type="button" onClick={() => setDateTab('tomorrow')}>Tomorrow</button>
                  <button className={`date-tab${dateTab==='calendar'?' date-tab--active':''}`} type="button" onClick={() => setDateTab('calendar')}>
                    <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                      <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                      <line x1="16" y1="2" x2="16" y2="6"/>
                      <line x1="8" y1="2" x2="8" y2="6"/>
                      <line x1="3" y1="10" x2="21" y2="10"/>
                    </svg>
                    Calendar
                  </button>
                </div>
                {dateTab === 'calendar' && (
                  <input type="date" className="delivery-date-input" value={customDate} onChange={e => setCustomDate(e.target.value)} />
                )}
              </div>

              <div className="delivery-field">
                <label className="delivery-label">Pick a delivery time <span className="req">*</span></label>
                {!showSlots
                  ? <p className="time-placeholder">Please select city and date to view available slots.</p>
                  : (
                    <div className="time-slots">
                      {TIME_SLOTS.map(slot => (
                        <label className="time-slot" key={slot}>
                          <input type="radio" name="deliveryTime" value={slot} checked={timeSlot===slot} onChange={() => setTimeSlot(slot)} />
                          <span>{slot}</span>
                        </label>
                      ))}
                    </div>
                  )
                }
              </div>

              <div className="delivery-msg-row">
                <div className="delivery-field">
                  <label className="delivery-label" htmlFor="greetingMsg">Greeting Card Message.</label>
                  <p className="delivery-note">NOTE: The card message is the only way for your recipient to know who sent the gift.</p>
                  <textarea className="delivery-textarea" id="greetingMsg" maxLength={150} placeholder="Your Message (150 maximum)" value={greeting} onChange={e => setGreeting(e.target.value)}/>
                  <span className="char-count">{150 - greeting.length} characters left</span>
                </div>
                <div className="delivery-field">
                  <label className="delivery-label" htmlFor="commentsMsg">Comments.</label>
                  <p className="delivery-note">NOTE: Please don't mention the delivery time here unless confirmed by our team.</p>
                  <textarea className="delivery-textarea" id="commentsMsg" maxLength={150} placeholder="Your Comments (150 maximum)" value={comments} onChange={e => setComments(e.target.value)}/>
                  <span className="char-count">{150 - comments.length} characters left</span>
                </div>
              </div>

              <label className="anon-label">
                <input type="checkbox" checked={anon} onChange={e => setAnon(e.target.checked)} />
                Send This Message Anonymously &nbsp;<a href="#" className="anon-link">What is this?</a>
              </label>
            </div>

            {/* Summary */}
            <div className="cart-pg-summary">
              <p className="cart-pg-subtotal">Subtotal: <strong>{fmt(subtotal)}</strong></p>
              <p className="cart-pg-delivery-note">Delivery Calculated at Checkout</p>
              <button className="checkout-btn" type="button" onClick={() => navigate('/checkout')}>Proceed to Checkout</button>
            </div>
          </>
        )}
      </div>
    </main>
  )
}
