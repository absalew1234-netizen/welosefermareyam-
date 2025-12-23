
import React, { useState } from 'react';
import { translations } from '../translations';
import { Language } from '../types';
import { ChevronLeft, ChevronRight, Camera, ImageIcon } from 'lucide-react';

interface GalleryImage {
  src: string;
  label: string;
  desc: string;
}

interface Album {
  id: string;
  title: string;
  titleAm: string;
  images: GalleryImage[];
}

const CarouselCard: React.FC<{ album: Album; lang: Language }> = ({ album, lang }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev + 1) % album.images.length);
  };

  const prevSlide = (e: React.MouseEvent) => {
    e.stopPropagation();
    setCurrentIndex((prev) => (prev - 1 + album.images.length) % album.images.length);
  };

  const currentImage = album.images[currentIndex];

  return (
    <div className="group relative bg-white rounded-[2.5rem] shadow-sm hover:shadow-2xl transition-all duration-500 overflow-hidden border border-gray-100 flex flex-col h-full">
      {/* Image Container */}
      <div className="relative aspect-[4/3] overflow-hidden">
        {/* Photos with smooth transition */}
        <div className="w-full h-full relative">
          {album.images.map((img, idx) => (
            <img
              key={idx}
              src={img.src}
              className={`absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-in-out ${
                idx === currentIndex ? 'opacity-100 scale-100' : 'opacity-0 scale-110'
              }`}
              alt={img.label}
            />
          ))}
        </div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-t from-blue-900/80 via-transparent to-transparent opacity-60"></div>

        {/* Navigation Controls - Only show if multiple images */}
        {album.images.length > 1 && (
          <>
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all opacity-0 group-hover:opacity-100 z-20"
              aria-label="Previous photo"
            >
              <ChevronLeft size={24} />
            </button>
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center text-white hover:bg-white hover:text-blue-900 transition-all opacity-0 group-hover:opacity-100 z-20"
              aria-label="Next photo"
            >
              <ChevronRight size={24} />
            </button>
          </>
        )}

        {/* Indicator Dots */}
        {album.images.length > 1 && (
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex gap-1.5 z-20">
            {album.images.map((_, idx) => (
              <div
                key={idx}
                className={`h-1.5 rounded-full transition-all duration-300 ${
                  idx === currentIndex ? 'w-6 bg-yellow-400' : 'w-1.5 bg-white/50'
                }`}
              />
            ))}
          </div>
        )}

        {/* Counter Tag */}
        <div className="absolute top-6 left-6 bg-blue-900/80 backdrop-blur-md text-white px-3 py-1 rounded-full text-xs font-black z-20 border border-white/20">
          {currentIndex + 1} / {album.images.length}
        </div>
      </div>

      {/* Content Area */}
      <div className="p-8 flex-grow flex flex-col justify-between">
        <div>
          <div className="flex items-center gap-2 mb-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 flex items-center justify-center">
              <Camera size={16} className="text-blue-600" />
            </div>
            <span className="text-xs font-black text-blue-400 uppercase tracking-widest">
              {lang === 'am' ? album.titleAm : album.title}
            </span>
          </div>
          <h3 className="text-2xl font-black text-blue-900 mb-3 group-hover:text-blue-600 transition-colors">
            {currentImage.label}
          </h3>
          <p className="text-gray-600 leading-relaxed font-light">
            {currentImage.desc}
          </p>
        </div>
      </div>
    </div>
  );
};

