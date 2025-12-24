
import React, { useState, useEffect } from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { Link } from 'react-router-dom';
import { Bell, ArrowRight, Heart, Info, Clock } from 'lucide-react';

const Home: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const [isLiturgyOngoing, setIsLiturgyOngoing] = useState(false);

  useEffect(() => {
    // Simulated Liturgy Check: Usually 5 AM to 9 AM
    const now = new Date();
    const hours = now.getHours();
    setIsLiturgyOngoing(hours >= 5 && hours <= 9);
  }, []);

  const churchRender = "https://images.unsplash.com/photo-1548625361-195fe6144df3?q=80&w=2000&auto=format&fit=crop"; 
  const annunciationIcon = "https://images.unsplash.com/photo-1590076214667-c0f33b98c427?q=80&w=1000&auto=format&fit=crop"; 

  return (
    <div className="transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center justify-center text-white overflow-hidden">
        <div className="absolute inset-0">
          <img 
            src={churchRender} 
            className="w-full h-full object-cover brightness-[0.5] scale-105 animate-[pulse_10s_infinite]"
            alt="Church Render"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-blue-900/40 via-transparent to-white dark:to-gray-900"></div>
        </div>
        
        <div className="relative z-10 max-w-5xl px-4 text-center">
          {isLiturgyOngoing && (
            <div className="inline-flex items-center gap-2 bg-red-600 text-white px-4 py-2 rounded-full text-xs font-black mb-8 animate-bounce shadow-xl border-2 border-white">
              <div className="w-2 h-2 bg-white rounded-full animate-ping"></div>
              {lang === 'am' ? 'የቅዳሴ ሰዓት ነው' : 'LITURGY IS ONGOING'}
            </div>
          )}
          
          <h1 className="text-5xl md:text-8xl font-black mb-8 drop-shadow-2xl tracking-tighter leading-[0.9]">
            {t.hero.title}
          </h1>
          <p className="text-xl md:text-3xl mb-12 text-blue-50 drop-shadow-lg max-w-3xl mx-auto font-light leading-relaxed">
            {t.hero.subtitle}
          </p>
          
          <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
            <Link 
              to="/about"
              className="group relative inline-flex items-center justify-center gap-3 bg-yellow-400 text-blue-900 font-black px-10 py-5 rounded-[2rem] hover:bg-yellow-300 transition-all transform hover:-translate-y-1 shadow-2xl overflow-hidden"
            >
              <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform"></div>
              <span className="relative">{t.hero.cta}</span>
              <ArrowRight size={22} className="relative group-hover:translate-x-1 transition-transform" />
            </Link>
            
            <Link 
              to="/services"
              className="inline-flex items-center justify-center gap-3 bg-white/10 backdrop-blur-xl text-white border-2 border-white/40 font-black px-10 py-5 rounded-[2rem] hover:bg-white/20 transition-all shadow-xl"
            >
              <Clock size={20} />
              {lang === 'am' ? 'መርሃ ግብሮች' : 'Schedules'}
            </Link>
          </div>
        </div>
      </section>

      {/* Welcome Section */}
      <section className="py-24 bg-white dark:bg-gray-900 relative transition-colors duration-300 overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="flex flex-col lg:flex-row items-center gap-20">
            <div className="lg:w-1/2 space-y-8">
              <div className="flex items-center gap-4 text-blue-600 dark:text-blue-400">
                <Heart size={32} />
                <span className="text-sm font-black tracking-[0.3em] uppercase">{t.home.welcome}</span>
              </div>
              <h2 className="text-5xl md:text-6xl font-black text-blue-900 dark:text-white leading-[1.1]">
                {lang === 'am' ? 'የፍቅር እና የታማኝነት ስፍራ' : 'A Place of Faith & Love'}
              </h2>
              <p className="text-xl text-gray-600 dark:text-gray-400 leading-relaxed font-light">
                {t.home.intro}
              </p>
              
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-4">
                <div className="bg-blue-50 dark:bg-gray-800 p-8 rounded-3xl border border-blue-100 dark:border-gray-700">
                  <h4 className="font-black text-blue-900 dark:text-blue-300 text-xl mb-2">{lang === 'am' ? 'ቅድስት ማርያም' : 'St. Mary'}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{lang === 'am' ? 'የአምላክ እናት፣ የዓለም ቤዛ' : 'Mother of God, the Intercessor'}</p>
                </div>
                <div className="bg-red-50 dark:bg-gray-800 p-8 rounded-3xl border border-red-100 dark:border-gray-700">
                  <h4 className="font-black text-blue-900 dark:text-blue-300 text-xl mb-2">{lang === 'am' ? 'ቅዱስ ገብርኤል' : 'St. Gabriel'}</h4>
                  <p className="text-sm text-gray-500 dark:text-gray-400">{lang === 'am' ? 'የብሥራት መልአክ' : 'The Archangel of Good News'}</p>
                </div>
              </div>
              
              <Link to="/about" className="inline-flex items-center gap-4 text-blue-600 dark:text-blue-400 font-black text-xl hover:translate-x-4 transition-transform group">
                {lang === 'am' ? 'ስለ እኛ የበለጠ ይወቁ' : 'Read our full story'} 
                <div className="p-2 bg-blue-100 dark:bg-blue-900/40 rounded-full group-hover:bg-blue-600 group-hover:text-white transition-colors">
                  <Info size={24} />
                </div>
              </Link>
            </div>
            
            <div className="lg:w-1/2 relative group">
              <div className="absolute -inset-4 bg-gradient-to-tr from-yellow-400 to-red-600 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
              <div className="relative bg-white dark:bg-gray-800 p-4 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-700">
                <img 
                  src={annunciationIcon} 
                  className="rounded-[2.5rem] w-full object-cover aspect-[4/5] shadow-inner"
                  alt="Holy Icon"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Announcements */}
      <section className="py-24 bg-gray-50 dark:bg-gray-800 transition-colors">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
            <div className="space-y-4">
              <div className="flex items-center gap-2 text-red-600">
                <Bell size={24} />
                <span className="font-black tracking-widest uppercase text-sm">{lang === 'am' ? 'አዲስ መረጃ' : 'News'}</span>
              </div>
              <h2 className="text-4xl font-black text-blue-900 dark:text-blue-400">{t.home.recentAnnouncements}</h2>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 gap-10">
            <div className="bg-white dark:bg-gray-900 p-12 rounded-[2.5rem] shadow-sm border-b-8 border-red-500 hover:scale-[1.02] transition-all group">
              <div className="w-16 h-16 bg-red-50 dark:bg-red-900/30 rounded-2xl flex items-center justify-center text-red-600 mb-8 group-hover:rotate-12 transition-transform">
                <Bell size={32} />
              </div>
              <p className="text-2xl font-black text-gray-900 dark:text-white leading-snug">
                {t.home.announcement1}
              </p>
            </div>
            <div className="bg-white dark:bg-gray-900 p-12 rounded-[2.5rem] shadow-sm border-b-8 border-yellow-500 hover:scale-[1.02] transition-all group">
              <div className="w-16 h-16 bg-yellow-50 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center text-yellow-600 mb-8 group-hover:rotate-12 transition-transform">
                <Info size={32} />
              </div>
              <p className="text-2xl font-black text-gray-900 dark:text-white leading-snug">
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
