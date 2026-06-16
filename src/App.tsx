import { useState, useEffect } from 'react';
import { AnimatePresence } from 'framer-motion';
import { OpeningOverlay } from './components/OpeningOverlay';
import { MusicPlayer } from './components/MusicPlayer';
import { Hero } from './components/Hero';
import { Profiles } from './components/Profiles';
import { CountdownCalendar } from './components/CountdownCalendar';
import { Events } from './components/Events';
import { Timeline } from './components/Timeline';
import { Gallery } from './components/Gallery';
import { LoveStory } from './components/LoveStory';
import { GiftSection } from './components/GiftSection';
import { Wishes } from './components/Wishes';

function App() {
  const [isOpen, setIsOpen] = useState(true);
  const [isPlaying, setIsPlaying] = useState(false);
  const [autoPlayTriggered, setAutoPlayTriggered] = useState(false);

  // Disable body scroll when landing overlay is open
  useEffect(() => {
    if (isOpen) {
      document.body.classList.add('overflow-hidden');
    } else {
      document.body.classList.remove('overflow-hidden');
    }
    return () => {
      document.body.classList.remove('overflow-hidden');
    };
  }, [isOpen]);

  const handleOpenInvitation = () => {
    setIsOpen(false);
    setAutoPlayTriggered(true);
  };

  return (
    <>
      {/* Land Cover Overlay */}
      <AnimatePresence>
        {isOpen && (
          <OpeningOverlay isOpen={isOpen} onOpen={handleOpenInvitation} />
        )}
      </AnimatePresence>

      {/* Floating Music player controls */}
      {!isOpen && (
        <MusicPlayer 
          isPlaying={isPlaying} 
          setIsPlaying={setIsPlaying} 
          autoPlayTriggered={autoPlayTriggered} 
        />
      )}

      {/* Main Grid: Split Screen for Desktop (min-width: 960px) */}
      <div className="min-h-screen flex flex-col md:grid md:grid-cols-12 bg-luxury-cream">
        
        {/* Sticky Left Pane (Only visible/sticky on desktop, md:span-5) */}
        <section className="hidden md:flex md:col-span-5 h-screen sticky top-0 bg-luxury-emerald text-center flex-col justify-between p-12 border-r border-luxury-gold/25 overflow-hidden select-none">
          {/* Background decoration */}
          <div 
            className="absolute inset-0 bg-cover bg-center opacity-30 mix-blend-overlay filter blur-[1px]" 
            style={{ backgroundImage: `url('/src/assets/cover_bg.png')` }}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-luxury-emerald via-transparent to-luxury-emerald opacity-80" />

          {/* Golden corners flourish */}
          <div className="absolute top-4 left-4 w-6 h-6 border-t border-l border-luxury-gold/50" />
          <div className="absolute top-4 right-4 w-6 h-6 border-t border-r border-luxury-gold/50" />
          <div className="absolute bottom-4 left-4 w-6 h-6 border-b border-l border-luxury-gold/50" />
          <div className="absolute bottom-4 right-4 w-6 h-6 border-b border-r border-luxury-gold/50" />

          {/* Top Info */}
          <div className="relative z-10">
            <p className="font-sans text-[10px] tracking-[0.3em] text-luxury-gold uppercase">
              The Wedding of
            </p>
          </div>

          {/* Middle Info */}
          <div className="relative z-10 flex flex-col items-center">
            <h1 className="font-serif text-5xl lg:text-6xl text-luxury-cream leading-tight mb-2">
              Elara &amp; Fino
            </h1>
            <p className="font-sans text-xs tracking-[0.2em] text-luxury-gold font-medium uppercase">
              #ElaraFinoAlways
            </p>
          </div>

          {/* Bottom Info */}
          <div className="relative z-10">
            <p className="font-serif text-lg text-luxury-goldlight tracking-wide mb-1 font-medium">
              04 . 04 . 2026
            </p>
            <p className="font-sans text-[9px] tracking-[0.2em] text-luxury-sage uppercase">
              Singapore
            </p>
          </div>
        </section>

        {/* Scrollable Right Pane (All content flow, md:span-7) */}
        <main className="md:col-span-7 flex flex-col min-h-screen">
          {/* Hero Banner */}
          <Hero />

          {/* Quote Section */}
          <section className="py-24 px-8 bg-luxury-emerald text-luxury-cream border-y border-luxury-gold/15 relative text-center overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 filter blur-[1px]" style={{ backgroundImage: `url('/src/assets/cover_bg.png')` }} />
            <div className="relative z-10 max-w-lg mx-auto">
              {/* Quote Icon */}
              <span className="block font-serif text-6xl text-luxury-gold/40 mb-4">“</span>
              <blockquote className="font-serif text-xl md:text-2xl leading-relaxed italic text-luxury-goldlight mb-6">
                A successful marriage requires falling in love many times, always with the same person.
              </blockquote>
              <cite className="font-sans text-xs uppercase tracking-widest text-luxury-gold not-italic">
                — Mignon McLaughlin
              </cite>
            </div>
          </section>

          {/* Bride & Groom Profiles */}
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url('/src/assets/gallery1.png')` }} />
            <div className="relative z-10">
              <Profiles />
            </div>
          </div>

          {/* Countdown & Calendar */}
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url('/src/assets/gallery2.png')` }} />
            <div className="relative z-10">
              <CountdownCalendar />
            </div>
          </div>

          {/* Event Matrimony & Reception Details */}
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url('/src/assets/gallery3.png')` }} />
            <div className="relative z-10">
              <Events />
            </div>
          </div>

          {/* Time rundown */}
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url('/src/assets/gallery4.png')` }} />
            <div className="relative z-10">
              <Timeline />
            </div>
          </div>

          {/* Couple love story */}
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url('/src/assets/gallery1.png')` }} />
            <div className="relative z-10">
              <LoveStory />
            </div>
          </div>

          {/* Photo Gallery Grid */}
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url('/src/assets/gallery2.png')` }} />
            <div className="relative z-10">
              <Gallery />
            </div>
          </div>

          {/* Gift Envelope bank details */}
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url('/src/assets/gallery3.png')` }} />
            <div className="relative z-10">
              <GiftSection />
            </div>
          </div>

          {/* Wishes board & RSVP */}
          <div className="relative">
            <div className="absolute inset-0 bg-cover bg-center opacity-[0.05] pointer-events-none" style={{ backgroundImage: `url('/src/assets/gallery4.png')` }} />
            <div className="relative z-10">
              <Wishes />
            </div>
          </div>

          {/* Greet & Thanks Section */}
          <section className="py-24 px-8 bg-luxury-emerald text-luxury-cream text-center relative border-t border-luxury-gold/15 overflow-hidden">
            <div className="absolute inset-0 bg-cover bg-center opacity-10 filter blur-[1px]" style={{ backgroundImage: `url('/src/assets/cover_bg.png')` }} />
            <div className="relative z-10 max-w-md mx-auto">
              <h4 className="font-signature text-5xl text-luxury-gold mb-6">Thank You!</h4>
              <p className="font-sans text-xs text-luxury-cream/80 leading-relaxed mb-6">
                With hearts full of gratitude, we thank you for your presence, prayers, and kind wishes. May the love shared within these ancient walls be returned to you a thousandfold.
              </p>
              <p className="font-serif text-lg text-luxury-goldlight italic font-semibold">
                With love, <br /> Elara &amp; Fino
              </p>
            </div>
          </section>

          {/* Footnote */}
          <footer className="py-8 bg-luxury-emerald border-t border-luxury-gold/10 text-center relative">
            <div className="max-w-xs mx-auto flex flex-col items-center gap-2">
              <p className="font-sans text-[9px] text-luxury-sage tracking-wider uppercase">
                Powered by
              </p>
              <a 
                href="https://katsudoto.id" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-luxury-gold hover:text-white transition-colors uppercase font-sans text-xs font-bold tracking-widest"
              >
                Katsudoto
              </a>
            </div>
          </footer>
        </main>

      </div>
    </>
  );
}

export default App;
