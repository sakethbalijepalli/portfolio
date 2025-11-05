export const experience = [
  {
    role: 'Senior Software Engineer',
    company: 'ADF Data Science Pvt Ltd',
    period: '2021 — 2024',
    bullets: [
      'Led the design, development, and containerization (Docker) of production-grade Java/Spring Boot microservices for a leading US-based fintech client.',
      'Architected and scaled a unified Affiliate Engine microservice on AWS, successfully integrating major partners including Credit Karma, QuinStreet, LendingTree, and Even Financial.',
      'Optimized high-traffic affiliate workflows by implementing AWS Secret Manager, reducing API latency from over 30 seconds to under 8 seconds.',
      'Owned services in a Spring Boot microservices ecosystem; delivered new business features and kept legacy modules stable.',
      'Designed and optimized Kafka producers/consumers, improving throughput and resilience.',
      'Automated deployments via Jenkins & Gradle / Maven; monitored and debugged with structured logs & dashboards.',
      'Wrote reliable tests using JUnit, Mockito.',
    ],
    tags: ['Java 17','Spring Boot','RESTful APIs','Kafka','Jenkins','Maven','Gradle','MYSQL','Docker','Kubernetes']
  },
  {
    role: 'Junior Java Developer (Intern)',
    company: 'IntentBI',
    period: '2020 — 2020',
    bullets: [
      'Built REST APIs and background jobs; Worked on API connectors of multiple social media\'s and integrated with their dashboards to view the insights and metrics'
    ],
    tags: ['Java','Springboot','RESTful APIs']
  }
] as const;
