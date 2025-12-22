export default function Projects() {
  const projectData = [
    {
      id: 1,
      title: 'Infrastructure Migration',
      description: 'Led enterprise-wide infrastructure migration to cloud-based solutions',
      technologies: ['Cloud Services', 'Azure', 'System Admin'],
      impact: 'Reduced infrastructure costs by 35%'
    },
    {
      id: 2,
      title: 'Endpoint Management System',
      description: 'Designed and implemented centralized endpoint management platform',
      technologies: ['Active Directory', 'Group Policy', 'MDM'],
      impact: '500+ devices under unified management'
    },
    {
      id: 3,
      title: 'Support Ticketing System',
      description: 'Optimized IT support workflows with advanced ticketing automation',
      technologies: ['Automation', 'Process Design', 'Documentation'],
      impact: '45% improvement in resolution time'
    }
  ]

  return (
    <section id="projects" className="projects">
      <h2>Featured Projects</h2>
      <div className="card-grid">
        {projectData.map(project => (
          <div key={project.id} className="card">
            <h4>{project.title}</h4>
            <p style={{ marginBottom: '12px' }}>{project.description}</p>
            <div style={{ marginBottom: '15px' }}>
              <div style={{ display: 'flex', gap: '8px', flexWrap: 'wrap', marginBottom: '10px' }}>
                {project.technologies.map((tech, idx) => (
                  <span
                    key={idx}
                    style={{
                      fontSize: '11px',
                      padding: '4px 8px',
                      background: 'rgba(0, 102, 255, 0.2)',
                      border: '1px solid #0066ff',
                      borderRadius: '3px',
                      color: '#00ffff'
                    }}
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <p style={{ fontSize: '12px', color: '#00ffff', fontStyle: 'italic' }}>
                {project.impact}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
