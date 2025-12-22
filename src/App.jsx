import './App.css'
import { useState } from 'react'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'

function App() {
  const [activeSection, setActiveSection] = useState('home')

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId)
    const element = document.getElementById(sectionId)
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' })
    }
  }

  return (
    <div className="app">
      {/* Sidebar */}
      <aside className="sidebar">
        <div className="sidebar-content">
          {/* Profile Card */}
          <div className="profile-card">
            <div className="profile-image">
              <img src="" alt="Profile" onError={(e) => e.target.style.display = 'none'} />
              <span style={{ display: 'none' }}>👤</span>
            </div>
            <div className="profile-info">
              <h1>Ethan Short</h1>
              <p className="job-title">Endpoint Support Lead Tech</p>
              <p className="status">Available for opportunities</p>
            </div>
          </div>

          {/* Navigation Links */}
          <nav className="nav-links">
            <a 
              onClick={() => scrollToSection('home')} 
              className={activeSection === 'home' ? 'active' : ''}
            >
              Home
            </a>
            <a 
              onClick={() => scrollToSection('experience')} 
              className={activeSection === 'experience' ? 'active' : ''}
            >
              Experience
            </a>
            <a 
              onClick={() => scrollToSection('projects')} 
              className={activeSection === 'projects' ? 'active' : ''}
            >
              Projects
            </a>
            <a 
              onClick={() => scrollToSection('skills')} 
              className={activeSection === 'skills' ? 'active' : ''}
            >
              Skills
            </a>
            <a 
              onClick={() => scrollToSection('contact')} 
              className={activeSection === 'contact' ? 'active' : ''}
            >
              Contact
            </a>
          </nav>

          {/* Social Links */}
          <div className="social-links">
            <a href="https://linkedin.com/in/ethan-m-short" target="_blank" rel="noopener noreferrer" title="LinkedIn">
              in
            </a>
            <a href="https://github.com" target="_blank" rel="noopener noreferrer" title="GitHub">
              ◆
            </a>
            <a href="mailto:your@email.com" title="Email">
              ✉
            </a>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="main-content">
        <Hero />
        <section id="experience" className="experience">
          <h2>Experience</h2>
          <div className="card-grid">
            <div className="card">
              <h4>Endpoint Support Lead Tech</h4>
              <p className="company-name" style={{ color: '#00ffff', fontSize: '12px' }}>Current Role</p>
              <p>Leading endpoint support initiatives and technical troubleshooting. Overseeing team operations and implementing technical solutions.</p>
              <div style={{ marginTop: '15px', fontSize: '12px', color: '#a0a8ff' }}>
                <p><strong>Key Skills:</strong> Technical Leadership, Endpoint Management, System Administration</p>
              </div>
            </div>
          </div>
        </section>

        <Projects />

        <section id="skills" className="skills">
          <h2>Skills & Technologies</h2>
          <div className="card-grid">
            <div className="card">
              <h4>Technical Support</h4>
              <p>Windows/Mac OS, Active Directory, Remote Support Tools, System Troubleshooting</p>
            </div>
            <div className="card">
              <h4>Infrastructure</h4>
              <p>Network Administration, Endpoint Management, Cloud Services, Hardware Support</p>
            </div>
            <div className="card">
              <h4>Tools & Platforms</h4>
              <p>Ticketing Systems, Monitoring Tools, Deployment Systems, Documentation</p>
            </div>
          </div>
        </section>

        <About />
        <Contact />

        <footer className="footer">
          <p>&copy; 2025 Ethan Short. All rights reserved.</p>
        </footer>
      </main>
    </div>
  )
}

export default App
