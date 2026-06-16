import React from 'react';
import { MapPin, Clock, HeartHandshake, Sparkles } from 'lucide-react';
import { motion } from 'framer-motion';

export const Events: React.FC = () => {
  const mapLink = "https://maps.google.com/?q=133+Devonshire+Rd,+Singapore+239888";

  const dressColors = [
    { name: 'Gold', hex: '#AD7811' },
    { name: 'Green', hex: '#1A5E58' },
    { name: 'Sage', hex: '#C1D7D5' },
    { name: 'Tan', hex: '#B7995C' }
  ];

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
          The Wedding Day
        </h3>
        <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto" />
      </motion.div>

      {/* Cards Container */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl w-full mb-16">
        {/* Akad Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-white border border-luxury-gold/20 p-8 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div>
            <div className="flex items-center gap-2 mb-4 text-luxury-gold">
              <HeartHandshake className="w-5 h-5" />
              <h4 className="font-serif text-xl text-luxury-emerald font-semibold">
                Akad Nikah
              </h4>
            </div>
            <p className="font-sans text-xs text-luxury-sage font-medium uppercase tracking-wider mb-6">
              Holy Matrimony
            </p>

            <div className="space-y-4 font-sans text-sm text-luxury-charcoal">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Saturday, April 4th, 2026</p>
                  <p className="text-xs text-luxury-sage">09:00 AM - 10:00 AM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Wedding Venue Singapore</p>
                  <p className="text-xs text-luxury-sage leading-relaxed">
                    133 Devonshire Rd, Singapore 239888
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white font-sans text-xs font-semibold uppercase tracking-wider rounded transition-all"
            >
              View Location Maps
            </a>
          </div>
        </motion.div>

        {/* Reception Card */}
        <motion.div 
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          whileHover={{ y: -5, transition: { duration: 0.2 } }}
          className="bg-white border border-luxury-gold/20 p-8 rounded-lg shadow-sm flex flex-col justify-between hover:shadow-md transition-shadow"
        >
          <div>
            <div className="flex items-center gap-2 mb-4 text-luxury-gold">
              <Sparkles className="w-5 h-5" />
              <h4 className="font-serif text-xl text-luxury-emerald font-semibold">
                Resepsi
              </h4>
            </div>
            <p className="font-sans text-xs text-luxury-sage font-medium uppercase tracking-wider mb-6">
              Wedding Reception
            </p>

            <div className="space-y-4 font-sans text-sm text-luxury-charcoal">
              <div className="flex items-start gap-3">
                <Clock className="w-4 h-4 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Saturday, April 4th, 2026</p>
                  <p className="text-xs text-luxury-sage">11:00 AM - 03:00 PM</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-luxury-gold mt-1 flex-shrink-0" />
                <div>
                  <p className="font-semibold">Wedding Venue Singapore</p>
                  <p className="text-xs text-luxury-sage leading-relaxed">
                    133 Devonshire Rd, Singapore 239888
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-8">
            <a
              href={mapLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center w-full px-4 py-2 border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white font-sans text-xs font-semibold uppercase tracking-wider rounded transition-all"
            >
              View Location Maps
            </a>
          </div>
        </motion.div>
      </div>

      {/* Dress Code Section */}
      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="w-full max-w-md bg-white border border-luxury-gold/20 p-6 rounded-lg shadow-sm text-center"
      >
        <h4 className="font-serif text-lg text-luxury-emerald mb-4 font-semibold">
          Dress Code
        </h4>
        
        {/* Dress Icons */}
        <div className="flex justify-center gap-12 mb-6 border-b border-luxury-gold/10 pb-4">
          <div className="flex flex-col items-center gap-1.5">
            <img src="/src/assets/ic-dress-man.png" alt="Man Attire" className="w-9 h-9 object-contain" />
            <span className="font-sans text-[10px] font-semibold text-luxury-emerald tracking-wide">Men: Casual</span>
          </div>
          <div className="flex flex-col items-center gap-1.5">
            <img src="/src/assets/ic-dress-woman.png" alt="Woman Attire" className="w-9 h-9 object-contain" />
            <span className="font-sans text-[10px] font-semibold text-luxury-emerald tracking-wide">Women: Casual</span>
          </div>
        </div>

        <p className="font-sans text-xs text-luxury-sage mb-6">
          We kindly ask our guests to wear our selected wedding palette:
        </p>

        {/* Color Circles */}
        <div className="flex items-center justify-center gap-6 mb-6">
          {dressColors.map((color) => (
            <div key={color.name} className="flex flex-col items-center gap-1.5">
              <div 
                className="w-10 h-10 rounded-full border border-luxury-gold/30 shadow-inner"
                style={{ backgroundColor: color.hex }}
                title={color.name}
              />
              <span className="font-sans text-[10px] text-luxury-sage font-medium">
                {color.name}
              </span>
            </div>
          ))}
        </div>

        <p className="font-sans text-xs text-luxury-emerald/80 italic">
          "We kindly ask that guests please attend wearing our wedding colors."
        </p>
      </motion.div>
    </section>
  );
};
