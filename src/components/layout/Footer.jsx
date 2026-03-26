import { Link } from 'react-router-dom'

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <Link to="/" className="logo logo--w">
            <span className="logo__mark">
              <svg width="24" height="24" viewBox="0 0 60 60" fill="none">
                <circle cx="30" cy="30" r="10" fill="#FFC0CB"/>
                <ellipse cx="30" cy="12" rx="8" ry="12" fill="#ff8fa3" opacity=".8"/>
                <ellipse cx="30" cy="48" rx="8" ry="12" fill="#ff8fa3" opacity=".8"/>
                <ellipse cx="12" cy="30" rx="12" ry="8" fill="#ffb3c1" opacity=".8"/>
                <ellipse cx="48" cy="30" rx="12" ry="8" fill="#ffb3c1" opacity=".8"/>
              </svg>
            </span>
            <span className="logo__text">Flowerify</span>
          </Link>
          <p>📍 12 Blossom Lane, Garden City</p>
          <p>📞 +1 (800) 555-FLOWER</p>
          <p>✉️ hello@flowerify.com</p>
          <p>🕐 Mon – Sat: 8 am – 10 pm</p>
          <div className="footer-social">
            <a href="#" aria-label="Facebook">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
              </svg>
            </a>
            <a href="#" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37z"/>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"/>
              </svg>
            </a>
          </div>
        </div>

        <div className="footer-col">
          <h4>Our Flowers</h4>
          <ul>
            <li><Link to="/category?cat=birthday">Birthday Flowers</Link></li>
            <li><Link to="/category?cat=wedding">Wedding Flowers</Link></li>
            <li><Link to="/category?cat=sympathy">Sympathy Flowers</Link></li>
            <li><Link to="/category?cat=anniversary">Anniversary Flowers</Link></li>
            <li><Link to="/category?cat=graduation">Graduation Flowers</Link></li>
            <li><Link to="/category?cat=get-well-soon">Get Well Soon</Link></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Our Company</h4>
          <ul>
            <li><Link to="/about">About Us</Link></li>
            <li><a href="#">Our Blog</a></li>
            <li><a href="#">Careers</a></li>
            <li><a href="#">Press</a></li>
            <li><a href="#">Affiliates</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Shop By Occasion</h4>
          <ul>
            <li><Link to="/category?cat=valentines">Valentine's Day</Link></li>
            <li><Link to="/category?cat=mothers-day">Mother's Day</Link></li>
            <li><Link to="/category?cat=eid">Eid Flowers</Link></li>
            <li><a href="#">New Year</a></li>
            <li><a href="#">Christmas</a></li>
          </ul>
        </div>

        <div className="footer-col">
          <h4>Shop By Location</h4>
          <ul>
            <li><a href="#">Dubai</a></li>
            <li><a href="#">Abu Dhabi</a></li>
            <li><a href="#">Sharjah</a></li>
            <li><a href="#">Ajman</a></li>
            <li><a href="#">Ras Al Khaimah</a></li>
          </ul>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="container">
          <p>
            &copy; 2026 Flowerify. All rights reserved. &nbsp;|&nbsp;{' '}
            <a href="#">Privacy Policy</a> &nbsp;|&nbsp;{' '}
            <a href="#">Terms of Service</a>
          </p>
        </div>
      </div>
    </footer>
  )
}
