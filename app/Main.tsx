import Link from '@/components/Link'
import siteMetadata from '@/data/siteMetadata'
import { formatDate } from 'pliny/utils/formatDate'
import projectsData from '@/data/projectsData'
import Image from 'next/image'

const MAX_DISPLAY = 3

// Research areas
const researchAreas = [
  {
    title: 'Explainable AI',
    description: 'Making AI decisions transparent and interpretable for trust and compliance',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
        />
      </svg>
    ),
  },
  {
    title: 'Video Understanding',
    description: 'Transformer models for real-time video analysis with spatio-temporal attention',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M15 10l4.553-2.276A1 1 0 0121 8.618v6.764a1 1 0 01-1.447.894L15 14M5 18h8a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v8a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: 'AI Security',
    description: 'Adversarial attacks and defenses for robust neural network systems',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
        />
      </svg>
    ),
  },
  {
    title: 'Cloud AI Services',
    description: 'Production XAI deployment on Azure, GCP, and AWS platforms',
    icon: (
      <svg className="h-6 w-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeWidth={1.5}
          d="M3 15a4 4 0 004 4h9a5 5 0 10-.1-9.999 5.002 5.002 0 10-9.78 2.096A4.001 4.001 0 003 15z"
        />
      </svg>
    ),
  },
]

// Featured venues
const featuredVenues = [
  { name: 'ICSE 2024', rank: 'A*', type: 'Conference' },
  { name: 'IEEE TCC', rank: 'Q1', type: 'Journal', if: '5.95' },
  { name: 'ACM TOMM', rank: 'Q1', type: 'Journal', if: '6.0' },
  { name: 'IEEE Access', rank: 'Q1', type: 'Journal', if: '3.6' },
  { name: 'IEEE Big Data', rank: 'B', type: 'Conference' },
  { name: 'COMPSAC', rank: 'B', type: 'Conference' },
]

