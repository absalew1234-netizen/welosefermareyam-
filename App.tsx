
import React, { useState, useEffect } from 'react';
import { HashRouter as Router, Routes, Route, Link, useLocation } from 'react-router-dom';
import { translations } from './translations';
import { Language } from './types';
import { Menu, X, Globe, Phone, Mail, MapPin, Sun, Moon, MessageSquare } from 'lucide-react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Gallery from './pages/Gallery';
import Contact from './pages/Contact';

const Header = ({ 
  lang, 
  setLang, 
  isDarkMode, 
  toggleDarkMode 
}: { 
  lang: Language, 
  setLang: (l: Language) => void,
  isDarkMode: boolean,
  toggleDarkMode: () => void
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const t = translations[lang];
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

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
    <nav className={`fixed w-full top-0 z-50 transition-all duration-500 ${
      scrolled 
      ? 'bg-white/90 dark:bg-gray-900/90 backdrop-blur-md shadow-lg py-2' 
      : 'bg-white dark:bg-gray-900 py-4'
    }`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center gap-3 group">
              <div className="w-12 h-12 bg-blue-600 rounded-2xl flex items-center justify-center text-white font-bold text-xl border-2 border-yellow-400 transform group-hover:rotate-12 transition-transform shadow-lg">
                W
              </div>
              <div className="flex flex-col">
                <span className="font-black text-blue-900 dark:text-blue-400 tracking-tighter leading-none">
                  {lang === 'am' ? 'ወሎ ሰፈር' : 'WOLO SEFER'}
                </span>
                <span className="text-[10px] font-bold text-gray-500 dark:text-gray-400 uppercase tracking-[0.2em]">
                  {lang === 'am' ? 'ቅድስት ማርያም' : 'ST. MARY'}
                </span>
              </div>
            </Link>
          </div>
          
          <div className="hidden md:flex items-center space-x-1">
            {navItems.map((item) => (
              <Link
                key={item.path}
                to={item.path}
                className={`relative px-4 py-2 text-sm font-black transition-all rounded-full ${
                  location.pathname === item.path 
                  ? 'text-blue-600 bg-blue-50 dark:text-blue-400 dark:bg-blue-900/30' 
                  : 'text-gray-600 dark:text-gray-300 hover:text-blue-600 dark:hover:text-blue-400 hover:bg-gray-50 dark:hover:bg-gray-800'
                }`}
              >
                {item.name}
              </Link>
            ))}
            
            <div className="flex items-center gap-2 ml-4 pl-4 border-l border-gray-100 dark:border-gray-800">
              <button
                onClick={toggleDarkMode}
                className="p-2.5 rounded-2xl bg-gray-100 dark:bg-gray-800 text-gray-600 dark:text-gray-300 hover:scale-110 active:scale-95 transition-all shadow-sm"
              >
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>

              <button
                onClick={toggleLang}
                className="flex items-center gap-2 bg-blue-900 text-white px-4 py-2 rounded-2xl hover:bg-blue-800 transition-all font-black text-xs shadow-md"
              >
                <Globe size={14} />
                {lang === 'am' ? 'ENGLISH' : 'አማርኛ'}
              </button>
            </div>
          </div>

          <div className="md:hidden flex items-center gap-3">
             <button onClick={toggleDarkMode} className="p-2 rounded-xl bg-gray-100 dark:bg-gray-800">
                {isDarkMode ? <Sun size={18} /> : <Moon size={18} />}
              </button>
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="p-2 rounded-xl bg-blue-900 text-white shadow-lg"
            >
              {isOpen ? <X size={20} /> : <Menu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`md:hidden absolute w-full bg-white dark:bg-gray-900 border-b border-gray-100 dark:border-gray-800 transition-all duration-300 ${isOpen ? 'top-full opacity-100 shadow-2xl' : '-top-[500px] opacity-0 pointer-events-none'}`}>
        <div className="px-4 pt-4 pb-8 space-y-2">
          {navItems.map((item) => (
            <Link
              key={item.path}
              to={item.path}
              onClick={() => setIsOpen(false)}
              className="block px-4 py-4 rounded-2xl text-lg font-black text-gray-700 dark:text-gray-200 hover:bg-blue-50 dark:hover:bg-gray-800"
            >
              {item.name}
            </Link>
          ))}
          <button
            onClick={() => { toggleLang(); setIsOpen(false); }}
            className="w-full text-left flex items-center gap-3 px-4 py-4 rounded-2xl text-lg font-black text-blue-600 dark:text-blue-400 bg-blue-50 dark:bg-blue-900/30"
          >
            <Globe size={20} />
            {lang === 'am' ? 'English' : 'አማርኛ'}
          </button>
        </div>
      </div>
    </nav>
  );
};

const Footer = ({ lang }: { lang: Language }) => {
  const t = translations[lang];
  return (
    <footer className="bg-gray-50 dark:bg-black py-20 border-t border-gray-100 dark:border-gray-900 transition-colors">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
          <div className="md:col-span-2">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-xl flex items-center justify-center text-white font-bold border-2 border-yellow-400">W</div>
              <h3 className="text-2xl font-black text-blue-900 dark:text-white uppercase">{lang === 'am' ? 'ወሎ ሰፈር ቤተክርስቲያን' : 'Wolo Sefer Church'}</h3>
            </div>
            <p className="text-gray-500 dark:text-gray-400 text-lg leading-relaxed max-w-md">
              {t.home.intro}
            </p>
          </div>
          <div>
            <h4 className="text-sm font-black text-blue-900 dark:text-blue-400 uppercase tracking-widest mb-6">{t.nav.contact}</h4>
            <div className="space-y-4 text-gray-600 dark:text-gray-400">
              <div className="flex items-center gap-3"><MapPin size={18} className="text-red-500" /> Addis Ababa, Wolo Sefer</div>
              <div className="flex items-center gap-3"><Phone size={18} className="text-blue-500" /> +251 96 163 4343</div>
              <div className="flex items-center gap-3"><Mail size={18} className="text-yellow-500" /> info@woloseferchurch.org</div>
            </div>
          </div>
          <div>
            <h4 className="text-sm font-black text-blue-900 dark:text-blue-400 uppercase tracking-widest mb-6">{t.nav.services}</h4>
            <p className="text-gray-600 dark:text-gray-400 leading-loose">{t.about.hours}</p>
          </div>
        </div>
        <div className="mt-20 pt-10 border-t border-gray-100 dark:border-gray-800 text-center">
          <p className="text-gray-400 dark:text-gray-600 text-sm font-medium">
            © {new Date().getFullYear()} Wolo Sefer EOTC. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

const App: React.FC = () => {
  const [lang, setLang] = useState<Language>('am');
  const [isDarkMode, setIsDarkMode] = useState<boolean>(() => {
    const saved = localStorage.getItem('darkMode');
    // Start with white mode by default if nothing saved
    return saved === 'true';
  });

  useEffect(() => {
    if (isDarkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    localStorage.setItem('darkMode', isDarkMode.toString());
  }, [isDarkMode]);

  const toggleDarkMode = () => setIsDarkMode(!isDarkMode);

  return (
    <Router>
      <div className="flex flex-col min-h-screen bg-white dark:bg-gray-900 transition-colors duration-500">
        <Header 
          lang={lang} 
          setLang={setLang} 
          isDarkMode={isDarkMode} 
          toggleDarkMode={toggleDarkMode} 
        />
        <main className="flex-grow pt-24">
          <Routes>
            <Route path="/" element={<Home lang={lang} />} />
            <Route path="/about" element={<About lang={lang} />} />
            <Route path="/services" element={<Services lang={lang} />} />
            <Route path="/gallery" element={<Gallery lang={lang} />} />
            <Route path="/contact" element={<Contact lang={lang} />} />
          </Routes>
        </main>
        
        {/* Floating Action Button */}
        <div className="fixed bottom-8 right-8 z-40 flex flex-col gap-4">
          <Link 
            to="/contact" 
            className="w-16 h-16 bg-blue-600 text-white rounded-full flex items-center justify-center shadow-2xl hover:scale-110 active:scale-90 transition-all group"
          >
            <MessageSquare size={28} />
            <span className="absolute right-20 bg-blue-900 text-white px-4 py-2 rounded-xl text-sm font-black opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap">
              {lang === 'am' ? 'አግኙን' : 'Contact Us'}
            </span>
          </Link>
        </div>

        <Footer lang={lang} />
      </div>
    </Router>
  );
};

export default App;
