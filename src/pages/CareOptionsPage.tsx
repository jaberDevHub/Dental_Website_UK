
import React from 'react';
import { Shield, CreditCard, Heart, Check, Info, TriangleAlert, ArrowRight } from 'lucide-react';
import { DENPLAN_CARE_RATES } from '../constants';
import { Link } from 'react-router-dom';

const CareOptionsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Care Options</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We offer a range of options to help you access the high-quality dental care you need.
          </p>
        </div>

        <div className="space-y-24">
          {/* NHS Section */}
          <section id="nhs" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="bg-blue-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Shield className="w-10 h-10 text-blue-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">NHS Dental Care</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Registered patients can access NHS care for routine examinations and treatments necessary to secure oral health.
                </p>
                <p className="font-semibold text-slate-900">Patients who do not need to pay for NHS treatment:</p>
                <ul className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {[
                    "Under 19 years of age",
                    "Valid HC2 certificate",
                    "Receiving social security benefits",
                    "Pregnant or recent mothers"
                  ].map(item => (
                    <li key={item} className="flex items-center text-sm p-3 bg-slate-50 rounded-xl border border-slate-100">
                      <Check className="w-4 h-4 text-teal-600 mr-2 shrink-0" /> {item}
                    </li>
                  ))}
                </ul>
                <div className="bg-yellow-50 p-4 rounded-xl border border-yellow-100 flex items-start mt-4">
                  <TriangleAlert className="w-5 h-5 text-yellow-600 mr-3 mt-1 shrink-0" />
                  <p className="text-sm text-yellow-800">
                    NHS Dentistry only provides required clinical care for oral health. Cosmetic treatments may only be available privately.
                  </p>
                </div>
              </div>
            </div>
            <div className="bg-blue-600 rounded-3xl p-10 text-white shadow-xl shadow-blue-200">
              <h3 className="text-2xl font-bold mb-6">Join as an NHS Patient</h3>
              <p className="mb-8 text-blue-100 leading-relaxed">Contact our reception to inquire about current NHS availability and registration.</p>
              <div className="space-y-4">
                <a href="tel:01216878882" className="flex items-center justify-center bg-white text-blue-600 font-bold py-4 rounded-xl hover:bg-blue-50 transition-all">
                  Call 0121 687 8882
                </a>
              </div>
            </div>
          </section>

          {/* Private Care Section */}
          <section id="private" className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center lg:flex-row-reverse">
            <div className="lg:order-2">
              <div className="bg-indigo-100 w-16 h-16 rounded-2xl flex items-center justify-center mb-6">
                <Heart className="w-10 h-10 text-indigo-600" />
              </div>
              <h2 className="text-3xl font-bold text-slate-900 mb-6">Private Dental Care</h2>
              <div className="space-y-4 text-slate-600 leading-relaxed">
                <p>
                  Obtain appropriate clinical time, quality materials, and dedicated consultations.
                </p>
                <ul className="space-y-3">
                  {[
                    "Appropriate time for complex root treatments and gum care",
                    "Access to high-end cosmetic options like Invisalign and Implants",
                    "Choice of premium materials for bridges and crowns",
                    "Extended consultation sessions to discuss goals"
                  ].map(item => (
                    <li key={item} className="flex items-start">
                      <Check className="w-5 h-5 text-indigo-600 mr-3 mt-1" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Link to="/fees" className="inline-flex items-center text-indigo-600 font-bold hover:underline mt-4">
                  View full private fee scale <ArrowRight className="w-4 h-4 ml-1" />
                </Link>
              </div>
            </div>
            <div className="lg:order-1 bg-slate-900 rounded-3xl overflow-hidden shadow-2xl">
              <img src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&w=2070&auto=format&fit=crop" alt="Clinical excellence" className="w-full h-64 object-cover opacity-80" />
              <div className="p-10 text-white">
                <h3 className="text-xl font-bold mb-4">Invest in your Smile</h3>
                <p className="text-slate-400 text-sm mb-0">Private care allows us to spend the time necessary to achieve the most predictable and aesthetic results for your smile.</p>
              </div>
            </div>
          </section>

          {/* Denplan Section */}
          <section id="denplan" className="bg-teal-50 rounded-[3rem] p-10 lg:p-16 border border-teal-100">
            <div className="flex flex-col lg:flex-row gap-12">
              <div className="flex-1">
                <div className="flex items-center mb-8">
                   <div className="bg-teal-600 p-3 rounded-2xl text-white mr-4 shadow-lg shadow-teal-900/20">
                    <CreditCard className="w-8 h-8" />
                  </div>
                  <h2 className="text-3xl font-extrabold text-teal-900 uppercase tracking-tighter">Denplan</h2>
                </div>
                <p className="text-lg text-teal-800 mb-8 leading-relaxed">
                  Denplan is an excellent way of budgeting for dental care with monthly plans that give specific benefits.
                </p>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                  <div className="bg-white p-8 rounded-3xl border border-teal-200">
                    <h3 className="text-xl font-bold text-teal-900 mb-4">Denplan Care</h3>
                    <p className="text-sm text-teal-700 mb-6">Comprehensive cover including routine check-ups, hygiene, fillings, and emergency cover.</p>
                    <ul className="space-y-2 text-xs text-teal-800">
                      <li className="flex items-center"><Check className="w-3 h-3 mr-2" /> Routine Check-ups & X-Rays</li>
                      <li className="flex items-center"><Check className="w-3 h-3 mr-2" /> Fillings & Root Fillings</li>
                      <li className="flex items-center"><Check className="w-3 h-3 mr-2" /> Accident & Trauma Cover</li>
                      <li className="flex items-center"><Check className="w-3 h-3 mr-2" /> Emergency Cover Overseas</li>
                    </ul>
                  </div>
                  <div className="bg-white p-8 rounded-3xl border border-teal-200">
                    <h3 className="text-xl font-bold text-teal-900 mb-4">Denplan Essentials</h3>
                    <p className="text-sm text-teal-700 mb-6">Maintenance cover for £16.49/month focusing on routine exams and hygiene.</p>
                    <ul className="space-y-2 text-xs text-teal-800">
                      <li className="flex items-center"><Check className="w-3 h-3 mr-2" /> Routine Examinations</li>
                      <li className="flex items-center"><Check className="w-3 h-3 mr-2" /> Professional Cleanings</li>
                      <li className="flex items-center"><Check className="w-3 h-3 mr-2" /> 10% Discount on Fees</li>
                      <li className="flex items-center"><Check className="w-3 h-3 mr-2" /> UK & Overseas Emergency</li>
                    </ul>
                  </div>
                </div>
              </div>
              
              <div className="lg:w-80 bg-white rounded-3xl shadow-sm border border-teal-200 p-8">
                <h4 className="font-bold text-teal-900 mb-6 text-center uppercase tracking-widest text-xs">Monthly Care Rates</h4>
                <div className="space-y-4">
                  {DENPLAN_CARE_RATES.map(rate => (
                    <div key={rate.band} className="flex justify-between items-center py-2 border-b border-teal-50 last:border-0">
                      <span className="text-teal-700 font-medium">{rate.band}</span>
                      <span className="font-bold text-teal-900">{rate.rate}</span>
                    </div>
                  ))}
                </div>
                <div className="mt-8 text-[10px] text-teal-600 leading-tight italic">
                  *The only extra charges are making and materials charges for providing crowns, dentures, and bridges.
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default CareOptionsPage;
