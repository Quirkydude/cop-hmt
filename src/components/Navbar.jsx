// src/components/Navbar.jsx
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Play, Users, FolderOpen, GraduationCap, Radio, ChevronDown } from 'lucide-react';
import Logo from './Logo';

const navigation = [
  { 
    name: 'Live', 
    href: '/live', 
    icon: <Radio className="w-4 h-4" />,
    highlight: true 
  },
  { 
    name: 'Our Work', 
    href: '/our-work', 
    icon: <FolderOpen className="w-4 h-4" /> 
  },
  { 
    name: 'The Crew', 
    href: '/crew', 
    icon: <Users className="w-4 h-4" /> 
  },
  { 
    name: 'Training', 
    href: '/training', 
    icon: <GraduationCap className="w-4 h-4" /> 
  },
];

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      className={`sticky top-0 z-50 transition-all duration-500 ${
        scrolled
          ? 'bg-[#0A0A0A]/90 backdrop-blur-xl border-b border-gray-800/50 shadow-2xl shadow-black/50'
          : 'bg-transparent'
      }`}
    >
      <div className="absolute inset-0 bg-gradient-to-r from-blue-600/5 via-purple-600/5 to-blue-600/5 pointer-events-none" />
      
      <nav className="max-w-7xl mx-auto flex items-center justify-between p-4 lg:px-8 relative">
        <Logo scrolled={scrolled} />

        {/* Desktop Navigation */}
        <div className="hidden lg:flex items-center gap-1">
          {navigation.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={`relative px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 flex items-center gap-2 group ${
                pathname === item.href
                  ? 'text-white bg-white/10'
                  : 'text-gray-400 hover:text-white hover:bg-white/5'
              } ${item.highlight ? 'border border-red-500/30 hover:border-red-400' : ''}`}
            >
              {item.icon}
              {item.name}
              {item.highlight && (
                <span className="absolute -top-1 -right-1 flex h-3 w-3">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500" />
                </span>
              )}
            </Link>
          ))}
          
          <div className="ml-4 pl-4 border-l border-gray-800">
            <Link
              href="/join"
              className="relative inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-6 py-2.5 rounded-full font-semibold text-sm hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300 group overflow-hidden"
            >
              <span className="relative z-10">Join the Crew</span>
              <motion.span
                className="absolute inset-0 bg-gradient-to-r from-purple-600 to-blue-600 opacity-0 group-hover:opacity-100 transition-opacity"
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
            </Link>
          </div>
        </div>

        {/* Mobile menu button */}
        <button
          className="lg:hidden relative w-10 h-10 flex items-center justify-center rounded-full bg-white/5 border border-gray-800 text-gray-400 hover:text-white"
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </nav>

      {/* Mobile Navigation */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            className="lg:hidden bg-[#0A0A0A]/95 backdrop-blur-xl border-t border-gray-800"
          >
            <div className="px-4 py-6 space-y-2">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all ${
                    pathname === item.href
                      ? 'bg-blue-600/20 text-blue-400'
                      : 'text-gray-400 hover:bg-white/5 hover:text-white'
                  }`}
                >
                  {item.icon}
                  <span className="font-medium">{item.name}</span>
                  {item.highlight && (
                    <span className="ml-auto flex items-center gap-1 text-xs text-red-400">
                      <span className="w-2 h-2 bg-red-500 rounded-full animate-pulse" />
                      LIVE
                    </span>
                  )}
                </Link>
              ))}
              <Link
                href="/join"
                onClick={() => setMobileMenuOpen(false)}
                className="block w-full text-center mt-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold py-3 px-6 rounded-full"
              >
                Join the Crew
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}