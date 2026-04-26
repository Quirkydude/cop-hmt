// src/app/join/page.js
'use client';

import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Heart, Sparkles, Send } from 'lucide-react';

export default function JoinPage() {
  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      <div className="max-w-4xl mx-auto px-4 py-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
            Join the
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Habitat Media Team</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            This isn’t just about running cameras. It’s about crafting a space where the Gospel is seen and heard clearly.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-16">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.2 }}
            className="space-y-6"
          >
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
              <Heart className="w-6 h-6 text-red-400 mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">Why Media Matters</h3>
              <p className="text-gray-400 text-sm">
                Every frame, every lyric on screen, every note mixed—these are modern-day tools for ministry. You help remove distractions and create an atmosphere for worship.
              </p>
            </div>
            <div className="bg-gray-900/80 border border-gray-800 rounded-2xl p-6">
              <Sparkles className="w-6 h-6 text-yellow-400 mb-3" />
              <h3 className="text-white font-bold text-lg mb-2">No Experience? Perfect.</h3>
              <p className="text-gray-400 text-sm">
                We believe in training and discipleship. If you have a willing heart, we&apos;ll teach you the skills. You&apos;ll be mentored by experienced team members.
              </p>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="bg-gray-900/80 backdrop-blur-sm border border-blue-500/20 rounded-2xl p-8"
          >
            <h3 className="text-2xl font-bold text-white mb-6">Ready to step in?</h3>
            <form className="space-y-4">
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Full Name</label>
                <input
                  type="text"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Phone Number</label>
                <input
                  type="tel"
                  className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors"
                  placeholder="+233 XX XXX XXXX"
                />
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Skill Level</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
                  <option>Beginner (No experience)</option>
                  <option>Intermediate (Some experience)</option>
                  <option>Advanced (Experienced)</option>
                </select>
              </div>
              <div>
                <label className="block text-sm font-medium text-gray-400 mb-1">Area of Interest</label>
                <select className="w-full bg-gray-800 border border-gray-700 rounded-lg px-4 py-2 text-white focus:outline-none focus:border-blue-500 transition-colors">
                  <option>Camera Operation</option>
                  <option>Sound Engineering</option>
                  <option>Projection/Lyrics</option>
                  <option>Photography</option>
                  <option>Graphic Design</option>
                  <option>I&apos;m open to anything!</option>
                </select>
              </div>
              <button
                type="submit"
                className="w-full flex items-center justify-center gap-2 bg-blue-600 text-white font-bold py-3 px-6 rounded-full hover:bg-blue-500 transition-all glow-hover mt-6"
              >
                Send Application
                <Send className="w-4 h-4" />
              </button>
            </form>
          </motion.div>
        </div>

        {/* Testimonial */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.6 }}
          className="text-center border-t border-gray-800 pt-12 mt-12"
        >
          <p className="text-gray-400 italic text-lg max-w-2xl mx-auto">
            “Joining the media team wasn’t just about learning tech. It became my ministry. Every time I hit &apos;record&apos; or switch a camera, I know I&apos;m part of someone&apos;s encounter with God.”
          </p>
          <footer className="mt-4 text-white font-semibold">— A current team member</footer>
        </motion.blockquote>
      </div>
    </div>
  );
}