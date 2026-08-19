import { useEffect, useState } from 'react'
import { useLanguage } from '../i18n/useLanguage'

export function Header() {
  const { t, toggle } = useLanguage()
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header className="hdr" data-scrolled={scrolled}>
      <div className="shell hdr__in">
        <a className="mark" href="#top">
          {t.hero.name}
          <i>.</i>
        </a>

        <nav>
          <a href="#work">{t.nav.work}</a>
          <a href="#projects">{t.nav.projects}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <button className="lang" onClick={toggle} aria-label="Switch language">
          {t.langToggle}
        </button>
      </div>
    </header>
  )
}
