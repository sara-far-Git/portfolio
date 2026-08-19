import { useLanguage } from '../i18n/useLanguage'
import { Reveal } from './Reveal'

export function Skills() {
  const { t } = useLanguage()

  return (
    <section className="section" id="skills">
      <div className="shell">
        <Reveal>
          <div className="section__head">
            <h2 className="section__title">{t.skills.title}</h2>
          </div>
        </Reveal>

        <div className="skills-grid">
          {t.skills.groups.map((group, index) => (
            <Reveal key={group.title} delay={index * 50}>
              <div className="skill-card">
                <h3>{group.title}</h3>
                <div className="tags">
                  {group.items.map((item) => (
                    <span className="tag" dir="ltr" key={item}>
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="sub-head">{t.skills.languagesTitle}</h3>
          <div className="languages">
            {t.skills.languages.map((language) => (
              <span className="tag" key={language}>
                {language}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  )
}
