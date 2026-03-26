import { useState, useEffect } from 'react'
import { createPortal } from 'react-dom'
import { useAuth } from '@/context/AuthContext'
import '@/assets/css/auth-modal.css'

/* ── Login View ── */
function LoginView() {
  const { switchView, login } = useAuth()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim() || !password.trim()) return
    // Demo: just log the user in with their email
    login({ name: email.split('@')[0], email })
  }

  return (
    <>
      <h2 className="auth-title">Sign In</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="auth-field">
          <label>Email *</label>
          <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
        </div>
        <div className="auth-field">
          <label>Password *</label>
          <input type="password" placeholder="••••••••" value={password} onChange={e => setPassword(e.target.value)} required />
        </div>
        <button type="button" className="auth-forgot-link" onClick={() => switchView('forgot')}>
          Forgot your password?
        </button>
        <button type="submit" className="auth-submit-btn">Sign In</button>
      </form>
      <p className="auth-switch">
        Don't have an account?{' '}
        <button onClick={() => switchView('register')}>Create one</button>
      </p>
    </>
  )
}

/* ── Register View ── */
function RegisterView() {
  const { switchView, login } = useAuth()
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', password: '' })

  function handleChange(e) {
    setForm(f => ({ ...f, [e.target.name]: e.target.value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.firstName.trim() || !form.email.trim() || !form.password.trim()) return
    login({ name: `${form.firstName} ${form.lastName}`.trim(), email: form.email })
  }

  return (
    <>
      <h2 className="auth-title">Register</h2>
      <form onSubmit={handleSubmit} noValidate>
        <div className="auth-field-row">
          <div className="auth-field">
            <label>First Name *</label>
            <input type="text" name="firstName" placeholder="John" value={form.firstName} onChange={handleChange} required />
          </div>
          <div className="auth-field">
            <label>Last Name</label>
            <input type="text" name="lastName" placeholder="Smith" value={form.lastName} onChange={handleChange} />
          </div>
        </div>
        <div className="auth-field">
          <label>Email *</label>
          <input type="email" name="email" placeholder="you@example.com" value={form.email} onChange={handleChange} required />
        </div>
        <div className="auth-field">
          <label>Password *</label>
          <input type="password" name="password" placeholder="Min. 8 characters" value={form.password} onChange={handleChange} required />
        </div>
        <p className="auth-privacy">
          Your personal data will be used to support your experience throughout this website, to manage access to your account, and for other purposes described in our <a href="#">privacy policy</a>.
        </p>
        <button type="submit" className="auth-submit-btn">Register</button>
      </form>
      <p className="auth-switch">
        Already have an account?{' '}
        <button onClick={() => switchView('login')}>Sign in</button>
      </p>
    </>
  )
}

/* ── Forgot Password View ── */
function ForgotView() {
  const { switchView } = useAuth()
  const [email, setEmail] = useState('')
  const [sent, setSent] = useState(false)

  function handleSubmit(e) {
    e.preventDefault()
    if (!email.trim()) return
    setSent(true)
  }

  return (
    <>
      <button className="auth-back" onClick={() => switchView('login')}>
        <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
          <polyline points="15 18 9 12 15 6"/>
        </svg>
        Back to Sign In
      </button>
      <h2 className="auth-title">Forgot Password</h2>

      {sent ? (
        <div className="auth-reset-sent">
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <path d="M20 6L9 17l-5-5"/>
          </svg>
          We've sent a reset link to <strong>{email}</strong>. Check your inbox.
        </div>
      ) : (
        <form onSubmit={handleSubmit} noValidate>
          <div className="auth-field">
            <label>Email *</label>
            <input type="email" placeholder="you@example.com" value={email} onChange={e => setEmail(e.target.value)} required />
          </div>
          <button type="submit" className="auth-submit-btn">Send Reset Link</button>
        </form>
      )}

      <p className="auth-switch">
        Remembered it?{' '}
        <button onClick={() => switchView('login')}>Sign in</button>
      </p>
    </>
  )
}

/* ── Auth Modal ── */
const VIEWS = { login: LoginView, register: RegisterView, forgot: ForgotView }

export default function AuthModal() {
  const { modal, closeAuthModal } = useAuth()
  const { open, view } = modal

  // Lock body scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  // Close on Escape
  useEffect(() => {
    if (!open) return
    function onKey(e) { if (e.key === 'Escape') closeAuthModal() }
    document.addEventListener('keydown', onKey)
    return () => document.removeEventListener('keydown', onKey)
  }, [open, closeAuthModal])

  const View = VIEWS[view] || LoginView

  return createPortal(
    <>
      {/* Overlay */}
      <div
        className={`auth-overlay${open ? ' auth-overlay--visible' : ''}`}
        onClick={closeAuthModal}
        aria-hidden="true"
      />

      {/* Panel */}
      <div
        className={`auth-panel${open ? ' auth-panel--open' : ''}`}
        role="dialog"
        aria-modal="true"
        aria-label="Account"
      >
        <button className="auth-close" onClick={closeAuthModal} aria-label="Close">
          <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
            <line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/>
          </svg>
        </button>
        <div className="auth-panel__inner">
          <View />
        </div>
      </div>
    </>,
    document.body
  )
}
