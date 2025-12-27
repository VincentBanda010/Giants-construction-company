import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { ArrowRight, Upload, FileText, User, Mail, Phone, GraduationCap, Building2, Calendar, CheckCircle, Shield } from "lucide-react";
import { Button } from "@/components/ui/button";
import internshipHeroImage from "@/assets/internship-hero.jpg"; 

const InternshipApplication = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phone: "",
    institution: "",
    program: "",
    yearOfStudy: "",
    graduationYear: "",
    internshipDuration: "4",
    preferredStartDate: "",
    coverLetter: "",
    cv: null,
    transcripts: null,
    otherDocuments: null,
    termsAccepted: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const target = e.target as HTMLInputElement;
    
    if (type === "checkbox") {
      setFormData({ ...formData, [name]: target.checked });
    } else if (type === "file") {
      setFormData({ ...formData, [name]: target.files?.[0] || null });
    } else {
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSubmitted(true);
      // In real implementation, you would send data to your server here
      console.log("Form submitted:", formData);
    }, 2000);
  };

  const resetForm = () => {
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      phone: "",
      institution: "",
      program: "",
      yearOfStudy: "",
      graduationYear: "",
      internshipDuration: "4",
      preferredStartDate: "",
      coverLetter: "",
      cv: null,
      transcripts: null,
      otherDocuments: null,
      termsAccepted: false,
    });
    setIsSubmitted(false);
  };

  if (isSubmitted) {
    return (
      <div className="min-h-screen bg-white">
        <Header />
        
        {/* Success Section */}
        <section className="py-32 bg-white">
          <div className="container mx-auto px-6 lg:px-12">
            <div className="max-w-2xl mx-auto text-center">
              <div className="w-32 h-32 mx-auto mb-8 rounded-full bg-green-50 flex items-center justify-center">
                <CheckCircle className="w-20 h-20 text-green-600" />
              </div>
              
              <div className="inline-block mb-6">
                <span className="text-sm font-semibold tracking-wider text-primary uppercase">
                  Application Status
                </span>
              </div>
              
              <h1 className="text-4xl md:text-5xl font-light mb-6 text-gray-900">
                Application Submitted
              </h1>
              
              <div className="w-24 h-1 bg-primary mx-auto mb-8"></div>
              
              <p className="text-gray-600 text-lg mb-10 leading-relaxed max-w-xl mx-auto">
                Thank you for applying to the Giants Internship Program. 
                We have received your application and will review it carefully.
              </p>
              
              <div className="space-y-6">
                <div className="bg-gray-50 rounded-xl p-8 text-left">
                  <h3 className="text-xl font-semibold mb-6 text-gray-800">Next Steps</h3>
                  <div className="space-y-4">
                    {[
                      { step: "Review", desc: "Application review by our team" },
                      { step: "Interview", desc: "Shortlisted candidates contacted" },
                      { step: "Selection", desc: "Final selection and offers" }
                    ].map((item, index) => (
                      <div key={index} className="flex items-start gap-4">
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0 mt-1">
                          <span className="text-primary font-medium">{index + 1}</span>
                        </div>
                        <div>
                          <p className="font-medium text-gray-800">{item.step}</p>
                          <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
                
                <div className="space-y-4 pt-6">
                  <Button 
                    onClick={resetForm}
                    className="bg-primary hover:bg-primary/90 text-white gap-3 rounded-full px-10 py-6 text-lg"
                  >
                    Submit Another Application
                    <ArrowRight className="w-5 h-5" />
                  </Button>
                  
                  <Button 
                    variant="outline"
                    onClick={() => window.location.href = '/'}
                    className="border-primary text-primary hover:bg-primary/10 gap-3 rounded-full px-10 py-6 text-lg"
                  >
                    Return to Homepage
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </section>
        
        <Footer />
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white">
      <Header />

      {/* Hero Section with Image Background */}
      <section 
        className="relative min-h-[70vh] flex items-center justify-center bg-cover bg-center"
        style={{ backgroundImage: `url(${internshipHeroImage})` }}
      >
        <div className="absolute inset-0 bg-black/60" />
        <div className="container mx-auto px-6 lg:px-12 relative z-10">
          <div className="max-w-4xl mx-auto text-center text-white">
            <div className="w-20 h-20 mx-auto mb-8 rounded-full bg-white/10 flex items-center justify-center backdrop-blur-sm">
              <FileText className="w-10 h-10 text-white" />
            </div>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-light mb-6 leading-tight">
              Internship Application
            </h1>
            
            <div className="w-32 h-1 bg-white mx-auto mb-8"></div>
            
            <p className="text-white/90 text-lg md:text-xl mb-8 font-light leading-relaxed max-w-2xl mx-auto">
              Complete the form below to apply for the Giants Construction & Consultancy Internship Program.
            </p>
            
            <div className="inline-flex items-center gap-4 bg-white/10 backdrop-blur-sm rounded-lg p-6 border border-white/20">
              <Calendar className="w-6 h-6 text-white" />
              <div className="text-left">
                <p className="text-white font-medium mb-1">Rolling Admissions</p>
                <p className="text-white/80 text-sm">Applications reviewed on first-come, first-served basis</p>
              </div>
            </div>
          </div>
        </div>
        
        {/* Scroll Indicator */}
        <div className="absolute bottom-10 left-1/2 transform -translate-x-1/2 animate-bounce">
          <div className="w-8 h-12 rounded-full border-2 border-white/50 flex justify-center">
            <div className="w-1 h-3 bg-white/70 rounded-full mt-2"></div>
          </div>
        </div>
      </section>

      {/* Application Form */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="max-w-4xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-12">
              
              {/* Personal Information */}
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <User className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900">Personal Information</h2>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                      First Name *
                    </label>
                    <input 
                      type="text" 
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                      placeholder="John"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                      Last Name *
                    </label>
                    <input 
                      type="text" 
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                      placeholder="Doe"
                    />
                  </div>
                </div>
                
                <div className="grid md:grid-cols-2 gap-6 mt-6">
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                      Email Address *
                    </label>
                    <input 
                      type="email" 
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                      placeholder="john@example.com"
                    />
                  </div>
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                      Phone Number *
                    </label>
                    <input 
                      type="tel" 
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                      placeholder="+265 XXX XXX XXX"
                    />
                  </div>
                </div>
              </div>

              {/* Educational Background */}
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <GraduationCap className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900">Educational Background</h2>
                </div>
                
                <div className="space-y-6">
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                      Institution *
                    </label>
                    <input 
                      type="text" 
                      name="institution"
                      value={formData.institution}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                      placeholder="University of Malawi, Tevera Institute, etc."
                    />
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                        Program of Study *
                      </label>
                      <input 
                        type="text" 
                        name="program"
                        value={formData.program}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                        placeholder="Civil Engineering, Architecture, etc."
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                        Year of Study *
                      </label>
                      <select 
                        name="yearOfStudy"
                        value={formData.yearOfStudy}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all text-gray-700 appearance-none bg-white"
                      >
                        <option value="" className="text-gray-400">Select year</option>
                        <option value="1">First Year</option>
                        <option value="2">Second Year</option>
                        <option value="3">Third Year</option>
                        <option value="4">Fourth Year</option>
                        <option value="5">Fifth Year</option>
                        <option value="graduate">Graduate</option>
                        <option value="recent">Recent Graduate</option>
                      </select>
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                        Expected Graduation Year *
                      </label>
                      <input 
                        type="number" 
                        name="graduationYear"
                        value={formData.graduationYear}
                        onChange={handleChange}
                        required
                        min="2024"
                        max="2030"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                        placeholder="2024"
                      />
                    </div>
                    <div className="space-y-3">
                      <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                        CGPA (if applicable)
                      </label>
                      <input 
                        type="number" 
                        step="0.01"
                        min="0"
                        max="4.0"
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400"
                        placeholder="3.5"
                      />
                    </div>
                  </div>
                </div>
              </div>

              {/* Documents Upload */}
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
                <div className="flex items-center gap-4 mb-8">
                  <div className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center">
                    <Upload className="w-6 h-6 text-primary" />
                  </div>
                  <h2 className="text-2xl md:text-3xl font-light text-gray-900">Required Documents</h2>
                </div>
                
                <div className="space-y-8">
                  <div className="space-y-3">
                    <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                      CV/Resume (PDF or Word) *
                    </label>
                    <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 text-center hover:border-primary transition-colors duration-300 relative">
                      <Upload className="w-12 h-12 text-gray-400 mx-auto mb-4" />
                      <p className="text-gray-600 mb-2">Drag and drop your CV here, or click to browse</p>
                      <p className="text-gray-500 text-sm">Maximum file size: 5MB • Accepted formats: PDF, DOC, DOCX</p>
                      <input 
                        type="file" 
                        name="cv"
                        onChange={handleChange}
                        accept=".pdf,.doc,.docx"
                        required
                        className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                      />
                      {formData.cv && (
                        <div className="mt-4 inline-flex items-center gap-2 bg-green-50 text-green-700 px-4 py-2 rounded-lg">
                          <CheckCircle className="w-4 h-4" />
                          <span className="text-sm">{formData.cv.name}</span>
                        </div>
                      )}
                    </div>
                  </div>
                  
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-3">
                      <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                        Cover Letter *
                      </label>
                      <textarea 
                        rows={6}
                        name="coverLetter"
                        value={formData.coverLetter}
                        onChange={handleChange}
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent outline-none transition-all placeholder:text-gray-400 resize-none"
                        placeholder="Tell us about your motivation for applying, relevant skills, and career goals..."
                      />
                    </div>
                    
                    <div className="space-y-3">
                      <label className="block text-gray-700 text-sm font-medium uppercase tracking-wider">
                        Academic Transcripts (Optional)
                      </label>
                      <div className="border-2 border-dashed border-gray-300 rounded-lg p-6 text-center hover:border-primary transition-colors duration-300 relative h-full flex flex-col items-center justify-center">
                        <FileText className="w-8 h-8 text-gray-400 mx-auto mb-3" />
                        <p className="text-gray-600 text-sm">Upload transcripts</p>
                        <input 
                          type="file" 
                          name="transcripts"
                          onChange={handleChange}
                          accept=".pdf,.jpg,.jpeg,.png"
                          className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
                        />
                        {formData.transcripts && (
                          <div className="mt-2 inline-flex items-center gap-2 bg-blue-50 text-blue-700 px-3 py-1 rounded-lg text-xs">
                            <CheckCircle className="w-3 h-3" />
                            <span>{formData.transcripts.name}</span>
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              {/* Terms and Submit */}
              <div className="bg-white rounded-xl border border-gray-200 p-8 shadow-lg">
                <div className="space-y-8">
                  <div className="space-y-4">
                    <h3 className="text-xl font-light text-gray-900">Declaration</h3>
                    <div className="bg-gray-50 rounded-lg p-6">
                      <p className="text-gray-700 leading-relaxed">
                        I hereby declare that all the information provided in this application is true and accurate to the best of my knowledge. 
                        I understand that any false information may result in disqualification from the internship program.
                      </p>
                    </div>
                  </div>
                  
                  <div className="flex items-start gap-3">
                    <input 
                      type="checkbox" 
                      id="terms"
                      name="termsAccepted"
                      checked={formData.termsAccepted}
                      onChange={handleChange}
                      required
                      className="w-5 h-5 rounded border-gray-300 text-primary focus:ring-primary/50 mt-1"
                    />
                    <label htmlFor="terms" className="text-gray-700 leading-relaxed">
                      I have read and agree to the terms and conditions of the Giants Internship Program.
                    </label>
                  </div>
                  
                  <div className="pt-6">
                    <button
                      type="submit"
                      disabled={isSubmitting || !formData.termsAccepted}
                      className={`group w-full ${isSubmitting || !formData.termsAccepted ? 'bg-primary cursor-not-allowed' : 'bg-primary hover:bg-primary/90'} text-white rounded-lg py-4 px-8 flex items-center justify-center gap-4 transition-all duration-300 hover:shadow-lg`}
                    >
                      <span className="text-lg font-semibold tracking-wide">
                        {isSubmitting ? 'SUBMITTING...' : 'SUBMIT APPLICATION'}
                      </span>
                      <div className={`w-10 h-10 rounded-full flex items-center justify-center ${isSubmitting || !formData.termsAccepted ? 'bg-white/40' : 'bg-white/20 group-hover:bg-white/30'} transition-colors`}>
                        {isSubmitting ? (
                          <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                        ) : (
                          <ArrowRight className="w-5 h-5 text-white" />
                        )}
                      </div>
                    </button>
                    
                    <p className="text-center text-gray-500 text-sm pt-6">
                      By submitting this form, you acknowledge that you have read and understood our 
                      <a href="/privacy" className="text-primary hover:underline ml-1">Privacy Policy</a> and 
                      <a href="/terms" className="text-primary hover:underline ml-1">Terms of Service</a>.
                    </p>
                  </div>
                </div>
              </div>
              
              {/* Help Section */}
              <div className="text-center pt-8">
                <div className="inline-flex items-center gap-6">
                  <div className="text-left">
                    <h4 className="text-lg font-light text-gray-800 mb-2">Need assistance with your application?</h4>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-2 text-gray-600">
                        <Mail className="w-4 h-4" />
                        <span>careers@gianinternship.com</span>
                      </div>
                      <div className="flex items-center gap-2 text-gray-600">
                        <Phone className="w-4 h-4" />
                        <span>+265 (0) 881 14 77 90</span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default InternshipApplication;