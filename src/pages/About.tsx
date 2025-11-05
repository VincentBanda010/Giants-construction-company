import { useState } from "react";
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

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-end bg-cover bg-center pt-20 pb-20" 
        style={{ backgroundImage: `url(${aboutHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10">
          <div className="flex justify-between items-end">
            {/* Left side - List with larger text */}
            <div className="text-white ml-16"> {/* Added ml-16 to move right */}
              <ul className="space-y-6 text-2xl"> {/* Increased to text-2xl and space-y-6 */}
                <li>
                  Who Are We
                  <div className="w-20 h-0.5 bg-white mt-2"></div> {/* Adjusted widths for larger text */}
                </li>
                <li>
                  Mission, Team, Values
                  <div className="w-40 h-0.5 bg-white mt-2"></div>
                </li>
                <li>
                  Strategy
                  <div className="w-16 h-0.5 bg-white mt-2"></div>
                </li>
                <li>
                  Pillars
                  <div className="w-14 h-0.5 bg-white mt-2"></div>
                </li>
                <li>
                  Leadership
                  <div className="w-20 h-0.5 bg-white mt-2"></div>
                </li>
              </ul>
            </div>
            
            {/* Right side - Button */}
              <div className="mr-16"> 
                <Button 
                  className="mt-8 bg-primary hover:bg-primary/90 text-white gap-2 rounded-full"
                  onClick={() => setIsChatbotOpen(true)}
                >
                  <MessageSquare className="w-4 h-4" />
                  Chat with our AI
                </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Who Are We Section */}
      <section className="py-20 bg-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full -translate-y-32 translate-x-32"></div>
        <div className="absolute bottom-0 left-0 w-48 h-48 bg-secondary/5 rounded-full translate-y-24 -translate-x-24"></div>
        
        <div className="container mx-auto px-4 relative z-10">
          <div> {/* Removed max-w-4xl constraint */}
            <div className="flex items-start gap-12"> {/* Increased gap */}
              {/* Left side - Heading with accent line */}
              <div className="flex-shrink-0 w-1/3"> {/* Set width for left column */}
                <h2 className="text-4xl font-light mb-4">Who Are We</h2>
                <div className="w-20 h-0.5 bg-primary"></div>
              </div>
              
              {/* Right side - Content */}
              <div className="w-2/3 space-y-6"> 
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
        className="py-20 bg-cover bg-center bg-fixed relative"
        style={{ backgroundImage: `url(${teamImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" /> {/* Dark overlay for readability */}
        <div className="container mx-auto px-4 relative z-10">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-transparent backdrop-blur-sm border border-white/20 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-light mb-4">Our Mission</h3> {/* Changed to font-light */}
              <p className="leading-relaxed">
                As a people focused company, we strive for excellence in all that we do — innovating, 
                delivering and sustaining infrastructure projects across Malawi.
              </p>
            </div>
            <div className="bg-transparent backdrop-blur-sm border border-white/20 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-light mb-4">Team and Expertise</h3> {/* Changed to font-light */}
              <p className="leading-relaxed">
                Engineers, architects and project managers who deliver innovative construction and 
                consultancy services with deep local knowledge and international standards.
              </p>
            </div>
            <div className="bg-transparent backdrop-blur-sm border border-white/20 p-8 rounded-lg text-white">
              <h3 className="text-2xl font-light mb-4">Our Values</h3> {/* Changed to font-light */}
              <p className="leading-relaxed">
                Integrity, Quality, and Partnership. We believe that every project offers an opportunity 
                to build trust and ensure sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Unique Strategy Section */}
      <section className="py-20 bg-secondary text-white relative overflow-hidden">
        {/* Background decorative elements */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full -translate-y-48 translate-x-48"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-white/5 rounded-full translate-y-40 -translate-x-40"></div>
        
        <div className="container mx-auto px-4 relative z-10">
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

            {/* Right side - Image */}
            <div className="relative h-full min-h-[600px] rounded-2xl overflow-hidden shadow-2xl">
              <img
                src={strategyWorkerImage}
                alt="Construction Worker"
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/30 to-transparent"></div>
            </div>
          </div>
        </div>
      </section>

      {/* Key Pillars Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          {/* Centered Title */}
          <div className="text-center mb-32 relative"> {/* Increased margin for more space */}
            <h2 className="text-4xl font-light mb-4">Key Pillars</h2>
            <div className="w-20 h-0.5 bg-black mx-auto" />
          </div>

          <div className="max-w-6xl mx-auto relative">
            {/* Diagonal lines container - Pushed up */}
            <div className="absolute top-0 left-0 right-0 h-80 pointer-events-none"> {/* Increased height */}
              {/* Line to Competence and Professionalism (far left) - Longer */}
              <div className="absolute top-0 left-1/2 w-0.5 h-80 bg-gray-400 transform origin-top" 
                  style={{ transform: 'rotate(-75deg) translateX(-380%)' }}></div>
              
              {/* Line to Seasoned Experience (left center) */}
              <div className="absolute top-0 left-1/2 w-0.5 h-72 bg-gray-400 transform origin-top" 
                  style={{ transform: 'rotate(-40deg) translateX(-160%)' }}></div>
              
              {/* Line to Integrity and Trust (right center) */}
              <div className="absolute top-0 left-1/2 w-0.5 h-72 bg-gray-400 transform origin-top" 
                  style={{ transform: 'rotate(40deg) translateX(160%)' }}></div>
              
              {/* Line to Innovation and Sustainability (far right) - Longer */}
              <div className="absolute top-0 left-1/2 w-0.5 h-80 bg-gray-400 transform origin-top" 
                  style={{ transform: 'rotate(75deg) translateX(380%)' }}></div>
            </div>

            {/* All pillars on same horizontal line - Adjusted spacing */}
            <div className="grid grid-cols-4 gap-8 relative z-10 pt-56"> {/* Increased padding top */}
              <div className="text-center">
                <h3 className="text-xl font-light leading-tight">Competence and<br />Professionalism</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light leading-tight">Seasoned<br />Experience</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light leading-tight">Integrity and<br />Trust</h3>
              </div>
              <div className="text-center">
                <h3 className="text-xl font-light leading-tight">Innovation and<br />Sustainability</h3>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Executive Leadership Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-light mb-4">Executive Leadership</h2> {/* Changed to font-light */}
            <div className="w-16 h-1 bg-primary" />
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <div key={i} className="bg-white rounded-lg overflow-hidden">
                <div className="h-64 bg-muted" />
                <div className="p-6">
                  <h3 className="text-xl font-light mb-2">Blessings Nundwe</h3> {/* Changed to font-light */}
                  <p className="text-muted-foreground font-light">CEO</p> {/* Added font-light */}
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
