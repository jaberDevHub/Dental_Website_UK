
import React from 'react';
// Added missing Link import
import { Link } from 'react-router-dom';
// Added missing ChevronRight import
import { MapPin, Bus, Train, Car, Info, Clock, ExternalLink, ChevronRight } from 'lucide-react';

const LocationPage: React.FC = () => {
  return (
    <div className="bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Location & Directions</h1>
          <p className="text-slate-600 text-lg">We are situated in a state-of-the-art facility near the University of Birmingham.</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          <div className="lg:col-span-2 space-y-8">
            {/* Map Placeholder */}
            <div className="bg-white rounded-2xl shadow-sm border border-slate-200 overflow-hidden h-[400px] relative flex items-center justify-center">
              <img 
                src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&w=2066&auto=format&fit=crop" 
                alt="Map View" 
                className="w-full h-full object-cover opacity-50"
              />
              <div className="absolute bg-white p-6 rounded-xl shadow-xl max-w-sm border border-slate-100">
                <h3 className="font-bold text-slate-900 mb-2">Our Address</h3>
                <p className="text-slate-600 text-sm mb-4">5 Pritchatts Road, Edgbaston, Birmingham B15 2QU</p>
                <a 
                  href="https://www.google.com/maps/search/?api=1&query=5+Pritchatts+Road+Edgbaston+Birmingham+B15+2QU" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="inline-flex items-center text-blue-600 font-bold hover:underline"
                >
                  View on Google Maps <ExternalLink className="w-4 h-4 ml-1.5" />
                </a>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h2 className="text-2xl font-bold text-slate-900 mb-6">How to Find Us</h2>
              <div className="space-y-6 text-slate-600 leading-relaxed">
                <p>
                  We are situated in a purpose made, state of the art primary health care facility on Pritchatts Road, Edgbaston -- only a short walk away from the main University of Birmingham campus, Queen Elizabeth Hospital, King Edwards Schools, University Train Station, the Edgbaston Nuffield Hospital and Harborne High Street.
                </p>
                <div className="bg-blue-50 border-l-4 border-blue-600 p-4 rounded-r-lg">
                  <p className="flex items-center font-semibold text-blue-900 mb-1">
                    <Info className="w-5 h-5 mr-2" /> Accessibility
                  </p>
                  <p className="text-sm">We are situated up the stairs on the first floor. A lift is provided for patient comfort.</p>
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <Car className="text-blue-600 w-10 h-10 mb-4" />
                <h3 className="font-bold text-lg mb-3">By Car</h3>
                <p className="text-sm text-slate-600">
                  Parking is provided at the rear in Oakley Court (access via small road between numbers 7 & 9). Front parking is for disabled/doctors until 5:30pm.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <Bus className="text-blue-600 w-10 h-10 mb-4" />
                <h3 className="font-bold text-lg mb-3">By Bus</h3>
                <p className="text-sm text-slate-600">
                  Bus numbers 48, X20, X21, and X22 serve the Practice. There is a bus stop next to the building.
                </p>
              </div>
              <div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200">
                <Train className="text-blue-600 w-10 h-10 mb-4" />
                <h3 className="font-bold text-lg mb-3">By Train</h3>
                <p className="text-sm text-slate-600">
                  A 5-minute walk from University Train Station (Lichfield to Redditch Line). Frequent 10-minute journeys to Birmingham New Street.
                </p>
              </div>
            </div>
          </div>

          <div className="space-y-8">
            <div className="bg-blue-900 text-white p-8 rounded-2xl shadow-xl">
              <h3 className="text-xl font-bold mb-6">Working Hours</h3>
              <div className="space-y-4">
                <div className="flex justify-between items-center border-b border-blue-800 pb-2">
                  <span>Mon - Thu</span>
                  <span className="font-semibold">9:00 - 17:00</span>
                </div>
                <div className="flex justify-between items-center border-b border-blue-800 pb-2">
                  <span>Friday</span>
                  <span className="font-semibold">9:00 - 13:00</span>
                </div>
                <div className="flex justify-between items-center text-blue-300">
                  <span>Sat - Sun</span>
                  <span className="font-semibold">Closed</span>
                </div>
              </div>
              <div className="mt-8 pt-8 border-t border-blue-800">
                <p className="text-sm text-blue-200 mb-4 italic">Note: Appointments are necessary. No walk-ins permitted.</p>
                <Link to="/appointments" className="block w-full bg-white text-blue-900 text-center py-3 rounded-xl font-bold hover:bg-blue-50 transition-colors">
                  Make Appointment
                </Link>
              </div>
            </div>

            <div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
              <h3 className="font-bold text-slate-900 mb-4">Nearby Landmarks</h3>
              <ul className="space-y-3 text-sm text-slate-600">
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-500 mr-2" /> University of Birmingham</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-500 mr-2" /> Queen Elizabeth Hospital</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-500 mr-2" /> Edgbaston Nuffield Hospital</li>
                <li className="flex items-center"><ChevronRight className="w-4 h-4 text-blue-500 mr-2" /> Harborne High Street</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default LocationPage;
