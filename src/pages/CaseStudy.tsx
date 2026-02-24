import { useParams, Link } from "react-router-dom";
import { caseStudies } from "@/lib/data";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowLeft, ArrowUpRight, Sparkles } from "lucide-react";

const CaseStudy = () => {
  const { slug } = useParams();
  const study = caseStudies.find((c) => c.slug === slug);

  if (!study) {
    return (
      <div className="bg-background min-h-screen flex flex-col">
        <Navbar />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-9xl font-black tracking-tighter text-muted-foreground/10 mb-4">
              404
            </h1>
            <p className="text-xl font-bold mb-8">
              Case study vanished into the void.
            </p>
            <Button asChild variant="outline" className="rounded-full px-8">
              <Link to="/work">
                <ArrowLeft className="mr-2 h-4 w-4" /> Back to Portfolio
              </Link>
            </Button>
          </div>
        </main>
        <Footer />
      </div>
    );
  }

  const sections = [
    { title: "The Problem", content: study.problem, tag: "Challenge" },
    { title: "Our Approach", content: study.approach, tag: "Strategy" },
    { title: "The Solution", content: study.solution, tag: "Execution" },
    { title: "Final Results", content: study.results, tag: "Impact" },
  ];

  return (
    <div className="bg-background min-h-screen">
      <Navbar />

      <main className="pt-32">
        {/* 1. Cinematic Hero Section */}
        <section className="px-4 md:mb-24 mb-10">
          <div className="container-main">
            <Link
              to="/work"
              className="group inline-flex items-center text-[10px] font-bold uppercase tracking-[0.3em] text-muted-foreground hover:text-primary mb-12 transition-colors"
            >
              <ArrowLeft className="mr-2 h-3 w-3 group-hover:-translate-x-1 transition-transform" />{" "}
              Back to work
            </Link>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              className="max-w-5xl"
            >
              <div className="flex gap-3 mb-8">
                {study.tags.map((tag) => (
                  <span
                    key={tag}
                    className="text-[10px] font-bold uppercase tracking-widest text-primary bg-primary/10 px-4 py-1.5 rounded-full border border-primary/20"
                  >
                    {tag}
                  </span>
                ))}
              </div>

              <h1 className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.85] mb-12">
                {study.title.split(" ").slice(0, -1).join(" ")} <br />
                <span className="gradient-text">
                  {study.title.split(" ").pop()}
                </span>
              </h1>

              <p className="text-xl md:text-2xl text-muted-foreground/80 leading-relaxed max-w-3xl font-medium">
                {study.summary}
              </p>
            </motion.div>
          </div>
        </section>

        {/* 2. Full-Width Image Placeholder */}
        <motion.section
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="container-main px-4 md:mb-32 mb-12"
        >
          <div className="aspect-[21/9] rounded-[2.5rem] overflow-hidden border border-white/5 shadow-2xl bg-muted group">
            <img
              src={
                study.image ||
                "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop"
              }
              className="w-full h-full object-cover md:grayscale-[0.5] group-hover:grayscale-0 transition-all duration-1000"
              alt={study.title}
            />
          </div>
        </motion.section>

        {/* 3. Stats Highlight Grid */}
        <section className="container-main px-4 md:mb-32 mb-20">
          <div className="grid gap-4 sm:grid-cols-3">
            {study.metrics.map((m, i) => (
              <motion.div
                key={m}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="p-8 rounded-[2rem] bg-secondary/30 border border-white/5 backdrop-blur-sm text-center group hover:border-primary/30 transition-colors"
              >
                <Sparkles className="h-4 w-4 text-primary mx-auto mb-4 opacity-40 group-hover:opacity-100" />
                <p className="text-3xl font-black tracking-tighter text-foreground">
                  {m}
                </p>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-muted-foreground mt-2">
                  Key Outcome
                </p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* 4. Structured Content Sections */}
        <section className="container-main px-4 md:pb-32 pb-16">
          <div className="grid lg:grid-cols-12 gap-16">
            <div className="lg:col-span-4 hidden lg:block sticky top-32 h-fit">
              <nav className="space-y-6">
                {sections.map((s) => (
                  <div key={s.title} className="group cursor-default">
                    <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground/40 group-hover:text-primary transition-colors">
                      {s.tag}
                    </p>
                    <p className="text-lg font-bold tracking-tight">
                      {s.title}
                    </p>
                  </div>
                ))}
              </nav>
            </div>

            <div className="lg:col-span-8 md:space-y-24 space-y-16">
              {sections.map((s, i) => (
                <motion.div
                  key={s.title}
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="space-y-6"
                >
                  <div className="h-px w-12 bg-primary mb-8" />
                  <h2 className="text-4xl font-black tracking-tighter">
                    {s.title}
                  </h2>
                  <p className="text-lg md:text-xl text-muted-foreground leading-relaxed font-medium">
                    {s.content}
                  </p>
                </motion.div>
              ))}

              <motion.div
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                className="md:pt-16 pt-5  border-t border-white/5 "
              >
                <Button
                  asChild
                  size="lg"
                  className="rounded-full h-16 md:w-auto w-full px-10 text-lg font-bold shadow-2xl shadow-primary/20"
                >
                  <Link to="/contact">
                    Discuss a similar project{" "}
                    <ArrowUpRight className="ml-2 h-5 w-5" />
                  </Link>
                </Button>
              </motion.div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
};

export default CaseStudy;
