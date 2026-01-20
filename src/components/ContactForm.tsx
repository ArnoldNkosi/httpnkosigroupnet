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
    <section id="contact" className="py-24 relative border-t border-border">
      <div className="container mx-auto px-6">
        <div className="max-w-5xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-16">
            {/* Left side - Text content */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
            >
              <h2 className="font-display text-4xl md:text-5xl lg:text-6xl font-bold leading-tight mb-6">
                Let's Build{" "}
                <span className="text-emerald">Together</span>
              </h2>
              <p className="text-xl text-muted-foreground mb-12 leading-relaxed">
                Whether you're looking to modernize your systems, build new data 
                capabilities, or need strategic technology guidance, we're here to help.
              </p>

              <div className="space-y-8">
                <div className="border-l-2 border-primary pl-6">
                  <h4 className="font-display font-semibold text-lg mb-1">Quick Response</h4>
                  <p className="text-muted-foreground">
                    We typically respond within 24 hours on business days.
                  </p>
                </div>

                <div className="border-l-2 border-border pl-6 hover:border-primary transition-colors">
                  <h4 className="font-display font-semibold text-lg mb-1">Enterprise Ready</h4>
                  <p className="text-muted-foreground">
                    We work with businesses of all sizes, from startups to Fortune 500.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Right side - Form */}
            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
            >
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="space-y-4">
                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Name
                    </label>
                    <Input
                      name="name"
                      placeholder="Your name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="h-12 bg-card border-border focus:border-primary rounded-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Email
                    </label>
                    <Input
                      name="email"
                      type="email"
                      placeholder="your@email.com"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="h-12 bg-card border-border focus:border-primary rounded-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Company (Optional)
                    </label>
                    <Input
                      name="company"
                      placeholder="Company name"
                      value={formData.company}
                      onChange={handleChange}
                      className="h-12 bg-card border-border focus:border-primary rounded-none"
                    />
                  </div>

                  <div>
                    <label className="text-xs uppercase tracking-wider text-muted-foreground mb-2 block">
                      Message
                    </label>
                    <Textarea
                      name="message"
                      placeholder="Tell us about your project..."
                      value={formData.message}
                      onChange={handleChange}
                      required
                      rows={5}
                      className="bg-card border-border focus:border-primary resize-none rounded-none"
                    />
                  </div>
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
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactForm;
