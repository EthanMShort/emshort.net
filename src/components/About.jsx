export default function About() {
  return (
    <section id="about" className="about">
      <h2>About Me</h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
        <div>
          <h3 style={{ marginBottom: '15px' }}>Professional Summary</h3>
          <p style={{ marginBottom: '15px' }}>
            Experienced IT professional with a proven track record of leading technical teams and implementing 
            large-scale infrastructure solutions. Passionate about solving complex technical challenges and 
            driving organizational efficiency through innovative endpoint management strategies.
          </p>
          <p>
            Dedicated to continuous learning and staying current with emerging technologies in the enterprise IT space.
          </p>
        </div>
        <div>
          <h3 style={{ marginBottom: '15px' }}>Core Competencies</h3>
          <ul style={{ listStyleType: 'none', padding: 0 }}>
            <li style={{ marginBottom: '8px', color: '#a0a8ff' }}>• Technical Team Leadership</li>
            <li style={{ marginBottom: '8px', color: '#a0a8ff' }}>• Enterprise Endpoint Management</li>
            <li style={{ marginBottom: '8px', color: '#a0a8ff' }}>• Infrastructure Architecture</li>
            <li style={{ marginBottom: '8px', color: '#a0a8ff' }}>• Systems Administration</li>
            <li style={{ marginBottom: '8px', color: '#a0a8ff' }}>• Strategic Planning</li>
            <li style={{ marginBottom: '8px', color: '#a0a8ff' }}>• Cross-functional Collaboration</li>
          </ul>
        </div>
      </div>
    </section>
  )
}
