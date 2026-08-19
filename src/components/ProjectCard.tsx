import { useState } from 'react'
import type { Project } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/useLanguage'
import { LivePreview } from './LivePreview'

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const { lang, t } = useLanguage()
  const { ref, visible } = useReveal<HTMLElement>()
  const [open, setOpen] = useState(false)

  const demo = project.links.demo

  return (
    <article
      className="ent rv"
      ref={ref}
      data-v={visible}
      style={{ transitionDelay: `${delay}ms` }}
    >
      <div className="ent__meta">
        <span className="ent__per">
          <bdi dir="ltr">{project.period[lang]}</bdi>
        </span>
        <span className="ent__role">{project.role[lang]}</span>
      </div>

      <div className={`ent__cols${demo ? '' : ' ent__cols--solo'}`}>
        <div>
          <h3 className="ent__name">{project.name}</h3>
          <p className="ent__tag">{project.tagline[lang]}</p>
          <p className="ent__sum">{project.summary[lang]}</p>

          <div className="mets">
            {project.metrics.map((metric) => (
              <div key={metric.value + metric.label[lang]}>
                <b>
                  <bdi dir="ltr">{metric.value}</bdi>
                </b>
                <span>{metric.label[lang]}</span>
              </div>
            ))}
          </div>

          <div className="det" data-open={open}>
            <div>
              <ul className="hl">
                {project.highlights[lang].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>

              <p className="mono stackl">{t.work.stackLabel}</p>
              <div className="tags">
                {project.stack.map((tech) => (
                  <span className="tag" key={tech}>
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          <div className="plinks">
            <button className="more" onClick={() => setOpen((prev) => !prev)} aria-expanded={open}>
              {open ? t.work.readLess : t.work.readMore}
              <span className="chev" data-open={open} aria-hidden="true">
                ⌄
              </span>
            </button>

            {demo && (
              <a className="tl-link" href={demo} target="_blank" rel="noreferrer">
                {t.work.viewDemo} ↗
              </a>
            )}
            {project.links.repo && (
              <a className="tl-link" href={project.links.repo} target="_blank" rel="noreferrer">
                {t.work.viewRepo} ↗
              </a>
            )}
            {project.links.note && <span className="pnote">{project.links.note[lang]}</span>}
          </div>
        </div>

        {demo && (
          <div className="ent__media">
            <LivePreview url={demo} name={project.name} />
          </div>
        )}
      </div>
    </article>
  )
}
