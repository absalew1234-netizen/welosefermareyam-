
import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { MapPin, Info, History, Crosshair, Clock, Camera } from 'lucide-react';

const About: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];

  const historicalPhoto = "https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop"; 

  return (
    <div className="py-16 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-900 dark:text-blue-400 mb-12 text-center tracking-tight">{t.about.title}</h1>
        
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-12">
            <div className="bg-white dark:bg-gray-800 p-8 md:p-12 rounded-3xl shadow-sm border border-gray-100 dark:border-gray-700 transition-colors duration-300">
              <div className="flex items-start gap-4 mb-8">
                <span className="text-blue-600 dark:text-blue-400 shrink-0 mt-1">
                  <Info size={28} />
                </span>
                <div>
                  <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 leading-tight">{t.about.fullName}</h2>
                  <p className="text-blue-600 dark:text-blue-400 font-semibold">{t.about.churchType}</p>
                </div>
              </div>
              
              <div className="h-px bg-gray-100 dark:bg-gray-700 w-full mb-10"></div>
              
              <div className="flex flex-col md:flex-row gap-10 items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-4">
                    <History className="text-red-600 dark:text-red-400" size={24} />
                    <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{t.about.historyTitle}</h3>
                  </div>
                  <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                    {t.about.historyText}
                  </p>
                </div>
                <div className="md:w-[280px] shrink-0 group relative self-center md:self-start">
                   <div className="absolute -inset-1 bg-gradient-to-tr from-yellow-400 to-red-500 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-1000"></div>
                   <img 
                    src={historicalPhoto} 
                    className="rounded-2xl shadow-lg border-4 border-white dark:border-gray-700 relative z-10 transform -rotate-2 hover:rotate-0 transition-all duration-500 w-full"
                    alt="Small Colorful Historical Church"
                   />
                   <div className="absolute -bottom-4 -left-4 bg-white dark:bg-gray-800 px-3 py-1 rounded-lg shadow-md text-xs font-bold text-blue-900 dark:text-blue-300 z-20 border border-gray-100 dark:border-gray-700 transition-colors duration-300">
                    {lang === 'am' ? 'ታሪካዊው ህንፃ' : 'The Original Structure'}
                   </div>
                </div>
              </div>
            </div>

            <div className="bg-blue-900 dark:bg-black text-white p-12 rounded-[2.5rem] shadow-2xl relative overflow-hidden transition-colors duration-300">
               <div className="relative z-10">
                  <h3 className="text-3xl font-bold mb-6 flex items-center gap-3">
                    <Crosshair className="text-yellow-400" size={32} />
                    {lang === 'am' ? 'የቤተክርስቲያኑ ተልዕኮ' : 'Our Divine Mission'}
                  </h3>
                  <p className="text-xl md:text-2xl text-blue-100 dark:text-gray-300 leading-relaxed italic font-light">
                    {lang === 'am' 
                      ? 'የእግዚአብሔርን ቃል ማስተማር፣ ወጣቶችን በሃይማኖት ማነፅ እና የተቸገሩትን መርዳት ዋና ዓላማችን ነው።'
                      : 'To spread the Word of God, nurture the youth in faith, and provide spiritual and material support to those in need.'}
                  </p>
               </div>
               <div className="absolute -bottom-20 -right-20 opacity-10 transform rotate-12">
                  <Camera size={400} />
               </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-yellow-50 dark:bg-gray-800 p-8 rounded-3xl border border-yellow-200 dark:border-gray-700 shadow-sm relative overflow-hidden transition-colors duration-300">
              <div className="absolute top-0 right-0 w-24 h-24 bg-yellow-400/10 rounded-full -mr-8 -mt-8"></div>
              <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-6 flex items-center gap-2 text-xl">
                <MapPin size={24} className="text-red-600 dark:text-red-400" />
                {lang === 'am' ? 'አድራሻ' : 'Location'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 mb-8 leading-relaxed text-lg">{t.about.address}</p>
              <div className="bg-white dark:bg-gray-900 p-5 rounded-2xl border border-yellow-200 dark:border-yellow-900/50 text-sm font-mono text-blue-800 dark:text-yellow-400 mb-8 flex items-center justify-center shadow-inner transition-colors duration-300">
                {t.about.plusCode}
              </div>
              <a 
                href="https://www.google.com/maps/search/?api=1&query=XQQF%2B9GJ" 
                target="_blank" 
                rel="noopener noreferrer"
                className="block text-center bg-blue-600 text-white font-bold py-5 rounded-2xl hover:bg-blue-700 transition-all shadow-lg hover:shadow-blue-200 transform hover:-translate-y-1"
              >
                {lang === 'am' ? 'በካርታ እይ' : 'Navigate on Google Maps'}
              </a>
            </div>

            <div className="bg-white dark:bg-gray-800 p-8 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm border-l-8 border-blue-600 transition-colors duration-300">
              <h4 className="font-bold text-blue-900 dark:text-blue-400 mb-6 flex items-center gap-2 text-xl">
                <Clock size={24} className="text-blue-600 dark:text-blue-400" />
                {lang === 'am' ? 'የአገልግሎት ሰዓት' : 'Service Hours'}
              </h4>
              <p className="text-gray-700 dark:text-gray-300 leading-relaxed text-lg">
                {t.about.hours}
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
