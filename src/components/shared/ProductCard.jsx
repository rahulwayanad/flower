import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useCart } from '@/context/CartContext'

export default function ProductCard({ id = 1, name, price, imgBg, badge, images = [] }) {
  const { addToCart } = useCart()
  const navigate = useNavigate()
  const [slide, setSlide] = useState(0)
  const [added, setAdded] = useState(false)
  const total = images.length

  function goTo(i) {
    setSlide((i + total) % total)
  }

  return (
    <div className="pcard">
      {badge && <span className="pcard__badge">{badge}</span>}

      <div className="pcard__img" style={{ background: imgBg }}>
        {/* Slides strip – translateX shifts to show current slide */}
        <Link to={`/product/${id}`} className="pcard__slides-link" tabIndex={-1}>
          <div
            className="pcard__slides"
            style={{ transform: `translateX(-${slide * 100}%)` }}
          >
            {images.map((src, i) => (
              <img
                key={i}
                className="pcard__slide"
                src={src}
                alt={i === 0 ? name : ''}
                loading={i === 0 ? 'eager' : 'lazy'}
                onError={e => { e.target.style.visibility = 'hidden' }}
              />
            ))}
          </div>
        </Link>

        {/* Prev / Next arrows (only when multiple images) */}
        {total > 1 && (
          <>
            <button
              className="pcard__arr pcard__arr--prev"
              type="button"
              aria-label="Previous image"
              disabled={slide === 0}
              onClick={e => { e.preventDefault(); goTo(slide - 1) }}
            >
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="6 1 1 6 6 11"/>
              </svg>
            </button>
            <button
              className="pcard__arr pcard__arr--next"
              type="button"
              aria-label="Next image"
              disabled={slide === total - 1}
              onClick={e => { e.preventDefault(); goTo(slide + 1) }}
            >
              <svg width="8" height="12" viewBox="0 0 8 12" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                <polyline points="2 1 7 6 2 11"/>
              </svg>
            </button>
          </>
        )}

        {/* Dot indicators */}
        {total > 1 && (
          <div className="pcard__dots">
            {images.map((_, i) => (
              <button
                key={i}
                className={`pcard__dot${i === slide ? ' active' : ''}`}
                type="button"
                aria-label={`Image ${i + 1}`}
                onClick={e => { e.preventDefault(); goTo(i) }}
              />
            ))}
          </div>
        )}

        {/* Wishlist + quick-view icons */}
        <div className="pcard__actions">
          <button className="pcard__action-btn" title="Wishlist" type="button">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
            </svg>
          </button>
          <button className="pcard__action-btn" title="Quick view" type="button" onClick={() => navigate(`/product/${id}`)}>
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/>
            </svg>
          </button>
        </div>

        {/* Add to cart overlay */}
        <button
          type="button"
          className="pcard__cart-overlay"
          onClick={e => {
            e.preventDefault()
            addToCart({ id, name, price, images, imgBg })
            setAdded(true)
            setTimeout(() => setAdded(false), 1500)
          }}
        >
          {added ? '✓ ADDED' : 'ADD TO CART'}
        </button>
      </div>

      <div className="pcard__body">
        <p className="pcard__price">{price}</p>
        <p className="pcard__name">{name}</p>
      </div>
    </div>
  )
}
