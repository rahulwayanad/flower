import { useState } from 'react'
import { useSearchParams } from 'react-router-dom'
import '@/assets/css/category.css'
import Breadcrumb from '@/components/shared/Breadcrumb'
import ProductCard from '@/components/shared/ProductCard'

const P = [
  'https://images.unsplash.com/photo-1490750967868-88df5691cc13?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1487530811015-780f5eb81ba3?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1548094773-3b5a9b20b2e4?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1463595373836-6e0b0a8ee322?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1476627813621-b4e5d2a77977?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1511285560929-80b456503681?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1559181567-c3190bfcd0c4?w=400&h=400&fit=crop',
  'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&h=400&fit=crop',
]
function p2(i) { return P[i % P.length] }

const DEMO_PRODUCTS = [
  { id:100, name:'Pure Love White Roses Fresh Flower Hand Bouquet',                               price:'AED 249.00',              imgBg:'linear-gradient(160deg,#f8f4ef,#ede0d0)', images:['https://images.unsplash.com/photo-1508610048659-a06b669e3321?w=400&h=400&fit=crop', p2(0)] },
  { id:101, name:'Pearl Flower Bouquet',                                                           price:'AED 167.00',              imgBg:'linear-gradient(160deg,#f5f5f0,#e8e8e0)', images:['https://images.unsplash.com/photo-1490750967868-88df5691cc13?w=400&h=400&fit=crop', p2(1)] },
  { id:102, name:'Box of White Flowers',                                                           price:'AED 225.00',              imgBg:'linear-gradient(160deg,#f0f5f0,#dce8dc)', images:['https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=400&h=400&fit=crop', p2(2)] },
  { id:103, name:'Wonderfully White Hand-Tied Lily Bouquet',                                      price:'AED 299.00',              imgBg:'linear-gradient(160deg,#f2f8f0,#d8ecd4)', images:['https://images.unsplash.com/photo-1487530811015-780f5eb81ba3?w=400&h=400&fit=crop', p2(3)] },
  { id:104, name:'18 White Roses Premium Hat Box Bouquet',                                        price:'AED 230.00',              imgBg:'linear-gradient(160deg,#faf5f0,#ede0d0)', images:['https://images.unsplash.com/photo-1559181567-c3190bfcd0c4?w=400&h=400&fit=crop', p2(4)] },
  { id:105, name:'All White',                                                                      price:'AED 285.00',              imgBg:'linear-gradient(160deg,#f5f8f5,#e0eae0)', images:['https://images.unsplash.com/photo-1463595373836-6e0b0a8ee322?w=400&h=400&fit=crop', p2(5)] },
  { id:106, name:'Exquisite Love Orchids Arrangement – 21 Mixed Color Orchids',                   price:'AED 305.00',              imgBg:'linear-gradient(160deg,#f5f0f8,#e0d0ec)', images:['https://images.unsplash.com/photo-1518895949257-7621c3c786d7?w=400&h=400&fit=crop', p2(6)] },
  { id:107, name:'Gracious Purity White Roses Fresh Flower Hand Bouquet',                         price:'AED 999.00',              imgBg:'linear-gradient(160deg,#f8f8f0,#eceae0)', images:['https://images.unsplash.com/photo-1476627813621-b4e5d2a77977?w=400&h=400&fit=crop', p2(7)] },
  { id:108, name:'Sincerity Pure Love White Roses Fresh Flower Arrangements',                     price:'AED 749.00 – AED 899.00', imgBg:'linear-gradient(160deg,#f0f5f8,#d8e8f0)', images:['https://images.unsplash.com/photo-1548094773-3b5a9b20b2e4?w=400&h=400&fit=crop', p2(8)] },
  { id:109, name:'Harmonious Pure White Tulips and Orchids Flowers Arrangement',                  price:'AED 499.00',              imgBg:'linear-gradient(160deg,#f5f8f0,#deecd8)', images:['https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=400&h=400&fit=crop', p2(9)] },
  { id:110, name:'Grace White Lilly Flower Arrangement',                                          price:'AED 325.00',              imgBg:'linear-gradient(160deg,#f5f8f5,#dceadc)', images:['https://images.unsplash.com/photo-1491841550275-ad7854e35ca6?w=400&h=400&fit=crop', p2(10)] },
  { id:111, name:'Pure Love White Roses Fresh Flower Hand Bouquet',                               price:'AED 549.00',              imgBg:'linear-gradient(160deg,#f8f5f5,#eee0e0)', images:['https://images.unsplash.com/photo-1541538655219-e0d4f2ebf0bf?w=400&h=400&fit=crop', p2(11)] },
  { id:112, name:'Dozen of Pure Love White Roses Fresh Flower Arrangement on a Glass Vase',      price:'AED 249.00',              imgBg:'linear-gradient(160deg,#f5f8f8,#dce8e8)', images:['https://images.unsplash.com/photo-1516912481808-3406841bd33c?w=400&h=400&fit=crop', p2(0)] },
  { id:113, name:'White Perfection in Glass Vase',                                                price:'AED 250.00',              imgBg:'linear-gradient(160deg,#f8f8f5,#ebebde)', images:['https://images.unsplash.com/photo-1559181567-c3190bfcd0c4?w=400&h=400&fit=crop&crop=bottom', p2(1)] },
  { id:114, name:'Sunshine Harmony Floral Basket – Blue Hydrangea & Yellow Rose Arrangement',    price:'AED 485.00',              imgBg:'linear-gradient(160deg,#f0f8f5,#d4ece4)', images:['https://images.unsplash.com/photo-1597848212624-a19eb35e2651?w=400&h=400&fit=crop', p2(2)] },
  { id:115, name:'50 White Rose Box',                                                             price:'AED 495.00',              imgBg:'linear-gradient(160deg,#f5f0f8,#e2d4ec)', images:['https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&h=400&fit=crop', p2(3)] },
]

