
import React from 'react';
import { ShieldCheck, Award, Target, Users, Search, ClipboardList, CircleCheck } from 'lucide-react';

const QualityPage: React.FC = () => {
  const standards = [
    { title: "Evidence-Based Care", icon: <Target />, desc: "Consistency of dental care by providing treatment based on the best available research evidence." },
    { title: "Professional Development", icon: <Users />, desc: "All staff participate in Continuing Professional Development to stay at the forefront of dentistry." },
    { title: "Infection Control", icon: <ShieldCheck />, desc: "Meeting the Department of Health’s Essential Requirements for Decontamination in HTM 01-15." },
    { title: "Health & Safety", icon: <Award />, desc: "Robust procedures ensure the safety of both patients and staff at all times." },
    { title: "Radiation Safety", icon: <Search />, desc: "Safety and quality assurance in the use of Ionising Radiation in accordance with national guidelines." },
    { title: "Clinical Audit", icon: <ClipboardList />, desc: "Periodic reviews of procedures and protocols through clinical audit to maintain standards." }
  ];

  return (
    <div className="bg-white min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Quality Assurance</h1>
          <p className="text-lg text-slate-600 leading-relaxed">
            The University Dental and Implant Centre is committed to the highest standards. We have rigorous Quality Assurance Systems and Policies in place.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          {standards.map((s, idx) => (
            <div key={idx} className="relative group">
              <div className="bg-slate-50 p-8 rounded-3xl border border-slate-100 transition-all hover:bg-white hover:border-blue-200 hover:shadow-xl group">
                <div className="text-blue-600 mb-6">
                  {React.cloneElement(s.icon as React.ReactElement, { className: "w-10 h-10" })}
                </div>
                <h3 className="text-xl font-bold text-slate-900 mb-3">{s.title}</h3>
                <p className="text-slate-600 text-sm leading-relaxed">{s.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mt-20 flex flex-col lg:flex-row gap-12 items-center bg-slate-900 rounded-[3rem] p-10 lg:p-16 text-white">
          <div className="lg:w-1/2">
             <h2 className="text-3xl font-bold mb-6">Patient Centered Care</h2>
             <div className="space-y-4">
               <div className="flex items-start">
                  <CircleCheck className="w-6 h-6 text-teal-400 mr-4 mt-1 shrink-0" />
                  <p className="text-slate-300">Patients are invited to feedback their experience to us to help us improve.</p>
               </div>
               <div className="flex items-start">
                  <CircleCheck className="w-6 h-6 text-teal-400 mr-4 mt-1 shrink-0" />
                  <p className="text-slate-300">The practice meets the standards for registration with the Care Quality Commission.</p>
               </div>
               <div className="flex items-start">
                  <CircleCheck className="w-6 h-6 text-teal-400 mr-4 mt-1 shrink-0" />
                  <p className="text-slate-300">Transparent estimation and consent processes for all clinical work.</p>
               </div>
             </div>
          </div>
          <div className="lg:w-1/2 flex justify-center">
            <div className="bg-blue-600 p-8 rounded-3xl shadow-2xl text-center">
              <div className="text-4xl font-extrabold mb-2 uppercase tracking-tighter">CQC</div>
              <div className="text-sm font-bold uppercase tracking-widest text-blue-100">Registered Provider</div>
              <div className="mt-4 text-[10px] text-blue-200 uppercase tracking-widest">Excellence in Care</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default QualityPage;
