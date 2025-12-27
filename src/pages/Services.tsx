import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import servicesHeroImage from "@/assets/services-hero.png";
import buildingDesignImage from "@/assets/building-design.jpg";
import constructionMgmtImage from "@/assets/construction-mgmt.jpg";
import renovationImage from "@/assets/renovation.jpg";
import projectMgmtImage from "@/assets/project-management.jpg";
import strategicPlanningImage from "@/assets/strategic-planning.jpg";
import operationsImage from "@/assets/operations-improvement.jpg";
import financialAnalysisImage from "@/assets/financial-analysis.jpg";
import marketResearchImage from "@/assets/market-research.jpg";
import equipmentImage from "@/assets/equipment.jpg";
import { useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";

const Services = () => {
  const navigate = useNavigate();

  // Function to navigate to contact page with section ID
  const navigateToContactForm = () => {
    localStorage.setItem('scrollToContactSection', 'contact-section');
    navigate('/contact');
  };

  // Initialize scroll effects
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Check if we need to scroll to a specific section
    const sectionToScroll = localStorage.getItem('scrollToSection');
    if (sectionToScroll) {
      setTimeout(() => {
        const element = document.getElementById(sectionToScroll);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        localStorage.removeItem('scrollToSection');
      }, 100);
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  // Smooth scroll function for internal navigation
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Service Categories */}
      <section
        className="relative min-h-screen flex items-end bg-cover bg-center pt-20 pb-20"
        style={{ backgroundImage: `url(${servicesHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-12 lg:px-24 relative z-10">
          <div className="w-full mx-auto">
            {/* Service Categories - Spread to page margins */}
            <div className="flex justify-between items-end text-white mb-4 w-full">
              <button 
                onClick={() => scrollToSection('construction-section')}
                className="text-left group cursor-pointer transition-all duration-300 hover:text-primary"
              >
                <h3 className="text-3xl font-light group-hover:scale-105 transition-transform duration-300">
                  Construction
                </h3>
              </button>
              <button 
                onClick={() => scrollToSection('consultancy-section')}
                className="text-center group cursor-pointer transition-all duration-300 hover:text-primary"
              >
                <h3 className="text-3xl font-light group-hover:scale-105 transition-transform duration-300">
                  Consultancy
                </h3>
              </button>
              <button 
                onClick={() => scrollToSection('architecture-section')}
                className="text-center group cursor-pointer transition-all duration-300 hover:text-primary"
              >
                <h3 className="text-3xl font-light group-hover:scale-105 transition-transform duration-300">
                  Architecture
                </h3>
              </button>
              <button 
                onClick={() => scrollToSection('general-services-section')}
                className="text-right group cursor-pointer transition-all duration-300 hover:text-primary"
              >
                <h3 className="text-3xl font-light group-hover:scale-105 transition-transform duration-300">
                  General Services
                </h3>
              </button>
            </div>

            {/* White line spanning full page width */}
            <div className="w-full h-0.5 bg-white mb-12"></div>
            
            {/* Portfolio Link - Right aligned */}
            <div className="text-white text-right">
              <Link 
                to="/portfolio" 
                className="flex items-center justify-end gap-4 no-underline group"
              >
                <span className="text-white text-sm sm:text-base md:text-lg font-normal tracking-wide group-hover:text-primary/80 transition-colors duration-300">
                  SEE OUR PORTFOLIO
                </span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 group-hover:bg-primary/80 transition-colors duration-300">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Section */}
      <section id="construction-section" className="py-20 bg-white">
        <div className="container mx-auto px-12 lg:px-24">
          <h2 className="text-4xl font-light mb-4">Construction</h2>
          <div className="w-full h-0.5 bg-gray-300 mb-4"></div>
          <p className="text-gray-600 text-lg font-light leading-relaxed mb-12 max-w-3xl">
            We provide end-to-end construction services - from buildings we'd love to meet your needs. 
            From residential buildings to large commercial and infrastructure projects.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={buildingDesignImage} 
                alt="Building Design" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Building Design and Planning
              </div>
            </div>
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={constructionMgmtImage} 
                alt="Construction Management" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Construction Management
              </div>
            </div>
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={renovationImage} 
                alt="Renovation" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Renovation and Refurbishment
              </div>
            </div>
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={projectMgmtImage} 
                alt="Project Management" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Project Management
              </div>
            </div>
          </div>

          {/* LET'S TALK Button - Updated to navigate to contact form */}
          <div className="text-right">
            <button 
              onClick={navigateToContactForm}
              className="flex items-center gap-4 no-underline group ml-auto justify-end"
            >
              <span className="text-primary text-sm sm:text-base md:text-lg font-normal tracking-wide group-hover:text-primary/80 transition-colors duration-300">
                LET'S TALK
              </span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 group-hover:bg-primary/80 transition-colors duration-300">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Consultancy Section */}
      <section id="consultancy-section" className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="mb-12">
            <div className="flex flex-col items-end"> 
              <h2 className="text-4xl font-light mb-4">Consultancy</h2>
              <div className="w-full h-0.5 bg-white mb-8"></div> 
            </div>
            
            <div className="flex justify-end">
              <div className="max-w-3xl text-right">
                <p className="text-lg font-light leading-relaxed">
                  We provide end-to-end construction consultancy services tailored to meet your project goals. 
                  From residential developments to large-scale commercial and infrastructure projects.
                </p>
              </div>
            </div>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={strategicPlanningImage} 
                alt="Strategic Planning" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Strategic Planning
              </div>
            </div>
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={operationsImage} 
                alt="Operations Improvement" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Operations Improvement
              </div>
            </div>
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={financialAnalysisImage} 
                alt="Financial Analysis" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Financial Analysis and Planning
              </div>
            </div>
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={marketResearchImage} 
                alt="Market Research" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Market Research and Analysis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Electrical Services Section */}
      <section id="architecture-section" className="py-20 bg-white">
        <div className="container mx-auto px-12 lg:px-24">
          <h2 className="text-4xl font-light mb-4">Electrical Services</h2>
          <div className="w-full h-0.5 bg-gray-300 mb-4"></div>
          <p className="text-gray-600 text-lg font-light leading-relaxed mb-12 max-w-3xl">
            We provide end-to-end construction services - from buildings we'd love to meet your needs. 
            From residential buildings to large commercial and infrastructure projects.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={buildingDesignImage} 
                alt="Building Design" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Electrical Design & Installation
              </div>
            </div>
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={constructionMgmtImage} 
                alt="Construction Management" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Power Distribution Systems
              </div>
            </div>
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={renovationImage} 
                alt="Renovation" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Lighting & Smart Controls
              </div>
            </div>
            <div className="group relative h-64 rounded-lg overflow-hidden cursor-pointer">
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent z-10"></div>
              <img 
                src={projectMgmtImage} 
                alt="Project Management" 
                className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 ease-out" 
              />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl z-20">
                Renewable & Solar Energy Systems
              </div>
            </div>
          </div>

          {/* LET'S TALK Button - Updated to navigate to contact form */}
          <div className="text-right">
            <button 
              onClick={navigateToContactForm}
              className="flex items-center gap-4 no-underline group ml-auto justify-end"
            >
              <span className="text-primary text-sm sm:text-base md:text-lg font-normal tracking-wide group-hover:text-primary/80 transition-colors duration-300">
                LET'S TALK
              </span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 group-hover:bg-primary/80 transition-colors duration-300">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>
        </div>
      </section>

      {/* Equipment Hire Section */}
      <section id="general-services-section" className="py-16 bg-white">
        <div className="container mx-auto px-12 lg:px-24">
          
          {/* Section Header */}
          <div className="text-center mb-12">
            <div className="inline-block mb-4">
              <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                Construction Solutions
              </span>
            </div>
            <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-4">
              Hire Reliable Construction<br />
              <span className="font-bold text-secondary">Equipment Today</span>
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mt-6"></div>
          </div>

          {/* Main Container with Image and Overlapping Card */}
          <div className="relative mb-16">
            {/* Image Section */}
            <div className="group relative h-[500px] overflow-hidden rounded-xl cursor-pointer">
              {/* Combined Black and Gradient Overlay */}
              <div className="absolute inset-0 bg-black/50 z-0 transition-opacity duration-500 group-hover:bg-black/40"></div>
              {/* Optional subtle gradient on top of black */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-transparent z-0"></div>
              <img 
                src={equipmentImage} 
                alt="Modern Construction Equipment"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>

            {/* Orange Highlight Card - Positioned over the image */}
            <div className="absolute -bottom-10 left-1/2 transform -translate-x-1/2 w-11/12 max-w-4xl z-20">
              <div className="bg-[#FD7100] text-white p-10 md:p-12 text-center shadow-2xl rounded-lg transform hover:-translate-y-2 transition-all duration-300">
                <div className="flex items-center justify-center mb-4">
                  <div className="w-12 h-1 bg-white/80 mr-4"></div>
                  <span className="text-sm font-semibold tracking-widest uppercase opacity-90">
                    Why Choose Us
                  </span>
                  <div className="w-12 h-1 bg-white/80 ml-4"></div>
                </div>
                <p className="text-2xl md:text-3xl font-light leading-relaxed">
                  Partner with the leaders in construction equipment rental<br />
                  where <span className="font-semibold">innovation meets reliability</span>
                </p>
              </div>
            </div>
          </div>

          {/* Features Grid - Adjusted margin to account for overlapping card */}
          <div className="mt-32 mb-16">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">⚡</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Instant Availability</h3>
                <p className="text-gray-600">
                  Wide range of equipment ready for immediate deployment
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">🛡️</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Maintained & Safe</h3>
                <p className="text-gray-600">
                  Regularly serviced equipment ensuring safety and reliability
                </p>
              </div>
              <div className="text-center p-6 rounded-lg bg-gray-50 hover:bg-gray-100 transition-colors duration-300">
                <div className="w-16 h-16 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-6">
                  <span className="text-2xl">💰</span>
                </div>
                <h3 className="text-xl font-semibold mb-4">Cost-Effective</h3>
                <p className="text-gray-600">
                  Flexible rental plans tailored to your project needs
                </p>
              </div>
            </div>
          </div>

          {/* CONTACT FOR EQUIPMENT Button - Updated to navigate to contact form */}
          <div className="text-center">
            <button 
              onClick={navigateToContactForm}
              className="inline-flex items-center gap-4 no-underline group"
            >
              <span className="text-primary text-sm sm:text-base md:text-lg font-normal tracking-wide group-hover:text-primary/80 transition-colors duration-300">
                CONTACT FOR EQUIPMENT
              </span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 group-hover:bg-primary/80 transition-colors duration-300">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </button>
          </div>

        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;