import { Mail, Linkedin } from "lucide-react";
import icuraLogo from "@/assets/icura-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-secondary text-secondary-foreground py-12">
      <div className="container mx-auto px-4 lg:px-6">
        <div className="grid md:grid-cols-3 gap-8 items-center">
          {/* Logo */}
          <div className="text-center md:text-left">
            <div className="flex items-center justify-center md:justify-start mb-4">
              <img src={icuraLogo} alt="Icura" className="h-8 w-auto filter brightness-0 invert opacity-90" />
            </div>
            <p className="text-secondary-foreground/70 text-sm">
              AI-powered clinical decision support for healthcare professionals
            </p>
          </div>

          {/* Links */}
          <div className="text-center">
            <h3 className="font-semibold mb-4 text-sm tracking-wide uppercase">Quick Links</h3>
            <nav className="space-y-2">
              {["about", "features", "products", "team", "contact"].map((link) => (
                <a key={link} href={`#${link}`} className="block text-secondary-foreground/70 hover:text-white transition-colors text-sm capitalize">
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div className="text-center md:text-right">
            <h3 className="font-semibold mb-4 text-sm tracking-wide uppercase">Connect</h3>
            <div className="flex justify-center md:justify-end space-x-4 mb-4">
              <a href="mailto:ai@icura.net" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Mail className="h-5 w-5" />
              </a>
              <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-white/20 transition-colors">
                <Linkedin className="h-5 w-5" />
              </a>
            </div>
            <p className="text-secondary-foreground/50 text-xs">ai@icura.net</p>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center">
          <p className="text-secondary-foreground/50 text-sm">
            © {currentYear} Icura. All rights reserved. | HIPAA Compliant Clinical AI Platform
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
