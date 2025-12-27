
import React from 'react';
import { FEES } from '../constants';
import { Link } from 'react-router-dom';
import { Info, CircleHelp, FileText, CircleCheck, ChevronRight } from 'lucide-react';

const FeesPage: React.FC = () => {
  const categories = Array.from(new Set(FEES.map(f => f.category)));

  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Private Fee Scale</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            The fees for private dental care stated here are correct with effect from October 2025. Please check with the Practice for the most current rates. These are only a sample of treatments we carry out.
          </p>
          <div className="mt-6 flex items-center p-4 bg-blue-50 text-blue-900 rounded-xl border border-blue-100">
            <Info className="w-6 h-6 mr-3 shrink-0" />
            <p className="text-sm font-medium">A full written estimate for your treatment will be given at your initial consultation.</p>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2">
            <div className="bg-white rounded-3xl shadow-sm border border-slate-200 overflow-hidden">
              <table className="min-w-full divide-y divide-slate-200">
                <thead className="bg-slate-50">
                  <tr>
                    <th scope="col" className="px-6 py-4 text-left text-xs font-bold text-slate-500 uppercase tracking-wider">Description</th>
                    <th scope="col" className="px-6 py-4 text-right text-xs font-bold text-slate-500 uppercase tracking-wider">Fees</th>
                  </tr>
                </thead>
                <tbody className="bg-white divide-y divide-slate-200">
                  {categories.map(category => (
                    <React.Fragment key={category}>
                      <tr className="bg-slate-50/50">
                        <td colSpan={2} className="px-6 py-3 text-sm font-bold text-blue-600 uppercase tracking-wide">{category}</td>
                      </tr>
                      {FEES.filter(f => f.category === category).map((fee, idx) => (
                        <tr key={idx} className="hover:bg-blue-50/30 transition-colors">
                          <td className="px-6 py-4 text-sm text-slate-700">{fee.description}</td>
                          <td className="px-6 py-4 text-right text-sm font-bold text-slate-900">{fee.price}</td>
                        </tr>
                      ))}
                    </React.Fragment>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-4">Why choose Private Care?</h2>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 text-blue-400 mr-3 mt-1 shrink-0" />
                  <span className="text-blue-100 text-sm">Enhanced clinical time for predictable success</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 text-blue-400 mr-3 mt-1 shrink-0" />
                  <span className="text-blue-100 text-sm">Premium quality materials and techniques</span>
                </li>
                <li className="flex items-start">
                  <CircleCheck className="w-5 h-5 text-blue-400 mr-3 mt-1 shrink-0" />
                  <span className="text-blue-100 text-sm">Detailed consultation time to discuss all options</span>
                </li>
              </ul>
              <div className="mt-8">
                <Link to="/care" className="block w-full bg-blue-600 hover:bg-blue-500 py-3 rounded-xl text-center font-bold transition-all border border-blue-500">
                  More About Care Options
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm">
              <h2 className="text-xl font-bold text-slate-900 mb-4 flex items-center">
                <CircleHelp className="w-5 h-5 mr-2 text-blue-600" /> NHS Fees
              </h2>
              <p className="text-sm text-slate-600 mb-6 leading-relaxed">
                Registered patients who wish to access NHS Dental care can make an appointment for a routine examination. NHS fees are set nationally by the government.
              </p>
              <Link to="/care" className="text-blue-600 font-bold text-sm flex items-center hover:underline">
                View NHS exemptions & bands <ChevronRight className="w-4 h-4 ml-1" />
              </Link>
            </div>

            <div className="bg-teal-50 p-8 rounded-3xl border border-teal-100 shadow-sm">
              <div className="flex items-center mb-4">
                <div className="bg-teal-600 p-2 rounded-lg text-white mr-3">
                  <FileText className="w-6 h-6" />
                </div>
                <h2 className="text-xl font-bold text-teal-900 uppercase tracking-tighter">Denplan</h2>
              </div>
              <p className="text-sm text-teal-800 mb-6 leading-relaxed">
                Budget for your dental health with convenient monthly payments.
              </p>
              <Link to="/care" className="block w-full bg-teal-600 hover:bg-teal-700 text-white py-3 rounded-xl text-center font-bold transition-all shadow-lg shadow-teal-900/10">
                Denplan Details
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeesPage;
