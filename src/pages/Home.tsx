import { useState, useEffect } from "react";
import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-construction.png";
import heroImage2 from "@/assets/heroImage2.jpg"; 
import heroImage3 from "@/assets/heroImage3.jpg"; 
import constructorImage from "@/assets/constructor-worker.png";
import consultancyImage from "@/assets/consultancy-team.png";
import architectureImage from "@/assets/architecture-plans.jpg";

const Home = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isTransitioning, setIsTransitioning] = useState(false);

  const heroSlides = [
    {
      image: heroImage,
      title: "Engineered for\nstrength, Designed\nfor life",
      subtitle: "Premium quality construction solutions"
    },
    {
      image: heroImage2,
      title: "Innovation Meets\nDurability",
      subtitle: "Built to last generations"
    },
    {
      image: heroImage3,
      title: "Custom Solutions\nfor Every Need",
      subtitle: "Tailored to your requirements"
    }
  ];

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % heroSlides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const prevSlide = () => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex((prev) => (prev - 1 + heroSlides.length) % heroSlides.length);
      setIsTransitioning(false);
    }, 500);
  };

  const goToSlide = (index: number) => {
    setIsTransitioning(true);
    setTimeout(() => {
      setCurrentIndex(index);
      setIsTransitioning(false);
    }, 500);
  };

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section with Rotation */}
      <section className="relative min-h-screen flex items-end justify-start overflow-hidden pt-20 pb-20">
        {heroSlides.map((slide, index) => (
          <div
            key={index}
            className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
            style={{ backgroundImage: `url(${slide.image})` }}
          />
        ))}
        
        <div className="absolute inset-0 bg-black/50" />
        
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div className={`max-w-2xl text-white transition-opacity duration-500 ${
            isTransitioning ? 'opacity-0' : 'opacity-100'
          }`}>
            <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-normal mb-4 leading-tight whitespace-pre-line">
              {heroSlides[currentIndex].title}
            </h1>
            
            <p className="text-lg sm:text-xl md:text-2xl mb-16 opacity-0 animate-fadeIn">
              {heroSlides[currentIndex].subtitle}
            </p>
            
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors cursor-pointer">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <span className="text-base sm:text-lg md:text-xl font-normal tracking-wide text-white">
                Request a Quote Today
              </span>
            </div>
          </div>
        </div>

        <button 
          onClick={prevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary transition-colors"
        >
          <ChevronLeft className="w-8 h-8" />
        </button>
        <button 
          onClick={nextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 z-10 text-white hover:text-primary transition-colors"
        >
          <ChevronRight className="w-8 h-8" />
        </button>

        <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 flex gap-2 z-10">
          {heroSlides.map((_, index) => (
            <button
              key={index}
              className={`w-3 h-3 rounded-full transition-all ${
                index === currentIndex ? 'bg-white' : 'bg-white/50'
              }`}
              onClick={() => goToSlide(index)}
            />
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4 lg:px-8">
          <div>
            <p className="text-secondary text-base sm:text-lg md:text-xl font-semibold tracking-wider mb-2 text-left">
              Years of Experience in
            </p>
            
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4 leading-tight text-left">
              Construction, Consultancy and<br />
              Architecture
            </h2>
            
            <div className="w-full h-px bg-black mb-8"></div>
            
            <div className="mb-12 max-w-2xl ml-auto">
              <p className="text-gray-600 text-base sm:text-lg md:text-xl font-light leading-relaxed text-right">
                Your trusted partner in construction and consultancy solutions since in<br />
                2017. Committed to delivering high quality construction projects and<br />
                professional consulting<br />
                services across Malawi.
              </p>
            </div>
            
            <div className="flex items-center gap-4 justify-end">
              <span className="text-primary text-sm sm:text-base md:text-lg font-normal tracking-wide">
                GET TO KNOW US
              </span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Best Constructors Section */}
      <section
        className="relative py-32 bg-cover bg-center"
        style={{ backgroundImage: `url(${constructorImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 lg:px-8 relative z-10">
          <div> 
            <div className="w-14 h-2.5 bg-primary mb-6" />
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-8 leading-tight text-white">
              We are Best<br />
              Constructors in<br />
              Malawi
            </h2>
            
            {/* Blue rectangle */}
            <div className="bg-secondary p-6 sm:p-8 rounded-lg mb-8 mt-12">
              <p className="text-base sm:text-lg md:text-xl leading-relaxed font-light text-white mb-8">
                We deliver end-to-end construction solutions built on quality, precision, and reliability. 
                From large-scale industrial projects to commercial and residential developments, our team 
                ensures every structure meets the highest standards of safety, durability, and craftsmanship
              </p>
  
              <div className="flex items-center gap-4 justify-end">
                <Link to="/services" className="flex items-center gap-4 no-underline group">
                  <span className="text-primary text-sm sm:text-base md:text-lg font-normal tracking-wide">
                    LEARN MORE
                  </span>
                  <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                    <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Consultancy Pioneers Section */}
      <section className="py-20 bg-gray-200"> 
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-4">
                Consultancy Pioneers
              </h2>
              <div className="w-14 h-3 bg-primary mb-6" />

              <p className="text-gray-600 text-base sm:text-lg md:text-xl leading-relaxed mb-6 font-extralight">
                Our consultancy services provide clients with informed, data-driven guidance 
                at every stage of their projects. We help optimize designs, control costs, 
                and ensure compliance with industry standards and local regulations.
              </p>
              <Link to="/services" className="flex items-center gap-4 no-underline group">
                <span className="text-primary text-sm sm:text-base md:text-lg font-normal tracking-wide">
                  LEARN MORE
                </span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </Link>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img
                src={consultancyImage}
                alt="Consultancy Team"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Architecture Engineering Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4 lg:px-8">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src={architectureImage}
                alt="Architecture Plans"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-light mb-6">
                Forefront in Architecture Engineering
              </h2>
              <div className="w-14 h-3 bg-primary mb-6" />
              <p className="text-muted-foreground text-base sm:text-lg md:text-xl leading-relaxed mb-6 font-extralight">
                Our architectural team brings creativity and precision together to transform 
                ideas into structurally sound and visually compelling spaces.
              </p>
              <Link to="/services" className="flex items-center gap-4 no-underline group">
                <span className="text-primary text-sm sm:text-base md:text-lg font-normal tracking-wide">
                  LEARN MORE
                </span>
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                  <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Home;