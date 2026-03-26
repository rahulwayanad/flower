import { useRef, useState } from 'react'
import { Link } from 'react-router-dom'
import SectionHead from '@/components/shared/SectionHead'
import ProductCard from '@/components/shared/ProductCard'
import {
  CIRCLE_ITEMS, EID_PRODUCTS, MOTHERS_PRODUCTS, BEST_SELLERS,
  BIRTHDAY_PRODUCTS, NEWBORN_BOY, NEWBORN_GIRL, BIRTHDAY_BALLOONS,
  CUSTOM_BALLOONS, FAQ_ITEMS,
} from './data'

function CircleSlider() {
  const trackRef = useRef(null)
  const SCROLL = 220

  return (
    <section className="circles-row">
      <div className="circles-slider-wrap">
        <button className="circles-arrow circles-arrow--prev" aria-label="Previous"
          onClick={() => trackRef.current.scrollBy({ left: -SCROLL, behavior: 'smooth' })}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="15 18 9 12 15 6"/>
          </svg>
        </button>
        <div className="circles-track" ref={trackRef}>
          {CIRCLE_ITEMS.map(item => (
            <Link to={item.href} className="circle-item" key={item.label}>
              <div className="circle-img" style={{ '--bg': item.bg }}>
                <img src={item.img} alt={item.label} onError={e => { e.target.style.display='none' }}/>
              </div>
              <span>{item.label}</span>
            </Link>
          ))}
        </div>
        <button className="circles-arrow circles-arrow--next" aria-label="Next"
          onClick={() => trackRef.current.scrollBy({ left: SCROLL, behavior: 'smooth' })}>
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
            <polyline points="9 18 15 12 9 6"/>
          </svg>
        </button>
      </div>
    </section>
  )
}

function Hero() {
  return (
    <section className="hero" id="home">
      <div className="hero__bg">
        <img src="https://images.unsplash.com/photo-1455659817273-f96807779a8a?w=1600&h=500&fit=crop&crop=center" alt="" className="hero__bg-img" onError={e => { e.target.style.display='none' }}/>
        <div className="hero__overlay"></div>
      </div>
      <div className="container hero__inner">
        <div className="hero__content">
          <h1 className="hero__title">Celebrate Every Sentiment<br/>With Flowers and Balloons</h1>
          <div className="hero__meta">
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <rect x="1" y="3" width="15" height="13"/><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"/>
                <circle cx="5.5" cy="18.5" r="2.5"/><circle cx="18.5" cy="18.5" r="2.5"/>
              </svg>
              Fast Delivery
            </span>
            <span>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/>
              </svg>
              VIP Delivery Hours
            </span>
          </div>
          <Link to="/category" className="btn-hero">SHOP NOW</Link>
        </div>
      </div>
    </section>
  )
}

function OccasionsRow() {
  const occasions = ['New Born','Valentine\'s Day','Anniversary','Wedding','Graduation Flowers','Birthday','Congratulations','Get Well Soon']
  return (
    <section className="psec" id="occasions">
      <div className="container">
        <div className="occ-text-row">
          {occasions.map(occ => (
            <Link to={`/category?cat=${occ.toLowerCase().replace(/[^a-z]+/g,'-')}`} key={occ}>{occ}</Link>
          ))}
        </div>
      </div>
    </section>
  )
}

function ProductSection({ id, title, viewAllCat, products, alt, grid4 }) {
  return (
    <section className={`psec${alt ? ' psec--alt' : ''}`} id={id}>
      <div className="container">
        <SectionHead title={title} viewAllHref={`/category?cat=${viewAllCat}`} />
        <div className={`pgrid${grid4 ? ' pgrid--4' : ''}`}>
          {products.map(p => <ProductCard key={p.id} {...p} />)}
        </div>
        <div className="viewall-wrap">
          <Link to={`/category?cat=${viewAllCat}`} className="btn-viewall">View All</Link>
        </div>
      </div>
    </section>
  )
}

function PromoBanners() {
  return (
    <section className="promo-section">
      <div className="container promo-grid">
        <div className="promo-card promo-card--green">
          <div className="promo-card__body">
            <h3>Flower Arrangements<br/>for Office Receptions</h3>
            <Link to="/category" className="btn-promo">Book Now</Link>
          </div>
          <div className="promo-card__img">
            <img src="https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=300&h=200&fit=crop" alt="Office Flowers" onError={e => { e.target.style.display='none' }}/>
          </div>
        </div>
        <div className="promo-card promo-card--light">
          <div className="promo-card__body">
            <p className="promo-card__sub">Thoughtful</p>
            <h3>Funeral Flowers<br/>for Your Grandmother</h3>
            <Link to="/category" className="btn-promo btn-promo--dark">Book Now</Link>
          </div>
          <div className="promo-card__img">
            <img src="https://images.unsplash.com/photo-1457089328109-e5d9bd499191?w=300&h=200&fit=crop" alt="Funeral Flowers" onError={e => { e.target.style.display='none' }}/>
          </div>
        </div>
      </div>
    </section>
  )
}

