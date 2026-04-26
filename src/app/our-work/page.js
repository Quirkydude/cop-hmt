// src/app/our-work/page.js
'use client';

import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import Navbar from '@/components/Navbar';
import { X, ImageIcon, Video, Megaphone } from 'lucide-react';

const projects = [
  { id: 1, title: 'Easter Sunday Visuals', category: 'Motion Graphics', type: 'video', color: 'from-purple-600 to-blue-600', thumbnail: '🌅' },
  { id: 2, title: 'Youth Conference Poster', category: 'Print Design', type: 'image', color: 'from-orange-600 to-red-600', thumbnail: '🎨' },
  { id: 3, title: 'Weekend Service Recap', category: 'Video Editing', type: 'video', color: 'from-green-600 to-teal-600', thumbnail: '🎬' },
  { id: 4, title: 'Social Media Campaign', category: 'Digital Media', type: 'image', color: 'from-pink-600 to-rose-600', thumbnail: '📱' },
  { id: 5, title: 'Worship Night Promo', category: 'Video', type: 'video', color: 'from-indigo-600 to-purple-600', thumbnail: '🎤' },
  { id: 6, title: 'Sermon Series Graphics', category: 'Print Design', type: 'image', color: 'from-blue-600 to-indigo-600', thumbnail: '🖼️' },
];

export default function OurWork() {
  const [selectedProject, setSelectedProject] = useState(null);

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
            We don&apos;t just serve…
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400"> we create.</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A showcase of stories, designs, and media crafted by the Habitat Media Team.
          </p>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {projects.map((project, index) => (
            <motion.div
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              whileHover={{ y: -5, scale: 1.02 }}
              className="cursor-pointer group"
              onClick={() => setSelectedProject(project)}
            >
              <div className={`relative bg-gradient-to-br ${project.color} rounded-2xl p-6 h-64 overflow-hidden transition-all duration-300`}>
                <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-colors" />
                <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex justify-between items-start">
                    <span className="text-4xl">{project.thumbnail}</span>
                    <span className="bg-white/20 backdrop-blur-sm text-white text-xs font-semibold px-3 py-1 rounded-full">
                      {project.type === 'video' ? <Video className="w-4 h-4 inline mr-1" /> : <ImageIcon className="w-4 h-4 inline mr-1" />}
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-2xl font-bold text-white mt-auto">{project.title}</h3>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Fullscreen Preview Modal */}
        <AnimatePresence>
          {selectedProject && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-sm p-4"
              onClick={() => setSelectedProject(null)}
            >
              <motion.div
                initial={{ scale: 0.9, opacity: 0 }}
                animate={{ scale: 1, opacity: 1 }}
                exit={{ scale: 0.9, opacity: 0 }}
                className="bg-gray-900 rounded-2xl max-w-2xl w-full p-8 border border-gray-800"
                onClick={(e) => e.stopPropagation()}
              >
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <p className="text-blue-400 text-sm font-semibold">{selectedProject.category}</p>
                    <h3 className="text-3xl font-bold text-white">{selectedProject.title}</h3>
                  </div>
                  <button
                    onClick={() => setSelectedProject(null)}
                    className="text-gray-400 hover:text-white transition-colors"
                  >
                    <X className="w-6 h-6" />
                  </button>
                </div>
                <div className={`bg-gradient-to-br ${selectedProject.color} rounded-xl h-64 flex items-center justify-center text-6xl mb-6`}>
                  {selectedProject.thumbnail}
                </div>
                <p className="text-gray-300">
                  This is where a detailed description, full image, or embedded video would appear.
                  A testament to the creativity God has placed in our team.
                </p>
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </div>
  );
}