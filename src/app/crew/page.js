// src/app/crew/page.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Heart, Star, Zap, Camera, Music, Monitor, Palette, Globe } from 'lucide-react';

const teamMembers = [
  {
    id: 1,
    name: 'Kwame Asante',
    role: 'Lead Camera Operator',
    image: '/api/placeholder/400/500',
    department: 'Camera',
    icon: <Camera className="w-5 h-5" />,
    bio: 'With 5 years behind the lens, Kwame sees every frame as an opportunity to capture God\'s glory.',
    skills: ['Cinematography', 'Live Switching', 'Color Grading'],
    social: { instagram: '#', twitter: '#' },
    featured: true,
  },
  {
    id: 2,
    name: 'Akua Mensah',
    role: 'Sound Engineer',
    image: '/api/placeholder/400/500',
    department: 'Audio',
    icon: <Music className="w-5 h-5" />,
    bio: 'Akua believes that clear sound opens hearts. She mixes with excellence and anointing.',
    skills: ['Live Mixing', 'Studio Recording', 'Acoustics'],
    social: { instagram: '#', twitter: '#' },
    featured: false,
  },
  {
    id: 3,
    name: 'David Ofori',
    role: 'Projection Specialist',
    image: '/api/placeholder/400/500',
    department: 'Projection',
    icon: <Monitor className="w-5 h-5" />,
    bio: 'The unseen worship leader. David ensures every lyric points hearts to Jesus.',
    skills: ['ProPresenter', 'Media Management', 'Live Lyrics'],
    social: { twitter: '#' },
    featured: false,
  },
  {
    id: 4,
    name: 'Grace Amoah',
    role: 'Lead Photographer',
    image: '/api/placeholder/400/500',
    department: 'Photography',
    icon: <Camera className="w-5 h-5" />,
    bio: 'Grace freezes divine moments in time. Her photos tell stories that words cannot.',
    skills: ['Portrait', 'Event Photography', 'Post-Processing'],
    social: { instagram: '#', linkedin: '#' },
    featured: true,
  },
  {
    id: 5,
    name: 'Emmanuel Kofi',
    role: 'Motion Designer',
    image: '/api/placeholder/400/500',
    department: 'Design',
    icon: <Palette className="w-5 h-5" />,
    bio: 'Emmanuel animates scripture. His motion graphics bring sermons to visual life.',
    skills: ['After Effects', '3D Animation', 'Visual Effects'],
    social: { instagram: '#', twitter: '#' },
    featured: false,
  },
  {
    id: 6,
    name: 'Sarah Adjei',
    role: 'Social Media Manager',
    image: '/api/placeholder/400/500',
    department: 'Digital',
    icon: <Zap className="w-5 h-5" />,
    bio: 'Sarah amplifies our reach. She ensures our digital presence reflects God\'s excellence.',
    skills: ['Content Strategy', 'Community Management', 'Analytics'],
    social: { instagram: '#', linkedin: '#' },
    featured: false,
  },
];

const departments = ['All', 'Camera', 'Audio', 'Projection', 'Photography', 'Design', 'Digital'];

