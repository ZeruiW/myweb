export interface ReviewVenue {
  name: string
  shortName: string
  type: 'journal' | 'conference'
  tier: 'top' | 'high' | 'standard'
  impactFactor?: number
  coreRank?: string
  hIndex?: number
  reviewCount: number
  includesRevisions?: boolean
}

export const reviewsData: ReviewVenue[] = [
  // ============ TOP-TIER JOURNALS ============
  {
    name: 'IEEE Transactions on Services Computing',
    shortName: 'IEEE TSC',
    type: 'journal',
    tier: 'top',
    impactFactor: 7.09,
    hIndex: 95,
    reviewCount: 2,
    includesRevisions: true,
  },
  {
    name: 'Applied Intelligence',
    shortName: 'APIN',
    type: 'journal',
    tier: 'high',
    impactFactor: 3.5,
    hIndex: 108,
    reviewCount: 9,
    includesRevisions: true,
  },
  {
    name: 'Journal of Computer Virology and Hacking Techniques',
    shortName: 'JCVHT',
    type: 'journal',
    tier: 'high',
    reviewCount: 3,
  },
  {
    name: 'Journal of Supercomputing',
    shortName: 'TJSC',
    type: 'journal',
    tier: 'high',
    reviewCount: 3,
  },
  {
    name: 'Journal of Digital Forensics, Security and Law',
    shortName: 'JDFSL',
    type: 'journal',
    tier: 'standard',
    reviewCount: 3,
  },
  {
    name: 'Artificial Intelligence and Applications',
    shortName: 'AIA',
    type: 'journal',
    tier: 'standard',
    reviewCount: 3,
  },

  // ============ TOP-TIER CONFERENCES ============
  {
    name: 'AAAI Conference on Artificial Intelligence',
    shortName: 'AAAI',
    type: 'conference',
    tier: 'top',
    coreRank: 'A*',
    hIndex: 180,
    reviewCount: 5,
  },
  {
    name: 'IEEE International Joint Conference on Neural Networks',
    shortName: 'IJCNN',
    type: 'conference',
    tier: 'high',
    coreRank: 'B',
    reviewCount: 4,
  },
  {
    name: 'International Conference on Advanced Computing, Data Science and Applications',
    shortName: 'ACDSA',
    type: 'conference',
    tier: 'standard',
    reviewCount: 3,
  },
]

// Statistics
export const reviewStats = {
  totalReviews: 35,
  journalReviews: 23,
  conferenceReviews: 12,
  topTierVenues: 3,
  uniqueVenues: 9,
  withRevisions: 11,
}

// Recognition
export const reviewRecognition = [
  {
    title: 'Official Reviewer Certificate',
    issuer: 'Springer Nature - Journal of Supercomputing',
    date: 'October 2025',
    type: 'certificate',
  },
  {
    title: 'Personal Acknowledgement Letter',
    issuer: 'AAAI Workshop Committee',
    date: 'January 2025',
    type: 'letter',
  },
  {
    title: 'Web of Science Recognition',
    issuer: 'IEEE Transactions on Services Computing',
    date: 'December 2024',
    type: 'recognition',
  },
]

export default reviewsData
