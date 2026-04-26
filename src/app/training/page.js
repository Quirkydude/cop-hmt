// src/app/training/page.js
'use client';

import { useState } from 'react';
import { motion } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { Play, FileText, BookOpen, Download, Lock, ChevronRight, Star, Clock, BarChart3 } from 'lucide-react';

const trainingModules = [
  {
    id: 1,
    title: 'Camera Fundamentals',
    category: 'Video',
    duration: '45 min',
    level: 'Beginner',
    lessons: 8,
    progress: 0,
    locked: false,
    image: '/api/placeholder/640/360',
    color: 'from-blue-600 to-cyan-600',
  },
  {
    id: 2,
    title: 'Audio Mixing 101',
    category: 'Audio',
    duration: '60 min',
    level: 'Beginner',
    lessons: 12,
    progress: 0,
    locked: false,
    image: '/api/placeholder/640/360',
    color: 'from-purple-600 to-pink-600',
  },
  {
    id: 3,
    title: 'ProPresenter Mastery',
    category: 'Projection',
    duration: '30 min',
    level: 'Intermediate',
    lessons: 6,
    progress: 0,
    locked: false,
    image: '/api/placeholder/640/360',
    color: 'from-green-600 to-teal-600',
  },
  {
    id: 4,
    title: 'Advanced Cinematography',
    category: 'Video',
    duration: '90 min',
    level: 'Advanced',
    lessons: 15,
    progress: 0,
    locked: true,
    image: '/api/placeholder/640/360',
    color: 'from-orange-600 to-red-600',
  },
];

const quickGuides = [
  { title: 'Setting Up the Tripod', icon: <FileText className="w-4 h-4" />, type: 'PDF' },
  { title: 'Sound Board Quick Reference', icon: <FileText className="w-4 h-4" />, type: 'PDF' },
  { title: 'Camera Settings Cheatsheet', icon: <FileText className="w-4 h-4" />, type: 'PDF' },
  { title: 'Worship Flow Template', icon: <Download className="w-4 h-4" />, type: 'Download' },
];

export default function Training() {
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
          <BookOpen className="w-12 h-12 text-blue-400 mx-auto mb-4" />
          <h1 className="text-5xl font-black text-white mb-4">
            Training
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> Vault</span>
          </h1>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Equipping the next generation of media ministers. Learn, grow, create.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-12">
          {[
            { icon: <BookOpen className="w-6 h-6" />, label: 'Total Courses', value: '12', color: 'text-blue-400' },
            { icon: <Clock className="w-6 h-6" />, label: 'Hours of Content', value: '24+', color: 'text-purple-400' },
            { icon: <BarChart3 className="w-6 h-6" />, label: 'Active Learners', value: '18', color: 'text-green-400' },
          ].map((stat, i) => (
            <div key={i} className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-6 flex items-center gap-4">
              <div className={stat.color}>{stat.icon}</div>
              <div>
                <div className="text-2xl font-bold text-white">{stat.value}</div>
                <div className="text-gray-400 text-sm">{stat.label}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Courses Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
          {trainingModules.map((module, index) => (
            <motion.div
              key={module.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className={`bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl overflow-hidden group hover:border-blue-500/30 transition-all ${
                module.locked ? 'opacity-50' : 'hover:shadow-2xl cursor-pointer'
              }`}
            >
              <div className="relative h-48 overflow-hidden">
                <img
                  src={module.image}
                  alt={module.title}
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                />
                <div className={`absolute inset-0 bg-gradient-to-r ${module.color} opacity-60`} />
                <div className="absolute inset-0 flex items-center justify-center">
                  {module.locked ? (
                    <Lock className="w-12 h-12 text-white/50" />
                  ) : (
                    <Play className="w-12 h-12 text-white fill-white opacity-0 group-hover:opacity-100 transition-opacity" />
                  )}
                </div>
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full">
                    {module.level}
                  </span>
                  <span className="bg-black/60 backdrop-blur-sm text-white text-xs px-3 py-1 rounded-full flex items-center gap-1">
                    <Clock className="w-3 h-3" /> {module.duration}
                  </span>
                </div>
              </div>
              <div className="p-6">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-blue-400 text-xs font-semibold">{module.category}</span>
                  <div className="flex items-center gap-1">
                    <Star className="w-4 h-4 text-yellow-400 fill-yellow-400" />
                    <span className="text-gray-400 text-sm">{module.lessons} lessons</span>
                  </div>
                </div>
                <h3 className="text-xl font-bold text-white mb-4">{module.title}</h3>
                
                {/* Progress Bar */}
                {!module.locked && (
                  <div className="space-y-2">
                    <div className="flex justify-between text-sm">
                      <span className="text-gray-400">Progress</span>
                      <span className="text-white font-medium">{module.progress}%</span>
                    </div>
                    <div className="h-1.5 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="h-full bg-gradient-to-r from-blue-500 to-purple-500 rounded-full transition-all duration-500"
                        style={{ width: `${module.progress}%` }}
                      />
                    </div>
                  </div>
                )}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Quick Start Guides */}
        <div className="bg-gray-900/80 backdrop-blur-sm border border-gray-800 rounded-2xl p-8">
          <h2 className="text-2xl font-bold text-white mb-6 flex items-center gap-2">
            <Download className="w-6 h-6 text-blue-400" />
            Quick Start Guides
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {quickGuides.map((guide, i) => (
              <motion.a
                key={i}
                href="#"
                whileHover={{ x: 5 }}
                className="flex items-center justify-between bg-gray-800/50 hover:bg-gray-800 p-4 rounded-xl transition-all group"
              >
                <div className="flex items-center gap-3">
                  <div className="text-gray-400 group-hover:text-blue-400 transition-colors">{guide.icon}</div>
                  <span className="text-white font-medium">{guide.title}</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="text-xs text-gray-500 bg-gray-700 px-2 py-1 rounded">{guide.type}</span>
                  <ChevronRight className="w-4 h-4 text-gray-500 group-hover:text-white transition-colors" />
                </div>
              </motion.a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}