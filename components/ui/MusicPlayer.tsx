"use client";

import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { playlist } from "@/data/music";
import { FiPlay, FiPause, FiSkipForward, FiSkipBack, FiMusic } from "react-icons/fi";

export default function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [currentTrackIdx, setCurrentTrackIdx] = useState(0);
  const [isOpen, setIsOpen] = useState(false);
  const audioRef = useRef<HTMLAudioElement | null>(null);
  const [hasInteracted, setHasInteracted] = useState(false);

  const currentTrack = playlist[currentTrackIdx];

  // Initialize audio and handle autoplay policy
  useEffect(() => {
    if (!audioRef.current) {
      audioRef.current = new Audio(currentTrack.src);
      audioRef.current.loop = true; // Loop current track by default, or we can handle 'ended' event
      audioRef.current.volume = 0.5;
    }

    const handleFirstInteraction = () => {
      if (!hasInteracted) {
        setHasInteracted(true);
        // Attempt to play on first click anywhere on the page
        audioRef.current?.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => {
          if (err.name !== "NotAllowedError") {
            console.warn("Audio play failed:", err);
          }
        });
      }
    };

    window.addEventListener("click", handleFirstInteraction, { once: true });
    window.addEventListener("keydown", handleFirstInteraction, { once: true });

    return () => {
      window.removeEventListener("click", handleFirstInteraction);
      window.removeEventListener("keydown", handleFirstInteraction);
    };
  }, [hasInteracted, currentTrack.src]);

  // Handle track changes
  useEffect(() => {
    if (audioRef.current) {
      audioRef.current.src = currentTrack.src;
      if (isPlaying || hasInteracted) {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch(() => {
          setIsPlaying(false);
        });
      }
    }
  }, [currentTrackIdx]);

  const togglePlay = () => {
    if (audioRef.current) {
      if (isPlaying) {
        audioRef.current.pause();
        setIsPlaying(false);
      } else {
        audioRef.current.play().then(() => {
          setIsPlaying(true);
        }).catch((err) => console.warn(err));
      }
    }
  };

  const nextTrack = () => {
    setCurrentTrackIdx((prev) => (prev + 1) % playlist.length);
  };

  const prevTrack = () => {
    setCurrentTrackIdx((prev) => (prev === 0 ? playlist.length - 1 : prev - 1));
  };

  return (
    <div className="fixed bottom-6 left-6 z-50 flex flex-col items-start gap-4">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 20, scale: 0.9 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 20, scale: 0.9 }}
            className="bg-space-deep/90 backdrop-blur-md border border-white/10 p-4 rounded-2xl shadow-2xl flex flex-col gap-3 min-w-[250px]"
          >
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-accent-gold uppercase tracking-wider">
                Now Playing
              </span>
              {/* Animated Equalizer Bars */}
              {isPlaying && (
                <div className="flex gap-1 items-end h-3">
                  <motion.div animate={{ height: ["40%", "100%", "40%"] }} transition={{ repeat: Infinity, duration: 0.8 }} className="w-1 bg-nebula-teal rounded-full" />
                  <motion.div animate={{ height: ["70%", "30%", "70%"] }} transition={{ repeat: Infinity, duration: 0.6 }} className="w-1 bg-nebula-teal rounded-full" />
                  <motion.div animate={{ height: ["100%", "50%", "100%"] }} transition={{ repeat: Infinity, duration: 0.9 }} className="w-1 bg-nebula-teal rounded-full" />
                </div>
              )}
            </div>
            
            <div>
              <h4 className="text-sm font-bold text-white truncate w-48">{currentTrack.title}</h4>
              <p className="text-xs text-white/50 truncate w-48">{currentTrack.artist}</p>
            </div>

            <div className="flex items-center justify-center gap-4 mt-2">
              <button onClick={prevTrack} className="p-2 text-white/70 hover:text-white transition-colors">
                <FiSkipBack size={18} />
              </button>
              
              <button 
                onClick={togglePlay}
                className="w-10 h-10 rounded-full bg-nebula-teal text-space-deep flex items-center justify-center hover:scale-105 transition-transform"
              >
                {isPlaying ? <FiPause size={18} fill="currentColor" /> : <FiPlay size={18} fill="currentColor" className="ml-1" />}
              </button>
              
              <button onClick={nextTrack} className="p-2 text-white/70 hover:text-white transition-colors">
                <FiSkipForward size={18} />
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`w-14 h-14 rounded-full flex items-center justify-center shadow-lg border border-white/10 transition-all ${
          isPlaying ? "bg-nebula-purple animate-pulse-slow" : "bg-space-mid/80 backdrop-blur-sm hover:bg-space-mid"
        }`}
      >
        <FiMusic size={24} className={isPlaying ? "text-white" : "text-white/70"} />
      </button>
    </div>
  );
}
