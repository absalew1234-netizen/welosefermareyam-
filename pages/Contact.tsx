
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
  const mapUrl = `https://maps.google.com/maps?q=${plusCode},%20Addis%20Ababa&t=&z=17&ie=UTF8&iwloc=&output=embed`;
  const externalMapUrl = `https://www.google.com/maps/search/?api=1&query=${plusCode}`;

  return (
    <div className="py-20 bg-white min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-5xl font-black text-blue-900 mb-16 text-center tracking-tight">{t.contact.title}</h1>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
          {/* Contact Info & Interactive Map */}
          <div className="space-y-12">
            <div className="space-y-8">
              <h2 className="text-3xl font-bold text-gray-900 flex items-center gap-3">
                <MessageCircle className="text-blue-600" />
                {lang === 'am' ? 'ያግኙን' : 'Reach Out'}
              </h2>
              <div className="grid gap-6">
                <div className="flex items-center gap-6 text-gray-700 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.01]">
                  <div className="w-14 h-14 bg-blue-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Phone size={28} className="text-blue-600" />
                  </div>
                  <div>
                    <p className="text-xs text-blue-400 font-black uppercase tracking-widest mb-1">{lang === 'am' ? 'ስልክ' : 'Phone'}</p>
                    <span className="text-xl font-bold text-blue-900">{t.contact.phone}</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-gray-700 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.01]">
                  <div className="w-14 h-14 bg-red-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <Mail size={28} className="text-red-600" />
                  </div>
                  <div>
                    <p className="text-xs text-red-400 font-black uppercase tracking-widest mb-1">{lang === 'am' ? 'ኢሜል' : 'Email'}</p>
                    <span className="text-xl font-bold text-blue-900">info@woloseferchurch.org</span>
                  </div>
                </div>
                <div className="flex items-center gap-6 text-gray-700 bg-gray-50 p-6 rounded-3xl border border-gray-100 shadow-sm transition-transform hover:scale-[1.01]">
                  <div className="w-14 h-14 bg-yellow-100 rounded-2xl flex items-center justify-center shrink-0 shadow-sm">
                    <MapPin size={28} className="text-yellow-600" />
                  </div>
                  <div>
                    <p className="text-xs text-yellow-600 font-black uppercase tracking-widest mb-1">{lang === 'am' ? 'አድራሻ' : 'Address'}</p>
                    <span className="text-xl font-bold text-blue-900">{t.about.address}</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <div className="flex items-center justify-between px-2">
                <h3 className="text-2xl font-black text-blue-900">{t.contact.findUs}</h3>
                <a 
                  href={externalMapUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-blue-50 text-blue-600 flex items-center gap-2 px-4 py-2 rounded-full text-sm font-black hover:bg-blue-100 transition-colors shadow-sm"
                >
                  {lang === 'am' ? 'ካርታ ክፈት' : 'View on Maps'}
                  <ExternalLink size={16} />
                </a>
              </div>
              
              <div className="w-full h-[450px] bg-gray-100 rounded-[2.5rem] overflow-hidden border-8 border-white shadow-2xl relative group">
                <iframe 
                  className="w-full h-full"
                  src={mapUrl}
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  title="Wolo Sefer Church Location Map"
                ></iframe>
                
                {/* Floating Plus Code Tag */}
                <div className="absolute bottom-6 right-6 bg-white/95 backdrop-blur-md px-4 py-2 rounded-xl shadow-xl border border-blue-50 flex items-center gap-2 transform group-hover:-translate-y-1 transition-transform">
                    <div className="w-3 h-3 bg-red-600 rounded-full animate-pulse"></div>
                    <span className="text-sm font-black text-blue-900 font-mono tracking-tight">{plusCode}</span>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Form */}
          <div className="bg-blue-900 p-8 sm:p-12 rounded-[3rem] shadow-[0_20px_50px_rgba(0,0,0,0.2)] text-white relative overflow-hidden flex flex-col h-fit">
            <div className="absolute -top-32 -right-32 w-80 h-80 bg-blue-800 rounded-full opacity-40 blur-3xl"></div>
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-yellow-400 rounded-full opacity-5 blur-3xl"></div>
            
            <div className="relative z-10">
              <div className="mb-10">
                <h2 className="text-4xl font-black mb-4 tracking-tight">{lang === 'am' ? 'መልዕክት ይላኩልን' : 'Send a Message'}</h2>
                <p className="text-blue-200 text-lg font-light leading-relaxed">
                  {lang === 'am' 
                    ? 'ጥያቄ ወይም አስተያየት ካለዎት ከታች ያለውን ቅፅ በመጠቀም ያነጋግሩን።' 
                    : 'Have questions or want to learn more? Fill out the form below and we will get back to you.'}
                </p>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-8">
                <div className="space-y-3">
                  <label className="block text-sm font-black text-blue-200 ml-2 tracking-widest uppercase">{t.contact.name}</label>
                  <input 
                    type="text" 
                    value={formData.name}
                    onChange={(e) => setFormData({...formData, name: e.target.value})}
                    required
                    className="w-full px-6 py-5 rounded-3xl border-none focus:outline-none focus:ring-4 focus:ring-yellow-400 bg-white/10 text-white placeholder-blue-300 backdrop-blur-md transition-all text-lg"
                    placeholder={lang === 'am' ? 'ሙሉ ስም' : 'John Doe'}
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-black text-blue-200 ml-2 tracking-widest uppercase">{t.contact.email}</label>
                  <input 
                    type="email" 
                    value={formData.email}
                    onChange={(e) => setFormData({...formData, email: e.target.value})}
                    required
                    className="w-full px-6 py-5 rounded-3xl border-none focus:outline-none focus:ring-4 focus:ring-yellow-400 bg-white/10 text-white placeholder-blue-300 backdrop-blur-md transition-all text-lg"
                    placeholder="email@example.com"
                  />
                </div>
                <div className="space-y-3">
                  <label className="block text-sm font-black text-blue-200 ml-2 tracking-widest uppercase">{t.contact.message}</label>
                  <textarea 
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({...formData, message: e.target.value})}
                    required
                    className="w-full px-6 py-5 rounded-3xl border-none focus:outline-none focus:ring-4 focus:ring-yellow-400 bg-white/10 text-white placeholder-blue-300 backdrop-blur-md transition-all text-lg resize-none"
                    placeholder={lang === 'am' ? 'መልዕክትዎን እዚህ ይጻፉ...' : 'Type your message here...'}
                  ></textarea>
                </div>
                <button 
                  type="submit"
                  className="w-full flex items-center justify-center gap-4 bg-yellow-400 text-blue-900 font-black py-6 rounded-3xl hover:bg-yellow-300 transition-all transform hover:scale-[1.02] shadow-2xl group active:scale-95"
                >
                  <Send size={24} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
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
