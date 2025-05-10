import React from 'react';
import { motion } from 'framer-motion';

const About: React.FC = () => {
  return (
    <section id="about" className="py-16 md:py-24 relative overflow-hidden">
      {/* Background Video */}
      <div className="absolute inset-0 z-0">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute top-0 left-0 w-full h-full object-cover opacity-20"
          style={{ filter: 'brightness(0.3) contrast(1.2) blur(1px)' }}
        >
          <source src="/BackgroundVidio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to darken video */}
        <div className="absolute inset-0 bg-darkBg opacity-60"></div>
      </div>
      <div className="container mx-auto px-4">
        <motion.div 
          className="glass-effect p-8 md:p-12 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true, margin: "-100px" }}
        >
          <div className="text-center mb-10">
            <motion.h2 
              className="text-3xl md:text-4xl font-bold mb-2 inline-block neon-text"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              viewport={{ once: true }}
            >
              ABOUT THE SYMPOSIUM
            </motion.h2>
            <div className="w-24 h-1 bg-neonBlue mx-auto mt-2 rounded-full"></div>
          </div>
          
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            viewport={{ once: true }}
            className="text-center md:text-left space-y-4"
          >
            <p className="text-lg text-gray-300">
              <span className="text-neonBlue font-semibold">TECH TRONICS'25</span> is a premier technical symposium organized by the Department of Information Technology, bringing together the brightest minds and tech enthusiasts.
            </p>
            <p className="text-lg text-gray-300">
              Our symposium presents a fusion of technical and non-technical events designed for enthusiastic learners and competitive individuals. Whether you're a coding expert, a gaming enthusiast, or a creative thinker - we have something exciting for everyone!
            </p>
            <p className="text-lg text-gray-300">
              Join us for an unforgettable day of innovation, competition, and celebration of technology in all its forms. Explore cutting-edge concepts, showcase your skills, and connect with like-minded tech enthusiasts.
            </p>
          </motion.div>
          
          <motion.div 
            className="mt-10 flex justify-center"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.7, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="inline-flex space-x-4 items-center justify-center">
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold neon-text">8+</div>
                <div className="text-sm text-gray-400">Exciting Events</div>
              </div>
              <div className="h-10 w-px bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold neon-text">100+</div>
                <div className="text-sm text-gray-400">Participants</div>
              </div>
              <div className="h-10 w-px bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-neonGreen">₹10K+</div>
                <div className="text-sm text-gray-400">in Prizes</div>
              </div>
            </div>
          </motion.div>
          
          <motion.div
            className="mt-12"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.9, duration: 0.5 }}
            viewport={{ once: true }}
          >
            <h4 className="text-lg font-semibold text-white mb-3 mt-6">General Guidelines</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neonBlue mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400">All participants must register before the event.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neonBlue mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400">Participants must bring their valid college ID card.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neonBlue mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400">Late entries will not be accepted.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neonBlue mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400">The decision of judges will be final and binding.</span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
