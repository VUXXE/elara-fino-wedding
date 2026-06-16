import React, { useEffect, useRef } from 'react';
import { Music, Music4 } from 'lucide-react';

interface MusicPlayerProps {
  isPlaying: boolean;
  setIsPlaying: (playing: boolean) => void;
  autoPlayTriggered: boolean;
}

export const MusicPlayer: React.FC<MusicPlayerProps> = ({ 
  isPlaying, 
  setIsPlaying, 
  autoPlayTriggered 
}) => {
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const audioUrl = "https://media.katsudoto.id/media/public/70/62739/assets/chen%EC%B2%B8xpunch%ED%8E%80%EC%B9%98-everytime-l-descendants-of-the-sun-%ED%83%9C%EC%96%91%EC%9D%98-%ED%9B%84%EC%98%88-ost-piano-cover-sheet-1768209465-65c83b1c7c05c49d1c17de25.mp3";

  useEffect(() => {
    // Instantiate audio
    const audio = new Audio(audioUrl);
    audio.loop = true;
    audioRef.current = audio;

    return () => {
      audio.pause();
      audioRef.current = null;
    };
  }, []);

  useEffect(() => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.play().catch(err => {
        console.log("Audio play blocked by browser:", err);
        setIsPlaying(false);
      });
    } else {
      audioRef.current.pause();
    }
  }, [isPlaying]);

  useEffect(() => {
    if (autoPlayTriggered && audioRef.current) {
      setIsPlaying(true);
    }
  }, [autoPlayTriggered]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
  };

  return (
    <div className="fixed bottom-6 right-6 z-40">
      <button
        onClick={togglePlay}
        className={`w-12 h-12 rounded-full flex items-center justify-center bg-luxury-emerald border border-luxury-gold shadow-xl transition-all duration-500 hover:scale-110 active:scale-95 group relative ${
          isPlaying ? 'rotate-vinyl' : ''
        }`}
        title={isPlaying ? "Mute Music" : "Play Music"}
      >
        {isPlaying ? (
          <Music4 className="w-5 h-5 text-luxury-gold animate-pulse" />
        ) : (
          <Music className="w-5 h-5 text-luxury-gold/60" />
        )}
        
        {/* Subtle music note effects */}
        {isPlaying && (
          <>
            <span className="absolute -top-2 -left-2 text-luxury-gold text-xs animate-float-note-1">♪</span>
            <span className="absolute -top-3 right-1 text-luxury-gold text-xs animate-float-note-2">♫</span>
          </>
        )}
      </button>
    </div>
  );
};
