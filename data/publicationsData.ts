export interface Publication {
  id: string
  title: string
  authors: string
  venue: string
  venueShort: string
  year: number
  type: 'journal' | 'conference'
  tier: 'top' | 'high' | 'standard'
  impactFactor?: number
  quartile?: string
  coreRank?: string
  acceptanceRate?: string
  citations: number
  doi?: string
  arxiv?: string
  pdf?: string
  abstract?: string
  tags: string[]
  isFirstAuthor: boolean
  highlight?: boolean
}

export const publicationsData: Publication[] = [
  // ============ TIER 1: TOP PUBLICATIONS ============
  {
    id: 'staa-2025',
    title: 'STAA: Spatio-Temporal Attention Attribution for Real-Time Interpreting Transformer-Based AI Video Models',
    authors: 'Zerui Wang, Yan Liu',
    venue: 'IEEE Access',
    venueShort: 'IEEE Access',
    year: 2025,
    type: 'journal',
    tier: 'top',
    impactFactor: 3.6,
    quartile: 'Q1',
    citations: 5,
    doi: '10.1109/ACCESS.2025.3575440',
    tags: ['XAI', 'Video Understanding', 'Transformer', 'Real-time'],
    isFirstAuthor: true,
    highlight: true,
    abstract: 'A novel XAI method for real-time interpretation of video Transformer models. STAA extracts spatio-temporal explanations in a single forward pass with less than 3% computational overhead, achieving superior faithfulness (0.87) and monotonicity (0.91) scores.',
  },
  {
    id: 'xaiport-2024',
    title: 'XAIport: A Service Framework for the Early Adoption of XAI in AI Model Development',
    authors: 'Zerui Wang, Yan Liu, A. A. Thiruselvi, Wahab Hamou-Lhadj',
    venue: '46th IEEE/ACM International Conference on Software Engineering (ICSE)',
    venueShort: 'ICSE 2024',
    year: 2024,
    type: 'conference',
    tier: 'top',
    coreRank: 'A*',
    acceptanceRate: '22%',
    citations: 11,
    doi: '10.1145/3639476.3639759',
    tags: ['XAI', 'MLOps', 'Microservices', 'Software Engineering'],
    isFirstAuthor: true,
    highlight: true,
    abstract: 'A microservice framework for integrating Explainable AI into ML development pipelines, enabling early XAI adoption in MLOps workflows. Compatible with Azure, GCP, and AWS cloud services.',
  },
  {
    id: 'cloud-xai-2024',
    title: 'An Open API Architecture to Discover the Trustworthy Explanation of Cloud AI Services',
    authors: 'Zerui Wang, Yan Liu, Jiahao Huang',
    venue: 'IEEE Transactions on Cloud Computing',
    venueShort: 'IEEE TCC',
    year: 2024,
    type: 'journal',
    tier: 'top',
    impactFactor: 5.95,
    quartile: 'Q1',
    citations: 12,
    doi: '10.1109/TCC.2024.3398609',
    tags: ['Cloud AI', 'XAI', 'Trustworthy AI', 'API Architecture'],
    isFirstAuthor: true,
    highlight: true,
    abstract: 'A cloud-agnostic architecture enabling explainability for proprietary cloud AI services (Azure, Google Cloud, AWS) without accessing internal model parameters.',
  },
  {
    id: 'adversarial-2025',
    title: 'Joint Spatio-temporal Adversarial Attacks on Video Transformer Models Through XAI-guided Gradient Perturbation',
    authors: 'Zerui Wang, Yan Liu',
    venue: 'ACM Transactions on Multimedia Computing, Communications, and Applications (TOMM)',
    venueShort: 'ACM TOMM',
    year: 2025,
    type: 'journal',
    tier: 'top',
    impactFactor: 6.0,
    quartile: 'Q1',
    citations: 0,
    doi: '10.1145/3766071',
    tags: ['Adversarial ML', 'AI Security', 'Video', 'XAI'],
    isFirstAuthor: true,
    highlight: true,
    abstract: 'First method to simultaneously perturb spatial and temporal features in video transformers. Achieves highest Attack Success Rate on Kinetics-400, revealing systematic security vulnerabilities.',
  },

  // ============ TIER 2: HIGH-QUALITY PUBLICATIONS ============
  {
    id: 'xai-assessment-2024',
    title: 'Cloud-Based XAI Services for Assessing Open Repository Models Under Adversarial Attacks',
    authors: 'Zerui Wang, Yan Liu',
    venue: 'IEEE International Conference on Software Services Engineering (SSE)',
    venueShort: 'IEEE SSE 2024',
    year: 2024,
    type: 'conference',
    tier: 'high',
    coreRank: 'B',
    citations: 8,
    doi: '10.1109/SSE62657.2024.00031',
    tags: ['XAI', 'Adversarial', 'Cloud Services', 'Model Assessment'],
    isFirstAuthor: true,
    abstract: 'Comprehensive assessment protocol for evaluating open-source models including adversarial robustness, explanation deviation, and explanation resilience.',
  },
  {
    id: 'xaipipeline-2025',
    title: 'XAIpipeline: Automated Orchestration of Explainable AI Service for Cloud AI and Open-Source Models',
    authors: 'Zerui Wang, Yan Liu',
    venue: 'IEEE International Conference on Software Services Engineering (SSE)',
    venueShort: 'IEEE SSE 2025',
    year: 2025,
    type: 'conference',
    tier: 'high',
    coreRank: 'B',
    citations: 0,
    tags: ['XAI', 'MLOps', 'Automation', 'DevOps'],
    isFirstAuthor: true,
    abstract: 'Automated toolchain for orchestrating XAI services across cloud and open-source models with CI/CD deployment support and provenance tracking.',
  },
  {
    id: 'provenance-2025',
    title: 'The Role of Provenance Modeling in Tracing and Reproducing Explainable AI Pipelines',
    authors: 'Zerui Wang, Yan Liu',
    venue: 'World Congress in Computer Science, Computer Engineering, & Applied Computing (CSCE)',
    venueShort: 'CSCE 2025',
    year: 2025,
    type: 'conference',
    tier: 'standard',
    citations: 0,
    tags: ['Provenance', 'XAI', 'Reproducibility'],
    isFirstAuthor: true,
    abstract: 'Introduces provenance modeling techniques ensuring reproducibility across XAI experiments.',
  },
  {
    id: 'cloud-vision-2025',
    title: 'Spatio-temporal Explanation for Adversarial-Aware Cloud Vision Services',
    authors: 'Zerui Wang, Yan Liu',
    venue: 'IEEE Computer Society Signature Conference on Computers, Software, and Applications (COMPSAC)',
    venueShort: 'COMPSAC 2025',
    year: 2025,
    type: 'conference',
    tier: 'high',
    coreRank: 'B',
    acceptanceRate: '18%',
    citations: 0,
    tags: ['Cloud Vision', 'Adversarial', 'XAI'],
    isFirstAuthor: true,
    abstract: 'Extends spatio-temporal XAI capabilities to cloud vision services with adversarial awareness.',
  },
  {
    id: 'xai-process-2022',
    title: 'The Analysis and Development of an XAI Process on Feature Contribution Explanation',
    authors: 'Jiahao Huang*, Zerui Wang*, Duanyu Li, Yan Liu (*Equal contribution)',
    venue: 'IEEE International Conference on Big Data',
    venueShort: 'IEEE Big Data 2022',
    year: 2022,
    type: 'conference',
    tier: 'high',
    coreRank: 'B',
    acceptanceRate: '19.2%',
    citations: 32,
    doi: '10.1109/BigData55660.2022.10020313',
    tags: ['XAI', 'Feature Attribution', 'Methodology'],
    isFirstAuthor: true,
    abstract: 'Foundational work formalizing the XAI process and introducing quantitative metrics for evaluating explanation consistency and stability.',
  },

  // ============ TIER 3: CO-AUTHORED PUBLICATIONS ============
  {
    id: 'trustworthy-xai-2023',
    title: 'A Trustworthy View on Explainable Artificial Intelligence Method Evaluation',
    authors: 'Ding Li, Yan Liu, Jun Huang, Zerui Wang',
    venue: 'IEEE Computer',
    venueShort: 'IEEE Computer',
    year: 2023,
    type: 'journal',
    tier: 'high',
    impactFactor: 3.564,
    citations: 22,
    doi: '10.1109/MC.2022.3233806',
    tags: ['XAI', 'Evaluation', 'Trustworthy AI'],
    isFirstAuthor: false,
    abstract: 'Survey paper providing a trustworthy perspective on XAI method evaluation, addressing measurement and evaluation challenges.',
  },
  {
    id: 'mlops-governance-2023',
    title: 'Linking Team-level and Organization-level Governance in Machine Learning Operations through Explainable AI and Responsible AI Connector',
    authors: 'Elie Neghawi, Zerui Wang, Jun Huang, Yan Liu',
    venue: 'IEEE 47th Annual Computers, Software, and Applications Conference (COMPSAC)',
    venueShort: 'COMPSAC 2023',
    year: 2023,
    type: 'conference',
    tier: 'high',
    coreRank: 'B',
    acceptanceRate: '18%',
    citations: 11,
    doi: '10.1109/COMPSAC57700.2023.00185',
    tags: ['MLOps', 'AI Governance', 'Responsible AI'],
    isFirstAuthor: false,
    abstract: 'Links team-level and organization-level governance in MLOps through XAI and Responsible AI connectors.',
  },
  {
    id: 'videoxai-2025',
    title: 'VideoXAI - A Hybrid Architecture for Explainable AI Pipelines of Robust Video Classification',
    authors: 'Abideep Singh Kondal, Ravinder Singh Ghataura, Yan Liu, Zerui Wang',
    venue: 'IEEE International Conference on Big Data',
    venueShort: 'IEEE Big Data 2025',
    year: 2025,
    type: 'conference',
    tier: 'high',
    coreRank: 'B',
    citations: 0,
    tags: ['Video XAI', 'Hybrid Architecture', 'Classification'],
    isFirstAuthor: false,
    abstract: 'Hybrid architecture combining spatio-temporal feature extraction with multi-modal fusion for robust and explainable video classification.',
  },
]

// Statistics
export const publicationStats = {
  totalPapers: 12,
  firstAuthorPapers: 9,
  totalCitations: 101,
  hIndex: 5,
  topTierPapers: 4,
  journalPapers: 4,
  conferencePapers: 8,
  venues: {
    aStarConferences: 1,
    q1Journals: 3,
    bRankedConferences: 6,
  },
}

export default publicationsData
