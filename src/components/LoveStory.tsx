import React from 'react';
import { motion } from 'framer-motion';

interface StoryItem {
  title: string;
  date: string;
  desc: string;
  image: string;
}

export const LoveStory: React.FC = () => {
  const stories: StoryItem[] = [
    {
      title: "First Sight",
      date: "",
      desc: "Elera and Fino first crossed paths in a quiet garden in the heart of the city. Surrounded by trees, fresh air, and calm moments, their simple greetings slowly turned into meaningful conversations.",
      image: "/src/assets/story1.png"
    },
    {
      title: "We're Forever",
      date: "",
      desc: "One day, in the same garden that had seen the beginning of their story, Fino shared his heartfelt intention. With a warm smile and sincere belief, Elera said yes.",
      image: "/src/assets/story2.png"
    }
  ];

  return (
    <section className="py-20 px-8 bg-luxury-cream border-y border-luxury-gold/15 flex flex-col items-center">
      {/* Title */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="text-center mb-16 max-w-md"
      >
        <h3 className="font-serif text-3xl md:text-4xl text-luxury-emerald mb-4">
          Our Love Story
        </h3>
        <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto" />
      </motion.div>

      {/* Story List */}
      <div className="space-y-12 max-w-2xl w-full">
        {stories.map((story, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.15 }}
            className="bg-white border border-luxury-gold/20 rounded-lg shadow-sm hover:shadow-md overflow-hidden flex flex-col"
          >
            {/* Story Image */}
            <div className="h-64 md:h-80 w-full overflow-hidden border-b border-luxury-gold/15 relative">
              <img 
                src={story.image} 
                alt={story.title} 
                className="w-full h-full object-cover" 
              />
              {/* Overlay styling */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent" />
            </div>

            {/* Content Details */}
            <div className="p-8 relative">
              {/* Small top-right tag */}
              {story.date && (
                <span className="absolute top-6 right-8 font-sans text-[10px] text-luxury-gold font-bold tracking-wider uppercase">
                  {story.date}
                </span>
              )}

              <h4 className="font-serif text-2xl text-luxury-emerald mb-3 font-semibold">
                {story.title}
              </h4>

              <p className="font-sans text-sm text-luxury-sage leading-relaxed">
                {story.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
};
