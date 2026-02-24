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

  // 1. Setup state to capture form values
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const phoneNumber = "94769363695";

    const whatsappMessage =
      `*New Inquiry from Website*%0A%0A` +
      `*Name:* ${formData.name}%0A` +
      `*Email:* ${formData.email}%0A` +
      `${formData.company ? `*Company:* ${formData.company}%0A` : ""}` +
      `*Message:* ${formData.message}`;

    // 4. Open WhatsApp
    const whatsappUrl = `https://wa.me/${phoneNumber}?text=${whatsappMessage}`;
    window.open(whatsappUrl, "_blank");

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
        <p className="text-muted-foreground text-sm">
          WhatsApp has been opened in a new tab.
        </p>
      </motion.div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="space-y-4">
      <div className={compact ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <Input
          name="name"
          placeholder="Name"
          required
          className="rounded-xl"
          onChange={handleChange}
        />
        <Input
          name="email"
          type="email"
          placeholder="Email address"
          required
          className="rounded-xl"
          onChange={handleChange}
        />
      </div>
      {!compact && (
        <Input
          name="company"
          placeholder="Company"
          className="rounded-xl"
          onChange={handleChange}
        />
      )}
      <Textarea
        name="message"
        placeholder="Tell us about your project…"
        required
        rows={compact ? 3 : 5}
        className="rounded-xl resize-none"
        onChange={handleChange}
      />
      <Button type="submit" className="rounded-xl w-full sm:w-auto">
        Send message <Send className="ml-2 h-4 w-4" />
      </Button>
    </form>
  );
};

export default ContactForm;
