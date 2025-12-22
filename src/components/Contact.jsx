import { useState } from 'react'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission here
    console.log('Form submitted:', formData)
    // Reset form
    setFormData({ name: '', email: '', message: '' })
  }

  return (
    <section id="contact" className="contact">
      <h2>Get In Touch</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
        <div>
          <h3 style={{ marginBottom: '20px' }}>Contact Information</h3>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#00ffff', marginBottom: '5px' }}>Email:</p>
            <a href="mailto:your.email@example.com" style={{ color: '#a0a8ff', textDecoration: 'none' }}>
              your.email@example.com
            </a>
          </div>
          <div style={{ marginBottom: '20px' }}>
            <p style={{ color: '#00ffff', marginBottom: '5px' }}>LinkedIn:</p>
            <a href="https://linkedin.com/in/ethan-m-short" target="_blank" rel="noopener noreferrer" style={{ color: '#a0a8ff', textDecoration: 'none' }}>
              linkedin.com/in/ethan-m-short
            </a>
          </div>
          <div>
            <p style={{ color: '#00ffff', marginBottom: '5px' }}>Response Time:</p>
            <p style={{ color: '#a0a8ff' }}>Usually within 24 hours</p>
          </div>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
          <div>
            <label htmlFor="name" style={{ display: 'block', marginBottom: '5px', color: '#00ffff' }}>
              Name
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #0066ff',
                borderRadius: '4px',
                background: 'rgba(20, 24, 41, 0.7)',
                color: '#e0e6ff',
                fontFamily: 'inherit',
                fontSize: '14px'
              }}
            />
          </div>
          <div>
            <label htmlFor="email" style={{ display: 'block', marginBottom: '5px', color: '#00ffff' }}>
              Email
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #0066ff',
                borderRadius: '4px',
                background: 'rgba(20, 24, 41, 0.7)',
                color: '#e0e6ff',
                fontFamily: 'inherit',
                fontSize: '14px'
              }}
            />
          </div>
          <div>
            <label htmlFor="message" style={{ display: 'block', marginBottom: '5px', color: '#00ffff' }}>
              Message
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="5"
              style={{
                width: '100%',
                padding: '10px 12px',
                border: '1px solid #0066ff',
                borderRadius: '4px',
                background: 'rgba(20, 24, 41, 0.7)',
                color: '#e0e6ff',
                fontFamily: 'inherit',
                fontSize: '14px',
                resize: 'vertical'
              }}
            />
          </div>
          <button type="submit" className="btn btn-primary" style={{ alignSelf: 'flex-start' }}>
            Send Message
          </button>
        </form>
      </div>
    </section>
  )
}
