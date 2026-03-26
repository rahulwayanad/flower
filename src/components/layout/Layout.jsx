import { useState } from 'react'
import { Outlet } from 'react-router-dom'
import Topbar from './Topbar'
import Header from './Header'
import Nav from './Nav'
import Footer from './Footer'
import AuthModal from '@/components/shared/AuthModal'
import CartSidebar from '@/components/shared/CartSidebar'
import { useHummingbirdCursor } from '@/hooks/useHummingbirdCursor'

export default function Layout() {
  const [navOpen, setNavOpen] = useState(false)
  const { isEnabled, toggle } = useHummingbirdCursor()

  return (
    <>
      <Topbar cursorEnabled={isEnabled} onCursorToggle={toggle} />
      <Header navOpen={navOpen} onNavToggle={() => setNavOpen(v => !v)} />
      <Nav open={navOpen} onClose={() => setNavOpen(false)} />
      <Outlet />
      <Footer />
      <AuthModal />
      <CartSidebar />
    </>
  )
}
