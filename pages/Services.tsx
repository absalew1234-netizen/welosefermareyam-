
import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { Calendar, Clock, BookOpen, Music } from 'lucide-react';

const Services: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];

  return (
    <div className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl font-bold text-blue-900 mb-6 text-center">{t.services.title}</h1>
        <p className="text-center text-gray-600 max-w-2xl mx-auto mb-16 text-lg">
          {lang === 'am' 
            ? 'በቤተክርስቲያናችን ውስጥ የሚሰጡ መደበኛ የመንፈሳዊ አገልግሎቶች መርሃ ግብሮች ከዚህ በታች ቀርበዋል።'
            : 'Explore our regular spiritual services and upcoming liturgical events.'}
        </p>

        <div className="grid md:grid-cols-3 gap-8 mb-20">
          <ServiceCard 
            icon={<BookOpen className="text-blue-600" />}
            title={t.services.liturgy}
            desc={t.services.liturgyDesc}
          />
          <ServiceCard 
            icon={<Clock className="text-red-600" />}
            title={t.services.prayer}
            desc={t.services.prayerDesc}
          />
          <ServiceCard 
            icon={<Music className="text-yellow-600" />}
            title={t.services.choir}
            desc={t.services.choirDesc}
          />
        </div>

        <div className="bg-white rounded-3xl shadow-xl overflow-hidden">
          <div className="bg-blue-900 p-8 text-white flex items-center justify-between">
            <h2 className="text-2xl font-bold flex items-center gap-3">
              <Calendar />
              {t.services.eventsTitle}
            </h2>
            <span className="text-blue-300 font-medium">2017 E.C / 2024 G.C</span>
          </div>
          <div className="p-8">
            <ul className="space-y-4">
              {t.services.events.map((event, idx) => (
                <li key={idx} className="flex flex-col sm:flex-row sm:items-center justify-between p-4 rounded-xl hover:bg-blue-50 transition-colors border-b border-gray-100 last:border-0">
                  <span className="font-bold text-blue-900 text-lg sm:w-1/4">{event.date}</span>
                  <span className="text-gray-800 text-lg sm:w-3/4">{event.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

const ServiceCard = ({ icon, title, desc }: { icon: React.ReactNode, title: string, desc: string }) => (
  <div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
    <div className="w-12 h-12 bg-gray-50 rounded-xl flex items-center justify-center mb-6">
      {icon}
    </div>
    <h3 className="text-xl font-bold text-gray-900 mb-3">{title}</h3>
    <p className="text-gray-600 leading-relaxed">{desc}</p>
  </div>
);

export default Services;
