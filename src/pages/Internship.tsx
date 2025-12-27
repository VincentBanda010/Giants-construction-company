import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, GraduationCap, Building2, Briefcase, Wrench, Users, Calendar, Award, FileText, Mail } from "lucide-react";
import internshipHeroImage from "@/assets/internship-hero.jpg";
import { Link } from "react-router-dom";

const Internship = () => {
  return (
    <div className="min-h-screen">
      <Header />

      {/* Hero Section */}
      <section
        className="relative min-h-[60vh] flex items-end bg-cover bg-center pt-28 pb-20"
        style={{ backgroundImage: `url(${internshipHeroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
        <div className="container mx-auto px-12 lg:px-24 relative z-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 text-white leading-tight">
              Giants Internship Program
            </h1>
            <p className="text-lg md:text-xl text-white/90 mb-8 font-light leading-relaxed max-w-2xl">
              Building the next generation of construction and consultancy professionals through hands-on experience and mentorship.
            </p>
            
            {/* Apply Now Button */}
            <Link 
              to="/internship-application" 
              className="flex items-center gap-4 no-underline group w-fit"
            >
              <span className="text-white text-sm sm:text-base md:text-lg font-normal tracking-wide group-hover:text-primary/80 transition-colors duration-300">
                APPLY NOW
              </span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 group-hover:bg-primary/80 transition-colors duration-300">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      {/* Introduction Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-light mb-8">
              Igniting Futures at Giants Construction & Consultancy
            </h2>
            <div className="w-24 h-1 bg-primary mx-auto mb-12" />
            <p className="text-gray-600 text-lg leading-relaxed max-w-3xl mx-auto">
              In a fast-evolving industry, attracting and developing exceptional Malawian talent is 
              central to our mission. At Giants, we celebrate local expertise while maintaining 
              global standards. Our diverse, skilled team reflects the strength and potential of our 
              nation — united in building a prosperous future for Malawi and beyond.
            </p>
          </div>
        </div>
      </section>

      {/* Who Can Apply Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="max-w-5xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Who Can Apply</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {[
                {
                  icon: <GraduationCap className="w-12 h-12 text-primary" />,
                  title: "University & College Students",
                  description: "Currently enrolled in construction, engineering, architecture or related programs"
                },
                {
                  icon: <Building2 className="w-12 h-12 text-primary" />,
                  title: "Technical Institution Trainees",
                  description: "From Tevera and other accredited technical training institutions"
                },
                {
                  icon: <Briefcase className="w-12 h-12 text-primary" />,
                  title: "Recent Graduates",
                  description: "Seeking practical work experience to launch their professional careers"
                },
                {
                  icon: <Wrench className="w-12 h-12 text-primary" />,
                  title: "Artisans & Skilled Workers",
                  description: "Looking to enhance practical skills and gain professional exposure"
                },
              ].map((item, index) => (
                <div 
                  key={index}
                  className="bg-white rounded-xl p-8 text-center shadow-lg hover:shadow-xl transition-shadow duration-300 border border-gray-100"
                >
                  <div className="w-20 h-20 mx-auto mb-6 flex items-center justify-center rounded-full bg-primary/10">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-light mb-4 text-gray-800">{item.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{item.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What Interns Will Learn Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-light mb-8">
                  What Interns Will Learn
                </h2>
                <div className="w-20 h-1 bg-primary mb-10" />
                
                <div className="space-y-6">
                  {[
                    "Site supervision & project management",
                    "Health & safety compliance on construction sites",
                    "Reading and interpreting construction drawings",
                    "Material estimation & procurement processes",
                    "Hands-on construction and finishing skills",
                    "Exposure to electrical, plumbing, fumigation & maintenance systems",
                  ].map((item, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center flex-shrink-0 mt-1">
                        <span className="text-primary font-medium">{index + 1}</span>
                      </div>
                      <p className="text-gray-700 text-lg font-light">{item}</p>
                    </div>
                  ))}
                </div>
              </div>
              
              <div className="relative">
                <div className="bg-primary rounded-2xl p-8 md:p-12 text-white shadow-2xl">
                  <h3 className="text-2xl md:text-3xl font-light mb-8">
                    Comprehensive Learning Experience
                  </h3>
                  <ul className="space-y-4">
                    <li className="flex items-start gap-3">
                      <Users className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />
                      <span className="text-white/90">Professional mentorship from industry experts</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Calendar className="w-5 h-5 text-white/80 mt-1 flex-shrink-0" />
                      <span className="text-white/90">Flexible 4–12 week duration options</span>
                    </li>
                    <li className="flex items-start gap-3">
                      <Award className="w-5 h-5 text-white/80 mt=1 flex-shrink-0" />
                      <span className="text-white/90">Certificate of completion and recommendation letters</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Program Details Section */}
      <section className="py-20 bg-gray-50">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-light mb-4">Program Details</h2>
              <div className="w-20 h-1 bg-primary mx-auto" />
            </div>
            
            <div className="grid md:grid-cols-3 gap-8">
              {/* Program Duration & Format */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Calendar className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-light mb-6 text-gray-800">Duration & Format</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-medium">•</span>
                    <span>4–12 week flexible durations</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-medium">•</span>
                    <span>Full-time and part-time options available</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-medium">•</span>
                    <span>Department rotations for comprehensive exposure</span>
                  </li>
                </ul>
              </div>
              
              {/* Benefits */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <Award className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-light mb-6 text-gray-800">Benefits</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-medium">•</span>
                    <span>Professional certificate upon completion</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-medium">•</span>
                    <span>One-on-one mentorship sessions</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-medium">•</span>
                    <span>Real-world project experience</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-medium">•</span>
                    <span>Potential employment opportunities</span>
                  </li>
                </ul>
              </div>
              
              {/* Requirements */}
              <div className="bg-white rounded-xl p-8 shadow-lg">
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mb-6">
                  <FileText className="w-8 h-8 text-primary" />
                </div>
                <h3 className="text-2xl font-light mb-6 text-gray-800">Requirements</h3>
                <ul className="space-y-4">
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-medium">•</span>
                    <span>Updated CV/Resume</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-medium">•</span>
                    <span>Motivation letter (one page)</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-medium">•</span>
                    <span>Student ID or academic transcripts</span>
                  </li>
                  <li className="flex items-start gap-3 text-gray-600">
                    <span className="text-primary font-medium">•</span>
                    <span>Valid contact information</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-16 bg-white">
        <div className="container mx-auto px-12 lg:px-24">
          <div className="max-w-3xl mx-auto text-center">
            <h2 className="text-3xl font-light mb-6 text-gray-800">
              Ready to Build Your Future With Us?
            </h2>
            <p className="text-gray-600 text-lg mb-8">
              Join our internship program and gain the skills, experience, and connections to launch your career in construction and consultancy.
            </p>
            
            {/* Apply Today Button */}
            <Link 
              to="/internship-application" 
              className="inline-flex items-center gap-4 no-underline group mx-auto"
            >
              <span className="text-primary text-sm sm:text-base md:text-lg font-normal tracking-wide group-hover:text-primary/80 transition-colors duration-300">
                APPLY TODAY
              </span>
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full bg-primary flex items-center justify-center hover:bg-primary/90 group-hover:bg-primary/80 transition-colors duration-300">
                <ArrowRight className="w-5 h-5 sm:w-6 sm:h-6 text-white group-hover:translate-x-1 transition-transform duration-300" />
              </div>
            </Link>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Internship;