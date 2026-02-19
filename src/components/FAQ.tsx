import { faqs } from "@/lib/data";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { HelpCircle } from "lucide-react";

const FAQ = () => (
  <section className="section-padding md:mt-[-110px] mt-[-70px] relative overflow-hidden bg-background">
    {/* Subtle Grid Background */}
    <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808008_1px,transparent_1px),linear-gradient(to_bottom,#80808008_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)]" />

    <div className="container-main relative z-10">
      <div className="grid lg:grid-cols-12 gap-16">
        {/* Left Side: Sticky Section Header */}
        <div className="lg:col-span-4 lg:sticky lg:top-[35px] h-fit">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6">
              Inquiry
            </p>
            <h2 className="text-5xl md:text-7xl font-black tracking-tighter leading-[0.85] mb-8">
              Technical <br />
              <span className="text-muted-foreground/30">Inquiries.</span>
            </h2>
            <div className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 backdrop-blur-sm md:mb-0 mb-[-55px]">
              <div className="flex items-center gap-3 mb-4">
                <HelpCircle className="h-5 w-5 text-primary" />
                <span className="text-xs font-bold uppercase tracking-widest">
                  Need Clarity?
                </span>
              </div>
              <p className="text-xs text-muted-foreground leading-relaxed">
                If your technical query isn't listed here, reach out directly
                for a deep-dive consultation.
              </p>
            </div>
          </motion.div>
        </div>

        {/* Right Side: Modern Accordion Stack */}
        <div className="lg:col-span-8">
          <Accordion type="single" collapsible className="w-full space-y-4">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.05 }}
              >
                <AccordionItem
                  value={`faq-${i}`}
                  className="border border-white/5 bg-white/[0.01] rounded-[1.5rem] px-6 md:px-8 transition-all hover:bg-white/[0.03] data-[state=open]:bg-white/[0.04] data-[state=open]:border-primary/20"
                >
                  <AccordionTrigger className="hover:no-underline group py-6">
                    <div className="flex items-start gap-4 text-left">
                      <span className="mt-1 font-mono text-[10px] font-bold text-primary opacity-40 group-hover:opacity-100 transition-opacity">
                        [Q.0{i + 1}]
                      </span>
                      <span className="text-base md:text-lg font-bold tracking-tight text-foreground transition-colors group-hover:text-primary group-data-[state=open]:text-primary">
                        {faq.q}
                      </span>
                    </div>
                  </AccordionTrigger>
                  <AccordionContent className="pb-8 pl-10 md:pl-14">
                    <div className="h-px w-8 bg-primary/20 mb-6" />
                    <p className="text-sm md:text-base text-muted-foreground/80 leading-relaxed font-medium">
                      {faq.a}
                    </p>
                  </AccordionContent>
                </AccordionItem>
              </motion.div>
            ))}
          </Accordion>
        </div>
      </div>
    </div>
  </section>
);

export default FAQ;
