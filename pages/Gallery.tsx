
import React, { useState } from 'react';
import { translations } from '../translations';
import { Language, GalleryAlbumTranslation } from '../types';
import { ChevronLeft, ChevronRight, Camera, ImageIcon, Loader2 } from 'lucide-react';

const albumImages = [
  [
    'https://images.unsplash.com/photo-1548625361-195fe6144df3?q=80&w=2000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1510255370214-7292723c0422?q=80&w=1000&auto=format&fit=crop'
  ],
  [
    'https://images.unsplash.com/photo-1590076214667-c0f33b98c427?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1574621511211-f173f40f3531?q=80&w=1000&auto=format&fit=crop'
  ],
  [
    'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop',
    'https://images.unsplash.com/photo-1510255370214-7292723c0422?q=80&w=1000&auto=format&fit=crop'
  ],
  [
    'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop'
  ]
];

const CarouselCard: React.FC<{ 
  albumAm: GalleryAlbumTranslation; 
  albumEn: GalleryAlbumTranslation; 
  images: string[]; 
  lang: Language 
}> = ({ albumAm, albumEn, images, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [loadedImages, setLoadedImages] = useState<Record<string, boolean>>({});

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => ({ ...prev, [src]: true }));
  };

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  const currentAm = albumAm.images[currentIndex];
  const currentEn = albumEn.images[currentIndex];
  const currentImageSrc = images[currentIndex];
  const isCurrentLoaded = !!loadedImages[currentImageSrc];

  return (
    <div className="group bg-white dark:bg-gray-800 rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 dark:border-gray-700 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden bg-gray-100 dark:bg-gray-900">
        {!isCurrentLoaded && (
          <div className="absolute inset-0 flex flex-col items-center justify-center z-10 bg-gray-100 dark:bg-gray-900">
            <Loader2 className="w-10 h-10 text-blue-600 dark:text-blue-400 animate-spin mb-2" />
            <span className="text-[10px] font-black tracking-widest text-gray-400 dark:text-gray-500 uppercase">
              {lang === 'am' ? 'በመጫን ላይ...' : 'Loading...'}
            </span>
          </div>
        )}

        <div className="w-full h-full relative">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              onLoad={() => handleImageLoad(src)}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                idx === currentIndex && loadedImages[src] ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              alt={currentAm.label}
            />
          ))}
        </div>

        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-40 pointer-events-none"></div>

        {images.length > 1 && (
          <>
            <button onClick={prevSlide} className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all opacity-0 group-hover:opacity-100 z-20">
              <ChevronLeft size={24} />
            </button>
            <button onClick={nextSlide} className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all opacity-0 group-hover:opacity-100 z-20">
              <ChevronRight size={24} />
            </button>
          </>
        )}

        <div className="absolute top-6 left-6 bg-blue-900/80 dark:bg-black/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-[10px] font-black z-20 border border-white/20">
          {currentIndex + 1} / {images.length}
        </div>

        {/* Amharic Caption Overlay */}
        <div className="absolute bottom-6 left-6 right-6 z-20 pointer-events-none transition-all duration-500 transform translate-y-0 opacity-100 group-hover:-translate-y-1">
          <div className="bg-blue-900/40 backdrop-blur-md border border-white/10 p-3 rounded-2xl inline-block max-w-[80%] shadow-2xl">
            <p className="text-white font-black text-xs md:text-sm leading-tight drop-shadow-md">
              {currentAm.label}
            </p>
          </div>
        </div>
      </div>

      {/* Content Area - Both Languages visible */}
      <div className="p-8 flex-grow flex flex-col">
        <div className="flex items-center gap-2 mb-4">
          <div className="w-8 h-8 rounded-lg bg-blue-50 dark:bg-blue-900/30 flex items-center justify-center">
            <Camera size={16} className="text-blue-600 dark:text-blue-400" />
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-black text-blue-500 dark:text-blue-400 uppercase tracking-widest leading-none">
              {albumAm.title}
            </span>
            <span className="text-[9px] font-bold text-gray-400 dark:text-gray-500 uppercase tracking-widest italic leading-none mt-1">
              {albumEn.title}
            </span>
          </div>
        </div>

        <div className="space-y-4">
          <div>
            <h3 className="text-xl md:text-2xl font-black text-blue-900 dark:text-white mb-0.5 leading-tight">
              {currentAm.label}
            </h3>
            <h4 className="text-base md:text-lg font-bold text-blue-600 dark:text-blue-400 italic leading-tight">
              {currentEn.label}
            </h4>
          </div>

          <div className="space-y-3 pt-3 border-t border-gray-100 dark:border-gray-700">
            <p className="text-gray-700 dark:text-gray-300 leading-relaxed font-medium text-sm md:text-base">
              {currentAm.desc}
            </p>
            <p className="text-gray-500 dark:text-gray-400 leading-relaxed font-light text-xs md:text-sm italic">
              {currentEn.desc}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];
  const albumsAm = translations['am'].gallery.albums;
  const albumsEn = translations['en'].gallery.albums;

  return (
    <div className="py-24 bg-gray-50 dark:bg-gray-900 min-h-screen transition-colors duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-900 dark:bg-black rounded-2xl flex items-center justify-center text-yellow-400 shadow-xl border border-blue-800">
              <ImageIcon size={32} />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-blue-900 dark:text-blue-400 mb-6 tracking-tight">
            {t.gallery.title}
          </h1>
          <div className="w-40 h-2 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-8 text-gray-600 dark:text-gray-400 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            {t.gallery.description}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {albumsAm.map((albumAm, index) => (
            <CarouselCard 
              key={index} 
              albumAm={albumAm} 
              albumEn={albumsEn[index]}
              images={albumImages[index]} 
              lang={lang}
            />
          ))}
        </div>

        <div className="mt-24 text-center bg-blue-900 dark:bg-black text-white p-16 rounded-[3rem] shadow-2xl relative overflow-hidden transition-colors">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 dark:bg-gray-900 rounded-full -ml-32 -mt-32 opacity-50"></div>
           <div className="relative z-10">
              <h4 className="text-3xl font-black mb-6">
                {t.gallery.quoteTitle}
              </h4>
              <p className="text-blue-100 dark:text-gray-400 text-lg max-w-2xl mx-auto italic font-light">
                "{t.gallery.quote}" — {t.gallery.quoteSource}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
