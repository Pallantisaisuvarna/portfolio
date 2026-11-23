import { useEffect, useRef, useState } from 'react'
import { Menu, X, Download, Sun, Moon } from 'lucide-react'
import { navLinks, profile } from '../siteData.js'

function applyTheme(theme) {
  document.documentElement.dataset.theme = theme
  const meta = document.querySelector('meta[name="theme-color"]')
  if (meta) meta.setAttribute('content', theme === 'light' ? '#f5f2eb' : '#191b18')
  try {
    localStorage.setItem('ps-portfolio-theme', theme)
  } catch {
    /* storage may be blocked */
  }
}

export default function Navigation() {
  const progressRef = useRef(null)
  const [activeId, setActiveId] = useState(navLinks[0].id)
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'dark',
  )

  const toggleTheme = () => {
    const next = theme === 'light' ? 'dark' : 'light'
    applyTheme(next)
    setTheme(next)
  }

  useEffect(() => {
    const onStorage = (event) => {
      if (event.key !== 'ps-portfolio-theme') return
      const next = event.newValue
      if (next !== 'light' && next !== 'dark') return
      document.documentElement.dataset.theme = next
      setTheme(next)
    }
    window.addEventListener('storage', onStorage)
    return () => window.removeEventListener('storage', onStorage)
  }, [])

  useEffect(() => {
    const sections = navLinks
      .map((link) => document.getElementById(link.id))
      .filter(Boolean)

    const header = document.querySelector('.site-header')
    const headerOffset = () => (header ? header.offsetHeight : 72)
    let progressFrame = null

    const updateProgress = () => {
      if (progressFrame !== null) return
      progressFrame = window.requestAnimationFrame(() => {
        progressFrame = null
        const scrollableHeight =
          document.documentElement.scrollHeight - window.innerHeight
        const progress =
          scrollableHeight > 0
            ? Math.min(window.scrollY / scrollableHeight, 1)
            : 0
        progressRef.current?.style.setProperty('--scroll-progress', progress)
      })
    }

    const pickActive = () => {
      const line = headerOffset() + 8
      let current = sections[0]?.id ?? navLinks[0].id

      for (const section of sections) {
        if (section.getBoundingClientRect().top <= line) current = section.id
      }

      setActiveId((prev) => {
        if (prev === current) return prev
        return current
      })
    }

    const onScroll = () => {
      setScrolled(window.scrollY > 12)
      pickActive()
      updateProgress()
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)

    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
      if (progressFrame !== null) window.cancelAnimationFrame(progressFrame)
    }
  }, [])

  useEffect(() => {
    const mq = window.matchMedia('(min-width: 1080px)')

    const sync = () => {
      if (mq.matches) setOpen(false)
    }

    sync()
    mq.addEventListener('change', sync)
    return () => mq.removeEventListener('change', sync)
  }, [])

  useEffect(() => {
    document.body.classList.toggle('nav-locked', open)
    return () => document.body.classList.remove('nav-locked')
  }, [open])

  useEffect(() => {
    if (!open) return

    const onKeyDown = (event) => {
      if (event.key === 'Escape') setOpen(false)
    }

    document.addEventListener('keydown', onKeyDown)
    return () => document.removeEventListener('keydown', onKeyDown)
  }, [open])

  const close = () => setOpen(false)

  return (
    <header className={`site-header${scrolled ? ' is-scrolled' : ''}`}>
      <span className="scroll-progress" ref={progressRef} aria-hidden="true" />
      <div className="container header-inner">
        <a className="brand" href="#home" onClick={close}>
          <span className="brand-mark" aria-hidden="true">
            {profile.initials}
          </span>
          <span className="brand-name">{profile.name}</span>
        </a>

        <nav className="header-nav" aria-label="Section navigation">
          <ul className="nav-pill">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={`nav-pill-link${activeId === link.id ? ' is-active' : ''}`}
                  href={`#${link.id}`}
                  aria-current={activeId === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>

        <div className="header-actions">
          <span className="status-pill">
            <span className="status-dot" aria-hidden="true" />
            {profile.availabilityText}
          </span>

          <button
            type="button"
            className="theme-toggle"
            onClick={toggleTheme}
            aria-label={
              theme === 'light' ? 'Switch to dark theme' : 'Switch to light theme'
            }
            title={theme === 'light' ? 'Dark theme' : 'Light theme'}
          >
            {theme === 'light' ? (
              <Moon size={16} aria-hidden="true" />
            ) : (
              <Sun size={16} aria-hidden="true" />
            )}
          </button>

          <a className="btn btn-primary btn-sm resume-btn" href={profile.resumeUrl} download>
            <Download size={15} aria-hidden="true" />
            Resume
          </a>

          <button
            type="button"
            className="hamburger"
            onClick={() => setOpen((value) => !value)}
            aria-expanded={open}
            aria-controls="mobile-drawer"
            aria-label={open ? 'Close navigation menu' : 'Open navigation menu'}
          >
            {open ? <X size={20} aria-hidden="true" /> : <Menu size={20} aria-hidden="true" />}
          </button>
        </div>
      </div>

      <div
        id="mobile-drawer"
        className={`mobile-drawer${open ? ' is-open' : ''}`}
        hidden={!open}
      >
        <nav className="container" aria-label="Mobile navigation">
          <ul className="drawer-list">
            {navLinks.map((link) => (
              <li key={link.id}>
                <a
                  className={`drawer-link${activeId === link.id ? ' is-active' : ''}`}
                  href={`#${link.id}`}
                  onClick={close}
                  aria-current={activeId === link.id ? 'true' : undefined}
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
          <a
            className="btn btn-primary drawer-resume"
            href={profile.resumeUrl}
            download
            onClick={close}
          >
            <Download size={16} aria-hidden="true" />
            Download Resume
          </a>
        </nav>
      </div>
    </header>
  )
}