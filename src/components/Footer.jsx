import React, { useState, useEffect } from 'react';

export default function Footer() {
  const links = ['PROJECTS', 'PUBLICATIONS', 'EVENTS', 'TEAM'];
  const [isComingSoon, setIsComingSoon] = useState(false);
  const [mousePos, setMousePos] = useState({ x: 50, y: 50 });

  
  useEffect(() => {
    const handleMouseMove = (e) => {
      const { innerWidth, innerHeight } = window;
      const x = (e.clientX / innerWidth) * 100;
      const y = ((e.clientY - (document.documentElement.scrollHeight - innerHeight)) / innerHeight) * 100;
      setMousePos({ x, y });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  const handleLinkClick = (e) => {
    e.preventDefault();
    setIsComingSoon(true);
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="relative bg-[#05090c] text-[#e2e8f0] font-sans mt-20 select-none overflow-hidden w-full">
      
      {}
      <div className="absolute top-0 inset-x-0 h-[1px] bg-gradient-to-r from-transparent via-cyan-500/80 to-blue-500/20 animate-border-flow" />
      <div className="absolute top-0 inset-x-0 h-[4px] bg-gradient-to-r from-transparent via-cyan-400/20 to-transparent blur-md" />
      
      {}
      <div className="absolute inset-0 bg-[linear-gradient(rgba(6,182,212,0.015)_1px,transparent_1px),linear-gradient(90deg,rgba(6,182,212,0.015)_1px,transparent_1px)] bg-[size:30px_30px] opacity-80 pointer-events-none" />
      
      {}
      <div 
        className="absolute w-[450px] h-[450px] bg-cyan-500/5 rounded-full blur-[100px] pointer-events-none transition-all duration-700 ease-out mix-blend-screen"
        style={{
          left: `${mousePos.x - 20}%`,
          bottom: '-150px'
        }}
      />
      <div className="absolute -bottom-32 left-[15%] w-[500px] h-[350px] bg-blue-600/5 blur-[130px] rounded-full pointer-events-none animate-pulse-slow" />

      {}
      <div className="relative z-10 w-full px-4 sm:px-8 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
          
          {}
          <div className="md:col-span-7 min-h-[140px] flex flex-col justify-center">
            {isComingSoon ? (
              <div className="space-y-2 animate-fadeIn">
                <h2 className="text-3xl sm:text-4xl font-mono font-bold tracking-tight text-cyan-400 drop-shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  &gt; Coming Soon...
                </h2>
                <p className="text-[#517185] text-sm tracking-widest uppercase font-mono pl-1">
                  
                </p>
              </div>
            ) : (
              <div className="space-y-4 animate-fadeIn">
                <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight leading-tight bg-gradient-to-r from-white via-cyan-400 to-blue-400 bg-clip-text text-transparent">
                  Let's Ideate, Innovate,<br />
                  Implement, Incubate !
                </h2>
                {}
                <p className="text-slate-200 text-xs sm:text-sm tracking-wider uppercase font-mono font-black flex items-center gap-2 pl-0.5">
                  <span>© {new Date().getFullYear()} 4I LABS</span>
                  <span className="text-[#134154] font-light">|</span>
                  <span className="text-cyan-400 drop-shadow-[0_0_8px_rgba(34,211,238,0.2)]">IIT GUWAHATI</span>
                </p>
              </div>
            )}
          </div>

          {}
          <div className="md:col-span-5 grid grid-cols-2 gap-8 md:justify-items-end text-sm w-full">
            
            <div className="md:w-32">
              <p className="text-[#426175] font-mono font-bold mb-4 text-xs tracking-widest border-b border-[#133547]/40 pb-1">LINKS</p>
              <ul className="space-y-2.5">
                {links.map((link) => (
                  <li key={link}>
                    <button 
                      onClick={handleLinkClick}
                      className="text-[#849db5] hover:text-cyan-400 font-semibold transition-all duration-200 block text-xs hover:translate-x-1 cursor-pointer bg-transparent border-none p-0 text-left tracking-widest"
                    >
                      {link}
                    </button>
                  </li>
                ))}
              </ul>
            </div>

            <div className="md:w-32">
              <p className="text-[#426175] font-mono font-bold mb-4 text-xs tracking-widest border-b border-[#133547]/40 pb-1">SOCIALS</p>
              <ul className="space-y-2.5 text-xs font-semibold">
                <li>
                  <a href="https://www.instagram.com/4ilabiitg/" target="_blank" rel="noopener noreferrer" className="text-[#849db5] hover:text-white transition-colors duration-200 block tracking-widest">
                    INSTAGRAM
                  </a>
                </li>
                <li>
                  <a href="https://github.com/4ilabiitg/" target="_blank" rel="noopener noreferrer" className="text-[#849db5] hover:text-white transition-colors duration-200 block tracking-widest">
                    GITHUB
                  </a>
                </li>
                <li>
                  <a href="https://www.linkedin.com/company/4ilabiitg/?originalSubdomain=in" target="_blank" rel="noopener noreferrer" className="text-[#849db5] hover:text-white transition-colors duration-200 block tracking-widest">
                    LINKEDIN
                  </a>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {}
        <div className="mt-16 pt-8 border-t border-[#133547]/40 flex flex-col sm:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-2.5 text-[10px] text-[#517185] font-mono tracking-widest">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_rgba(16,185,129,0.6)] animate-pulse" />
            <span>online</span>
          </div>
          
          <button 
            onClick={scrollToTop}
            className="px-3 py-1.5 rounded-md border border-[#1e3d52] bg-[#0c1a24]/40 text-[#849db5] text-xs font-bold font-mono tracking-wider hover:border-cyan-500/40 hover:text-cyan-400 hover:shadow-[0_0_15px_rgba(6,182,212,0.15)] transition-all duration-300 cursor-pointer"
          >
            BACK TO TOP ↑
          </button>
        </div>

      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(6px); }
          to { opacity: 1; transform: translateY(0); }
        }
        @keyframes borderFlow {
          0% { background-position: 0% 50%; }
          50% { background-position: 100% 50%; }
          100% { background-position: 0% 50%; }
        }
        @keyframes pulseSlow {
          0%, 100% { opacity: 0.2; transform: scale(1); }
          50% { opacity: 0.35; transform: scale(1.08); }
        }
        .animate-fadeIn {
          animation: fadeIn 0.4s cubic-bezier(0.16, 1, 0.3, 1) forwards;
        }
        .animate-border-flow {
          background-size: 200% 100%;
          animation: borderFlow 8s linear infinite;
        }
        .animate-pulse-slow {
          animation: pulseSlow 6s ease-in-out infinite;
        }
      `}</style>
    </footer>
  );
} 
