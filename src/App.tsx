import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import './App.css';

// Section Components
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Events from './components/sections/Events';
import Footer from './components/sections/Footer';

// Common Components
import NotificationBar from './components/common/NotificationBar';
import Navbar from './components/common/Navbar';
import BackgroundAudio from './components/common/BackgroundAudio';
import LoadingScreen from './components/common/LoadingScreen';

interface NotificationState {
  isVisible: boolean;
  message: string;
  type: 'success' | 'error' | 'info';
}

const App: React.FC = () => {
  // Loading state to control the display of loading screen
  const [isLoading, setIsLoading] = useState(true);
  
  const [notification, setNotification] = useState<NotificationState>({
    isVisible: false,
    message: '',
    type: 'info'
  });

  // Function to show notification
  const showNotification = (message: string, type: 'success' | 'error' | 'info' = 'info') => {
    setNotification({
      isVisible: true,
      message,
      type
    });
  };

  // Function to hide notification
  const hideNotification = () => {
    setNotification(prev => ({ ...prev, isVisible: false }));
  };

  // Handle register button click
  useEffect(() => {
    const registerBtn = document.getElementById('register');
    if (registerBtn) {
      registerBtn.addEventListener('click', () => {
        showNotification('Registration will open soon! Stay tuned.', 'info');
      });
    }

    return () => {
      if (registerBtn) {
        registerBtn.removeEventListener('click', () => {});
      }
    };
  }, []);

  return (
    <div className="App bg-darkBg min-h-screen">
      {/* Loading Screen */}
      <AnimatePresence>
        {isLoading && (
          <LoadingScreen 
            onLoadingComplete={() => setIsLoading(false)} 
          />
        )}
      </AnimatePresence>
      
      {/* Notification component */}
      <NotificationBar 
        isVisible={notification.isVisible}
        message={notification.message}
        type={notification.type}
        onClose={hideNotification}
      />
      
      {/* Background Audio */}
      <BackgroundAudio />
      
      {/* Navigation - only shown when loading is complete */}
      {!isLoading && <Navbar />}
      
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Hero />
        <About />
        <Events />
        <Footer />
      </motion.div>
    </div>
  );
};

export default App;
