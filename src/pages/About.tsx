import { useState, useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import Chatbot from "@/components/Chatbot";
import { MessageSquare } from "lucide-react";
import { Button } from "@/components/ui/button";
import aboutHeroImage from "@/assets/about-hero.jpg";
import teamImage from "@/assets/teamImage.png";
import strategyWorkerImage from "@/assets/strategy-worker.jpg";

const About = () => {
  const [isChatbotOpen, setIsChatbotOpen] = useState(false);

  // Smooth scroll function
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Initialize smooth scroll
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section - Responsive */}
      <section
        className="relative min-h-[60vh] flex items-end bg-cover bg-center pt-28 pb-16 sm:pb-20"
        style={{ backgroundImage: `url(${aboutHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-10 sm:px-12 md:px-14 lg:px-24 xl:px-24 relative z-10">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-8 sm:gap-0">
            {/* Left side - List with responsive text */}
            <div className="text-white w-full sm:w-auto px-4 sm:px-0 sm:ml-4 md:ml-8 lg:ml-16">
              <ul className="space-y-4 sm:space-y-5 lg:space-y-6 text-lg sm:text-xl lg:text-2xl">
                <li>
                  <button 
                    onClick={() => scrollToSection('who-are-we')}
                    className="group text-left hover:text-primary transition-colors duration-300 cursor-pointer w-full sm:w-auto"
                  >
                    Who Are We
                    <div className="w-20 sm:w-24 lg:w-20 h-0.5 bg-white mt-2 group-hover:bg-primary transition-colors duration-300"></div>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('mission-team-values')}
                    className="group text-left hover:text-primary transition-colors duration-300 cursor-pointer w-full sm:w-auto"
                  >
                    Mission, Team, Values
                    <div className="w-32 sm:w-40 lg:w-40 h-0.5 bg-white mt-2 group-hover:bg-primary transition-colors duration-300"></div>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('strategy')}
                    className="group text-left hover:text-primary transition-colors duration-300 cursor-pointer w-full sm:w-auto"
                  >
                    Strategy
                    <div className="w-16 sm:w-20 lg:w-16 h-0.5 bg-white mt-2 group-hover:bg-primary transition-colors duration-300"></div>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('pillars')}
                    className="group text-left hover:text-primary transition-colors duration-300 cursor-pointer w-full sm:w-auto"
                  >
                    Pillars
                    <div className="w-14 sm:w-18 lg:w-14 h-0.5 bg-white mt-2 group-hover:bg-primary transition-colors duration-300"></div>
                  </button>
                </li>
                <li>
                  <button 
                    onClick={() => scrollToSection('leadership')}
                    className="group text-left hover:text-primary transition-colors duration-300 cursor-pointer w-full sm:w-auto"
                  >
                    Leadership
                    <div className="w-20 sm:w-24 lg:w-20 h-0.5 bg-white mt-2 group-hover:bg-primary transition-colors duration-300"></div>
                  </button>
                </li>
              </ul>
            </div>
            
            {/* Right side - Professional Chat Button - Responsive positioning */}
            <div className="w-full sm:w-auto px-4 sm:px-0 sm:mr-4 md:mr-8 lg:mr-16 mt-4 sm:mt-0">
              <button 
                onClick={() => setIsChatbotOpen(true)}
                className="flex items-center gap-3 group hover:opacity-90 transition-opacity duration-300 justify-center sm:justify-start"
              >
                <div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:scale-105 transition-transform duration-300 flex-shrink-0">
                  <MessageSquare className="w-5 h-5 text-white" />
                </div>
                <span className="text-base font-medium text-white whitespace-nowrap">
                  Consult Our Engineer
                </span>
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section id="who-are-we" className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="container mx-auto px-12 lg:px-24 relative z-10">
          <div>
            <div className="flex flex-col lg:flex-row items-start gap-12">
              {/* Left side - Heading with accent line */}
              <div className="lg:flex-shrink-0 lg:w-1/3">
                <h2 className="text-4xl font-light mb-4">Who Are We</h2>
                <div className="w-20 h-0.5 bg-primary"></div>
              </div>
              
              {/* Right side - Content */}
              <div className="lg:w-2/3 space-y-6"> 
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  Founded in 2017, we are a trusted partner in construction and consultancy solutions 
                  in Malawi. Our comprehensive expertise in delivering high-quality projects spans 
                  residential, commercial, and industrial infrastructure throughout the country.
                </p>
                <p className="text-gray-600 text-lg font-light leading-relaxed">
                  Over the years, we've built a strong foundation for reliability and professionalism, 
                  providing comprehensive services to all client needs. Today, they are present — from 
                  pre-development planning and site management to post-construction support — we ensure 
                  that every project meets the highest local codes and sustainability.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mission, Team, Values Section */}
      <section 
        id="mission-team-values"
        className="py-20 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: `url(${teamImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-12 lg:px-24 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-transparent backdrop-blur-sm border border-white/20 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-light mb-4">Our Mission</h3>
              <p className="leading-relaxed">
                As a people focused company, we strive for excellence in all that we do — innovating, 
                delivering and sustaining infrastructure projects across Malawi.
              </p>
            </div>
            <div className="bg-transparent backdrop-blur-sm border border-white/20 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-light mb-4">Team and Expertise</h3>
              <p className="leading-relaxed">
                Engineers, architects and project managers who deliver innovative construction and 
                consultancy services with deep local knowledge and international standards.
              </p>
            </div>
            <div className="bg-transparent backdrop-blur-sm border border-white/20 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-light mb-4">Our Values</h3>
              <p className="leading-relaxed">
                Integrity, Quality, and Partnership. We believe that every project offers an opportunity 
                to build trust and ensure sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Strategy Section */}
      <section id="strategy" className="py-20 bg-secondary text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="container mx-auto px-12 lg:px-24 relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-6">Unique Strategy and Commitment</h2>
            <div className="w-24 h-0.5 bg-primary mx-auto"></div>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* Left side - Strategy points */}
            <div className="space-y-10">
              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  1
                </div>
                <h3 className="text-2xl font-light mb-4">Client Centered Strategy</h3>
                <p className="leading-relaxed opacity-90 text-lg">
                  We believe every project is unique. We take time to understand each client's 
                  objectives, budget and timeline — then tailor our approach accordingly — whether 
                  it is a large residential complex or a commercial office building.
                </p>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  2
                </div>
                <h3 className="text-2xl font-light mb-4">Integrated Design and Build Approach</h3>
                <p className="leading-relaxed opacity-90 text-lg">
                  Our team offers seamless planning, architectural and building capabilities. From 
                  initial drawings, planning permission through to site execution, we deliver efficient 
                  end to end solutions.
                </p>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  3
                </div>
                <h3 className="text-2xl font-light mb-4">Use of Modern Technologies</h3>
                <p className="leading-relaxed opacity-90 text-lg">
                  We use BIM (Building Information Modelling) and project management tools to ensure 
                  digital collaboration and construction planning accuracy. This allows us to minimise 
                  waste, better time control and improve overall quality.
                </p>
              </div>

              <div className="relative pl-12">
                <div className="absolute left-0 top-0 w-8 h-8 bg-primary rounded-full flex items-center justify-center text-white font-bold text-sm">
                  4
                </div>
                <h3 className="text-2xl font-light mb-4">Local Expertise, Global Standards</h3>
                <p className="leading-relaxed opacity-90 text-lg">
                  Supported by our Malawian offices, we blend local insights with international best 
                  practices. This dual approach ensures we build to world-class standards and deliver 
                  practical solutions that work in the local context.
                </p>
              </div>
            </div>

            {/* Right side - Image with zoom effect */}
            <div className="group relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent z-10"></div>
              <img
                src={strategyWorkerImage}
                alt="Construction Worker"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars Section - Professional Layout */}
      <section id="pillars" className="py-20 bg-gray-50/50">
        <div className="container mx-auto px-12 lg:px-24 max-w-4xl">
          {/* Title Section */}
          <div className="mb-16">
            <h2 className="text-4xl md:text-5xl font-light mb-4">
              Key Pillars
            </h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          {/* Pillars Grid - Professional Layout */}
          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                number: "01",
                title: "Competence and Professionalism",
                description: "Our team comprises certified professionals with extensive experience in construction and consultancy."
              },
              {
                number: "02",
                title: "Seasoned Experience",
                description: "Years of hands-on experience across diverse projects ensures we deliver excellence consistently."
              },
              {
                number: "03",
                title: "Integrity and Trust",
                description: "We build lasting relationships based on transparency, honesty, and ethical business practices."
              },
              {
                number: "04",
                title: "Innovation and Sustainability",
                description: "We embrace modern technologies and sustainable practices for future-proof construction solutions."
              },
            ].map((pillar, index) => (
              <div
                key={index}
                className="group bg-white/80 backdrop-blur-sm border border-gray-100 
                           rounded-lg p-6 lg:p-8 hover:shadow-xl transition-all duration-300 
                           hover:border-primary/20 cursor-pointer"
              >
                {/* Number and Title */}
                <div className="flex items-start gap-4 mb-4">
                  <span className="text-primary text-3xl font-light tracking-tight">
                    {pillar.number}
                  </span>
                  <h3 className="text-xl font-light text-gray-800 group-hover:text-primary 
                               transition-colors duration-300 pt-1">
                    {pillar.title}
                  </h3>
                </div>
                
                {/* Description */}
                <p className="text-gray-600 font-light leading-relaxed pl-14">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section id="leadership" className="py-20 bg-gray-50/30">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="mb-16">
            <h2 className="text-4xl font-light mb-4">Executive Leadership</h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                name: "Blessings Nundwe",
                title: "Chief Executive Officer",
                description: "20+ years in construction industry leadership"
              },
              {
                name: "John Mwale",
                title: "Operations Director",
                description: "Specialized in project management and logistics"
              },
              {
                name: "Sarah Banda",
                title: "Technical Director",
                description: "Expert in sustainable architecture and design"
              },
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-lg 
                                        hover:shadow-2xl transition-shadow duration-300">
                {/* Placeholder for Profile Image */}
                <div className="h-64 bg-gradient-to-br from-primary/10 to-secondary/10 
                              flex items-center justify-center">
                  <div className="w-32 h-32 rounded-full bg-white/80 flex items-center justify-center 
                                border-4 border-white shadow-lg">
                    <span className="text-4xl font-light text-primary">
                      {leader.name.charAt(0)}
                    </span>
                  </div>
                </div>
                
                <div className="p-8">
                  <h3 className="text-2xl font-light mb-2 text-gray-800">
                    {leader.name}
                  </h3>
                  <p className="text-primary font-medium mb-4">{leader.title}</p>
                  <p className="text-gray-600 font-light">
                    {leader.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Chatbot isOpen={isChatbotOpen} onClose={() => setIsChatbotOpen(false)} />

      <Footer />
    </div>
  );
};

export default About;