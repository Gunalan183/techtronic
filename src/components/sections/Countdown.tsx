import React, { useState, useEffect, useRef } from 'react';
import { motion, useAnimation } from 'framer-motion';
import TechBackground from '../common/TechBackground';

const Countdown: React.FC = () => {
  // Set the event date (May 17, 2025)
  const eventDate = new Date('2025-05-17T09:00:00');
  
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0
  });

  // Animation controls
  const controls = useAnimation();
  const ref = useRef<HTMLDivElement>(null);

  // Animation variants
  const fadeInUp = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut"
      }
    }
  };

  const staggerChildren = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  useEffect(() => {
    // Start animation when component mounts
    controls.start('visible');
  }, [controls]);

  useEffect(() => {
    const calculateTimeLeft = () => {
      const difference = +eventDate - +new Date();
      
      if (difference > 0) {
        setTimeLeft({
          days: Math.floor(difference / (1000 * 60 * 60 * 24)),
          hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
          minutes: Math.floor((difference / 1000 / 60) % 60),
          seconds: Math.floor((difference / 1000) % 60)
        });
      }
    };

    // Calculate immediately
    calculateTimeLeft();
    
    // Update every second
    const timer = setInterval(calculateTimeLeft, 1000);
    
    // Clear interval on component unmount
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="py-16 relative overflow-hidden bg-darkBg/90">
      {/* Technical animated background */}
      <TechBackground variant="blue" intensity="low" animated={true} />
      
      <div className="container mx-auto px-4">
        <motion.div 
          ref={ref}
          initial="hidden"
          animate="visible"
          variants={fadeInUp}
          className="text-center"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-8 neon-text">
            The Countdown Has Begun
          </h2>
          
          <motion.div 
            className="flex flex-wrap justify-center gap-4 md:gap-8"
            variants={staggerChildren}
          >
            <TimeBlock value={timeLeft.days} label="Days" />
            <TimeBlock value={timeLeft.hours} label="Hours" />
            <TimeBlock value={timeLeft.minutes} label="Minutes" />
            <TimeBlock value={timeLeft.seconds} label="Seconds" />
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

interface TimeBlockProps {
  value: number;
  label: string;
}

const TimeBlock: React.FC<TimeBlockProps> = ({ value, label }) => {
  return (
    <motion.div 
      className="w-20 md:w-28 glass-card p-4 rounded-lg neon-border flex flex-col items-center"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { 
          opacity: 1, 
          y: 0,
          transition: {
            duration: 0.4,
            ease: "easeOut"
          }
        }
      }}
    >
      <span className="text-3xl md:text-4xl font-bold neon-text">{value}</span>
      <span className="text-sm text-gray-300">{label}</span>
    </motion.div>
  );
};

export default Countdown;
