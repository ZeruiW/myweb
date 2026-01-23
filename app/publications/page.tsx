import { genPageMetadata } from 'app/seo'
import publicationsData, { Publication } from '@/data/publicationsData'

export const metadata = genPageMetadata({ title: 'Publications' })

// Tier badge component
function TierBadge({
  tier,
  coreRank,
  quartile,
}: {
  tier: string
  coreRank?: string
  quartile?: string
}) {
  if (tier === 'top') {
    return (
      <span className="from-primary-500 to-primary-600 inline-flex items-center gap-1 rounded-md bg-gradient-to-r px-2 py-0.5 text-xs font-semibold text-white">
        {coreRank ? `CORE ${coreRank}` : quartile ? `${quartile} Journal` : 'Top Tier'}
      </span>
    )
  }
  if (tier === 'high') {
    return (
      <span className="inline-flex items-center gap-1 rounded-md bg-gray-800 px-2 py-0.5 text-xs font-semibold text-gray-100 dark:bg-gray-700">
        {coreRank ? `CORE ${coreRank}` : 'High Quality'}
      </span>
    )
  }
  return (
    <span className="inline-flex items-center gap-1 rounded-md bg-gray-200 px-2 py-0.5 text-xs font-semibold text-gray-700 dark:bg-gray-800 dark:text-gray-300">
      Conference
    </span>
  )
}

// Publication card component
function PublicationCard({ pub, index }: { pub: Publication; index: number }) {
  return (
    <div
      className={`group relative rounded-xl border p-6 transition-all duration-200 hover:shadow-lg ${
        pub.highlight
          ? 'border-primary-200 from-primary-50/50 dark:border-primary-800/50 dark:from-primary-950/30 bg-gradient-to-br to-transparent'
          : 'border-gray-200 bg-white dark:border-gray-800 dark:bg-gray-900/50'
      }`}
    >
      {/* Year badge */}
      <div className="absolute -top-3 left-6">
        <span className="inline-flex items-center rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
          {pub.year}
        </span>
      </div>

      <div className="mt-2">
        {/* Title */}
        <h3 className="group-hover:text-primary-600 dark:group-hover:text-primary-400 text-lg leading-tight font-semibold text-gray-900 dark:text-gray-100">
          {pub.doi ? (
            <a
              href={`https://doi.org/${pub.doi}`}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:underline"
            >
              {pub.title}
            </a>
          ) : (
            pub.title
          )}
        </h3>

        {/* Authors */}
        <p className="mt-2 text-sm text-gray-600 dark:text-gray-400">
          {pub.authors.split(', ').map((author, i, arr) => {
            const isZerui = author.includes('Zerui Wang')
            return (
              <span key={i}>
                {isZerui ? (
                  <strong className="text-primary-600 dark:text-primary-400">{author}</strong>
                ) : (
                  author
                )}
                {i < arr.length - 1 ? ', ' : ''}
              </span>
            )
          })}
        </p>

        {/* Venue */}
        <p className="mt-1 text-sm font-medium text-gray-700 dark:text-gray-300">{pub.venue}</p>

        {/* Abstract (if available) */}
        {pub.abstract && (
          <p className="mt-3 line-clamp-2 text-sm leading-relaxed text-gray-600 dark:text-gray-400">
            {pub.abstract}
          </p>
        )}

        {/* Tags */}
        <div className="mt-4 flex flex-wrap gap-2">
          {pub.tags.slice(0, 4).map((tag) => (
            <span
              key={tag}
              className="inline-flex items-center rounded-full bg-gray-100 px-2.5 py-0.5 text-xs font-medium text-gray-600 dark:bg-gray-800 dark:text-gray-400"
            >
              {tag}
            </span>
          ))}
        </div>

        {/* Metrics row */}
        <div className="mt-4 flex flex-wrap items-center gap-4 border-t border-gray-100 pt-4 dark:border-gray-800">
          {/* Tier badge */}
          <TierBadge tier={pub.tier} coreRank={pub.coreRank} quartile={pub.quartile} />

          {/* Impact Factor */}
          {pub.impactFactor && (
            <span className="text-xs text-gray-500 dark:text-gray-500">
              IF: <strong className="text-gray-700 dark:text-gray-300">{pub.impactFactor}</strong>
            </span>
          )}

          {/* Acceptance Rate */}
          {pub.acceptanceRate && (
            <span className="text-xs text-gray-500 dark:text-gray-500">
              Acceptance:{' '}
              <strong className="text-gray-700 dark:text-gray-300">{pub.acceptanceRate}</strong>
            </span>
          )}

          {/* Citations */}
          {pub.citations > 0 && (
            <span className="text-xs text-gray-500 dark:text-gray-500">
              Citations:{' '}
              <strong className="text-primary-600 dark:text-primary-400">{pub.citations}</strong>
            </span>
          )}

          {/* First Author badge */}
          {pub.isFirstAuthor && (
            <span className="ml-auto text-xs font-medium text-green-600 dark:text-green-400">
              First Author
            </span>
          )}
        </div>

        {/* Links */}
        {(pub.doi || pub.pdf || pub.arxiv) && (
          <div className="mt-3 flex gap-3">
            {pub.doi && (
              <a
                href={`https://doi.org/${pub.doi}`}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-xs font-medium"
              >
                DOI ↗
              </a>
            )}
            {pub.pdf && (
              <a
                href={pub.pdf}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-xs font-medium"
              >
                PDF ↗
              </a>
            )}
            {pub.arxiv && (
              <a
                href={pub.arxiv}
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary-600 hover:text-primary-700 dark:text-primary-400 dark:hover:text-primary-300 text-xs font-medium"
              >
                arXiv ↗
              </a>
            )}
          </div>
        )}
      </div>
    </div>
  )
}

