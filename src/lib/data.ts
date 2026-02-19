import {
  Monitor,
  Paintbrush,
  Code2,
  Cpu,
  Wrench,
  Cloud,
  LucideIcon,
} from "lucide-react";

export interface Service {
  title: string;
  description: string;
  icon: LucideIcon;
  bullets: string[];
}

export interface CaseStudy {
  slug: string;
  title: string;
  summary: string;
  tags: string[];
  metrics: string[];
  problem: string;
  approach: string;
  solution: string;
  results: string;
}

export interface FAQ {
  q: string;
  a: string;
}

export interface Testimonial {
  quote: string;
  name: string;
  role: string;
  company: string;
}

export interface PricingTier {
  name: string;
  price: string;
  description: string;
  features: string[];
  highlighted?: boolean;
}

export const services: Service[] = [
  {
    title: "Product Design & UX",
    description:
      "User-centred design that drives engagement and reduces friction across every touchpoint.",
    icon: Paintbrush,
    bullets: [
      "User research & personas",
      "Wireframes & prototypes",
      "Design systems",
      "Usability testing",
    ],
  },
  {
    title: "Web App Development",
    description:
      "Performant, scalable web applications built with modern frameworks and best practices.",
    icon: Monitor,
    bullets: [
      "React & Next.js",
      "TypeScript-first",
      "Responsive & accessible",
      "CI/CD pipelines",
    ],
  },
  {
    title: "API & Integrations",
    description:
      "Connect your systems seamlessly with robust APIs and third-party integrations.",
    icon: Code2,
    bullets: [
      "RESTful & GraphQL APIs",
      "Payment gateways",
      "CRM integrations",
      "Webhook orchestration",
    ],
  },
  {
    title: "AI Features & Automation",
    description:
      "Embed intelligent automation into your workflows to save time and reduce errors.",
    icon: Cpu,
    bullets: [
      "LLM integration",
      "Document processing",
      "Predictive analytics",
      "Chatbot development",
    ],
  },
  {
    title: "Maintenance & Scaling",
    description:
      "Keep your product reliable and performant as your user base grows.",
    icon: Wrench,
    bullets: [
      "Performance monitoring",
      "Bug fixes & updates",
      "Load testing",
      "Database optimisation",
    ],
  },
  {
    title: "Cloud Deployment",
    description:
      "Secure, scalable infrastructure tailored to your application's needs.",
    icon: Cloud,
    bullets: [
      "AWS / GCP / Azure",
      "Docker & Kubernetes",
      "SSL & security",
      "Auto-scaling",
    ],
  },
];

export const caseStudies: CaseStudy[] = [
  {
    slug: "fintech-onboarding",
    title: "Fintech Onboarding Overhaul",
    summary:
      "Redesigned the onboarding flow for a digital banking platform, cutting drop-off and improving activation.",
    tags: ["UI/UX", "Web app"],
    metrics: [
      "Reduced onboarding time by 40%",
      "Increased activation by 28%",
      "4.8★ app store rating",
    ],
    problem:
      "The existing onboarding flow had a 60% drop-off rate due to excessive form fields and unclear progress indicators.",
    approach:
      "We conducted user interviews, mapped the journey, and redesigned the flow with progressive disclosure and smart defaults.",
    solution:
      "A streamlined 3-step onboarding with real-time validation, document upload via camera, and contextual help tooltips.",
    results:
      "Drop-off decreased from 60% to 20%. Average onboarding time fell from 12 minutes to 4 minutes.",
  },
  {
    slug: "saas-dashboard",
    title: "SaaS Analytics Dashboard",
    summary:
      "Built a real-time analytics dashboard that helped a SaaS team improve conversion tracking.",
    tags: ["Web app", "Integrations"],
    metrics: [
      "Improved conversion by 22%",
      "Real-time data sync",
      "50+ custom reports",
    ],
    problem:
      "The team relied on spreadsheets and manual exports to track conversion funnels, causing delays of up to 48 hours.",
    approach:
      "We designed a modular dashboard architecture with live data pipelines and customisable report builders.",
    solution:
      "A React-based dashboard with WebSocket-powered real-time updates, drag-and-drop report builder, and automated alerts.",
    results:
      "The team identified and fixed conversion bottlenecks within hours instead of days, improving conversion by 22%.",
  },
  {
    slug: "logistics-automation",
    title: "Logistics Operations Automation",
    summary:
      "Automated manual dispatch and tracking processes for a mid-size logistics company.",
    tags: ["AI", "Integrations"],
    metrics: ["Cut manual ops by 60%", "3x faster dispatch", "99.2% uptime"],
    problem:
      "Dispatchers manually assigned routes and updated tracking via phone calls and spreadsheets.",
    approach:
      "We built an AI-powered routing engine integrated with GPS tracking and automated customer notifications.",
    solution:
      "An intelligent dispatch system with route optimisation, real-time tracking dashboard, and automated SMS/email updates.",
    results:
      "Manual operations reduced by 60%. Average dispatch time dropped from 15 minutes to under 5 minutes.",
  },
];

