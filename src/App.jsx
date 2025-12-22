import './App.css'
import Hero from './components/Hero'
import Projects from './components/Projects'
import About from './components/About'
import Contact from './components/Contact'
import Navigation from './components/Navigation'

function App() {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Projects />
      <About />
      <Contact />
      <footer className="footer">
        <p>&copy; 2025 Ethan Short. All rights reserved.</p>
      </footer>
    </div>
  )
}

export default App
