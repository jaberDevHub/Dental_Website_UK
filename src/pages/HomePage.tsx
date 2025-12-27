
import React from 'react';
import { Link } from 'react-router-dom';
import { ChevronRight, Calendar, Stethoscope, Award, ArrowRight, ShieldCheck, Phone, Mail } from 'lucide-react';

const HomePage: React.FC = () => {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="relative bg-blue-900 text-white overflow-hidden">
        <div className="absolute inset-0 opacity-20">
          <img 
            src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&w=2070&auto=format&fit=crop" 
            alt="Modern dental clinic" 
            className="w-full h-full object-cover"
          />
        </div>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-24 lg:py-32 relative z-10">
          <div className="max-w-2xl">
            <h1 className="text-4xl lg:text-6xl font-extrabold tracking-tight mb-6">
              Excellence in Dental Care & Implants
            </h1>
            <p className="text-lg lg:text-xl text-blue-100 mb-8 leading-relaxed">
              Welcome to The University Dental and Implant Centre. Providing professional dental services in Birmingham with a commitment to patient safety and clinical excellence.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link 
                to="/appointments" 
                className="bg-white text-blue-900 px-8 py-4 rounded-full font-bold text-lg hover:bg-blue-50 transition-all flex items-center shadow-lg"
              >
                Book Appointment <ChevronRight className="ml-2 w-5 h-5" />
              </Link>
              <Link 
                to="/treatments" 
                className="bg-transparent border-2 border-white/30 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-white/10 transition-all"
              >
                Our Treatments
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* COVID/Safety Banner */}
      <section className="bg-yellow-50 border-y border-yellow-100 py-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
            <div className="bg-yellow-400 p-2 rounded-full">
              <ShieldCheck className="w-6 h-6 text-yellow-900" />
            </div>
            <div>
              <p className="text-yellow-900 font-semibold">Important Patient Update</p>
              <p className="text-yellow-800 text-sm">Access to the practice is by appointment only. No walk-ins permitted due to enhanced Infection Control measures.</p>
            </div>
            <Link to="/appointments" className="md:ml-auto text-yellow-900 font-bold underline hover:no-underline">Learn More</Link>
          </div>
        </div>
      </section>

      {/* Introduction */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative">
              <img 
                src="https://i.ibb.co.com/N6sDVMc2/abhi-pal.png"
                alt="Dr Abhi Pal" 
                className="rounded-2xl shadow-2xl relative z-10"
              />
              <div className="absolute -bottom-6 -right-6 w-48 h-48 bg-blue-100 rounded-2xl -z-0"></div>
            </div>
            <div>
              <span className="text-blue-600 font-bold tracking-wider uppercase text-sm">A Message from our Principal</span>
              <h2 className="text-3xl lg:text-4xl font-bold text-slate-900 mt-2 mb-6">Welcome to Our Practice</h2>
              <div className="space-y-4 text-slate-600 text-lg leading-relaxed">
                <p>
                  We offer appointments for all our treatments — for emergency as well as routine care. However, access to the practice is by appointment only.
                </p>
                <p>
                  Appointments are necessary because we must prioritise enhanced Infection Control measures to ensure that our practice remains a safe environment. This is for the safety of all patients and staff.
                </p>
                <p>
                  We are taking measures to ensure that your appointments are efficient, and that you are fully protected while in our care. Please continue to stay safe and well.
                </p>
                <div className="pt-4">
                  <p className="font-bold text-slate-900">Dr Abhi Pal</p>
                  <p className="text-sm">Practice Principal</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section className="py-20 bg-slate-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-slate-900">Patient Services</h2>
            <p className="text-slate-600 mt-4 max-w-2xl mx-auto">Explore our range of dental care services designed for your health and comfort.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            <Link to="/treatments" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-blue-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600">
                <Stethoscope className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Specialist Treatments</h3>
              <p className="text-slate-600 mb-4">From dental implants to complex restorative cases, our experienced team provides expert care.</p>
              <span className="text-blue-600 font-bold flex items-center">Learn More <ArrowRight className="ml-2 w-4 h-4" /></span>
            </Link>

            <Link to="/checkup" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-teal-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-600 group-hover:text-white transition-all text-teal-600">
                <Award className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">10-Point Checkup</h3>
              <p className="text-slate-600 mb-4">A comprehensive assessment of your mouth, gums, teeth and overall oral health.</p>
              <span className="text-teal-600 font-bold flex items-center">Discover the process <ArrowRight className="ml-2 w-4 h-4" /></span>
            </Link>

            <Link to="/care" className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all group">
              <div className="bg-indigo-100 w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-all text-indigo-600">
                <ShieldCheck className="w-8 h-8" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">Care Options</h3>
              <p className="text-slate-600 mb-4">Flexible care through NHS, Private treatments or budgeting with Denplan.</p>
              <span className="text-indigo-600 font-bold flex items-center">View options <ArrowRight className="ml-2 w-4 h-4" /></span>
            </Link>
          </div>
        </div>
      </section>

      {/* Call to Action */}
      <section className="py-20 bg-blue-600">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
          <h2 className="text-3xl lg:text-5xl font-bold mb-8 italic">Ready to smile with confidence?</h2>
          <p className="text-xl text-blue-100 mb-10">
            Contact us today to book your initial consultation or routine check-up.
          </p>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <a href="tel:01216878882" className="flex items-center justify-center bg-white text-blue-900 py-4 px-8 rounded-xl font-bold hover:bg-blue-50 transition-colors">
              <Phone className="w-6 h-6 mr-3" /> 0121 687 8882
            </a>
            <a href="mailto:contact@universitydental.co.uk" className="flex items-center justify-center bg-blue-700 text-white border border-blue-500 py-4 px-8 rounded-xl font-bold hover:bg-blue-800 transition-colors">
              <Mail className="w-6 h-6 mr-3" /> Email Us
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default HomePage;
