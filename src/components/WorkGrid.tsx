import { Link } from "react-router-dom";
import { caseStudies } from "@/lib/data";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import { Button } from "@/components/ui/button";

interface WorkGridProps {
  limit?: number;
  showCta?: boolean;
}

const WorkGrid = ({ limit, showCta = true }: WorkGridProps) => {
  const items = limit ? caseStudies.slice(0, limit) : caseStudies;

  return (
    <section className="section-padding md:mt-[-170px] mt-[-120px] bg-background relative overflow-hidden">
      <div className="container-main relative z-10">
        {/* Header Section */}
        <div className="flex flex-col md:flex-row md:items-end justify-between md:mb-20 mb-10 gap-6">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="max-w-2xl"
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-4">
              Portfolio
            </p>

            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85]">
              Selected <br />
              <span className="text-muted-foreground/30">Case Studies.</span>
            </h2>
          </motion.div>

          {showCta && (
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
            >
              <Button
                asChild
                variant="link"
                className="text-foreground font-bold p-0 group"
              >
                <Link to="/work" className="flex items-center gap-2">
                  View all work{" "}
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                </Link>
              </Button>
            </motion.div>
          )}
        </div>

        {/* Project Grid */}
        <div className="grid gap-12 md:grid-cols-2">
          {items.map((study, i) => (
            <motion.div
              key={study.slug}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1, duration: 0.6 }}
              className="group relative"
            >
              <Link
                to={`/work/${study.slug}`}
                className="block overflow-hidden"
              >
                {/* Image Container with Zoom Effect */}
                <div className="relative aspect-[16/10] overflow-hidden rounded-3xl border border-white/5 bg-muted">
                  <motion.img
                    src={
                      study.image ||
                      "https://images.unsplash.com/photo-1460925895917-afdab827c52f?q=80&w=2426&auto=format&fit=crop"
                    } // Add image to your data
                    alt={study.title}
                    className="w-full h-full object-cover grayscale-[0.2] group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700"
                  />
                  {/* Glassmorphism Tag Overlay */}
                  <div className="absolute top-6 left-6 flex flex-wrap gap-2">
                    {study.tags.slice(0, 2).map((tag) => (
                      <span
                        key={tag}
                        className="backdrop-blur-md bg-black/40 border border-white/10 px-4 py-1.5 rounded-full text-[10px] font-bold uppercase tracking-widest text-white"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Project Info Below Image */}
                <div className="mt-8 flex justify-between items-start">
                  <div className="space-y-2">
                    <h3 className="text-2xl font-black tracking-tighter group-hover:text-primary transition-colors">
                      {study.title}
                    </h3>
                    <p className="text-muted-foreground line-clamp-2 max-w-md leading-relaxed">
                      {study.summary}
                    </p>
                  </div>

                  {/* Floating Metric Badge */}
                  <div className="md:flex hidden flex-col items-end">
                    <div className="mt-4 h-10 w-10 rounded-full border border-border flex items-center justify-center group-hover:bg-primary group-hover:border-primary transition-all duration-300">
                      <ArrowUpRight className="h-5 w-5 group-hover:text-white transition-colors" />
                    </div>
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WorkGrid;