export const faqs: FAQ[] = [
  {
    q: "How long does a typical project take?",
    a: "Most projects take 6–12 weeks from kickoff to launch, depending on scope. We'll give you a clear timeline after the discovery phase.",
  },
  {
    q: "Do you work with startups or only enterprise?",
    a: "We work with both. Whether you're a seed-stage startup or a scaling enterprise, we tailor our approach to your needs and budget.",
  },
  {
    q: "What technologies do you use?",
    a: "We primarily work with React, Next.js, TypeScript, Node.js, and Python. We choose the best tools for each project's requirements.",
  },
  {
    q: "Can you work with our existing team?",
    a: "Absolutely. We often embed with in-house teams, contributing code, design, or both. We adapt to your workflows and tools.",
  },
  {
    q: "What does your pricing include?",
    a: "Our pricing covers design, development, testing, and deployment. Ongoing maintenance is available as an optional add-on.",
  },
  {
    q: "Do you offer post-launch support?",
    a: "Yes. We offer maintenance packages that include bug fixes, performance monitoring, feature updates, and priority support.",
  },
];

export const testimonials: Testimonial[] = [
  {
    quote:
      "They transformed our product in weeks, not months. The team's ability to understand our domain and ship quality work was exceptional.",
    name: "Sarah Chen",
    role: "CTO",
    company: "PayFlow",
  },
  {
    quote:
      "Working with this team felt like having senior engineers embedded in our company. They moved fast without cutting corners.",
    name: "James Wright",
    role: "Head of Product",
    company: "LogiTrack",
  },
  {
    quote:
      "The dashboard they built gave us visibility we never had before. We've made better decisions every week since launch.",
    name: "Priya Sharma",
    role: "VP of Operations",
    company: "ScaleMetrics",
  },
];

export const pricingTiers: PricingTier[] = [
  {
    name: "Starter",
    price: "From £5,000",
    description: "Perfect for MVPs and proof-of-concept builds.",
    features: [
      "Up to 5 pages or screens",
      "Responsive design",
      "Basic integrations",
      "2 rounds of revisions",
      "Deployment included",
    ],
  },
  {
    name: "Growth",
    price: "From £15,000",
    description: "For teams ready to build a production-grade product.",
    features: [
      "Full web application",
      "Custom design system",
      "API development",
      "Authentication & roles",
      "CI/CD pipeline",
      "30 days post-launch support",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "From £35,000",
    description: "Enterprise-grade solutions with ongoing partnership.",
    features: [
      "Complex multi-service architecture",
      "AI & automation features",
      "Performance optimisation",
      "Security audit",
      "Dedicated team",
      "Ongoing maintenance",
    ],
  },
];

export const processSteps = [
  {
    step: 1,
    title: "Discover",
    description:
      "We learn your goals, users, and constraints through workshops and research.",
    deliverables: "Project brief, user personas, technical requirements",
  },
  {
    step: 2,
    title: "Design",
    description:
      "We create wireframes, prototypes, and a visual design system for your product.",
    deliverables: "Wireframes, interactive prototype, design system",
  },
  {
    step: 3,
    title: "Build",
    description:
      "We develop your product in agile sprints with regular demos and feedback loops.",
    deliverables: "Working software, test suite, documentation",
  },
  {
    step: 4,
    title: "Launch & Iterate",
    description:
      "We deploy, monitor, and iterate based on real user feedback and analytics.",
    deliverables: "Production deployment, analytics setup, iteration plan",
  },
];
