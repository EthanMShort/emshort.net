import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1>Hi, I'm Ethan Short</h1>
        <p className="hero-subtitle">Web Developer & Designer</p>
        <p className="hero-description">
          I create beautiful, functional websites and applications
        </p>
        <a href="#projects" className="btn btn-primary">View My Work</a>
      </div>
      <div className="hero-background"></div>
    </section>
  )
}
