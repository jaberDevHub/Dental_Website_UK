
import React from 'react';
import { TEAM } from '../constants';
import { ShieldCheck, Info } from 'lucide-react';

const TeamPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Meet the Team</h1>
          <p className="text-slate-600 text-lg max-w-3xl mx-auto">
            All of us at the Practice are looking forward to seeing you here! Our dedicated professionals are committed to the highest standards of dental care.
          </p>
        </div>

        {/* Clinicians Section */}
        <div className="space-y-12">
          <h2 className="text-3xl font-bold text-slate-900 border-b pb-4">Our Clinicians</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {TEAM.map((member) => (
              <div key={member.name} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all border border-slate-200 flex flex-col sm:flex-row">
                <div className="sm:w-1/3">
                  <img src={member.imageUrl} alt={member.name} className="w-full h-full object-cover" />
                </div>
                <div className="p-8 sm:w-2/3">
                  <h3 className="text-2xl font-bold text-slate-900 mb-1">{member.name}</h3>
                  <p className="text-blue-600 font-medium mb-3">{member.role}</p>
                  <p className="text-xs text-slate-400 mb-4 font-mono">GDC: {member.gdcNumber}</p>
                  <div className="text-sm text-slate-600 space-y-3">
                    <p className="italic font-medium">{member.qualifications}</p>
                    <p>{member.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Support Staff Section */}
        <div className="mt-20 space-y-12">
          <h2 className="text-3xl font-bold text-slate-900 border-b pb-4">Our Support Team</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
            {[
              { name: "Melissa Fieldhouse", role: "Practice Manager", gdc: "150190", desc: "Qualified in 1997, Melissa has been part of the team since 1998. She holds qualifications in Dental Radiography and Practice Management." },
              { name: "Yvonne Steward", role: "Hygienist", gdc: "DH2259", desc: "Trained at Guy’s Hospital London, qualifying in 1982. Yvonne provides essential oral hygiene services." },
              { name: "Suzanne Watkin", role: "Hygienist", gdc: "212941", desc: "Suzanne qualified as a dental hygienist from Bristol University in 2011." },
              { name: "Melanie Long", role: "Dental Nurse & Receptionist", gdc: "150195", desc: "With over 26 years at the practice, Melanie is a cornerstone of our patient care." },
              { name: "Geraldine Power", role: "Dental Nurse", gdc: "125397", desc: "Joined in 1992. Trained in dental implantology and sedation, known for her caring approach." },
              { name: "Josie Bown", role: "Dental Nurse", gdc: "150199", desc: "Expert in dental implantology nursing, working closely with Dr Pal on complex cases." }
            ].map((staff) => (
              <div key={staff.name} className="bg-white p-8 rounded-3xl border border-slate-200 shadow-sm hover:shadow-md transition-all">
                <h3 className="text-xl font-bold text-slate-900 mb-1">{staff.name}</h3>
                <p className="text-blue-600 text-sm font-medium mb-2">{staff.role}</p>
                <p className="text-xs text-slate-400 mb-4">GDC: {staff.gdc}</p>
                <p className="text-sm text-slate-600 leading-relaxed">{staff.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* GDC Section */}
        <div className="mt-20 bg-blue-50 rounded-3xl p-8 border border-blue-100">
          <div className="flex flex-col md:flex-row items-center gap-8">
            <div className="bg-white p-6 rounded-2xl shadow-sm">
              <ShieldCheck className="w-16 h-16 text-blue-600" />
            </div>
            <div>
              <h2 className="text-2xl font-bold text-slate-900 mb-4">Maintaining Standards</h2>
              <p className="text-slate-600 leading-relaxed">
                Our dentists and hygienists adhere to the laws governing the dental profession as laid down by the General Dental Council (GDC). We are committed to maintaining and improving our standards through postgraduate training and qualifications.
              </p>
              <div className="mt-6 flex flex-wrap gap-4">
                <a href="https://www.gdc-uk.org/" target="_blank" rel="noopener noreferrer" className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-bold hover:bg-blue-700 transition-all">
                  Visit GDC Website
                </a>
                <span className="text-slate-500 text-sm flex items-center">
                  <Info className="w-4 h-4 mr-2" /> 37 Wimpole Street, London, W1G 8DQ
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TeamPage;
