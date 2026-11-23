export const profile = {
  name: 'Pallanti Sai Suvarna',
  shortName: 'Pallanti Sai Suvarna',
  initials: 'PSS',
  role: 'Backend Developer',
  tagline:
    'Backend developer with hands-on experience in Django, Django REST Framework, PostgreSQL and computer vision, building reliable REST APIs and real-time industrial systems.',
  email: 'saisuvarnapallanti@gmail.com',
  phone: '+91-8331821618',
  github: 'https://github.com/Pallantisaisuvarna',
  linkedin: 'https://www.linkedin.com/in/pallanti-sai-suvarna/',
  location: 'Bhubaneshwar, Odisha',
  workplace: 'Bhubaneshwar, Odisha',
  available: true,
  availabilityText: 'Available for Work',
  resumeUrl: '/resume.pdf',
  portrait: '/profile-illustrated.png',
}

export const navLinks = [
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'experience', label: 'Experience' },
  { id: 'education', label: 'Education' },
  { id: 'projects', label: 'Projects' },
  { id: 'contact', label: 'Contact' },
]

export const hero = {
  eyebrow: 'Hailiot Technologies · formerly Epsum Labs',
  name: 'Pallanti Sai Suvarna',
  role: 'Backend Developer',
  tagline:
    'Backend developer with hands-on experience in Django, Django REST Framework, PostgreSQL and computer vision, building reliable REST APIs and real-time industrial systems.',
  badges: [
    'Python',
    'Django',
    'Django REST Framework',
    'Flask',
    'PostgreSQL',
    'Redis',
    'Docker',
    'YOLOv8',
  ],
  primaryCta: { label: 'View Projects', href: '#projects' },
  secondaryCta: { label: 'Download Resume', href: '/resume.pdf', download: true },
  scrollCue: 'Scroll',
}

export const terminal = {
  title: 'suvarna@portfolio:~',
  shell: 'bash',
  lines: [
    { prompt: 'whoami', output: 'pallanti_sai_suvarna' },
    { prompt: 'role', output: 'Backend Developer' },
    {
      prompt: 'tech_stack',
      output: 'chips',
      chips: ['Python', 'Django', 'Flask', 'PostgreSQL', 'Redis', 'Docker'],
    },
    { prompt: 'status', output: 'building reliable backend systems...', tone: 'mint' },
  ],
}

export const about = {
  heading: 'About',
  eyebrow: 'Background',
  title: 'About Me',
  paragraphs: [
    "I'm Pallanti Sai Suvarna, a Backend Developer based in Bhubaneshwar, Odisha. I build reliable REST APIs, real-time data platforms and AI-powered applications for industrial operations.",
    'My core stack is Python, Flask, PostgreSQL and Redis, backed by TimescaleDB. I also work with Django and Django REST Framework. Real-time delivery runs on NATS JetStream, MQTT, Redis Pub/Sub and WebSockets, with Celery and Docker for containerised, asynchronous services.',
    'I work with YOLOv8, YOLOv9 and OpenCV for industrial computer vision — ladle tracking, wheel mould detection, and smoke and fire detection. On the interface side I build with React, Tabler UI and Bootstrap.',
    'I care about clean, dependable systems and solving technical problems that have a real operational impact.',
  ],
  focusCards: [
    {
      icon: 'Server',
      title: 'Backend Development',
      description:
        'Python, Flask, Django and Django REST Framework for REST APIs, microservices and authentication, with PostgreSQL, TimescaleDB and Redis.',
    },
    {
      icon: 'Layout',
      title: 'Frontend Development',
      description:
        'React and Tabler UI interfaces, plus HTML, CSS and Bootstrap for responsive SCADA dashboards and ERP frontend updates.',
    },
    {
      icon: 'BrainCircuit',
      title: 'AI / Machine Learning',
      description:
        'YOLOv8 and YOLOv9 with OpenCV — model training, image annotation and inference pipelines for industrial detection and safety monitoring.',
    },
    {
      icon: 'Wrench',
      title: 'DevOps & Real-Time',
      description:
        'Docker, Git, NATS JetStream, MQTT, Celery, Grafana and cron jobs for containerised, scheduled and real-time delivery.',
    },
  ],
}

export const skillGroups = [
  {
    icon: 'Code2',
    tone: 'blue',
    title: 'Programming',
    items: ['Python', 'SQL', 'JavaScript', 'Bash', 'HTML', 'CSS'],
  },
  {
    icon: 'Server',
    tone: 'violet',
    title: 'Backend',
    items: ['Django', 'Django REST Framework', 'Flask', 'REST APIs', 'Celery', 'RBAC', 'WebSockets'],
  },
  {
    icon: 'Layout',
    tone: 'cyan',
    title: 'Frontend',
    items: ['Tabler UI', 'Bootstrap', 'HTML', 'CSS', 'Tkinter'],
  },
  {
    icon: 'Database',
    tone: 'amber',
    title: 'Databases',
    items: ['PostgreSQL', 'TimescaleDB', 'MySQL', 'Redis', 'SQLAlchemy', 'Alembic'],
  },
  {
    icon: 'Network',
    tone: 'teal',
    title: 'Messaging & Streaming',
    items: ['NATS JetStream', 'MQTT', 'Redis Pub/Sub', 'WebSockets', 'MediaMTX'],
  },
  {
    icon: 'Wrench',
    tone: 'rose',
    title: 'Tools',
    items: [
      'Docker',
      'Git',
      'GitHub',
      'Postman',
      'Grafana',
      'Modbus',
      'Google Colab',
      'Linux',
      'Cron Jobs',
      'Tabler UI',
    ],
  },
]

