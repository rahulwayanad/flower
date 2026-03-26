import '@/assets/css/about.css'
import Breadcrumb from '@/components/shared/Breadcrumb'

export default function About() {
  return (
    <>
      <div className="about-hero">
        <div className="container">
          <Breadcrumb items={[{ label:'Home', href:'/' }, { label:'About Us' }]} />
          <h1 className="about-hero__title">About Flowerify</h1>
          <p className="about-hero__sub">Dubai's most loved flower delivery service – making every moment unforgettable</p>
        </div>
      </div>

      <section className="about-page">
        <div className="container">
          <div className="about-body">
            <p>At Flowerify, we believe that sending flowers is a beautiful and thoughtful gesture that evokes many sentiments, no matter what the occasion. That's precisely why we do everything to make it special and create a memorable day for loved ones.</p>
            <p>This belief has driven our flower business for nearly 25 years since we first opened our shop to customers in the early 1990s. Our customers trust us not because we are one of Dubai's oldest florists, but because we make the online flower ordering experience convenient and hassle-free.</p>
            <p>We understand that when you're buying flowers online, no matter what the occasion, you want everything from payment to delivery to be reliable. So, you'll be relieved to hear that when it comes to choosing the best flowers, Flowerify is committed to making it delightfully easy. That's our 100% Satisfaction Guarantee.</p>

            <div className="about-unique">
              <h2 className="about-unique__title">What Makes Flowerify Unique?</h2>
              <p>When you choose Flowerify to send flowers across Dubai, you know they're going to look absolutely stunning when they arrive. Here are just some of the things that we do to ensure this:</p>
              <ul>
                {[
                  { title: 'Every order gets micro level attention:', text: 'Our dedicated team of florists make every single order in our flower shop based in Business Bay. No order is too small or too large for us to give it the full personal touch.' },
                  { title: 'We\'re a team of high-pedigree florists:', text: 'Our florists are award winning and expertly trained, they design and make all our flower bouquets and arrangements by hand. A lot of love and skill goes into every design, selecting only the freshest blooms directly from the farm.' },
                  { title: 'We take quality very seriously:', text: 'All our floral bouquets and arrangements are checked by our head florist before being placed in a van with one of our friendly drivers who will carefully hand deliver your order to the lucky recipient.' },
                  { title: 'Same-day delivery you can count on:', text: 'We offer same-day flower delivery across Dubai 365 days a year. Place your order before 2 PM and we\'ll get it there the same day — fresh, on time, and beautifully presented.' },
                ].map(item => (
                  <li key={item.title}>
                    <span className="about-unique__dot"></span>
                    <span><strong>{item.title}</strong> {item.text}</span>
                  </li>
                ))}
              </ul>
              <p style={{ marginTop:'24px' }}>After all, sending flowers someone's way is all about the experience. The "WOW" factor, as we like to call it. When you place an order via Flowerify, there's sure to be oodles of it.</p>
            </div>
          </div>
        </div>
      </section>

      <div className="about-stats">
        <div className="container">
          <div className="about-stats__grid">
            {[
              { num:'25+', label:'Years in Business' },
              { num:'150k+', label:'Happy Customers' },
              { num:'500+', label:'Unique Arrangements' },
              { num:'7', label:'UAE Emirates Delivered' },
            ].map(s => (
              <div key={s.label}>
                <div className="about-stats__num">{s.num}</div>
                <div className="about-stats__label">{s.label}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <section className="about-why">
        <div className="container">
          <h2 className="about-why__title">Why Customers Love Us</h2>
          <div className="about-why__cards">
            {[
              { icon:'🌸', title:'Farm-Fresh Flowers', text:'We source only the freshest blooms directly from our trusted farms, ensuring every arrangement radiates natural beauty.' },
              { icon:'🚚', title:'Same-Day Delivery', text:'Order before 2 PM and we\'ll deliver the same day across all of Dubai and the wider UAE — 365 days a year.' },
              { icon:'💯', title:'100% Satisfaction', text:'Not happy with your order? We\'ll make it right. Our commitment to quality means you\'ll always be delighted.' },
            ].map(c => (
              <div className="about-why__card" key={c.title}>
                <div className="about-why__icon">{c.icon}</div>
                <h4>{c.title}</h4>
                <p>{c.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
