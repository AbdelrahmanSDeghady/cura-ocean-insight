import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, ArrowRight, Sparkles, Users, Headphones, BadgePercent } from "lucide-react";
import { useToast } from "@/hooks/use-toast";

const benefits = [
  { icon: Sparkles, text: "Be among the first to test cutting-edge AI clinical tools" },
  { icon: Users, text: "Provide feedback that shapes the final product" },
  { icon: BadgePercent, text: "Special pricing for early adopters" },
  { icon: Headphones, text: "Priority support and training" },
];

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
    <section id="contact" className="py-16 sm:py-20 md:py-28 lg:py-36 bg-card relative overflow-hidden">
      {/* Decorative */}
      <div className="absolute bottom-0 right-0 w-64 sm:w-96 h-64 sm:h-96 bg-primary/5 rounded-full blur-3xl translate-y-1/2 translate-x-1/2" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <p className="text-sm font-medium tracking-widest uppercase text-primary mb-4">
              Get Started
            </p>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-foreground leading-tight max-w-3xl mx-auto">
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
              className="lg:col-span-3 p-8 rounded-3xl bg-background border border-border shadow-sm"
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
                      className="bg-muted border-border rounded-xl"
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
                      className="bg-muted border-border rounded-xl"
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
                    className="bg-muted border-border rounded-xl"
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
                    className="bg-muted border-border rounded-xl"
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
              <div className="p-7 rounded-3xl bg-background border border-border">
                <h3 className="text-lg font-serif text-foreground mb-5">
                  Why Early Access?
                </h3>
                <ul className="space-y-4">
                  {benefits.map((item, i) => (
                    <li key={i} className="flex items-start gap-3 text-muted-foreground text-sm">
                      <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <item.icon className="h-4 w-4 text-primary" />
                      </div>
                      {item.text}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="p-7 rounded-3xl bg-background border border-border">
                <h3 className="text-lg font-serif text-foreground mb-5">
                  Connect With Us
                </h3>
                <div className="space-y-4">
                  <a
                    href="mailto:ai@icura.net"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                      <Mail className="h-4 w-4 text-primary" />
                    </div>
                    ai@icura.net
                  </a>
                  <a
                    href="#"
                    className="flex items-center text-muted-foreground hover:text-primary transition-colors text-sm group"
                  >
                    <div className="w-8 h-8 rounded-xl bg-primary/10 flex items-center justify-center mr-3 group-hover:bg-primary/20 transition-colors">
                      <Linkedin className="h-4 w-4 text-primary" />
                    </div>
                    Follow us on LinkedIn
                  </a>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
