import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/useLanguage'

interface SkillGroupProps {
  title: string
  items: readonly string[]
  delay: number
}

function SkillGroup({ title, items, delay }: SkillGroupProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <div className="rv" ref={ref} data-v={visible} style={{ transitionDelay: `${delay}ms` }}>
      <h3>{title}</h3>
      <div className="tags">
        {items.map((item) => (
          <span className="tag" key={item}>
            {item}
          </span>
        ))}
      </div>
    </div>
  )
}

export function Skills() {
  const { t } = useLanguage()
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="sec shell" id="skills">
      <div className="sec__head rv" ref={ref} data-v={visible}>
        <h2>{t.skills.title}</h2>
      </div>

      <div className="sk">
        {t.skills.groups.map((group, index) => (
          <SkillGroup key={group.title} title={group.title} items={group.items} delay={index * 50} />
        ))}
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
