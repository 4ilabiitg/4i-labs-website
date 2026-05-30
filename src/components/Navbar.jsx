import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';

export default function Navbar() {
  const [activeTab, setActiveTab] = useState('home');
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: 'home', label: 'Home' },
    { id: 'curriculum', label: 'Course Structure' },
    { id: 'resources', label: 'Resources' },
    { id: 'leaderboard', label: 'Leaderboard' }
  ];

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-[#1f1f1f] bg-[#0a0a0a]/90 backdrop-blur-md text-[#e5e5e5] font-sans select-none">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        <div className="flex h-16 items-center justify-between">
          
          {}
          <div className="flex items-center gap-2.5 shrink-0 cursor-pointer">
            {}
            <div className="h-8 w-8 rounded-full overflow-hidden border border-cyan-500/20 shadow-[0_0_15px_rgba(6,182,212,0.35)] bg-[#060b11] flex items-center justify-center shrink-0">
              <img 
                src="/4i_logo.png" 
                alt="4i Labs Logo" 
                className="w-full h-full object-cover object-center scale-105"
              />
            </div>
            
            <div className="flex flex-col">
              <span className="text-sm font-bold tracking-tight text-white sm:text-base">
                4I<span className="text-cyan-400">LABS</span>
              </span>
              <span className="text-[9px] text-[#737373] tracking-widest uppercase font-mono font-bold -mt-0.5">
                
              </span>
            </div>
          </div>

          {}
          <div className="hidden md:flex items-center space-x-2">
            {navItems.map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={() => setActiveTab(item.id)}
                className={`px-4 py-2 text-sm font-semibold rounded-md border transition-colors duration-300 ease-in-out ${
                  activeTab === item.id 
                    ? 'text-cyan-400 bg-[#121212] border-[#262626]' 
                    : 'text-[#a3a3a3] border-transparent hover:text-white hover:bg-[#121212]/40'
                }`}
              >
                {item.label}
              </a>
            ))}
          </div>

          {}
          <div className="flex md:hidden">
            <button 
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="inline-flex items-center justify-center rounded-md p-2 text-[#a3a3a3] hover:bg-[#121212] hover:text-white focus:outline-hidden"
            >
              {isMobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>

        </div>
      </div>

      {}
      {isMobileMenuOpen && (
        <div className="md:hidden border-b border-[#1f1f1f] bg-[#0a0a0a] px-4 py-3 space-y-1">
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              onClick={() => {
                setActiveTab(item.id);
                setIsMobileMenuOpen(false);
              }}
              className={`flex w-full items-center rounded-md px-3 py-2 text-sm font-medium transition-colors duration-200 ${
                activeTab === item.id ? 'bg-[#121212] text-cyan-400' : 'text-[#a3a3a3] hover:bg-[#121212]/50 hover:text-white'
              }`}
            >
              {item.label}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
} 
