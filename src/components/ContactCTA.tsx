import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowUpRight, Mail } from "lucide-react";

const ContactCTA = () => (
  <section className="relative py-32 md:py-48 overflow-hidden bg-background">
    {/* 1. Background Glow Effect */}
    <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1000px] bg-primary/10 blur-[150px] rounded-full pointer-events-none" />

    <div className="container-main relative z-10 text-center px-4">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
      >
        {/* Subtle Tag */}
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-8">
          Next Phase
        </p>

        {/* 2. Massive Headline */}
        <h2 className="text-6xl md:text-8xl lg:text-[10rem] font-black tracking-tighter leading-[0.8] mb-12">
          Let’s build <br />
          <span className="text-muted-foreground/20">your vision.</span>
        </h2>

        {/* 3. Shortened Subtext */}
        <p className="text-muted-foreground/60 max-w-xl mx-auto mb-16 text-lg md:text-xl font-medium leading-relaxed">
          High-performance architecture for teams ready to scale. Expect a
          response within 24 hours.
        </p>

        {/* 4. Interactive Action Buttons */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <Button
            asChild
            size="lg"
            className="group rounded-full px-12 h-20 text-xl font-bold shadow-2xl shadow-primary/40 hover:scale-105 transition-all bg-primary"
          >
            <Link to="/contact" className="flex items-center gap-2">
              Start a Project
              <ArrowUpRight className="h-6 w-6 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </Link>
          </Button>

          <a
            href="mailto:hello@thesatrix.com"
            className="flex items-center gap-3 text-foreground font-bold text-lg hover:text-primary transition-colors group"
          >
            <div className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center group-hover:border-primary transition-colors">
              <Mail className="h-5 w-5" />
            </div>
            hello@thesatrix.com
          </a>
        </div>
      </motion.div>
    </div>

    {/* Subtle Decorative Line */}
    <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/5 to-transparent" />
  </section>
);

export default ContactCTA;
