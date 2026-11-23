import { useRef, useState } from 'react'
import { ArrowUpRight, BookOpen, Github, X } from 'lucide-react'
import { hasUrl, projects } from '../siteData.js'
import { motionEnabled, useScrollReveal } from '../motion.js'

const TILT_MAX = 2

function ProjectCard({ project, index }) {
  const cardRef = useRef(null)
  const toggleRef = useRef(null)
  const [isOpen, setIsOpen] = useState(false)

  const onPointerMove = (event) => {
    const card = cardRef.current
    if (!card) return
    if (!motionEnabled()) return
    if (!window.matchMedia('(pointer: fine)').matches) return

    const rect = card.getBoundingClientRect()
    const x = (event.clientX - rect.left) / rect.width - 0.5
    const y = (event.clientY - rect.top) / rect.height - 0.5

    card.style.setProperty('--tilt-x', `${(-y * TILT_MAX).toFixed(2)}deg`)
    card.style.setProperty('--tilt-y', `${(x * TILT_MAX).toFixed(2)}deg`)
    card.style.setProperty('--pointer-x', `${((x + 0.5) * 100).toFixed(1)}%`)
    card.style.setProperty('--pointer-y', `${((y + 0.5) * 100).toFixed(1)}%`)
  }

  const resetTilt = () => {
    const card = cardRef.current
    if (!card) return
    card.style.setProperty('--tilt-x', '0deg')
    card.style.setProperty('--tilt-y', '0deg')
    card.style.setProperty('--pointer-x', '50%')
    card.style.setProperty('--pointer-y', '50%')
  }

  const number = String(index + 1).padStart(2, '0')
  const detailsId = `project-pages-${project.id}`
  const showDemo = hasUrl(project.demo)
  const showSource = hasUrl(project.github)
  const closeBook = () => {
    setIsOpen(false)
    toggleRef.current?.focus()
  }

  return (
    <article
      className={`card project-card${isOpen ? ' is-open' : ''}`}
      ref={cardRef}
      onPointerMove={onPointerMove}
      onPointerLeave={resetTilt}
    >
      <div className="project-book-cover">
        <span className="project-book-spine" aria-hidden="true" />
        <div className="project-cover-content">
          <header className="project-head">
            <span className="project-number" aria-hidden="true">
              {number}
            </span>
            <p className="project-category">{project.category}</p>
          </header>

          {project.client ? <p className="project-client">{project.client}</p> : null}

          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>

          <button
            className="project-book-toggle"
            type="button"
            ref={toggleRef}
            aria-expanded={isOpen}
            aria-controls={detailsId}
            onClick={() => setIsOpen((open) => !open)}
          >
            <BookOpen size={16} aria-hidden="true" />
            {isOpen ? 'Close book' : 'Open project'}
          </button>
        </div>
      </div>

      <div
        className={`project-pages${isOpen ? ' is-open' : ''}`}
        id={detailsId}
        aria-hidden={!isOpen}
        inert={!isOpen}
      >
        <div className="project-pages-inner">
          <div className="project-contributions">
            <p className="project-contributions-label">Key contributions</p>
            <ul className="project-bullets">
              {project.contributions.map((item) => (
                <li key={item.slice(0, 40)}>{item}</li>
              ))}
            </ul>
          </div>

          <div className="pill-row">
            {project.tech.map((tech) => (
              <span className="pill" key={tech}>
                {tech}
              </span>
            ))}
          </div>

          {showDemo || showSource ? (
            <div className="project-actions">
              {showDemo ? (
                <a
                  className="btn btn-primary btn-sm"
                  href={project.demo}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`Open the live demo of ${project.title}`}
                >
                  Live Demo
                  <ArrowUpRight size={15} aria-hidden="true" />
                </a>
              ) : null}

              {showSource ? (
                <a
                  className="btn btn-sm"
                  href={project.github}
                  target="_blank"
                  rel="noreferrer noopener"
                  aria-label={`View the source code of ${project.title} on GitHub`}
                >
                  <Github size={15} aria-hidden="true" />
                  Source Code
                </a>
              ) : null}
            </div>
          ) : null}

          <button
            className="project-page-close"
            type="button"
            onClick={closeBook}
            aria-label={`Close ${project.title} project details`}
          >
            <X size={15} aria-hidden="true" />
            Close book
          </button>
        </div>
      </div>
    </article>
  )
}

export default function Projects() {
  const gridRef = useRef(null)
  useScrollReveal(gridRef, { stagger: 0.1, y: 24 })

  return (
    <section className="section projects" id="projects" aria-labelledby="projects-heading">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="projects-heading">
            Projects
          </h2>
          <p className="section-sub">
            Industrial platforms, computer vision pipelines and data engineering work built for
            production use.
          </p>
        </div>

        <div className="projects-grid" ref={gridRef}>
          {projects.map((project, index) => (
            <ProjectCard project={project} index={index} key={project.id} />
          ))}
        </div>
      </div>
    </section>
  )
}