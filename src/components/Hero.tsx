import { contactInfo } from '../data/content'
import { useLanguage } from '../i18n/useLanguage'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero" id="top">
      <div className="shell hero__inner">
        <span className="eyebrow">{t.hero.kicker}</span>
        <h1 className="hero__name">{t.hero.name}</h1>
        <p className="hero__headline">{t.hero.headline}</p>
        <p className="hero__intro">{t.hero.intro}</p>

        <div className="hero__actions">
          <a className="btn btn--primary" href="#work">
            {t.hero.ctaWork}
          </a>
          <a className="btn" href={contactInfo.cv} download>
            {t.hero.ctaCv}
          </a>
          <a className="btn" href={contactInfo.github} target="_blank" rel="noreferrer">
            GitHub
          </a>
        </div>

        <div className="hero__stats">
          {t.hero.stats.map((stat) => (
            <div key={stat.label}>
              <div className="hero__stat-value">{stat.value}</div>
              <div className="hero__stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
