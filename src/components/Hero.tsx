import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

// You can use your actual skill icons here
const techStack = [
  {
    name: "React",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/tailwindcss/tailwindcss-original.svg",
  },
  {
    name: "Framer",
    logo: "https://www.vectorlogo.zone/logos/framer/framer-icon.svg",
  },
  {
    name: "Node",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "PostgreSQL",
    logo: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/postgresql/postgresql-original.svg",
  },
  {
    name: "AWS",
    logo: "https://www.vectorlogo.zone/logos/amazon_aws/amazon_aws-icon.svg",
  },
];

const Hero = () => (
  <section className="relative min-h-[90vh] pt-[180px] pb-20 flex flex-col items-center justify-center overflow-hidden bg-background px-4">
    {/* 1. The Focal Point Gradient (Matches your theme) */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[800px] max-h-[500px] bg-primary/20 blur-[120px] rounded-full pointer-events-none opacity-50" />

    <div className="container-main relative z-10 text-center">
      {/* 2. Badge */}

      {/* 3. High-Impact Heading */}
      <motion.h1
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1 }}
        className="text-5xl md:text-7xl lg:text-8xl font-extrabold tracking-tighter leading-[0.9] text-foreground"
      >
        Your Technical Partner for <br />
        <span className="gradient-text">Modern Innovation.</span>
      </motion.h1>

      {/* 4. Subtext */}
      <motion.p
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
        className="mt-8 mx-auto max-w-2xl text-lg md:text-xl text-muted-foreground leading-relaxed"
      >
        With innovative strategies and tailored digital solutions, we help you
        achieve sustainable growth and lasting technical excellence.
      </motion.p>

      {/* 5. Primary Action */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        className="mt-12"
      >
        <Button
          asChild
          size="lg"
          className="rounded-full px-10 h-16 text-lg font-bold shadow-2xl shadow-primary/40 hover:scale-105 transition-all"
        >
          <Link to="/contact">
            Discuss a Project <ArrowRight className="ml-2 h-5 w-5" />
          </Link>
        </Button>
      </motion.div>

      {/* 6. Tech Stack / Client Marquee */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 1 }}
        className="mt-24 w-full max-w-4xl mx-auto"
      >
        <p className="text-[10px] font-bold uppercase pt-10  tracking-[0.4em] text-muted-foreground/40 mb-10">
          Crafting with the best tools
        </p>
        <div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-30 grayscale hover:opacity-100 transition-all duration-700">
          {techStack.map((tech) => (
            <motion.div
              key={tech.name}
              whileHover={{ scale: 1.2, filter: "grayscale(0%)" }}
              className="flex items-center justify-center"
            >
              <img
                src={tech.logo}
                alt={tech.name}
                className="h-8 w-8 md:h-10 md:w-10 object-contain"
                title={tech.name}
              />
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>

    {/* Subtle Grid Pattern Overlay */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none" />
  </section>
);

export default Hero;
