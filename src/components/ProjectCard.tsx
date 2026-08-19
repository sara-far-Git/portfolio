import { useState } from 'react'
import type { Project } from '../data/projects'
import { useLanguage } from '../i18n/useLanguage'

export function ProjectCard({ project }: { project: Project }) {
  const { lang, t } = useLanguage()
  const [open, setOpen] = useState(false)

  return (
    <article
      className="project"
      style={{ ['--project-accent' as string]: project.accent }}
    >
      <div className="project__top">
        <h3 className="project__name">{project.name}</h3>
        <span className="project__year">{project.year}</span>
      </div>

      <p className="project__tagline">{project.tagline[lang]}</p>
      <p className="project__summary">{project.summary[lang]}</p>
      <p className="project__role">{project.role[lang]}</p>

      <div className="project__metrics">
        {project.metrics.map((metric) => (
          <div key={metric.value + metric.label[lang]}>
            <div className="project__metric-value">{metric.value}</div>
            <div className="project__metric-label">{metric.label[lang]}</div>
          </div>
        ))}
      </div>

      <div className="project__details" data-open={open}>
        <div className="project__details-inner">
          <ul className="project__highlights">
            {project.highlights[lang].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>

          <p className="project__stack-label">{t.work.stackLabel}</p>
          <div className="tags">
            {project.stack.map((tech) => (
              <span className="tag" dir="ltr" key={tech}>
                {tech}
              </span>
            ))}
          </div>
        </div>
      </div>

      <div className="project__actions">
        <button className="link-btn" onClick={() => setOpen((prev) => !prev)} aria-expanded={open}>
          {open ? t.work.readLess : t.work.readMore}
          <span className="chev" data-open={open} aria-hidden="true">
            ⌄
          </span>
        </button>

        {project.links.demo && (
          <a className="link-btn" href={project.links.demo} target="_blank" rel="noreferrer">
            {t.work.viewDemo} ↗
          </a>
        )}
        {project.links.repo && (
          <a className="link-btn link-btn--ghost" href={project.links.repo} target="_blank" rel="noreferrer">
            {t.work.viewRepo} ↗
          </a>
        )}
        {project.links.note && <span className="project__note">{project.links.note[lang]}</span>}
      </div>
    </article>
  )
}
