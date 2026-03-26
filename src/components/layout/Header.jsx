import { useState, useEffect, useRef } from 'react'
import { Link } from 'react-router-dom'
import Logo from '@/components/shared/Logo'
import { useAuth } from '@/context/AuthContext'
import { useCart } from '@/context/CartContext'

export default function Header({ navOpen, onNavToggle }) {
  const { user, openAuthModal, logout } = useAuth()
  const { totalQty, openSidebar } = useCart()
  const [accountOpen, setAccountOpen] = useState(false)
  const accountRef = useRef(null)

  useEffect(() => {
    function handleClick(e) {
      if (accountRef.current && !accountRef.current.contains(e.target)) {
        setAccountOpen(false)
      }
    }
    document.addEventListener('click', handleClick)
    return () => document.removeEventListener('click', handleClick)
  }, [])

  function handleAccountClick(e) {
    e.stopPropagation()
    if (!user) {
      openAuthModal('login')
    } else {
      setAccountOpen(v => !v)
    }
  }

  return (
    <header className="header">
      <div className="container header__inner">
        <Link to="/" className="logo">
          <Logo />
        </Link>

        <div className="search-wrap">
          <div className="search-bar">
            <input type="text" placeholder="Search for products" />
            <button type="button" aria-label="Search">
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
            </button>
          </div>
        </div>

        <div className="header__icons">
          <div className={`account-drop-wrap${accountOpen ? ' open' : ''}`} ref={accountRef}>
            <button
              className="hicon account-btn"
              type="button"
              title={user ? 'My Account' : 'Sign In'}
              aria-expanded={accountOpen}
              onClick={handleAccountClick}
            >
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
              </svg>
            </button>

            {/* Dropdown — only shown when logged in */}
            {user && (
              <div className="account-dropdown">
                <div className="account-dropdown__head">
                  <div className="account-dropdown__avatar">
                    <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                      <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"/><circle cx="12" cy="7" r="4"/>
                    </svg>
                  </div>
                  <div>
                    <p className="account-dropdown__greeting">Hi, {user.name}!</p>
                    <p className="account-dropdown__sub">{user.email}</p>
                  </div>
                </div>
                <ul className="account-dropdown__list">
                  <li>
                    <Link to="/orders" onClick={() => setAccountOpen(false)}>
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M14 2H6a2 2 0 00-2 2v16a2 2 0 002 2h12a2 2 0 002-2V8z"/>
                        <polyline points="14 2 14 8 20 8"/>
                        <line x1="16" y1="13" x2="8" y2="13"/><line x1="16" y1="17" x2="8" y2="17"/>
                      </svg>
                      My Orders
                    </Link>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
                      </svg>
                      Wishlist
                    </a>
                  </li>
                  <li>
                    <a href="#">
                      <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                        <circle cx="12" cy="8" r="4"/><path d="M4 20c0-4 3.6-7 8-7s8 3 8 7"/>
                      </svg>
                      Profile Settings
                    </a>
                  </li>
                </ul>
                <div className="account-dropdown__foot">
                  <button className="account-signin-btn" onClick={() => { setAccountOpen(false); logout() }}>
                    Sign Out
                  </button>
                </div>
              </div>
            )}
          </div>

          <a href="#" className="hicon" title="Wishlist">
            <div className="hicon__wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z"/>
              </svg>
              <em className="hbadge">0</em>
            </div>
          </a>

          <button className="hicon" title="Cart" type="button" onClick={openSidebar} style={{ background:'none', border:'none', cursor:'pointer', padding:0 }}>
            <div className="hicon__wrap">
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8">
                <circle cx="9" cy="21" r="1"/><circle cx="20" cy="21" r="1"/>
                <path d="M1 1h4l2.68 13.39a2 2 0 002 1.61h9.72a2 2 0 002-1.61L23 6H6"/>
              </svg>
              <em className="hbadge">{totalQty}</em>
            </div>
          </button>
        </div>

        <button
          className="burger"
          aria-label="Menu"
          aria-expanded={navOpen}
          onClick={onNavToggle}
        >
          <span/><span/><span/>
        </button>
      </div>
    </header>
  )
}
