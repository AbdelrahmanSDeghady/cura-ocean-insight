import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, ArrowRight } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const { toast } = useToast();

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1000));
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch soon to discuss early access to Icura.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-28 lg:py-36 bg-card">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="mb-16"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-3xl">
              Ready to transform your clinical practice?
            </h2>
          </motion.div>

          <div className="grid lg:grid-cols-5 gap-12">
            {/* Form */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5 }}
              className="lg:col-span-3 p-8 rounded-2xl bg-background border border-border"
            >
              <h3 className="text-xl font-serif text-foreground mb-6">
                Request Early Access
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleInputChange}
                      placeholder="Dr. John Doe"
                      className="bg-muted border-border"
                    />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleInputChange}
                      placeholder="john@hospital.com"
                      className="bg-muted border-border"
                    />
                  </div>
                </div>
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    Organization
                  </label>
                  <Input
                    id="organization"
                    name="organization"
                    type="text"
                    value={formData.organization}
                    onChange={handleInputChange}
                    placeholder="Hospital / Clinic Name"
                    className="bg-muted border-border"
                  />
                </div>
                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={formData.message}
                    onChange={handleInputChange}
                    placeholder="Tell us about your clinical needs..."
                    className="bg-muted border-border"
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full bg-primary text-primary-foreground hover:bg-primary-dark rounded-full py-6 text-sm font-medium group"
                >
                  {isSubmitting ? "Submitting..." : "Request Early Access"}
                  <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-0.5 transition-transform" />
                </Button>
              </form>
            </motion.div>

            {/* Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="lg:col-span-2 space-y-8"
            >
              <div className="p-7 rounded-2xl bg-background border border-border">
                <h3 className="text-lg font-serif text-foreground mb-5">
                  Connect With Us
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:ai@icura.net"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <Mail className="h-4 w-4 mr-3 text-primary/60" />
                    ai@icura.net
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm"
                  >
                    <Linkedin className="h-4 w-4 mr-3 text-primary/60" />
                    Follow us on LinkedIn
                  </a>
                </div>
              </div>

              <div className="p-7 rounded-2xl bg-background border border-border">
                <h3 className="text-lg font-serif text-foreground mb-5">
                  Why Early Access?
                </h3>
                <ul className="space-y-3">
                  {[
                    "Be among the first to test cutting-edge AI clinical tools",
                    "Provide feedback that shapes the final product",
                    "Special pricing for early adopters",
                    "Priority support and training",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start text-muted-foreground text-sm">
                      <div className="w-1.5 h-1.5 bg-primary/50 rounded-full mt-1.5 mr-3 flex-shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
