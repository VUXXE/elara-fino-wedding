import React from 'react';
import { Instagram } from 'lucide-react';
import { motion } from 'framer-motion';

export const Profiles: React.FC = () => {
  return (
    <section className="py-20 px-8 bg-luxury-cream flex flex-col items-center">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 max-w-md"
      >
        <h3 className="font-serif text-3xl md:text-4xl text-luxury-emerald mb-4">
          The Bride &amp; Groom
        </h3>
        <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto mb-4" />
        <p className="font-sans text-xs text-luxury-sage leading-relaxed">
          With joy in our hearts, we invite you to share in our celebration.
        </p>
      </motion.div>

      {/* Profiles Container */}
      <div className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-center gap-16 md:gap-12 lg:gap-24">
        {/* Groom Profile */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center w-full max-w-sm"
        >
          {/* Framed Picture with Laurel Overlay */}
          <div className="relative w-64 h-64 mb-8">
            {/* The Groom Image cropped in circle */}
            <div className="absolute inset-[15px] rounded-full overflow-hidden border border-luxury-gold/15 bg-luxury-cream shadow-inner">
              <img 
                src="/src/assets/groom.png" 
                alt="Fino Felix" 
                className="w-full h-full object-cover" 
              />
            </div>
            {/* Gold Laurel Frame on top */}
            <img 
              src="/src/assets/frame-couple.png" 
              alt="Laurel Frame" 
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
            />
            
            {/* Little gold ribbon/badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-luxury-emerald border border-luxury-gold text-luxury-gold font-serif px-4 py-0.5 rounded-full text-sm z-20">
              Fino
            </div>
          </div>

          <h4 className="font-serif text-2xl text-luxury-emerald mb-2 font-semibold">
            Fino Felix
          </h4>
          <p className="font-sans text-xs text-luxury-sage leading-relaxed mb-4">
            Son of Mr. Leon Jeremy <br /> &amp; Mrs. Fera Tea
          </p>
          <a
            href="https://www.instagram.com/katsudoto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-luxury-gold hover:text-luxury-emerald font-medium transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            @katsudoto
          </a>
        </motion.div>

        {/* Separator '&' */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="font-signature text-6xl text-luxury-gold md:my-auto"
        >
          &amp;
        </motion.div>

        {/* Bride Profile */}
        <motion.div 
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="flex flex-col items-center text-center w-full max-w-sm"
        >
          {/* Framed Picture with Laurel Overlay */}
          <div className="relative w-64 h-64 mb-8">
            {/* The Bride Image cropped in circle */}
            <div className="absolute inset-[15px] rounded-full overflow-hidden border border-luxury-gold/15 bg-luxury-cream shadow-inner">
              <img 
                src="/src/assets/bride.png" 
                alt="Elara Nadia" 
                className="w-full h-full object-cover" 
              />
            </div>
            {/* Gold Laurel Frame on top */}
            <img 
              src="/src/assets/frame-couple.png" 
              alt="Laurel Frame" 
              className="absolute inset-0 w-full h-full object-contain pointer-events-none z-10"
            />

            {/* Little gold ribbon/badge */}
            <div className="absolute -bottom-2 left-1/2 -translate-x-1/2 bg-luxury-emerald border border-luxury-gold text-luxury-gold font-serif px-4 py-0.5 rounded-full text-sm z-20">
              Elara
            </div>
          </div>

          <h4 className="font-serif text-2xl text-luxury-emerald mb-2 font-semibold">
            Elara Nadia
          </h4>
          <p className="font-sans text-xs text-luxury-sage leading-relaxed mb-4">
            Daughter of Mr. Herry Smith <br /> &amp; Mrs. Grace Ivora
          </p>
          <a
            href="https://www.instagram.com/katsudoto"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1 text-xs text-luxury-gold hover:text-luxury-emerald font-medium transition-colors"
          >
            <Instagram className="w-3.5 h-3.5" />
            @katsudoto
          </a>
        </motion.div>
      </div>
    </section>
  );
};
