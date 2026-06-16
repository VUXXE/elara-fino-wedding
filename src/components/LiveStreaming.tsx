import React, { useState } from 'react';
import { Play, X, Tv } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export const LiveStreaming: React.FC = () => {
  const [showModal, setShowModal] = useState(false);
  const streamUrl = "https://www.youtube.com/watch?v=1FKTCrpw7VQ&list=RD1FKTCrpw7VQ&start_radio=1";
  const youtubeId = "1FKTCrpw7VQ";

  return (
    <section className="py-20 px-8 bg-luxury-cream border-t border-luxury-gold/15 flex flex-col items-center">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-10 max-w-lg"
      >
        <h3 className="font-serif text-3xl md:text-4xl text-luxury-emerald mb-6">
          Live Streaming
        </h3>
        <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto mb-6" />
        <p className="font-sans text-xs text-luxury-sage leading-relaxed whitespace-pre-line">
          {"Though distance may keep us apart,\nyour prayers and virtual presence mean the world to us 🤍\n\nThank you for your love, support, and kind wishes\nas we begin this new chapter together."}
        </p>
      </motion.div>

      {/* Video Placeholder Card */}
      <motion.div 
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white border border-luxury-gold/20 p-6 rounded-lg shadow-sm flex flex-col items-center"
      >
        <div 
          onClick={() => setShowModal(true)}
          className="relative w-full aspect-video rounded-lg overflow-hidden border border-luxury-gold/15 shadow-inner cursor-pointer group mb-6"
        >
          <img 
            src="/src/assets/live-streaming-preview.jpg" 
            alt="Live Stream Preview" 
            className="w-full h-full object-cover transition-transform duration-75 group-hover:scale-102"
          />
          <div className="absolute inset-0 bg-black/15 group-hover:bg-black/25 transition-colors duration-300" />
          
          {/* Play Button Overlay */}
          <button 
            className="absolute inset-0 m-auto w-12 h-12 rounded-full bg-white/90 hover:bg-luxury-gold text-luxury-emerald hover:text-white shadow-lg flex items-center justify-center transition-all duration-300"
          >
            <Play className="w-5 h-5 fill-current translate-x-0.5" />
          </button>
        </div>

        {/* Action Button */}
        <a 
          href={streamUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-flex items-center gap-2 px-8 py-3 bg-luxury-emerald hover:bg-luxury-emerald/90 text-white font-sans text-xs font-semibold uppercase tracking-wider rounded-full shadow transition-all duration-300"
        >
          <Tv className="w-4 h-4" />
          Open Link
        </a>
      </motion.div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {showModal && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setShowModal(false)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-luxury-gold transition-colors z-50"
              onClick={() => setShowModal(false)}
            >
              <X className="w-8 h-8" />
            </button>

            <motion.div 
              initial={{ scale: 0.95, y: 20 }}
              animate={{ scale: 1, y: 0 }}
              exit={{ scale: 0.95, y: 20 }}
              transition={{ duration: 0.3 }}
              className="w-full max-w-4xl aspect-video rounded-lg overflow-hidden border border-luxury-gold/30 bg-black shadow-2xl relative z-10"
              onClick={(e) => e.stopPropagation()}
            >
              <iframe 
                src={`https://www.youtube.com/embed/${youtubeId}?autoplay=1`}
                title="Live stream video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowFullScreen
                className="w-full h-full"
              />
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
