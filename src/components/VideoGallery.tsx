import React, { useState } from 'react';
import { Play, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

interface VideoItem {
  id: string;
  title: string;
  preview: string;
  youtubeId: string;
}

export const VideoGallery: React.FC = () => {
  const [activeVideoId, setActiveVideoId] = useState<string | null>(null);

  const videos: VideoItem[] = [
    {
      id: 'pre-wedding',
      title: 'The Pre-Wedding',
      preview: '/src/assets/video-prewedding-preview.jpg',
      youtubeId: 'L5WBrU3ZQls'
    },
    {
      id: 'final-chapter',
      title: 'Final Chapter',
      preview: '/src/assets/video-finalchapter-preview.jpg',
      youtubeId: '0D1iAOicF_k'
    }
  ];

  return (
    <section className="py-20 px-8 bg-luxury-cream border-t border-luxury-gold/15 flex flex-col items-center">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 max-w-md"
      >
        <h3 className="font-serif text-3xl md:text-4xl text-luxury-emerald mb-4">
          Our Footage
        </h3>
        <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto" />
      </motion.div>

      {/* Video Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-8 max-w-4xl w-full">
        {videos.map((vid) => (
          <motion.div 
            key={vid.id}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center group"
          >
            {/* Video Thumbnail Wrapper */}
            <div className="relative w-full aspect-video rounded-lg overflow-hidden border border-luxury-gold/15 shadow-sm group cursor-pointer">
              <img 
                src={vid.preview} 
                alt={vid.title} 
                className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/35 transition-colors duration-300" />
              
              {/* Play Button Overlay */}
              <button 
                onClick={() => setActiveVideoId(vid.youtubeId)}
                className="absolute inset-0 m-auto w-14 h-14 rounded-full bg-white/90 hover:bg-luxury-gold text-luxury-emerald hover:text-white shadow-lg flex items-center justify-center transition-all duration-300 transform scale-90 group-hover:scale-100"
              >
                <Play className="w-6 h-6 fill-current translate-x-0.5" />
              </button>
            </div>

            {/* Video Title */}
            <h4 className="font-serif text-lg text-luxury-emerald font-semibold mt-4 text-center">
              {vid.title}
            </h4>
          </motion.div>
        ))}
      </div>

      {/* Fullscreen Video Modal */}
      <AnimatePresence>
        {activeVideoId && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 p-4"
            onClick={() => setActiveVideoId(null)}
          >
            <button 
              className="absolute top-6 right-6 text-white hover:text-luxury-gold transition-colors z-50"
              onClick={() => setActiveVideoId(null)}
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
                src={`https://www.youtube.com/embed/${activeVideoId}?autoplay=1`}
                title="Youtube video player"
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
