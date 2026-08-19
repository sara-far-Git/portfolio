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
    <header className="header" data-scrolled={scrolled}>
      <div className="shell header__inner">
        <a className="header__mark" href="#top">
          <span className="header__dot" aria-hidden="true" />
          {t.hero.name}
        </a>

        <nav className="header__nav">
          <a href="#work">{t.nav.work}</a>
          <a href="#experience">{t.nav.experience}</a>
          <a href="#skills">{t.nav.skills}</a>
          <a href="#contact">{t.nav.contact}</a>
        </nav>

        <button className="lang-toggle" onClick={toggle} aria-label="Switch language">
          {t.langToggle}
        </button>
      </div>
    </header>
  )
}
