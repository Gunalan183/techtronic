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
              <span className="text-neonBlue font-semibold">TECH TRONICS'25</span> is a premier technical symposium hosted by <span className="text-neonGreen font-semibold">Dhanalakshmi Srinivasan College of Engineering and Technology</span>, Department of Information Technology on <span className="text-neonBlue font-semibold">May 17, 2025</span>.
            </p>
            <p className="text-lg text-gray-300">
              We cordially invite students, faculty, and technology enthusiasts to join us for this exciting event that brings together the brightest minds in the field of Information Technology. The symposium will feature a diverse range of technical and non-technical events designed to challenge your skills and expand your knowledge.
            </p>
            {/* <p className="text-lg text-gray-300">
              Whether you're passionate about coding, interested in emerging technologies, or looking to showcase your creative problem-solving abilities, TECH TRONICS'25 offers a platform for you to shine. Connect with peers, learn from experts, and compete for prestigious awards and recognition.
            </p> */}
            
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
                <div className="text-sm text-gray-400"> Events</div>
              </div>
              <div className="h-10 w-px bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold neon-text">300+</div>
                <div className="text-sm text-gray-400">Expected Participants</div>
              </div>
              <div className="h-10 w-px bg-gray-700"></div>
              <div className="flex flex-col items-center">
                <div className="text-4xl font-bold text-neonGreen">₹10K+</div>
                <div className="text-sm text-gray-400">in Prizes & Certificates</div>
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
            <h4 className="text-lg font-semibold text-white mb-3 mt-6">Event Details & Guidelines</h4>
            <ul className="space-y-3">
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neonBlue mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400"><span className="text-neonGreen font-semibold">Date:</span> May 17, 2025 (Saturday) | <span className="text-neonGreen font-semibold">Time:</span> 9:00 AM - 4:30 PM</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neonBlue mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400"><span className="text-neonGreen font-semibold">Venue:</span> Dhanalakshmi Srinivasan College of Engineering and Technology, Department of Information Technology</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neonBlue mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400"><span className="text-neonGreen font-semibold">Registration:</span> All participants must register online before May 15, 2025. On-spot registrations subject to availability.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neonBlue mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400"><span className="text-neonGreen font-semibold">Eligibility:</span> Open to all undergraduate and postgraduate students from recognized institutions.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neonBlue mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400"><span className="text-neonGreen font-semibold">Requirements:</span> Valid college ID card, registration confirmation, and any specific materials mentioned for individual events.</span>
              </li>
              <li className="flex items-start">
                <svg className="w-5 h-5 text-neonBlue mr-3 mt-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
                <span className="text-gray-400"><span className="text-neonGreen font-semibold">Contact:</span> For queries, reach out to us at <span className="text-neonBlue">techtronics25@dscet.ac.in</span> or call <span className="text-neonBlue">+91 8680964114</span></span>
              </li>
            </ul>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
