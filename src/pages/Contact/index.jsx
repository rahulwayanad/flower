import { useState } from 'react'
import '@/assets/css/contact.css'
import Breadcrumb from '@/components/shared/Breadcrumb'

export default function Contact() {
  const [form, setForm] = useState({ name:'', email:'', phone:'', message:'' })
  const [toast, setToast] = useState(false)

  function handleChange(e) {
    setForm({ ...form, [e.target.name]: e.target.value })
  }

  function handleSubmit(e) {
    e.preventDefault()
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      alert('Please fill in all required fields.')
      return
    }
    setToast(true)
    setForm({ name:'', email:'', phone:'', message:'' })
    setTimeout(() => setToast(false), 6000)
  }

  return (
    <>
      <div className="contact-hero">
        <div className="container">
          <Breadcrumb items={[{ label:'Home', href:'/' }, { label:'Contact Us' }]} />
          <h1 className="contact-hero__title">Contact Us</h1>
          <p className="contact-hero__sub">We'd love to hear from you — reach out any time</p>
        </div>
      </div>

      <iframe
        className="contact-map"
        src="https://www.openstreetmap.org/export/embed.html?bbox=55.2337%2C25.1772%2C55.2737%2C25.2072&layer=mapnik&marker=25.1920%2C55.2537"
        title="Flowerify Store Location – Business Bay, Dubai"
        loading="lazy"
      />

      <section className="contact-page">
        <div className="container">
          <div className="contact-grid">
            <div>
              <h2 className="contact-form__title">Drop Us a Line</h2>
              <form onSubmit={handleSubmit} noValidate>
                <div className="contact-field">
                  <label>Your Name <span>*</span></label>
                  <input type="text" name="name" placeholder="e.g. John Smith" required value={form.name} onChange={handleChange} />
                </div>
                <div className="contact-field">
                  <label>Your Email <span>*</span></label>
                  <input type="email" name="email" placeholder="e.g. john@example.com" required value={form.email} onChange={handleChange} />
                </div>
                <div className="contact-field">
                  <label>Your Phone Number</label>
                  <input type="tel" name="phone" placeholder="e.g. +971 50 123 4567" value={form.phone} onChange={handleChange} />
                </div>
                <div className="contact-field">
                  <label>Your Message <span>*</span></label>
                  <textarea name="message" placeholder="Write your message here…" required value={form.message} onChange={handleChange}/>
                </div>
                <button type="submit" className="contact-send-btn">Send Message</button>
                {toast && (
                  <div className="contact-toast show">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M20 6L9 17l-5-5"/></svg>
                    Thank you! Your message has been sent. We'll get back to you shortly.
                  </div>
                )}
              </form>
            </div>

            <div>
              <h2 className="contact-info__title">Contact Information</h2>
              <p className="contact-info__desc">We love to hear from you on our customer service, merchandise, website or any topics you want to share with us. Your comments and suggestions will be greatly appreciated.</p>
              <ul className="contact-info__list">
                {[
                  {
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>,
                    label: 'Address',
                    val: 'Shop No - 17, Al Wasl Centre, Sheikh Zayed Collector Road, Dubai.',
                  },
                  {
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.8 19.79 19.79 0 01.01 1.12 2 2 0 012 0h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>,
                    label: 'Phone',
                    val: '04 343 2212',
                  },
                  {
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>,
                    label: 'Email',
                    val: 'hello@flowerify.com',
                  },
                  {
                    icon: <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>,
                    label: 'Opening Hours',
                    val: 'Everyday 9:00 – 21:00',
                  },
                ].map(info => (
                  <li className="contact-info__item" key={info.label}>
                    <div className="contact-info__icon">{info.icon}</div>
                    <div>
                      <div className="contact-info__label">{info.label}</div>
                      <div className="contact-info__val">{info.val}</div>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
