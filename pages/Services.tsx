
import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { Calendar, Clock, BookOpen, Music, CheckCircle2 } from 'lucide-react';

const Services: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const today = new Date().getDay(); // 0-6

  return (
    <div className="py-24 bg-white dark:bg-gray-900 transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-20 space-y-6">
          <h1 className="text-5xl md:text-6xl font-black text-blue-900 dark:text-blue-400 tracking-tight">
            {t.services.title}
          </h1>
          <div className="w-24 h-2 bg-yellow-400 mx-auto rounded-full"></div>
          <p className="text-gray-600 dark:text-gray-400 text-xl font-light leading-relaxed">
            {lang === 'am' 
              ? 'በቤተክርስቲያናችን ውስጥ የሚሰጡ መደበኛ የመንፈሳዊ አገልግሎቶች መርሃ ግብሮች ከዚህ በታች ቀርበዋል።'
              : 'Join us for our daily and weekly spiritual gatherings. Everyone is welcome.'}
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-10 mb-24">
          <ServiceCard 
            icon={<BookOpen size={32} className="text-blue-600" />}
            title={t.services.liturgy}
            desc={t.services.liturgyDesc}
            color="blue"
          />
          <ServiceCard 
            icon={<Clock size={32} className="text-red-600" />}
            title={t.services.prayer}
            desc={t.services.prayerDesc}
            color="red"
          />
          <ServiceCard 
            icon={<Music size={32} className="text-yellow-600" />}
            title={t.services.choir}
            desc={t.services.choirDesc}
            color="yellow"
          />
        </div>

        <div className="relative">
          <div className="absolute inset-0 bg-blue-900 dark:bg-black rounded-[4rem] transform -rotate-1 scale-105 opacity-5"></div>
          <div className="relative bg-white dark:bg-gray-800 rounded-[3rem] shadow-2xl overflow-hidden border border-gray-100 dark:border-gray-700 transition-colors">
            <div className="bg-blue-900 dark:bg-black p-10 text-white flex flex-col md:flex-row items-center justify-between gap-6 transition-colors">
              <div className="flex items-center gap-5">
                <div className="w-16 h-16 bg-blue-800 dark:bg-gray-900 rounded-3xl flex items-center justify-center shadow-lg">
                  <Calendar size={32} className="text-yellow-400" />
                </div>
                <div>
                  <h2 className="text-3xl font-black uppercase tracking-tight">{t.services.eventsTitle}</h2>
                  <p className="text-blue-300 dark:text-gray-500 font-bold uppercase tracking-widest text-xs mt-1">Ethiopian Calendar 2017</p>
                </div>
              </div>
              <div className="bg-yellow-400 text-blue-900 px-6 py-3 rounded-2xl font-black text-sm shadow-xl">
                {lang === 'am' ? 'በዓላትን ያክብሩ' : 'CELEBRATE WITH US'}
              </div>
            </div>
            
            <div className="p-10">
              <div className="space-y-4">
                {t.services.events.map((event, idx) => (
                  <div 
                    key={idx} 
                    className="group flex flex-col sm:flex-row sm:items-center justify-between p-6 rounded-[2rem] hover:bg-gray-50 dark:hover:bg-gray-700 transition-all border border-transparent hover:border-gray-200 dark:hover:border-gray-600"
                  >
                    <div className="flex items-center gap-6">
                      <div className="w-20 h-20 bg-blue-50 dark:bg-gray-900 rounded-2xl flex flex-col items-center justify-center shrink-0 border border-blue-100 dark:border-gray-800 group-hover:bg-blue-600 group-hover:text-white transition-all">
                        <span className="text-xs font-black uppercase">{event.date.split(' ')[0]}</span>
                        <span className="text-2xl font-black">{event.date.split(' ')[1]}</span>
                      </div>
                      <div>
                        <h4 className="text-2xl font-black text-blue-900 dark:text-white mb-1">{event.title}</h4>
                        <div className="flex items-center gap-2 text-gray-500 dark:text-gray-400 text-sm font-medium">
                          <CheckCircle2 size={16} className="text-green-500" />
                          {lang === 'am' ? 'ሙሉ ቀን አገልግሎት' : 'Full Day Service'}
                        </div>
                      </div>
                    </div>
                    <button className="mt-6 sm:mt-0 text-blue-600 dark:text-blue-400 font-black flex items-center gap-2 group-hover:translate-x-2 transition-transform">
                      {lang === 'am' ? 'ዝርዝር' : 'Details'} <Calendar size={18} />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc, color }: { icon: React.ReactNode, title: string, desc: string, color: string }) => {
  const colorMap: any = {
    blue: 'border-blue-500 bg-blue-50 dark:bg-blue-900/10',
    red: 'border-red-500 bg-red-50 dark:bg-red-900/10',
    yellow: 'border-yellow-500 bg-yellow-50 dark:bg-yellow-900/10'
  };

  return (
    <div className={`p-10 rounded-[2.5rem] border-b-8 shadow-sm hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 ${colorMap[color]} dark:border-opacity-50`}>
      <div className="w-16 h-16 bg-white dark:bg-gray-800 rounded-2xl flex items-center justify-center mb-8 shadow-md">
        {icon}
      </div>
      <h3 className="text-2xl font-black text-gray-900 dark:text-white mb-4 uppercase tracking-tight">{title}</h3>
      <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-lg font-light">{desc}</p>
    </div>
  );
};

export default Services;
