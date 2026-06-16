import React from 'react';
import { Camera } from 'lucide-react';
import { motion } from 'framer-motion';

export const InstagramFilter: React.FC = () => {
  const filterUrl = "https://www.instagram.com/ar/933715080836492/";

  return (
    <section className="py-20 px-8 bg-luxury-cream border-t border-luxury-gold/15 flex flex-col items-center">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 max-w-md"
      >
        <h3 className="font-serif text-3xl md:text-4xl text-luxury-emerald mb-4">
          Wedding Filter
        </h3>
        <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto mb-6" />
        <p className="font-sans text-xs text-luxury-sage leading-relaxed">
          Capture your moment while attending our wedding by using the Instagram filter below.
        </p>
      </motion.div>

      {/* Image Preview & Link */}
      <motion.div 
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-sm flex flex-col items-center bg-white border border-luxury-gold/20 p-6 rounded-lg shadow-sm"
      >
        {/* Preview image */}
        <div className="w-full aspect-square rounded-lg overflow-hidden border border-luxury-gold/15 shadow-inner mb-6 relative group">
          <img 
            src="/src/assets/ig-filter-preview.webp" 
            alt="Instagram Filter Preview" 
            className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
          />
          {/* Overlay effect */}
          <div className="absolute inset-0 bg-luxury-emerald/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>

        {/* Use Filter Button */}
        <a 
          href={filterUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-emerald font-sans text-xs font-semibold uppercase tracking-wider rounded-full shadow transition-all duration-300"
        >
          <Camera className="w-4 h-4" />
          Use Filter
        </a>
      </motion.div>
    </section>
  );
};
