import { Fragment, useEffect, useRef } from 'react'
import { BrainCircuit, Layout, Server, Wrench } from 'lucide-react'
import gsap from 'gsap'
import { about } from '../siteData.js'
import { motionEnabled, useScrollReveal } from '../motion.js'

const icons = { Server, Layout, BrainCircuit, Wrench }
const endpointColors = ['blue', 'violet', 'red', 'yellow']

function renderRich(text) {
  return text.split(/\*\*(.+?)\*\*/g).map((part, index) =>
    index % 2 === 1 ? (
      <strong key={index}>{part}</strong>
    ) : (
      <Fragment key={index}>{part}</Fragment>
    ),
  )
}

function profileEndpointPath(title) {
  const resource = title.toLowerCase().split(/[^a-z0-9]+/)[0]

  return `/profile/${resource}`
}

export default function About() {
  const sectionRef = useRef(null)
  const bodyRef = useRef(null)
  const cardsRef = useRef(null)

  useScrollReveal(bodyRef, { stagger: 0.08 })
  useScrollReveal(cardsRef, { stagger: 0.08 })

  useEffect(() => {
    const section = sectionRef.current
    const body = bodyRef.current
    const cards = cardsRef.current
    if (!section || !body || !cards || !motionEnabled()) return undefined

    const ctx = gsap.context(() => {
      gsap.fromTo(
        body,
        { y: 34 },
        {
          y: -34,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        },
      )
      gsap.fromTo(
        cards,
        { y: -28 },
        {
          y: 28,
          ease: 'none',
          scrollTrigger: {
            trigger: section,
            start: 'top bottom',
            end: 'bottom top',
            scrub: 0.6,
          },
        },
      )
    }, section)

    return () => ctx.revert()
  }, [])

  return (
    <section
      className="section about"
      id="about"
      aria-labelledby="about-heading"
      ref={sectionRef}
    >
      <div className="container about-grid">
        <div className="about-text" ref={bodyRef}>
          <h2 className="section-title" id="about-heading">
            {about.title}
          </h2>
          <div className="about-body">
            {about.paragraphs.map((paragraph, index) => (
              <p key={index}>{renderRich(paragraph)}</p>
            ))}
          </div>
        </div>

        <div className="about-cards" ref={cardsRef}>
          {about.focusCards.map((card, index) => {
            const Icon = icons[card.icon] ?? Server
            return (
              <article
                className={`card about-card about-endpoint-card is-${endpointColors[index % endpointColors.length]}`}
                key={card.title}
              >
                <div className="about-endpoint-request" aria-hidden="true">
                  <span
                    className={`about-endpoint-method is-${endpointColors[index % endpointColors.length]}`}
                  >
                    GET
                  </span>
                  <code className="about-endpoint-path">{profileEndpointPath(card.title)}</code>
                </div>

                <div className="about-endpoint-response">
                  <span className="about-card-icon" aria-hidden="true">
                    <Icon size={20} />
                  </span>
                  <div className="about-endpoint-copy">
                    <h3 className="about-card-title">{card.title}</h3>
                    <p className="about-card-text">{card.description}</p>
                  </div>
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}