export default function Publications() {
  const topTier = publicationsData.filter((p) => p.tier === 'top')
  const highTier = publicationsData.filter((p) => p.tier === 'high')
  const standardTier = publicationsData.filter((p) => p.tier === 'standard')

  return (
    <div className="divide-y divide-gray-200 dark:divide-gray-700">
      {/* Header */}
      <div className="space-y-4 pt-6 pb-8 md:space-y-5">
        <h1 className="text-3xl leading-9 font-extrabold tracking-tight text-gray-900 sm:text-4xl sm:leading-10 md:text-5xl md:leading-13 dark:text-gray-100">
          Publications
        </h1>
        <p className="text-lg leading-7 text-gray-500 dark:text-gray-400">
          Peer-reviewed research in Explainable AI, Video Understanding, and Cloud AI Systems
        </p>

        {/* Venue Highlights */}
        <div className="mt-6 flex flex-wrap justify-center gap-3">
          <span className="venue-badge venue-badge-top">ICSE A*</span>
          <span className="venue-badge venue-badge-top">IEEE TCC Q1</span>
          <span className="venue-badge venue-badge-top">ACM TOMM Q1</span>
          <span className="venue-badge venue-badge-top">IEEE Access Q1</span>
          <span className="venue-badge venue-badge-high">IEEE Big Data</span>
          <span className="venue-badge venue-badge-high">COMPSAC</span>
          <span className="venue-badge venue-badge-high">IEEE SSE</span>
        </div>
      </div>

      {/* Publications List */}
      <div className="py-12">
        {/* Top Tier Publications */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              Top Tier Publications
            </h2>
            <span className="bg-primary-100 text-primary-700 dark:bg-primary-900/50 dark:text-primary-300 rounded-full px-3 py-1 text-sm font-medium">
              {topTier.length} papers
            </span>
          </div>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            A* ranked conferences and Q1 journals with high impact factors
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {topTier.map((pub, index) => (
              <PublicationCard key={pub.id} pub={pub} index={index} />
            ))}
          </div>
        </section>

        {/* High Quality Publications */}
        <section className="mb-12">
          <div className="mb-6 flex items-center gap-3">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
              High Quality Publications
            </h2>
            <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
              {highTier.length} papers
            </span>
          </div>
          <p className="mb-6 text-sm text-gray-600 dark:text-gray-400">
            B-ranked conferences and reputable venues
          </p>
          <div className="grid gap-6 md:grid-cols-2">
            {highTier.map((pub, index) => (
              <PublicationCard key={pub.id} pub={pub} index={index} />
            ))}
          </div>
        </section>

        {/* Standard Publications */}
        {standardTier.length > 0 && (
          <section>
            <div className="mb-6 flex items-center gap-3">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Other Publications
              </h2>
              <span className="rounded-full bg-gray-100 px-3 py-1 text-sm font-medium text-gray-700 dark:bg-gray-800 dark:text-gray-300">
                {standardTier.length} papers
              </span>
            </div>
            <div className="grid gap-6 md:grid-cols-2">
              {standardTier.map((pub, index) => (
                <PublicationCard key={pub.id} pub={pub} index={index} />
              ))}
            </div>
          </section>
        )}

        {/* Citation Note */}
        <div className="mt-12 rounded-xl border border-gray-200 bg-gray-50 p-6 dark:border-gray-800 dark:bg-gray-900/30">
          <p className="text-center text-sm text-gray-600 dark:text-gray-400">
            Citation data from{' '}
            <a
              href="https://scholar.google.com/citations?user=QQpnwdoAAAAJ"
              target="_blank"
              rel="noopener noreferrer"
              className="text-primary-600 dark:text-primary-400 font-medium hover:underline"
            >
              Google Scholar
            </a>
            . Last updated: January 2025.
          </p>
        </div>
      </div>
    </div>
  )
}
