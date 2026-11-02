/**
 * Content for the online resume page.
 *
 * Keep this in sync with the PDF CV (cv/resume.html): same jobs, dates,
 * bullets and numbers, so recruiters never see two different versions.
 *
 * Experience fields:
 *   company, location   -> "Springring (Bahrain)"
 *   mode                -> "Remote" / "Onsite" (omit when `workModes` is used)
 *   workModes           -> optional onsite -> remote timeline; dates are "YYYY-MM",
 *                          omit `end` for the current arrangement
 *   highlights          -> bullet points
 */

export const RESUME_SUMMARY = 'Senior Full Stack Developer with 6+ years building SaaS platforms and production AI systems in Laravel, React and TypeScript. I integrate LLMs (GPT-4, Claude), RAG pipelines and n8n automation into real business workflows. Highlights include an AI decision engine that turns sales-funnel data into approved, automated follow-up tasks, and Chillup, an event booking platform that reached 10,000+ users, built for clients across the Gulf, Europe and North America.';

export const EXPERIENCE = [
    {
        company: 'Action Labs Consultants',
        location: 'Bahrain',
        role: 'Senior Full Stack Developer – AI & Automation',
        period: '09/2025 – Present',
        workModes: [
            {mode: 'Onsite', location: 'Bahrain', start: '2025-09', end: '2026-10'},
            {mode: 'Remote', location: 'Germany', start: '2026-11'},
        ],
        highlights: [
            'Integrated GPT-4 and Claude into internal marketing and operations platforms, turning manual review and processing steps into AI-assisted workflows.',
            'Built an AI decision engine that reviews past sales-funnel performance and recommends the strategies that worked best; once a user approves, it automatically creates the follow-up tasks, and every decision is logged for audit.',
            'Automated workflows across internal APIs, CRM tools and external data sources with n8n, removing hours of manual work each week.',
        ],
    },
    {
        company: 'Springring',
        location: 'Bahrain',
        mode: 'Remote',
        role: 'Full Stack Developer',
        period: '11/2023 – 12/2024',
        highlights: [
            'Merged three separate apps (student, teacher, parent) into one React application, so each feature is built once instead of three times.',
            'Architected an end-to-end encrypted messaging platform where students, teachers and parents communicate in one place, each seeing only what their role allows.',
            'Built real-time chat and notifications with WebSockets and Laravel Reverb, so messages arrive instantly without page reloads.',
        ],
    },
    {
        company: 'VII Tech Solutions',
        location: 'Bahrain',
        mode: 'Remote',
        role: 'Full Stack Developer',
        period: '08/2022 – 11/2023',
        highlights: [
            'Launched Chillup, a web and mobile event booking platform that reached 10,000+ users in its first quarter.',
            'Built Laravel REST APIs with JWT auth and Google Maps / Mapbox routing, including live geolocation for a healthcare transportation app.',
            'Made mobile pages load faster with lazy loading, caching and smaller bundles, so fewer users left before the page appeared.',
        ],
    },
    {
        company: 'Tres Logics',
        location: 'Pakistan',
        mode: 'Onsite',
        role: 'Full Stack Developer',
        period: '10/2021 – 09/2022',
        highlights: [
            'Improved the database design behind Laravel REST APIs for faster responses.',
            'Built a question-management module that catches admin input mistakes before questions go live, plus Q&A apps in Vue.js and React Native used by thousands of students.',
        ],
    },
    {
        company: 'Tabs Group International',
        location: 'Pakistan',
        mode: 'Onsite',
        role: 'Laravel Developer',
        period: '10/2020 – 10/2021',
        highlights: [
            'Built automated ride assignment with Laravel and Google Maps that matches rides to nearby drivers and balances workload, reducing driver wait time.',
        ],
    },
    {
        company: 'Code Brisk',
        location: 'Pakistan',
        mode: 'Onsite',
        role: 'Full Stack Intern',
        period: '04/2019 – 09/2019',
        highlights: [
            'Built a real-time results system and an article publishing platform with 90%+ unit test coverage.',
        ],
    },
];

/** Key projects, same as the CV. */
export const KEY_PROJECTS = [
    {
        label: 'In development',
        title: 'AI Sales Intelligence Platform',
        stack: 'Firecrawl, PostgreSQL + pgvector, OpenAI Embeddings, Groq, React, Laravel, n8n',
        description: 'Finds stakeholders, competitors and company data from natural-language queries, using semantic search over millions of scraped records.',
    },
    {
        label: 'Al Salam Bank',
        title: 'Danat Experience & Project Dream',
        stack: 'Laravel, React',
        description: 'Gamified campaign platforms for a Bahraini bank (Project Dream with Visa): OTP sign-in, points engine, live leaderboards and prize draws.',
    },
    {
        label: 'Government',
        title: 'Bahrain.com & Calender.bh',
        stack: 'Laravel, MySQL, Google Maps API',
        description: 'National event and visa booking platform for the Bahrain Tourism Authority.',
    },
];

/** Skill groups, in the same order and wording as the CV. `basic` = basic knowledge. */
export const SKILLS = [
    {label: 'AI & LLMs', items: 'LLM Integration, OpenAI GPT-4, Claude API, Groq, RAG, AI Agents, Prompt Engineering, pgvector / Embeddings'},
    {label: 'Automation', items: 'Workflow Automation, Firecrawl, n8n, Human-in-the-Loop Workflows'},
    {label: 'Frontend', items: 'JavaScript, TypeScript, React, Next.js, Vue.js, Nuxt.js, HTML5, CSS3, Tailwind CSS, Redux, Three.js, React Native'},
    {label: 'Backend', items: 'PHP, Laravel, Node.js, REST APIs, GraphQL, Webhooks, WebSockets, JWT, OAuth, SSO', basic: 'SOAP, RabbitMQ, Swagger / OpenAPI'},
    {label: 'Cloud & DevOps', items: 'Docker, CI/CD Pipelines, Git / GitHub', basic: 'Kubernetes, AWS, Google Cloud (GCP), DigitalOcean, Laravel Forge'},
    {label: 'Databases', items: 'PostgreSQL, MySQL, MongoDB, Firebase', basic: 'pgBadger'},
    {label: 'Monitoring & Quality', items: '', basic: 'Sentry, OpenTelemetry, SonarQube'},
    {label: 'Testing & Tools', items: 'Unit Testing (PHPUnit, Jest), E2E Testing (Cypress), Postman, Agile / Scrum', basic: 'Lucidchart, incident.io'},
];

export const EDUCATION = [
    {
        degree: 'Bachelor of Science in Computer Science',
        institution: 'University of Sargodha, Pakistan',
        period: '09/2016 – 07/2020',
        note: 'Recognised in Germany (anabin H+)',
    },
];

export const CERTIFICATIONS = [
    {name: 'Meta Front-End Developer – Coursera', year: 2025},
    {name: 'Front End Development Libraries – freeCodeCamp', year: 2025},
    {name: 'Scrum Fundamentals Certified – SCRUMstudy', year: 2025},
];

export const LANGUAGES = ['English – Intermediate (B1)', 'German – A1, actively learning'];

export const INTERESTS = ['Football', 'Snowboarding', 'Photography', 'Travelling'];
