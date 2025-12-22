import './Projects.css'

const projectData = [
  {
    id: 1,
    title: 'Project One',
    description: 'A modern web application built with React and Vite',
    technologies: ['React', 'JavaScript', 'CSS'],
    link: '#'
  },
  {
    id: 2,
    title: 'Project Two',
    description: 'Full-stack application with backend integration',
    technologies: ['React', 'Node.js', 'MongoDB'],
    link: '#'
  },
  {
    id: 3,
    title: 'Project Three',
    description: 'Responsive design project with advanced styling',
    technologies: ['HTML', 'CSS', 'JavaScript'],
    link: '#'
  }
]

export default function Projects() {
  return (
    <section id="projects" className="projects">
      <div className="app-container">
        <h2>My Projects</h2>
        <div className="projects-grid">
          {projectData.map(project => (
            <div key={project.id} className="project-card">
              <div className="project-header">
                <h3>{project.title}</h3>
              </div>
              <p className="project-description">{project.description}</p>
              <div className="project-tech">
                {project.technologies.map((tech, idx) => (
                  <span key={idx} className="tech-tag">{tech}</span>
                ))}
              </div>
              <a href={project.link} className="btn btn-secondary">View Project</a>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