export const experience = [
  {
    id: 'job-hailiot-sde',
    period: 'Feb 2025 – Present',
    role: 'Junior Software Developer',
    company: 'Hailiot Technologies Private Limited',
    companyNote: 'formerly Epsum Labs',
    locationKey: 'workplace',
    bullets: [
      'Developed and maintained enterprise backend services using Python, Flask, SQLAlchemy, PostgreSQL, Redis, Alembic, and REST APIs, focusing on scalable and reliable backend architecture.',
      'Developed Web SCADA and Industrial IoT solutions for real-time monitoring and control using NATS JetStream, Redis Pub/Sub, WebSockets, MQTT, device and tag telemetry, alarms, dashboards, trends, and reports.',
      'Integrated and managed ML/AI models for industrial applications, including YOLOv8 and YOLOv9, OpenCV, model configuration, inference pipelines, image-based detection, fire and smoke detection, and real-time camera processing.',
      'Implemented secure and asynchronous backend workflows using JWT authentication, RBAC/ACL, object-level permissions, API rate limiting, Celery, Docker, MediaMTX, and Python workers, integrating ML and real-time data pipelines into the SCADA platform.',
    ],
    tech: [
      'Python',
      'Flask',
      'SQLAlchemy',
      'PostgreSQL',
      'TimescaleDB',
      'Redis',
      'Alembic',
      'Docker',
      'Celery',
      'NATS JetStream',
      'MQTT',
      'WebSockets',
      'YOLOv8',
      'OpenCV',
    ],
  },
  {
    id: 'job-hailiot-intern',
    period: 'Nov 2024 – Feb 2025',
    role: 'Python Developer Intern',
    company: 'Hailiot Technologies Private Limited',
    companyNote: 'formerly Epsum Labs',
    locationKey: 'workplace',
    bullets: [
      'Developed backend applications using Python and Django, gaining hands-on experience in REST APIs, CRUD operations, authentication, database integration, and business logic.',
      'Worked on the Ladle Data Processing project, developing Python scripts for data processing, unique identifier extraction, data labeling, and preprocessing.',
      'Built Snippetix, a web-based code snippet management application using Django, implementing CRUD operations and secure login/signup authentication with MySQL.',
      'Developed a GUI-based video downloader using Python Tkinter, while using Tabler UI for web application interfaces and Git/GitHub for version control.',
    ],
    tech: ['Python', 'Django', 'Django REST Framework', 'MySQL', 'Tkinter', 'Tabler UI', 'Git'],
  },
]

export const education = [
  {
    id: 'edu-btech-cse',
    period: '2020 – 2024',
    degree: 'B.Tech in Computer Science',
    school: 'Dr. B.R. Ambedkar University College of Engineering',
    locationLine: 'Etcherla, Andhra Pradesh',
    cgpa: '7.58',
  },
]

