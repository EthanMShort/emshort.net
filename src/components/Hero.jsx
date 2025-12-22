export default function Hero() {
  return (
    <section id="home" className="hero">
      <div style={{ maxWidth: '100%' }}>
        <h1 style={{ fontSize: '48px', marginBottom: '20px' }}>Welcome to My Portfolio</h1>
        <p style={{ fontSize: '18px', color: '#a0a8ff', marginBottom: '30px', lineHeight: '1.8' }}>
          I'm Ethan Short, an Endpoint Support Lead Tech with expertise in technical infrastructure, 
          system administration, and team leadership. Specializing in enterprise IT support and solutions.
        </p>
        <div style={{ display: 'flex', gap: '15px', flexWrap: 'wrap' }}>
          <button className="btn btn-primary" onClick={() => document.getElementById('experience').scrollIntoView({ behavior: 'smooth' })}>
            View Experience
          </button>
          <button className="btn" onClick={() => document.getElementById('contact').scrollIntoView({ behavior: 'smooth' })}>
            Get in Touch
          </button>
        </div>
      </div>
    </section>
  )
}
