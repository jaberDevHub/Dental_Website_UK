
import React, { useState, useEffect } from 'react';
import { HashRouter, Routes, Route, Link, useLocation } from 'react-router-dom';
import { 
  Home, MapPin, Calendar, Users, PoundSterling, Menu, X, 
  Phone, Mail, Facebook, ChevronRight, CircleCheck, TriangleAlert, 
  ShieldCheck, Info, Clock, ExternalLink
} from 'lucide-react';

import HomePage from './pages/HomePage';
import LocationPage from './pages/LocationPage';
import AppointmentsPage from './pages/AppointmentsPage';
import TeamPage from './pages/TeamPage';
import FeesPage from './pages/FeesPage';
import CareOptionsPage from './pages/CareOptionsPage';
import TreatmentsPage from './pages/TreatmentsPage';
import QualityPage from './pages/QualityPage';
import CheckupPage from './pages/CheckupPage';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const links = [
    { to: "/", label: "Home", icon: <Home className="w-4 h-4" /> },
    { to: "/location", label: "Location", icon: <MapPin className="w-4 h-4" /> },
    { to: "/appointments", label: "Appointments", icon: <Calendar className="w-4 h-4" /> },
    { to: "/team", label: "Meet the Team", icon: <Users className="w-4 h-4" /> },
    { to: "/fees", label: "Fees", icon: <PoundSterling className="w-4 h-4" /> },
    { to: "/care", label: "Care Options", icon: <ShieldCheck className="w-4 h-4" /> },
    { to: "/treatments", label: "Treatments", icon: <Info className="w-4 h-4" /> },
  ];

  return (
    <nav className="bg-white border-b border-slate-200 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center group">
              <div className="bg-blue-600 p-2 rounded-lg mr-3 group-hover:bg-blue-700 transition-colors">
                <ShieldCheck className="text-white w-8 h-8" />
              </div>
              <div className="hidden sm:block">
                <span className="text-xl font-bold text-blue-900 block leading-tight">University Dental</span>
                <span className="text-xs text-blue-600 block">& Implant Centre</span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1 lg:space-x-4">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                className={`flex items-center px-3 py-2 rounded-md text-sm font-medium transition-all ${
                  location.pathname === link.to
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <span className="mr-1.5">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-slate-400 hover:text-slate-500 hover:bg-slate-100 focus:outline-none"
            >
              {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-b border-slate-200">
          <div className="px-2 pt-2 pb-3 space-y-1">
            {links.map((link) => (
              <Link
                key={link.to}
                to={link.to}
                onClick={() => setIsOpen(false)}
                className={`flex items-center px-3 py-2 rounded-md text-base font-medium ${
                  location.pathname === link.to
                    ? 'text-blue-600 bg-blue-50'
                    : 'text-slate-600 hover:text-blue-600 hover:bg-slate-50'
                }`}
              >
                <span className="mr-3">{link.icon}</span>
                {link.label}
              </Link>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = () => {
  return (
    <footer className="bg-slate-900 text-slate-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          <div>
            <h3 className="text-white font-bold text-lg mb-4">University Dental</h3>
            <p className="text-sm leading-relaxed mb-4">
              Providing high-quality NHS and private dental care since 1991. Dedicated to excellence in restorative and implant dentistry.
            </p>
            <div className="flex space-x-4">
              <a href="https://facebook.com" className="text-slate-400 hover:text-white transition-colors">
                <Facebook className="w-6 h-6" />
              </a>
            </div>
          </div>
          
          <div>
            <h3 className="text-white font-bold text-lg mb-4">Quick Links</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/location" className="hover:text-blue-400 transition-colors">Location & Directions</Link></li>
              <li><Link to="/appointments" className="hover:text-blue-400 transition-colors">Book an Appointment</Link></li>
              <li><Link to="/fees" className="hover:text-blue-400 transition-colors">Private Fee Scale</Link></li>
              <li><Link to="/checkup" className="hover:text-blue-400 transition-colors">Ten-Point Checkup</Link></li>
              <li><Link to="/quality" className="hover:text-blue-400 transition-colors">Quality Assurance</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Patient Information</h3>
            <ul className="space-y-2 text-sm">
              <li><Link to="/treatments" className="hover:text-blue-400 transition-colors">Dental Implants</Link></li>
              <li><Link to="/appointments" className="hover:text-blue-400 transition-colors">Emergency Information</Link></li>
              <li><Link to="/treatments" className="hover:text-blue-400 transition-colors">Oral Hygiene Tips</Link></li>
              <li><a href="https://www.gdc-uk.org/" target="_blank" rel="noopener noreferrer" className="hover:text-blue-400 transition-colors flex items-center">GDC Website <ExternalLink className="w-3 h-3 ml-1" /></a></li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-bold text-lg mb-4">Contact Us</h3>
            <div className="space-y-3 text-sm">
              <p className="flex items-start">
                <MapPin className="w-5 h-5 mr-2 text-blue-500 shrink-0" />
                5 Pritchatts Road, Edgbaston, Birmingham B15 2QU
              </p>
              <p className="flex items-center">
                <Phone className="w-5 h-5 mr-2 text-blue-500 shrink-0" />
                0121 687 8882
              </p>
              <p className="flex items-center">
                <Mail className="w-5 h-5 mr-2 text-blue-500 shrink-0" />
                contact@universitydental.co.uk
              </p>
              <div className="pt-2">
                <p className="font-semibold text-white mb-1">Working Hours:</p>
                <p>Mon - Thu: 9:00 - 17:00</p>
                <p>Fri: 9:00 - 13:00</p>
              </div>
            </div>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-800 text-xs flex flex-col md:flex-row justify-between items-center text-slate-500">
          <p>© 2002-2024 The University Dental and Implant Centre. All rights reserved.</p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <Link to="/" className="hover:text-white">Copyright</Link>
            <Link to="/" className="hover:text-white">Privacy Policy</Link>
            <Link to="/" className="hover:text-white">Accessibility</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

const CookieBanner = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShow(true);
  }, []);

  const accept = () => {
    localStorage.setItem('cookieConsent', 'true');
    setShow(false);
  };

  if (!show) return null;

  return (
    <div className="fixed bottom-0 left-0 right-0 bg-white border-t border-slate-200 shadow-2xl p-4 z-[100]">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-4">
        <p className="text-sm text-slate-600 text-center md:text-left">
          This website uses cookies. By continuing to browse the website you are agreeing to our use of cookies.
          <Link to="/" className="text-blue-600 hover:underline ml-1">Find out more here.</Link>
        </p>
        <button
          onClick={accept}
          className="bg-blue-600 text-white px-6 py-2 rounded-full text-sm font-semibold hover:bg-blue-700 transition-colors"
        >
          I Agree
        </button>
      </div>
    </div>
  );
};

const ScrollToTop = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
};

const App: React.FC = () => {
  return (
    <HashRouter>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        <Navbar />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/location" element={<LocationPage />} />
            <Route path="/appointments" element={<AppointmentsPage />} />
            <Route path="/team" element={<TeamPage />} />
            <Route path="/fees" element={<FeesPage />} />
            <Route path="/care" element={<CareOptionsPage />} />
            <Route path="/treatments" element={<TreatmentsPage />} />
            <Route path="/quality" element={<QualityPage />} />
            <Route path="/checkup" element={<CheckupPage />} />
          </Routes>
        </main>
        <Footer />
        <CookieBanner />
      </div>
    </HashRouter>
  );
};

export default App;
