import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactCTA from "@/components/ContactCTA";
import { caseStudies } from "@/lib/data";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { ArrowUpRight } from "lucide-react";

const allTags = Array.from(new Set(caseStudies.flatMap((c) => c.tags)));

const Work = () => {
  const [activeTag, setActiveTag] = useState<string | null>(null);
  const filtered = activeTag
    ? caseStudies.filter((c) => c.tags.includes(activeTag))
    : caseStudies;

  return (
    <div className="bg-background min-h-screen">
      <Navbar />
      <main className="pt-[150px]">
        <section className="pb-20 px-4 sm:px-6">
          <div className="container-main">
            {/* 1. Studio Header */}
            <div className="max-w-4xl mb-20">
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6"
              >
                Archive
              </motion.p>
              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.8] text-foreground"
              >
                Selected <br />
                <span className="gradient-text">Case Studies.</span>
              </motion.h1>
            </div>

            {/* 2. Floating Filter System */}
            <div className="flex flex-wrap items-center gap-3 md:mb-24 border-b border-white/5 pb-10">
              <button
                onClick={() => setActiveTag(null)}
                className={`relative rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                  !activeTag
                    ? "text-primary"
                    : "text-muted-foreground hover:text-foreground"
                }`}
              >
                All Projects
                {!activeTag && (
                  <motion.div
                    layoutId="active-pill"
                    className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 -z-10"
                  />
                )}
              </button>
              {allTags.map((tag) => (
                <button
                  key={tag}
                  onClick={() => setActiveTag(tag)}
                  className={`relative rounded-full px-6 py-2 text-xs font-bold uppercase tracking-widest transition-all ${
                    activeTag === tag
                      ? "text-primary"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                >
                  {tag}
                  {activeTag === tag && (
                    <motion.div
                      layoutId="active-pill"
                      className="absolute inset-0 bg-primary/10 rounded-full border border-primary/20 -z-10"
                    />
                  )}
                </button>
              ))}
            </div>

            {/* 3. Cinematic Project Grid */}
            <div className="grid gap-x-12 md:gap-y-24 gap-y-16 md:grid-cols-2">
              <AnimatePresence mode="popLayout">
                {filtered.map((study, i) => (
                  <motion.div
                    key={study.slug}
                    layout
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.9 }}
                    transition={{ duration: 0.5, delay: i * 0.05 }}
                    className={`group ${i % 2 !== 0 ? "md:mt-32" : ""}`} // Asymmetric Offset
                  >
                    <Link to={`/work/${study.slug}`} className="block">
                      {/* Image Card */}
                      <div className="relative aspect-[4/5] overflow-hidden rounded-[2rem] border border-white/5 bg-muted">
                        <motion.img
                          src={
                            study.image ||
                            "https://images.unsplash.com/photo-1558655146-d09347e92766?q=80&w=1964&auto=format&fit=crop"
                          }
                          alt={study.title}
                          className="w-full h-full object-cover md:grayscale group-hover:grayscale-0 group-hover:scale-110 transition-all duration-1000 ease-in-out"
                        />

                        {/* Internal Label Overlay */}
                        <div className="absolute bottom-8 left-8 right-8 flex justify-between items-end opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                          <div className="backdrop-blur-xl bg-white/10 border border-white/20 p-4 rounded-2xl">
                            <p className="text-white text-[10px] font-bold uppercase tracking-tighter mb-1">
                              Impact
                            </p>
                            <p className="text-white font-mono text-lg">
                              {study.metrics[0]}
                            </p>
                          </div>
                          <div className="h-14 w-14 rounded-full bg-primary hidden md:flex items-center justify-center text-white shadow-xl">
                            <ArrowUpRight className="h-6 w-6" />
                          </div>
                        </div>
                      </div>

                      {/* Content Info */}
                      <div className="mt-8 space-y-4">
                        <div className="flex gap-2">
                          {study.tags.map((tag) => (
                            <span
                              key={tag}
                              className="text-[10px] font-bold text-primary uppercase tracking-widest"
                            >
                              {tag}
                            </span>
                          ))}
                        </div>
                        <h3 className="text-4xl font-black tracking-tighter leading-none">
                          {study.title}
                        </h3>
                        <p className="text-muted-foreground/60 max-w-sm text-sm font-medium leading-relaxed">
                          {study.summary}
                        </p>
                      </div>
                    </Link>
                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          </div>
        </section>

        <div className="md:pt-20 pt-5">
          <ContactCTA />
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Work;
