
import React from 'react';
import { 
  Sparkles, Shield, Eye, Droplet, Layers, Search, 
  Smile, Activity, Stethoscope, ChevronRight, CircleCheck
} from 'lucide-react';

const TreatmentsPage: React.FC = () => {
  const treatments = [
    { title: "Cosmetic Dentistry", icon: <Sparkles />, desc: "Transform your smile with advanced aesthetic procedures." },
    { title: "Invisalign", icon: <Layers />, desc: "Straighten your teeth discreetly with clear, removable aligners." },
    { title: "Dental Implants", icon: <Smile />, desc: "The gold standard for replacing missing teeth with natural-looking results." },
    { title: "Crowns & Bridges", icon: <Shield />, desc: "Restoring damaged teeth or filling gaps with high-quality porcelain." },
    { title: "White Fillings", icon: <Droplet />, desc: "Aesthetic, mercury-free restorations that blend perfectly with your teeth." },
    { title: "Tooth Whitening", icon: <Activity />, desc: "Safe and effective brightening for a radiant, healthy smile." },
    { title: "Root Canal Treatment", icon: <Search />, desc: "Precise care to save infected or damaged natural teeth." },
    { title: "Gum Disease & Hygiene", icon: <Stethoscope />, desc: "Maintaining the foundation of your oral health with expert cleanings." },
    { title: "Dental Anxiety care", icon: <Eye />, desc: "Gentle approaches for patients with dental phobias." }
  ];

  return (
    <div className="bg-slate-50 min-h-screen py-16">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Treatments We Provide</h1>
          <p className="text-lg text-slate-600 max-w-2xl mx-auto">
            We pride ourselves on the range and quality of dental care that we provide at the University Dental and Implant Centre.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
          {treatments.map((t, idx) => (
            <div key={idx} className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200 hover:shadow-xl transition-all group cursor-default">
              <div className="bg-blue-50 w-16 h-16 rounded-2xl flex items-center justify-center mb-6 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-all">
                {React.cloneElement(t.icon as React.ReactElement, { className: "w-8 h-8" })}
              </div>
              <h3 className="text-xl font-bold text-slate-900 mb-3">{t.title}</h3>
              <p className="text-slate-600 text-sm leading-relaxed mb-6">{t.desc}</p>
              <div className="flex items-center text-blue-600 font-bold text-xs uppercase tracking-widest">
                Professional Care <ChevronRight className="w-4 h-4 ml-1" />
              </div>
            </div>
          ))}
        </div>

        <div className="bg-blue-900 text-white rounded-[3rem] p-10 lg:p-20 overflow-hidden relative">
          <div className="absolute top-0 right-0 p-10 opacity-10">
            <Smile className="w-64 h-64" />
          </div>
          <div className="relative z-10 max-w-2xl">
            <h2 className="text-3xl font-bold mb-6">Patient Post-Surgery Support</h2>
            <p className="text-blue-100 mb-8 leading-relaxed italic">
              "We provide comprehensive instructions to all our patients following dental surgery or extractions to ensure a smooth and safe recovery."
            </p>
            <ul className="space-y-4">
              {[
                "Detailed home-care guidance",
                "Direct contact for post-op concerns",
                "Advanced infection control following all procedures"
              ].map(item => (
                <li key={item} className="flex items-center text-sm">
                  <CircleCheck className="w-5 h-5 text-blue-400 mr-3" /> {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TreatmentsPage;
