import { contactInfo } from '../data/content'
import { useLanguage } from '../i18n/useLanguage'
import { Reveal } from './Reveal'

export function Contact() {
  const { t } = useLanguage()

  return (
    <section className="section" id="contact">
      <div className="shell">
        <Reveal>
          <div className="contact">
            <h2 className="contact__title">{t.contact.title}</h2>
            <p className="contact__body">{t.contact.body}</p>

            <div className="contact__links">
              <a className="btn btn--primary" href={`mailto:${contactInfo.email}`}>
                {contactInfo.email}
              </a>
              <a className="btn" href={`tel:${contactInfo.phoneHref}`} dir="ltr">
                {contactInfo.phone}
              </a>
              <a className="btn" href={contactInfo.github} target="_blank" rel="noreferrer">
                {t.contact.github} ↗
              </a>
              <a className="btn" href={contactInfo.cv} download>
                {t.contact.cv}
              </a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}
