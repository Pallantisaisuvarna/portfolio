import { useEffect, useRef } from 'react'
import { Briefcase } from 'lucide-react'
import gsap from 'gsap'
import { experience, profile } from '../siteData.js'
import { motionEnabled, useScrollReveal } from '../motion.js'

export default function Experience() {
  const listRef = useRef(null)
  const lineRef = useRef(null)

  useScrollReveal(listRef, { stagger: 0.12 })

  useEffect(() => {
    const line = lineRef.current
    if (!line || !motionEnabled()) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        line,
        { scaleY: 0 },
        {
          scaleY: 1,
          ease: 'none',
          transformOrigin: 'top center',
          scrollTrigger: {
            trigger: '.timeline-list',
            start: 'top 70%',
            end: 'bottom 65%',
            scrub: 0.4,
          },
        },
      )
    }, listRef)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="section experience"
      id="experience"
      aria-labelledby="experience-heading"
    >
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="experience-heading">
            Work Experience
          </h2>
          <p className="section-sub">
            Backend engineering on industrial IoT and SCADA platforms, from intern to shipping
            production services.
          </p>
        </div>

        <div className="timeline" ref={listRef}>
          <span className="timeline-line" aria-hidden="true">
            <span className="timeline-line-fill" ref={lineRef} />
          </span>

          <ol className="timeline-list">
            {experience.map((item) => {
              const isCurrent = /\bPresent\b/i.test(item.period)

              return (
                <li
                  className={`timeline-item${isCurrent ? ' is-current' : ''}`}
                  key={item.id}
                >
                  <article className={`card timeline-card${isCurrent ? ' is-current' : ''}`}>
                    <div className="timeline-date">
                      <p className="timeline-period">{item.period}</p>
                      {isCurrent ? (
                        <span className="timeline-current">Current role</span>
                      ) : null}
                    </div>

                    <header className="timeline-head">
                      <span className="timeline-icon" aria-hidden="true">
                        <Briefcase size={16} />
                      </span>
                      <div>
                        <h3 className="timeline-role">{item.role}</h3>
                        <p className="timeline-company">
                          {item.company}
                          {item.companyNote ? (
                            <span className="timeline-company-note"> ({item.companyNote})</span>
                          ) : null}
                          {item.locationKey && profile[item.locationKey] ? (
                            <span className="timeline-location">
                              {' · '}
                              {profile[item.locationKey]}
                            </span>
                          ) : null}
                        </p>
                      </div>
                    </header>

                    <ul className="timeline-bullets">
                      {item.bullets.map((bullet) => (
                        <li key={bullet.slice(0, 40)}>{bullet}</li>
                      ))}
                    </ul>

                    <div className="pill-row">
                      {item.tech.map((tech) => (
                        <span className="pill" key={tech}>
                          {tech}
                        </span>
                      ))}
                    </div>
                  </article>
                </li>
              )
            })}
          </ol>
        </div>
      </div>
    </section>
  )
}