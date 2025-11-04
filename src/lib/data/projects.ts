export const projects = [
  {
    title: 'Real-Time Log Triage Dashboard',
    description: 'Streamed app logs from Kafka, auto-grouped errors, and surfaced actionable signals to cut MTTR.',
    bullets: ['Java + Spring Boot for ingestion, WebSocket updates for live UI.', 'Heuristics + rules to detect deploy regressions quickly.'],
    link: '#',
    linkLabel: 'Repo (coming soon)'
  },
  {
    title: 'Deployment Guardrails',
    description: 'Gradle/Jenkins plugins to run health checks and smoke tests before promoting to prod.',
    bullets: ['Rollback triggers on SLO breach; Slack notifications.'],
    link: '#',
    linkLabel: 'Case Study'
  },
  {
    title: 'Legacy Module Stabilization',
    description: 'Refactored high-churn module behind feature flags, added contract tests and better SQL indexes.',
    bullets: ['Results: fewer incidents, faster deploys, easier onboarding.'],
    link: '#',
    linkLabel: 'Before/After'
  }
] as const;
