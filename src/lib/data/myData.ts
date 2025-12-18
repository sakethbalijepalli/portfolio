export const myData = {
    profile: {
        name: "Saketh Balijepalli",
        title: "Software Engineer",
        tagline: "Shipping features end-to-end, keeping legacy systems stable, and making deployments boring.",
        location: "Based in India • open to remote / hybrid",
        email: "saketh@icloud.com",
        github: "https://github.com/sakethbalijepalli",
        linkedin: "https://www.linkedin.com/in/sakethbalijepalli/",
        leetcode: "https://leetcode.com/u/sakethbalijepalli/",
        instagram: "https://instagram.com/saketh_balijepalli",
        resumeUrl: "/Saketh-Balijepalli-Resume.pdf",
        bio: "Software Engineer focused on Java, Spring Boot, and microservices. I work with Docker, CI/CD, MySQL, and I'm comfortable with JavaScript & Python too."
    },
    experiences: [
        {
            id: 1,
            title: "Freelance",
            company: "Self-Employed",
            duration: "2024 — 2025",
            type: "Part-time",
            description: [
                "Developed and deployed custom websites and web applications.",
                "Managed hosting and domain configuration.",
                "Worked on Agentic AI development using Google Agent Development Kit"
            ],
            technologies: ["HTML", "CSS", "JavaScript", "React", "MySQL", "Google Agent Development Kit", "Python", "Google Cloud Run"],
        },
        {
            id: 2,
            title: "Senior Software Engineer",
            company: "ADF Data Science Pvt Ltd",
            duration: "2021 — 2024",
            type: "Full-time",
            description: [
                "Led the design, development, and containerization (Docker) of production-grade Java/Spring Boot microservices for a leading US-based fintech.",
                "Architected and scaled a unified Affiliate Engine microservice on AWS, successfully integrating major partners including Credit Karma, QuinStreet, LendingTree, and Even Financial.",
                "Optimized high-traffic affiliate workflows by implementing concurrent processing and AWS Secret Manager, reducing API latency from over 45 seconds to under 8 seconds.",
                "Owned services in a Spring Boot microservices ecosystem; delivered new business features and kept legacy modules stable.",
                "Designed and optimized Microservices, improving throughput and resilience.",
                "Automated deployments via Jenkins & Gradle / Maven; monitored and debugged with structured logs & dashboards.",
                "Wrote reliable tests using JUnit, Mockito.",
            ],
            technologies: ['Java 17', 'Spring Boot', 'RESTful APIs', 'Jenkins', 'Maven', 'Gradle', 'MYSQL', 'Docker', 'AWS', 'Jmeter', 'SonarQube']
        },
        {
            id: 3,
            title: "Junior Java Developer (Intern)",
            company: "IntentBI",
            duration: "2020 — 2020",
            type: "Internship",
            description: [
                "Built REST APIs and background jobs",
                "Worked on API connectors of multiple social media's and integrated with their dashboards to view the insights and metrics"
            ],
            technologies: ["Java", "Spring Boot", "RESTful APIs"]
        },
    ],
    projects: [
        {
            id: 1,
            title: "Multi Agent Dance System",
            description: "An intelligent multi-agent system that automates the discovery of dance opportunities and drafts personalized applications.",
            highlights: [
                "Built with Google ADK (Python) & Vertex AI; orchestrates Discovery, Dancer Finder, and Application agents.",
                "Implements A2A protocol for structured communication and file-based state persistence.",
                "Features Human-in-the-Loop design allowing user feedback at each stage of the workflow."
            ],
            technologies: ["Python", "Google ADK", "Vertex AI", "Google Cloud Run"],
            githubUrl: "https://github.com/sakethbalijepalli/google-agents",
            liveUrl: null,
            status: "Completed"
        },
        {
            id: 2,
            title: "Mini E-Commerce (Full Stack)",
            description: "Spring Boot + React MVP with product catalog, search, cart, and checkout.",
            highlights: [
                "REST APIs with pagination; MySQL schema for products, carts, orders.",
                "Session-based cart; Axios front-end; Docker Compose for MySQL + Adminer."
            ],
            technologies: ["Spring Boot", "React", "MySQL", "Docker", "REST API"],
            githubUrl: "#",
            liveUrl: null,
            status: "In Development"
        },
        {
            id: 3,
            title: "xlsx to json",
            description: "Reads Excel sheets, has a strict validation for each cell in a sheet, and returns structured JSON responses.",
            highlights: [
                "Spring Boot + Apache POI; schema mapping, type checks, required/enum constraints.",
                "Per-row error reporting (line + column) and clean success payloads for downstream services."
            ],
            technologies: ["Spring Boot", "Apache POI", "Java"],
            githubUrl: "https://github.com/sakethbalijepalli/XlsxToJson",
            liveUrl: null,
            status: "Completed"
        }
    ],
    skills: {
        backend: [
            { name: "Java", level: 95 },
            { name: "Spring Boot", level: 95 },
            { name: "REST APIs", level: 90 },
            { name: "Microservices", level: 90 },
            { name: "JavaScript", level: 75 },
            { name: "Python", level: 70 }
        ],
        platform: [
            { name: "Docker", level: 90 },
            { name: "Kubernetes", level: 70 },
            { name: "Jenkins", level: 85 },
            { name: "Git", level: 90 },
            { name: "Gradle/Maven", level: 85 },
            { name: "AWS", level: 75 }
        ],
        data: [
            { name: "MySQL", level: 85 },
            { name: "Redis", level: 80 },
            { name: "Kafka", level: 85 }
        ],
        testing: [
            { name: "JUnit", level: 90 },
            { name: "Mockito", level: 85 }
        ]
    },
    techStack: [
        { name: "Java", category: "Language" },
        { name: "Python", category: "Language" },
        { name: "TypeScript", category: "Language" },
        { name: "React", category: "Framework" },
        { name: "Spring Boot", category: "Framework" },
        { name: "Docker", category: "Platform" },
        { name: "Kubernetes", category: "Platform" },
        { name: "AWS", category: "Cloud" },
        { name: "Jenkins", category: "CI/CD" },
        { name: "Kafka", category: "Messaging" },
        { name: "MySQL", category: "Database" },
        { name: "Redis", category: "Cache" },
        { name: "Git", category: "Version Control" },
        { name: "BitBucket", category: "Version Control" },
        { name: "Gradle", category: "Build Tool" },
        { name: "Maven", category: "Build Tool" }
    ],
    certifications: [
        {
            id: 1,
            title: "5 Day AI Agents Intensive Course with Google",
            issuer: "Google X Kaggle",
            date: "2025",
            status: "Completed",
            link: "https://www.kaggle.com/certification/badges/sakethbalijepalli/105"
        },
        {
            id: 2,
            title: "Meta Professional Frontend Developer",
            issuer: "Meta",
            date: "Expected 2026 Jan",
            status: "In Progress"
        }
    ],
    blogPosts: [
        {
            id: 1,
            title: "My First Post",
            excerpt: "Kicking off my personal blog with insights on coding, backend development, and building side projects that matter.",
            date: "08-09-2025",
            readTime: "5 min read",
            tags: ["Introduction", "Backend", "Career"]
        }
    ]
};
