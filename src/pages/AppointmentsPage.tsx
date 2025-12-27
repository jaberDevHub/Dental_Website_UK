
import React from 'react';
import { Phone, Mail, Clock, ShieldCheck, CircleAlert, CalendarCheck } from 'lucide-react';

const AppointmentsPage: React.FC = () => {
  return (
    <div className="bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="max-w-3xl">
          <h1 className="text-4xl font-bold text-slate-900 mb-6">Appointments</h1>
          <p className="text-lg text-slate-600 leading-relaxed mb-8">
            We are currently seeing patients by appointment only. We offer appointments for all our treatments — for emergency as well as routine care.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          <div className="space-y-8">
            <div className="bg-slate-50 p-8 rounded-3xl border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center">
                <CalendarCheck className="w-6 h-6 mr-3 text-blue-600" /> 
                How to Arrange Care
              </h2>
              <p className="text-slate-600 mb-8">
                To arrange for an appointment, please contact us during normal working hours. We will arrange care while ensuring your safety and the safety of those working at the practice.
              </p>
              
              <div className="space-y-4">
                <a 
                  href="tel:01216878882" 
                  className="flex items-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
                >
                  <div className="bg-blue-100 p-3 rounded-xl mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600">
                    <Phone className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Call Practice</p>
                    <p className="text-xl font-bold text-slate-900">0121 687 8882</p>
                  </div>
                </a>

                <a 
                  href="mailto:contact@universitydental.co.uk" 
                  className="flex items-center p-6 bg-white rounded-2xl border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all group"
                >
                  <div className="bg-blue-100 p-3 rounded-xl mr-4 group-hover:bg-blue-600 group-hover:text-white transition-all text-blue-600">
                    <Mail className="w-6 h-6" />
                  </div>
                  <div>
                    <p className="text-sm text-slate-500 uppercase font-bold tracking-wider">Email Us</p>
                    <p className="text-lg font-bold text-slate-900">contact@universitydental.co.uk</p>
                  </div>
                </a>
              </div>
            </div>

            <div className="bg-blue-900 text-white p-8 rounded-3xl shadow-xl">
              <h2 className="text-2xl font-bold mb-6 flex items-center">
                <Clock className="w-6 h-6 mr-3 text-blue-400" /> 
                Normal Opening Hours
              </h2>
              <div className="space-y-4">
                <div className="flex justify-between pb-3 border-b border-blue-800">
                  <span>Mondays to Thursdays</span>
                  <span className="font-bold">9:00am to 5:00pm</span>
                </div>
                <div className="flex justify-between pt-3">
                  <span>Fridays</span>
                  <span className="font-bold">9:00am to 1:00pm</span>
                </div>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-red-50 p-8 rounded-3xl border border-red-100">
              <h2 className="text-2xl font-bold text-red-900 mb-6 flex items-center">
                <ShieldCheck className="w-6 h-6 mr-3 text-red-600" /> 
                Our Safety Priority
              </h2>
              <div className="space-y-4 text-red-800 leading-relaxed">
                <p>
                  We must prioritise enhanced Infection Control measures to ensure that our practice remains a safe environment for all patients and staff.
                </p>
                <ul className="space-y-3">
                  <li className="flex items-start">
                    <CircleAlert className="w-5 h-5 mr-3 mt-1 shrink-0" />
                    <span>No walk-ins permitted. Entry by appointment only.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleAlert className="w-5 h-5 mr-3 mt-1 shrink-0" />
                    <span>Limited number of patients in the practice at any one time.</span>
                  </li>
                  <li className="flex items-start">
                    <CircleAlert className="w-5 h-5 mr-3 mt-1 shrink-0" />
                    <span>Strict adherence to social distancing and hygiene protocols.</span>
                  </li>
                </ul>
              </div>
            </div>

            <div className="bg-blue-50 p-8 rounded-3xl border border-blue-100">
              <h2 className="text-2xl font-bold text-blue-900 mb-4 italic">Dental Emergency?</h2>
              <p className="text-blue-800 leading-relaxed">
                If you are experiencing severe dental pain, swelling, or trauma, please contact us immediately during working hours. For out-of-hours emergencies, please listen to our recorded telephone message for guidance on how to access emergency services.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AppointmentsPage;
