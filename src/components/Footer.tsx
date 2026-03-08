import { Mail, Linkedin } from "lucide-react";
import icuraLogo from "@/assets/icura-logo.png";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-foreground text-background/80 py-16">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid md:grid-cols-3 gap-10 items-start">
          {/* Logo */}
          <div>
            <img
              src={icuraLogo}
              alt="Icura"
              className="h-8 w-auto mb-4 filter brightness-0 invert opacity-80"
            />
            <p className="text-background/50 text-sm leading-relaxed">
              AI-powered clinical decision support for healthcare professionals.
            </p>
          </div>

          {/* Links */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-background/40 mb-5">
              Quick Links
            </h3>
            <nav className="space-y-3">
              {["about", "features", "products", "team", "contact"].map((link) => (
                <a
                  key={link}
                  href={`#${link}`}
                  className="block text-background/60 hover:text-background transition-colors text-sm capitalize"
                >
                  {link}
                </a>
              ))}
            </nav>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-sans text-xs font-semibold tracking-widest uppercase text-background/40 mb-5">
              Connect
            </h3>
            <div className="flex gap-3 mb-4">
              <a
                href="mailto:ai@icura.net"
                className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Mail className="h-4 w-4" />
              </a>
              <a
                href="#"
                className="w-9 h-9 bg-background/10 rounded-full flex items-center justify-center hover:bg-background/20 transition-colors"
              >
                <Linkedin className="h-4 w-4" />
              </a>
            </div>
            <p className="text-background/40 text-sm">ai@icura.net</p>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-background/30 text-sm">
            © {currentYear} Icura. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
