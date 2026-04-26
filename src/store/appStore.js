// src/store/appStore.js
import { create } from 'zustand';

const useAppStore = create((set) => ({
  // YouTube Stream State
  streamStatus: {
    isLive: false,
    videoId: null,
    manualUrl: null,
    title: '',
  },
  setStreamStatus: (status) => set({ streamStatus: status }),
  setManualUrl: (url) => set((state) => ({
    streamStatus: { ...state.streamStatus, manualUrl: url }
  })),

  // Modal States
  videoModalOpen: false,
  selectedVideo: null,
  setVideoModal: (open, video = null) => set({
    videoModalOpen: open,
    selectedVideo: video
  }),

  // Team Filter
  teamFilter: 'all',
  setTeamFilter: (filter) => set({ teamFilter: filter }),
}));

export default useAppStore;