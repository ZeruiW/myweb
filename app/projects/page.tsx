import projectsData from '@/data/projectsData'
import { genPageMetadata } from 'app/seo'
import Image from 'next/image'

export const metadata = genPageMetadata({ title: 'Projects' })

// Project card component with enhanced design
function ProjectCard({
  project,
  featured = false,
}: {
  project: (typeof projectsData)[0]
  featured?: boolean
}) {
  return (
    <div
      className={`group relative overflow-hidden rounded-2xl border transition-all duration-300 hover:shadow-xl ${
        featured
          ? 'border-primary-200 to-primary-50/30 dark:border-primary-800/50 dark:to-primary-950/20 bg-gradient-to-br from-white dark:from-gray-900'
          : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/50'
      }`}
    >
      {/* Project Image */}
      {project.imgSrc && (
        <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
          <Image
            src={project.imgSrc}
            alt={project.title}
            fill
            sizes="(max-width: 1024px) 100vw, 50vw"
            className="object-cover transition-transform duration-300 group-hover:scale-105"
          />
          {/* Overlay gradient */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />

          {/* GitHub link overlay */}
          {project.github && (
            <a
              href={project.github}
              target="_blank"
              rel="noopener noreferrer"
              className="absolute right-4 bottom-4 flex items-center gap-2 rounded-lg bg-white/90 px-3 py-1.5 text-sm font-medium text-gray-900 opacity-0 backdrop-blur-sm transition-all duration-300 group-hover:opacity-100 hover:bg-white"
            >
              <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              GitHub
            </a>
          )}
        </div>
      )}

      {/* Content */}
      <div className="p-6">
        {/* Venue badge */}
        {project.venue && (
          <div className="mb-3">
            <span
              className={`inline-flex items-center rounded-md px-2.5 py-1 text-xs font-semibold ${
                project.venue.includes('A*') || project.venue.includes('Q1')
                  ? 'from-primary-500 to-primary-600 bg-gradient-to-r text-white'
                  : 'bg-gray-800 text-gray-100 dark:bg-gray-700'
              }`}
            >
              {project.venue}
            </span>
          </div>
        )}

        {/* Title */}
        <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-xl font-bold text-gray-900 dark:text-gray-100">
          {project.href ? (
            <a
              href={project.href}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {project.title}
            </a>
          ) : (
            project.title
          )}
        </h3>

        {/* Description */}
        <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
          {project.description}
        </p>

        {/* Tags */}
        {project.tags && (
          <div className="mt-4 flex flex-wrap gap-2">
            {project.tags.map((tag) => (
              <span
                key={tag}
                className="hover:bg-primary-100 hover:text-primary-700 dark:hover:bg-primary-900/50 dark:hover:text-primary-300 inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 transition-colors dark:bg-gray-800 dark:text-gray-400"
              >
                {tag}
              </span>
            ))}
          </div>
        )}

        {/* Footer with citations and links */}
        <div className="mt-5 flex items-center justify-between border-t border-gray-100 pt-4 dark:border-gray-800">
          {/* Citations */}
          {project.citations !== undefined && project.citations > 0 && (
            <span className="flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-500">
              <svg className="h-4 w-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"
                />
              </svg>
              <strong className="text-primary-600 dark:text-primary-400">
                {project.citations}
              </strong>{' '}
              citations
            </span>
          )}
          {project.citations === 0 && (
            <span className="text-xs text-gray-400 dark:text-gray-600">Newly published</span>
          )}

          {/* Action links */}
          <div className="flex gap-3">
            {project.href && (
              <a
                href={project.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-sm font-medium"
              >
                Paper ↗
              </a>
            )}
            {project.github && (
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-sm font-medium text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-gray-200"
              >
                Code ↗
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}

export default function Projects() {
  // Separate featured (top tier) projects from others
  const featuredProjects = projectsData.filter(
    (p) => p.venue?.includes('A*') || p.venue?.includes('Q1')
  )
  const otherProjects = projectsData.filter(
    (p) => !p.venue?.includes('A*') && !p.venue?.includes('Q1')
  )

  const totalCitations = projectsData.reduce((sum, p) => sum + (p.citations || 0), 0)

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Header */}
      <div className="space-y-4 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-13 dark:text-gray-100">
          Research Projects
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Open-source tools and frameworks for Explainable AI, Video Understanding, and Cloud AI
          Systems
        </p>

        {/* Quick stats */}
        <div className="mt-6 flex flex-wrap gap-6">
          <div className="flex items-center gap-2">
            <span className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
              {projectsData.length}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Projects</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
              {totalCitations}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Total Citations</span>
          </div>
          <div className="flex items-center gap-2">
            <span className="text-primary-600 dark:text-primary-400 text-2xl font-bold">
              {featuredProjects.length}
            </span>
            <span className="text-sm text-gray-600 dark:text-gray-400">Top Venue Papers</span>
          </div>
        </div>

        {/* Research themes */}
        <div className="mt-6 flex flex-wrap gap-3">
          <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full px-4 py-1.5 text-sm font-medium">
            Explainable AI
          </span>
          <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            Video Transformers
          </span>
          <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            Adversarial ML
          </span>
          <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            Cloud AI Services
          </span>
          <span className="rounded-full bg-gray-100 px-4 py-1.5 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
            MLOps
          </span>
        </div>
      </div>

      {/* Projects Grid */}
      <div className="py-12">
        {/* Featured Projects */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Featured Projects
            </h2>
            <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full px-3 py-1 text-sm font-medium">
              Top Venues
            </span>
          </div>
          <div className="grid gap-8 lg:grid-cols-2">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.title} project={project} featured />
            ))}
          </div>
        </section>

        {/* Other Projects */}
        {otherProjects.length > 0 && (
          <section>
            <div className="mb-6 flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">More Projects</h2>
            </div>
            <div className="grid gap-8 lg:grid-cols-2">
              {otherProjects.map((project) => (
                <ProjectCard key={project.title} project={project} />
              ))}
            </div>
          </section>
        )}

        {/* Call to action */}
        <div className="mt-12 rounded-2xl border border-gray-200 bg-gradient-to-br from-gray-50 to-white p-8 text-center dark:border-gray-800 dark:from-gray-900 dark:to-gray-900/50">
          <h3 className="text-xl font-bold text-gray-900 dark:text-gray-100">
            Interested in Collaboration?
          </h3>
          <p className="mt-2 text-gray-600 dark:text-gray-400">
            I'm always open to discussing research collaborations, especially in Explainable AI and
            Video Understanding.
          </p>
          <div className="mt-6 flex justify-center gap-4">
            <a
              href="https://github.com/ZeruiW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg bg-gray-900 px-5 py-2.5 text-sm font-medium text-white transition-colors hover:bg-gray-800 dark:bg-gray-100 dark:text-gray-900 dark:hover:bg-gray-200"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View on GitHub
            </a>
            <a
              href="mailto:zerui.wang@mail.concordia.ca"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition-colors hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Contact Me
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}
