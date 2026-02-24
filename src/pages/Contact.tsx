import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactForm from "@/components/ContactForm";
import { motion } from "framer-motion";
import { Mail, MapPin, Globe, ArrowDownRight } from "lucide-react";

const Contact = () => (
  <div className="bg-background min-h-screen">
    <Navbar />
    <main className="pt-[150px]">
      <section className="pb-20 px-4">
        <div className="container-main">
          {/* 1. Impact Header */}
          <div className="max-w-4xl md:mb-24 mb-16">
            <motion.p
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary mb-6"
            >
              Contact
            </motion.p>
            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-6xl md:text-8xl lg:text-9xl font-black tracking-tighter leading-[0.8] text-foreground"
            >
              Let's build <br />
              <span className="gradient-text">the future.</span>
            </motion.h1>
          </div>

          <div className="grid md:gap-16 gap-10 lg:grid-cols-12 items-start mb-[-80px] md:mb-0">
            {/* 2. Contact Metadata (Left/Bottom on Mobile) */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.2 }}
              className="lg:col-span-4 space-y-8 order-2 lg:order-1"
            >
              <div className="p-8 rounded-[2rem] bg-white/[0.02] border border-white/5 space-y-8">
                <div>
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Mail className="h-4 w-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                      Direct Inquiry
                    </span>
                  </div>
                  <p className="text-xl font-bold tracking-tight group cursor-pointer hover:text-primary transition-colors">
                    hello@thesatrix.com
                  </p>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <MapPin className="h-4 w-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                      Location
                    </span>
                  </div>
                  <p className="text-xl font-bold tracking-tight">
                    761/B/3, Polhena Road, Kelaniya
                  </p>
                  <p className="text-sm text-muted-foreground font-medium mt-1">
                    Remote-first
                  </p>
                </div>

                <div className="pt-8 border-t border-white/5">
                  <div className="flex items-center gap-3 mb-4 text-primary">
                    <Globe className="h-4 w-4" />
                    <span className="text-[10px] font-bold uppercase tracking-widest text-foreground">
                      Availability
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <div className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse" />
                    <p className="text-sm font-bold text-foreground">
                      Accepting New Projects
                    </p>
                  </div>
                </div>
              </div>
            </motion.div>

            {/* 3. The Intake Portal (Form) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.1 }}
              className="lg:col-span-8 order-1 lg:order-2 mt-[-20px]"
            >
              <div className="rounded-[2.5rem] border border-white/5 bg-white/[0.01] p-8 md:p-12 ">
                <div className="mb-10">
                  <h3 className="text-3xl font-black tracking-tighter mb-2">
                    Project Intake Form
                  </h3>
                  <div className="h-1 w-12 bg-primary" />
                </div>
                <ContactForm />
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
    <Footer />
  </div>
);

export default Contact;
