import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { ArrowRight } from "lucide-react";

const ContactForm = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    await new Promise((resolve) => setTimeout(resolve, 1000));

    toast({
      title: "Message sent successfully",
      description: "We'll get back to you within 24 hours.",
    });

    setFormData({ name: "", email: "", company: "", message: "" });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  return (
    <section id="contact" className="py-20 relative border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-2xl mx-auto text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="mb-10"
          >
            <h2 className="font-display text-3xl md:text-4xl font-bold leading-tight mb-4">
              Let's Build{" "}
              <span className="text-emerald">Together</span>
            </h2>
            <p className="text-muted-foreground">
              Ready to transform your business? Get in touch with our team.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
          >
            <form 
              onSubmit={handleSubmit} 
              className="border border-border p-8 bg-card"
            >
              <div className="grid md:grid-cols-2 gap-4 mb-4">
                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block text-left">
                    Name *
                  </label>
                  <Input
                    name="name"
                    placeholder="Your name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="h-11 bg-background border-border focus:border-primary rounded-none"
                  />
                </div>

                <div>
                  <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block text-left">
                    Email *
                  </label>
                  <Input
                    name="email"
                    type="email"
                    placeholder="your@email.com"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="h-11 bg-background border-border focus:border-primary rounded-none"
                  />
                </div>
              </div>

              <div className="mb-4">
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block text-left">
                  Company
                </label>
                <Input
                  name="company"
                  placeholder="Company name (optional)"
                  value={formData.company}
                  onChange={handleChange}
                  className="h-11 bg-background border-border focus:border-primary rounded-none"
                />
              </div>

              <div className="mb-6">
                <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block text-left">
                  Message *
                </label>
                <Textarea
                  name="message"
                  placeholder="Tell us about your project..."
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={4}
                  className="bg-background border-border focus:border-primary resize-none rounded-none"
                />
              </div>

              <Button
                type="submit"
                variant="hero"
                size="lg"
                className="w-full"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  "Sending..."
                ) : (
                  <>
                    Send Message
                    <ArrowRight className="ml-2 w-4 h-4" />
                  </>
                )}
              </Button>
            </form>

            <p className="text-xs text-muted-foreground mt-4">
              We typically respond within 24 hours on business days.
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