const Gallery: React.FC<{ lang: Language }> = ({ lang }) => {
  const t = translations[lang];

  // Organised into "Albums" to allow carousel navigation within each item
  const albums: Album[] = [
    {
      id: 'architecture',
      title: 'Architecture',
      titleAm: 'ህንፃ ዲዛይን',
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1548625361-195fe6144df3?q=80&w=2000&auto=format&fit=crop', 
          label: lang === 'am' ? 'የቤተክርስቲያኑ ዲዛይን (3D)' : 'Church Render (3D)',
          desc: lang === 'am' ? 'የወደፊት የቤተክርስቲያኑ ውጫዊ እይታ' : 'A vision of the future exterior structure'
        },
        { 
          src: 'https://images.unsplash.com/photo-1510255370214-7292723c0422?q=80&w=1000&auto=format&fit=crop', 
          label: lang === 'am' ? 'ጎንዮሽ እይታ' : 'Side Perspective',
          desc: lang === 'am' ? 'ከአካባቢው ጋር ያለው ተስማሚነት' : 'Harmonious view with the surroundings'
        }
      ]
    },
    {
      id: 'icons',
      title: 'Sacred Icons',
      titleAm: 'ቅዱሳን አዶዎች',
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1590076214667-c0f33b98c427?q=80&w=1000&auto=format&fit=crop', 
          label: lang === 'am' ? 'የብሥራቱ አዶ' : 'Annunciation Icon',
          desc: lang === 'am' ? 'ለቅድስት ማርያም እና ለቅዱስ ገብርኤል' : 'Venerable Icon of St. Mary & St. Gabriel'
        },
        { 
          src: 'https://images.unsplash.com/photo-1574621511211-f173f40f3531?q=80&w=1000&auto=format&fit=crop', 
          label: lang === 'am' ? 'የቅዱሳን ስዕላት' : 'Sanctuary Murals',
          desc: lang === 'am' ? 'በውስጥ የሚገኙ ቅዱሳን ምስሎች' : 'Holy paintings within the sanctuary'
        }
      ]
    },
    {
      id: 'community',
      title: 'Community',
      titleAm: 'የማህበረሰብ ሕይወት',
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&w=1000&auto=format&fit=crop', 
          label: lang === 'am' ? 'የማህበረሰቡ ሰልፍ' : 'Congregation',
          desc: lang === 'am' ? 'ምዕመናን በበዓል ቀን' : 'Community gathering for major feast'
        },
        { 
          src: 'https://images.unsplash.com/photo-1510255370214-7292723c0422?q=80&w=1000&auto=format&fit=crop', 
          label: lang === 'am' ? 'የጥምቀት በዓል' : 'Epiphany',
          desc: lang === 'am' ? 'የጥምቀት ክብረ በዓል' : 'Vibrant celebration of Timkat'
        }
      ]
    },
    {
      id: 'history',
      title: 'Historical',
      titleAm: 'ታሪካዊ ምስሎች',
      images: [
        { 
          src: 'https://images.unsplash.com/photo-1544923246-77307dd654ca?q=80&w=1000&auto=format&fit=crop', 
          label: lang === 'am' ? 'ታሪካዊው ህንፃ' : 'Original Chapel',
          desc: lang === 'am' ? 'የቀድሞው ባለቀለም ቤተክርስቲያን' : 'The original colorful building that served the parish'
        }
      ]
    }
  ];

  return (
    <div className="py-24 bg-gray-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-20">
          <div className="flex justify-center mb-6">
            <div className="w-16 h-16 bg-blue-900 rounded-2xl flex items-center justify-center text-yellow-400 shadow-xl border border-blue-800">
              <ImageIcon size={32} />
            </div>
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-blue-900 mb-6 tracking-tight">
            {t.gallery.title}
          </h1>
          <div className="w-40 h-2.5 bg-gradient-to-r from-yellow-400 via-red-500 to-blue-600 mx-auto rounded-full"></div>
          <p className="mt-8 text-gray-600 max-w-3xl mx-auto text-xl font-light leading-relaxed">
            {lang === 'am' 
              ? 'የቤተክርስቲያናችንን ታሪክ፣ ውበት እና የማህበረሰቡን እንቅስቃሴዎች በፎቶዎች ይመልከቱ። በእያንዳንዱ ምስል ላይ የቀስት ምልክቶችን በመጠቀም ተጨማሪ ፎቶዎችን ማየት ይችላሉ።' 
              : 'Browse our parish history and community through interactive carousels. Navigate through individual albums to see more photos from each category.'}
          </p>
        </div>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {albums.map((album) => (
            <CarouselCard key={album.id} album={album} lang={lang} />
          ))}
        </div>

        {/* Closing Quote/Call to Action */}
        <div className="mt-24 text-center bg-blue-900 text-white p-16 rounded-[3rem] shadow-2xl relative overflow-hidden">
           <div className="absolute top-0 left-0 w-64 h-64 bg-blue-800 rounded-full -ml-32 -mt-32 opacity-50"></div>
           <div className="relative z-10">
              <h4 className="text-3xl font-black mb-6">
                {lang === 'am' ? 'መንፈሳዊ ውበት' : 'Spiritual Beauty'}
              </h4>
              <p className="text-blue-100 text-lg max-w-2xl mx-auto italic font-light">
                {lang === 'am' 
                  ? '"እግዚአብሔር በቅዱሳኑ ላይ ድንቅ ነው!" - መዝሙረ ዳዊት 68፡35' 
                  : '"Awesome is God in his sanctuary; the God of Israel." - Psalm 68:35'}
              </p>
           </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
