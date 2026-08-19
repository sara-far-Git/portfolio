import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/useLanguage'

interface XpItemProps {
  period: string
  role: string
  org: string
  body: string
  tags?: readonly string[]
  delay?: number
}

function XpItem({ period, role, org, body, tags, delay = 0 }: XpItemProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div className="xp__i rv" ref={ref} data-v={visible} style={{ transitionDelay: `${delay}ms` }}>
      <div className="xp__p">
        <bdi dir="ltr">{period}</bdi>
        <span className="xp__rule" aria-hidden="true" />
      </div>
      <div>
        <h3 className="xp__r">{role}</h3>
        <div className="xp__o">{org}</div>
        <p className="xp__b">{body}</p>
        {tags && (
          <div className="tags">
            {tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

export function Experience() {
  const { t } = useLanguage()
  const { education } = t.experience

  return (
    <section className="sec shell" id="experience">
      <h3 className="sec__h3">{t.experience.title}</h3>

      <div className="xp">
        {t.experience.items.map((item, index) => (
          <XpItem
            key={item.org}
            period={item.period}
            role={item.role}
            org={item.org}
            body={item.body}
            tags={item.tags}
            delay={index * 60}
          />
        ))}
      </div>

      <h3 className="sec__h3 subh">{t.experience.educationTitle}</h3>

      <div className="xp">
        <XpItem
          period={education.period}
          role={education.role}
          org={education.org}
          body={education.body}
        />
      </div>
    </section>
  )
}
