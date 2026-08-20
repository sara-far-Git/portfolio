import type { Project } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/useLanguage'
import { LivePreview } from './LivePreview'

export function ProjectCard({ project, delay = 0 }: { project: Project; delay?: number }) {
  const { lang, t } = useLanguage()
  const { ref, visible } = useReveal<HTMLElement>()

  const demo = project.links.demo
  const flow = project.flow?.[lang]
  const hasMedia = Boolean(demo || flow)

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

      <div className={`ent__cols${hasMedia ? '' : ' ent__cols--solo'}`}>
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

          <details className="det" open>
            <summary className="more">
              {t.work.readMore}
              <span className="chev" aria-hidden="true">
                ⌄
              </span>
            </summary>
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
          </details>

          <div className="plinks">
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

        {demo ? (
          <div className="ent__media">
            <LivePreview
              url={demo}
              name={project.name}
              shot={project.shot}
              openLabel={t.live.open}
              hint={t.live.hint}
            />
          </div>
        ) : (
          flow && (
            <div className="ent__media">
              <div className="flow">
                <div className="flow__bar">
                  <span className="mono">pipeline</span>
                </div>
                <ol className="flow__steps">
                  {flow.map((step, index) => (
                    <li key={step}>
                      <span className="mono">{String(index + 1).padStart(2, '0')}</span>
                      {step}
                    </li>
                  ))}
                </ol>
              </div>
            </div>
          )
        )}
      </div>
    </article>
  )
}
