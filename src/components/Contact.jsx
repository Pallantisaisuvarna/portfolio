import { useRef } from 'react'
import { Github, Linkedin, Mail, MapPin, Phone } from 'lucide-react'
import { contact, profile } from '../siteData.js'
import { useScrollReveal } from '../motion.js'

const icons = { Mail, Phone, Github, Linkedin, MapPin }

function displayValue(row) {
  const raw = profile[row.valueKey]
  if (row.hrefKey === 'url') return raw.replace(/^https?:\/\/(www\.)?/, '').replace(/\/$/, '')
  return raw
}

function rowHref(row) {
  const raw = profile[row.valueKey]
  if (row.hrefKey === 'mailto') return `mailto:${raw}`
  if (row.hrefKey === 'tel') return `tel:${raw.replace(/[^+\d]/g, '')}`
  return raw
}

const external = { target: '_blank', rel: 'noreferrer noopener' }

export default function Contact() {
  const leftRef = useRef(null)
  const rowsRef = useRef(null)

  useScrollReveal(leftRef, { stagger: 0.08 })
  useScrollReveal(rowsRef, { stagger: 0.08 })

  return (
    <section className="section contact" id="contact" aria-labelledby="contact-heading">
      <div className="container">
        <div className="contact-panel card">
          <div className="contact-left" ref={leftRef}>
            <p className="eyebrow">{contact.eyebrow}</p>
            <h2 className="section-title" id="contact-heading">
              {contact.heading}
            </h2>
            {contact.pitch.map((line) => (
              <p className="contact-pitch" key={line.slice(0, 32)}>
                {line}
              </p>
            ))}

            <span className="status-pill contact-status">
              <span className="status-dot" aria-hidden="true" />
              {profile.availabilityText}
            </span>
          </div>

          <ul className="contact-rows" ref={rowsRef}>
            {contact.rows.map((row) => {
              const Icon = icons[row.icon] ?? Mail
              const isLink = Boolean(row.hrefKey)
              const externalProps = row.hrefKey === 'url' ? external : {}

              const body = (
                <>
                  <span className="contact-row-icon" aria-hidden="true">
                    <Icon size={17} />
                  </span>
                  <span className="contact-row-body">
                    <span className="contact-row-label">{row.label}</span>
                    <span className="contact-row-value">{displayValue(row)}</span>
                  </span>
                </>
              )

              return (
                <li key={row.label}>
                  {isLink ? (
                    <a
                      className="contact-row"
                      href={rowHref(row)}
                      aria-label={`${row.label}: ${profile[row.valueKey]}`}
                      {...externalProps}
                    >
                      {body}
                    </a>
                  ) : (
                    <div className="contact-row is-static">{body}</div>
                  )}
                </li>
              )
            })}
          </ul>
        </div>
      </div>
    </section>
  )
}