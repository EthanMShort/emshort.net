import { useState } from 'react'
import './Contact.css'

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  })

  const [submitted, setSubmitted] = useState(false)

  const handleChange = (e) => {
    const { name, value } = e.target
    setFormData(prev => ({
      ...prev,
      [name]: value
    }))
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Here you would typically send the form data to a backend
    console.log('Form submitted:', formData)
    setSubmitted(true)
    setFormData({ name: '', email: '', message: '' })
    setTimeout(() => setSubmitted(false), 3000)
  }

  return (
    <section id="contact" className="contact">
      <div className="app-container">
        <h2>Get In Touch</h2>
        <p className="contact-intro">
          Have a project in mind or want to collaborate? Feel free to reach out!
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h4>Email</h4>
              <a href="mailto:your.email@example.com">your.email@example.com</a>
            </div>
            <div className="info-item">
              <h4>Social</h4>
              <div className="social-links">
                <a href="#" target="_blank" rel="noopener noreferrer">GitHub</a>
                <a href="#" target="_blank" rel="noopener noreferrer">LinkedIn</a>
                <a href="#" target="_blank" rel="noopener noreferrer">Twitter</a>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
            {submitted && (
              <div className="success-message">
                ✓ Thanks for your message! I'll get back to you soon.
              </div>
            )}
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder="Your name"
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder="your@email.com"
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows="5"
                placeholder="Your message..."
              ></textarea>
            </div>
            <button type="submit" className="btn btn-primary">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  )
}
