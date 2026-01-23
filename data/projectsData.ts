interface Project {
  title: string
  description: string
  href?: string
  imgSrc?: string
  tags?: string[]
  venue?: string
  citations?: number
  github?: string
}

const projectsData: Project[] = [
  {
    title: 'STAA - Spatio-Temporal Attention Attribution',
    description: `A real-time XAI method for interpreting video Transformer models. STAA extracts both spatial and temporal explanations simultaneously in a single forward pass, with less than 3% computational overhead. Achieves superior faithfulness (0.87) and monotonicity (0.91) scores on Kinetics-400 dataset with sub-150ms latency for real-time applications.`,
    imgSrc: '/static/images/projects/staa.png',
    href: 'https://doi.org/10.1109/ACCESS.2025.3575440',
    tags: ['XAI', 'Video Understanding', 'Transformer', 'Real-time'],
    venue: 'IEEE Access 2025 (Q1, IF: 3.6)',
    citations: 5,
    github: 'https://github.com/ZeruiW/STAA',
  },
  {
    title: 'XAIport - Early XAI Adoption Framework',
    description: `A microservice-based framework for integrating Explainable AI into ML development pipelines. XAIport shifts explainability from post-hoc analysis to an integral development practice. Compatible with Azure Cognitive Services, Google Cloud Vertex AI, and AWS Rekognition. Improves both model performance and explanation stability.`,
    imgSrc: '/static/images/projects/xaiport.png',
    href: 'https://doi.org/10.1145/3639476.3639759',
    tags: ['XAI', 'MLOps', 'Microservices', 'Cloud AI'],
    venue: 'ICSE 2024 (A* Conference, ~20% acceptance)',
    citations: 11,
    github: 'https://github.com/ZeruiW/XAIport',
  },
  {
    title: 'Joint Spatio-Temporal Adversarial Attack',
    description: `A novel adversarial attack framework targeting video Transformer models through XAI-guided gradient perturbation. First method to simultaneously perturb spatial and temporal features. Achieves highest Attack Success Rate (ASR) on Kinetics-400, significantly exceeding V-BAD and sparse attacks. Reveals systematic security vulnerabilities in video transformers.`,
    imgSrc: '/static/images/projects/adversarial.png',
    href: 'https://doi.org/10.1145/3766071',
    tags: ['Adversarial ML', 'Video Security', 'AI Safety', 'XAI'],
    venue: 'ACM TOMM 2025 (Q1, IF: 6.0)',
    citations: 0,
  },
  {
    title: 'Cloud XAI - Trustworthy Cloud AI Explanations',
    description: `An open API architecture for discovering trustworthy explanations of proprietary cloud AI services (Azure, GCP, AWS) without accessing internal model parameters. Provides feature contribution explanations with provenance data for full reproducibility. Enables data augmentation optimization through XAI-guided analysis.`,
    imgSrc: '/static/images/projects/cloud-xai.png',
    href: 'https://doi.org/10.1109/TCC.2024.3398609',
    tags: ['Cloud AI', 'XAI', 'Trustworthy AI', 'Provenance'],
    venue: 'IEEE TCC 2024 (Q1, IF: 5.95)',
    citations: 12,
  },
  {
    title: 'XAIpipeline - XAI Service Orchestration',
    description: `An automated toolchain for orchestrating Explainable AI services across cloud and open-source models. Provides unified Open APIs, SDK, and web portals for configuring complex multi-step XAI workflows. Features CI/CD deployment support and comprehensive provenance tracking for reproducibility.`,
    imgSrc: '/static/images/projects/xaipipeline.png',
    href: 'https://github.com/ZeruiW/XAI-Service',
    tags: ['XAI', 'MLOps', 'Automation', 'DevOps'],
    venue: 'IEEE SSE 2025',
    citations: 0,
    github: 'https://github.com/ZeruiW/XAI-Service',
  },
]

export default projectsData
