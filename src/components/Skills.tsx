import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/useLanguage'

export function Skills() {
  const { t } = useLanguage()
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="sec shell" id="skills">
      <div className="sec__head rv" ref={ref} data-v={visible}>
        <h2>{t.skills.title}</h2>
      </div>

      <div className="core">
        <h3>{t.skills.coreTitle}</h3>
        <div className="tags tags--core">
          {t.skills.core.map((item) => (
            <span className="tag" key={item}>
              {item}
            </span>
          ))}
        </div>
      </div>

      <div className="also">
        <span className="mono">{t.skills.alsoTitle}</span>
        <p>
          <bdi dir="ltr">{t.skills.also.join(' · ')}</bdi>
        </p>
      </div>

      <div className="langs">
        <span className="mono">{t.skills.languagesTitle}</span>
        {t.skills.languages.map((language) => (
          <span key={language}>{language}</span>
        ))}
      </div>
    </section>
  )
}
