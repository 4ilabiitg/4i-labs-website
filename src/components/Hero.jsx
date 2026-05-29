 import React, { useEffect } from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  useEffect(() => {
    const style = document.createElement('style');
    style.textContent = `
      @import url('https://fonts.googleapis.com/css2?family=Share+Tech+Mono&family=Inter:wght@400;500;600;700;900&display=swap');
      
      .quantum-page {
        font-family: 'Inter', sans-serif;
      }
      .mono-text {
        font-family: 'Share Tech Mono', monospace;
      }

      /* Premium Glass HUD Card Bases */
      .card-base {
        backdrop-filter: blur(20px);
        -webkit-backdrop-filter: blur(20px);
        transition: all 0.4s cubic-bezier(0.16, 1, 0.3, 1);
      }
      .card-week1 {
        background: linear-gradient(135deg, rgba(12, 37, 51, 0.75) 0%, rgba(6, 18, 26, 0.95) 100%);
      }
      .card-week2 {
        background: linear-gradient(135deg, rgba(19, 48, 64, 0.75) 0%, rgba(4, 12, 18, 0.95) 100%);
      }
      .card-week3 {
        background: linear-gradient(135deg, rgba(8, 29, 41, 0.75) 0%, rgba(3, 8, 13, 0.95) 100%);
      }

      /* High-performance UI vector rotation engines */
      @keyframes matrix-sphere-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes float-state-vector {
        0%, 100% { transform: translateY(0px) rotate(0deg); }
        50% { transform: translateY(-5px) rotate(1.5deg); }
      }
      @keyframes link-synapse-pulse {
        0%, 100% { opacity: 0.25; stroke-width: 0.7px; }
        50% { opacity: 0.85; stroke-width: 1.3px; }
      }
      @keyframes code-data-flow {
        0% { stroke-dashoffset: 24; }
        100% { stroke-dashoffset: 0; }
      }
      @keyframes orbital-shell-spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
      @keyframes whatsapp-radar-glow {
        0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.2); }
        70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
        100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
      }

      .animate-sphere-spin { animation: matrix-sphere-spin 60s linear infinite; }
      .animate-state-vector { animation: float-state-vector 6s ease-in-out infinite; }
      .animate-synapse-pulse { animation: link-synapse-pulse 3s ease-in-out infinite; }
      .animate-data-flow { animation: code-data-flow 1.5s linear infinite; }
      .animate-orbital-shell { animation: orbital-shell-spin 12s linear infinite; }
      .animate-whatsapp-radar { animation: whatsapp-radar-glow 2.5s infinite; }
    `;
    document.head.appendChild(style);
    return () => document.head.removeChild(style);
  }, []);

  return (
    <section className="quantum-page relative w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-[#050b0f] text-[#e2e8f0] flex flex-col justify-start border-b border-[#0c1b24] pt-6 sm:pt-10 lg:pt-14 pb-12 lg:pb-20">
      
      {}
      <div 
        className="absolute inset-0 pointer-events-none opacity-[0.22] mix-blend-screen select-none z-0"
        style={{
          background: `
            radial-gradient(circle at 15% 35%, #139ab3 0%, transparent 45%),
            radial-gradient(circle at 50% 20%, #1a4d5c 0%, transparent 40%),
            radial-gradient(circle at 85% 30%, #ffffff 0%, #139ab3 25%, transparent 60%)
          `
        }}
      />

      {}
      <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-6 xl:right-16 z-30">
        <a 
         href={import.meta.env.VITE_WHATSAPP_GROUP_LINK || "#"}
          target="_blank" 
          rel="noopener noreferrer"
          className="animate-whatsapp-radar inline-flex items-center gap-3 px-5 h-11 rounded-xl bg-[#0c1d24]/90 border border-green-500/20 text-green-400 hover:text-white hover:bg-green-500 hover:border-white shadow-[0_0_25px_rgba(34,197,94,0.15)] hover:shadow-[0_0_35px_rgba(34,197,94,0.4)] hover:scale-105 active:scale-95 transition-all duration-300 group backdrop-blur-md"
        >
          <svg className="w-4 h-4 fill-current transition-transform group-hover:rotate-12" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.714-1.458L0 24zm6.59-4.846c1.66 1.01 3.298 1.548 5.347 1.549 5.517 0 10.005-4.486 10.008-9.997.003-2.67-1.026-5.18-2.9-7.057C17.143 1.77 14.653.743 12.01.743c-5.525 0-10.01 4.487-10.013 10c-.001 2.024.529 4.004 1.532 5.7l-.995 3.633 3.723-.976zm12.181-7.141c-.326-.163-1.925-.949-2.221-1.055-.297-.108-.513-.162-.73.162-.216.324-.838 1.055-1.027 1.271-.19.216-.379.243-.705.082-.326-.162-1.378-.508-2.625-1.621-.969-.864-1.623-1.931-1.813-2.255-.19-.325-.02-.5-.183-.661-.147-.145-.327-.379-.49-.569-.163-.189-.217-.324-.326-.541-.109-.216-.055-.405-.027-.567.027-.162.216-.513.325-.676.108-.163.163-.27.244-.459.081-.189.041-.351-.014-.459-.054-.109-.513-1.236-.703-1.692-.186-.447-.372-.387-.512-.394-.132-.007-.284-.008-.437-.008-.153 0-.401.057-.611.286-.21.23-.8 0-.8 1.957 0 2.132 1.553 4.197 1.77 4.494.216.297 3.056 4.666 7.405 6.542 1.035.446 1.843.712 2.472.912 1.04.331 1.987.284 2.735.172.833-.124 1.925-.787 2.196-1.514.271-.727.271-1.352.19-1.486-.082-.136-.297-.217-.624-.38z"/>
          </svg>
          <span className="text-[12px] font-semibold tracking-tight font-sans">Join WhatsApp Group</span>
        </a>
      </div>

      <div className="w-full px-4 sm:px-8 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-10 xl:gap-12 items-center relative z-10 h-auto">
        
        {}
        <div className="lg:col-span-5 space-y-5 sm:space-y-6 text-left py-2 w-full">
          <h1 className="text-3xl sm:text-5xl xl:text-[3.6rem] font-black tracking-tighter text-white leading-[1.0] sm:leading-[0.95] uppercase">
            QC 101 <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29cfea] via-[#139ab3] to-white">
              QUANTUM COMPUTING
            </span> <br />
            SUMMER COURSE
          </h1>

          <p className="text-[#849db5] text-xs sm:text-sm xl:text-base font-normal leading-relaxed max-w-md">
            Master multi-qubit state vectors, compile hardware-level Qiskit circuits, and coordinate real-time workflows through industry-standard lab schedules.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-1 sm:pt-2">
            <a
              href="#resources"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold text-[#050b0f] transition-all duration-300 hover:opacity-90 hover:scale-[1.02] active:scale-[0.98] shadow-[0_0_30px_rgba(41,207,234,0.2)] justify-center sm:justify-start w-full sm:w-auto text-center"
              style={{ background: 'linear-gradient(135deg, #29cfea, #ffffff)' }}
            >
              Start Learning
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
            <a 
              href="#curriculum" 
              className="inline-flex items-center gap-2 rounded-full border border-[#1e3442] bg-[#07131a] px-7 py-3.5 text-xs font-bold text-[#849db5] hover:text-white hover:border-[#2b4b5e] transition-colors justify-center sm:justify-start w-full sm:w-auto text-center"
            >
              Explore Syllabus
            </a>
          </div>
        </div>

        {}
        <div className="lg:col-span-7 w-full m-0 p-0">
          
          {}
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            
            {}
            <div className="card-base card-week1 rounded-2xl border border-[#134154] p-4 flex flex-col justify-between shadow-2xl hover:border-[#29cfea]/40 group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-white flex flex-col">
                    <span className="text-[#29cfea] text-[11px] font-bold uppercase tracking-wider">Week 01</span>
                    <span className="text-[13px] font-bold tracking-wide mt-0.5 text-slate-200 group-hover:text-white transition-colors">Foundations</span>
                  </span>
                </div>
                
                <div className="h-44 bg-[#03080c]/95 rounded-xl border border-[#0d2c3b] flex items-center justify-center relative overflow-hidden">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,207,234,0.03)_0%,transparent_75%)]" />
                  <div className="w-36 h-36 relative flex items-center justify-center">
                    <svg className="absolute w-full h-full animate-sphere-spin opacity-[0.3]" viewBox="0 0 100 100">
                      <circle cx="50" cy="50" r="44" stroke="#139ab3" strokeWidth="0.9" fill="none" style={{ filter: 'drop-shadow(0 0 3px rgba(19,154,179,0.5))' }} />
                      <ellipse cx="50" cy="50" rx="44" ry="8" stroke="#139ab3" strokeWidth="0.25" fill="none" />
                      <ellipse cx="50" cy="50" rx="44" ry="16" stroke="#139ab3" strokeWidth="0.25" fill="none" />
                      <ellipse cx="50" cy="50" rx="44" ry="24" stroke="#139ab3" strokeWidth="0.2" fill="none" />
                      <ellipse cx="50" cy="50" rx="44" ry="32" stroke="#139ab3" strokeWidth="0.2" fill="none" />
                      <ellipse cx="50" cy="50" rx="8" ry="44" stroke="#139ab3" strokeWidth="0.25" fill="none" />
                      <ellipse cx="50" cy="50" rx="16" ry="44" stroke="#139ab3" strokeWidth="0.25" fill="none" />
                      <ellipse cx="50" cy="50" rx="24" ry="44" stroke="#139ab3" strokeWidth="0.2" fill="none" />
                      <ellipse cx="50" cy="50" rx="32" ry="44" stroke="#139ab3" strokeWidth="0.2" fill="none" />
                      <ellipse cx="50" cy="43" rx="4" ry="4" stroke="#139ab3" strokeWidth="0.2" fill="none" opacity="0.6" />
                      <ellipse cx="50" cy="40" rx="41" ry="6" stroke="#139ab3" strokeWidth="0.2" fill="none" opacity="0.5" />
                      <ellipse cx="50" cy="30" rx="36" ry="8" stroke="#139ab3" strokeWidth="0.2" fill="none" opacity="0.5" />
                      <ellipse cx="50" cy="60" rx="41" ry="6" stroke="#139ab3" strokeWidth="0.2" fill="none" opacity="0.5" />
                      <ellipse cx="50" cy="70" rx="36" ry="8" stroke="#139ab3" strokeWidth="0.2" fill="none" opacity="0.5" />
                    </svg>
                    <svg className="absolute inset-0 w-full h-full text-[#1e4254]" viewBox="0 0 100 100">
                      <line x1="50" y1="8" x2="50" y2="92" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 2" />
                      <line x1="8" y1="50" x2="92" y2="50" stroke="currentColor" strokeWidth="0.4" strokeDasharray="2 2" />
                      <text x="54" y="14" className="mono-text text-[8px] font-bold" fill="#29cfea">|0⟩</text>
                      <text x="54" y="90" className="mono-text text-[8px] font-bold" fill="#29cfea">|1⟩</text>
                    </svg>
                    <svg className="absolute inset-0 w-full h-full animate-state-vector" viewBox="0 0 100 100">
                      <line x1="50" y1="50" x2="72" y2="32" stroke="#ffffff" strokeWidth="2" style={{ filter: 'drop-shadow(0 0 3px #29cfea)' }} />
                      <circle cx="72" cy="32" r="2.5" fill="#fff" />
                    </svg>
                  </div>
                </div>

                <div className="mt-3 p-2 bg-[#02050a]/90 rounded-xl border border-[#0d2c3b] flex items-center justify-center h-12">
                  <svg className="w-full h-6" viewBox="0 0 160 30">
                    <line x1="10" y1="15" x2="150" y2="15" stroke="#16384a" strokeWidth="1" />
                    <circle cx="20" cy="15" r="3" fill="#29cfea" />
                    <rect x="58" y="4" width="18" height="18" rx="4" fill="rgba(41,207,234,0.03)" stroke="#29cfea" strokeWidth="0.75" />
                    <text x="64" y="16" className="text-[10px] font-bold fill-[#29cfea]" style={{ fontFamily: 'sans-serif' }}>H</text>
                    <rect x="94" y="4" width="18" height="18" rx="4" fill="rgba(255,255,255,0.03)" stroke="#ffffff" strokeWidth="0.75" />
                    <text x="100" y="16" className="text-[10px] font-bold fill-white" style={{ fontFamily: 'sans-serif' }}>X</text>
                    <path d="M146,12 L150,15 L146,18" fill="none" stroke="#16384a" strokeWidth="1" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-[#0d2c3b] flex items-center justify-between text-[10px] text-[#426175] font-bold tracking-wider uppercase mono-text">
                <span>QUBITS: 03</span>
                <span>DEPTH: 12</span>
              </div>
            </div>

            {}
            <div className="card-base card-week2 rounded-2xl border border-[#164459] p-4 flex flex-col justify-between shadow-2xl hover:border-white/40 group">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-white flex flex-col">
                    <span className="text-white text-[11px] font-bold uppercase tracking-wider">Week 02</span>
                    <span className="text-[13px] font-bold tracking-wide mt-0.5 text-slate-200 group-hover:text-white transition-colors">Qiskit IDE</span>
                  </span>
                </div>

                <div className="h-44 bg-[#03080c]/95 rounded-xl border border-[#14394c] p-3 text-[9px] font-mono leading-relaxed text-slate-400 relative overflow-hidden">
                  <div className="flex gap-2 mb-2 border-b border-[#14394c] pb-2 text-[8px] uppercase mono-text font-bold">
                    <span className="text-[#29cfea] bg-[#139ab3]/10 px-1.5 py-0.5 rounded border border-[#139ab3]/20">EXECUTE_CIRCUIT</span>
                    <span className="text-slate-600">PROFILER</span>
                  </div>
                  <p className="text-white"><span className="text-slate-600">import</span> qiskit <span className="text-slate-600">as</span> qk</p>
                  <p>circuit = qk.QuantumCircuit(<span className="text-[#29cfea]">3</span>)</p>
                  <p>circuit.h(<span className="text-[#29cfea]">0</span>)</p>
                  <p className="text-[#436275] text-[8px] mt-0.5">link bell architecture</p>
                  <p>circuit.cx(<span className="text-[#29cfea]">0</span>, <span className="text-[#29cfea]">1</span>)</p>
                  <p>circuit.cx(<span className="text-[#29cfea]">1</span>, <span className="text-[#29cfea]">2</span>)</p>
                  <div className="absolute bottom-0 inset-x-0 h-6 bg-gradient-to-t from-[#03080c] to-transparent" />
                </div>

                <div className="mt-3 p-2 bg-[#02050a]/90 rounded-xl border border-[#14394c] flex items-center justify-center h-12 relative overflow-hidden">
                  <svg className="w-full h-10" viewBox="0 0 160 40">
                    <g stroke="#0f3447" strokeWidth="0.75" className="animate-synapse-pulse">
                      <line x1="15" y1="8" x2="50" y2="8" /><line x1="15" y1="8" x2="50" y2="16" />
                      <line x1="15" y1="16" x2="50" y2="8" /><line x1="15" y1="16" x2="50" y2="16" /><line x1="15" y1="16" x2="50" y2="24" />
                      <line x1="15" y1="24" x2="50" y2="16" /><line x1="15" y1="24" x2="50" y2="24" />
                      <line x1="50" y1="8" x2="110" y2="8" /><line x1="50" y1="8" x2="110" y2="16" />
                      <line x1="50" y1="16" x2="110" y2="24" />
                      <line x1="50" y1="24" x2="110" y2="16" /><line x1="50" y1="24" x2="110" y2="32" />
                      <line x1="110" y1="16" x2="145" y2="20" />
                      <line x1="110" y1="24" x2="145" y2="20" />
                    </g>
                    <g stroke="#29cfea" strokeWidth="1.1" strokeDasharray="4 6" className="animate-data-flow">
                      <line x1="15" y1="16" x2="50" y2="16" />
                      <line x1="50" y1="16" x2="110" y2="24" />
                      <line x1="110" y1="24" x2="145" y2="20" />
                    </g>
                    <circle cx="15" cy="8" r="1.5" fill="#139ab3" /> <circle cx="15" cy="16" r="2.2" fill="#ffffff" /> <circle cx="15" cy="24" r="1.5" fill="#139ab3" />
                    <circle cx="50" cy="8" r="1.5" fill="#139ab3" /> <circle cx="50" cy="16" r="2.2" fill="#29cfea" /> <circle cx="50" cy="24" r="1.5" fill="#139ab3" />
                    <circle cx="110" cy="8" r="1.5" fill="#139ab3" /> <circle cx="110" cy="16" r="1.5" fill="#139ab3" /> <circle cx="110" cy="24" r="2.2" fill="#ffffff" />
                    <circle cx="145" cy="20" r="2.5" fill="#29cfea" />
                  </svg>
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-[#14394c] flex items-center justify-between text-[10px] text-[#426175] font-bold tracking-wider uppercase mono-text">
                <span>GATES: 15+</span>
                <span>RESOLVED: 1/3</span>
              </div>
            </div>

            {}
            <div className="card-base card-week3 rounded-2xl border border-[#11384a] p-4 flex flex-col justify-between shadow-2xl hover:border-[#29cfea]/40 group sm:col-span-2 md:col-span-1">
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="text-sm font-bold text-white flex flex-col">
                    <span className="text-[#29cfea] text-[11px] font-bold uppercase tracking-wider">Week 03</span>
                    <span className="text-[13px] font-bold tracking-wide mt-0.5 text-slate-200 group-hover:text-white transition-colors">Deployments</span>
                  </span>
                </div>

                <div className="h-44 bg-[#03080c]/95 rounded-xl border border-[#0f3447] p-2.5 flex flex-col justify-between relative">
                  <span className="text-[9px] font-bold text-[#426175] uppercase tracking-widest mono-text border-b border-[#0f3447] pb-1">COMPILATION_PORTFOLIO</span>
                  
                  <div className="grid grid-cols-3 gap-2 py-1">
                    <div className="bg-[#051119] border border-[#139ab3]/25 rounded-lg p-1.5 flex flex-col items-center justify-center text-center">
                      <svg className="w-7 h-7 text-[#29cfea] mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                        <rect x="2" y="9" width="4" height="6" rx="1" />
                        <rect x="18" y="4" width="4" height="6" rx="1" />
                        <line x1="6" y1="12" x2="18" y2="7" />
                        <circle cx="12" cy="9.5" r="1.5" fill="#ffffff" />
                      </svg>
                      <span className="text-[7.5px] text-[#849db5] font-bold leading-none tracking-tight">Deutsch-Jozsa</span>
                    </div>

                    <div className="bg-[#051119] border border-[#139ab3]/25 rounded-lg p-1.5 flex flex-col items-center justify-center text-center">
                      <div className="w-7 h-7 relative mb-1 flex items-center justify-center">
                        <svg className="absolute w-full h-full text-white opacity-80 animate-orbital-shell" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.1">
                          <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(40 12 12)" />
                          <ellipse cx="12" cy="12" rx="10" ry="3" transform="rotate(130 12 12)" />
                        </svg>
                        <span className="w-1.5 h-1.5 rounded-full bg-[#29cfea]" />
                      </div>
                      <span className="text-[7.5px] text-[#849db5] font-bold leading-none tracking-tight">Shor's Lab</span>
                    </div>

                    <div className="bg-[#051119] border border-[#139ab3]/25 rounded-lg p-1.5 flex flex-col items-center justify-center text-center">
                      <svg className="w-7 h-7 text-[#29cfea] mb-1" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.3">
                        <circle cx="10" cy="10" r="5" />
                        <line x1="14" y1="14" x2="20" y2="20" strokeWidth="2" />
                      </svg>
                      <span className="text-[7.5px] text-[#849db5] font-bold leading-none tracking-tight">Grover's Opt</span>
                    </div>
                  </div>

                  <div className="p-1.5 bg-[#020509] rounded-lg border border-[#0f3447] flex items-center gap-2">
                    <div className="w-4 h-4 shrink-0 relative flex items-center justify-center">
                      <svg className="w-full h-full text-[#29cfea]" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
                        <circle cx="12" cy="12" r="9" strokeDasharray="4 4" className="animate-spin" />
                        <circle cx="12" cy="12" r="3" fill="currentColor" />
                      </svg>
                    </div>
                    <div className="grow">
                      <div className="flex justify-between text-[7.5px] text-[#426175] font-bold uppercase mono-text">
                        <span>SANDBOX_STREAM</span>
                        <span className="text-white font-black">45% PIPELINE</span>
                      </div>
                      <div className="w-full bg-[#040d14] h-1 rounded overflow-hidden mt-0.5 border border-slate-950">
                        <div className="bg-gradient-to-r from-[#139ab3] to-white h-full w-[45%]" />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="mt-3 p-2 bg-[#02050a]/90 rounded-xl border border-[#0f3447] flex justify-between items-center text-[9px] text-[#426175] font-bold uppercase tracking-wider mono-text">
                  <span>FIDELITY: <span className="text-emerald-400">99.45%</span></span>
                  <span>KERNELS: <span className="text-[#29cfea]">QASM</span></span>
                </div>
              </div>
              <div className="mt-4 pt-2 border-t border-[#0f3447] flex items-center justify-between text-[10px] text-[#426175] font-bold tracking-wider uppercase mono-text">
                <span>MATRIX: 0.994</span>
                <span>COMPILED: 2/3</span>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}