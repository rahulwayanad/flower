import { createContext, useContext, useState } from 'react'

const AuthContext = createContext(null)

export function AuthProvider({ children }) {
  const [user, setUser] = useState(null) // null = guest
  const [modal, setModal] = useState({ open: false, view: 'login' }) // view: login | register | forgot

  function openAuthModal(view = 'login') {
    setModal({ open: true, view })
  }

  function closeAuthModal() {
    setModal(m => ({ ...m, open: false }))
  }

  function switchView(view) {
    setModal({ open: true, view })
  }

  function login(userData) {
    setUser(userData)
    closeAuthModal()
  }

  function logout() {
    setUser(null)
  }

  return (
    <AuthContext.Provider value={{ user, modal, openAuthModal, closeAuthModal, switchView, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

export function useAuth() {
  return useContext(AuthContext)
}
