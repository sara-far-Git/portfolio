import { useLanguage } from '../i18n/useLanguage'
import { Reveal } from './Reveal'

export function Experience() {
  const { t } = useLanguage()
  const { education } = t.experience

  return (
    <section className="section" id="experience">
      <div className="shell">
        <Reveal>
          <div className="section__head">
            <h2 className="section__title">{t.experience.title}</h2>
          </div>
        </Reveal>

        <div className="timeline">
          {t.experience.items.map((item, index) => (
            <Reveal key={item.org} delay={index * 60}>
              <article className="tl-item">
                <div className="tl-period">{item.period}</div>
                <h3 className="tl-role">{item.role}</h3>
                <div className="tl-org">{item.org}</div>
                <p className="tl-body">{item.body}</p>
                <div className="tags">
                  {item.tags.map((tag) => (
                    <span className="tag" dir="ltr" key={tag}>
                      {tag}
                    </span>
                  ))}
                </div>
              </article>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h3 className="sub-head">{t.experience.educationTitle}</h3>
          <article className="tl-item">
            <div className="tl-period">{education.period}</div>
            <h3 className="tl-role">{education.role}</h3>
            <div className="tl-org">{education.org}</div>
            <p className="tl-body" style={{ marginBottom: 0 }}>
              {education.body}
            </p>
          </article>
        </Reveal>
      </div>
    </section>
  )
}
