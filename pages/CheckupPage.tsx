
import React from 'react';
import { Link } from 'react-router-dom';
import { CircleCheck, Search, Info, Calendar, ChevronRight, CircleAlert } from 'lucide-react';

const CheckupPage: React.FC = () => {
  const points = [
    "Address any specific concerns about your teeth or appearance.",
    "Review general health impact on oral health or dental treatment.",
    "Check jaw joints for signs of disease that may affect eating/chewing.",
    "Perform a comprehensive oral cancer screening inside your mouth.",
    "Examine tooth position and bite for irregularities.",
    "Thorough check of gums for signs of periodontal (gum) disease.",
    "Identify missing areas in cleaning routines to help maintenance.",
    "Inspect for signs of tooth decay across all surfaces.",
    "Check for signs of wear, erosion, or micro-cracks.",
    "Evaluate existing fillings, crowns, or bridges for leaks or cracks."
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <span className="text-blue-600 font-bold uppercase tracking-widest text-sm">New Patients</span>
          <h1 className="text-4xl lg:text-5xl font-extrabold text-slate-900 mt-2 mb-6">Our Ten-Point Dental Check-Up</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            We believe in offering a comprehensive assessment of your mouth when you come to see us. This signature protocol ensures nothing is overlooked.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 mb-20">
          <div className="bg-white rounded-3xl p-8 lg:p-12 shadow-sm border border-slate-200">
            <h2 className="text-2xl font-bold text-slate-900 mb-8">What We Assess:</h2>
            <div className="space-y-4">
              {points.map((point, idx) => (
                <div key={idx} className="flex items-start group">
                  <div className="bg-blue-50 text-blue-600 rounded-full p-1.5 mr-4 mt-0.5 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    <CircleCheck className="w-5 h-5 shrink-0" />
                  </div>
                  <p className="text-slate-700 leading-relaxed"><span className="font-bold text-slate-900 mr-2">{idx + 1}.</span> {point}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-900 text-white rounded-3xl p-8 lg:p-12 shadow-xl relative overflow-hidden">
               <div className="absolute top-0 right-0 p-8 opacity-10">
                 <Search className="w-48 h-48" />
               </div>
               <h2 className="text-2xl font-bold mb-6 relative z-10">X-Ray Diagnostics</h2>
               <p className="text-blue-100 mb-6 relative z-10">In addition to the visual check-up, we may take X-rays to ensure complete diagnostic accuracy:</p>
               <ul className="space-y-4 relative z-10">
                 {[
                   "Decay in hidden areas between teeth",
                   "Root health and underlying bone support",
                   "Position of erupting or wisdom teeth",
                   "Other conditions benefiting from imaging"
                 ].map(item => (
                   <li key={item} className="flex items-center text-sm">
                     <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mr-3 shrink-0"></div> {item}
                   </li>
                 ))}
               </ul>
               <p className="mt-8 text-xs text-blue-300 italic">
                 X-rays are taken in accordance with guidelines laid down by the Faculty of General Dental Practitioners.
               </p>
            </div>

            <div className="bg-teal-50 border border-teal-100 rounded-3xl p-8 shadow-sm">
              <h2 className="text-xl font-bold text-teal-900 mb-6">Post-Examination Report</h2>
              <div className="space-y-4 text-teal-800 text-sm">
                <p className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-teal-600" /> Advice on any conditions found</p>
                <p className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-teal-600" /> Detailed treatment options available</p>
                <p className="flex items-center font-bold"><ChevronRight className="w-4 h-4 mr-2 text-teal-600" /> Estimated costs in writing</p>
                <p className="flex items-center"><ChevronRight className="w-4 h-4 mr-2 text-teal-600" /> Customized oral hygiene actions</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-10 rounded-[3rem] border border-slate-200 shadow-sm text-center">
          <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6">
            <Calendar className="w-8 h-8 text-blue-600" />
          </div>
          <h2 className="text-3xl font-bold text-slate-900 mb-6">Experience the Difference</h2>
          <p className="text-slate-600 mb-10 max-w-xl mx-auto">
            Book your Ten-Point Dental Checkup today and take the first step towards a lifetime of healthy smiles.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link to="/appointments" className="bg-blue-600 text-white px-8 py-4 rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-900/10">
              Schedule Now
            </Link>
            <Link to="/fees" className="bg-white text-slate-900 border border-slate-300 px-8 py-4 rounded-xl font-bold hover:bg-slate-50 transition-all">
              View Private Fees
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckupPage;
