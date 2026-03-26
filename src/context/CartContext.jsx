import { createContext, useContext, useState, useEffect } from 'react'

const CartContext = createContext(null)

function loadCart() {
  try {
    const stored = localStorage.getItem('flowerify_cart')
    return stored ? JSON.parse(stored) : []
  } catch {
    return []
  }
}

export function CartProvider({ children }) {
  const [items, setItems] = useState(loadCart)
  const [sidebarOpen, setSidebarOpen] = useState(false)

  useEffect(() => {
    localStorage.setItem('flowerify_cart', JSON.stringify(items))
  }, [items])

  function addToCart({ id, name, price, images = [], imgBg }) {
    const numericPrice = parseFloat(String(price).replace(/[^0-9.]/g, '')) || 0
    const img = images[0] || ''
    setItems(prev => {
      const existing = prev.find(i => i.id === id)
      if (existing) return prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { id, name, price: numericPrice, img, imgBg, qty: 1 }]
    })
    setSidebarOpen(true)
  }

  function addToCartSilent({ id, name, price, images = [], imgBg }) {
    const numericPrice = parseFloat(String(price).replace(/[^0-9.]/g, '')) || 0
    const img = images[0] || ''
    setItems(prev => {
      const existing = prev.find(i => i.id === id)
      if (existing) return prev.map(i => i.id === id ? { ...i, qty: i.qty + 1 } : i)
      return [...prev, { id, name, price: numericPrice, img, imgBg, qty: 1 }]
    })
  }

  function removeItem(id) {
    setItems(prev => prev.filter(i => i.id !== id))
  }

  function updateQty(id, delta) {
    setItems(prev =>
      prev.map(i => i.id === id ? { ...i, qty: Math.max(1, i.qty + delta) } : i)
    )
  }

  function clearCart() {
    setItems([])
  }

  const totalQty = items.reduce((s, i) => s + i.qty, 0)
  const subtotal  = items.reduce((s, i) => s + i.price * i.qty, 0)

  return (
    <CartContext.Provider value={{
      items, addToCart, addToCartSilent, removeItem, updateQty, clearCart,
      totalQty, subtotal,
      sidebarOpen, openSidebar: () => setSidebarOpen(true), closeSidebar: () => setSidebarOpen(false),
    }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  return useContext(CartContext)
}
