import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Phone, Mail, MapPin, Clock, Send } from "lucide-react";
import { Button } from "@/components/ui/button";
import contactHeroImage from "@/assets/contact-hero.jpg";
import mapImage from "@/assets/map.jpg";
import { useEffect } from "react";

const Contact = () => {
  // Initialize scroll to contact form section if needed
  useEffect(() => {
    document.documentElement.style.scrollBehavior = 'smooth';
    
    // Check if we need to scroll to the contact form section
    const scrollToContactSection = localStorage.getItem('scrollToContactSection');
    if (scrollToContactSection) {
      setTimeout(() => {
        const element = document.getElementById(scrollToContactSection);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
        localStorage.removeItem('scrollToContactSection');
      }, 100);
    }
    
    return () => {
      document.documentElement.style.scrollBehavior = 'auto';
    };
  }, []);

  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-center bg-cover bg-center pt-20"
        style={{ backgroundImage: `url(${contactHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-12 lg:px-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white leading-tight">
              Contact Us
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed">
              Reach out to our team for professional construction and consultancy solutions. 
              We're here to help you build your vision.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Cards Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Get in Touch</h2>
              <div className="w-20 h-1 bg-primary mx-auto mb-6" />
              <p className="text-gray-600 max-w-2xl mx-auto text-lg font-light">
                Choose your preferred method of contact. Our team is ready to assist you.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  icon: <Phone className="w-8 h-8" />,
                  title: "Call Us",
                  details: "+265 (0) 881 14 77 90",
                  description: "Monday - Saturday, 9:00 AM - 6:00 PM",
                  buttonText: "Call Now",
                  bgColor: "bg-blue-50",
                  iconColor: "text-blue-600",
                  buttonVariant: "default" as const
                },
                {
                  icon: <Mail className="w-8 h-8" />,
                  title: "Email Us",
                  details: "giantscc@gmail.com",
                  description: "We typically respond within 24 hours",
                  buttonText: "Send Email",
                  bgColor: "bg-green-50",
                  iconColor: "text-green-600",
                  buttonVariant: "outline" as const
                },
                {
                  icon: <MapPin className="w-8 h-8" />,
                  title: "Visit Us",
                  details: "Alnaal House, Blantyre",
                  description: "Malawi",
                  buttonText: "Get Directions",
                  bgColor: "bg-orange-50",
                  iconColor: "text-orange-600",
                  buttonVariant: "outline" as const
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary/30 transition-colors duration-300 hover:shadow-lg"
                >
                  <div className={`w-16 h-16 rounded-xl ${item.bgColor} flex items-center justify-center mb-6`}>
                    <div className={item.iconColor}>
                      {item.icon}
                    </div>
                  </div>
                  <h3 className="text-2xl font-light mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-primary font-medium text-lg mb-2">{item.details}</p>
                  <p className="text-gray-600 mb-6 font-light">{item.description}</p>
                  <Button 
                    variant={item.buttonVariant} 
                    className="w-full"
                  >
                    {item.buttonText}
                  </Button>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Office Location & Map */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              {/* Address Details */}
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-6">Our Office</h2>
                <div className="w-16 h-1 bg-primary mb-8" />
                
                <div className="space-y-6">
                  <div>
                    <h3 className="text-xl font-light mb-3 text-gray-800">
                      Giants Construction and Consultancy
                    </h3>
                    <div className="space-y-2 text-gray-600 font-light">
                      <p className="flex items-center gap-3">
                        <MapPin className="w-5 h-5 text-primary" />
                        Alnaal House, Blantyre, Malawi
                      </p>
                      <p className="flex items-center gap-3">
                        <Clock className="w-5 h-5 text-primary" />
                        Monday - Saturday: 9:00 AM - 6:00 PM
                      </p>
                      <p className="flex items-center gap-3">
                        <Phone className="w-5 h-5 text-primary" />
                        +265 (0) 881 14 77 90
                      </p>
                    </div>
                  </div>

                  <div className="pt-6">
                    <h4 className="text-lg font-light mb-4 text-gray-800">Business Hours</h4>
                    <div className="space-y-2 text-gray-600 font-light">
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday: 9:00 AM - 1:00 PM</p>
                      <p>Sunday: Closed</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Map */}
              <div className="relative h-[400px] rounded-xl overflow-hidden shadow-lg">
                <img 
                  src={mapImage} 
                  alt="Office Location" 
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Form Section */}
      <section id="contact-section" className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            
            {/* Section Header with decorative elements */}
            <div className="text-center mb-16">
              <div className="inline-block mb-4">
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Get In Touch
                </span>
              </div>
              <h2 className="text-4xl md:text-5xl font-light text-gray-900 mb-6">
                Send Us a Message
              </h2>
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              <p className="text-gray-600 text-lg md:text-xl font-light max-w-2xl mx-auto leading-relaxed">
                Have a project in mind? Fill out the form below and we'll get back to you 
                with a detailed proposal tailored to your needs.
              </p>
            </div>

            {/* Form Container with subtle shadow */}
            <div className="bg-white rounded-2xl border border-gray-100 p-8 md:p-12 shadow-lg">
              <form className="space-y-8">
                
                {/* Name Fields */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                      First Name
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                      placeholder="Zora"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                      Last Name
                    </label>
                    <input 
                      type="text" 
                      required
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                      placeholder="Walusungu"
                    />
                  </div>
                </div>

                {/* Contact Information */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                      Email Address
                    </label>
                    <input 
                      type="email" 
                      required
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                      placeholder="zorawalusungu@example.com"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                      Phone Number
                    </label>
                    <input 
                      type="tel" 
                      className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-gray-400"
                      placeholder="+265 XXX XXX XXX"
                    />
                  </div>
                </div>

                {/* Project Type */}
                <div className="space-y-3">
                  <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                    Project Type
                  </label>
                  <select 
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all text-gray-700 appearance-none bg-white"
                  >
                    <option value="" className="text-gray-400">Select project type</option>
                    <option value="construction" className="py-2">Construction</option>
                    <option value="consultancy">Consultancy</option>
                    <option value="renovation">Renovation</option>
                    <option value="electrical">Electrical Services</option>
                    <option value="equipment">Equipment Rental</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                {/* Message */}
                <div className="space-y-3">
                  <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                    Project Details
                  </label>
                  <textarea 
                    rows={5}
                    required
                    className="w-full px-5 py-4 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary/50 focus:border-primary outline-none transition-all placeholder:text-gray-400 resize-none"
                    placeholder="Tell us about your project requirements, timeline, budget, and any specific needs..."
                  />
                </div>

                {/* Submit Button */}
                <div className="pt-4">
                  <button
                    type="submit"
                    className="group w-full bg-primary hover:bg-primary/90 text-white rounded-xl py-5 px-8 flex items-center justify-center gap-4 transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
                  >
                    <span className="text-lg font-semibold tracking-wide">
                      SEND MESSAGE
                    </span>
                    <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                      <Send className="w-6 h-6 text-white" />
                    </div>
                  </button>
                </div>

                {/* Optional: Privacy notice */}
                <p className="text-center text-gray-500 text-sm pt-4">
                  By submitting this form, you agree to our privacy policy. We'll never share your information.
                </p>

              </form>
            </div>

            {/* Contact Info Cards below form */}
            <div className="grid md:grid-cols-3 gap-8 mt-16">
              <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Phone className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Call Us</h4>
                <p className="text-gray-600">+265 123 456 789</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Mail className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Email Us</h4>
                <p className="text-gray-600">info@giantscc.com</p>
              </div>
              <div className="text-center p-6 rounded-xl bg-gray-50 border border-gray-100">
                <div className="w-12 h-12 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                  <MapPin className="w-6 h-6 text-primary" />
                </div>
                <h4 className="font-semibold text-gray-900 mb-2">Visit Us</h4>
                <p className="text-gray-600">Lilongwe, Malawi</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Contact;