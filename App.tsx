
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { translations } from './translations';
import { Language } from './types';
import { Menu, X, Globe, Phone, Mail, MapPin, Calendar, Clock, Image as ImageIcon } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const Header = ({ lang, setLang }: { lang: Language, setLang: (l: Language) => void }) => {
  const [isOpen, setIsOpen] = useState(false);
  const t = translations[lang];
  const location = useLocation();

  const toggleLang = () => {
    setLang(lang === 'am' ? 'en' : 'am');
  };

  const navItems = [
    { name: t.nav.home, path: '/' },
    { name: t.nav.about, path: '/about' },
    { name: t.nav.services, path: '/services' },
    { name: t.nav.gallery, path: '/gallery' },
    { name: t.nav.contact, path: '/contact' },
  ];

  return (
    <nav className="bg-white shadow-md sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-20">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3">
              <div className="w-12 h-12 bg-blue-600 rounded-full flex items-center justify-center text-white font-bold text-xl border-2 border-yellow-400">
                W
              </div>
              <span className="hidden md:block font-bold text-lg text-blue-800">
                {lang === 'am' ? 'ወሎ ሰፈር ቤተክርስቲያን' : 'Wolo Sefer Church'}
              </span>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-6">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`${
                  location.pathname === item.path ? 'text-blue-600 border-b-2 border-blue-600' : 'text-gray-600 hover:text-blue-600'
                } px-1 py-2 text-sm font-medium transition-colors`}
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={toggleLang}
              className="flex items-center gap-1 bg-yellow-50 text-blue-700 px-3 py-1.5 rounded-full border border-yellow-200 hover:bg-yellow-100 transition-colors font-medium text-sm"
            >
              <Globe size={16} />
              {lang === 'am' ? 'English' : 'አማርኛ'}
            </button>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none"
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                onClick={() => setIsOpen(false)}
                className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-blue-600 hover:bg-gray-50"
              >
                {item.name}
              </Link>
            ))}
            <button
              onClick={() => {
                toggleLang();
                setIsOpen(false);
              }}
              className="w-full text-left flex items-center gap-2 px-3 py-2 text-base font-medium text-blue-600 hover:bg-blue-50"
            >
              <Globe size={18} />
              {lang === 'am' ? 'English' : 'አማርኛ'}
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div>
            <h3 className="text-xl font-bold mb-4">{t.hero.title}</h3>
            <p className="text-blue-200 text-sm">
              {t.home.intro}
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.nav.contact}</h4>
            <div className="space-y-2 text-blue-200 text-sm">
              <div className="flex items-center gap-2"><MapPin size={16} /> Addis Ababa, Wolo Sefer</div>
              <div className="flex items-center gap-2"><Phone size={16} /> +251 11 XXX XXXX</div>
              <div className="flex items-center gap-2"><Mail size={16} /> info@woloseferchurch.org</div>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">{t.nav.services}</h4>
            <p className="text-blue-200 text-sm">{t.about.hours}</p>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-blue-400 text-xs">
          © {new Date().getFullYear()} Wolo Sefer Kidist Mariam & Kidus Gebriel EOTC. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('am');

  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Header lang={lang} setLang={setLang} />
        <main className="flex-grow">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/services" element={<Services lang={lang} />} />
            <Route path="/gallery" element={<Gallery lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
          </Routes>
        </main>
        <Footer lang={lang} />
      </div>
    </Router>
  );
};

export default App;
