import React from 'react';
import { motion } from 'framer-motion';

interface TechBackgroundProps {
  variant?: 'default' | 'dark' | 'blue' | 'purple';
  intensity?: 'low' | 'medium' | 'high';
  animated?: boolean;
}

const TechBackground: React.FC<TechBackgroundProps> = ({ 
  variant = 'default', 
  intensity = 'medium',
  animated = true 
}) => {
  // Set opacity based on intensity
  const getOpacity = (baseOpacity: number) => {
    const multiplier = intensity === 'low' ? 0.5 : intensity === 'high' ? 1.5 : 1;
    return baseOpacity * multiplier;
  };

  // Set color based on variant
  const getColor = () => {
    switch (variant) {
      case 'dark':
        return '#00f2ff';
      case 'blue':
        return '#0070f3';
      case 'purple':
        return '#b300ff';
      default:
        return '#00f2ff';
    }
  };

  const color = getColor();
  
  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {/* Grid pattern */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `linear-gradient(to right, ${color}10 1px, transparent 1px), linear-gradient(to bottom, ${color}10 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: getOpacity(0.05)
        }}
      ></div>
      
      {/* Radial dots */}
      <div 
        className="absolute inset-0" 
        style={{ 
          backgroundImage: `radial-gradient(${color} 1px, transparent 1px)`,
          backgroundSize: '40px 40px',
          opacity: getOpacity(0.05)
        }}
      ></div>
      
      {/* Animated circuit lines */}
      {animated && (
        <>
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ 
              opacity: [getOpacity(0.03), getOpacity(0.06), getOpacity(0.03)],
              scale: [1, 1.05, 1]
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ 
              backgroundImage: `
                linear-gradient(to right, ${color}15 1px, transparent 1px), 
                linear-gradient(to bottom, ${color}15 1px, transparent 1px)
              `,
              backgroundSize: '80px 80px'
            }}
          ></motion.div>
          
          <motion.div 
            className="absolute inset-0"
            initial={{ opacity: 0 }}
            animate={{ 
              opacity: [getOpacity(0.02), getOpacity(0.04), getOpacity(0.02)],
              scale: [1, 1.03, 1],
              rotate: [0, 1, 0]
            }}
            transition={{
              duration: 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
            style={{ 
              backgroundImage: `radial-gradient(${color} 0.8px, transparent 0.8px)`,
              backgroundSize: '30px 30px'
            }}
          ></motion.div>
        </>
      )}
      
      {/* Floating tech elements */}
      <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-opacity-20" 
        style={{ borderColor: color, opacity: getOpacity(0.1) }}>
        <motion.div 
          className="w-full h-full"
          animate={{ 
            scale: [1, 1.1, 1],
            rotate: [0, 5, 0]
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </div>
      
      <div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-opacity-20 rounded-full" 
        style={{ borderColor: color, opacity: getOpacity(0.1) }}>
        <motion.div 
          className="w-full h-full rounded-full"
          animate={{ 
            scale: [1, 1.15, 1],
            rotate: [0, -5, 0]
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
            repeatType: "reverse"
          }}
        ></motion.div>
      </div>
      
      {/* Binary code animation */}
      <div className="absolute -top-20 left-0 text-[8px] font-mono whitespace-nowrap overflow-hidden h-full w-full opacity-5">
        <motion.div
          animate={{
            y: ["0%", "100%"]
          }}
          transition={{
            duration: 60,
            repeat: Infinity,
            ease: "linear"
          }}
          className="flex"
        >
          {Array(5).fill(0).map((_, i) => (
            <div key={i} className="mr-12">
              {Array(20).fill(0).map((_, j) => (
                <div key={j} style={{ color }}>
                  {Array(30).fill(0).map((_, k) => (
                    <span key={k}>{Math.random() > 0.5 ? '1' : '0'}</span>
                  ))}
                </div>
              ))}
            </div>
          ))}
        </motion.div>
      </div>
      
      {/* Glowing orbs */}
      {animated && (
        <>
          <motion.div
            className="absolute w-4 h-4 rounded-full"
            style={{ 
              backgroundColor: color,
              boxShadow: `0 0 15px ${color}`,
              top: '30%',
              left: '15%',
              opacity: getOpacity(0.2)
            }}
            animate={{
              scale: [1, 1.5, 1],
              opacity: [getOpacity(0.2), getOpacity(0.4), getOpacity(0.2)]
            }}
            transition={{
              duration: 4,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
          
          <motion.div
            className="absolute w-3 h-3 rounded-full"
            style={{ 
              backgroundColor: color,
              boxShadow: `0 0 10px ${color}`,
              top: '70%',
              left: '80%',
              opacity: getOpacity(0.15)
            }}
            animate={{
              scale: [1, 1.3, 1],
              opacity: [getOpacity(0.15), getOpacity(0.3), getOpacity(0.15)]
            }}
            transition={{
              duration: 5,
              repeat: Infinity,
              repeatType: "reverse",
              delay: 1
            }}
          />
        </>
      )}
    </div>
  );
};

export default TechBackground;
