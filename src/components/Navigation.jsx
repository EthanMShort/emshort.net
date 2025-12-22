import './Navigation.css'
import { useState } from 'react'

export default function Navigation() {
  const [isOpen, setIsOpen] = useState(false)

  const toggleMenu = () => setIsOpen(!isOpen)

  const scrollToSection = (sectionId) => {
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
      setIsOpen(false)
    }
  }

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <a href="#home">ES Portfolio</a>
        </div>
        <div className={`nav-menu ${isOpen ? 'active' : ''}`}>
          <button className="nav-link" onClick={() => scrollToSection('home')}>Home</button>
          <button className="nav-link" onClick={() => scrollToSection('projects')}>Projects</button>
          <button className="nav-link" onClick={() => scrollToSection('about')}>About</button>
          <button className="nav-link" onClick={() => scrollToSection('contact')}>Contact</button>
        </div>
        <div className={`hamburger ${isOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
    </nav>
  )
}
