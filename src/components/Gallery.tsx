import React, { useState } from 'react';
import { X, ZoomIn } from 'lucide-react';

export const Gallery: React.FC = () => {
  const images = [
    { src: '/src/assets/gallery1.png', alt: 'Moment 1' },
    { src: '/src/assets/gallery2.png', alt: 'Moment 2' },
    { src: '/src/assets/gallery3.png', alt: 'Moment 3' },
    { src: '/src/assets/gallery4.png', alt: 'Moment 4' }
  ];

  const [activeImage, setActiveImage] = useState<string | null>(null);

  const openLightbox = (src: string) => {
    setActiveImage(src);
  };

  const closeLightbox = () => {
    setActiveImage(null);
  };

  return (
    <section className="py-20 px-8 bg-luxury-cream flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-16 max-w-md">
        <h3 className="font-serif text-3xl md:text-4xl text-luxury-emerald mb-4">
          Our Moments
        </h3>
        <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto" />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-2 gap-4 max-w-4xl w-full">
        {images.map((img, index) => (
          <div 
            key={index} 
            className="relative overflow-hidden aspect-square rounded-lg border border-luxury-gold/15 group cursor-pointer"
            onClick={() => openLightbox(img.src)}
          >
            <img 
              src={img.src} 
              alt={img.alt} 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            {/* Hover overlay */}
            <div className="absolute inset-0 bg-luxury-emerald/30 opacity-0 group-hover:opacity-100 flex items-center justify-center transition-all duration-300">
              <div className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-luxury-emerald shadow-lg transform translate-y-4 group-hover:translate-y-0 transition-transform">
                <ZoomIn className="w-5 h-5" />
              </div>
            </div>
          </div>
        ))}
      </div>

      {/* Lightbox Modal */}
      {activeImage && (
        <div 
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-4 transition-opacity duration-300"
          onClick={closeLightbox}
        >
          <button 
            className="absolute top-6 right-6 text-white hover:text-luxury-gold transition-colors"
            onClick={closeLightbox}
          >
            <X className="w-8 h-8" />
          </button>
          
          <div 
            className="max-w-4xl max-h-[85vh] overflow-hidden rounded-lg border border-luxury-gold/30 bg-luxury-emerald"
            onClick={(e) => e.stopPropagation()}
          >
            <img 
              src={activeImage} 
              alt="Enlarged gallery item" 
              className="max-w-full max-h-[80vh] object-contain"
            />
          </div>
        </div>
      )}
    </section>
  );
};
