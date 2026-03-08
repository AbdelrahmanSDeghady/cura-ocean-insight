import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Mail, Linkedin, Send } from "lucide-react";
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
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    await new Promise(resolve => setTimeout(resolve, 1000));
    toast({
      title: "Thank you for your interest!",
      description: "We'll be in touch soon to discuss early access to Icura.",
    });
    setFormData({ name: "", email: "", organization: "", message: "" });
    setIsSubmitting(false);
  };

  return (
    <section id="contact" className="py-24 bg-background relative">
      {/* Subtle top gradient */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/20 to-transparent" />

      <div className="container mx-auto px-4 lg:px-6">
        <div className="max-w-5xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <span className="inline-block text-sm font-semibold tracking-widest uppercase text-primary mb-3">
              Get Started
            </span>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-foreground mb-6">
              Ready to Transform Your Clinical Practice?
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Join the early access program and be among the first to experience 
              AI-powered clinical decision support
            </p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div className="medical-card">
              <h3 className="text-2xl font-bold text-foreground mb-6">
                Get Early Access
              </h3>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                      Full Name *
                    </label>
                    <Input id="name" name="name" type="text" required value={formData.name} onChange={handleInputChange} placeholder="Dr. John Doe" />
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                      Email Address *
                    </label>
                    <Input id="email" name="email" type="email" required value={formData.email} onChange={handleInputChange} placeholder="john.doe@hospital.com" />
                  </div>
                </div>
                
                <div>
                  <label htmlFor="organization" className="block text-sm font-medium text-foreground mb-2">
                    Organization
                  </label>
                  <Input id="organization" name="organization" type="text" value={formData.organization} onChange={handleInputChange} placeholder="Hospital / Clinic Name" />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                    Message
                  </label>
                  <Textarea id="message" name="message" rows={4} value={formData.message} onChange={handleInputChange} placeholder="Tell us about your clinical decision support needs..." />
                </div>

                <Button type="submit" variant="hero" size="lg" disabled={isSubmitting} className="w-full group">
                  {isSubmitting ? "Submitting..." : "Request Early Access"}
                  <Send className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div className="space-y-8">
              <div className="medical-card">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Connect With Us
                </h3>
                <div className="space-y-4">
                  <a href="mailto:ai@icura.net" className="flex items-center group hover:text-primary transition-colors">
                    <Mail className="h-5 w-5 mr-3 text-primary" />
                    <span>ai@icura.net</span>
                  </a>
                  <a href="#" className="flex items-center group hover:text-primary transition-colors">
                    <Linkedin className="h-5 w-5 mr-3 text-primary" />
                    <span>Follow us on LinkedIn</span>
                  </a>
                </div>
              </div>

              <div className="medical-card">
                <h3 className="text-xl font-bold text-foreground mb-4">
                  Why Early Access?
                </h3>
                <ul className="space-y-3 text-muted-foreground text-sm">
                  {[
                    "Be among the first to test cutting-edge AI clinical tools",
                    "Provide feedback that shapes the final product",
                    "Special pricing for early adopters",
                    "Priority support and training",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start">
                      <div className="w-2 h-2 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