function toTitle(cat) {
  if (!cat) return 'All Flowers'
  return cat.split('-').map(w => w.charAt(0).toUpperCase() + w.slice(1)).join(' ')
}

export default function Category() {
  const [params] = useSearchParams()
  const cat = params.get('cat') || ''
  const title = toTitle(cat)
  const [sort, setSort] = useState('best')
  const [seoOpen, setSeoOpen] = useState(false)

  const sorted = [...DEMO_PRODUCTS].sort((a, b) => {
    const priceA = parseFloat(a.price.replace(/[^0-9.]/g,''))
    const priceB = parseFloat(b.price.replace(/[^0-9.]/g,''))
    if (sort === 'low') return priceA - priceB
    if (sort === 'high') return priceB - priceA
    return 0
  })

  return (
    <main className="cat-page">
      <div className="container">
        <Breadcrumb items={[
          { label: 'Home', href: '/' },
          { label: title },
        ]} />

        <h1 className="cat-title">{title}</h1>

        <div className="cat-toolbar">
          <span className="cat-count">{sorted.length} products</span>
          <div className="cat-sort">
            <label htmlFor="sortSelect">Sort by</label>
            <select id="sortSelect" value={sort} onChange={e => setSort(e.target.value)}>
              <option value="best">Best selling</option>
              <option value="new">Newest</option>
              <option value="low">Price: Low to High</option>
              <option value="high">Price: High to Low</option>
            </select>
          </div>
        </div>

        <div className="pgrid pgrid--cat">
          {sorted.map(p => <ProductCard key={p.id} {...p} />)}
        </div>

        <div className={`cat-seo${seoOpen ? ' cat-seo--open' : ''}`}>
          <h2>Order {title} in Dubai – Same Day Delivery in UAE</h2>
          <p>Flowers are part of our daily life and are on all occasions of happiness and sorrow. At Flowerify, you can get all types of {title.toLowerCase()} to show your love and care for the special people in your life.</p>
          <p>We provide same-day delivery across Dubai and UAE. So if you have less time left, don't worry — just place your order here and we will deliver it to your doorstep the same day.</p>
          {seoOpen && (
            <div className="cat-seo__extra">
              <h3>Fresh & Handcrafted:</h3>
              <p>All our {title.toLowerCase()} are freshly sourced and handcrafted by expert florists to ensure the highest quality on delivery.</p>
              <h3>Same Day Delivery:</h3>
              <p>Order before noon and receive your {title.toLowerCase()} the same day anywhere in Dubai or the wider UAE.</p>
            </div>
          )}
          <button className="btn-read-toggle" onClick={() => setSeoOpen(v => !v)}>
            {seoOpen ? 'Read Less' : 'Read More'}
          </button>
        </div>
      </div>
    </main>
  )
}
