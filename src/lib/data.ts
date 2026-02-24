import {
  Monitor,
  Paintbrush,
  Code2,
  Cpu,
  Wrench,
  Cloud,
  LucideIcon,
} from "lucide-react";

import guidance from "../assets/guidance.png";
import homefix from "../assets/homefix.png";

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
  image?: string;
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
    slug: "guidance-lk-medical-consultancy",
    title: "Guidance.lk Education Platform",
    summary:
      "Developed a medical education portal to streamline Belarusian university applications for Sri Lankan students.",
    tags: ["UI/UX", "Web Development"],
    metrics: [
      "Digitized a complex manual application guide",
      "Mapped career pathways for 5+ global regions ",
      "Reduced pre consultation inquiry time by 60%",
    ],
    problem:
      "The medical consultancy industry lacked transparency, leaving students confused about eligibility and complex visa procedures.",
    approach:
      "Information architecture was restructured to prioritize trust, using a vertical timeline for the journey and clear recognition pillars.",
    solution:
      "A high-performance platform featuring a 6-year MD program breakdown, an interactive 9-step application guide, and direct WhatsApp integration.",
    results:
      "Transformed a fragmented process into a clear roadmap, reducing user cognitive load and establishing a 'zero-middlemen' trust model.",
    image: guidance,
  },
  {
    slug: "homefix-lk-cleaning-service",
    title: "HomeFix.lk Service Platform",
    summary:
      "Designed and developed a high-conversion booking platform for professional home maintenance services.",
    tags: ["UI/UX", "Web Development", "Service Integration"],
    metrics: [
      "Built a managed service model for 50+ trained staff",
      "Streamlined booking for 500+ completed cleans",
      "Maintained a 4.9/5 star average customer rating",
    ],
    problem:
      "The home cleaning market in Colombo was fragmented, with homeowners struggling to find reliable, vetted help and consistent service quality.",
    approach:
      "Focused on 'Trust-First' architecture by highlighting safety clearances, trained staff profiles, and a transparent core value system.",
    solution:
      "A multi-service booking engine featuring specialized flows for Deep Cleaning, Maid Services, and industrial-grade Sofa shampooing.",
    results:
      "Transformed the freelancer-market experience into a premium managed service, resulting in over 500 happy clients and consistent same-day booking reliability.",
    image: homefix,
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
    price: "From 20,000 LKR",
    description:
      "For startups and small businesses launching their first website.",
    features: [
      "Functional website using 1 page",
      "3 day delivery",
      "Hosting setup",
      "Social media icons",
      "Unlimited Revisions",
    ],
  },
  {
    name: "Growth",
    price: "From 80,000 LKR",
    description:
      "For businesses looking to establish a strong online presence.",
    features: [
      "Functional website upto 5 pages",
      "5 day delivery",
      "Speed optimization",
      "Hosting setup",
      "Social media icons",
      "Unlimited Revisions",
    ],
    highlighted: true,
  },
  {
    name: "Scale",
    price: "From 200,000 LKR",
    description: "For organizations needing a robust, scalable solution.",
    features: [
      "Functional website upto 10 pages",
      "14 day delivery",
      "Speed optimization",
      "Hosting setup",
      "Social media icons",
      "E-commerce functionality",
      "Custom integrations",
      "Unlimited Revisions",
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
