import { Outlet, Link } from 'react-router-dom'
import Logo from '@/components/shared/Logo'
import { useHummingbirdCursor } from '@/hooks/useHummingbirdCursor'

export default function CheckoutLayout() {
  // Still apply cursor on checkout pages
  useHummingbirdCursor()

  return (
    <>
      <div className="co-topbar">
        <div className="container co-topbar__inner">
          <Link to="/" className="logo">
            <Logo />
          </Link>
          <div className="co-steps">
            <span className="co-step co-step--active">Cart</span>
            <span className="co-step-sep">›</span>
            <span className="co-step co-step--active">Checkout</span>
          </div>
          <div className="co-secure">
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <rect x="3" y="11" width="18" height="11" rx="2" ry="2"/>
              <path d="M7 11V7a5 5 0 0110 0v4"/>
            </svg>
            Secure checkout
          </div>
        </div>
      </div>
      <Outlet />
    </>
  )
}
