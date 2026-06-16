import React from 'react';
import { MailOpen } from 'lucide-react';
import { motion } from 'framer-motion';

interface OpeningOverlayProps {
  onOpen: () => void;
  isOpen: boolean;
}

export const OpeningOverlay: React.FC<OpeningOverlayProps> = ({ onOpen, isOpen }) => {
  if (!isOpen) return null;

  return (
    <motion.div 
      initial={{ opacity: 1 }}
      exit={{ opacity: 0, y: -100 }}
      transition={{ duration: 0.8, ease: [0.77, 0, 0.175, 1] }}
      className="fixed inset-0 z-50 flex items-center justify-center bg-luxury-emerald select-none"
    >
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center opacity-40 mix-blend-overlay filter blur-[2px]" 
        style={{ backgroundImage: `url('/src/assets/cover_bg.png')` }}
      />
      <div className="absolute inset-0 bg-gradient-to-t from-luxury-emerald via-transparent to-luxury-emerald opacity-90" />
      
      {/* Content Container */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.2, duration: 0.8 }}
        className="relative z-10 flex flex-col items-center justify-center text-center px-6 max-w-md"
      >
        {/* Frame Accent */}
        <div className="border border-luxury-gold/30 p-8 md:p-12 rounded-lg backdrop-blur-sm bg-luxury-emerald/40 relative">
          {/* Small corner flourishes */}
          <div className="absolute top-2 left-2 w-4 h-4 border-t border-l border-luxury-gold" />
          <div className="absolute top-2 right-2 w-4 h-4 border-t border-r border-luxury-gold" />
          <div className="absolute bottom-2 left-2 w-4 h-4 border-b border-l border-luxury-gold" />
          <div className="absolute bottom-2 right-2 w-4 h-4 border-b border-r border-luxury-gold" />

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.6 }}
            className="font-sans text-xs tracking-[0.2em] text-luxury-gold uppercase mb-4"
          >
            The Wedding Invitation
          </motion.p>

          <motion.h1 
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.6 }}
            className="font-serif text-5xl md:text-6xl text-luxury-cream leading-tight mb-2"
          >
            Elara &amp; Fino
          </motion.h1>

          <motion.p 
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.6 }}
            className="font-sans text-sm text-luxury-goldlight/80 italic mb-8"
          >
            Saturday, April 04th 2026
          </motion.p>

          <div className="w-12 h-[1px] bg-luxury-gold/30 mx-auto mb-8" />

          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.8 }}
            className="font-sans text-xs text-luxury-cream/75 leading-relaxed mb-8"
          >
            We cordially invite you to join us in celebrating our wedding ceremony.
          </motion.p>

          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={onOpen}
            className="inline-flex items-center gap-2 px-6 py-3 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-emerald font-sans text-xs font-semibold tracking-wider uppercase rounded-full shadow-lg hover:shadow-luxury-gold/20 transition-all duration-300"
          >
            <MailOpen className="w-4 h-4" />
            Open Invitation
          </motion.button>
        </div>
      </motion.div>
    </motion.div>
  );
};
