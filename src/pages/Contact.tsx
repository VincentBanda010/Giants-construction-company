import Header from "@/components/Header";
import Footer from "@/components/Footer";
import contactHeroImage from "@/assets/contact-hero.jpg";
import mapImage from "@/assets/map.jpg";

const Contact = () => {
  return (
    <div className="min-h-screen font-outfit">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[50vh] flex items-center bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${contactHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-4 relative z-10 text-white">
          <h1 className="text-5xl md:text-6xl font-light mb-6">Let's Get in Touch</h1>
          <p className="text-xl max-w-3xl leading-relaxed font-light">
            We're here to support your construction journey — from planning to successful project 
            delivery. Reach out to us for expert advice, consultations, or to discuss your next project.
          </p>
        </div>
      </section>

      {/* Office Address Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-light mb-4">Office Address</h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          <div className="mb-8 text-lg">
            <p className="font-light mb-2">Giants Construction and Consultancy</p>
            <p className="text-muted-foreground font-light">Alnaal House - Blantyre</p>
            <p className="text-muted-foreground font-light">Malawi</p>
          </div>

          {/* Map */}
          <div className="relative h-96 rounded-lg overflow-hidden">
            <img src={mapImage} alt="Map Location" className="w-full h-full object-cover" />
          </div>
        </div>
      </section>

      {/* Contact Details Section */}
      <section className="py-20 bg-muted">
        <div className="container mx-auto px-4">
          <div className="mb-12">
            <h2 className="text-4xl font-light mb-4">Contact Details</h2>
            <div className="w-16 h-1 bg-primary" />
          </div>

          <div className="space-y-8 max-w-2xl">
            <div>
              <h3 className="text-xl font-light mb-2">Phone</h3>
              <p className="text-lg font-light">+265 (0) 881 14 77 90</p>
              <p className="text-muted-foreground font-light">
                (Available Monday to Saturday, 9:00 AM - 6:00 PM IST)
              </p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-2">Email</h3>
              <p className="text-lg font-light">giantsconstructionandconsultancy@gmail.com</p>
            </div>

            <div>
              <h3 className="text-xl font-light mb-2">Website</h3>
              <p className="text-lg font-light">www.Giants Constructions and Consultancy .com</p>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;