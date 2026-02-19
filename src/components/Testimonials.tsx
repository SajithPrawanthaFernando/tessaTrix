import { useState } from "react";
import { testimonials } from "@/lib/data";
import { motion, AnimatePresence } from "framer-motion";
import { Terminal, ChevronLeft, ChevronRight } from "lucide-react";

const TestimonialSlider = () => {
  const [index, setIndex] = useState(0);

  const nextStep = () => {
    setIndex((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setIndex((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1));
  };

  return (
    <section className="section-padding md:mt-[-250px] mt-[-250px] bg-background relative overflow-hidden">
      {/* Background Technical Grid */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px]" />

      <div className="container-main relative z-10">
        <div className="flex flex-col md:flex-row md:items-end justify-between md:mb-20 gap-8">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] md:mb-0 mb-[-40px]">
              Client <br />
              <span className="text-muted-foreground/30">Verification.</span>
            </h2>
          </motion.div>
          .{/* Slider Controls */}
          <div className="flex gap-4">
            <button
              onClick={prevStep}
              className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-primary/50 transition-all group"
            >
              <ChevronLeft className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            </button>
            <button
              onClick={nextStep}
              className="h-12 w-12 rounded-full border border-white/10 flex items-center justify-center hover:bg-white/5 hover:border-primary/50 transition-all group"
            >
              <ChevronRight className="h-5 w-5 text-muted-foreground group-hover:text-primary" />
            </button>
          </div>
        </div>

        {/* The Slider Window */}
        <div className="relative min-h-[400px] flex items-center overflow-hidden rounded-[2.5rem] border border-white/5 bg-white/[0.02] backdrop-blur-sm">
          <AnimatePresence mode="wait">
            <motion.div
              key={index}
              initial={{ opacity: 0, x: 50, filter: "blur(10px)" }}
              animate={{ opacity: 1, x: 0, filter: "blur(0px)" }}
              exit={{ opacity: 0, x: -50, filter: "blur(10px)" }}
              transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="p-8 md:p-20 w-full"
            >
              <div className="flex flex-col md:flex-row gap-12 justify-between">
                <div className="max-w-3xl">
                  {/* Technical Status Line */}
                  <div className="flex items-center gap-3 mb-8">
                    <div className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                    <span className="text-[10px] font-mono font-bold uppercase tracking-widest text-primary">
                      Verified_Feedback_0{index + 1}
                    </span>
                  </div>

                  <p className="text-2xl md:text-4xl font-medium tracking-tight leading-relaxed italic text-foreground/90">
                    "{testimonials[index].quote}"
                  </p>

                  <div className="mt-12 flex items-center gap-6">
                    <div className="h-px w-12 bg-primary/30" />
                    <div>
                      <p className="text-lg font-black tracking-tighter uppercase text-foreground">
                        {testimonials[index].name}
                      </p>
                      <p className="text-[10px] font-mono font-bold text-muted-foreground/50 uppercase tracking-widest">
                        {testimonials[index].role} //{" "}
                        {testimonials[index].company}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Progress Bar */}
        <div className="md:mt-10 flex justify-center gap-2">
          {testimonials.map((_, i) => (
            <div
              key={i}
              className={`h-1 transition-all duration-500 rounded-full ${
                i === index ? "w-12 bg-primary" : "w-4 bg-white/10"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
