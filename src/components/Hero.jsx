import { useEffect, useRef, useState } from 'react'
import {
  ArrowDown,
  ArrowRight,
  Download,
  Github,
  Linkedin,
  Mail,
} from 'lucide-react'
import gsap from 'gsap'
import { hero, profile, terminal } from '../siteData.js'
import { motionEnabled } from '../motion.js'
import Portrait from './Portrait.jsx'

const CHAR_MS = 34
const CHIP_MS = 120
const PROMPT_MS = 180
const GAP_MS = 300
const LOOP_PAUSE_MS = 1800

function unitCount(line) {
  if (line.output === 'chips') return line.chips.length
  return String(line.output).length
}

function Terminal() {
  const totalUnits = terminal.lines.reduce((sum, line) => sum + unitCount(line), 0)
  const [progress, setProgress] = useState(0)
  const done = progress >= totalUnits

  useEffect(() => {
    if (!motionEnabled()) {
      setProgress(totalUnits)
      return undefined
    }

    const timers = new Set()
    const schedule = (fn, delay) => {
      const timer = window.setTimeout(() => {
        timers.delete(timer)
        fn()
      }, delay)
      timers.add(timer)
    }

    const runCycle = () => {
      setProgress(0)
      let time = 0
      let unitsBefore = 0

      terminal.lines.forEach((line) => {
        const count = unitCount(line)
        const stepMs = line.output === 'chips' ? CHIP_MS : CHAR_MS
        const base = unitsBefore

        time += PROMPT_MS
        for (let i = 1; i <= count; i += 1) {
          time += stepMs
          schedule(() => setProgress(base + i), time)
        }
        time += GAP_MS
        unitsBefore += count
      })

      schedule(runCycle, time + LOOP_PAUSE_MS)
    }

    runCycle()
    return () => timers.forEach((timer) => window.clearTimeout(timer))
  }, [totalUnits])

  let remaining = progress
  let lineStart = 0

  return (
    <div
      className="terminal"
      role="region"
      aria-label={`Terminal summary of ${profile.name}'s developer profile`}
    >
      <div className="terminal-bar">
        <span className="terminal-dot" aria-hidden="true" />
        <span className="terminal-dot" aria-hidden="true" />
        <span className="terminal-dot" aria-hidden="true" />
        <span className="terminal-title">{terminal.title}</span>
      </div>

      <div className="terminal-body">
        <p className="terminal-shell">{terminal.shell}</p>
        {terminal.lines.map((line, index) => {
          const count = unitCount(line)
          const shown = Math.min(Math.max(remaining, 0), count)
          remaining -= count

          const started = progress > 0 && shown > 0
          const isLastLine = index === terminal.lines.length - 1
          const active = progress >= lineStart && progress < lineStart + count
          lineStart += count
          const showCaret = active || (isLastLine && done)

          return (
            <div className="terminal-block" key={line.prompt}>
              <p className="terminal-cmdline">
                <span className="terminal-sigil" aria-hidden="true">
                  $
                </span>{' '}
                <span className="terminal-command">{line.prompt}</span>
              </p>

              {started ? (
                line.output === 'chips' ? (
                  <span className="terminal-chips">
                    {line.chips.slice(0, shown).map((chip) => (
                      <span className="pill pill-accent" key={chip}>
                        {chip}
                      </span>
                    ))}
                  </span>
                ) : (
                  <p
                    className={`terminal-output${
                      line.tone === 'mint' ? ' is-mint' : ''
                    }`}
                  >
                    {String(line.output).slice(0, shown)}
                  </p>
                )
              ) : null}

              {showCaret ? (
                <span
                  className="terminal-caret"
                  aria-hidden="true"
                />
              ) : null}
            </div>
          )
        })}
      </div>
    </div>
  )
}

function HeroDecor() {
  return (
    <div className="hero-decor" aria-hidden="true">
      <div className="decor-grid" />
      <div className="decor-glow decor-glow-blue" />
      <div className="decor-glow decor-glow-mint" />
    </div>
  )
}

export default function Hero() {
  const rootRef = useRef(null)

  useEffect(() => {
    const node = rootRef.current
    if (!node || !motionEnabled()) return undefined

    const ctx = gsap.context(() => {
      const tl = gsap.timeline({ defaults: { ease: 'power2.out', duration: 0.75 } })
      tl.from('.hero-eyebrow', { opacity: 0, y: 16 })
        .from('.hero-title-line', { opacity: 0, y: 28 }, '-=0.4')
        .from('.hero-role', { opacity: 0, y: 20 }, '-=0.44')
        .from('.hero-tagline', { opacity: 0, y: 18 }, '-=0.4')
        .from('.hero-badges .pill', { opacity: 0, y: 12, stagger: 0.045 }, '-=0.36')
        .from('.hero-actions .btn', { opacity: 0, y: 14, stagger: 0.08 }, '-=0.32')
        .from('.hero-social', { opacity: 0, y: 12 }, '-=0.28')
        .from('.hero-portrait', { opacity: 0, y: 26 }, '-=0.52')
        .from('.terminal', { opacity: 0, y: 26 }, '-=0.5')
    }, node)

    return () => ctx.revert()
  }, [])

  return (
    <section className="section hero" id="home" aria-labelledby="hero-heading" ref={rootRef}>
      <HeroDecor />

      <div className="container hero-inner">
        <div className="hero-text">
          <p className="eyebrow hero-eyebrow">{hero.eyebrow}</p>

          <h1 className="hero-title" id="hero-heading">
            <span className="hero-title-line">{hero.name}</span>
          </h1>

          <p className="hero-role">
            {hero.role}
            <span className="hero-role-rule" aria-hidden="true" />
          </p>

          <p className="hero-tagline">{hero.tagline}</p>

          <div className="hero-badges">
            {hero.badges.map((badge) => (
              <span className="pill" key={badge}>
                {badge}
              </span>
            ))}
          </div>

          <div className="hero-actions">
            <a className="btn btn-primary" href={hero.primaryCta.href}>
              {hero.primaryCta.label}
              <ArrowRight size={16} aria-hidden="true" />
            </a>
            <a className="btn" href={hero.secondaryCta.href} download>
              <Download size={16} aria-hidden="true" />
              {hero.secondaryCta.label}
            </a>
          </div>

          <div className="hero-social">
            <a
              className="social-link"
              href={profile.github}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`GitHub profile of ${profile.name}`}
            >
              <Github size={16} aria-hidden="true" />
              GitHub
            </a>
            <a
              className="social-link"
              href={profile.linkedin}
              target="_blank"
              rel="noreferrer noopener"
              aria-label={`LinkedIn profile of ${profile.name}`}
            >
              <Linkedin size={16} aria-hidden="true" />
              LinkedIn
            </a>
            <a
              className="social-link"
              href={`mailto:${profile.email}`}
              aria-label={`Email ${profile.name} at ${profile.email}`}
            >
              <Mail size={16} aria-hidden="true" />
              Email
            </a>
          </div>
        </div>

        <div className="hero-portrait">
          <Portrait />
        </div>

        <Terminal />
      </div>

      <a className="hero-scroll-cue" href="#about" aria-label="Scroll to the About section">
        <span>{hero.scrollCue}</span>
        <ArrowDown size={16} aria-hidden="true" />
      </a>
    </section>
  )
}