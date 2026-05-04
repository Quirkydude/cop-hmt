// src/app/page.js
'use client';

import { useEffect, useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import Navbar from '@/components/Navbar';
import Link from 'next/link';
import { Play, ArrowRight, Camera, Volume2, Users, Sparkles, ChevronDown } from 'lucide-react';

export default function Home() {
  const heroRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: heroRef,
    offset: ["start start", "end start"]
  });
  
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 1.1]);
  const y = useTransform(scrollYProgress, [0, 1], [0, 100]);

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      {/* Full-Screen Hero with Parallax */}
      <section ref={heroRef} className="relative h-screen flex items-center justify-center overflow-hidden">
        {/* Background Image with Parallax Effect - Replace with your actual image */}
        <motion.div 
          style={{ scale, y }}
          className="absolute inset-0 z-0"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-blue-900/40 via-purple-900/40 to-black/80 z-10" />
          <img
            src="/images/main_banner.jpg"
            alt="Media Team in Action"
            className="w-full h-full object-cover"
          />
        </motion.div>

        {/* Floating Particles */}
        <div className="absolute inset-0 z-10">
          {[...Array(20)].map((_, i) => (
            <motion.div
              key={i}
              className="absolute w-1 h-1 bg-blue-400/50 rounded-full"
              style={{
                left: `${Math.random() * 100}%`,
                top: `${Math.random() * 100}%`,
              }}
              animate={{
                y: [0, -30, 0],
                opacity: [0, 1, 0],
              }}
              transition={{
                duration: Math.random() * 3 + 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            />
          ))}
        </div>

        {/* Hero Content */}
        <motion.div 
          style={{ opacity }}
          className="relative z-20 text-center px-4 max-w-5xl mx-auto"
        >
          {/* REC Indicator */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
            className="flex items-center justify-center gap-3 mb-8"
          >
            <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-4 py-2 rounded-full">
              <div className="pulse-rec w-3 h-3 bg-red-500 rounded-full" />
              <span className="text-red-400 font-mono text-xs tracking-[0.2em] uppercase">
                Studio Live
              </span>
            </div>
          </motion.div>

          {/* Main Title */}
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
            className="text-6xl md:text-8xl font-black text-white mb-6 leading-tight"
          >
            Lights.
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400"> Camera.</span>
            <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              God's Glory.
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.9 }}
            className="text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto mb-12 font-light"
          >
            We&apos;re the Habitat Media Team — crafting visual stories 
            that amplify the Gospel and create moments where heaven touches earth.
          </motion.p>

          {/* CTAs */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.1 }}
            className="flex flex-col sm:flex-row items-center justify-center gap-4"
          >
            <Link
              href="/live"
              className="group relative inline-flex items-center gap-3 bg-red-600 hover:bg-red-500 text-white px-8 py-4 rounded-full font-bold text-lg transition-all duration-300 overflow-hidden"
            >
              <motion.div
                className="absolute inset-0 bg-gradient-to-r from-red-600 to-red-500"
                animate={{ x: ['0%', '100%'] }}
                transition={{ duration: 2, repeat: Infinity }}
              />
              <span className="relative z-10 flex items-center gap-2">
                <Play className="w-5 h-5 fill-white" />
                Watch Live Now
              </span>
            </Link>
            
            <Link
              href="/our-work"
              className="group inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white px-8 py-4 rounded-full font-semibold border border-white/20 backdrop-blur-sm transition-all duration-300"
            >
              Explore Our Work
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20"
        >
          <ChevronDown className="w-8 h-8 text-white/50" />
        </motion.div>
      </section>

      {/* Quick Stats Section */}
      <section className="relative z-20 -mt-20 px-4">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[
              {
                icon: <Camera className="w-8 h-8" />,
                title: "Cinematic Production",
                stat: "4K",
                description: "Multi-camera live production with broadcast quality",
                color: "from-blue-500/20 to-blue-600/20 border-blue-500/30"
              },
              {
                icon: <Volume2 className="w-8 h-8" />,
                title: "Audio Engineering",
                stat: "Dolby",
                description: "Immersive sound for in-person and online worship",
                color: "from-purple-500/20 to-purple-600/20 border-purple-500/30"
              },
              {
                icon: <Users className="w-8 h-8" />,
                title: "Creative Team",
                stat: "25+",
                description: "Passionate volunteers crafting visual stories",
                color: "from-pink-500/20 to-pink-600/20 border-pink-500/30"
              }
            ].map((stat, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 + index * 0.2 }}
                whileHover={{ y: -5 }}
                className={`relative bg-gradient-to-br ${stat.color} backdrop-blur-xl border rounded-2xl p-8 group hover:shadow-2xl transition-all duration-300`}
              >
                <div className="text-gray-300 mb-4">{stat.icon}</div>
                <div className="text-3xl font-black text-white mb-2">{stat.stat}</div>
                <h3 className="text-white font-bold mb-2">{stat.title}</h3>
                <p className="text-gray-400 text-sm">{stat.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Featured Work Section */}
      <section className="py-32 px-4">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-center mb-16"
          >
            <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
              Our Latest
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Creations</span>
            </h2>
            <p className="text-gray-400 text-lg">Stories we've crafted for God's glory</p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {[1, 2, 3].map((item) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                whileHover={{ y: -10 }}
                className="group cursor-pointer relative overflow-hidden rounded-2xl aspect-video bg-gray-900"
              >
                <img
                  src={`/api/placeholder/640/360`}
                  alt={`Project ${item}`}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div>
                    <p className="text-blue-400 text-sm font-semibold mb-1">PROJECT {item}</p>
                    <h3 className="text-white font-bold text-xl">Worship Night Highlights</h3>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-32 px-4 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-600/20 to-purple-600/20" />
        <div className="max-w-4xl mx-auto text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
          >
            <Sparkles className="w-12 h-12 text-yellow-400 mx-auto mb-6" />
            <h2 className="text-4xl md:text-5xl font-black text-white mb-6">
              Ready to Join the
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Movement?</span>
            </h2>
            <p className="text-gray-300 text-xl mb-8 max-w-2xl mx-auto">
              No experience needed. Just a heart ready to serve and create for God's kingdom.
            </p>
            <Link
              href="/join"
              className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-purple-600 text-white px-10 py-5 rounded-full font-bold text-lg hover:shadow-2xl hover:shadow-blue-500/25 transition-all duration-300 group"
            >
              Start Your Journey
              <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
            </Link>
          </motion.div>
        </div>
      </section>
    </div>
  );
}