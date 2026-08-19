import type { Project } from '../data/projects'
import { projects } from '../data/projects'
import { useReveal } from '../hooks/useReveal'
import { useLanguage } from '../i18n/useLanguage'
import { ProjectCard } from './ProjectCard'

interface EntrySectionProps {
  id: string
  title: string
  subtitle: string
  items: Project[]
}

function EntrySection({ id, title, subtitle, items }: EntrySectionProps) {
  const { ref, visible } = useReveal<HTMLDivElement>()

  return (
    <section className="sec shell" id={id}>
      <div className="sec__head rv" ref={ref} data-v={visible}>
        <h2>{title}</h2>
        <p>{subtitle}</p>
      </div>

      <div>
        {items.map((project, index) => (
          <ProjectCard key={project.id} project={project} delay={index * 60} />
        ))}
      </div>
    </section>
  )
}

export function Work() {
  const { t } = useLanguage()

  return (
    <EntrySection
      id="work"
      title={t.work.title}
      subtitle={t.work.subtitle}
      items={projects.filter((project) => project.featured)}
    />
  )
}

export function Projects() {
  const { t } = useLanguage()

  return (
    <EntrySection
      id="projects"
      title={t.work.projTitle}
      subtitle={t.work.projSubtitle}
      items={projects.filter((project) => !project.featured)}
    />
  )
}
