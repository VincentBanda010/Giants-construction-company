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
                <div className="relative from-gray-900 to-gray-800 backdrop-blur-md border border-gray-700/30 rounded-2xl group-hover/search:border-primary/30 transition-all duration-300">
                  <div className="flex items-center p-2">
                    <button
                      onClick={() => setIsSearchOpen(!isSearchOpen)}
                      className="w-8 h-8 rounded-full from-gray-900 to-gray-800 flex items-center justify-center border border-gray-700/50 hover:border-primary/50 hover:scale-110 transition-all duration-300 flex-shrink-0"
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
                        className="w-8 h-8 rounded-full from-gray-900 to-gray-800 flex items-center justify-center border border-gray-700/50 hover:border-red-500/50 transition-all duration-300 flex-shrink-0 ml-2"
                      >
                        <X className="w-4 h-4 text-gray-300" />
                      </button>
                    )}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Mobile Menu Button - Always Visible with Logo Background */}
          <div className="flex items-center lg:hidden gap-3">
            {/* Search Button with Logo Background */}
            <div className="relative group/mobile-search">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-0 group-hover/mobile-search:opacity-100"></div>
              <button
                onClick={() => setIsSearchOpen(true)}
                className="relative w-10 h-10 from-gray-900 to-gray-800 rounded-full flex items-center justify-center border border-gray-700/50 shadow-lg transition-all duration-500 group-hover/mobile-search:border-primary/30 group-hover/mobile-search:scale-105"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/mobile-search:translate-x-full transition-transform duration-1000"></div>
                <Search className="w-5 h-5 text-gray-300 relative z-10" />
              </button>
            </div>
            
            {/* Menu Button with Logo Background */}
            <div className="relative group/mobile-menu">
              <div className="absolute inset-0 bg-primary/20 rounded-full animate-ping opacity-0 group-hover/mobile-menu:opacity-100"></div>
              <button
                className="relative w-10 h-10 from-gray-900 to-gray-800 rounded-full flex items-center justify-center border border-gray-700/50 shadow-lg transition-all duration-500 group-hover/mobile-menu:border-primary/30 group-hover/mobile-menu:scale-105"
                onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              >
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover/mobile-menu:translate-x-full transition-transform duration-1000"></div>
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
        </div>

        {/* Mobile Search Overlay */}
        {isSearchOpen && (
          <div className="lg:hidden fixed inset-0 z-[100] bg-gray-900/95 backdrop-blur-xl pt-20 px-4 sm:px-6 animate-fadeIn">
            <div className="max-w-md mx-auto">
              <div className="relative">
                <div className="flex items-center from-gray-900 to-gray-800 rounded-2xl p-4 border border-gray-700/50 shadow-2xl">
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
        {/* Semi-transparent backdrop with blur - click to close */}
        <div 
          className="absolute inset-0 bg-secondary/80 backdrop-blur-md"
          onClick={() => setMobileMenuOpen(false)}
        />
        
        {/* Mobile Menu Content - Using secondary color (#00294B) background */}
        <div className={`absolute inset-x-0 top-0 h-[85vh] bg-gradient-to-b from-secondary via-secondary/95 to-secondary/90 backdrop-blur-xl shadow-2xl rounded-b-3xl transform transition-transform duration-500 ${
          mobileMenuOpen ? 'translate-y-0' : '-translate-y-full'
        }`}>
          {/* Close Button */}
          <div className="absolute top-6 right-6 z-10">
            <button
              onClick={() => setMobileMenuOpen(false)}
              className="relative w-14 h-14 from-gray-900 to-gray-800 rounded-2xl flex items-center justify-center border-2 border-gray-700/50 shadow-2xl hover:scale-110 hover:border-primary/50 transition-all duration-300 group"
            >
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>
              <X className="w-7 h-7 text-gray-300 group-hover:text-white transition-colors relative z-10" />
            </button>
          </div>
          
          {/* Menu Content */}
          <div className="pt-24 pb-8 px-6 h-full flex flex-col">
            {/* Navigation Header */}
            <div className="text-center mb-10">
              <h2 className="text-3xl font-bold text-white mb-3">Navigation</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-4"></div>
              <p className="text-gray-300">Select an option below</p>
            </div>

            {/* Navigation Items - Cards with complementary colors */}
            <div className="flex-1 px-2 overflow-y-auto">
              <div className="grid grid-cols-1 gap-4">
                {navItems.map((item) => (
                  <Link
                    key={item.path}
                    to={item.path}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`group/nav-item relative overflow-hidden rounded-2xl p-5 transition-all duration-500 ${
                      isActive(item.path)
                        ? 'bg-gradient-to-r from-primary/40 via-primary/30 to-primary/20 border-l-4 border-primary shadow-lg'
                        : 'bg-white/10 hover:bg-white/15 border-l-4 border-transparent hover:border-primary/50 backdrop-blur-sm'
                    }`}
                  >
                    {/* Background shimmer effect */}
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover/nav-item:translate-x-full transition-transform duration-1000"></div>
                    
                    <div className="relative flex items-center space-x-4">
                      {/* Icon Circle */}
                      <div className={`w-12 h-12 rounded-full flex items-center justify-center transition-all duration-300 ${
                        isActive(item.path)
                          ? 'bg-gradient-to-br from-primary to-orange-500 shadow-lg shadow-primary/30'
                          : 'bg-white/20 group-hover/nav-item:bg-white/25'
                      }`}>
                        <div className={isActive(item.path) ? 'text-white' : 'text-gray-200 group-hover/nav-item:text-white'}>
                          {item.icon}
                        </div>
                      </div>
                      
                      {/* Text Content */}
                      <div className="flex-1">
                        <div className={`text-lg font-semibold transition-colors duration-300 ${
                          isActive(item.path) ? 'text-white' : 'text-white group-hover/nav-item:text-primary/90'
                        }`}>
                          {item.name}
                        </div>
                        <div className={`text-sm transition-colors duration-300 ${
                          isActive(item.path) ? 'text-white/80' : 'text-gray-300 group-hover/nav-item:text-gray-200'
                        }`}>
                          {item.path === "/contact" ? "Get in touch →" : "Explore more →"}
                        </div>
                      </div>
                      
                      {/* Arrow Indicator */}
                      <div className={`transform transition-transform duration-300 ${
                        isActive(item.path) ? 'translate-x-1' : 'group-hover/nav-item:translate-x-1'
                      }`}>
                        <ChevronRight className={`w-5 h-5 ${
                          isActive(item.path) ? 'text-primary' : 'text-gray-400 group-hover/nav-item:text-primary'
                        }`} />
                      </div>
                    </div>
                  </Link>
                ))}
              </div>
            </div>
            
            {/* Footer with company name */}
            <div className="text-center pt-6 mt-4">
              <p className="text-gray-400 text-sm">
                © Giants Construction & Consultancy
              </p>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;