export const myData = {
    profile: {
        name: "Saketh Balijepalli",
        title: "Software Engineer",
        tagline: "I build backend systems that hold up under real load. I own them end to end, from architecture to the pager.",
        location: "Based in India • open to remote / hybrid",
        email: "saketh@icloud.com",
        github: "https://github.com/sakethbalijepalli",
        linkedin: "https://www.linkedin.com/in/sakethbalijepalli/",
        leetcode: "https://leetcode.com/u/sakethbalijepalli/",
        instagram: "https://instagram.com/saketh_balijepalli",
        x: "https://x.com/saketh_b98",
        discord: "https://discord.com/users/312264899843588096",
        resumeUrl: "/Saketh-Balijepalli-Resume.pdf",
        bio: "Backend engineer specializing in Java, Spring Boot, and microservices at production scale. I've taken fintech API latency from 45 seconds to under 8 across four partner integrations, and I ship what I build: Docker, CI/CD, MySQL, PostgreSQL, with Go and Python when the problem calls for it."
    },
    experiences: [
        {
            id: 1,
            title: "Freelance",
            company: "Self-Employed",
            duration: "2024 — Present",
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
            githubUrl: "https://github.com/sakethbalijepalli/multi-agent-orchestration-adk/tree/main/dance_agent_system",
            liveUrl: null,
            status: "Completed"
        },
        {
            id: 2,
            title: "SpaceBook",
            description: "A two-sided marketplace for hourly studio and rehearsal-space rentals in India, built for UPI payments, WhatsApp/phone OTP, and city-tier targeting.",
            highlights: [
                "Spring Boot microservices (Auth, Listing, Booking, Notification) behind a BFF, with a Next.js frontend.",
                "PostgreSQL for storage and Redis for slot-availability caching and sessions.",
                "Razorpay for UPI/card payments and Firebase phone-OTP authentication."
            ],
            technologies: ["Spring Boot", "Java", "Next.js", "PostgreSQL", "Redis", "Razorpay"],
            githubUrl: "https://github.com/sakethbalijepalli/SpaceBook",
            liveUrl: null,
            status: "In Development"
        },
        {
            id: 3,
            title: "Movie Reservation System",
            description: "A backend service for browsing movies, scheduling showtimes, and reserving seats, built to work through real-world concurrency control and auth design.",
            highlights: [
                "Seat reservation uses pessimistic row-level locking plus a re-verification check under that lock, backed by a DB-level unique constraint against double-booking.",
                "JWT auth with short-lived access tokens and long-lived refresh tokens, plus admin/regular role distinction.",
                "Reservations start as a PENDING hold with an expiry; a scheduled job auto-expires abandoned holds."
            ],
            technologies: ["Java 17", "Spring Boot", "PostgreSQL", "Spring Security", "JWT"],
            githubUrl: "https://github.com/sakethbalijepalli/moviereservationsystem",
            liveUrl: null,
            status: "Completed"
        },
        {
            id: 4,
            title: "Spring AI Fallback Service",
            description: "A Spring Boot service that chains multiple generative-AI providers with automatic fallback and model rotation for high availability.",
            highlights: [
                "Chat fallback chain: Google Gemini → OpenRouter (rotating free models) → Ollama, degrading gracefully if a provider is unconfigured.",
                "Image-generation fallback across Pollinations, Hugging Face (Flux.1-schnell), Gemini, and OpenRouter.",
                "REST endpoints for chat, search-grounded chat, and direct image generation."
            ],
            technologies: ["Java", "Spring Boot", "Spring AI"],
            githubUrl: "https://github.com/sakethbalijepalli/SpringAI",
            liveUrl: null,
            status: "Completed"
        },
        {
            id: 5,
            title: "URL Shortener (Go)",
            description: "A URL shortener REST API written in Go.",
            highlights: [
                "Built with Gin; endpoints to create a short URL and redirect from it.",
                "Clean separation between handler, shortening logic, and storage layers."
            ],
            technologies: ["Go", "Gin", "REST API"],
            githubUrl: "https://github.com/sakethbalijepalli/go-url-shortener",
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
        { name: "Go", category: "Language" },
        { name: "React", category: "Framework" },
        { name: "Spring Boot", category: "Framework" },
        { name: "Docker", category: "Platform" },
        { name: "Kubernetes", category: "Platform" },
        { name: "AWS", category: "Cloud" },
        { name: "GCP", category: "Cloud" },
        { name: "Jenkins", category: "CI/CD" },
        { name: "Kafka", category: "Messaging" },
        { name: "MySQL", category: "Database" },
        { name: "PostgreSQL", category: "Database" },
        { name: "Redis", category: "Cache" },
        { name: "Git", category: "Version Control" },
        { name: "BitBucket", category: "Version Control" },
        { name: "Gradle", category: "Build Tool" },
        { name: "Maven", category: "Build Tool" },
        { name: "CrewAI", category: "AI & Agents" },
        { name: "LangGraph", category: "AI & Agents" },
        { name: "LangChain", category: "AI & Agents" },
        { name: "Google ADK", category: "AI & Agents" }
    ],
    certifications: [
        {
            id: 1,
            title: "5 Day AI Agents Intensive Course with Google",
            issuer: "Google X Kaggle",
            date: "2025",
            status: "Completed",
            link: "https://www.kaggle.com/certification/badges/sakethbalijepalli/105"
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
