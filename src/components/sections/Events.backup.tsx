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
            className="text-gray-400 hover:text-white transition-colors"
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
              className="w-full py-2 bg-neonBlue/20 hover:bg-neonBlue/30 text-neonBlue rounded-md transition-colors font-medium"
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
        ' Designers Must Defend UX Decisions – Brief 2-mins  rationale with each submission'
      ],
      venue: 'IT Lab 2, Main Building',
      time: '10:00 AM - 12:00 PM, Day 1',
      coordinators: [
        { name: 'Arun Kumar', phone: '9876543210' },
        { name: 'Priya Singh', phone: '9876543211' }
      ]
    },
    {
      id: 2,
      title: 'Paper Presentation',
      description: 'Present your research papers on emerging technologies like AI, ML, Blockchain, IoT, or Cybersecurity.',
      icon: '📝',
      type: 'Technical',
      rules: [
        'Team of 2 members maximum',
        '10 minutes for presentation followed by 5 minutes Q&A',
        'Abstract submission required before the event',
        'Plagiarism will result in disqualification',
        'PowerPoint or similar presentation tools allowed'
      ],
      venue: 'Seminar Hall, IT Block',
      time: '2:00 PM - 5:00 PM, Day 1',
      coordinators: [
        { name: 'Ravi Shankar', phone: '9876543212' },
        { name: 'Meera Patel', phone: '9876543213' }
      ]
    },
    {
      id: 3,
      title: 'Debugging',
      description: 'Hunt down and fix bugs in provided code snippets against the clock. Test your problem-solving skills!',
      icon: '🐛',
      type: 'Technical',
      rules: [
        'Individual participation',
        'Multiple programming languages supported (C++, Java, Python)',
        '90 minutes to fix all bugs in the given programs',
        'Points based on number of bugs fixed and time taken',
        'No external resources allowed except official documentation'
      ],
      venue: 'IT Lab 1, Main Building',
      time: '9:00 AM - 10:30 AM, Day 2',
      coordinators: [
        { name: 'Vikram Joshi', phone: '9876543214' },
        { name: 'Neha Sharma', phone: '9876543215' }
      ]
    },
    {
      id: 4,
      title: 'Cyfer Shift',
      description: 'Crack codes, solve encryption puzzles, and navigate through cybersecurity challenges in this cryptography event.',
      icon: '🔐',
      type: 'Technical',
      rules: [
        'Team of 2 members',
        'Multiple rounds of increasing difficulty',
        'Knowledge of basic cryptography algorithms required',
        'Time limit of 2 hours for all challenges',
        'First team to solve all challenges wins'
      ],
      venue: 'Computer Center, 2nd Floor',
      time: '1:00 PM - 3:00 PM, Day 2',
      coordinators: [
        { name: 'Kamal Verma', phone: '9876543216' },
        { name: 'Anjali Gupta', phone: '9876543217' }
      ]
    },
    {
      id: 5,
      title: 'IPL Auction',
      description: 'Test your cricket knowledge and strategic thinking in this virtual IPL auction simulation.',
      icon: '🏏',
      type: 'Non-Technical',
      rules: [
        'Teams of 3 members',
        'Virtual currency provided for bidding',
        'Must create a balanced team within budget',
        'Knowledge of cricket players and their performances is crucial',
        'Judging based on team composition, strategy, and budget management'
      ],
      venue: 'Auditorium, Ground Floor',
      time: '11:00 AM - 1:00 PM, Day 1',
      coordinators: [
        { name: 'Rahul Khanna', phone: '9876543218' },
        { name: 'Divya Kapoor', phone: '9876543219' }
      ]
    },
    {
      id: 6,
      title: 'Connections & Memorize',
      description: 'Test your memory skills and ability to find connections between seemingly unrelated images and concepts.',
      icon: '🧩',
      type: 'Non-Technical',
      rules: [
        'Individual or team of 2',
        'Multiple rounds with increasing difficulty',
        'Limited time to memorize images or patterns',
        'Points awarded for correct connections identified',
        'Finals will be conducted with audience participation'
      ],
      venue: 'Classroom 103, IT Block',
      time: '3:00 PM - 5:00 PM, Day 2',
      coordinators: [
        { name: 'Suresh Menon', phone: '9876543220' },
        { name: 'Tanya Roy', phone: '9876543221' }
      ]
    },
    {
      id: 7,
      title: 'Free Fire',
      description: 'Compete in this popular battle royale game to show off your gaming skills and teamwork.',
      icon: '🎮',
      type: 'Non-Technical',
      rules: [
        'Squad match (4 players per team)',
        'Custom room matches',
        'Points based on placement and eliminations',
        'Players must bring their own device and internet connection',
        'Multiple rounds with top teams advancing to finals'
      ],
      venue: 'E-Sports Arena, Student Center',
      time: '4:00 PM - 7:00 PM, Day 1',
      coordinators: [
        { name: 'Akash Patel', phone: '9876543222' },
        { name: 'Sneha Reddy', phone: '9876543223' }
      ]
    },
    {
      id: 8,
      title: 'Chess',
      description: 'Showcase your strategic thinking and planning in this classic game of intellect.',
      icon: '♟️',
      type: 'Non-Technical',
      rules: [
        'Individual participation',
        'Standard FIDE rules apply',
        'Swiss tournament format with time controls',
        'Participants should bring their own chess clocks if possible',
        'Tie-breaking will be resolved according to standard chess regulations'
      ],
      venue: 'Reading Room, Library Building',
      time: '10:00 AM - 4:00 PM, Day 2',
      coordinators: [
        { name: 'Neeraj Chopra', phone: '9876543224' },
        { name: 'Tanvi Shah', phone: '9876543225' }
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
          className="absolute top-0 left-0 w-full h-full object-cover opacity-10"
          style={{ filter: 'brightness(0.2) contrast(1.1) blur(2px)' }}
        >
          <source src="/BackgroundVidio.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        {/* Overlay to darken video */}
        <div className="absolute inset-0 bg-darkBg opacity-75"></div>
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
              className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'all' ? 'bg-neonBlue/30 text-white' : 'bg-darkBg/80 text-gray-300 hover:bg-neonBlue/10'}`}
              onClick={() => setActiveTab('all')}
            >
              All Events
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'technical' ? 'bg-neonBlue/30 text-white' : 'bg-darkBg/80 text-gray-300 hover:bg-neonBlue/10'}`}
              onClick={() => setActiveTab('technical')}
            >
              Technical
            </button>
            <button
              className={`px-6 py-3 text-sm font-medium transition-colors ${activeTab === 'nonTechnical' ? 'bg-neonBlue/30 text-white' : 'bg-darkBg/80 text-gray-300 hover:bg-neonBlue/10'}`}
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
              className={`glass-card p-6 rounded-lg transition-all duration-300 relative overflow-hidden ${hoveredEvent === event.id ? 'glow-card' : ''}`}
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
                  onClick={() => console.log(`Register for ${event.title}`)}
                >
                  Register
                </button>
                <button 
                  className="px-4 py-2 rounded-md text-sm font-medium border border-neonGreen/50 text-neonGreen hover:bg-neonGreen/10 transition-colors"
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
