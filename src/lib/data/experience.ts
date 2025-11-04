export const experience = [
  {
    role: 'Software Engineer',
    company: 'Your Company',
    period: '2023 — Present',
    bullets: [
      'Owned services in a Spring Boot microservices ecosystem; delivered new business features and kept legacy modules stable.',
      'Designed and optimized Kafka producers/consumers, improving throughput and resilience.',
      'Automated deployments via Jenkins & Gradle; monitored and debugged with structured logs & dashboards.',
      'Wrote reliable tests using JUnit, Mockito, and Cucumber (BDD).',
      'Tuned Oracle queries and indexes to shave seconds off hot paths.'
    ],
    tags: ['Java 17','Spring Boot','Kafka','Jenkins','Gradle','Oracle SQL','Docker','Kubernetes']
  },
  {
    role: 'Backend Developer',
    company: 'Previous Company',
    period: '2021 — 2023',
    bullets: [
      'Built REST APIs and background jobs; stabilized flaky legacy code and reduced on-call noise.',
      'Led log-first investigations post-deploy; wrote runbooks for repeatability.',
      'Migrated services to containers and Docker-based pipelines.'
    ],
    tags: ['Spring','REST','CI/CD','Observability']
  }
] as const;