export const projects = [
  {
    id: 'web-scada-iot',
    category: 'Internal Product · Industrial IoT Platform',
    title: 'Web SCADA & Industrial IoT Platform',
    description:
      'A real-time supervisory control platform for industrial monitoring, built on a Python and Flask backend with PostgreSQL and TimescaleDB storage. It ingests device and tag telemetry over MQTT and NATS JetStream and pushes live process values to the browser over WebSockets.',
    contributions: [
      'Designed the telemetry ingestion and alarm pipeline handling high-frequency device and tag data with NATS JetStream and Redis Pub/Sub.',
      'Implemented WebSocket streaming for live dashboards, trends and reports across the SCADA operator views.',
      'Added JWT authentication, RBAC/ACL and object-level permissions with API rate limiting across all services.',
      'Containerised the stack with Docker and Celery workers for asynchronous processing tasks.',
    ],
    tech: ['Python', 'Flask', 'PostgreSQL', 'TimescaleDB', 'NATS JetStream', 'MQTT', 'WebSockets', 'Celery', 'Redis', 'Docker'],
    demo: '',
    github: '',
  },
    {
    id: 'jsw-raigarh-ems',
    category: 'Client Project · Energy Monitoring',
    client: 'JSW Raigarh',
    title: 'Energy Monitoring System',
    description:
      'A client energy monitoring system for JSW Raigarh that reads live plant sensor data over Modbus and stores it in TimescaleDB for reporting. Grafana dashboards give operations teams a real-time view of consumption across the site.',
    contributions: [
      'Developed real-time reporting features with Flask and TimescaleDB, including full Modbus device configuration.',
      'Built real-time data handling and storage so sensor readings are queryable as they arrive.',
      'Created interactive Grafana dashboards visualising live system and sensor data for operations.',
      'Tuned the polling and storage layer to keep time-series queries responsive as data accumulates.',
    ],
    tech: ['Python', 'Flask', 'TimescaleDB', 'Modbus', 'Grafana'],
    demo: '',
    github: '',
  },
    {
    id: 'maithan-frappe-tally',
    category: 'Client Project · ERP Integration',
    client: 'Maithan Ispat Limited',
    title: 'ERP Synchronization — Frappe to Tally',
    description:
      'A bi-directional ERP integration for Maithan Ispat Limited that keeps vouchers in sync between the Frappe ERP and Tally. It runs as a scheduled containerised service, so accounting data moves between both systems without manual entry.',
    contributions: [
      'Implemented bi-directional voucher synchronization between Frappe ERP and Tally using Python and XML.',
      'Handled create, update and delete operations to keep both systems consistent.',
      'Automated daily data synchronization using cron jobs.',
      'Containerised the application with Docker for reliable scheduled deployment.',
    ],
    tech: ['Python', 'XML', 'Cron Jobs', 'Docker', 'Frappe', 'Tally'],
    demo: '',
    github: '',
  },
      {
    id: 'fire-smoke-detection',
    category: 'Computer Vision / AI',
    title: 'Fire & Smoke Detection Pipeline',
    description:
      'A real-time computer vision system that detects fire and smoke in industrial camera feeds and publishes actionable alerts into the SCADA platform. Built on YOLOv8 and YOLOv9 with OpenCV preprocessing and managed inference pipelines.',
    contributions: [
      'Trained and configured YOLOv8 and YOLOv9 models for fire and smoke classes in industrial environments.',
      'Built the OpenCV preprocessing and inference pipeline for live multi-camera processing.',
      'Published detections as events over NATS and Redis so alarms surface instantly on operator dashboards.',
      'Served model configuration and inference endpoints through the Python backend layer.',
    ],
    tech: ['Python', 'YOLOv8', 'YOLOv9', 'OpenCV', 'NATS JetStream', 'Redis'],
    demo: '',
    github: '',
  },

  {
    id: 'ladle-data-processing',
    category: 'Data Engineering',
    title: 'Ladle Data Processing Pipeline',
    description:
      'A Python data processing pipeline that turns raw ladle inspection data into analysis-ready datasets. It handles extraction, unique identifier generation, labelling and preprocessing for downstream industrial analytics.',
    contributions: [
      'Developed Python scripts for batch data processing over ladle inspection records.',
      'Built unique identifier extraction and normalisation logic to keep records traceable.',
      'Implemented data labelling and preprocessing stages for downstream analysis.',
      'Structured the pipeline for repeatable runs and easier dataset regeneration.',
    ],
    tech: ['Python', 'Data Processing', 'Pandas', 'Pipelines'],
    demo: '',
    github: '',
  },



  {
    id: 'snippetix',
    category: 'Full Stack Web App',
    title: 'Snippetix',
    description:
      'A web-based code snippet manager built with Django and MySQL, created during my internship at Hailiot Technologies. Users register, authenticate securely and organise reusable code snippets from a clean browser interface.',
    contributions: [
      'Built the application end to end with Django, implementing full CRUD operations for code snippets.',
      'Implemented secure login and signup authentication flows with session handling.',
      'Integrated MySQL through the Django ORM with validation and admin management.',
      'Structured templates and views for a simple, navigable snippet library.',
    ],
    tech: ['Python', 'Django', 'MySQL', 'CRUD', 'Authentication'],
    demo: '',
    github: '',
  },
]

export const contact = {
  eyebrow: 'Get in touch',
  heading: "Let's Connect",
  pitch: [
    'I am open to backend developer roles and AI engineering work, where APIs, distributed systems and machine learning come together.',
    'If you have an interesting backend problem — telemetry pipelines, real-time dashboards or production ML services — send me a message and I will get back to you shortly.',
  ],
  rows: [
    { icon: 'Mail', label: 'Email', valueKey: 'email', hrefKey: 'mailto' },
    { icon: 'Phone', label: 'Phone', valueKey: 'phone', hrefKey: 'tel' },
    { icon: 'Github', label: 'GitHub', valueKey: 'github', hrefKey: 'url' },
    { icon: 'Linkedin', label: 'LinkedIn', valueKey: 'linkedin', hrefKey: 'url' },
    { icon: 'MapPin', label: 'Location', valueKey: 'location' },
  ],
}

export const footer = {
  quickLinksLabel: 'Quick Links',
  copyright: 'All rights reserved.',
  backToTopLabel: 'Back to top',
}

export function hasUrl(value) {
  if (typeof value !== 'string') return false
  const trimmed = value.trim()
  if (!trimmed) return false
  try {
    const url = new URL(trimmed)
    return url.protocol === 'http:' || url.protocol === 'https:'
  } catch {
    return false
  }
}