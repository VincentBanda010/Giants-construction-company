import { Link } from "react-router-dom";
import {
  Facebook,
  Twitter,
  Linkedin,
  MessageCircle,
  Instagram,
  Mail,
  Phone,
  MapPin,
} from "lucide-react";
import logoImage from "@/assets/logo.png";

const Footer = () => {
  return (
    <footer className="bg-secondary text-white w-full">
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">

          {/* Logo & Description */}
          <div className="space-y-6">
            <img
              src={logoImage}
              alt="Giants Construction Logo"
              className="w-44 h-auto"
            />
            <p className="text-sm text-white/80 leading-relaxed max-w-xs">
              Building excellence with integrity and innovation. We transform
              visions into lasting structures that stand the test of time.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Quick Links</h3>
            <nav className="space-y-3">
              {[
                { name: "About Us", path: "/about" },
                { name: "Services", path: "/services" },
                { name: "Portfolio", path: "/portfolio" },
                { name: "Internship", path: "/internship" },
                { name: "Contact Us", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className="block text-sm text-white/80 hover:text-primary transition"
                >
                  {link.name}
                </Link>
              ))}
            </nav>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Contact Info</h3>
            <div className="space-y-3 text-sm text-white/80">
              <div className="flex items-start gap-3">
                <MapPin className="w-5 h-5 text-primary shrink-0 mt-0.5" />
                <span>Lilongwe, Malawi</span>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="w-5 h-5 text-primary shrink-0" />
                <span>+265 123 456 789</span>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="w-5 h-5 text-primary shrink-0" />
                <span>info@giantsconstruction.mw</span>
              </div>
            </div>
          </div>

          {/* Social */}
          <div>
            <h3 className="text-lg font-semibold mb-5">Connect With Us</h3>
            <div className="flex gap-3 flex-wrap">
              {[Facebook, Twitter, Linkedin, MessageCircle, Instagram].map(
                (Icon, index) => (
                  <a
                    key={index}
                    href="#"
                    className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center hover:bg-primary transition"
                  >
                    <Icon className="w-5 h-5" />
                  </a>
                )
              )}
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-white/10 mt-10 pt-6 text-center">
          <p className="text-sm text-white/70">
            © 2025 Giants Construction and Consultancy. All rights reserved.
          </p>
          <p className="text-xs text-white/50 mt-2">
            Building a better Malawi, one project at a time.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
