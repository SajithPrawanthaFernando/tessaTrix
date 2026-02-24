import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";

const ServicesGrid = () => (
  <section className="section-padding relative overflow-hidden bg-background">
    {/* Subtle Background Glow */}
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-full max-w-[1000px] bg-primary/5 blur-[120px] rounded-full pointer-events-none opacity-50" />

    <div className="container-main relative z-10">
      {/* Header Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="md:mb-12 mb-14"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6">
          System Capabilities
        </p>
        <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]">
          Architecting <br />
          <span className="text-muted-foreground/30">
            Technical Excellence.
          </span>
        </h2>
      </motion.div>

      {/* Grid Section */}
      <div className="grid gap-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden">
        {services.map((service, i) => (
          <motion.div
            key={service.title}
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group relative bg-background px-8 py-2  md:py-4 transition-all duration-500 hover:bg-white/[0.02]"
          >
            <div className="flex flex-col h-full relative z-10">
              {/* Card Header: Index + Action */}
              <div className="flex justify-between items-start md:mb-12 mb-6">
                <div className="space-y-1">
                  {/* Title: Massive & Tight */}
                  <h3 className="text-3xl md:text-4xl font-black tracking-tighter uppercase mb-6 leading-none group-hover:text-primary transition-colors">
                    {service.title}
                  </h3>

                  {/* Description */}
                  <p className="text-muted-foreground/70 text-base md:text-lg leading-relaxed max-w-xl mb-12 flex-grow font-medium">
                    {service.description}
                  </p>
                </div>
                <div className="h-10 w-10 hidden md:flex rounded-full border border-white/5  items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                  <ArrowUpRight className="h-5 w-5 text-muted-foreground/30 group-hover:text-white transition-colors" />
                </div>
              </div>
            </div>

            {/* Subtle Background Number Glow on Hover */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15rem] font-black text-white/[0.01] pointer-events-none select-none transition-opacity opacity-0 group-hover:opacity-100">
              0{i + 1}
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesGrid;
