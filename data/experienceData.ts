export interface Experience {
  id: string
  title: string
  company: string
  location: string
  period: string
  type: 'work' | 'education' | 'research'
  current?: boolean
  description: string[]
  skills?: string[]
  achievements?: string[]
}

export const experienceData: Experience[] = [
  // ============ WORK EXPERIENCE ============
  {
    id: 'maket-2025',
    title: 'Core AI Engineer',
    company: 'Maket Technologies Inc.',
    location: 'Montreal, Quebec, Canada',
    period: 'August 2025 - Present',
    type: 'work',
    current: true,
    description: [
      'Lead development of explainable AI systems for generative AI applications',
      'Design and implement XAI architectures for production deployment on cloud platforms',
      'Collaborate with cross-functional teams on AI product development and regulatory compliance',
    ],
    skills: ['XAI', 'Generative AI', 'Cloud Architecture', 'Python', 'PyTorch'],
  },
  {
    id: 'intellipro-2023',
    title: 'AI Engineer & Programming Supervisor',
    company: 'Intellipro Group Inc.',
    location: 'Toronto, Ontario, Canada',
    period: 'April 2023 - December 2023',
    type: 'work',
    description: [
      'Developed chatbot using open-source LLMs with RAG, tokenization, and vector databases',
      'Fine-tuned LLAMA model for recommendation systems and candidate profile assessment',
      'Designed NLP automation tools including context-aware email generation and semantic search',
      'Supervised and mentored programming developer trainees',
      'Developed AI-driven financial data analysis tool for stock price forecasting',
    ],
    skills: ['LLM', 'RAG', 'LLAMA', 'NLP', 'Vector Databases', 'Python'],
  },

  // ============ EDUCATION ============
  {
    id: 'phd-concordia',
    title: 'Doctor of Philosophy (Ph.D.) in Computer Engineering',
    company: 'Concordia University',
    location: 'Montreal, Quebec, Canada',
    period: 'May 2020 - January 2026',
    type: 'education',
    description: [
      'Research Focus: Explainable AI, Video Understanding, Transformer Models, AI Security, Cloud Computing',
      'Published 12 peer-reviewed papers with 101 citations',
      'Completed 35+ peer reviews for top venues (IEEE TSC, AAAI, Applied Intelligence)',
    ],
    achievements: [
      '12 peer-reviewed publications',
      '101 citations (Google Scholar)',
      'h-index: 5',
      '35+ peer reviews',
    ],
  },
  {
    id: 'msc-dortmund',
    title: 'Master of Science (M.Sc.) in Process System Engineering',
    company: 'Technical University Dortmund',
    location: 'Dortmund, Germany',
    period: 'October 2014 - January 2018',
    type: 'education',
    description: [
      'Specialization: Advanced System Modelling, Computational Simulation, Distributed Control Systems',
    ],
  },
  {
    id: 'bsc-cumt',
    title: 'Bachelor of Science (B.Sc.) in Process System Engineering',
    company: 'China University of Mining and Technology',
    location: 'Xuzhou, China',
    period: 'September 2010 - July 2014',
    type: 'education',
    description: [],
  },

  // ============ TEACHING ============
  {
    id: 'ta-concordia',
    title: 'Teaching Assistant',
    company: 'Concordia University',
    location: 'Montreal, Quebec, Canada',
    period: '2020 - 2025',
    type: 'research',
    description: [
      'COEN 6311: Software Engineering (Graduate level)',
      'COEN 6313: Programming on Cloud (Graduate level)',
      'COEN 6731: Distributed Software Systems (Graduate level)',
      'COEN 244: Programming Methodology (Undergraduate level)',
    ],
    skills: ['Teaching', 'Mentoring', 'Software Engineering', 'Cloud Computing'],
  },
]

// Presentations and Workshops
export const presentationsData = [
  {
    title: 'Develop Explainable AI Services on Cloud Computing and Open Source Models',
    type: 'Tutorial Workshop',
    venue: '34th International Conference on Collaborative Advances in Software and Computing (CASCON)',
    date: 'October 2024',
    location: 'Canada',
  },
  {
    title: 'How to Design and Launch a Software-as-a-Service (SaaS) on Cloud Computing',
    type: 'Tutorial Workshop',
    venue: 'Concordia University 4th Annual Digital Skill-Share Days Event',
    date: 'November 2024',
    location: 'Montreal, Canada',
  },
  {
    title: 'Cloud-based XAI Services for Assessing AI Models Under Adversarial Attacks',
    type: 'Poster Presentation',
    venue: 'Software Engineering for Machine Learning Applications (SEMLA) International Symposium',
    date: 'June 2024',
    location: 'International',
  },
  {
    title: 'Design Explanation Microservices and Provenance: A Case Study of Explaining Cloud AI Service',
    type: 'Poster Presentation',
    venue: '36th Canadian Conference on Artificial Intelligence (Canadian AI)',
    date: 'June 2023',
    location: 'Canada',
  },
]

// Professional Memberships
export const membershipsData = [
  {
    organization: 'Institute of Electrical and Electronics Engineers (IEEE)',
    role: 'Professional Member',
    memberId: '98935553',
    since: '2020',
  },
  {
    organization: 'Association for Computing Machinery (ACM)',
    role: 'Professional Member',
    memberId: '8536469',
    since: '2020',
  },
  {
    organization: 'Project Management Institute (PMI)',
    role: 'Project Management Professional (PMP)',
    memberId: '2256006',
    since: '2018',
    note: 'Above Target performance',
  },
]

export default experienceData
