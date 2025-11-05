import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import internshipHeroImage from "@/assets/internship-hero.jpg";

const Internship = () => {
  return (
    <div className="min-h-screen font-outfit">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${internshipHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Internship Opportunities</h1>
          <p className="text-xl max-w-3xl leading-relaxed mb-8 font-light">
            Join our team and gain valuable hands-on experience in construction, consultancy, 
            and architecture. We're committed to nurturing the next generation of industry professionals.
          </p>
          <Button className="bg-primary hover:bg-primary/90 text-white gap-2 rounded-full font-light">
            Apply Now
            <ArrowRight className="w-4 h-4" />
          </Button>
        </div>
      </section>

      {/* Program Overview */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-light mb-8">Program Overview</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed font-light">
              <p>
                Our internship program offers students and recent graduates the opportunity to work 
                alongside experienced professionals on real construction and consultancy projects.
              </p>
              <p>
                Interns will gain exposure to various aspects of our business, including project 
                management, architectural design, site supervision, and client consultations.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* What We Offer */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-light mb-12">What We Offer</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4">Hands-On Experience</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Work on live projects and gain practical experience in construction management, 
                architectural design, and consultancy services.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4">Mentorship</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Learn from experienced professionals who are committed to your growth and 
                professional development.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4">Networking Opportunities</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Build valuable connections within the construction and consultancy industry 
                in Malawi and beyond.
              </p>
            </div>
            <div className="bg-white p-8 rounded-lg">
              <h3 className="text-2xl font-light mb-4">Career Development</h3>
              <p className="text-muted-foreground leading-relaxed font-light">
                Develop skills that will prepare you for a successful career in construction, 
                architecture, or consultancy.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* How to Apply */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="max-w-4xl">
            <h2 className="text-4xl font-light mb-8">How to Apply</h2>
            <div className="space-y-6 text-lg text-muted-foreground leading-relaxed mb-8 font-light">
              <p>
                To apply for an internship position, please send your CV, cover letter, and 
                academic transcripts to:
              </p>
              <p className="font-light text-foreground">
                giantsconstructionandconsultancy@gmail.com
              </p>
              <p>
                In your cover letter, please indicate your area of interest (Construction, 
                Consultancy, or Architecture) and your available start date.
              </p>
            </div>
            <Button className="bg-primary hover:bg-primary/90 text-white gap-2 font-light">
              Contact Us
              <ArrowRight className="w-4 h-4" />
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internship;