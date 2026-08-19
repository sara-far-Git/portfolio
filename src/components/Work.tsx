import { projects } from '../data/projects'
import { useLanguage } from '../i18n/useLanguage'
import { ProjectCard } from './ProjectCard'
import { Reveal } from './Reveal'

export function Work() {
  const { t } = useLanguage()

  return (
    <section className="section" id="work">
      <div className="shell">
        <Reveal>
          <div className="section__head">
            <h2 className="section__title">{t.work.title}</h2>
            <p className="section__sub">{t.work.subtitle}</p>
          </div>
        </Reveal>

        <div className="projects">
          {projects.map((project, index) => (
            <Reveal key={project.id} delay={index * 60} className={project.featured ? 'project-slot--featured' : ''}>
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}
