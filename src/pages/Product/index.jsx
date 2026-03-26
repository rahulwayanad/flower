import { useState } from 'react'
import { useParams } from 'react-router-dom'
import '@/assets/css/product.css'
import Breadcrumb from '@/components/shared/Breadcrumb'
import ProductCard from '@/components/shared/ProductCard'
import { useCart } from '@/context/CartContext'

const IMAGES = [
  'https://images.unsplash.com/photo-1548263594-a71ea65a8598?w=700&h=700&fit=crop',
  'https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=700&h=700&fit=crop',
]

const RELATED = [
  { id:200, name:'24 Red Roses Bouquet',            price:'AED 199.00', imgBg:'linear-gradient(160deg,#fff0f0,#ffb3b3)', badge:'Best Seller', images:['https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=300&h=300&fit=crop','https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=300&fit=crop'] },
  { id:201, name:'50 Mix Roses – Pink & White',     price:'AED 349.00', imgBg:'linear-gradient(160deg,#fffbec,#ffe8a0)',                       images:['https://images.unsplash.com/photo-1463595373836-6e0b0a8ee322?w=300&h=300&fit=crop','https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=300&h=300&fit=crop'] },
  { id:202, name:'Peony Bliss Bouquet',             price:'AED 450.00', imgBg:'linear-gradient(160deg,#fff0f5,#ffc2d4)',                       images:['https://images.unsplash.com/photo-1519378058457-4c29a0a2efac?w=300&h=300&fit=crop','https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=300&h=300&fit=crop'] },
  { id:203, name:'Blush Pink Garden Arrangement',  price:'AED 249.00', imgBg:'linear-gradient(160deg,#fef0fa,#ffc8ed)',                       images:['https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=300&h=300&fit=crop','https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=300&h=300&fit=crop'] },
]

export default function Product() {
  const { id } = useParams()
  const { addToCart } = useCart()
  const [activeImg, setActiveImg] = useState(0)
  const [qty, setQty] = useState(1)
  const [added, setAdded] = useState(false)

  function handleAddToCart() {
    for (let i = 0; i < qty; i++) {
      addToCart({ id: Number(id) || 101, name: 'Pearl Flower Bouquet', price: 167, images: IMAGES, imgBg: 'linear-gradient(160deg,#f5f5f0,#e8e8e0)' })
    }
    setAdded(true)
    setTimeout(() => setAdded(false), 1500)
  }

  return (
    <>
      <div className="pd-wrap">
        <div className="container">
          <Breadcrumb items={[
            { label: 'Home', href: '/' },
            { label: 'Sympathy Flowers', href: '/category?cat=sympathy' },
            { label: 'Pearl Flower Bouquet' },
          ]} />

          <div className="pd-main">
            {/* LEFT: Gallery */}
            <div className="pd-gallery">
              <div className="pd-gallery__main">
                <img src={IMAGES[activeImg]} alt="Pearl Flower Bouquet" />
                <button className="pd-gallery__zoom" aria-label="Expand image">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
                    <path d="M15 3h6v6M9 21H3v-6M21 3l-7 7M3 21l7-7"/>
                  </svg>
                </button>
              </div>
              <div className="pd-gallery__thumbs">
                {IMAGES.map((src, i) => (
                  <button
                    key={i}
                    className={`pd-thumb${activeImg === i ? ' active' : ''}`}
                    onClick={() => setActiveImg(i)}
                  >
                    <img src={src.replace('w=700&h=700','w=120&h=120')} alt={`View ${i+1}`} />
                  </button>
                ))}
              </div>
            </div>

            {/* RIGHT: Info */}
            <div className="pd-info">
              <h1 className="pd-title">Pearl Flower Bouquet</h1>
              <p className="pd-sku">SKU: <span>HB016</span></p>
              <p className="pd-price">AED 167.00</p>

              <div className="pd-actions">
                <div className="pd-qty">
                  <button className="pd-qty__btn" onClick={() => setQty(q => Math.max(1, q - 1))} aria-label="Decrease">−</button>
                  <input type="number" value={qty} min="1" max="99" onChange={e => setQty(Number(e.target.value))} aria-label="Quantity" />
                  <button className="pd-qty__btn" onClick={() => setQty(q => q + 1)} aria-label="Increase">+</button>
                </div>
                <button className="pd-btn-cart" type="button" onClick={handleAddToCart}>
                  {added ? '✓ ADDED' : 'ADD TO CART'}
                </button>
                <button className="pd-btn-wish" aria-label="Add to wishlist">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                  </svg>
                </button>
              </div>

              <div className="pd-tabby">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="#888" strokeWidth="2"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                As low as <strong>AED 16.29/month</strong> or 4 interest-free payments. <a href="#">Learn more</a> <span className="pd-tabby__badge">tabby</span>
              </div>

              <div className="pd-desc">
                <p>Make a timeless statement with this stunning bouquet of 12 premium white roses, beautifully hand-arranged to express purity, elegance, and heartfelt emotions. Each rose is carefully selected for its freshness, soft velvety petals, and flawless bloom.</p>
                <p>Wrapped in stylish premium paper and finished with a matching ribbon, this bouquet is ideal for romantic gestures, anniversaries, sympathy occasions, apologies, or simply to show someone how much they mean to you.</p>
                <p>Freshly prepared and delivered with care, this bouquet promises beauty, fragrance, and a memorable impression that lasts long after the moment is shared.</p>
              </div>

              <details className="pd-accordion" open>
                <summary className="pd-accordion__head">
                  <span>Delivery Information</span>
                  <svg className="pd-accordion__chev" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 5l5 5 5-5"/></svg>
                </summary>
                <div className="pd-accordion__body">
                  <ul>
                    <li>Our commitment is that the flowers we deliver will be fully fresh and vibrant.</li>
                    <li>We ensure freshness through temperature-controlled delivery vehicles.</li>
                    <li>We ensure that the flowers delivered are as same as the ones you see online.</li>
                    <li>We provide express delivery that reaches the destination on the assured delivery time.</li>
                  </ul>
                </div>
              </details>

              <details className="pd-accordion">
                <summary className="pd-accordion__head">
                  <span>Care Instruction</span>
                  <svg className="pd-accordion__chev" width="14" height="14" viewBox="0 0 14 14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M2 5l5 5 5-5"/></svg>
                </summary>
                <div className="pd-accordion__body">
                  <ul>
                    <li>Avoid placing flowers in excessive heat or directly under sunlight.</li>
                    <li>Do not place flowers under fans or heat-producing devices.</li>
                    <li>Change water regularly — water is the only source of life for cut flowers.</li>
                    <li>Gently sprinkle water on the petals daily to keep them fresh longer.</li>
                  </ul>
                </div>
              </details>

              <div className="pd-share">
                {[
                  { label:'Facebook', color:'#1877f2' },
                  { label:'Twitter', color:'#1da1f2' },
                  { label:'Pinterest', color:'#e60023' },
                  { label:'Email', color:'#888' },
                ].map(s => (
                  <a key={s.label} href="#" className="pd-share__btn" aria-label={`Share on ${s.label}`} style={{ background: s.color }}>
                    {s.label[0]}
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Related products */}
      <section className="psec">
        <div className="container">
          <div className="sec-head"><h2>Related Products</h2></div>
          <div className="pgrid">
            {RELATED.map(p => <ProductCard key={p.id} {...p} />)}
          </div>
        </div>
      </section>
    </>
  )
}
