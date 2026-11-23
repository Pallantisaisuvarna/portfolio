import { useEffect, useState } from 'react'
import { User } from 'lucide-react'
import { profile } from '../siteData.js'

const darkPortrait = '/profile-illustrated-dark.png'

export default function Portrait() {
  const [failed, setFailed] = useState(false)
  const [theme, setTheme] = useState(
    () => document.documentElement.dataset.theme || 'light',
  )

  useEffect(() => {
    const root = document.documentElement
    const observer = new MutationObserver(() => {
      setTheme(root.dataset.theme === 'dark' ? 'dark' : 'light')
    })
    observer.observe(root, { attributes: true, attributeFilter: ['data-theme'] })
    return () => observer.disconnect()
  }, [])

  if (failed) {
    return (
      <div className="portrait-fallback" role="img" aria-label={`${profile.name}, portrait photo unavailable`}>
        <User size={52} aria-hidden="true" />
        <span>{profile.initials}</span>
      </div>
    )
  }

  return (
    <img
      className="portrait-img"
      src={theme === 'dark' ? darkPortrait : profile.portrait}
      alt={`${profile.name}, ${profile.role}`}
      width="420"
      height="520"
      loading="eager"
      decoding="async"
      onError={() => setFailed(true)}
    />
  )
}