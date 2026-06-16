import React, { useState, useEffect } from 'react';
import { Send, User, CalendarDays, CheckCircle2 } from 'lucide-react';
import confetti from 'canvas-confetti';

interface Wish {
  id: string;
  name: string;
  attendance: 'attend' | 'unable';
  comment: string;
  timestamp: string;
}

export const Wishes: React.FC = () => {
  const [wishes, setWishes] = useState<Wish[]>([]);
  const [name, setName] = useState('');
  const [attendance, setAttendance] = useState<'attend' | 'unable'>('attend');
  const [comment, setComment] = useState('');

  // Initial mock comments to make the guest book look rich immediately
  const initialWishes: Wish[] = [
    {
      id: 'mock1',
      name: 'Aditya & Hana',
      attendance: 'attend',
      comment: 'So happy for you both, Elara & Fino! Wishing you a beautiful marriage journey full of laughter, love, and endless compromises. Can\'t wait to celebrate on the 4th!',
      timestamp: '2026-06-15T12:00:00Z'
    },
    {
      id: 'mock2',
      name: 'Sarah Chen',
      attendance: 'attend',
      comment: 'Warmest congratulations to the most perfect couple! Wishing you guys a lifetime of absolute happiness. See you in Singapore!',
      timestamp: '2026-06-15T15:30:00Z'
    },
    {
      id: 'mock3',
      name: 'Michael Robinson',
      attendance: 'unable',
      comment: 'Sending my deepest love and blessings from afar. I\'m unfortunately unable to fly in, but I\'ll be cheering for you both from London! Congratulations!',
      timestamp: '2026-06-16T02:00:00Z'
    }
  ];

  useEffect(() => {
    const saved = localStorage.getItem('elara_fino_wishes');
    if (saved) {
      setWishes(JSON.parse(saved));
    } else {
      setWishes(initialWishes);
      localStorage.setItem('elara_fino_wishes', JSON.stringify(initialWishes));
    }
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!name.trim() || !comment.trim()) return;

    const newWish: Wish = {
      id: 'wish_' + Date.now(),
      name,
      attendance,
      comment,
      timestamp: new Date().toISOString()
    };

    const updatedWishes = [newWish, ...wishes];
    setWishes(updatedWishes);
    localStorage.setItem('elara_fino_wishes', JSON.stringify(updatedWishes));

    // Confetti burst if attending
    if (attendance === 'attend') {
      confetti({
        particleCount: 80,
        spread: 60,
        origin: { y: 0.8 },
        colors: ['#c5a47e', '#0d2b1d', '#ede9e0']
      });
    }

    // Reset form
    setName('');
    setComment('');
  };

  const formatDate = (isoString: string) => {
    const d = new Date(isoString);
    return d.toLocaleDateString('en-US', { 
      month: 'short', 
      day: 'numeric', 
      year: 'numeric',
      hour: '2-digit',
      minute: '2-digit'
    });
  };

  return (
    <section className="py-20 px-8 bg-luxury-cream border-t border-luxury-gold/15 flex flex-col items-center">
      {/* Title */}
      <div className="text-center mb-16 max-w-md">
        <h3 className="font-serif text-3xl md:text-4xl text-luxury-emerald mb-4">
          Wishes &amp; RSVP
        </h3>
        <div className="w-16 h-[1px] bg-luxury-gold/50 mx-auto mb-4" />
        <p className="font-sans text-xs text-luxury-sage leading-relaxed">
          Please confirm your attendance and leave your warm blessings to Elara &amp; Fino below.
        </p>
      </div>

      {/* Grid: Form and Comments list */}
      <div className="w-full max-w-4xl flex flex-col md:grid md:grid-cols-5 gap-10">
        
        {/* RSVP Form Card - Cols 2 */}
        <div className="md:col-span-2 bg-white border border-luxury-gold/20 p-8 rounded-lg shadow-sm h-fit">
          <h4 className="font-serif text-xl text-luxury-emerald mb-6 font-semibold border-b border-luxury-gold/10 pb-4">
            RSVP &amp; Blessings
          </h4>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div>
              <label className="block font-sans text-[10px] text-luxury-sage uppercase tracking-wider mb-1">
                Your Name
              </label>
              <input 
                type="text"
                required
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="e.g. Katsudoto"
                className="w-full px-4 py-2.5 bg-luxury-cream border border-luxury-gold/20 rounded focus:outline-none focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal"
              />
            </div>

            <div>
              <label className="block font-sans text-[10px] text-luxury-sage uppercase tracking-wider mb-2">
                Confirmation of Attendance
              </label>
              <div className="grid grid-cols-2 gap-4">
                <button
                  type="button"
                  onClick={() => setAttendance('attend')}
                  className={`py-2 px-4 border text-xs font-sans font-semibold uppercase tracking-wider rounded transition-all ${
                    attendance === 'attend'
                      ? 'bg-luxury-emerald text-luxury-gold border-luxury-gold'
                      : 'bg-luxury-cream border-luxury-gold/20 text-luxury-sage hover:bg-luxury-gold/5'
                  }`}
                >
                  Will Attend
                </button>
                <button
                  type="button"
                  onClick={() => setAttendance('unable')}
                  className={`py-2 px-4 border text-xs font-sans font-semibold uppercase tracking-wider rounded transition-all ${
                    attendance === 'unable'
                      ? 'bg-luxury-emerald text-luxury-gold border-luxury-gold'
                      : 'bg-luxury-cream border-luxury-gold/20 text-luxury-sage hover:bg-luxury-gold/5'
                  }`}
                >
                  Unable to Attend
                </button>
              </div>
            </div>

            <div>
              <label className="block font-sans text-[10px] text-luxury-sage uppercase tracking-wider mb-1">
                Wishes &amp; Prayers
              </label>
              <textarea 
                rows={4}
                required
                value={comment}
                onChange={(e) => setComment(e.target.value)}
                placeholder="Write your prayers and warm wishes..."
                className="w-full px-4 py-2.5 bg-luxury-cream border border-luxury-gold/20 rounded focus:outline-none focus:ring-1 focus:ring-luxury-gold text-sm text-luxury-charcoal resize-none"
              />
            </div>

            <button
              type="submit"
              className="w-full py-3 bg-luxury-gold hover:bg-luxury-gold/90 text-luxury-emerald font-sans text-xs font-semibold uppercase tracking-wider rounded transition-colors flex items-center justify-center gap-2 shadow"
            >
              <Send className="w-3.5 h-3.5" />
              Send Wishes
            </button>
          </form>
        </div>

        {/* Wishes List - Cols 3 */}
        <div className="md:col-span-3 flex flex-col gap-6 max-h-[500px] overflow-y-auto pr-2">
          {wishes.length === 0 ? (
            <p className="text-center font-sans text-sm text-luxury-sage py-8">
              No wishes yet. Be the first to leave a message!
            </p>
          ) : (
            wishes.map((wish) => (
              <div 
                key={wish.id} 
                className="bg-white border border-luxury-gold/15 p-6 rounded-lg shadow-sm hover:border-luxury-gold/30 transition-all duration-300"
              >
                {/* Header */}
                <div className="flex items-center justify-between mb-3">
                  <div className="flex items-center gap-2">
                    <div className="w-8 h-8 rounded-full bg-luxury-emerald/5 flex items-center justify-center text-luxury-emerald border border-luxury-gold/25">
                      <User className="w-4 h-4" />
                    </div>
                    <div>
                      <h5 className="font-serif text-base text-luxury-emerald font-semibold leading-tight">
                        {wish.name}
                      </h5>
                      <span className="font-sans text-[9px] text-luxury-sage block mt-0.5">
                        {formatDate(wish.timestamp)}
                      </span>
                    </div>
                  </div>

                  {/* Attendance Badge */}
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-[9px] font-sans font-semibold uppercase tracking-wider ${
                    wish.attendance === 'attend'
                      ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                      : 'bg-amber-50 text-amber-700 border border-amber-200'
                  }`}>
                    {wish.attendance === 'attend' ? (
                      <>
                        <CheckCircle2 className="w-3 h-3 text-emerald-600" />
                        Attending
                      </>
                    ) : (
                      <>
                        <CalendarDays className="w-3 h-3 text-amber-600" />
                        Absent
                      </>
                    )}
                  </span>
                </div>

                {/* Comment */}
                <p className="font-sans text-xs text-luxury-charcoal/90 leading-relaxed pl-1">
                  {wish.comment}
                </p>
              </div>
            ))
          )}
        </div>

      </div>
    </section>
  );
};
