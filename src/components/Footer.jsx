import { useEffect, useRef, useState } from 'react'
import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react'
import { footer, navLinks, profile } from '../siteData.js'
import { useScrollReveal } from '../motion.js'

export default function Footer() {
  const gridRef = useRef(null)
  const bottomRef = useRef(null)
  const [showTop, setShowTop] = useState(false)

  useScrollReveal(gridRef, { stagger: 0.12, y: 18 })
  useScrollReveal(bottomRef, { y: 10, start: 'top 94%' })

  useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 500)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  const socials = [
    { icon: Github, href: profile.github, label: 'GitHub' },
    { icon: Linkedin, href: profile.linkedin, label: 'LinkedIn' },
    { icon: Mail, href: `mailto:${profile.email}`, label: 'Email' },
  ]

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-grid" ref={gridRef}>
          <div>
            <a className="footer-logo" href="#home">
              <span className="footer-logo-mark" aria-hidden="true">
                {profile.initials}
              </span>
              {profile.name}
            </a>
            <p className="footer-role">{profile.role}</p>
            <p className="footer-role">{profile.tagline}</p>
          </div>

          <div>
            <p className="footer-heading">{footer.quickLinksLabel}</p>
            <nav aria-label="Footer navigation">
              <ul className="footer-links">
                {navLinks.map((link) => (
                  <li key={link.id}>
                    <a href={`#${link.id}`}>{link.label}</a>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div>
            <p className="footer-heading">Connect</p>
            <ul className="footer-links">
              <li>
                <a href={`mailto:${profile.email}`}>{profile.email}</a>
              </li>
              <li>
                <a href={`tel:${profile.phone.replace(/[^+\d]/g, '')}`}>{profile.phone}</a>
              </li>
              <li>
                <span>{profile.location}</span>
              </li>
            </ul>
            <div className="footer-socials">
              {socials.map(({ icon: Icon, href, label }) => {
                const isExternal = href.startsWith('http')
                return (
                  <a
                    className="icon-link"
                    key={label}
                    href={href}
                    aria-label={`${label} — ${profile.name}`}
                    {...(isExternal
                      ? { target: '_blank', rel: 'noreferrer noopener' }
                      : {})}
                  >
                    <Icon size={17} aria-hidden="true" />
                  </a>
                )
              })}
            </div>
          </div>
        </div>

        <div className="footer-bottom" ref={bottomRef}>
          <p>
            © {new Date().getFullYear()} {profile.name}. {footer.copyright}
          </p>
          <p>{profile.email}</p>
        </div>
      </div>

      <a
        className={`icon-link icon-link-lg to-top${showTop ? ' is-visible' : ''}`}
        href="#home"
        aria-label={footer.backToTopLabel}
      >
        <ArrowUp size={18} aria-hidden="true" />
      </a>
    </footer>
  )
}