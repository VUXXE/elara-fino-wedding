import React from 'react';
import { motion } from 'framer-motion';

interface TimelineEvent {
  time: string;
  title: string;
  desc: string;
}

export const Timeline: React.FC = () => {
  const events: TimelineEvent[] = [
    { time: "11:00 AM", title: "Grand Entrance", desc: "Welcoming the newlyweds Elara & Fino to the wedding reception." },
    { time: "11:15 AM", title: "First Dance Bride & Groom", desc: "The newlyweds take the floor for their romantic first dance." },
    { time: "11:45 AM", title: "Cut Cake", desc: "A sweet celebration ceremony representing their shared future." },
    { time: "12:15 PM", title: "Games", desc: "Fostering joy and capturing memories with warm toasts and interactive games." },
    { time: "12:30 PM", title: "Grand Exit", desc: "A magical final farewell to guests as the celebrations conclude." }
  ];

  // Framer Motion Variants for Staggered List
  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } 
    }
  };

  return (
    <section className="py-20 px-8 bg-luxury-cream border-y border-luxury-gold/15 flex flex-col items-center">
      {/* Title */}
      <motion.h3 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="font-serif text-3xl text-luxury-emerald text-center mb-12"
      >
        Wedding Rundown
      </motion.h3>

      {/* Timeline Grid */}
      <motion.div 
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, margin: "-100px" }}
        className="relative border-l border-luxury-gold/30 max-w-lg w-full ml-4 md:mx-auto pl-8 space-y-12"
      >
        {events.map((event, index) => (
          <motion.div 
            key={index} 
            variants={itemVariants}
            className="relative group"
          >
            {/* Timeline dot */}
            <div className="absolute -left-[37px] top-1.5 bg-luxury-cream border border-luxury-gold w-4 h-4 rounded-full flex items-center justify-center group-hover:bg-luxury-gold transition-colors duration-300">
              <div className="w-1.5 h-1.5 bg-luxury-emerald rounded-full" />
            </div>

            {/* Time stamp */}
            <span className="block font-sans text-xs font-semibold tracking-wider text-luxury-gold uppercase mb-1">
              {event.time}
            </span>

            {/* Event Content */}
            <div>
              <h4 className="font-serif text-lg text-luxury-emerald font-semibold mb-1">
                {event.title}
              </h4>
              <p className="font-sans text-xs text-luxury-sage leading-relaxed">
                {event.desc}
              </p>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
};
