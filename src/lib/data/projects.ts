export const projects = [
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
    title: 'xlsx to json',
    description: 'Reads Excel sheets, has a strict validation for each cell in a sheet, and returns structured JSON responses.',
    bullets: [
      'Spring Boot + Apache POI; schema mapping, type checks, required/enum constraints.',
      'Per-row error reporting (line + column) and clean success payloads for downstream services.'
    ],
    link: 'https://github.com/sakethbalijepalli/XlsxToJson',
    linkLabel: 'Repo'
  }
] as const;
