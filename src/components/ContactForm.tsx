import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { motion } from "framer-motion";
import { Send, CheckCircle } from "lucide-react";

interface ContactFormProps {
  compact?: boolean;
}

const ContactForm = ({ compact = false }: ContactFormProps) => {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  if (submitted) {
    return (
      <motion.div
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        className="flex flex-col items-center justify-center py-12 text-center"
      >
        <CheckCircle className="h-12 w-12 text-primary mb-4" />
        <h3 className="text-xl font-bold mb-2">Message sent!</h3>
        <p className="text-muted-foreground text-sm">We'll be in touch within 24 hours.</p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <Input placeholder="Name" required className="rounded-xl" />
        <Input type="email" placeholder="Email address" required className="rounded-xl" />
      </div>
      {!compact && <Input placeholder="Company" className="rounded-xl" />}
      <Textarea placeholder="Tell us about your project…" required rows={compact ? 3 : 5} className="rounded-xl resize-none" />
      <Button type="submit" className="rounded-xl w-full sm:w-auto">
        Send message <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

export default ContactForm;
