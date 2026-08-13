export const PROFILE = {
  name: "Anubhav Brahmania",
  firstName: "Anubhav",
  lastName: "Brahmania",
  title: "Full Stack Developer & Independent SaaS Developer",
  location: "Gujarat, India",
  email: "anubhavsn7@gmail.com",
  github: "https://github.com/AnubhavK404",
  portfolio: "https://portfolio-pi-ruddy-19.vercel.app",
  tagline:
    "Full Stack · SaaS · UI Design · WordPress · Shopify",
  summary:
    "Full stack developer and founder with 4+ years designing and building websites — UI design, WordPress, Shopify, and custom web apps — plus product experience taking a SaaS platform to 300+ users. Comfortable owning a project end to end: design, build, ship, grow.",
} as const;

export const EXPERIENCE = [
  {
    year: "2025 – Present",
    role: "Independent SaaS Developer",
    company: "Independent SaaS Projects",
    description:
      "Built and launched Clinnk, a creator link-in-bio platform, and grew it to 300+ users solo. Designed product architecture, payment flow, and analytics dashboard from scratch. Owned product, branding, and growth strategy end to end — from idea to public launch.",
  },
  {
    year: "2026",
    role: "Shopify Developer & Content Manager Intern",
    company: "Basava Organics — B2B Organic Fertilizer Exports",
    description:
      "Built and launched the Shopify store from scratch for a B2B organic fertilizer export company shipping to UAE, Malaysia, and Kuwait. Owned content strategy end to end: LinkedIn content calendar, go-to-market plan, and video scripts for B2B lead generation.",
  },
  {
    year: "2020 – Present",
    role: "Freelance Web Developer",
    company: "Independent",
    description:
      "Shipped 50+ websites for clients, from UI design through deployment. 3+ years designing in Figma and building on WordPress and Shopify alongside custom code. Handled the full client cycle: design, build, launch, and ongoing support.",
  },
  {
    year: "2020 – 2022",
    role: "Core Developer",
    company: "Citizen Forums Startup (DIT University)",
    description:
      "Contributed to backend development and community platform features. Worked on performance optimization and user engagement improvements during the pre-MVP stage, helping build a strong web presence from the ground up.",
  },
] as const;

export const EDUCATION = [
  {
    year: "2023 – 2025",
    role: "Cybersecurity Engineering Specialization",
    company: "Ministry of Skills / UPES Affiliated GICT",
    description:
      "Advanced specialization in cybersecurity engineering, web application security, and ethical hacking.",
  },
  {
    year: "2019 – 2022",
    role: "Diploma in Computer Science and Engineering",
    company: "DIT University, Dehradun",
    description:
      "Foundational studies in computer science and engineering with a focus on web technologies and software development.",
  },
] as const;

export const CERTIFICATIONS = [
  { name: "Web Development", issuer: "Infosys Springboard", year: "2021" },
  { name: "React JS", issuer: "Infosys Springboard", year: "2021" },
  {
    name: "Web Development Bootcamp",
    issuer: "Colt Steele (Udemy)",
    year: "2020",
  },
] as const;

export const SKILL_GROUPS = [
  {
    label: "Design",
    skills: ["UI Design", "Figma", "WordPress", "Shopify"],
  },
  {
    label: "Frontend",
    skills: ["React", "Next.js", "TypeScript", "Tailwind CSS"],
  },
  {
    label: "Backend & Database",
    skills: ["Node.js", "Supabase", "REST APIs", "PostgreSQL"],
  },
  {
    label: "Security",
    skills: ["OSINT", "Web App Security", "Linux"],
  },
  {
    label: "Platform",
    skills: ["Vercel", "Clerk", "Razorpay", "GitHub"],
  },
] as const;

export const FEATURED_PROJECTS = [
  {
    label: "Featured SaaS",
    title: "Clinnk",
    description:
      "Link-in-bio platform with payments, analytics, and embeds. Built solo with Next.js, Supabase, and Razorpay — grown to 300+ users.",
    href: "https://clinnk.in",
    variant: "accent" as const,
    cta: "Launch Clinnk",
    tags: ["Next.js", "Supabase", "Razorpay", "SaaS"],
  },
  {
    label: "Featured Shopify",
    title: "Basava Organics",
    description:
      "Built and launched the Shopify store from scratch for Basava Organics, a B2B organic fertilizer export company shipping to UAE, Malaysia, and Kuwait. Owned content strategy end to end: LinkedIn content calendar, go-to-market plan, and video scripts to support B2B lead generation. Bridged store build and brand positioning, aligning the Shopify storefront with export-focused B2B messaging.",
    href: "https://basavaorganics.com",
    variant: "primary" as const,
    cta: "Visit Basava Organics",
    tags: ["Shopify", "B2B", "Content Strategy", "Exports"],
  },
  {
    label: "Featured Security",
    title: "SpectreScan",
    description:
      "Domain threat analysis and verdict tool that clusters multiple cybersecurity sources into one infrastructure and scans URLs deeply.",
    href: "https://spectrescan-4sjn.vercel.app/",
    variant: "primary" as const,
    cta: "Launch SpectreScan",
  },
  {
    label: "Featured Data Viz",
    title: "DataForge",
    description:
      "Data visualization platform that takes raw JSON and CSV datasets and outputs concise charts — bar, flow, pie, and more.",
    href: "https://data-forge-final-tpmf.vercel.app/",
    variant: "ghost" as const,
    cta: "Launch DataForge",
  },
] as const;

export const MANUAL_PROJECTS = [
  {
    id: 999995,
    name: "Basava Organics",
    description:
      "Built and launched the Shopify store from scratch for Basava Organics, a B2B organic fertilizer export company shipping to UAE, Malaysia, and Kuwait. Owned content strategy end to end: LinkedIn content calendar, go-to-market plan, and video scripts to support B2B lead generation. Bridged store build and brand positioning, aligning the Shopify storefront with export-focused B2B messaging.",
    topics: ["shopify", "technical", "portfolio"],
    html_url: "https://github.com/AnubhavK404",
    homepage: "https://basavaorganics.com",
  },
  {
    id: 999996,
    name: "Clinnk",
    description:
      "Link-in-bio platform with payments, analytics, and embeds. 300+ users. Built with Next.js, Supabase, and Razorpay.",
    topics: ["saas", "nextjs", "technical", "portfolio"],
    html_url: "https://github.com/AnubhavK404",
    homepage: "https://clinnk.in",
  },
  {
    id: 999998,
    name: "SpectreScan",
    description:
      "Domain threat analysis and verdict tool using multiple cybersecurity sources clustered into one infrastructure.",
    topics: ["security", "osint", "technical", "portfolio"],
    html_url: "https://github.com/AnubhavK404",
    homepage: "https://spectrescan-4sjn.vercel.app/",
  },
  {
    id: 999999,
    name: "DataForge",
    description:
      "Data visualization platform that transforms raw JSON and CSV into interactive charts and dashboards.",
    topics: ["data-visualization", "technical", "portfolio"],
    html_url: "https://github.com/AnubhavK404",
    homepage: "https://data-forge-final-tpmf.vercel.app/",
  },
] as const;

export const PROJECT_CATEGORIES = ["All", "SaaS", "Shopify", "Security", "Technical"] as const;
