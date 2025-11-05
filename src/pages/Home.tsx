import { ArrowRight } from "lucide-react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import heroImage from "@/assets/hero-construction.png";
import constructorImage from "@/assets/constructor-worker.png";
import consultancyImage from "@/assets/consultancy-team.png";
import architectureImage from "@/assets/architecture-plans.jpg";

const Home = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-screen flex items-end justify-start bg-cover bg-center pt-20 pb-20" 
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl text-white">
            <h1 className="text-6xl md:text-7xl font-normal mb-16 leading-tight">
              Engineered for<br />
              strength, Designed<br />
              for life
            </h1>
            <div className="flex items-center gap-4">
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                <ArrowRight className="w-6 h-6 text-white" />
              </div>
              <span className="text-white text-lg font-normal tracking-wide">
                Request a Quote Today
              </span>
            </div>
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section className="py-32 bg-white">
        <div className="container mx-auto px-4">
          <div> {/* Removed max-w-3xl constraint completely */}
            <p className="text-secondary text-sm font-semibold tracking-wider mb-2 text-left">
              Years of Experience in
            </p>
            
            <h2 className="text-4xl md:text-5xl font-light mb-4 leading-tight text-left">
              Construction, Consultancy and<br />
              Architecture
            </h2>
            
            {/* Thin black long line extending full width */}
            <div className="w-full h-px bg-black mb-8"></div> {/* Full width line */}
            
            <div className="mb-12 max-w-2xl ml-auto"> {/* Only paragraph has max-width and right alignment */}
              <p className="text-gray-600 text-lg font-light leading-relaxed text-right">
                Your trusted partner in construction and consultancy solutions since in<br />
                2017. Committed to delivering high quality construction projects and<br />
                professional consulting<br />
                services across Malawi.
              </p>
            </div>
            
            <div className="flex items-center gap-4 justify-end">
              <span className="text-primary text-lg font-normal tracking-wide">
                GET TO KNOW US
              </span>
              <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 transition-colors">
                <ArrowRight className="w-6 h-6 text-white" />
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
        <div className="container mx-auto px-4 relative z-10">
          <div className="max-w-2xl">
            <div className="w-12 h-1 bg-primary mb-6" />
            <h2 className="text-4xl md:text-5xl font-light mb-8 leading-tight text-white">
              We are Best<br />
              Constructors in<br />
              Malawi
            </h2>
            
            {/* Blue rectangle with text */}
            <div className="bg-secondary p-8 rounded-lg mb-8">
              <p className="text-lg leading-relaxed font-light text-white">
                We deliver end-to-end construction solutions built on quality, precision, and reliability. 
                From large-scale industrial projects to commercial and residential developments, our team 
                ensures every structure meets the highest standards of safety, durability, and craftsmanship
              </p>
            </div>

            <Link to="/services">
              <Button variant="ghost" className="text-white hover:text-primary hover:bg-transparent p-0 h-auto font-light text-lg gap-2">
                LEARN MORE →
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Consultancy Pioneers Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="w-12 h-1 bg-primary mb-6" />
              <h2 className="text-4xl font-light mb-6"> {/* Light 300 */}
                Consultancy Pioneers
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-6 font-extralight"> {/* ExtraLight 200 */}
                Our consultancy services provide clients with informed, data-driven guidance 
                at every stage of their projects. We help optimize designs, control costs, 
                and ensure compliance with industry standards and local regulations.
              </p>
              <Link to="/services">
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                  LEARN MORE
                  <ArrowRight className="w-4 h-4" />
                </Button>
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
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="relative h-96 rounded-lg overflow-hidden order-2 md:order-1">
              <img
                src={architectureImage}
                alt="Architecture Plans"
                className="w-full h-full object-cover"
              />
            </div>
            <div className="order-1 md:order-2">
              <h2 className="text-4xl font-light mb-6"> {/* Light 300 */}
                Forefront in Architecture Engineering
              </h2>
              <div className="w-12 h-1 bg-primary mb-6" />
              <p className="text-muted-foreground leading-relaxed mb-6 font-extralight"> {/* ExtraLight 200 */}
                Our architectural team brings creativity and precision together to transform 
                ideas into structurally sound and visually compelling spaces.
              </p>
              <Link to="/services">
                <Button className="bg-primary hover:bg-primary/90 text-white gap-2">
                  LEARN MORE
                  <ArrowRight className="w-4 h-4" />
                </Button>
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