import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import portfolioHeroImage from "@/assets/portfolio-hero.jpg";
import liwondeBridgeImage from "@/assets/liwonde-bridge.jpg";
import universityImage from "@/assets/university.jpg";

const Portfolio = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const projects = [
    {
      title: "Liwonde Bridge",
      image: liwondeBridgeImage,
    },
    {
      title: "University of Malawi",
      image: universityImage,
    },
  ];

  const nextSlide = () => {
    setCurrentSlide((prev) => (prev + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentSlide((prev) => (prev - 1 + projects.length) % projects.length);
  };

  return (
    <div className="min-h-screen font-outfit">
      <Header />
      
      {/* Loading Overlay - BELOW Header */}
      <div className="fixed inset-0 top-0 left-0 right-0 bottom-0 bg-white/80 backdrop-blur-sm z-40 flex items-center justify-center">
        <div className="text-center">
          <div className="relative">
            <div className="w-20 h-20 border-4 border-primary/20 rounded-full"></div>
            <div className="w-20 h-20 border-4 border-primary border-t-transparent rounded-full animate-spin absolute top-0 left-0"></div>
          </div>
          <p className="mt-4 text-lg text-muted-foreground font-light">Loading Portfolio...</p>
        </div>
      </div>

      {/* Content area - BELOW the loading overlay */}
      <div className="relative z-30">
        {/* Commented out Portfolio Content */}
        {/*
        <section
          className="relative min-h-[60vh] flex items-end bg-cover bg-center pt-20 pb-20"
          style={{ backgroundImage: `url(${portfolioHeroImage})` }}
        >
          <div className="absolute inset-0 bg-black/60" />
          <div className="container mx-auto px-4 relative z-10 text-white">
            <div className="flex flex-col">
              <h1 className="text-5xl md:text-6xl font-light mb-6 font-outfit">Our Portfolio</h1>
            </div>
            
            <div className="flex items-end justify-between gap-8">
              <p className="text-xl leading-relaxed font-light font-outfit max-w-2xl">
                Our portfolio reflects our commitment to excellence, innovation, and quality across 
                every project we undertake.
              </p>
              <Button className="bg-primary hover:bg-primary/90 text-white gap-2 rounded-full font-light font-outfit whitespace-nowrap">
                Let's Take Your Next Project
                <ArrowRight className="w-4 h-4" />
              </Button>
            </div>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="container mx-auto px-4">
            <div className="mb-12">
              <h2 className="text-4xl font-light mb-4">Featured Projects</h2>
              <div className="w-16 h-1 bg-primary" />
            </div>

            <div className="grid md:grid-cols-2 gap-8 mb-12">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="relative h-96 rounded-lg overflow-hidden group cursor-pointer"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover transition-transform group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8 flex items-center justify-between">
                    <h3 className="text-white text-2xl font-light">{project.title}</h3>
                    <button className="w-12 h-12 rounded-full bg-primary flex items-center justify-center text-white hover:bg-primary/90 transition-colors">
                      <ArrowRight className="w-5 h-5" />
                    </button>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex items-center gap-4">
              <div className="w-16 h-1 bg-primary" />
              <div className="flex items-center gap-4">
                <span className="text-xl font-light">1/20</span>
                <button
                  onClick={prevSlide}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <ChevronLeft className="w-6 h-6" />
                </button>
                <button
                  onClick={nextSlide}
                  className="p-2 hover:bg-muted rounded-full transition-colors"
                >
                  <ChevronRight className="w-6 h-6" />
                </button>
                <span className="text-muted-foreground font-light">Slide for more</span>
                <ArrowRight className="w-5 h-5 text-muted-foreground" />
              </div>
            </div>
          </div>
        </section>
        */}
      </div>

      <Footer />
    </div>
  );
};

export default Portfolio;