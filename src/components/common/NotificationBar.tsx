import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NotificationBarProps {
  message: string;
  type: 'success' | 'error' | 'info';
  isVisible: boolean;
  onClose: () => void;
}

const NotificationBar: React.FC<NotificationBarProps> = ({ message, type, isVisible, onClose }) => {
  const [progress, setProgress] = useState(100);
  
  useEffect(() => {
    let timer: NodeJS.Timeout;
    let interval: NodeJS.Timeout;
    
    if (isVisible) {
      // Reset progress when notification becomes visible
      setProgress(100);
      
      // Set up interval to decrease progress
      interval = setInterval(() => {
        setProgress((prev) => Math.max(prev - 1, 0));
      }, 30);
      
      // Auto close after 3 seconds
      timer = setTimeout(() => {
        onClose();
      }, 3000);
    }
    
    return () => {
      clearTimeout(timer);
      clearInterval(interval);
    };
  }, [isVisible, onClose]);
  
  const getColors = () => {
    switch(type) {
      case 'success':
        return 'bg-neonGreen/20 border-neonGreen text-neonGreen';
      case 'error':
        return 'bg-red-500/20 border-red-500 text-red-400';
      case 'info':
      default:
        return 'bg-neonBlue/20 border-neonBlue text-neonBlue';
    }
  };
  
  return (
    <AnimatePresence>
      {isVisible && (
        <motion.div 
          className={`fixed top-4 left-1/2 transform -translate-x-1/2 z-50 max-w-md w-full px-4 py-3 rounded-lg shadow-lg border ${getColors()} glass-effect`}
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -100, opacity: 0 }}
          transition={{ type: 'spring', damping: 20, stiffness: 300 }}
        >
          <div className="flex justify-between items-center">
            <span className="font-medium">{message}</span>
            <button 
              onClick={onClose}
              className="focus:outline-none"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                <path fillRule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clipRule="evenodd"></path>
              </svg>
            </button>
          </div>
          
          {/* Progress bar */}
          <div className="w-full h-1 mt-2 bg-gray-700 rounded-full overflow-hidden">
            <motion.div 
              className="h-full rounded-full"
              initial={{ width: '100%' }}
              animate={{ width: `${progress}%` }}
              style={{ background: type === 'success' ? '#39ff14' : type === 'error' ? '#f43f5e' : '#00f2ff' }}
            />
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NotificationBar;
