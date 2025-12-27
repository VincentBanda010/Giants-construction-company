import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";
import { Menu, X, Search, ChevronRight, Sparkles, Award, Clock, Briefcase, Users } from "lucide-react";
import logoImage from "@/assets/logo.png";

const Header = () => {
  const location = useLocation();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (mobileMenuOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [mobileMenuOpen]);

  const navItems = [
    { name: "About Us", path: "/about", icon: <Award className="w-5 h-5" /> },
    { name: "Services", path: "/services", icon: <Sparkles className="w-5 h-5" /> },
    { name: "Portfolio", path: "/portfolio", icon: <Briefcase className="w-5 h-5" /> },
    { name: "Internship", path: "/internship", icon: <Users className="w-5 h-5" /> },
    { name: "Contact Us", path: "/contact", icon: <ChevronRight className="w-5 h-5" /> },
  ];

  const isActive = (path: string) => location.pathname === path;

  return (
    <header 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled 
          ? "bg-gradient-to-b from-gray-900/95 bg-secondary/90 backdrop-blur-xl py-2 shadow-2xl" 
          : "bg-gradient-to-b from-gray-900/90 to-transparent backdrop-blur-lg py-4"
      }`}
    >
      {/* Animated border effect */}
      <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-primary/50 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-12">
        <div className="flex items-center justify-between h-16">
          {/* Logo - Responsive Size */}
          <Link to="/" className="flex items-center group relative overflow-hidden flex-shrink-0">
            <div className="relative">
              <div className="relative w-48 md:w-64 h-12 md:h-15 from-gray-900 to-gray-800 rounded-xl md:rounded-2xl p-3 md:p-4 border border-gray-700/50 shadow-lg md:shadow-2xl group-hover:border-primary/30 transition-all duration-500 group-hover:scale-105">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
                <img
                  src={logoImage}
                  alt="Giants Construction Logo"
                  className="w-full h-full object-contain relative z-10 filter drop-shadow-lg"
                />
              </div>
            </div>
          </Link>

          {/* Desktop Navigation - Horizontally Aligned */}
          <nav className="hidden lg:flex items-center justify-center flex-1 mx-8">
            <div className="flex items-center space-x-1">
              {navItems.map((item) => {
                const isItemActive = isActive(item.path);
                
                return (
                  <Link
                    key={item.path}
                    to={item.path}
                    className="relative group/nav flex items-center gap-2 px-6 py-3 transition-all duration-300"
                  >
                    {/* Icon */}
                    <div className={`transition-colors duration-300 ${
                      isItemActive ? 'text-primary' : 'text-gray-400 group-hover/nav:text-white'
                    }`}>
                      {item.icon}
                    </div>
                    
                    {/* Text */}
                    <span className={`font-medium tracking-wide text-sm transition-colors duration-300 whitespace-nowrap ${
                      isItemActive 
                        ? 'text-primary' 
                        : 'text-gray-300 group-hover/nav:text-white'
                    }`}>
                      {item.name}
                    </span>
                    
                    {/* Active indicator line */}
                    {isItemActive && (
                      <div className="absolute -bottom-1 left-1/2 transform -translate-x-1/2 w-8 h-0.5 bg-primary rounded-full"></div>
                    )}
                  </Link>
                );
              })}
            </div>
          </nav>

          {/* Right side - Search Only */}
          <div className="hidden lg:flex items-center gap-4 flex-shrink-0">
            <div className="relative group/search">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-0 group-hover/search:opacity-100"></div>
              
              <div className={`transition-all duration-500 overflow-hidden rounded-2xl ${
                isSearchOpen ? 'w-64' : 'w-12'
              }`}>
                <div className="relative bg-gradient-to-br from-gray-800/50 backdrop-blur-md border border-gray-700/30 rounded-2xl group-hover/search:border-primary/30 transition-all duration-300">
                  <div className="flex items-center p-2">
                    <button
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border border-gray-600/30 hover:border-primary/50 hover:scale-110 transition-all duration-300 flex-shrink-0"
                    >
                      <Search className="w-4 h-4 text-gray-300" />
                    </button>
                    
                    <div className="flex-1 px-3 min-w-0">
                      <input
                        type="text"
                        placeholder={isSearchOpen ? "Search projects, services..." : ""}
                        className="w-full bg-transparent outline-none text-gray-300 placeholder-gray-500 transition-all duration-300 truncate"
                        autoFocus={isSearchOpen}
                      />
                    </div>
                    
                    {isSearchOpen && (
                      <button
                        onClick={() => setIsSearchOpen(false)}
                        className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-800 flex items-center justify-center border border-gray-600/30 hover:border-red-500/50 transition-all duration-300 flex-shrink-0 ml-2"
                      >
                        <X className="w-4 h-4 text-gray-300" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button - Always Visible */}
          <div className="flex items-center lg:hidden gap-3">
            <button
              onClick={() => setIsSearchOpen(true)}
              className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700/50 shadow-lg group/mobile-search relative"
            >
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-0 group-hover/mobile-search:opacity-100"></div>
              <Search className="w-5 h-5 text-gray-300 relative z-10" />
            </button>
            
            <button
              className="w-10 h-10 rounded-full bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border border-gray-700/50 shadow-lg relative group"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              <div className="relative w-6 h-6">
                <span className={`absolute left-0 w-full h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'top-1/2 -translate-y-1/2 rotate-45' : 'top-1'
                }`}></span>
                <span className={`absolute left-0 top-1/2 -translate-y-1/2 w-full h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'opacity-0' : 'opacity-100'
                }`}></span>
                <span className={`absolute left-0 w-full h-0.5 bg-gray-300 rounded-full transition-all duration-300 ${
                  mobileMenuOpen ? 'top-1/2 -translate-y-1/2 -rotate-45' : 'bottom-1'
                }`}></span>
              </div>
            </button>
          </div>
        </div>

        {/* Mobile Search Overlay */}
        {isSearchOpen && (
          <div className="lg:hidden fixed inset-0 z-[100] bg-gray-900/95 backdrop-blur-xl pt-20 px-4 sm:px-6 animate-fadeIn">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <div className="flex items-center bg-gradient-to-br from-gray-800/50 to-gray-900/50 rounded-2xl p-4 border border-gray-700/50 shadow-2xl">
                  <Search className="w-5 h-5 text-gray-400 mr-3" />
                  <input
                    type="text"
                    placeholder="What are you looking for?"
                    className="flex-1 bg-transparent outline-none text-white text-lg placeholder-gray-500"
                    autoFocus
                  />
                  <button
                    onClick={() => setIsSearchOpen(false)}
                    className="ml-3 p-2 rounded-xl hover:bg-gray-800/50 transition-colors"
                  >
                    <X className="w-5 h-5 text-gray-400" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Mobile Navigation Overlay - Covers entire screen */}
      <div className={`lg:hidden fixed inset-0 z-[100] transition-all duration-500 ${
        mobileMenuOpen 
          ? 'opacity-100 visible' 
          : 'opacity-0 invisible pointer-events-none'
      }`}>
        {/* Semi-transparent backdrop - click to close */}
        <div 
          className="absolute inset-0 bg-black/80 backdrop-blur-sm"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu Content - Slides down from top */}
        <div className={`absolute inset-x-0 top-0 h-[85vh] bg-gradient-to-b from-gray-900 via-gray-900 to-gray-800 shadow-2xl rounded-b-3xl transform transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {/* Close Button at Top Right */}
          <div className="absolute top-6 right-6 z-10">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="w-14 h-14 rounded-2xl bg-gradient-to-br from-gray-800 to-gray-900 flex items-center justify-center border-2 border-gray-700/50 shadow-2xl hover:scale-110 hover:border-primary/50 transition-all duration-300 group"
            >
              <X className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors" />
            </button>
          </div>
          
          {/* Menu Content */}
          <div className="pt-24 pb-8 px-6 h-full flex flex-col">
            {/* Navigation Header */}
            <div className="text-center mb-8">
              <h2 className="text-3xl font-bold text-white mb-2">Menu</h2>
              <p className="text-gray-400">Navigate through our site</p>
            </div>

            {/* Navigation Items - Large and clear */}
            <div className="flex-1 space-y-3 px-4 overflow-y-auto">
              {navItems.map((item) => (
                <Link
                  key={item.path}
                  to={item.path}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center p-5 rounded-2xl transition-all duration-300 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-r from-primary/20 to-orange-500/20 border-2 border-primary/50 shadow-lg'
                      : 'bg-gradient-to-r from-gray-800/70 to-gray-900/70 border border-gray-700/50 hover:border-primary/30 hover:scale-[1.02]'
                  }`}
                >
                  <div className={`w-12 h-12 rounded-xl flex items-center justify-center mr-4 ${
                    isActive(item.path)
                      ? 'bg-gradient-to-br from-primary to-orange-500'
                      : 'bg-gray-800'
                  }`}>
                    <div className={isActive(item.path) ? 'text-white' : 'text-gray-300'}>
                      {item.icon}
                    </div>
                  </div>
                  <div className="flex-1">
                    <div className={`text-lg font-semibold ${
                      isActive(item.path) ? 'text-primary' : 'text-white'
                    }`}>
                      {item.name}
                    </div>
                    <div className="text-gray-400 text-sm mt-1">
                      {item.path === "/contact" ? "Get in touch with us" : "Click to explore"}
                    </div>
                  </div>
                  <ChevronRight className={`w-6 h-6 ${
                    isActive(item.path) ? 'text-primary' : 'text-gray-500'
                  }`} />
                </Link>
              ))}
            </div>

            {/* Close hint at bottom */}
            <div className="text-center pt-4 mt-4 border-t border-gray-700/50">
              <p className="text-gray-500 text-sm">
                Tap outside or X button to close
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;