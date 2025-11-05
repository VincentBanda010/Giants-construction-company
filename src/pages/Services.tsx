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

const Services = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Service Categories */}
      <section
        className="relative min-h-screen flex items-end bg-cover bg-center pt-20 pb-20"
        style={{ backgroundImage: `url(${servicesHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/70" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="w-full mx-auto">
            {/* Service Categories - Spread to page margins */}
            <div className="flex justify-between items-end text-white mb-4 w-full">
              <div className="text-left">
                <h3 className="text-3xl font-light">Construction</h3>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-light">Consultancy</h3>
              </div>
              <div className="text-center">
                <h3 className="text-3xl font-light">Architecture</h3>
              </div>
              <div className="text-right">
                <h3 className="text-3xl font-light">General Services</h3>
              </div>
            </div>

            {/* White line spanning full page width */}
            <div className="w-full h-0.5 bg-white mb-12"></div>
            
            {/* Portfolio Link - Right aligned */}
            <div className="text-white text-right">
              <div className="flex items-center justify-end gap-4">
                <span className="text-3xl font-light">See Our Portfolio</span>
                <ArrowRight className="w-8 h-8 text-primary stroke-[3]" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Construction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-4">Construction</h2>
          <div className="w-full h-0.5 bg-gray-300 mb-4"></div>
          <p className="text-gray-600 text-lg font-light leading-relaxed mb-12 max-w-3xl">
            We provide end-to-end construction services - from buildings we'd love to meet your needs. 
            From residential buildings to large commercial and infrastructure projects.
          </p>

          <div className="grid md:grid-cols-2 gap-8 mb-8">
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={buildingDesignImage} alt="Building Design" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl">
                Building Design and Planning
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={constructionMgmtImage} alt="Construction Management" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl">
                Construction Management
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={renovationImage} alt="Renovation" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl">
                Renovation and Refurbishment
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={projectMgmtImage} alt="Project Management" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl">
                Project Management
              </div>
            </div>
          </div>

          <div className="text-right">
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2 font-light">
              LET'S TALK
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      {/* Consultancy Section - UPDATED with full width line */}
      <section className="py-20 bg-secondary text-white">
        <div className="container mx-auto px-4">
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
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={strategicPlanningImage} alt="Strategic Planning" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl">
                Strategic Planning
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={operationsImage} alt="Operations Improvement" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl">
                Operations Improvement
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={financialAnalysisImage} alt="Financial Analysis" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl">
                Financial Analysis and Planning
              </div>
            </div>
            <div className="relative h-64 rounded-lg overflow-hidden">
              <img src={marketResearchImage} alt="Market Research" className="w-full h-full object-cover" />
              <div className="absolute bottom-4 left-4 text-white font-light text-xl">
                Market Research and Analysis
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* General Services Section - ENHANCED */}
      <section className="py-20 bg-gradient-to-br from-slate-50 to-blue-50 relative overflow-hidden">
        {/* Background Pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 right-10 w-64 h-64 bg-blue-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse"></div>
          <div className="absolute bottom-10 left-10 w-64 h-64 bg-indigo-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '2000ms'}}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-80 h-80 bg-cyan-200 rounded-full mix-blend-multiply filter blur-xl animate-pulse" style={{animationDelay: '4000ms'}}></div>
        </div>
        
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.8)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.8)_1px,transparent_1px)] bg-[size:4rem_4rem] [mask-image:radial-gradient(ellipse_80%_50%_at_50%_50%,black,transparent)]"></div>

        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-6xl mx-auto">
            <div className="flex flex-col">
              <h2 className="text-4xl font-bold mb-4">General Services</h2>
              <div className="w-full h-0.5 bg-gradient-to-r from-blue-500 to-indigo-600 mb-12"></div>
            </div>

            <div className="grid lg:grid-cols-2 gap-12 items-start">
              {/* Services List */}
              <div className="space-y-6">
                <div className="group p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-2">
                  <p className="text-lg text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                    • Professional Guidance
                  </p>
                </div>
                <div className="group p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-2" style={{transitionDelay: '100ms'}}>
                  <p className="text-lg text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                    • Innovative Strategies
                  </p>
                </div>
                <div className="group p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-2" style={{transitionDelay: '200ms'}}>
                  <p className="text-lg text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                    • Expert Advice
                  </p>
                </div>
                <div className="group p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-2" style={{transitionDelay: '300ms'}}>
                  <p className="text-lg text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                    • Results Driven Approach
                  </p>
                </div>
                <div className="group p-6 rounded-xl bg-white/70 backdrop-blur-sm border border-white/20 shadow-sm hover:shadow-md transition-all duration-300 hover:translate-x-2" style={{transitionDelay: '400ms'}}>
                  <p className="text-lg text-gray-700 font-medium group-hover:text-blue-600 transition-colors">
                    • Customized Solutions
                  </p>
                </div>
              </div>

              {/* Right Side Content */}
              <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-8 border border-white/30 shadow-lg">
                <h3 className="text-2xl font-bold text-gray-800 mb-6">
                  Comprehensive Service Excellence
                </h3>
                <div className="space-y-4">
                  <p className="text-gray-600 leading-relaxed">
                    Our general services are designed to provide comprehensive support across all aspects 
                    of your construction and development journey.
                  </p>
                  <p className="text-gray-600 leading-relaxed">
                    From initial consultation to project completion, we ensure seamless integration of 
                    professional guidance, innovative strategies, and customized solutions tailored to 
                    your specific requirements.
                  </p>
                  <div className="mt-6 p-4 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                    <p className="text-blue-700 font-medium">
                      "Transforming visions into reality through expert collaboration and proven methodologies."
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom Image Section */}
      <section
        className="h-96 bg-cover bg-center"
        style={{ backgroundImage: `url(${equipmentImage})` }}
      />

      <Footer />
    </div>
  );
};

export default Services;