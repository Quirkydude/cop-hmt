// src/app/roles/page.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Camera, Music, Monitor, Image, ChevronDown, ChevronUp } from 'lucide-react';

const roles = [
  {
    id: 'camera',
    icon: <Camera className="w-8 h-8" />,
    title: 'Camera Operator',
    color: 'border-blue-500/30 hover:border-blue-400',
    glow: 'group-hover:shadow-blue-500/20',
    whatYouDo: 'Frame the action. Capture the emotion. Operate professional cameras during live services and events.',
    skills: 'Steady hands, attention to detail, ability to follow live direction.',
    personality: 'You love details. You notice what others miss. You see the beauty in a perfectly composed shot.',
  },
  {
    id: 'sound',
    icon: <Music className="w-8 h-8" />,
    title: 'Sound Engineer',
    color: 'border-purple-500/30 hover:border-purple-400',
    glow: 'group-hover:shadow-purple-500/20',
    whatYouDo: 'Mix the sound that carries the message. Balance audio for in-house and live stream audiences.',
    skills: 'Musical ear, technical aptitude, ability to multitask under pressure.',
    personality: 'You feel the mix before you hear it. You understand that clear sound opens hearts to the Word.',
  },
  {
    id: 'projection',
    icon: <Monitor className="w-8 h-8" />,
    title: 'Projection / Lyrics',
    color: 'border-green-500/30 hover:border-green-400',
    glow: 'group-hover:shadow-green-500/20',
    whatYouDo: 'Display lyrics, scriptures, and visuals. You are the guide for the congregation during worship.',
    skills: 'Fast typing, attention to timing, familiarity with presentation software.',
    personality: 'You are the unseen worship leader. You prepare the screens so hearts can be fully engaged.',
  },
  {
    id: 'photography',
    icon: <Image className="w-8 h-8" />,
    title: 'Photographer',
    color: 'border-orange-500/30 hover:border-orange-400',
    glow: 'group-hover:shadow-orange-500/20',
    whatYouDo: 'Capture the still moments that tell our story. From worship nights to community outreach.',
    skills: 'An eye for composition, basic camera knowledge, ability to move discreetly.',
    personality: 'You freeze time. You find the divine in the details and tell stories without words.',
  },
];

export default function Roles() {
  const [expandedRole, setExpandedRole] = useState(null);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <div className="max-w-7xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Find Your Place
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> in the Crew</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Every role is vital. Discover where your skills and passion meet the mission.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {roles.map((role, index) => (
            <motion.div
              key={role.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gray-900/80 backdrop-blur-sm border ${role.color} rounded-2xl cursor-pointer group transition-all ${role.glow}`}
              onClick={() => setExpandedRole(expandedRole === role.id ? null : role.id)}
            >
              <div className="p-6">
                <div className="flex items-center gap-4 mb-4">
                  <div className="text-gray-400 group-hover:text-white transition-colors">{role.icon}</div>
                  <h3 className="text-xl font-bold text-white">{role.title}</h3>
                </div>
                <p className="text-gray-400 text-sm">{role.whatYouDo}</p>
                
                <div className="flex justify-center mt-4">
                  {expandedRole === role.id ? (
                    <ChevronUp className="w-5 h-5 text-blue-400" />
                  ) : (
                    <ChevronDown className="w-5 h-5 text-gray-500 group-hover:text-white" />
                  )}
                </div>
              </div>

              <AnimatePresence>
                {expandedRole === role.id && (
                  <motion.div
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    className="overflow-hidden border-t border-gray-800"
                  >
                    <div className="p-6 space-y-4">
                      <div>
                        <h4 className="text-sm font-semibold text-blue-400 uppercase mb-1">Skills Needed</h4>
                        <p className="text-gray-300">{role.skills}</p>
                      </div>
                      <div>
                        <h4 className="text-sm font-semibold text-purple-400 uppercase mb-1">Personality Fit</h4>
                        <p className="text-gray-300 italic">“{role.personality}”</p>
                      </div>
                      <Link
                        href="/join"
                        className="block w-full text-center bg-blue-600 text-white font-semibold py-2 rounded-full hover:bg-blue-500 transition-all mt-4"
                      >
                        I&apos;m Interested
                      </Link>
                    </div>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}