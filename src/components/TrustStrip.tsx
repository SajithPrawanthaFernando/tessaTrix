import { motion } from "framer-motion";

const clients = [
  { name: "GuidanceLK", type: "Fintech" },
  { name: "HomeFix", type: "Logistics" },
  // { name: "InvestmentsLK", type: "SaaS" },
];

const TrustStrip = () => (
  <section className="relative pt-20 bg-background overflow-hidden">
    {/* Subtle divider line with a glow center */}
    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

    <div className="container-main">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-16"
      >
        <p className="text-[10px] font-bold uppercase tracking-[0.5em] text-primary">
          Selected Partnerships
        </p>
      </motion.div>

      <div className="flex flex-wrap items-center justify-center gap-12 md:gap-24">
        {clients.map((client, i) => (
          <motion.div
            key={client.name}
            initial={{ opacity: 0, filter: "blur(10px)" }}
            whileInView={{ opacity: 1, filter: "blur(0px)" }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.2, duration: 0.8 }}
            whileHover={{ y: -5 }}
            className="group relative flex flex-col items-center"
          >
            {/* Client Name */}
            <span className="text-2xl md:text-3xl font-black tracking-tighter text-muted-foreground/20 group-hover:text-primary/60 transition-colors duration-500 select-none">
              {client.name}
            </span>

            {/* Tiny Industry Tag that appears on hover */}
            <motion.span
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 1 }}
              className="absolute -bottom-6 text-[8px] font-bold uppercase tracking-widest text-primary"
            >
              {client.type}
            </motion.span>

            {/* Subtle glow behind name on hover */}
            <div className="absolute inset-0 bg-primary/5 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity" />
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TrustStrip;
