import { contactInfo } from '../data/content'
import { useLanguage } from '../i18n/useLanguage'

export function Hero() {
  const { t } = useLanguage()

  return (
    <section className="hero shell" id="top">
      <div className="hero__kick">
        <span className="mono">{t.hero.kicker}</span>
        <span className="r" />
        <span className="mono">2026</span>
      </div>

      <h1>{t.hero.name}</h1>

      <p className="hero__head">
        {t.hero.headline}
        <em>{t.hero.headlineAccent}</em>
      </p>

      <p className="hero__intro">{t.hero.intro}</p>

      <div className="acts">
        <a className="btn btn--p" href="#work">
          {t.hero.ctaWork}
        </a>
        <a className="btn" href={contactInfo.github} target="_blank" rel="noreferrer">
          GitHub
        </a>
        <a className="btn" href={`mailto:${contactInfo.email}`}>
          {t.hero.ctaMail}
        </a>
      </div>

      <div className="stats">
        {t.hero.stats.map((stat) => (
          <div key={stat.label}>
            <b>
              <bdi dir="ltr">{stat.value}</bdi>
            </b>
            <span>{stat.label}</span>
          </div>
        ))}
      </div>
    </section>
  )
}
