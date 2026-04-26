// src/app/live/page.js
'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Play, Film, ExternalLink, Clock, Radio, AlertCircle, Users } from 'lucide-react';
import useAppStore from '@/store/appStore';

export default function LivePage() {
  const { streamStatus } = useAppStore();
  const [streamUrl, setStreamUrl] = useState('');
  const [useManualUrl, setUseManualUrl] = useState(false);

  // Simulated stream data (replace with actual API call)
  const [liveStatus, setLiveStatus] = useState({
    isLive: true, // Set to true for demo
    videoId: 'dQw4w9WgXcQ', // Replace with actual video ID
    title: 'COP Assin Fosu - Sunday Service Live',
    thumbnail: '/api/placeholder/1280/720',
    viewers: 342,
  });

  const getEmbedUrl = () => {
    if (useManualUrl && streamUrl) {
      // Extract video ID from URL if needed
      const videoId = streamUrl.includes('youtube.com') 
        ? new URL(streamUrl).searchParams.get('v') 
        : streamUrl;
      return `https://www.youtube.com/embed/${videoId}?autoplay=1`;
    }
    return `https://www.youtube.com/embed/${liveStatus.videoId}?autoplay=1`;
  };

  return (
    <div className="min-h-screen bg-[#0A0A0A]">
      <Navbar />
      
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4"
        >
          <div>
            <div className="flex items-center gap-3 mb-2">
              {liveStatus.isLive ? (
                <div className="flex items-center gap-2 bg-red-500/10 border border-red-500/30 px-4 py-1.5 rounded-full">
                  <div className="pulse-rec w-2.5 h-2.5 bg-red-500 rounded-full" />
                  <span className="text-red-400 font-bold text-sm tracking-wider">LIVE NOW</span>
                </div>
              ) : (
                <div className="flex items-center gap-2 bg-yellow-500/10 border border-yellow-500/30 px-4 py-1.5 rounded-full">
                  <Clock className="w-4 h-4 text-yellow-400" />
                  <span className="text-yellow-400 font-bold text-sm tracking-wider">UPCOMING</span>
                </div>
              )}
              <div className="flex items-center gap-2 text-gray-400 text-sm">
                <Users className="w-4 h-4" />
                <span>{liveStatus.viewers} watching</span>
              </div>
            </div>
            <h1 className="text-3xl md:text-4xl font-bold text-white">
              {liveStatus.title}
            </h1>
          </div>

          {/* Manual URL Toggle */}
          <button
            onClick={() => setUseManualUrl(!useManualUrl)}
            className="flex items-center gap-2 bg-gray-800 hover:bg-gray-700 text-gray-300 px-4 py-2 rounded-full text-sm transition-colors"
          >
            <ExternalLink className="w-4 h-4" />
            {useManualUrl ? 'Use Church Stream' : 'Enter Stream URL'}
          </button>
        </motion.div>

        {/* Manual URL Input */}
        {useManualUrl && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            className="mb-6"
          >
            <div className="flex gap-2">
              <input
                type="text"
                value={streamUrl}
                onChange={(e) => setStreamUrl(e.target.value)}
                placeholder="Paste YouTube Live URL here..."
                className="flex-1 bg-gray-800 border border-gray-700 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-blue-500 transition-colors"
              />
              <button
                onClick={() => setUseManualUrl(false)}
                className="bg-blue-600 hover:bg-blue-500 text-white px-6 py-3 rounded-xl font-semibold transition-colors"
              >
                Load
              </button>
            </div>
          </motion.div>
        )}

        {/* Stream Player */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* Main Player */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            className="lg:col-span-2"
          >
            <div className="relative bg-black rounded-2xl overflow-hidden shadow-2xl shadow-blue-500/10">
              {/* Player Container */}
              <div className="aspect-video">
                <iframe
                  src={getEmbedUrl()}
                  className="w-full h-full"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                  allowFullScreen
                />
              </div>
              
              {/* Stream Info Overlay */}
              <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/90 to-transparent p-6">
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <Film className="w-8 h-8 text-red-500" />
                    <div>
                      <p className="text-white font-semibold">COP Assin Fosu Area</p>
                      <p className="text-gray-400 text-sm">Habitat Media Team Production</p>
                    </div>
                  </div>
                  <a
                    href={`https://youtube.com/watch?v=${liveStatus.videoId}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 bg-red-600 hover:bg-red-500 text-white px-4 py-2 rounded-full text-sm font-semibold transition-colors"
                  >
                    Watch on YouTube
                    <ExternalLink className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Chat / Info Sidebar */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            className="space-y-4"
          >
            {/* Stream Info Card */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <Radio className="w-6 h-6 text-blue-400 mb-4" />
              <h3 className="text-white font-bold text-lg mb-3">About This Stream</h3>
              <div className="space-y-3 text-sm text-gray-400">
                <div className="flex justify-between">
                  <span>Production</span>
                  <span className="text-white font-medium">Habitat Media Team</span>
                </div>
                <div className="flex justify-between">
                  <span>Quality</span>
                  <span className="text-white font-medium">1080p HD</span>
                </div>
                <div className="flex justify-between">
                  <span>Audio</span>
                  <span className="text-white font-medium">Dolby Digital</span>
                </div>
              </div>
            </div>

            {/* Service Times */}
            <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6">
              <Clock className="w-6 h-6 text-purple-400 mb-4" />
              <h3 className="text-white font-bold text-lg mb-3">Service Times</h3>
              <div className="space-y-3">
                {[
                  { day: 'Sunday', time: '7:00 AM - 10:00 AM' },
                  { day: 'Wednesday', time: '6:00 PM - 8:00 PM' },
                  { day: 'Friday', time: '7:00 PM - 9:00 PM' },
                ].map((service, i) => (
                  <div key={i} className="flex justify-between text-sm">
                    <span className="text-gray-400">{service.day}</span>
                    <span className="text-white font-medium">{service.time}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Prayer Request Quick Link */}
            <a
              href="#prayer"
              className="block bg-gradient-to-r from-blue-600/20 to-purple-600/20 border border-blue-500/30 rounded-2xl p-6 text-center hover:border-blue-400 transition-all group"
            >
              <p className="text-white font-semibold mb-1">Need Prayer?</p>
              <p className="text-gray-400 text-sm">Our team is here for you</p>
            </a>
          </motion.div>
        </div>
      </div>
    </div>
  );
}