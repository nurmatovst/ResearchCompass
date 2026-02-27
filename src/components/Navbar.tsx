import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { useState } from "react";
import logo from "@/assets/logo.png";

const Navbar = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/programs", label: "Programs" },
    { to: "/about", label: "About" },
    { to: "/publish", label: "Publish" },
    { to: "/news-events", label: "News & Events" },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[95%] max-w-7xl">
      <div className="bg-background/80 backdrop-blur-lg border border-border/50 rounded-full shadow-elegant px-6">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center z-50">
            <img src={logo} alt="Research Compass Academy" className="h-40 md:h-48" />
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-1">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 ${
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link to="/apply">
              <button className="ml-4 px-6 py-2 bg-gradient-hero text-primary-foreground rounded-full font-semibold hover:shadow-glow transition-all duration-300 hover:scale-105">
                Apply Now
              </button>
            </Link>
            <Link to="/info-session">
              <button className="ml-2 px-6 py-2 border-2 border-primary text-primary rounded-full font-semibold hover:bg-primary hover:text-primary-foreground transition-all duration-300">
                Info Session
              </button>
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <button 
            className="lg:hidden p-2 z-50" 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)} 
            aria-label="Toggle menu"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden absolute top-24 left-4 right-4 bg-background/95 backdrop-blur-lg border border-border/50 rounded-3xl py-4 space-y-2 animate-fade-in shadow-elegant">
            {navLinks.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setMobileMenuOpen(false)}
                className={`block px-4 py-3 rounded-lg mx-4 text-sm font-medium transition-colors ${
                  isActive(link.to)
                    ? "bg-primary text-primary-foreground"
                    : "text-foreground hover:bg-primary/10 hover:text-primary"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <div className="px-4 pt-4 space-y-2">
              <Link to="/apply" onClick={() => setMobileMenuOpen(false)} className="block">
                <button className="w-full px-6 py-3 bg-gradient-hero text-primary-foreground rounded-full font-semibold">
                  Apply Now
                </button>
              </Link>
              <Link to="/info-session" onClick={() => setMobileMenuOpen(false)} className="block">
                <button className="w-full px-6 py-3 border-2 border-primary text-primary rounded-full font-semibold">
                  Info Session
                </button>
              </Link>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
