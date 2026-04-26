// src/app/layout.js
import { Inter } from 'next/font/google';
import Link from 'next/link';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
});

export const metadata = {
  title: 'COP-HMT | Habitat Media Team - Assin Fosu Area',
  description: 'Behind every service, there\'s a team. We tell the story of what God is doing through media.',
  keywords: 'COP, Church of Pentecost, Assin Fosu, Media Team, Habitat, Live Stream',
  openGraph: {
    title: 'COP-HMT | Habitat Media Team',
    description: 'Crafting visual stories that amplify the Gospel',
    type: 'website',
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="dark">
      <body className={`${inter.className} bg-[#0A0A0A] text-gray-200 min-h-screen flex flex-col`}>
        <main className="flex-grow">{children}</main>

        {/* Global Floating CTA */}
        <Link
          href="/join"
          className="fixed bottom-8 right-8 z-50 group flex items-center gap-3 bg-gradient-to-r from-red-600 to-red-500 text-white font-bold py-4 px-6 rounded-full shadow-2xl hover:shadow-red-500/25 transition-all duration-300 hover:scale-105"
        >
          <span className="relative flex h-3 w-3">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-3 w-3 bg-red-500"></span>
          </span>
          <span className="hidden group-hover:inline">🔴</span>
          <span>Join the Crew</span>
        </Link>
      </body>
    </html>
  );
}