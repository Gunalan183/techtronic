import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface NavLinkProps {
  title: string;
  href: string;
  active: boolean;
  onClick: () => void;
}

const NavLink: React.FC<NavLinkProps> = ({ title, href, active, onClick }) => {
  return (
    <li className="relative group py-2 px-4">
      <a 
        href={href} 
        onClick={(e) => {
          e.preventDefault();
          onClick();
          const element = document.getElementById(href.substring(1));
          if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
          }
        }}
        className={`text-sm md:text-base transition-colors duration-300 ${active 
          ? 'text-neonBlue font-semibold' 
          : 'text-gray-300 hover:text-neonBlue'}`}
      >
        {title}
      </a>
      {active && (
        <motion.div 
          className="absolute bottom-0 left-1/2 transform -translate-x-1/2 h-0.5 bg-neonBlue"
          layoutId="activeIndicator"
          initial={{ width: 0 }}
          animate={{ width: '50%' }}
          transition={{ type: 'spring', stiffness: 300, damping: 30 }}
        />
      )}
    </li>
  );
};

const Navbar: React.FC = () => {
  const [activeSection, setActiveSection] = useState('top');
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const navLinks = [
    { title: 'Home', href: '#top' },
    { title: 'About', href: '#about' },
    { title: 'Events', href: '#events' },
    { title: 'Contact', href: '#contact' },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      
      // Update navbar background
      if (scrollPosition > 50) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
      
      // Update active section based on scroll position
      const sections = ['contact', 'events', 'about', 'top'];
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          
          if (rect.top <= 100 && rect.bottom >= 100) {
            setActiveSection(section);
            break;
          }
        }
      }
    };
    
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <nav 
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled 
          ? 'py-2 bg-darkBg/90 backdrop-blur-lg shadow-lg' 
          : 'py-4 bg-transparent'
      }`}
    >
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <a href="#top" className="text-xl md:text-2xl font-bold">
            <span className="neon-white" style={{ transition: 'none' }}>TECH</span>
            <span className="neon-white" style={{ transition: 'none' }}>TRONICS</span>
            <span className="neon-gold" style={{ transition: 'none' }}>'25</span>
          </a>
          
          {/* Desktop Navigation */}
          <ul className="hidden md:flex space-x-2">
            {navLinks.map((link) => (
              <NavLink 
                key={link.href} 
                title={link.title}
                href={link.href}
                active={activeSection === link.href.substring(1)}
                onClick={() => setActiveSection(link.href.substring(1))}
              />
            ))}
            <li>
              <a 
                href="#register" 
                className="ml-2 px-4 py-2 bg-transparent border border-neonBlue text-neonBlue rounded-md transition-all duration-300 hover:bg-neonBlue/20"
              >
                Register
              </a>
            </li>
          </ul>
          
          {/* Mobile Navigation Toggle */}
          <button 
            className="md:hidden text-gray-200 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle mobile menu"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              {isOpen ? (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              ) : (
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              )}
            </svg>
          </button>
        </div>
      </div>
      
      {/* Mobile Navigation Menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div 
            className="md:hidden fixed top-[60px] left-0 right-0 bottom-0 z-50 bg-black backdrop-blur-lg"
            initial={{ x: '100%', opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: '100%', opacity: 0 }}
            transition={{ type: 'spring', stiffness: 300, damping: 30 }}
          >
            <div className="h-full flex flex-col justify-between py-6">
              <ul className="flex flex-col py-4 space-y-4">
                {navLinks.map((link) => (
                  <motion.li 
                    key={link.href} 
                    className="py-2"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.1 * navLinks.indexOf(link) }}
                  >
                    <a 
                      href={link.href} 
                      className={`block px-8 py-3 text-xl transition-colors duration-300 ${
                        activeSection === link.href.substring(1) 
                          ? 'text-neonBlue font-semibold border-l-4 border-neonBlue pl-7' 
                          : 'text-gray-300'
                      }`}
                      onClick={(e) => {
                        e.preventDefault();
                        setActiveSection(link.href.substring(1));
                        setIsOpen(false);
                        const element = document.getElementById(link.href.substring(1));
                        if (element) {
                          element.scrollIntoView({ behavior: 'smooth' });
                        }
                      }}
                    >
                      {link.title}
                    </a>
                  </motion.li>
                ))}
              </ul>
              
              <div className="px-8 mt-auto">
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.4 }}
                >
                  <a 
                    href="#register" 
                    className="block w-full text-center py-3 px-6 bg-neonBlue/20 border-2 border-neonBlue text-neonBlue rounded-md transition-all duration-300 hover:bg-neonBlue/30 text-lg font-semibold"
                    onClick={() => setIsOpen(false)}
                  >
                    Register Now
                  </a>
                  
                  <div className="mt-6 text-center text-gray-500 text-sm">
                    <p>© 2025 TECHTRONICS. All rights reserved.</p>
                  </div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
