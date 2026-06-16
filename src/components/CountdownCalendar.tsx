import React, { useState, useEffect } from 'react';
import { Calendar, Heart } from 'lucide-react';

export const CountdownCalendar: React.FC = () => {
  // Target date: April 4, 2026 09:00:00 UTC+8 (or local)
  const targetDate = new Date('2026-04-04T09:00:00').getTime();

  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const updateCountdown = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference <= 0) {
        setTimeLeft({ days: 0, hours: 0, minutes: 0, seconds: 0 });
        return;
      }

      const days = Math.floor(difference / (1000 * 60 * 60 * 24));
      const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((difference % (1000 * 60)) / 1000);

      setTimeLeft({ days, hours, minutes, seconds });
    };

    updateCountdown();
    const interval = setInterval(updateCountdown, 1000);

    return () => clearInterval(interval);
  }, [targetDate]);

  // April 2026 Calendar Details
  // April 1st, 2026 is a Wednesday.
  // We need 3 empty days at the start (Sunday, Monday, Tuesday start index or Monday-Sunday mapping).
  // Let's assume standard Monday-Sunday weekdays:
  // Mo Tu We Th Fr Sa Su
  //       1  2  3  4  5
  //  6  7  8  9 10 11 12
  // 13 14 15 16 17 18 19
  // 20 21 22 23 24 25 26
  // 27 28 29 30
  
  const weekdays = ['Mo', 'Tu', 'We', 'Th', 'Fr', 'Sa', 'Su'];
  const totalDays = 30;
  const startOffset = 2; // Wednesday (index 2 for 0-based: Mo=0, Tu=1, We=2)
  const daysArray = Array.from({ length: totalDays }, (_, i) => i + 1);
  const offsetArray = Array.from({ length: startOffset }, () => null);
  const calendarCells = [...offsetArray, ...daysArray];

  // Google Calendar link
  const gCalLink = "https://www.google.com/calendar/render?action=TEMPLATE&text=Elara+%26+Fino+Wedding&dates=20260404T110000/20260404T150000&location=Wedding+Venue+Singapore+%7C+133+Devonshire+Rd%2C+Singapore+239888+%7C+Singapore&details=Hi%2C+You%27re+invited+to+our+wedding+ceremony+%7C+Elara+%26+Fino+Wedding+%7C+Saturday%2C+April+04th+2026";

  return (
    <section className="py-20 px-8 bg-luxury-cream border-y border-luxury-gold/15 flex flex-col items-center">
      {/* Title */}
      <h3 className="font-serif text-3xl text-luxury-emerald text-center mb-10">
        Save the Date
      </h3>

      {/* Countdown Grid */}
      <div className="grid grid-cols-4 gap-4 max-w-md w-full mb-12 text-center">
        {/* Days */}
        <div className="bg-luxury-emerald border border-luxury-gold/20 p-4 rounded shadow-md">
          <span className="block font-serif text-3xl text-luxury-gold font-bold">
            {timeLeft.days}
          </span>
          <span className="font-sans text-[10px] tracking-wider text-luxury-cream/80 uppercase">
            Days
          </span>
        </div>
        {/* Hours */}
        <div className="bg-luxury-emerald border border-luxury-gold/20 p-4 rounded shadow-md">
          <span className="block font-serif text-3xl text-luxury-gold font-bold">
            {timeLeft.hours}
          </span>
          <span className="font-sans text-[10px] tracking-wider text-luxury-cream/80 uppercase">
            Hours
          </span>
        </div>
        {/* Minutes */}
        <div className="bg-luxury-emerald border border-luxury-gold/20 p-4 rounded shadow-md">
          <span className="block font-serif text-3xl text-luxury-gold font-bold">
            {timeLeft.minutes}
          </span>
          <span className="font-sans text-[10px] tracking-wider text-luxury-cream/80 uppercase">
            Mins
          </span>
        </div>
        {/* Seconds */}
        <div className="bg-luxury-emerald border border-luxury-gold/20 p-4 rounded shadow-md">
          <span className="block font-serif text-3xl text-luxury-gold font-bold">
            {timeLeft.seconds}
          </span>
          <span className="font-sans text-[10px] tracking-wider text-luxury-cream/80 uppercase">
            Secs
          </span>
        </div>
      </div>

      {/* Calendar Area */}
      <div className="w-full max-w-sm bg-white border border-luxury-gold/20 p-6 rounded-lg shadow-sm mb-10">
        {/* Month Header */}
        <div className="flex justify-between items-center mb-6">
          <h4 className="font-serif text-lg text-luxury-emerald font-semibold">
            April 2026
          </h4>
          <Heart className="w-4 h-4 text-luxury-gold fill-current" />
        </div>

        {/* Weekdays */}
        <div className="grid grid-cols-7 gap-y-2 text-center text-xs font-sans text-luxury-sage font-medium mb-3">
          {weekdays.map((day) => (
            <div key={day}>{day}</div>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-y-2 text-center text-xs font-sans">
          {calendarCells.map((day, idx) => {
            const isSpecial = day === 4;
            return (
              <div 
                key={idx} 
                className={`relative flex items-center justify-center h-8 w-8 mx-auto rounded-full font-medium ${
                  day === null ? 'text-transparent' : 'text-luxury-charcoal'
                } ${
                  isSpecial 
                    ? 'bg-luxury-emerald text-luxury-gold border border-luxury-gold scale-110 shadow-sm' 
                    : ''
                }`}
              >
                {day}
                {isSpecial && (
                  <span className="absolute -bottom-1.5 flex h-1.5 w-1.5 rounded-full bg-luxury-gold" />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Add To Calendar Button */}
      <a
        href={gCalLink}
        target="_blank"
        rel="noopener noreferrer"
        className="inline-flex items-center gap-2 px-6 py-2.5 bg-transparent border border-luxury-gold text-luxury-gold hover:bg-luxury-gold hover:text-white font-sans text-xs font-semibold tracking-wider uppercase rounded-full transition-all duration-300"
      >
        <Calendar className="w-4 h-4" />
        Add to Google Calendar
      </a>
    </section>
  );
};
