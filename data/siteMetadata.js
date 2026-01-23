/** @type {import("pliny/config").PlinyConfig } */
const siteMetadata = {
  title: 'Zerui Wang | AI Engineer & Researcher',
  author: 'Zerui Wang',
  headerTitle: 'Zerui Wang',
  description: 'AI Engineer specializing in Explainable AI, Video Understanding, and Transformer Models. PhD in Computer Engineering from Concordia University.',
  language: 'en-us',
  theme: 'dark', // system, dark or light
  siteUrl: 'https://zeruiwang.com', // Update with your actual domain
  siteRepo: 'https://github.com/ZeruiW/zeruiwang.com',
  siteLogo: `${process.env.BASE_PATH || ''}/static/images/logo.png`,
  socialBanner: `${process.env.BASE_PATH || ''}/static/images/twitter-card.png`,
  email: 'wangzerui418@gmail.com',
  github: 'https://github.com/ZeruiW',
  linkedin: 'https://www.linkedin.com/in/zerui/',
  // Additional links
  googleScholar: 'https://scholar.google.com/citations?user=QQpnwdoAAAAJ',
  locale: 'en-US',
  // set to true if you want a navbar fixed to the top
  stickyNav: true,
  analytics: {
    // Disable analytics for now, can enable later
    // googleAnalytics: {
    //   googleAnalyticsId: '', // e.g. G-XXXXXXX
    // },
  },
  newsletter: {
    // Disable newsletter for now
    provider: '',
  },
  comments: {
    // Disable comments for now - this is a portfolio site
    provider: '',
  },
  search: {
    provider: 'kbar', // kbar or algolia
    kbarConfig: {
      searchDocumentsPath: `${process.env.BASE_PATH || ''}/search.json`,
    },
  },
}

module.exports = siteMetadata
