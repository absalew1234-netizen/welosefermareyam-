
import React, { useState } from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { Phone, Mail, MapPin, Send, ExternalLink, MessageCircle } from 'lucide-react';

const Contact: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert(lang === 'am' ? 'መልዕክትዎ ተልኳል! እናመሰግናለን።' : 'Message sent! Thank you.');
    setFormData({ name: '', email: '', message: '' });
  };

  const plusCode = "XQQF+9GJ";
  const mapUrl = `https://maps.google.com/maps?q=${encodeURIComponent(plusCode + ", Addis Ababa")}&t=&z=16&ie=UTF8&iwloc=&output=embed`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(plusCode)}`;

  return (
    <div className="py-12 md:py-20 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl md:text-5xl font-black text-blue-900 dark:text-blue-400 mb-12 md:mb-16 text-center tracking-tight">
          {t.contact.title}
        </h1>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          <div className="flex flex-col gap-12">
            <div className="space-y-8">
              <h2 className="text-2xl md:text-3xl font-bold text-gray-900 dark:text-white flex items-center gap-3">
                <MessageCircle className="text-blue-600 dark:text-blue-400" />
                {lang === 'am' ? 'ያግኙን' : 'Reach Out'}
              </h2>
              <div className="grid gap-4 md:gap-6">
                <div className="flex items-center gap-4 md:gap-6 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm transition-all">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Phone size={24} className="text-blue-600 dark:text-blue-400 md:size-[28px]" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-blue-400 dark:text-blue-300 font-black uppercase tracking-widest mb-1">{lang === 'am' ? 'ስልክ' : 'Phone'}</p>
                    <span className="text-lg md:text-xl font-bold text-blue-900 dark:text-white">{t.contact.phone}</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm transition-all">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Mail size={24} className="text-red-600 dark:text-red-400 md:size-[28px]" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-red-400 dark:text-red-300 font-black uppercase tracking-widest mb-1">{lang === 'am' ? 'ኢሜል' : 'Email'}</p>
                    <span className="text-lg md:text-xl font-bold text-blue-900 dark:text-white">info@woloseferchurch.org</span>
                  </div>
                </div>
                <div className="flex items-center gap-4 md:gap-6 text-gray-700 dark:text-gray-300 bg-gray-50 dark:bg-gray-800 p-4 md:p-6 rounded-3xl border border-gray-100 dark:border-gray-700 shadow-sm transition-all">
                  <div className="w-12 h-12 md:w-14 md:h-14 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin size={24} className="text-yellow-600 dark:text-yellow-400 md:size-[28px]" />
                  </div>
                  <div>
                    <p className="text-[10px] md:text-xs text-yellow-600 dark:text-yellow-500 font-black uppercase tracking-widest mb-1">{lang === 'am' ? 'አድራሻ' : 'Address'}</p>
                    <span className="text-lg md:text-xl font-bold text-blue-900 dark:text-white">{t.about.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-xl md:text-2xl font-black text-blue-900 dark:text-blue-400">{t.contact.findUs}</h3>
                <a 
                  href={externalMapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-50 dark:bg-gray-800 text-blue-600 dark:text-blue-400 flex items-center gap-2 px-3 py-1.5 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-black hover:bg-blue-100 dark:hover:bg-gray-700 transition-colors shadow-sm"
                >
                  {lang === 'am' ? 'ካርታ ክፈት' : 'View on Maps'}
                  <ExternalLink size={14} className="md:size-[16px]" />
                </a>
              </div>
              
              <div className="w-full aspect-[4/3] md:aspect-video lg:h-[550px] bg-gray-100 dark:bg-gray-800 rounded-[2rem] md:rounded-[2.5rem] overflow-hidden border-4 md:border-8 border-white dark:border-gray-800 shadow-2xl relative group transition-colors duration-300">
                <iframe 
                  className="w-full h-full dark:invert-[0.85] dark:hue-rotate-180"
                  src={mapUrl}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Wolo Sefer Church Location Map"
                ></iframe>
                
                <div className="absolute bottom-4 right-4 md:bottom-6 md:right-6 bg-white/95 dark:bg-gray-900/95 backdrop-blur-md px-3 py-1.5 md:px-4 md:py-2 rounded-xl shadow-xl border border-blue-50 dark:border-gray-800 flex items-center gap-2 transform group-hover:-translate-y-1 transition-all">
                    <div className="w-2 h-2 md:w-3 md:h-3 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-xs md:text-sm font-black text-blue-900 dark:text-blue-400 font-mono tracking-tight">{plusCode}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-900 dark:bg-black p-8 md:p-12 rounded-[2.5rem] md:rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] text-white relative overflow-hidden flex flex-col h-fit lg:mt-0 transition-colors duration-300">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-800 dark:bg-gray-900 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="mb-8 md:mb-10">
                <h2 className="text-3xl md:text-4xl font-black mb-4 tracking-tight">{lang === 'am' ? 'መልዕክት ይላኩልን' : 'Send a Message'}</h2>
                <p className="text-blue-200 dark:text-gray-400 text-base md:text-lg font-light leading-relaxed">
                  {lang === 'am' 
                    ? 'ጥያቄ ወይም አስተያየት ካለዎት ከታች ያለውን ቅፅ በመጠቀም ያነጋግሩን።' 
                    : 'Have questions or want to learn more? Fill out the form below and we will get back to you.'}
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6 md:space-y-8">
                <div className="space-y-2 md:space-y-3">
                  <label className="block text-[10px] md:text-xs font-black text-blue-200 dark:text-gray-400 ml-2 tracking-widest uppercase">{t.contact.name}</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-5 py-4 md:px-6 md:py-5 rounded-2xl md:rounded-3xl border-none focus:outline-none focus:ring-4 focus:ring-yellow-400 bg-white/10 dark:bg-white/5 text-white placeholder-blue-300 dark:placeholder-gray-600 backdrop-blur-md transition-all text-base md:text-lg"
                    placeholder={lang === 'am' ? 'ሙሉ ስም' : 'John Doe'}
                  />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="block text-[10px] md:text-xs font-black text-blue-200 dark:text-gray-400 ml-2 tracking-widest uppercase">{t.contact.email}</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-5 py-4 md:px-6 md:py-5 rounded-2xl md:rounded-3xl border-none focus:outline-none focus:ring-4 focus:ring-yellow-400 bg-white/10 dark:bg-white/5 text-white placeholder-blue-300 dark:placeholder-gray-600 backdrop-blur-md transition-all text-base md:text-lg"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-2 md:space-y-3">
                  <label className="block text-[10px] md:text-xs font-black text-blue-200 dark:text-gray-400 ml-2 tracking-widest uppercase">{t.contact.message}</label>
                  <textarea 
                    rows={4}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="w-full px-5 py-4 md:px-6 md:py-5 rounded-2xl md:rounded-3xl border-none focus:outline-none focus:ring-4 focus:ring-yellow-400 bg-white/10 dark:bg-white/5 text-white placeholder-blue-300 dark:placeholder-gray-600 backdrop-blur-md transition-all text-base md:text-lg resize-none"
                    placeholder={lang === 'am' ? 'መልዕክትዎን እዚህ ይጻፉ...' : 'Type your message here...'}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-3 md:gap-4 bg-yellow-400 text-blue-900 font-black py-5 md:py-6 rounded-2xl md:rounded-3xl hover:bg-yellow-300 transition-all transform hover:scale-[1.02] shadow-2xl group active:scale-95"
                >
                  <Send size={20} className="md:size-[24px] group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
                  {t.contact.send}
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
