import { genPageMetadata } from 'app/seo'
import Image from 'next/image'
import experienceData, { presentationsData, membershipsData } from '@/data/experienceData'
import { publicationStats } from '@/data/publicationsData'
import reviewsData, { reviewStats, reviewRecognition } from '@/data/reviewsData'
import SocialIcon from '@/components/social-icons'

export const metadata = genPageMetadata({ title: 'About' })

// Timeline item component
function TimelineItem({ experience }: { experience: (typeof experienceData)[0] }) {
  const typeColors = {
    work: 'bg-primary-500',
    education: 'bg-green-500',
    research: 'bg-amber-500',
  }

  const typeLabels = {
    work: 'Work',
    education: 'Education',
    research: 'Academic',
  }

  return (
    <div className="relative pl-8 pb-8 last:pb-0">
      {/* Timeline line */}
      <div className="absolute left-[11px] top-3 h-full w-0.5 bg-gray-200 dark:bg-gray-800" />

      {/* Timeline dot */}
      <div className={`absolute left-0 top-1.5 h-6 w-6 rounded-full ${typeColors[experience.type]} flex items-center justify-center ring-4 ring-white dark:ring-gray-950`}>
        {experience.type === 'work' && (
          <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
          </svg>
        )}
        {experience.type === 'education' && (
          <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path d="M12 14l9-5-9-5-9 5 9 5z" />
            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
          </svg>
        )}
        {experience.type === 'research' && (
          <svg className="h-3 w-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
          </svg>
        )}
      </div>

      {/* Content */}
      <div className="ml-4">
        {/* Header */}
        <div className="flex flex-wrap items-center gap-2">
          <span className={`inline-flex items-center rounded-full px-2 py-0.5 text-xs font-medium ${
            experience.current
              ? 'bg-green-100 text-green-700 dark:bg-green-900/50 dark:text-green-300'
              : 'bg-gray-100 text-gray-600 dark:bg-gray-800 dark:text-gray-400'
          }`}>
            {experience.current ? 'Current' : typeLabels[experience.type]}
          </span>
          <span className="text-sm text-gray-500 dark:text-gray-500">{experience.period}</span>
        </div>

        {/* Title */}
        <h3 className="mt-2 text-lg font-bold text-gray-900 dark:text-gray-100">
          {experience.title}
        </h3>

        {/* Company & Location */}
        <p className="text-sm font-medium text-primary-600 dark:text-primary-400">
          {experience.company}
        </p>
        <p className="text-xs text-gray-500 dark:text-gray-500">{experience.location}</p>

        {/* Description */}
        {experience.description.length > 0 && (
          <ul className="mt-3 space-y-1">
            {experience.description.map((item, i) => (
              <li key={i} className="flex items-start gap-2 text-sm text-gray-600 dark:text-gray-400">
                <span className="mt-1.5 h-1 w-1 flex-shrink-0 rounded-full bg-gray-400 dark:bg-gray-600" />
                {item}
              </li>
            ))}
          </ul>
        )}

        {/* Skills */}
        {experience.skills && experience.skills.length > 0 && (
          <div className="mt-3 flex flex-wrap gap-1.5">
            {experience.skills.map((skill) => (
              <span
                key={skill}
                className="inline-flex rounded-full bg-gray-100 px-2 py-0.5 text-xs text-gray-600 dark:bg-gray-800 dark:text-gray-400"
              >
                {skill}
              </span>
            ))}
          </div>
        )}

        {/* Achievements */}
        {experience.achievements && experience.achievements.length > 0 && (
          <div className="mt-3 grid grid-cols-2 gap-2 sm:grid-cols-4">
            {experience.achievements.map((achievement) => (
              <div
                key={achievement}
                className="rounded-lg bg-primary-50 px-3 py-2 text-center dark:bg-primary-950/30"
              >
                <span className="text-xs font-medium text-primary-700 dark:text-primary-300">
                  {achievement}
                </span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  )
}

// Stats card
function StatCard({ value, label, icon }: { value: string | number; label: string; icon: React.ReactNode }) {
  return (
    <div className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/50">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-primary-100 text-primary-600 dark:bg-primary-900/50 dark:text-primary-400">
          {icon}
        </div>
        <div>
          <div className="text-2xl font-bold text-gray-900 dark:text-gray-100">{value}</div>
          <div className="text-xs text-gray-500 dark:text-gray-500">{label}</div>
        </div>
      </div>
    </div>
  )
}

export default function About() {
  const workExperience = experienceData.filter((e) => e.type === 'work')
  const education = experienceData.filter((e) => e.type === 'education')
  const academic = experienceData.filter((e) => e.type === 'research')

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Header Section */}
      <div className="space-y-2 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl font-extrabold leading-9 tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-13 dark:text-gray-100">
          About
        </h1>
      </div>

      {/* Profile Section */}
      <div className="py-12">
        <div className="grid gap-8 lg:grid-cols-3">
          {/* Left Column - Photo & Basic Info */}
          <div className="lg:col-span-1">
            <div className="sticky top-8">
              {/* Profile Card */}
              <div className="rounded-2xl border border-gray-200 bg-white p-6 text-center dark:border-gray-800 dark:bg-gray-900/50">
                <div className="mx-auto h-32 w-32 overflow-hidden rounded-full bg-gradient-to-br from-primary-500 to-primary-600">
                  <Image
                    src="/static/images/avatar.png"
                    alt="Zerui Wang"
                    width={128}
                    height={128}
                    className="h-full w-full object-cover"
                  />
                </div>
                <h2 className="mt-4 text-2xl font-bold text-gray-900 dark:text-gray-100">
                  Zerui Wang
                </h2>
                <p className="text-primary-600 dark:text-primary-400">AI Engineer & Researcher</p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Ph.D. in Computer Engineering
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Concordia University, Canada
                </p>

                {/* Social Links */}
                <div className="mt-4 flex justify-center gap-4">
                  <SocialIcon kind="mail" href="mailto:wangzerui418@gmail.com" size={6} />
                  <SocialIcon kind="github" href="https://github.com/ZeruiW" size={6} />
                  <SocialIcon kind="linkedin" href="https://www.linkedin.com/in/zerui/" size={6} />
                </div>

                {/* Quick Stats */}
                <div className="mt-6 grid grid-cols-2 gap-3">
                  <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
                    <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                      {publicationStats.totalPapers}
                    </div>
                    <div className="text-xs text-gray-500">Papers</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
                    <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                      {publicationStats.totalCitations}
                    </div>
                    <div className="text-xs text-gray-500">Citations</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
                    <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                      {reviewStats.totalReviews}+
                    </div>
                    <div className="text-xs text-gray-500">Reviews</div>
                  </div>
                  <div className="rounded-lg bg-gray-50 p-3 dark:bg-gray-800/50">
                    <div className="text-xl font-bold text-primary-600 dark:text-primary-400">
                      {publicationStats.hIndex}
                    </div>
                    <div className="text-xs text-gray-500">h-index</div>
                  </div>
                </div>
              </div>

              {/* Professional Memberships */}
              <div className="mt-6 rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
                <h3 className="mb-4 text-lg font-bold text-gray-900 dark:text-gray-100">
                  Professional Memberships
                </h3>
                <div className="space-y-4">
                  {membershipsData.map((membership) => (
                    <div key={membership.organization} className="flex items-start gap-3">
                      <div className="mt-1 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-lg bg-gray-100 dark:bg-gray-800">
                        <svg className="h-4 w-4 text-gray-600 dark:text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                        </svg>
                      </div>
                      <div>
                        <p className="text-sm font-medium text-gray-900 dark:text-gray-100">
                          {membership.organization}
                        </p>
                        <p className="text-xs text-gray-500 dark:text-gray-500">
                          {membership.role} • Since {membership.since}
                        </p>
                        {membership.note && (
                          <p className="text-xs text-primary-600 dark:text-primary-400">
                            {membership.note}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>

          {/* Right Column - Experience Timeline */}
          <div className="lg:col-span-2 space-y-12">
            {/* Research Interests */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Research Interests
              </h2>
              <p className="text-gray-600 dark:text-gray-400 leading-relaxed mb-6">
                I specialize in making AI systems more <strong className="text-gray-900 dark:text-gray-100">transparent</strong>, <strong className="text-gray-900 dark:text-gray-100">trustworthy</strong>, and <strong className="text-gray-900 dark:text-gray-100">secure</strong>. My work bridges the gap between complex AI models and human understanding, enabling stakeholders to trust and effectively use AI systems.
              </p>
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Explainable AI (XAI)</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Developing interpretability methods for complex AI models, enabling trust and compliance in production systems.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Video Understanding</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Building transformer-based models for real-time video analysis with spatio-temporal attention mechanisms.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">AI Security</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Investigating adversarial attacks and defenses for video models to improve system robustness.
                  </p>
                </div>
                <div className="rounded-xl border border-gray-200 p-4 dark:border-gray-800">
                  <h4 className="font-semibold text-gray-900 dark:text-gray-100">Cloud AI Services</h4>
                  <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                    Creating frameworks for deploying XAI in production environments across Azure, GCP, and AWS.
                  </p>
                </div>
              </div>
            </section>

            {/* Work Experience */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Work Experience
              </h2>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
                {workExperience.map((exp) => (
                  <TimelineItem key={exp.id} experience={exp} />
                ))}
              </div>
            </section>

            {/* Education */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Education
              </h2>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
                {education.map((exp) => (
                  <TimelineItem key={exp.id} experience={exp} />
                ))}
              </div>
            </section>

            {/* Academic Activities */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Academic Activities
              </h2>
              <div className="rounded-2xl border border-gray-200 bg-white p-6 dark:border-gray-800 dark:bg-gray-900/50">
                {academic.map((exp) => (
                  <TimelineItem key={exp.id} experience={exp} />
                ))}
              </div>
            </section>

            {/* Presentations & Workshops */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Presentations & Workshops
              </h2>
              <div className="space-y-4">
                {presentationsData.map((pres, i) => (
                  <div
                    key={i}
                    className="rounded-xl border border-gray-200 bg-white p-5 dark:border-gray-800 dark:bg-gray-900/50"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div>
                        <span className="inline-flex items-center rounded-full bg-primary-100 px-2.5 py-0.5 text-xs font-medium text-primary-700 dark:bg-primary-900/50 dark:text-primary-300">
                          {pres.type}
                        </span>
                        <h4 className="mt-2 font-semibold text-gray-900 dark:text-gray-100">
                          {pres.title}
                        </h4>
                        <p className="mt-1 text-sm text-gray-600 dark:text-gray-400">
                          {pres.venue}
                        </p>
                      </div>
                      <div className="text-right text-sm text-gray-500 dark:text-gray-500">
                        <div>{pres.date}</div>
                        <div>{pres.location}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* Peer Review Service */}
            <section>
              <h2 className="mb-6 text-2xl font-bold text-gray-900 dark:text-gray-100">
                Peer Review Service
              </h2>
              <div className="mb-6 grid grid-cols-2 gap-4 sm:grid-cols-4">
                <StatCard
                  value={`${reviewStats.totalReviews}+`}
                  label="Total Reviews"
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                    </svg>
                  }
                />
                <StatCard
                  value={reviewStats.uniqueVenues}
                  label="Venues"
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                    </svg>
                  }
                />
                <StatCard
                  value={reviewStats.topTierVenues}
                  label="Top-Tier Venues"
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z" />
                    </svg>
                  }
                />
                <StatCard
                  value={reviewStats.journalReviews}
                  label="Journal Reviews"
                  icon={
                    <svg className="h-5 w-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                    </svg>
                  }
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {reviewsData
                  .sort((a, b) => (b.tier === 'top' ? 1 : 0) - (a.tier === 'top' ? 1 : 0))
                  .slice(0, 6)
                  .map((venue) => (
                    <div
                      key={venue.shortName}
                      className="rounded-xl border border-gray-200 bg-white p-4 dark:border-gray-800 dark:bg-gray-900/50"
                    >
                      <div className="flex items-start justify-between">
                        <div>
                          <span
                            className={`inline-flex items-center rounded-md px-2 py-0.5 text-xs font-semibold ${
                              venue.tier === 'top'
                                ? 'bg-gradient-to-r from-primary-500 to-primary-600 text-white'
                                : venue.tier === 'high'
                                ? 'bg-gray-800 text-gray-100 dark:bg-gray-700'
                                : 'bg-gray-200 text-gray-700 dark:bg-gray-800 dark:text-gray-300'
                            }`}
                          >
                            {venue.type === 'conference' ? venue.coreRank || 'Conf' : venue.impactFactor ? `IF ${venue.impactFactor}` : 'Journal'}
                          </span>
                          <h4 className="mt-2 font-medium text-gray-900 dark:text-gray-100">
                            {venue.shortName}
                          </h4>
                          <p className="text-xs text-gray-500 dark:text-gray-500 line-clamp-1">
                            {venue.name}
                          </p>
                        </div>
                        <div className="text-right">
                          <div className="text-2xl font-bold text-primary-600 dark:text-primary-400">
                            {venue.reviewCount}
                          </div>
                          <div className="text-xs text-gray-500">reviews</div>
                        </div>
                      </div>
                    </div>
                  ))}
              </div>

              {/* Recognition */}
              {reviewRecognition.length > 0 && (
                <div className="mt-6">
                  <h4 className="mb-4 text-lg font-semibold text-gray-900 dark:text-gray-100">
                    Recognition
                  </h4>
                  <div className="flex flex-wrap gap-3">
                    {reviewRecognition.map((rec, i) => (
                      <span
                        key={i}
                        className="inline-flex items-center gap-2 rounded-full bg-green-50 px-4 py-2 text-sm text-green-700 dark:bg-green-900/30 dark:text-green-300"
                      >
                        <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                        </svg>
                        {rec.title} - {rec.issuer}
                      </span>
                    ))}
                  </div>
                </div>
              )}
            </section>
          </div>
        </div>
      </div>
    </div>
  )
}
