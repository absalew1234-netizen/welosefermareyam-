
import React from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { Code, User, Calendar, Briefcase, Award, Github, Linkedin, Mail } from 'lucide-react';

const Developer: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const dev = t.developer;

  // Using a high-quality placeholder that represents a young developer
  const devPhoto = "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1000&auto=format&fit=crop";

  return (
    <div className="py-24 bg-white dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <div className="inline-flex items-center justify-center w-20 h-20 bg-blue-600 rounded-3xl text-white shadow-2xl mb-6 transform rotate-3 hover:rotate-0 transition-transform">
            <Code size={40} />
          </div>
          <h1 className="text-4xl md:text-6xl font-black text-blue-900 dark:text-blue-400 tracking-tight mb-4">
            {dev.title}
          </h1>
          <div className="w-24 h-1.5 bg-yellow-400 mx-auto rounded-full"></div>
        </div>

        <div className="grid md:grid-cols-5 gap-12 items-start">
          {/* Photo Section */}
          <div className="md:col-span-2 relative group">
            <div className="absolute -inset-4 bg-gradient-to-tr from-blue-600 to-yellow-400 rounded-[3rem] blur-2xl opacity-20 group-hover:opacity-40 transition-opacity"></div>
            <div className="relative bg-white dark:bg-gray-800 p-4 rounded-[3rem] shadow-2xl border border-gray-100 dark:border-gray-700">
              <img 
                src={devPhoto} 
                alt="Absalew Belayneh" 
                className="rounded-[2.5rem] w-full aspect-[4/5] object-cover shadow-inner grayscale hover:grayscale-0 transition-all duration-700"
              />
              <div className="absolute bottom-10 left-1/2 -translate-x-1/2 bg-blue-900/90 backdrop-blur-md text-white px-6 py-3 rounded-2xl shadow-xl border border-white/20 whitespace-nowrap">
                <span className="text-xs font-black tracking-widest uppercase">{dev.role}</span>
              </div>
            </div>
          </div>

          {/* Info Section */}
          <div className="md:col-span-3 space-y-8">
            <div className="bg-gray-50 dark:bg-gray-800 p-8 md:p-12 rounded-[3rem] border border-gray-100 dark:border-gray-700 shadow-sm">
              <div className="space-y-6">
                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/40 rounded-2xl flex items-center justify-center text-blue-600 dark:text-blue-400">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-blue-500 uppercase tracking-widest mb-1">{lang === 'am' ? 'ስም' : 'NAME'}</p>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white">{dev.name.split('፡ ')[1] || 'Absalew Belayneh'}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-yellow-100 dark:bg-yellow-900/30 rounded-2xl flex items-center justify-center text-yellow-600 dark:text-yellow-400">
                    <Calendar size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-yellow-600 uppercase tracking-widest mb-1">{lang === 'am' ? 'ዕድሜ' : 'AGE'}</p>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white">{dev.age.split('፡ ')[1] || '17'}</h3>
                  </div>
                </div>

                <div className="flex items-center gap-6">
                  <div className="w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-2xl flex items-center justify-center text-red-600 dark:text-red-400">
                    <Briefcase size={24} />
                  </div>
                  <div>
                    <p className="text-[10px] font-black text-red-500 uppercase tracking-widest mb-1">{lang === 'am' ? 'የሥራ ልምድ' : 'EXPERIENCE'}</p>
                    <h3 className="text-2xl font-black text-gray-900 dark:text-white">{dev.experience.split('፡ ')[1] || '3 Years'}</h3>
                  </div>
                </div>
              </div>

              <div className="mt-10 pt-10 border-t border-gray-200 dark:border-gray-700">
                <div className="flex items-center gap-3 mb-4">
                  <Award className="text-blue-600" size={20} />
                  <h4 className="font-black text-blue-900 dark:text-blue-400 uppercase tracking-widest text-sm">{lang === 'am' ? 'ስለ እኔ' : 'Biography'}</h4>
                </div>
                <p className="text-gray-600 dark:text-gray-400 leading-relaxed text-lg font-light italic">
                  "{dev.bio}"
                </p>
              </div>
            </div>

            {/* Social Links */}
            <div className="flex flex-wrap gap-4">
              <a href="#" className="flex items-center gap-3 bg-gray-900 text-white px-6 py-4 rounded-2xl hover:bg-black transition-all shadow-lg hover:-translate-y-1">
                <Github size={20} />
                <span className="font-black text-sm uppercase tracking-widest">Github</span>
              </a>
              <a href="#" className="flex items-center gap-3 bg-[#0077b5] text-white px-6 py-4 rounded-2xl hover:bg-[#00669c] transition-all shadow-lg hover:-translate-y-1">
                <Linkedin size={20} />
                <span className="font-black text-sm uppercase tracking-widest">LinkedIn</span>
              </a>
              <a href="mailto:absalewbelayneh@gmail.com" className="flex items-center gap-3 bg-red-600 text-white px-6 py-4 rounded-2xl hover:bg-red-700 transition-all shadow-lg hover:-translate-y-1">
                <Mail size={20} />
                <span className="font-black text-sm uppercase tracking-widest">Email</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Developer;
