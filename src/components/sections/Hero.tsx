import React from 'react';
import { motion } from 'framer-motion';

const Hero: React.FC = () => {
  const letters = ['T', 'E', 'C', 'H', ' ', 'T', 'R', 'O', 'N', 'I', 'C', 'S', "'", '2', '5'];
  return (
    <section id="top" className="flex justify-center items-center min-h-screen relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
          style={{ filter: 'brightness(0.25) contrast(1.1) blur(1px)' }}
        >
          <source src="/BackgroundVidio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to darken video slightly */}
        <div className="absolute inset-0 bg-darkBg opacity-50"></div>
      </div>
      
      {/* Animated background grid effect */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(#00f2ff_1px,transparent_1px)] [background-size:40px_40px] z-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.1, 0.2, 0.1],
          scale: [1, 1.05, 1],
          rotate: [0, 1, 0]
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          repeatType: "reverse"
        }}
      ></motion.div>
      
      {/* Second animated grid with different size and color */}
      <motion.div 
        className="absolute inset-0 bg-[radial-gradient(#b300ff_0.8px,transparent_0.8px)] [background-size:30px_30px] z-10"
        initial={{ opacity: 0 }}
        animate={{ 
          opacity: [0.05, 0.15, 0.05],
          scale: [1, 1.1, 1],
          rotate: [0, -1, 0]
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
          repeatType: "reverse",
          delay: 1
        }}
      ></motion.div>
      
      <div className="container mx-auto px-4 text-center z-10 relative">
        {/* Royal decorative elements */}
        <div className="hidden md:flex justify-center mb-4">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-2"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-2"></div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-2"></div>
        </div>
        <motion.div 
          className="flex flex-wrap justify-center text-4xl md:text-6xl lg:text-8xl font-bold mb-6 revolving-dor-font tracking-wider"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          style={{
            fontFamily: "'RevolvingDor', 'Arial', sans-serif",
            textShadow: '0 0 10px rgba(179, 0, 255, 0.5), 0 0 20px rgba(0, 242, 255, 0.4), 0 0 30px rgba(255, 215, 0, 0.3)',
            transform: 'perspective(800px) rotateX(5deg)',
            background: 'linear-gradient(to bottom, #ffd700, #f5f5f5, #ffd700)',
            WebkitBackgroundClip: 'text',
            WebkitTextFillColor: 'transparent',
            borderBottom: '2px solid rgba(255, 215, 0, 0.3)',
            paddingBottom: '10px',
            position: 'relative',
          }}
        >
          {letters.map((letter, i) => {
            // Determine if the letter is part of TECH or '25 (should be neon blue)
            // or part of TRONICS (should be neon white)
            // All letters will have the royal gold gradient look
            const textColor = 'text-transparent'; // Using transparent as we'll use gradient
            
            // Royal gold shadow effect
            const shadowColor = 
              '0 0 5px rgba(255, 215, 0, 0.8), 0 0 15px rgba(255, 215, 0, 0.5), 0 0 25px rgba(179, 0, 255, 0.3)';
            
            const hoverShadowColor = 
              '0 0 10px rgba(255, 215, 0, 0.9), 0 0 20px rgba(255, 215, 0, 0.7), 0 0 30px rgba(179, 0, 255, 0.5)';
            
            return (
              <motion.span
                key={i}
                className={`${letter === ' ' ? 'mx-2' : 'mx-[1px] md:mx-[2px]'} inline-block ${textColor}`}
                style={{
                  textShadow: shadowColor,
                  transition: 'all 0.2s ease-out',
                  background: 'linear-gradient(to bottom, #ffd700, #f8f8f8, #daa520)',
                  WebkitBackgroundClip: 'text',
                  WebkitTextFillColor: 'transparent',
                  fontWeight: 'bold',
                }}
                initial={{ opacity: 0, y: -20 }}
                animate={{ 
                  opacity: 1, 
                  y: 0,
                  transition: { delay: 0.2 + (i * 0.05) }
                }}
                whileHover={{
                  scale: 1.2,
                  rotate: Math.random() > 0.5 ? 5 : -5,
                  textShadow: hoverShadowColor,
                  transition: { duration: 0.2, ease: "easeOut" }
                }}
              >
                {letter}
              </motion.span>
            );
          })}
        </motion.div>
        
        {/* Royal decorative elements after title */}
        <div className="hidden md:flex justify-center mb-8">
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-2"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-2"></div>
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-2"></div>
        </div>
        
        <motion.p 
          className="text-xl md:text-2xl mb-8 text-gray-300"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.4 }}
        >
          Innovate. Compete. Celebrate Technology!
        </motion.p>
        
        <motion.button 
          id="register"
          className="relative px-8 py-3 text-lg font-semibold bg-transparent border-2 border-neonBlue text-white rounded-md overflow-hidden group"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.5, delay: 0.6 }}
          whileHover={{ scale: 1.05, transition: { duration: 0.2, ease: "easeOut" } }}
          whileTap={{ scale: 0.95, transition: { duration: 0.1 } }}
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc0ah4dimSpBz5J43KtCz0amwBWi-WTYdG_xaUinI1g9engEA/viewform', '_blank')}
        >
          <span className="absolute inset-0 bg-neonBlue/20 group-hover:bg-neonBlue/30 transition-all duration-200"></span>
          <span className="relative z-10 flex items-center justify-center">
            <span>Register Now</span>
            <span className="ml-2 animate-pulse-slow">→</span>
          </span>
          <span className="absolute inset-0 glow-effect opacity-50"></span>
        </motion.button>
      </div>
      
      {/* Animated particles */}
      <div className="hidden md:block">
        {Array.from({ length: 20 }).map((_, i) => (
          <motion.div 
            key={i}
            className="absolute w-2 h-2 rounded-full bg-neonBlue"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
            }}
            animate={{
              y: [0, Math.random() * 100 - 50],
              x: [0, Math.random() * 100 - 50],
              opacity: [0.7, 0.1, 0.7],
              scale: [1, Math.random() * 2 + 0.5, 1]
            }}
            transition={{
              duration: Math.random() * 10 + 10,
              repeat: Infinity,
              repeatType: "reverse"
            }}
          />
        ))}
      </div>
    </section>
  );
};

export default Hero;
