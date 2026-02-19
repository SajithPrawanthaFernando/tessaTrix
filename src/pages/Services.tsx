import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { services } from "@/lib/data";
import { motion } from "framer-motion";
import { CheckCircle2, ArrowUpRight } from "lucide-react";

const Services = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <main className="pt-[150px]">
      <section className="pb-10 px-4">
        {/* 1. Studio Header */}
        <div className="container-main md:mb-20 mb-10">
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6"
          >
            Core Capabilities
          </motion.p>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.8] text-foreground"
          >
            Technical <br />
            <span className="gradient-text">Excellence.</span>
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="mt-12 text-muted-foreground/60 max-w-2xl text-lg md:text-xl font-medium leading-relaxed"
          >
            We engineer high-performance software systems for teams that demand
            unlimited scalability and absolute technical precision.
          </motion.p>
        </div>

        {/* 2. Services Capability Index */}
        <div className="container-main space-y-px bg-white/5 border border-white/5 rounded-[2.5rem] overflow-hidden md:mb-0 mb-[-80px]">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="group relative bg-background p-8 md:p-16 flex flex-col lg:flex-row gap-12 lg:items-center transition-colors hover:bg-white/[0.01]"
            >
              {/* Service Meta */}
              <div className="lg:w-1/2 space-y-6">
                <h2 className="text-4xl md:text-5xl font-black tracking-tighter group-hover:text-primary transition-colors">
                  {service.title}
                </h2>

                <p className="text-muted-foreground/80 text-lg leading-relaxed max-w-md">
                  {service.description}
                </p>
              </div>

              {/* Service Bullets / Technical Specs */}
              <div className="lg:w-1/2">
                <div className="grid sm:grid-cols-2 gap-4">
                  {service.bullets.map((b) => (
                    <div
                      key={b}
                      className="flex items-center gap-3 p-4 rounded-2xl bg-white/[0.02] border border-white/5 group-hover:border-primary/20 transition-all duration-500"
                    >
                      <CheckCircle2 className="h-4 w-4 text-primary shrink-0 opacity-40 group-hover:opacity-100" />
                      <span className="text-sm font-bold text-muted-foreground/70 group-hover:text-foreground">
                        {b}
                      </span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Corner Detail */}
              <div className="absolute top-8 right-8 hidden lg:block opacity-0 group-hover:opacity-100 transition-opacity">
                <ArrowUpRight className="h-6 w-6 text-primary" />
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      <div className="pt-20">
        <ContactCTA />
      </div>
    </main>
    <Footer />
  </div>
);

export default Services;
