export const projects = [
  {
    title: 'Multi Agent Dance System',
    description: 'An intelligent multi-agent system that automates the discovery of dance opportunities and drafts personalized applications.',
    bullets: [
      'Built with Google ADK (Python) & Vertex AI; orchestrates Discovery, Dancer Finder, and Application agents.',
      'Implements A2A protocol for structured communication and file-based state persistence.',
      'Features Human-in-the-Loop design allowing user feedback at each stage of the workflow.'
    ],
    link: 'https://github.com/sakethbalijepalli/google-agents',
    linkLabel: 'Repo'
  },
  {
    title: 'Mini E-Commerce (Full Stack)',
    description: 'Spring Boot + React MVP with product catalog, search, cart, and checkout.',
    bullets: [
      'REST APIs with pagination; MySQL schema for products, carts, orders.',
      'Session-based cart; Axios front-end; Docker Compose for MySQL + Adminer.'
    ],
    link: '#',
    linkLabel: 'Repo (coming soon)'
  },
  {
    title: 'Xlsx To Json',
    description: 'Reads Excel sheets, has a strict validation for each cell in a sheet, and returns structured JSON responses.',
    bullets: [
      'Spring Boot + Apache POI; schema mapping, type checks, required/enum constraints.',
      'Per-row error reporting (line + column) and clean success payloads for downstream services.'
    ],
    link: 'https://github.com/sakethbalijepalli/XlsxToJson',
    linkLabel: 'Repo'
  }
] as const;