export default function Home({ posts }) {
  return (
    <>
      {/* Hero Section */}
      <section className="pt-6 pb-12 md:pt-10 md:pb-16">
        <div className="flex flex-col-reverse gap-8 md:flex-row md:items-center md:justify-between">
          <div className="flex-1 space-y-4">
            <p className="text-primary-500 text-sm font-medium tracking-wider uppercase">
              AI Engineer & Researcher
            </p>
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl dark:text-gray-100">
              <span className="gradient-text">Zerui Wang</span>
            </h1>
            <p className="max-w-2xl text-xl leading-relaxed text-gray-600 dark:text-gray-400">
              Building{' '}
              <span className="font-semibold text-gray-900 dark:text-gray-100">
                explainable & trustworthy AI systems
              </span>{' '}
              that humans can understand and trust. Ph.D. in Computer Engineering from Concordia
              University.
            </p>
            <div className="flex flex-wrap gap-3 pt-2">
              <Link
                href="/publications"
                className="bg-primary-500 hover:bg-primary-600 hover:shadow-primary-500/25 inline-flex items-center gap-2 rounded-lg px-5 py-2.5 text-sm font-medium text-white transition hover:shadow-lg"
              >
                View Publications
                <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17 8l4 4m0 0l-4 4m4-4H3"
                  />
                </svg>
              </Link>
              <Link
                href="/projects"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800"
              >
                Projects
              </Link>
              <Link
                href="/about"
                className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-5 py-2.5 text-sm font-medium text-gray-700 transition hover:border-gray-400 hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:border-gray-600 dark:hover:bg-gray-800"
              >
                About Me
              </Link>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-5 pt-4">
              <a
                href="https://github.com/ZeruiW"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-gray-900 dark:hover:text-gray-100"
                aria-label="GitHub"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path
                    fillRule="evenodd"
                    d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                    clipRule="evenodd"
                  />
                </svg>
              </a>
              <a
                href="https://scholar.google.com/citations?user=QQpnwdoAAAAJ"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-gray-900 dark:hover:text-gray-100"
                aria-label="Google Scholar"
              >
                <svg className="h-6 w-6" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 24a7 7 0 1 1 0-14 7 7 0 0 1 0 14zm0-24L0 9.5l4.838 3.94A8 8 0 0 1 12 9a8 8 0 0 1 7.162 4.44L24 9.5z" />
                </svg>
              </a>
              <a
                href="https://www.linkedin.com/in/zerui/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-400 transition hover:text-gray-900 dark:hover:text-gray-100"
                aria-label="LinkedIn"
              >
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </a>
              <a
                href="mailto:wangzerui418@gmail.com"
                className="text-gray-400 transition hover:text-gray-900 dark:hover:text-gray-100"
                aria-label="Email"
              >
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={1.5}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Research Areas */}
      <section className="py-8">
        <h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
          Research Focus
        </h2>
        <div className="grid gap-4 sm:grid-cols-2">
          {researchAreas.map((area) => (
            <div
              key={area.title}
              className="group hover:border-primary-300 dark:hover:border-primary-700 flex items-start gap-4 rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50"
            >
              <div className="bg-primary-100 text-primary-600 group-hover:bg-primary-500 dark:bg-primary-900/50 dark:text-primary-400 dark:group-hover:bg-primary-600 flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-xl transition-colors group-hover:text-white">
                {area.icon}
              </div>
              <div>
                <h3 className="font-semibold text-gray-900 dark:text-gray-100">{area.title}</h3>
                <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">{area.description}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Featured Venues */}
      <section className="py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Publication Venues
          </h2>
          <Link
            href="/publications"
            className="text-primary-500 hover:text-primary-600 text-sm font-medium"
          >
            All publications →
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {featuredVenues.map((venue) => (
            <div
              key={venue.name}
              className="hover:border-primary-300 dark:hover:border-primary-700 flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-4 py-2.5 transition-all duration-200 hover:shadow-sm dark:border-gray-800 dark:bg-gray-900/50"
            >
              <span
                className={`rounded px-2 py-0.5 text-xs font-bold text-white ${
                  venue.rank === 'A*' || venue.rank === 'Q1'
                    ? 'from-primary-500 to-primary-600 bg-gradient-to-r'
                    : 'bg-gray-700 dark:bg-gray-600'
                }`}
              >
                {venue.rank}
              </span>
              <span className="font-medium text-gray-900 dark:text-gray-100">{venue.name}</span>
              {venue.if && (
                <span className="text-xs text-gray-500 dark:text-gray-500">IF: {venue.if}</span>
              )}
            </div>
          ))}
        </div>
      </section>

      {/* Featured Projects */}
      <section className="py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Featured Projects
          </h2>
          <Link
            href="/projects"
            className="text-primary-500 hover:text-primary-600 text-sm font-medium"
          >
            View all →
          </Link>
        </div>
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
          {projectsData.slice(0, 3).map((project) => (
            <Link
              key={project.title}
              href={project.href || '#'}
              className="hover-lift group overflow-hidden rounded-xl border border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/50"
            >
              {project.imgSrc && (
                <div className="relative aspect-video overflow-hidden bg-gray-100 dark:bg-gray-800">
                  <Image
                    src={project.imgSrc}
                    alt={project.title}
                    fill
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover transition-transform duration-300 group-hover:scale-105"
                  />
                </div>
              )}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2">
                  <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 font-semibold text-gray-900 dark:text-gray-100">
                    {project.title}
                  </h3>
                  {project.citations !== undefined && project.citations > 0 && (
                    <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 shrink-0 rounded-full px-2 py-0.5 text-xs font-medium">
                      {project.citations} citations
                    </span>
                  )}
                </div>
                {project.venue && (
                  <p className="text-primary-500 mt-1 text-xs font-medium">{project.venue}</p>
                )}
                <p className="mt-2 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                  {project.description}
                </p>
                {project.tags && (
                  <div className="mt-3 flex flex-wrap gap-1.5">
                    {project.tags.slice(0, 3).map((tag) => (
                      <span
                        key={tag}
                        className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* Latest Posts */}
      <section className="py-8">
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-gray-100">
            Latest Posts
          </h2>
          <Link
            href="/blog"
            className="text-primary-500 hover:text-primary-600 text-sm font-medium"
          >
            View all →
          </Link>
        </div>
        <div className="space-y-4">
          {!posts.length && <p className="text-gray-500 dark:text-gray-400">No posts found.</p>}
          {posts.slice(0, MAX_DISPLAY).map((post) => {
            const { slug, date, title, summary, tags } = post
            return (
              <Link
                key={slug}
                href={`/blog/${slug}`}
                className="group hover:border-primary-300 dark:hover:border-primary-700 block rounded-xl border border-gray-200 bg-white p-5 transition-all duration-200 hover:shadow-md dark:border-gray-800 dark:bg-gray-900/50"
              >
                <div className="flex items-start justify-between gap-4">
                  <div className="flex-1">
                    <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 font-semibold text-gray-900 dark:text-gray-100">
                      {title}
                    </h3>
                    <p className="mt-1 line-clamp-2 text-sm text-gray-600 dark:text-gray-400">
                      {summary}
                    </p>
                    <div className="mt-3 flex flex-wrap items-center gap-2">
                      <time dateTime={date} className="text-xs text-gray-500 dark:text-gray-500">
                        {formatDate(date, siteMetadata.locale)}
                      </time>
                      {tags.slice(0, 3).map((tag) => (
                        <span
                          key={tag}
                          className="rounded-full bg-gray-100 px-2.5 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>
                  <svg
                    className="group-hover:text-primary-500 h-5 w-5 shrink-0 text-gray-300 transition-transform group-hover:translate-x-1 dark:text-gray-700"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M9 5l7 7-7 7"
                    />
                  </svg>
                </div>
              </Link>
            )
          })}
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-12">
        <div className="from-primary-50 dark:from-primary-950/30 rounded-2xl border border-gray-200 bg-gradient-to-br to-white p-8 text-center dark:border-gray-800 dark:to-gray-900/50">
          <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
            Interested in Collaboration?
          </h2>
          <p className="mx-auto mt-2 max-w-lg text-gray-600 dark:text-gray-400">
            I'm always open to discussing research collaborations, consulting opportunities, or just
            chatting about AI and explainability.
          </p>
          <div className="mt-6 flex flex-wrap justify-center gap-4">
            <a
              href="mailto:wangzerui418@gmail.com"
              className="bg-primary-500 hover:bg-primary-600 hover:shadow-primary-500/25 inline-flex items-center gap-2 rounded-lg px-6 py-3 text-sm font-medium text-white transition hover:shadow-lg"
            >
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                />
              </svg>
              Get in Touch
            </a>
            <a
              href="https://github.com/ZeruiW"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-300 dark:hover:bg-gray-800"
            >
              <svg className="h-5 w-5" fill="currentColor" viewBox="0 0 24 24">
                <path
                  fillRule="evenodd"
                  d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                  clipRule="evenodd"
                />
              </svg>
              View GitHub
            </a>
          </div>
        </div>
      </section>
    </>
  )
}