export default function Crew() {
  const [selectedMember, setSelectedMember] = useState(null);
  const [filter, setFilter] = useState('All');

  const filteredMembers = filter === 'All' 
    ? teamMembers 
    : teamMembers.filter(m => m.department === filter);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <div className="flex items-center justify-center gap-2 mb-4">
            <Heart className="w-6 h-6 text-red-400" />
            <Star className="w-6 h-6 text-yellow-400" />
            <Zap className="w-6 h-6 text-blue-400" />
          </div>
          <h1 className="text-5xl md:text-6xl font-black text-white mb-4">
            Meet the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"> Crew</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            The heart and hands behind every production. Ordinary people doing extraordinary things for God.
          </p>
        </motion.div>

        {/* Department Filter */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {departments.map(dept => (
            <button
              key={dept}
              onClick={() => setFilter(dept)}
              className={`px-4 py-2 rounded-full text-sm font-medium transition-all ${
                filter === dept
                  ? 'bg-blue-600 text-white'
                  : 'bg-gray-800 text-gray-400 hover:bg-gray-700 hover:text-white'
              }`}
            >
              {dept}
            </button>
          ))}
        </div>

        {/* Team Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredMembers.map((member, index) => (
            <motion.div
              key={member.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              layout
              onClick={() => setSelectedMember(member)}
              className="group cursor-pointer"
            >
              <div className="relative bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden hover:border-blue-500/30 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-500/10">
                {/* Image Container */}
                <div className="relative h-80 overflow-hidden">
                  <img
                    src={member.image}
                    alt={member.name}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent" />
                  
                  {/* Department Badge */}
                  <div className="absolute top-4 left-4 flex items-center gap-2 bg-black/60 backdrop-blur-sm px-3 py-1.5 rounded-full">
                    {member.icon}
                    <span className="text-white text-xs font-medium">{member.department}</span>
                  </div>

                  {/* Featured Badge */}
                  {member.featured && (
                    <div className="absolute top-4 right-4 flex items-center gap-1 bg-yellow-500/20 backdrop-blur-sm border border-yellow-500/30 px-3 py-1.5 rounded-full">
                      <Star className="w-3 h-3 text-yellow-400 fill-yellow-400" />
                      <span className="text-yellow-400 text-xs font-medium">Core Team</span>
                    </div>
                  )}
                </div>

                {/* Info */}
                <div className="p-6 relative">
                  <h3 className="text-xl font-bold text-white mb-1">{member.name}</h3>
                  <p className="text-blue-400 text-sm font-medium mb-3">{member.role}</p>
                  
                  {/* Skills */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {member.skills.slice(0, 2).map(skill => (
                      <span key={skill} className="text-xs bg-gray-800 text-gray-300 px-2 py-1 rounded-full">
                        {skill}
                      </span>
                    ))}
                    {member.skills.length > 2 && (
                      <span className="text-xs bg-gray-800 text-gray-400 px-2 py-1 rounded-full">
                        +{member.skills.length - 2}
                      </span>
                    )}
                  </div>

                  {/* Social Links */}
                  <div className="flex gap-2">
                    {member.social.instagram && (
                      <a href={member.social.instagram} className="text-gray-500 hover:text-pink-400 transition-colors">
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.twitter && (
                      <a href={member.social.twitter} className="text-gray-500 hover:text-blue-400 transition-colors">
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                    {member.social.linkedin && (
                      <a href={member.social.linkedin} className="text-gray-500 hover:text-blue-600 transition-colors">
                        <Globe className="w-4 h-4" />
                      </a>
                    )}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Member Detail Modal */}
        <AnimatePresence>
          {selectedMember && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedMember(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0, y: 50 }}
                animate={{ scale: 1, opacity: 1, y: 0 }}
                exit={{ scale: 0.9, opacity: 0, y: 50 }}
                className="bg-gray-900 rounded-3xl max-w-4xl w-full overflow-hidden border border-gray-800"
                onClick={e => e.stopPropagation()}
              >
                <div className="grid grid-cols-1 md:grid-cols-2">
                  {/* Image Side */}
                  <div className="relative h-64 md:h-full">
                    <img
                      src={selectedMember.image}
                      alt={selectedMember.name}
                      className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-gray-900/50 to-transparent md:bg-gradient-to-t md:from-gray-900/80" />
                  </div>

                  {/* Info Side */}
                  <div className="p-8">
                    <div className="flex items-center gap-2 mb-2">
                      {selectedMember.icon}
                      <span className="text-blue-400 text-sm font-medium">{selectedMember.department}</span>
                    </div>
                    <h2 className="text-3xl font-bold text-white mb-2">{selectedMember.name}</h2>
                    <p className="text-blue-400 font-medium mb-4">{selectedMember.role}</p>
                    <p className="text-gray-400 mb-6">{selectedMember.bio}</p>
                    
                    <h4 className="text-white font-semibold mb-3">Skills & Expertise</h4>
                    <div className="flex flex-wrap gap-2 mb-6">
                      {selectedMember.skills.map(skill => (
                        <span key={skill} className="bg-gray-800 text-gray-300 px-3 py-1 rounded-full text-sm">
                          {skill}
                        </span>
                      ))}
                    </div>

                    <div className="flex gap-3">
                      {selectedMember.social.instagram && (
                        <a href={selectedMember.social.instagram} className="bg-pink-500/20 text-pink-400 p-2 rounded-full hover:bg-pink-500/30 transition-colors">
                          <Globe className="w-5 h-5" />
                        </a>
                      )}
                      {selectedMember.social.twitter && (
                        <a href={selectedMember.social.twitter} className="bg-blue-500/20 text-blue-400 p-2 rounded-full hover:bg-blue-500/30 transition-colors">
                          <Globe className="w-5 h-5" />
                        </a>
                      )}
                    </div>

                    <button
                      onClick={() => setSelectedMember(null)}
                      className="mt-6 text-gray-500 hover:text-white transition-colors"
                    >
                      Close
                    </button>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}