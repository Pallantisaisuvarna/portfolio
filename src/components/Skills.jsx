import { useRef } from 'react'
import {
  BrainCircuit,
  Code2,
  Database,
  Layout,
  Network,
  Server,
  Wrench,
} from 'lucide-react'
import { profile, skillGroups } from '../siteData.js'
import { useScrollReveal } from '../motion.js'

const icons = { Code2, Server, Layout, Database, BrainCircuit, Network, Wrench }

const skillIcons = {
  Python: Code2,
  SQL: Database,
  JavaScript: Code2,
  Django: Server,
  'Django REST Framework': Server,
  Flask: Server,
  'REST APIs': Network,
  Celery: Wrench,
  WebSockets: Network,
  'Tabler UI': Layout,
  Bootstrap: Layout,
  PostgreSQL: Database,
  TimescaleDB: Database,
  MySQL: Database,
  Redis: Database,
  SQLAlchemy: Database,
  'NATS JetStream': Network,
  MQTT: Network,
  'Redis Pub/Sub': Network,
  Docker: Wrench,
  Git: Code2,
  GitHub: Code2,
  Postman: Network,
  Grafana: Layout,
  Modbus: Network,
  Linux: Server,
}

export default function Skills() {
  const gridRef = useRef(null)
  useScrollReveal(gridRef, { stagger: 0.07, y: 22 })

  return (
    <section className="section skills" id="skills" aria-labelledby="skills-heading">
      <div className="container">
        <div className="section-head">
          <h2 className="section-title" id="skills-heading">
            Technical Stack
          </h2>
          <p className="section-sub">
            The stack {profile.name.split(' ')[0]} reaches for daily — backend frameworks and
            databases at the core, with messaging and streaming services layered on top.
          </p>
        </div>

        <div className="skills-grid" ref={gridRef}>
          {skillGroups.map((group) => {
            const Icon = icons[group.icon] ?? Code2
            return (
              <article
                className="card skill-card"
                data-tone={group.tone}
                key={group.title}
              >
                <header className="skill-card-head">
                  <span className="skill-card-icon" aria-hidden="true">
                    <Icon size={19} />
                  </span>
                  <h3 className="skill-card-title">{group.title}</h3>
                </header>
                <div className="pill-row">
                  {group.items.map((item) => {
                    const SkillIcon = skillIcons[item]
                    return (
                      <span className="pill" key={item}>
                        {SkillIcon ? (
                          <SkillIcon
                            className="skill-item-icon"
                            size={13}
                            aria-hidden="true"
                          />
                        ) : null}
                        {item}
                      </span>
                    )
                  })}
                </div>
              </article>
            )
          })}
        </div>
      </div>
    </section>
  )
}