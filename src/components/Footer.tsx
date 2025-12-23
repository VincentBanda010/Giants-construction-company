import { Link } from "react-router-dom";
import { Facebook, Twitter, Linkedin, MessageCircle, Instagram } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white">
      <div className="container mx-auto px-4 py-12">
        <div className="flex items-center justify-between">
          {/* Logo Section */}
          <div className="flex flex-col gap-4">
            <img
                src={logoImage}
                alt="Logo for giants construction"
                className="w-full h-full object-cover"
              />
          </div>

          {/* Navigation and Links */}
          <div className="flex flex-col gap-6">
            <nav className="flex flex-wrap gap-6 text-sm">
              <Link to="/about" className="hover:text-primary transition-colors">
                About Us
              </Link>
              <Link to="/services" className="hover:text-primary transition-colors">
                Services
              </Link>
              <Link to="/portfolio" className="hover:text-primary transition-colors">
                Portfolio
              </Link>
              <Link to="/internship" className="hover:text-primary transition-colors">
                Internship
              </Link>
              <Link to="/contact" className="hover:text-primary transition-colors">
                Contacts
              </Link>
            </nav>

            <div className="flex flex-wrap gap-4 text-sm">
              <Link to="/fraud-alert" className="hover:text-primary transition-colors">
                Fraud Alert
              </Link>
              <span>|</span>
              <Link to="/privacy-policy" className="hover:text-primary transition-colors">
                Privacy Policy
              </Link>
              <span>|</span>
              <Link to="/cookie-settings" className="hover:text-primary transition-colors">
                Cookie Settings
              </Link>
            </div>

            <div className="flex gap-4">
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Linkedin className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <MessageCircle className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
            </div>
          </div>
        </div>

        <div className="border-t border-white/10 mt-8 pt-8 text-center text-sm opacity-80">
          © 2025 Giants Construction and Consultancy
          <br />
          All rights reserved
        </div>
      </div>
    </footer>
  );
};

export default Footer;
