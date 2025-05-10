import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface LoadingScreenProps {
  onLoadingComplete: () => void;
}

const LoadingScreen: React.FC<LoadingScreenProps> = ({ onLoadingComplete }) => {
  const [progress, setProgress] = useState(0);
  const [showLoadingText, setShowLoadingText] = useState(true);
  
  useEffect(() => {
    // Simulate loading process
    const interval = setInterval(() => {
      setProgress(prev => {
        // Increase progress, with some randomness for natural effect
        const increment = Math.random() * 3 + 1;
        const newProgress = Math.min(prev + increment, 100);
        
        // When loading reaches 100%, trigger the onLoadingComplete callback
        if (newProgress >= 100) {
          clearInterval(interval);
          
          // First hide the loading text
          setShowLoadingText(false);
          
          // Then after animation completes, call the complete callback
          setTimeout(() => {
            onLoadingComplete();
          }, 1200);
        }
        
        return newProgress;
      });
    }, 50);
    
    return () => clearInterval(interval);
  }, [onLoadingComplete]);
  
  const textVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: (i: number) => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.5,
      }
    }),
    exit: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
      }
    }
  };
  
  const letters = ['T', 'E', 'C', 'H', ' ', 'T', 'R', 'O', 'N', 'I', 'C', 'S', "'", '2', '5'];
  
  return (
    <motion.div 
      className="fixed inset-0 z-50 bg-darkBg flex flex-col justify-center items-center"
      initial={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Animated grid background */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(#00f2ff_1px,transparent_1px)] [background-size:40px_40px] opacity-20"></div>
        
        {/* Animated particles */}
        {Array.from({ length: 30 }).map((_, i) => (
          <motion.div 
            key={i}
            className={`absolute w-1 h-1 rounded-full ${
              i % 3 === 0 ? 'bg-neonBlue' : i % 3 === 1 ? 'bg-neonPurple' : 'bg-neonGreen'
            }`}
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              x: [0, Math.random() * 100 - 50],
              y: [0, Math.random() * 100 - 50],
              opacity: [0.7, 0.2, 0.7],
              scale: [1, Math.random() * 2 + 0.5, 1]
            }}
            transition={{
              duration: Math.random() * 5 + 3,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
      
      {/* Loading text animation */}
      <div className="mb-12">
        <AnimatePresence>
          {showLoadingText && (
            <div className="flex">
              {letters.map((letter, i) => (
                <motion.span
                  key={i}
                  custom={i}
                  variants={textVariants}
                  initial="hidden"
                  animate="visible"
                  exit="exit"
                  className={`text-5xl md:text-7xl font-bold ${
                    letter === ' ' ? 'mx-2' : ''
                  } ${
                    i % 3 === 0 ? 'text-neonBlue' : 
                    i % 3 === 1 ? 'text-neonPurple' : 
                    'text-neonGreen'
                  }`}
                  style={{
                    textShadow: `0 0 10px ${
                      i % 3 === 0 ? 'rgba(0, 242, 255, 0.7)' : 
                      i % 3 === 1 ? 'rgba(179, 0, 255, 0.7)' : 
                      'rgba(57, 255, 20, 0.7)'
                    }`
                  }}
                >
                  {letter}
                </motion.span>
              ))}
            </div>
          )}
        </AnimatePresence>
      </div>
      
      {/* Progress bar */}
      <div className="w-64 md:w-96 h-2 bg-gray-800 rounded-full overflow-hidden relative">
        <motion.div 
          className="h-full bg-gradient-to-r from-neonBlue via-neonPurple to-neonGreen"
          initial={{ width: 0 }}
          animate={{ width: `${progress}%` }}
          transition={{ ease: "easeInOut" }}
        />
        
        {/* Glow effect */}
        <motion.div 
          className="absolute top-0 left-0 bottom-0 w-10 bg-white blur-sm"
          initial={{ x: 0, opacity: 0 }}
          animate={{ 
            x: progress * 3.2, 
            opacity: progress > 5 ? [0.5, 0.8, 0.5] : 0 
          }}
          transition={{ 
            x: { duration: 0.1 },
            opacity: { duration: 1, repeat: Infinity } 
          }}
        />
      </div>
      
      {/* Loading text */}
      <motion.p 
        className="mt-4 text-gray-400 text-sm"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        {progress < 100 ? 
          `Loading... ${Math.round(progress)}%` : 
          'Launching Experience'
        }
      </motion.p>
    </motion.div>
  );
};

export default LoadingScreen;
