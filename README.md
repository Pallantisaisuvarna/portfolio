# Pallanti Sai Suvarna — Portfolio

Personal developer portfolio built with Vite + React (JavaScript). Single-page app with GSAP scroll animations, lucide-react icons and one hand-written stylesheet.

## Local setup

Requires Node.js 18+.

```bash
npm install
npm run dev
```

Vite prints a local URL (typically `http://localhost:5173`).

```bash
npm run build      # production build into dist/
npm run preview    # serve the built output locally
```

## Image assets

| Path               | Purpose                    | Notes                                                   |
| ------------------ | -------------------------- | ------------------------------------------------------- |
| `public/profile-illustrated.png` | Illustrated hero portrait | Supplied portfolio artwork |
| `public/profile-illustrated-dark.png` | Dark-theme hero portrait | Dark-toned version of the supplied artwork |
| `public/profile.jpeg` | Original hero portrait | Kept as the unmodified source image |
| `public/resume.pdf`  | "Download Resume" button  | Any PDF; opened/downloaded from the nav, hero and footer |

If the displayed portrait is unavailable, the hero shows an initials fallback. Resume buttons use `public/resume.pdf`.

## Editing content

**Everything visible on the page lives in `src/siteData.js`.** No text is hardcoded inside JSX components.

Exports and what they control:

| Export           | Controls                                                          |
| ---------------- | ----------------------------------------------------------------- |
| `profile`        | Name, role, tagline, email, phone, GitHub, LinkedIn, location, resume/portrait paths, availability pill text |
| `navLinks`       | Header nav and footer quick links (must match section `id`s)     |
| `hero`           | Eyebrow, `<h1>` name, role line, tagline, tech badges, CTA labels, scroll cue |
| `terminal`       | Terminal window title and the lines it types out                  |
| `about`          | Section title, paragraphs and the four focus cards                 |
| `skillGroups`    | Skill cards (icon name, group title, pill items)                  |
| `experience`     | Timeline entries: period, role, company, bullets, tech            |
| `education`      | Education card: period, degree, school, CGPA                      |
| `projects`       | Project cards: number, category, description, contributions, tech, `demo`, `github` |
| `contact`        | Contact heading, pitch and the contact rows                       |
| `footer`         | Footer headings and back-to-top label                             |
| `hasUrl()`       | Helper that returns `true` only for valid `http(s)` strings         |

### Adding a project

```js
{
  id: 'my-project',
  category: 'Data Engineering',
  title: 'My Project',
  description: 'Two sentences about the problem and the approach.',
  contributions: [
    'Shipped X',
    'Reduced Y by 40%',
    'Built Z',
  ],
  tech: ['Python', 'Django'],
  demo: '',
  github: 'https://github.com/yourhandle/my-project',
}
```

"Live Demo" renders only when `demo` passes `hasUrl()`. "Source Code" renders only when `github` passes `hasUrl()`. Leave a field as `''` and the button is omitted entirely — no empty links are rendered.

### Changing section order or links

`navLinks` ids must match the `id` on each `<section>`. The header scroll-spy marks the last section whose top has passed the header, so every section stays reachable.

## Styling and motion

- All CSS lives in `src/styles.css`, driven by custom properties in `:root` (warm paper surfaces, ink text, terracotta accents, serif display typography, radii and transitions). The light editorial theme is the default; the header toggle switches to a complementary dark theme.
- Site text uses the Times New Roman system font; JetBrains Mono loads from Google Fonts for code labels and terminal text.
- `src/motion.js` exports `motionEnabled()` and `useScrollReveal(ref)`. Section content reveals with a staggered fade, blur and slide, while section accents draw in; reduced-motion users see the content and static accents without the GSAP reveal. The stylesheet also reduces keyframes and transitions under the same media query and sets `scroll-behavior: auto`.
- The hero portrait floats gently, the header tracks scroll progress, and project cards use pointer-follow tilt and light on fine pointers. Hover details add small icon movements, with reduced-motion preferences respected.

## Deploying to Vercel

1. Push this folder to a GitHub repository.
2. Import the repo at [vercel.com/new](https://vercel.com/new) — the framework preset detects Vite automatically.
3. Confirm the build settings:
   - Build command: `npm run build`
   - Output directory: `dist`
4. Deploy. Future pushes to the default branch redeploy automatically.

No environment variables or rewrites are required. Make sure `public/profile.jpg` and `public/resume.pdf` are committed so they are part of the deployed build.