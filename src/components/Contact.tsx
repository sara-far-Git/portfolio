import { contactInfo } from '../data/content'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/useLanguage'

export function Contact() {
  const { t } = useLanguage()
  const { ref, visible } = useReveal<HTMLHeadingElement>()

  return (
    <section className="ct" id="contact">
      <div className="shell">
        <h2 className="rv" ref={ref} data-v={visible}>
          {t.contact.title}
        </h2>
        <p className="rv" data-v={visible} style={{ transitionDelay: '80ms' }}>
          {t.contact.body}
        </p>

        <div className="ct__l">
          <a href={`mailto:${contactInfo.email}`}>
            <small>{t.contact.email}</small>
            <b dir="ltr">{contactInfo.email}</b>
          </a>
          <a href={`tel:${contactInfo.phoneHref}`}>
            <small>{t.contact.phone}</small>
            <b dir="ltr">{contactInfo.phone}</b>
          </a>
          <a href={contactInfo.github} target="_blank" rel="noreferrer">
            <small>{t.contact.github}</small>
            <b dir="ltr">sara-far-Git ↗</b>
          </a>
          <a href={contactInfo.cv} download>
            <small>{t.contact.cv}</small>
            <b dir="ltr">PDF ↓</b>
          </a>
        </div>
      </div>
    </section>
  )
}
