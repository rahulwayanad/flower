import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext'
import '@/assets/css/addons-modal.css'

const ADDONS = [
  {
    id: 'addon-1',
    name: 'Heart Love Foil-Heart-18inch',
    price: 39,
    imgBg: '#fff0f5',
    img: 'https://images.unsplash.com/photo-1513151233558-d860c5398176?w=300&h=300&fit=crop',
  },
  {
    id: 'addon-2',
    name: 'Single Sleeve Wrapped Pink Rose',
    price: 69,
    imgBg: '#fff5f8',
    img: 'https://images.unsplash.com/photo-1548263594-a71ea65a8598?w=300&h=300&fit=crop',
  },
  {
    id: 'addon-3',
    name: 'Happy Birthday Satin Heart Shape',
    price: 39,
    imgBg: '#fdf0ff',
    img: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=300&h=300&fit=crop',
  },
  {
    id: 'addon-4',
    name: 'Love You Pastel Ombré & Hearts – Helium Filled',
    price: 39,
    imgBg: '#e8f4ff',
    img: 'https://images.unsplash.com/photo-1467810563316-b5476525c0f9?w=300&h=300&fit=crop',
  },
  {
    id: 'addon-5',
    name: 'Large Love You Teddy Bear Helium Foil Balloon – 35 Inch Romantic Balloon',
    price: 99,
    imgBg: '#fff8e8',
    img: 'https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=300&h=300&fit=crop',
  },
  {
    id: 'addon-6',
    name: 'Luxury Heart-Shaped Gourmet Chocolates Box – Premium Gift Edition',
    price: 129,
    imgBg: '#fdf5ec',
    img: 'https://images.unsplash.com/photo-1511285560929-80b456503681?w=300&h=300&fit=crop',
  },
  {
    id: 'addon-7',
    name: 'New Mom Greeting Card',
    price: 49,
    imgBg: '#fff0f8',
    img: 'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=300&h=300&fit=crop',
  },
  {
    id: 'addon-8',
    name: 'New Born Baby Boy Greeting Card – His Tiny Feet Will Make Your Heart Sing',
    price: 49,
    imgBg: '#e8f4ff',
    img: 'https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=300&h=300&fit=crop',
  },
]

function fmt(n) {
  return 'AED ' + n.toLocaleString('en-AE', { minimumFractionDigits: 2 })
}

export default function AddOnsModal({ open, onClose }) {
  const navigate = useNavigate()
  const { addToCartSilent } = useCart()
  // selections: { [addonId]: qty }  — 0 means unchecked
  const [selections, setSelections] = useState({})

  // Reset selections each time modal opens
  useEffect(() => {
    if (open) setSelections({})
  }, [open])

  // Body scroll lock
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Escape to close
  useEffect(() => {
    if (!open) return
    function onKey(e) { if (e.key === 'Escape') onClose() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, onClose])

  function toggleAddon(id) {
    setSelections(prev => ({ ...prev, [id]: (prev[id] || 0) > 0 ? 0 : 1 }))
  }

  function changeQty(id, delta) {
    setSelections(prev => ({
      ...prev,
      [id]: Math.max(1, (prev[id] || 1) + delta),
    }))
  }

  const selectedCount = Object.values(selections).filter(q => q > 0).length

  function handleContinue() {
    Object.entries(selections).forEach(([id, qty]) => {
      if (qty > 0) {
        const addon = ADDONS.find(a => a.id === id)
        for (let i = 0; i < qty; i++) {
          addToCartSilent({ id: addon.id, name: addon.name, price: addon.price, images: [addon.img], imgBg: addon.imgBg })
        }
      }
    })
    onClose()
    navigate('/cart')
  }

  function handleSkip() {
    onClose()
    navigate('/cart')
  }

  return createPortal(
    <>
      <div
        className={`addon-overlay${open ? ' addon-overlay--visible' : ''}`}
        onClick={onClose}
        aria-hidden="true"
      />
      <div
        className={`addon-panel${open ? ' addon-panel--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Add-ons"
      >
        {/* Header */}
        <div className="addon-head">
          <span className="addon-head__title">Add on something to make it extra special!</span>
          <button className="addon-close" onClick={onClose} aria-label="Close">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
            </svg>
          </button>
        </div>

        {/* Grid */}
        <div className="addon-grid">
          {ADDONS.map(addon => {
            const qty = selections[addon.id] || 0
            const checked = qty > 0
            return (
              <div className="addon-card" key={addon.id}>
                <div className="addon-card__img" style={{ background: addon.imgBg }}>
                  <img src={addon.img} alt={addon.name} onError={e => { e.target.style.display = 'none' }} />
                </div>
                <p className="addon-card__name">{addon.name}</p>
                <p className="addon-card__price">{fmt(addon.price)}</p>
                <div className="addon-card__controls">
                  {!checked ? (
                    <button
                      type="button"
                      className="addon-add-btn"
                      onClick={() => toggleAddon(addon.id)}
                      aria-label={`Add ${addon.name}`}
                    >Add to Cart</button>
                  ) : (
                    <div className="addon-qty">
                      <button
                        type="button"
                        className="addon-qty__minus"
                        onClick={() => qty <= 1 ? toggleAddon(addon.id) : changeQty(addon.id, -1)}
                        aria-label="Decrease"
                      >−</button>
                      <span>{qty}</span>
                      <button
                        type="button"
                        className="addon-qty__plus"
                        onClick={() => changeQty(addon.id, +1)}
                        aria-label="Increase"
                      >+</button>
                    </div>
                  )}
                </div>
              </div>
            )
          })}
        </div>

        {/* Footer */}
        <div className="addon-footer">
          <button className="addon-continue-btn--skip" onClick={handleSkip}>
            Skip
          </button>
          <button className="addon-continue-btn" onClick={handleContinue}>
            {selectedCount > 0
              ? `Continue with ${selectedCount} Add On${selectedCount > 1 ? 's' : ''}`
              : 'Continue to Cart'}
          </button>
        </div>
      </div>
    </>,
    document.body
  )
}
