import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const BackgroundAudio: React.FC = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const audioRef = useRef<HTMLAudioElement>(null);

  useEffect(() => {
    // Get the audio element
    const audio = audioRef.current;
    
    if (!audio) return;
    
    // Configure audio
    audio.volume = 0.3;
    audio.loop = true;
    
    // Play audio when the component is mounted
    const playAudio = () => {
      if (audio.paused) {
        audio.play()
          .then(() => {
            setIsPlaying(true);
          })
          .catch(err => {
            console.error("Error playing audio:", err);
            setIsPlaying(false);
          });
      }
    };
    
    // Add event listener for user interaction
    const handleUserInteraction = () => {
      if (!isPlaying) {
        playAudio();
      }
      document.removeEventListener('click', handleUserInteraction);
    };
    
    document.addEventListener('click', handleUserInteraction);
    
    // Cleanup function
    return () => {
      document.removeEventListener('click', handleUserInteraction);
      audio.pause();
    };
  }, [isPlaying]);
  
  const togglePlay = () => {
    if (!audioRef.current) return;
    
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play()
        .then(() => {
          setIsPlaying(true);
        })
        .catch(err => {
          console.error("Error playing audio:", err);
        });
    }
  };
  
  const hideControlsTemporarily = () => {
    setShowControls(false);
    setTimeout(() => {
      setShowControls(true);
    }, 5000);
  };
  
  return (
    <>
      <audio ref={audioRef} src="/backgroundMusic.mp3" />
      
      <AnimatePresence>
        {showControls && (
          <motion.div 
            className="fixed bottom-5 right-5 z-50"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 20 }}
            transition={{ duration: 0.3 }}
          >
            <motion.button
              className={`p-3 rounded-full ${isPlaying ? 'bg-neonBlue/20' : 'bg-neonPurple/20'} border ${isPlaying ? 'border-neonBlue' : 'border-neonPurple'} text-white flex items-center justify-center group`}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              onClick={() => {
                togglePlay();
                hideControlsTemporarily();
              }}
            >
              {isPlaying ? (
                <svg className="w-5 h-5 text-neonBlue" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 9v6m4-6v6m7-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              ) : (
                <svg className="w-5 h-5 text-neonPurple" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.752 11.168l-3.197-2.132A1 1 0 0010 9.87v4.263a1 1 0 001.555.832l3.197-2.132a1 1 0 000-1.664z" />
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              )}
              <span className="absolute -top-8 right-0 bg-gray-900/80 text-white text-xs px-2 py-1 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                {isPlaying ? 'Pause Music' : 'Play Music'}
              </span>
            </motion.button>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default BackgroundAudio;
