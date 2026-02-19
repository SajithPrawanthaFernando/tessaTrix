import { processSteps } from "@/lib/data";
import { motion } from "framer-motion";
import { Terminal, Cpu, HardDrive, Share2, Activity } from "lucide-react";

// Mapping icons for a more diverse technical feel
const phaseIcons = [Terminal, Cpu, HardDrive, Share2, Activity];

const ProcessTimeline = () => (
  <section className="section-padding md:mt-[-110px] mt-[-85px] relative overflow-hidden bg-background">
    {/* Background "Blueprint" Grid */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:linear-gradient(to_bottom,black,transparent)]" />

    <div className="container-main relative z-10">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:mb-28 mb-10 max-w-3xl"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6">
          Protocol
        </p>

        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]">
          Systematic <br />
          <span className="text-muted-foreground/30">Deployment.</span>
        </h2>
      </motion.div>

      {/* Vertical Blueprint Timeline */}
      <div className="relative space-y-0">
        {/* The Vertical Axis Line */}
        <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-primary/50 via-white/5 to-transparent hidden md:block" />

        {processSteps.map((step, i) => {
          const Icon = phaseIcons[i] || Terminal;
          const isEven = i % 2 === 0;

          return (
            <motion.div
              key={step.step}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className={`relative flex flex-col md:flex-row items-start mb-24 md:mb-0 ${
                isEven ? "md:flex-row-reverse" : ""
              }`}
            >
              {/* 1. The Central Node (The Dot) */}
              <div className="absolute left-4 md:left-1/2 top-0 -translate-x-1/2 z-20 hidden md:flex items-center justify-center">
                <div className="h-4 w-4 rounded-full bg-background border-2 border-primary shadow-[0_0_15px_rgba(var(--primary-rgb),0.5)]" />
              </div>

              {/* 2. The Content Card */}
              <div
                className={`w-full md:w-[45%] ${isEven ? "md:pl-16" : "md:pr-16"}  md:pl-0`}
              >
                <div className="group relative md:p-8 p-6 rounded-[2rem] border border-white/5 bg-white/[0.01] hover:bg-white/[0.03] transition-all duration-500 hover:border-primary/20">
                  {/* Phase ID Tag */}
                  <div className="flex items-center justify-between md:mb-8 mb-6">
                    <span className="font-mono text-[10px] font-bold text-primary tracking-[0.3em]">
                      PHASE_0{step.step}
                    </span>
                    <Icon className="h-4 w-4 text-muted-foreground/20 group-hover:text-primary transition-colors" />
                  </div>

                  <h3 className="text-3xl font-black tracking-tighter uppercase mb-4 group-hover:text-primary transition-colors">
                    {step.title}
                  </h3>

                  <p className="text-muted-foreground/70 text-base leading-relaxed md:mb-8 mb-4 font-medium">
                    {step.description}
                  </p>

                  {/* Technical Deliverables Footer */}
                  <div className="pt-6 border-t border-white/5">
                    <div className="flex items-center gap-3">
                      <div className="h-1 w-1 rounded-full bg-primary" />
                      <span className="text-[9px] font-mono font-bold uppercase tracking-widest text-muted-foreground/40">
                        Output: {step.deliverables}
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* 3. The Date/Time Stamp (Opposite side) */}
              <div
                className={`hidden md:flex w-[45%] flex-col ${isEven ? "items-end pr-16" : "items-start pl-16"} pt-8`}
              >
                <span className="text-8xl font-black tracking-tighter text-white/[0.02] select-none">
                  0{step.step}
                </span>
                <p className="text-[10px] font-mono font-bold text-muted-foreground/20 uppercase tracking-[0.5em] mt-[-20px]">
                  Step_Sequence
                </p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  </section>
);

export default ProcessTimeline;
