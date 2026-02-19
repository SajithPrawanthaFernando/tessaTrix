import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X, Sparkles } from "lucide-react";
import { Button } from "@/components/ui/button";
import { motion, AnimatePresence } from "framer-motion";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "Services", href: "/services" },
  { label: "Work", href: "/work" },
  { label: "About", href: "/about" },
];

const Navbar = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [hoveredPath, setHoveredPath] = useState(null);
  const location = useLocation();

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className="fixed top-0 left-0 right-0 z-50 flex justify-center p-4 md:p-6"
    >
      {/* Floating Capsule Container */}
      <nav className="flex items-center justify-between w-full max-w-5xl px-6 h-16 rounded-2xl border border-white/10 bg-background/60 backdrop-blur-lg ">
        {/* Logo Section */}
        <Link
          to="/"
          className="group flex items-center gap-2 text-xl font-black tracking-tighter text-foreground"
        >
          <span className="block">
            Tessa<span className="text-primary">Trix</span>
          </span>
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1">
          {navLinks.map((link) => {
            const isActive = location.pathname === link.href;
            return (
              <Link
                key={link.href}
                to={link.href}
                onMouseEnter={() => setHoveredPath(link.href)}
                onMouseLeave={() => setHoveredPath(null)}
                className={`relative px-4 py-2 text-sm font-semibold transition-colors duration-300 ${
                  isActive
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                <span className="relative z-10">{link.label}</span>

                {/* Modern Hover/Active Pill */}
                {(hoveredPath === link.href ||
                  (hoveredPath === null && isActive)) && (
                  <motion.span
                    layoutId="nav-pill"
                    className="absolute inset-0 rounded-full bg-primary/10 border border-primary/20"
                    transition={{ type: "spring", stiffness: 400, damping: 30 }}
                  />
                )}
              </Link>
            );
          })}
        </div>

        {/* CTA Section */}
        <div className="flex items-center gap-4">
          <Button
            asChild
            size="sm"
            className="hidden sm:flex rounded-full px-6 font-bold bg-primary hover:shadow-[0_0_20px_rgba(var(--primary),0.4)] transition-all"
          >
            <Link to="/contact">Discuss a Project</Link>
          </Button>

          {/* Mobile Toggle */}
          <button
            className="md:hidden p-2 text-foreground"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X /> : <Menu />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            className="absolute top-20 left-4 right-4 p-6 rounded-3xl bg-background border border-white/10 shadow-2xl md:hidden"
          >
            <div className="flex flex-col gap-6 text-center">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  to={link.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl font-bold text-foreground"
                >
                  {link.label}
                </Link>
              ))}
              <hr className="border-white/5" />
              <Button asChild className="rounded-full h-14 text-lg font-bold">
                <Link to="/contact" onClick={() => setMobileOpen(false)}>
                  Book a call
                </Link>
              </Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};

export default Navbar;
