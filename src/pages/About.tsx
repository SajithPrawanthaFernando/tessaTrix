import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { motion } from "framer-motion";
import { Users, Calendar, Clock, Zap, Terminal, Cpu } from "lucide-react";

const values = [
  {
    title: "Clarity over complexity",
    description:
      "We keep things simple. Clear code, clear communication, clear outcomes.",
    tag: "Logic",
  },
  {
    title: "Ship with confidence",
    description: "We test thoroughly and deploy incrementally. No surprises.",
    tag: "QA",
  },
  {
    title: "Partnership, not outsourcing",
    description: "We work as an extension of your team, not a black box.",
    tag: "Collab",
  },
  {
    title: "Continuous improvement",
    description:
      "We iterate on everything — our code, our process, and ourselves.",
    tag: "CI/CD",
  },
];

const stats = [
  { icon: Calendar, label: "Market Presence", value: "6+", unit: "Years" },
  { icon: Users, label: "Systems Deployed", value: "80+", unit: "Projects" },
  { icon: Clock, label: "SLA Response", value: "<4", unit: "Hours" },
  { icon: Zap, label: "Client Retention", value: "92", unit: "%" },
];

const About = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <main className="pt-[150px]">
      {/* 1. Studio Manifesto Header */}
      <section className="md:pb-24 pb-[20px] px-4">
        <div className="container-main">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6"
          >
            Philosophy
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.8] text-foreground"
          >
            Deep Thinking. <br />
            <span className="gradient-text">Fast Coding.</span>
          </motion.h1>
          <div className="grid lg:grid-cols-12 gap-12 mt-16">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-7"
            >
              <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed font-medium">
                We're a specialized collective of designers and engineers who
                believe great software comes from a deep architectural
                understanding, not just a high velocity of commits.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* 2. System Status (Stats) */}
      <section className="md:py-24 py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-primary/[0.02] border-y border-white/5" />
        <div className="container-main relative z-10 px-4">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-12">
            {stats.map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group"
              >
                <div className="flex items-center gap-2 mb-4">
                  <stat.icon className="h-4 w-4 text-primary/40 group-hover:text-primary transition-colors" />
                  <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-muted-foreground/40">
                    {stat.label}
                  </span>
                </div>
                <div className="flex items-baseline gap-1">
                  <p className="text-5xl md:text-6xl font-black tracking-tighter">
                    {stat.value}
                  </p>
                  <p className="text-sm font-bold text-primary uppercase">
                    {stat.unit}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. The Code of Ethics (Values) */}
      <section className="section-padding md:mt-0 mt-[-50px]">
        <div className="container-main px-4">
          <div className="md:mb-20 mb-5">
            <h2 className="text-4xl md:text-6xl font-black tracking-tighter">
              Our <span className="text-muted-foreground/30">Foundations.</span>
            </h2>
          </div>

          <div className="grid gap-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="group relative bg-background p-8 md:p-12 flex flex-col md:flex-row gap-8 transition-colors hover:bg-white/[0.01]"
              >
                <div className="md:w-1/3">
                  <span className="font-mono text-[10px] font-bold text-primary/40 group-hover:text-primary transition-colors">
                    // ENV_VAR: {v.tag}
                  </span>
                  <h3 className="text-2xl font-black tracking-tighter uppercase mt-2">
                    {v.title}
                  </h3>
                </div>
                <div className="md:w-2/3">
                  <p className="text-lg text-muted-foreground/80 leading-relaxed font-medium">
                    {v.description}
                  </p>
                </div>
                <div className="absolute top-1/2 right-12 -translate-y-1/2 opacity-0 group-hover:opacity-10 transition-opacity hidden lg:block">
                  <Terminal className="h-24 w-24" />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <div className="md:pt-0 pt-[-50px]">
        <ContactCTA />
      </div>
    </main>
    <Footer />
  </div>
);

export default About;
