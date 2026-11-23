import { useRef } from 'react'
import { education } from '../siteData.js'
import { useScrollReveal } from '../motion.js'

export default function Education() {
  const gridRef = useRef(null)
  useScrollReveal(gridRef, { stagger: 0.1 })

  return (
    <section
      className="section education"
      id="education"
      aria-labelledby="education-heading"
    >
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="education-heading">
            Education
          </h2>
        </div>

        <div className="education-grid" ref={gridRef}>
          {education.map((item) => (
            <article className="card education-card" key={item.id}>
              <div className="education-container-bar">
                <span className="education-container-dots" aria-hidden="true">
                  <span />
                  <span />
                  <span />
                </span>
                <span className="education-container-title">education / record</span>
                <span className="education-container-label">Academic profile</span>
              </div>

              <div className="education-details">
                <p className="education-period">{item.period}</p>
                <h3 className="education-degree">{item.degree}</h3>
                <p className="education-school">{item.school}</p>
                {item.locationLine ? (
                  <p className="education-location">{item.locationLine}</p>
                ) : null}
              </div>

              <dl className="education-meta">
                <dt className="education-meta-label">CGPA</dt>
                <dd className="education-meta-value">{item.cgpa}</dd>
              </dl>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}