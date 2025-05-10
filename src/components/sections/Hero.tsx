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
      
      {/* Background grid effect on top of video */}
      <div className="absolute inset-0 bg-[radial-gradient(#00f2ff_1px,transparent_1px)] [background-size:40px_40px] opacity-20 z-10"></div>
      
      <div className="container mx-auto px-4 text-center z-10">
        <motion.div 
          className="flex justify-center text-4xl md:text-6xl lg:text-8xl font-bold mb-4"
          initial={{ opacity: 0, y: -50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          {letters.map((letter, i) => (
            <motion.span
              key={i}
              className={`${letter === ' ' ? 'mx-2' : ''} ${i % 3 === 0 ? 'text-neonBlue' : i % 3 === 1 ? 'text-neonPurple' : 'text-neonGreen'}`}
              style={{
                textShadow: `0 0 5px ${i % 3 === 0 ? 'rgba(0, 242, 255, 0.8)' : i % 3 === 1 ? 'rgba(179, 0, 255, 0.8)' : 'rgba(57, 255, 20, 0.8)'}, 
                           0 0 10px ${i % 3 === 0 ? 'rgba(0, 242, 255, 0.5)' : i % 3 === 1 ? 'rgba(179, 0, 255, 0.5)' : 'rgba(57, 255, 20, 0.5)'}`
              }}
            >
              {letter}
            </motion.span>
          ))}
        </motion.div>
        
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
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc0ah4dimSpBz5J43KtCz0amwBWi-WTYdG_xaUinI1g9engEA/viewform', '_blank')}
        >
          <span className="absolute inset-0 bg-neonBlue/20 group-hover:bg-neonBlue/30 transition-all duration-300"></span>
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
