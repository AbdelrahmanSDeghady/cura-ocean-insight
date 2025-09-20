import { Mail, Linkedin } from "lucide-react";
import icuraLogo from "@/assets/icura-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-primary text-primary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo and Description */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start space-x-3 mb-4">
              <img src={icuraLogo} alt="Icura" className="h-8 w-auto filter brightness-0 invert" />
            </div>
            <p className="text-primary-foreground/80 text-sm">
              AI-powered clinical decision support for healthcare professionals
            </p>
          </div>

          {/* Navigation Links */}
          <div className="text-center">
            <h3 className="font-semibold mb-4">Quick Links</h3>
            <nav className="space-y-2">
              <a href="#about" className="block text-primary-foreground/80 hover:text-accent-light transition-colors text-sm">
                About
              </a>
              <a href="#features" className="block text-primary-foreground/80 hover:text-accent-light transition-colors text-sm">
                Features
              </a>
              <a href="#team" className="block text-primary-foreground/80 hover:text-accent-light transition-colors text-sm">
                Team
              </a>
              <a href="#contact" className="block text-primary-foreground/80 hover:text-accent-light transition-colors text-sm">
                Contact
              </a>
            </nav>
          </div>

          {/* Contact and Social */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-4">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a
                href="mailto:info@icura.com"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors group"
              >
                <Mail className="h-5 w-5 text-primary-foreground group-hover:text-accent-light transition-colors" />
              </a>
              <a
                href="#"
                className="w-10 h-10 bg-primary-foreground/10 rounded-full flex items-center justify-center hover:bg-accent/20 transition-colors group"
              >
                <Linkedin className="h-5 w-5 text-primary-foreground group-hover:text-accent-light transition-colors" />
              </a>
            </div>
            <p className="text-primary-foreground/60 text-xs">
              info@icura.com
            </p>
          </div>
        </div>

        {/* Copyright */}
        <div className="border-t border-primary-foreground/20 mt-8 pt-8 text-center">
          <p className="text-primary-foreground/60 text-sm">
            © {currentYear} Icura. All rights reserved. | HIPAA Compliant Clinical AI Platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;