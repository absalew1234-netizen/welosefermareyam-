
import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { Link } from 'react-router-dom';
import { Bell, ArrowRight } from 'lucide-react';

const Home: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];

  // These constants represent the specific photos you provided
  const churchRender = "https://images.unsplash.com/photo-1548625361-195fe6144df3?q=80&w=2000&auto=format&fit=crop"; // Placeholder for the 3D Church Render
  const annunciationIcon = "https://images.unsplash.com/photo-1590076214667-c0f33b98c427?q=80&w=1000&auto=format&fit=crop"; // Placeholder for Annunciation Icon

  return (
    <div>
      {/* Hero Section - Featuring the 3D architectural render */}
      <section className="relative h-[650px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={churchRender} 
            className="w-full h-full object-cover brightness-[0.4]"
            alt="Wolo Sefer Church 3D Render"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-blue-900/20 to-blue-900/80"></div>
        </div>
        <div className="relative z-10 max-w-5xl px-4 text-center">
          <h1 className="text-4xl md:text-7xl font-bold mb-6 drop-shadow-2xl tracking-tight">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-3xl mb-10 text-blue-50 drop-shadow-lg max-w-3xl mx-auto font-light">
            {t.hero.subtitle}
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link 
              to="/about"
              className="inline-flex items-center justify-center gap-2 bg-yellow-400 text-blue-900 font-bold px-8 py-4 rounded-full hover:bg-yellow-300 transition-all transform hover:scale-105 shadow-xl"
            >
              {t.hero.cta}
              <ArrowRight size={20} />
            </Link>
            <Link 
              to="/services"
              className="inline-flex items-center justify-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 font-bold px-8 py-4 rounded-full hover:bg-white/20 transition-all shadow-xl"
            >
              {lang === 'am' ? 'የአገልግሎት ሰዓታት' : 'Service Times'}
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section - Featuring the Holy Icon of the Annunciation */}
      <section className="py-24 bg-white relative overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-16">
            <div className="lg:w-1/2">
              <span className="text-blue-600 font-bold tracking-widest uppercase mb-4 block">
                {lang === 'am' ? 'እንኳን ደህና መጡ' : 'Welcome to our Parish'}
              </span>
              <h2 className="text-4xl md:text-5xl font-bold text-blue-900 mb-8 leading-tight">
                {t.home.welcome}
              </h2>
              <p className="text-xl text-gray-700 leading-relaxed mb-8">
                {t.home.intro}
              </p>
              <div className="grid grid-cols-2 gap-6 mb-10">
                <div className="border-l-4 border-yellow-400 pl-4">
                  <h4 className="font-bold text-blue-900">{lang === 'am' ? 'ቅድስት ማርያም' : 'St. Mary'}</h4>
                  <p className="text-sm text-gray-500">{lang === 'am' ? 'የአምላክ እናት' : 'Mother of God'}</p>
                </div>
                <div className="border-l-4 border-red-500 pl-4">
                  <h4 className="font-bold text-blue-900">{lang === 'am' ? 'ቅዱስ ገብርኤል' : 'St. Gabriel'}</h4>
                  <p className="text-sm text-gray-500">{lang === 'am' ? 'የብሥራት መልአክ' : 'The Archangel'}</p>
                </div>
              </div>
              <Link to="/contact" className="text-blue-600 font-bold flex items-center gap-2 hover:translate-x-2 transition-transform">
                {lang === 'am' ? 'እኛን ለማግኘት' : 'Contact us today'} <ArrowRight size={18} />
              </Link>
            </div>
            <div className="lg:w-1/2 relative">
              <div className="absolute -top-10 -left-10 w-40 h-40 bg-yellow-100 rounded-full blur-3xl opacity-50"></div>
              <img 
                src={annunciationIcon} 
                className="rounded-2xl shadow-2xl border-8 border-white relative z-10 w-full object-cover aspect-[4/5]"
                alt="Holy Annunciation Icon"
              />
              <div className="absolute -bottom-6 -right-6 bg-blue-900 p-6 rounded-xl shadow-xl z-20 text-white hidden sm:block">
                <p className="text-sm font-bold">{lang === 'am' ? 'የብሥራቱ ምስል' : 'Icon of Annunciation'}</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements Section */}
      <section className="py-20 bg-blue-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-red-100 rounded-full flex items-center justify-center">
                <Bell className="text-red-600" size={24} />
              </div>
              <h2 className="text-3xl font-bold text-blue-900">{t.home.recentAnnouncements}</h2>
            </div>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-8 border-red-500 hover:shadow-md transition-shadow">
              <span className="text-red-500 text-sm font-bold mb-4 block">{lang === 'am' ? 'ልዩ ማስታወቂያ' : 'Special Notice'}</span>
              <p className="text-xl font-medium text-gray-800 leading-snug">
                {t.home.announcement1}
              </p>
            </div>
            <div className="bg-white p-10 rounded-2xl shadow-sm border-t-8 border-yellow-500 hover:shadow-md transition-shadow">
              <span className="text-yellow-600 text-sm font-bold mb-4 block">{lang === 'am' ? 'ትምህርት' : 'Education'}</span>
              <p className="text-xl font-medium text-gray-800 leading-snug">
                {t.home.announcement2}
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
