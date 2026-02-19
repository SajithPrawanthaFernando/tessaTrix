import { pricingTiers } from "@/lib/data";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Plus, ArrowRight, ShieldCheck } from "lucide-react";

const Pricing = () => (
  <section className="section-padding md:mt-[-150px] mt-[-110px] bg-background relative overflow-hidden">
    {/* Background "Noise" and Grid for a technical feel */}
    <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03] pointer-events-none" />

    <div className="container-main relative z-10">
      <div className="grid lg:grid-cols-12 gap-16 items-start">
        {/* Left Side: Sticky Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-12">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6">
              Investment Models
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.8] mb-8">
              Pricing <br />
              <span className="text-muted-foreground/20">Structure.</span>
            </h2>

            <p className="text-muted-foreground/60 font-medium leading-relaxed max-w-xs">
              Transparent, performance-driven pricing for businesses that value
              technical excellence.
            </p>

            <div className="mt-12 p-6 rounded-2xl bg-primary/5 border border-primary/10 mb-[-40px] md:mb-0">
              <ShieldCheck className="h-6 w-6 text-primary mb-3" />
              <p className="text-xs font-bold uppercase tracking-widest text-foreground mb-1">
                Fixed-Scope Guarantee
              </p>
              <p className="text-[11px] text-muted-foreground">
                No hidden fees. We bill based on agreed-upon milestones and
                deliverables.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Expanding Tier Stack */}
        <div className="lg:col-span-8 space-y-4">
          {pricingTiers.map((tier, i) => (
            <motion.div
              key={tier.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className={`group relative rounded-[2rem] border transition-all duration-500 overflow-hidden mb-[-115px] ${
                tier.highlighted
                  ? "bg-card border-primary/30 shadow-2xl shadow-primary/5"
                  : "bg-white/[0.02] border-white/5 hover:border-white/10"
              }`}
            >
              <div className="p-8 md:p-10">
                <div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-10">
                  <div className="flex items-center gap-4">
                    <div
                      className={`h-10 w-10 rounded-full flex items-center justify-center font-mono text-xs font-bold border ${
                        tier.highlighted
                          ? "bg-primary text-white border-primary"
                          : "bg-background border-white/10 text-muted-foreground"
                      }`}
                    >
                      0{i + 1}
                    </div>
                    <div>
                      <h3 className="text-2xl font-black tracking-tighter uppercase">
                        {tier.name}
                      </h3>
                      <p className="text-[10px] font-bold text-primary uppercase tracking-[0.2em]">
                        {tier.description.split(" ").slice(0, 2).join(" ")}
                      </p>
                    </div>
                  </div>

                  <div className="text-left md:text-right">
                    <p className="text-4xl font-black tracking-tighter text-foreground">
                      {tier.price}
                    </p>
                    <p className="text-[10px] font-bold text-muted-foreground/40 uppercase tracking-widest mt-1">
                      Project Base Investment
                    </p>
                  </div>
                </div>

                {/* Features: Two-Column Grid */}
                <div className="grid md:grid-cols-2 gap-x-12 gap-y-4 mb-10">
                  {tier.features.map((f) => (
                    <div
                      key={f}
                      className="flex items-center gap-3 py-2 border-b border-white/5"
                    >
                      <Plus className="h-3 w-3 text-primary" />
                      <span className="text-sm font-medium text-muted-foreground group-hover:text-foreground transition-colors">
                        {f}
                      </span>
                    </div>
                  ))}
                </div>

                {/* Final Action */}
                <div className="flex items-center justify-between pt-6">
                  <Button
                    asChild
                    className={`rounded-full px-8 h-14 font-bold transition-all ${
                      tier.highlighted
                        ? "bg-primary shadow-xl shadow-primary/20 hover:scale-105"
                        : "bg-white/5 border border-white/10 hover:bg-white/10"
                    }`}
                  >
                    <Link to="/contact" className="flex items-center gap-2">
                      Inquire Phase <ArrowRight className="h-4 w-4" />
                    </Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export default Pricing;