function Stats() {
  return (
    <section className="stats-section">
      <div className="container stats-grid">
        {[
          { icon:'😊', num:'5,000+', label:'Happy Customers' },
          { icon:'🚚', num:'99%', label:'Timely Delivery' },
          { icon:'💐', num:'10K+', label:'Ships Sold' },
          { icon:'🔒', num:'100%', label:'Safe & Secure' },
        ].map(s => (
          <div className="stat-item" key={s.label}>
            <div className="stat-icon">{s.icon}</div>
            <div className="stat-number">{s.num}</div>
            <div className="stat-label">{s.label}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

function Blogs() {
  const posts = [
    { date:'March 18, 2026', title:'How to Respond to "Thank You for Flowers"? (Best Ideas and More)', excerpt:'Sending and receiving flowers is an emotional experience. Here are the most elegant ways to respond…', img:'https://images.unsplash.com/photo-1526045612212-70caf35c14df?w=400&h=200&fit=crop' },
    { date:'March 10, 2026', title:'50% Romantic: How to Make a Romantic Bouquet For Him?', excerpt:'Whether it\'s an anniversary or a surprise, these tips will help you craft the perfect bouquet for him…', img:'https://images.unsplash.com/photo-1601004890684-d8cbf643f5f2?w=400&h=200&fit=crop' },
    { date:'March 5, 2026', title:'Offer Stunning Cash Birthday Gift by Birthday Flowers – Happy Birthday Gift', excerpt:'Make someone\'s birthday unforgettable with a thoughtful floral gift and personalised note…', img:'https://images.unsplash.com/photo-1582794543139-8ac9cb0f7b11?w=400&h=200&fit=crop' },
  ]
  return (
    <section className="blogs-section">
      <div className="container">
        <SectionHead title="Our Blogs" />
        <div className="blogs-grid">
          {posts.map(p => (
            <article className="blog-card" key={p.date}>
              <div className="blog-card__img">
                <img src={p.img} alt={p.title} onError={e => { e.target.parentElement.style.background='linear-gradient(135deg,#ffd6e0,#ffaacc)' }}/>
              </div>
              <div className="blog-card__body">
                <p className="blog-date">{p.date}</p>
                <h3>{p.title}</h3>
                <p>{p.excerpt}</p>
                <a href="#" className="blog-readmore">Read More →</a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}

function TrustBadges() {
  return (
    <section className="trust-section">
      <div className="container trust-grid">
        {[
          { icon:'🎁', title:'Customise Package', text:'Tailor every bouquet to your occasion and budget.' },
          { icon:'💬', title:'Support 24/7', text:'Our team is always ready to help around the clock.' },
          { icon:'🔄', title:'No Return & No Exchanges', text:'Fresh flowers are non-returnable for hygiene reasons.' },
          { icon:'🔒', title:'100% Payment Secure', text:'Your payment details are always encrypted and safe.' },
        ].map(t => (
          <div className="trust-item" key={t.title}>
            <div className="trust-icon">{t.icon}</div>
            <h4>{t.title}</h4>
            <p>{t.text}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

function SeoText() {
  return (
    <section className="seo-section">
      <div className="container">
        <h2>Buy Flowers Online From UAE's Most Loved Online Flower Shop</h2>
        <p>Welcome to Flowerify – your go-to destination for fresh, handcrafted flower arrangements delivered across the UAE. Whether you're celebrating a birthday, welcoming a new baby, or expressing condolences, our expert florists are here to help you find the perfect bouquet. We pride ourselves on fast, reliable delivery and stunning floral designs that leave lasting impressions. Shop our extensive collection of roses, tulips, sunflowers, peonies, and seasonal arrangements — all crafted with love and delivered with care.</p>
      </div>
    </section>
  )
}

function Faq() {
  return (
    <section className="faq-section">
      <div className="container">
        <SectionHead title="Frequently Asked Questions" center />
        <div className="faq-list">
          {FAQ_ITEMS.map(item => (
            <details className="faq-item" key={item.q}
              onToggle={e => { e.target.querySelector('.faq-icon').textContent = e.target.open ? '−' : '+' }}>
              <summary>{item.q}<span className="faq-icon">+</span></summary>
              <div className="faq-ans">{item.a}</div>
            </details>
          ))}
        </div>
      </div>
    </section>
  )
}

export default function Home() {
  return (
    <>
      <CircleSlider />
      <Hero />
      <OccasionsRow />
      <ProductSection id="eid" title="Eid Mubarak" viewAllCat="eid" products={EID_PRODUCTS} alt />
      <ProductSection id="mothers" title="Mother's Day Flowers" viewAllCat="mothers-day" products={MOTHERS_PRODUCTS} />
      <ProductSection id="bestsellers" title="Best Sellers" viewAllCat="best-sellers" products={BEST_SELLERS} alt />
      <ProductSection id="birthday" title="Birthday Flowers" viewAllCat="birthday" products={BIRTHDAY_PRODUCTS} />
      <ProductSection id="newborn" title="Newborn Baby Boy Arrangements" viewAllCat="newborn-boy" products={NEWBORN_BOY} alt />
      <ProductSection id="newborn-girl" title="Newborn Baby Girl Arrangements" viewAllCat="newborn-girl" products={NEWBORN_GIRL} />
      <ProductSection id="balloons" title="Birthday Balloons" viewAllCat="birthday-balloons" products={BIRTHDAY_BALLOONS} alt />
      <ProductSection id="custom-balloons" title="Custom Age / Text Balloons" viewAllCat="custom-text-balloons" products={CUSTOM_BALLOONS} grid4 />
      <PromoBanners />
      <Stats />
      <Blogs />
      <TrustBadges />
      <SeoText />
      <Faq />
    </>
  )
}
