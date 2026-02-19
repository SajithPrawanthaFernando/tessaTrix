import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowUpRight, Github, Twitter, Linkedin } from "lucide-react";

const footerLinks = [
  {
    title: "Sitemap",
    links: [
      { label: "Home", href: "/" },
      { label: "Services", href: "/services" },
      { label: "Work", href: "/work" },
      { label: "About", href: "/about" },
    ],
  },
  {
    title: "Capabilities",
    links: [
      { label: "SaaS Architecture", href: "/services" },
      { label: "Fintech Systems", href: "/services" },
      { label: "AI Integration", href: "/services" },
      { label: "Logistics Tools", href: "/services" },
    ],
  },
];

const Footer = () => (
  <footer className="bg-background border-t border-white/5 relative overflow-hidden">
    {/* Subtle technical grid overlay */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808005_1px,transparent_1px),linear-gradient(to_bottom,#80808005_1px,transparent_1px)] bg-[size:64px_64px]" />

    <div className="container-main relative z-10 pt-24 pb-12 px-4">
      <div className="grid gap-16 lg:grid-cols-12 mb-20">
        {/* Brand Column */}
        <div className="lg:col-span-6 space-y-8">
          <Link
            to="/"
            className="group flex items-center gap-3 text-3xl font-black tracking-tighter text-foreground"
          >
            <span>
              Tessa<span className="text-primary">Trix</span>
            </span>
          </Link>
          <p className="max-w-md text-lg font-medium text-muted-foreground/60 leading-relaxed">
            Engineering high-performance digital systems for teams that demand
            technical precision and scalability.
          </p>
          <div className="flex gap-4">
            {[Twitter, Github, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="h-12 w-12 rounded-full border border-white/5 flex items-center justify-center hover:bg-primary hover:border-primary transition-all duration-300 group"
              >
                <Icon className="h-5 w-5 text-muted-foreground group-hover:text-white" />
              </a>
            ))}
          </div>
        </div>

        {/* Links Columns */}
        <div className="lg:col-span-6 grid grid-cols-2 gap-8">
          {footerLinks.map((group) => (
            <div key={group.title}>
              <h4 className="mb-8 text-[10px] font-bold uppercase tracking-[0.4em] text-primary">
                {group.title}
              </h4>
              <ul className="space-y-4">
                {group.links.map((link) => (
                  <li key={link.label}>
                    <Link
                      to={link.href}
                      className="group flex items-center gap-1 text-sm font-semibold text-muted-foreground transition-colors hover:text-foreground"
                    >
                      {link.label}
                      <ArrowUpRight className="h-3 w-3 opacity-0 -translate-y-1 group-hover:opacity-100 group-hover:translate-y-0 transition-all" />
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>

      {/* Bottom Metadata Bar */}
      <div className="md:pt-12 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
        <div className="flex items-center gap-6">
          <p className="text-[10px] font-mono font-bold text-muted-foreground/30 uppercase tracking-widest">
            © {new Date().getFullYear()} ThesaTrix. All rights reserved.
          </p>
        </div>

        <div className="flex gap-8">
          <Link
            to="/privacy"
            className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/30 hover:text-primary transition-colors"
          >
            Privacy Policy
          </Link>
          <Link
            to="/terms"
            className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/30 hover:text-primary transition-colors"
          >
            Terms of Service
          </Link>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
