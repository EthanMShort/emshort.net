import './About.css'

export default function About() {
  return (
    <section id="about" className="about">
      <div className="app-container">
        <h2>About Me</h2>
        <div className="about-content">
          <div className="about-text">
            <p>
              I'm a passionate web developer with a love for creating beautiful and functional digital experiences. 
              With expertise in modern web technologies, I craft responsive websites and applications that users love.
            </p>
            <p>
              When I'm not coding, you can find me exploring new technologies, contributing to open-source projects, 
              or enjoying the great outdoors.
            </p>
            <div className="skills">
              <h3>Skills</h3>
              <div className="skills-grid">
                <div className="skill-item">
                  <h4>Frontend</h4>
                  <ul>
                    <li>React</li>
                    <li>JavaScript/ES6+</li>
                    <li>HTML5 & CSS3</li>
                    <li>Responsive Design</li>
                  </ul>
                </div>
                <div className="skill-item">
                  <h4>Tools & Platforms</h4>
                  <ul>
                    <li>Git & GitHub</li>
                    <li>Vite</li>
                    <li>VS Code</li>
                    <li>Webpack</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
