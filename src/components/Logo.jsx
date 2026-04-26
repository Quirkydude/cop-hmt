// src/components/Logo.jsx
'use client';

import { motion } from 'framer-motion';
import Link from 'next/link';

export default function Logo({ scrolled = false }) {
  return (
    <Link href="/" className="flex items-center gap-3 group">
      <motion.div
        whileHover={{ rotate: 360 }}
        transition={{ duration: 0.8, ease: "easeInOut" }}
        className="relative"
      >
        {/* Logo Container */}
        <div className={`relative w-12 h-12 rounded-xl overflow-hidden transition-all duration-300 ${
          scrolled ? 'scale-90' : 'scale-100'
        }`}>
          {/* Replace with your actual logo */}
          <div className="w-full h-full bg-gradient-to-br from-blue-600 to-purple-600 flex items-center justify-center">
            <span className="text-white font-bold text-xl">HMT</span>
          </div>
          
          {/* Glow effect */}
          <div className="absolute inset-0 bg-gradient-to-br from-blue-400/20 to-purple-400/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
        </div>
        
        {/* Orbiting ring */}
        <motion.div
          className="absolute -inset-2 border-2 border-blue-400/30 rounded-full"
          animate={{
            rotate: 360,
            scale: [1, 1.1, 1],
          }}
          transition={{
            rotate: { duration: 3, repeat: Infinity, ease: "linear" },
            scale: { duration: 2, repeat: Infinity, ease: "easeInOut" },
          }}
        />
      </motion.div>
      
      {/* Text Logo */}
      <div className="flex flex-col">
        <span className="font-bold text-lg leading-tight bg-gradient-to-r from-white to-gray-300 bg-clip-text text-transparent">
          HABITAT
        </span>
        <span className="text-xs font-medium text-blue-400 tracking-widest">
          MEDIA TEAM
        </span>
      </div>
    </Link>
  );
}