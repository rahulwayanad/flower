import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useCart } from '@/context/CartContext'
import AddOnsModal from './AddOnsModal'
import '@/assets/css/cart-sidebar.css'

function fmt(n) {
  return 'AED ' + n.toLocaleString('en-AE', { minimumFractionDigits: 2 })
}

export default function CartSidebar() {
  const { items, removeItem, updateQty, subtotal, sidebarOpen, closeSidebar } = useCart()
  const [addOnsOpen, setAddOnsOpen] = useState(false)

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = sidebarOpen ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [sidebarOpen])

  // Close on Escape
  useEffect(() => {
    if (!sidebarOpen) return
    function onKey(e) { if (e.key === 'Escape') closeSidebar() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [sidebarOpen, closeSidebar])

  function handleViewCart() {
    closeSidebar()
    setAddOnsOpen(true)
  }

  return (
    <>
      {createPortal(
        <>
          {/* Overlay */}
          <div
            className={`cside-overlay${sidebarOpen ? ' cside-overlay--visible' : ''}`}
            onClick={closeSidebar}
            aria-hidden="true"
          />

          {/* Panel */}
          <div
            className={`cside-panel${sidebarOpen ? ' cside-panel--open' : ''}`}
            role="dialog"
            aria-modal="true"
            aria-label="Shopping Cart"
          >
            {/* Header */}
            <div className="cside-head">
              <span className="cside-head__title">Shopping Cart</span>
              <button className="cside-close" onClick={closeSidebar} aria-label="Close cart">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                  <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
                </svg>
              </button>
            </div>

            {/* Items */}
            <div className="cside-items">
              {items.length === 0 ? (
                <div className="cside-empty">
                  <svg width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                    <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                    <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
                  </svg>
                  <span>Your cart is empty</span>
                </div>
              ) : (
                items.map(item => (
                  <div className="cside-item" key={item.id}>
                    <div className="cside-item__img" style={{ background: item.imgBg || '#f5f0f2' }}>
                      <img src={item.img} alt={item.name} onError={e => { e.target.style.display = 'none' }} />
                    </div>
                    <div className="cside-item__body">
                      <p className="cside-item__name">{item.name}</p>
                      <p className="cside-item__price">{fmt(item.price)}</p>
                      <div className="cside-qty">
                        <button onClick={() => updateQty(item.id, -1)} aria-label="Decrease">−</button>
                        <span>{item.qty}</span>
                        <button onClick={() => updateQty(item.id, +1)} aria-label="Increase">+</button>
                      </div>
                    </div>
                    <button className="cside-item__remove" onClick={() => removeItem(item.id)} aria-label="Remove item">
                      <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <polyline points="3 6 5 6 21 6"/>
                        <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6"/>
                        <path d="M10 11v6M14 11v6"/>
                        <path d="M9 6V4a1 1 0 011-1h4a1 1 0 011 1v2"/>
                      </svg>
                    </button>
                  </div>
                ))
              )}
            </div>

            {/* Footer */}
            {items.length > 0 && (
              <div className="cside-footer">
                <div className="cside-subtotal">
                  <span className="cside-subtotal__label">Subtotal</span>
                  <span className="cside-subtotal__val">{fmt(subtotal)}</span>
                </div>
                <button className="cside-view-btn" onClick={handleViewCart}>
                  View Cart
                </button>
              </div>
            )}
          </div>
        </>,
        document.body
      )}

      {/* Add-ons modal — mounted outside the portal so it has its own portal */}
      <AddOnsModal open={addOnsOpen} onClose={() => setAddOnsOpen(false)} />
    </>
  )
}
