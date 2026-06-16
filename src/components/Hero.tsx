import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex flex-col justify-between items-center text-center p-8 bg-luxury-cream overflow-hidden">
      {/* Background Graphic */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-10 filter blur-[1px]" 
        style={{ backgroundImage: `url('/src/assets/cover_bg.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-luxury-cream/50 to-luxury-cream" />

      {/* Top Border/Accent */}
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="w-full max-w-lg border-t border-luxury-gold/20 pt-6 relative z-10 flex flex-col items-center"
      >
        <p className="font-sans text-[10px] tracking-[0.3em] text-luxury-gold uppercase">
          Wedding Invitation
        </p>
      </motion.div>

      {/* Middle Names Section */}
      <div className="relative z-10 my-auto py-12 flex flex-col items-center">
        {/* Soft Floral Ornament icon */}
        <motion.div 
          initial={{ opacity: 0, rotate: -45, scale: 0.8 }}
          animate={{ opacity: 1, rotate: 0, scale: 1 }}
          transition={{ delay: 0.3, duration: 1, ease: "easeOut" }}
          className="w-16 h-16 mb-6 flex items-center justify-center text-luxury-gold"
        >
          <svg className="w-full h-full fill-current" viewBox="0 0 100 100">
            <path d="M50,15 C45,30 30,45 15,50 C30,55 45,70 50,85 C55,70 70,55 85,50 C70,45 55,30 50,15 Z" />
          </svg>
        </motion.div>

        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="font-serif text-5xl md:text-7xl text-luxury-emerald font-light tracking-wide leading-tight mb-4"
        >
          Elara &amp; Fino
        </motion.h2>

        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6, duration: 0.8 }}
          className="font-sans text-xs tracking-[0.2em] text-luxury-gold font-medium uppercase mb-2"
        >
          #ElaraFinoAlways
        </motion.p>

        <motion.p 
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7, duration: 0.8 }}
          className="font-sans text-sm text-luxury-sage/95 max-w-sm mt-4 leading-relaxed font-light"
        >
          "A successful marriage requires falling in love many times, always with the same person."
        </motion.p>
      </div>

      {/* Bottom Date Section */}
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.8, duration: 0.8 }}
        className="w-full max-w-lg border-b border-luxury-gold/20 pb-8 relative z-10 flex flex-col items-center"
      >
        <p className="font-serif text-2xl text-luxury-emerald tracking-wide mb-1 font-medium">
          04 . 04 . 2026
        </p>
        <p className="font-sans text-[10px] tracking-[0.25em] text-luxury-sage uppercase">
          Saturday • Singapore
        </p>
      </motion.div>
    </section>
  );
};
