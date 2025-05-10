import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

interface Event {
  id: number;
  title: string;
  description: string;
  icon: string;
  type: 'Technical' | 'Non-Technical';
  rules: string[];
  venue: string;
  time: string;
  coordinators: {
    name: string;
    phone: string;
  }[];
}

interface EventModalProps {
  event: Event;
  onClose: () => void;
}

const EventModal: React.FC<EventModalProps> = ({ event, onClose }) => {
  return (
    <motion.div 
      className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center p-4"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      onClick={onClose}
    >
      <motion.div 
        className="bg-darkBg border border-neonBlue/50 rounded-lg max-w-lg w-full max-h-[80vh] overflow-y-auto neon-glow-subtle p-6"
        initial={{ scale: 0.9, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        exit={{ scale: 0.9, opacity: 0 }}
        transition={{ type: 'spring', damping: 20 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="flex justify-between items-start mb-4">
          <h3 className="text-2xl font-bold text-white neon-text neon-blue">{event.title}</h3>
          <button 
            onClick={onClose}
            className="text-gray-400 hover:text-white transition-colors duration-150"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>
        </div>
        
        <div className="space-y-4">
          <div>
            <span className={`inline-block px-3 py-1 rounded-full text-sm font-medium 
              ${event.type === 'Technical' ? 'bg-neonBlue/20 text-neonBlue' : 'bg-neonPurple/20 text-neonPurple'}`}>
              {event.type}
            </span>
          </div>
          
          {/* General Rules Section */}
          <div className="mb-6">
            <h4 className="text-xl font-bold text-white mb-3 neon-text neon-blue">General Rules</h4>
            <div className="space-y-3">
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neonBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">All participants must register before participating in any event.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neonBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">Participants must bring their valid college ID card.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neonBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">Late entries will not be accepted.</p>
                </div>
              </div>
              <div className="flex items-center space-x-3">
                <div className="flex-shrink-0">
                  <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-neonBlue" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                  </svg>
                </div>
                <div>
                  <p className="text-gray-300">The decision of judges will be final and binding.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Event Details</h4>
            <p className="text-gray-300">{event.description}</p>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Rules</h4>
            <ul className="list-disc pl-5 text-gray-300 space-y-1">
              {event.rules.map((rule, index) => (
                <li key={index}>{rule}</li>
              ))}
            </ul>
          </div>
          
          <div className="grid grid-cols-2 gap-4">
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Venue</h4>
              <p className="text-gray-300">{event.venue}</p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-white mb-2">Time</h4>
              <p className="text-gray-300">{event.time}</p>
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold text-white mb-2">Coordinators</h4>
            <div className="space-y-3">
              {event.coordinators.map((coordinator, index) => (
                <div key={index} className="flex items-center">
                  <div className="mr-3">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-neonBlue" viewBox="0 0 20 20" fill="currentColor">
                      <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-white">{coordinator.name}</p>
                    <a 
                      href={`tel:${coordinator.phone}`} 
                      className="text-neonGreen hover:underline inline-flex items-center"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-1" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                      </svg>
                      {coordinator.phone}
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pt-4 border-t border-gray-700">
            <button 
              className="w-full py-2 bg-neonBlue/20 hover:bg-neonBlue/30 text-neonBlue rounded-md transition-colors duration-150 font-medium"
              onClick={onClose}
            >
              Close
            </button>
          </div>
        </div>
      </motion.div>
    </motion.div>
  );
};

const Events: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'all' | 'technical' | 'nonTechnical'>('all');
  const [hoveredEvent, setHoveredEvent] = useState<number | null>(null);
  const [selectedEvent, setSelectedEvent] = useState<Event | null>(null);

  const events: Event[] = [
    {
      id: 1,
      title: 'Frontend Design',
      description: 'Showcase your UI/UX skills by designing and developing a responsive web interface based on the provided theme.',
      icon: '💻',
      type: 'Technical',
      rules: [
        'Each team should contain 3 members only',
        ' Participants can use AI tools',
        'Already designed projects are not allowed',
        ' 45 mins for designing and 15 minutes for review',
        ' Designers Must Defend UX Decisions – Brief 2-mins  rationale with each submission',
        'Code should be responsible.'
      ],
      venue: 'IT Lab ',
      time: '10:00 AM - 12:00 PM ',
      coordinators: [
        { name: '  SIVA SANJAY K ', phone: '9342806827' },
        { name: ' DARUNKISHORE C', phone: '9855405872' },
        { name: '  SRIMATHI K', phone: '9855405872' }
      ]
    },
    {
      id: 2,
      title: 'Paper Presentation',
      description: 'Present your research papers on emerging technologies like AI, ML, Blockchain, IoT, or Cybersecurity.',
      icon: '📝',
      type: 'Technical',
      rules: [
        ' Maximum Number of participants is 4',
        'The slide count should be within 7 slides',
        'Topics must relate to AI, IOT,CRYPTO(BITCOIN)',
        'More priorities for hands-on projects',
        'Maintain professionalism & keep idea confidential',
        'Each presentation is strictly 5-minutes no overruns.'
      ],
      venue: 'IT lab',
      time: '10.00AM - 12.00PM',
      coordinators: [
        { name: ' SRINITHI D', phone: '9876543212' },
        { name: 'Vijay srinivas S', phone:  '9123536026' },
        { name: 'VISHVA PRIYA S', phone:  '9123536026' }
      ]
    },
    {
      id: 3,
      title: 'Debugging',
      description: 'Hunt down and fix bugs in provided code snippets against the clock. Test your problem-solving skills!',
      icon: '🐛',
      type: 'Technical',
      rules: [
        ' Mobile phones will not be allowed',
        ' Internet connections will not be provided',
        'Avoid unnecessary malpractice',
        'Three rounds will be conducted with time constraints',
        ' I Round : 20 minutes',
 'II Round : 15 minutes',
 'III Round : 10 minutes',
 ' Last 15 minutes for review',
 'Languages - python , java',
      ],
      venue: 'IT Lab ',
      time: '10:00AM',
      coordinators: [
        { name: 'KAMESHWARAN S', phone: '8610863860' },
        { name: ' MADHUMITHA V ', phone: '9360464095' },
        { name: 'SANJAY ELANGOVAN', phone: '9360464095' }
      ]
    },
    {
      id: 4,
      title: 'Cyfer Shift',
      description: 'Crack codes, solve encryption puzzles, and navigate through cybersecurity challenges in this cryptography event.',
      icon: '🔐',
      type: 'Technical',
      rules: [
        ' Each team must consist of 2 members',
        ' Participants are required to bring their own mobile phone or laptop for the event',
        'Charging facilities may be limited',
        'Internet connections will not be provided',
        'Teams must complete the challenges within the given  time limit',
        'Participants must report to the venue on time. Late  entries will not be entertained.'
      ],
      venue: 'IT lab',
      time: '10:00am',
      coordinators: [
        { name: 'SHUBHANSHU NAVADIYA', phone: '9876543216' },
        { name: 'RAKESH K', phone: '9345494500' },
        { name: 'VARSHA K', phone: '9345494500' }
      ]
    },
    {
      id: 5,
      title: 'IPL Auction',
      description: 'Test your cricket knowledge and strategic thinking in this virtual IPL auction simulation.',
      icon: '🏏',
      type: 'Non-Technical',
      rules: [
        'Teams of 4 members',
       'Virtual IPL auction simulation',
       'Budget allocation, strategy, and bidding skills will be judged',
       ' Team with the best-balanced squad wins'
      ],
      venue: 'classroom 512',
      time: '11:00 AM ',
      coordinators: [
        { name: ' JOHNIE N', phone: '9876543218' },
        { name: ' MANIKANDAN B', phone: '9962366872' },
        { name: ' SANTHOSH KUMAR M', phone: '9962366872' }
      ]
    },
    {
      id: 6,
      title: 'Connections & Memorize',
      description: 'Test your memory skills and ability to find connections between seemingly unrelated images and concepts.',
      icon: '🧩',
      type: 'Non-Technical',
      rules: [
        'Round -1(Connection)',
        ' Maximum Number of participants is 2.',
        'Pictures will be displayed, Team members can discuss  among themselves',
        ' Observe the pictures carefully before answering.',
        ' The word which should find ,It will be a movie name or  song (first line)',
        'Round-2(Memorize the image)',
        ' Look Carefully :You will be shown one or more images for  a limited time (30 seconds)',
        ' Memory Only :After the image is hidden, Questions may  ask about specific details, object positions, colors, numbers, or the order of things',
        ' Be Honest :Play fair to keep the game fun for everyone!',
        ' One Answer per Question :You will be allowed to give one  answer per question',
        '  Have Fun! :Enjoy the game, whether you win or not'
      ],
      venue: 'Classroom 513',
      time: '10:30AM',
      coordinators: [
        { name: 'MOHAMED MOOSHA S', phone: '9876543220' },
        { name: 'HARISHETHIRA R', phone: '8072951693' },
        { name: 'GOWTHAM PRABAGARAN S', phone: '8072951693' }
      ]
    },
    {
      id: 7,
      title: 'Free Fire',
      description: 'Compete in this popular battle royale game to show off your gaming skills and teamwork.',
      icon: '🎮',
      type: 'Non-Technical',
      rules: [
        ' CLASH SQUAD match will be conducted',
        'Squad mode will played & players should  bring your own team and phone and internet',
        'No hack or cheats',
        ' No team up with opponents',
        ' Any offensive and mis- behaviour of team  member will disqualify whole team',
        ' Map and mode will be announced on the day'
        

      ],
      venue: 'E-Sports Arena, Student Center',
      time: '11:00AM',
      coordinators: [
        { name: ' SHIGIN K S', phone: '7695986629' },
        { name: 'RAGUL K', phone: '7904978433' },
        { name: 'RSANJAY S K ', phone: '9876543223' }
      ]
    },
    {
      id: 8,
      title: 'Chess',
      description: 'Showcase your strategic thinking and planning in this classic game of intellect.',
      icon: '♟️',
      type: 'Non-Technical',
      rules: [
        ' Both online and offline depends on board availability',
        ' Only 10 minutes per match',
        ' knock out - round'
      ],
      venue: 'Classroom 515',
      time: '10:00 AM',
      coordinators: [
        { name: 'PAPPU KUMAR ', phone: '9876543224' },
        { name: 'AL AMEEM H', phone: '7904610976' },
        { name: 'PRAVEENRAJ K', phone: '9876543225' }
      ]
    },
  ];

  const filteredEvents = events.filter(event => {
    if (activeTab === 'all') return true;
    if (activeTab === 'technical') return event.type === 'Technical';
    if (activeTab === 'nonTechnical') return event.type === 'Non-Technical';
    return true;
  });

  const handleMouseEnter = (id: number) => {
    setHoveredEvent(id);
  };

  const handleMouseLeave = () => {
    setHoveredEvent(null);
  };

  const handleMoreInfo = (event: Event) => {
    setSelectedEvent(event);
  };

  const closeModal = () => {
    setSelectedEvent(null);
  };

  return (
    <section id="events" className="py-16 md:py-24 relative overflow-hidden">
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
      
      {/* Tech-themed background elements */}
      <div className="absolute inset-0 z-1">
        {/* Circuit pattern */}
        <div className="absolute inset-0 bg-[radial-gradient(#00f2ff_1px,transparent_1px)] [background-size:40px_40px] opacity-5"></div>
        
        {/* Binary code pattern */}
        <div className="absolute inset-0 overflow-hidden opacity-5">
          <div className="absolute -top-20 left-0 text-[8px] text-neonBlue font-mono opacity-20 whitespace-nowrap animate-scrollText">
            {Array(20).fill(0).map((_, i) => (
              <div key={i} className="mb-2">
                {Array(100).fill(0).map((_, j) => (
                  <span key={j}>{Math.random() > 0.5 ? '1' : '0'}</span>
                ))}
              </div>
            ))}
          </div>
        </div>
        
        {/* Floating tech elements */}
        <div className="absolute top-1/4 left-1/4 w-32 h-32 border border-neonBlue/20 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-3/4 right-1/4 w-48 h-48 border border-neonGreen/20 rounded-full opacity-10 animate-pulse"></div>
        <div className="absolute top-1/2 left-3/4 w-24 h-24 border border-neonPurple/20 rounded-full opacity-10 animate-pulse"></div>
        
        {/* Grid lines */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#00f2ff10_1px,transparent_1px),linear-gradient(to_bottom,#00f2ff10_1px,transparent_1px)] [background-size:40px_40px] opacity-5"></div>
      </div>

      <AnimatePresence>
        {selectedEvent && <EventModal event={selectedEvent} onClose={closeModal} />}
      </AnimatePresence>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-12">
          <motion.h2 
            className="text-4xl md:text-5xl font-bold mb-4 text-white neon-text neon-blue"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Events
          </motion.h2>
          <motion.p 
            className="text-lg text-gray-300 max-w-2xl mx-auto"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            Explore our exciting lineup of technical and non-technical competitions.
          </motion.p>
        </div>

        {/* Event Tabs */}
        <div className="flex justify-center mb-10">
          <div className="inline-flex rounded-md overflow-hidden neon-glow-subtle">
            <button
              className={`px-6 py-3 text-sm font-medium transition-colors duration-150 ${activeTab === 'all' ? 'bg-neonBlue/30 text-white' : 'bg-darkBg/80 text-gray-300 hover:bg-neonBlue/10'}`}
              onClick={() => setActiveTab('all')}
            >
              All Events
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium transition-colors duration-150 ${activeTab === 'technical' ? 'bg-neonBlue/30 text-white' : 'bg-darkBg/80 text-gray-300 hover:bg-neonBlue/10'}`}
              onClick={() => setActiveTab('technical')}
            >
              Technical
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium transition-colors duration-150 ${activeTab === 'nonTechnical' ? 'bg-neonBlue/30 text-white' : 'bg-darkBg/80 text-gray-300 hover:bg-neonBlue/10'}`}
              onClick={() => setActiveTab('nonTechnical')}
            >
              Non-Technical
            </button>
          </div>
        </div>

        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          {filteredEvents.map((event, index) => (
            <motion.div
              key={event.id}
              className={`glass-card p-6 rounded-lg transition-all duration-200 relative overflow-hidden ${hoveredEvent === event.id ? 'glow-card' : ''}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              onMouseEnter={() => handleMouseEnter(event.id)}
              onMouseLeave={handleMouseLeave}
            >
              {/* Event Type Badge */}
              <span className={`absolute top-3 right-3 px-2 py-1 rounded-full text-xs font-medium
                ${event.type === 'Technical' ? 'bg-neonBlue/20 text-neonBlue' : 'bg-neonPurple/20 text-neonPurple'}`}>
                {event.type}
              </span>
              
              <div className="text-5xl mb-4">{event.icon}</div>
              <h3 className="text-xl font-bold mb-2 text-white">{event.title}</h3>
              <p className="text-gray-300 mb-4 line-clamp-3">{event.description}</p>
              
              <div className="flex space-x-3">
                <button 
                  className="btn-neon px-4 py-2 rounded-md text-sm font-medium"
                  onClick={() => window.open('https://docs.google.com/forms/d/e/1FAIpQLSc0ah4dimSpBz5J43KtCz0amwBWi-WTYdG_xaUinI1g9engEA/viewform', '_blank')}
                >
                  Register
                </button>
                <button 
                  className="px-4 py-2 rounded-md text-sm font-medium border border-neonGreen/50 text-neonGreen hover:bg-neonGreen/10 transition-colors duration-150"
                  onClick={() => handleMoreInfo(event)}
                >
                  More Info
                </button>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default Events;
