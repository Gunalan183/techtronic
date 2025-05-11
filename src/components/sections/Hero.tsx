import React from 'react';
import { motion } from 'framer-motion';
import TechBackground from '../common/TechBackground';

// We'll use CSS classes for the neon flicker effect

const Hero: React.FC = () => {
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
      
      {/* Technical animated background */}
      <TechBackground variant="default" intensity="medium" animated={true} />
      
      <div className="container mx-auto px-4 text-center z-10 relative">
        {/* Royal decorative elements */}
        <div className="hidden md:flex justify-center mb-4">
          <div className="w-24 h-1 bg-gradient-to-r from-transparent via-yellow-400 to-transparent mx-2"></div>
          <div className="w-16 h-1 bg-gradient-to-r from-transparent via-yellow-500 to-transparent mx-2"></div>
          <div className="w-32 h-1 bg-gradient-to-r from-transparent via-yellow-300 to-transparent mx-2"></div>
        </div>
        <h1 
          className="text-4xl md:text-6xl lg:text-8xl font-bold mb-6 tracking-wider chopsic-font flex flex-wrap justify-center"
          style={{
            transform: 'perspective(800px) rotateX(5deg)',
            paddingBottom: '10px',
            position: 'relative',
          }}
        >
          {/* For larger screens */}
          <div className="hidden md:block">
            <span className="subtle-flicker" style={{ 
              color: '#ffd700',
              textShadow: '0 0 1px #ffd700'
            }}>TECH</span>
            <span className="subtle-flicker" style={{ 
              color: '#ffffff',
              textShadow: '0 0 1px #ffffff',
              animationDelay: '0.5s'
            }}>TRONICS</span>
            <span className="subtle-flicker" style={{ 
              color: '#ffd700',
              textShadow: '0 0 1px #ffd700',
              animationDelay: '1s'
            }}>'25</span>
          </div>
          
          {/* For mobile screens */}
          <div className="md:hidden">
            <div>
              <span className="subtle-flicker" style={{ 
                color: '#ffd700',
                textShadow: '0 0 1px #ffd700'
              }}>TECH</span>
              <span className="subtle-flicker" style={{ 
                color: '#ffffff',
                textShadow: '0 0 1px #ffffff',
                animationDelay: '0.5s'
              }}>TRONICS</span>
            </div>
            <span className="subtle-flicker" style={{ 
              color: '#ffd700',
              textShadow: '0 0 1px #ffd700',
              animationDelay: '1s'
            }}>'25</span>
          </div>
        </h1>
        
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
