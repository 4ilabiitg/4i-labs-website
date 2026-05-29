import React, { useState, useEffect } from 'react';
import { Trophy, Medal, Award, Flame, ArrowUpRight, Terminal, CheckCircle2, ShieldAlert, Lock, Loader2 } from 'lucide-react';


const fallbackLeaderboard = [
  { rank: 1, name: "Alpha_Qubit", points: 2850, streak: 18, tasks: "12/12", project: "Depl_Optimized", status: "Verified" },
  { rank: 2, name: "Matrix_Surfer", points: 2710, streak: 14, tasks: "12/12", project: "Bloch_Sim_v4", status: "Verified" },
  { rank: 3, name: "Schrodinger_Cat", points: 2680, streak: 21, tasks: "11/12", project: "Oracle_Core", status: "Pending" },
  { rank: 4, name: "Quantum_Weaver", points: 2450, streak: 9,  tasks: "10/12", project: "Deutsch_Jozsa_X", status: "Verified" },
  { rank: 5, name: "Tensor_Flow_01", points: 2320, streak: 12, tasks: "10/12", project: "Partial_Trace_Lib", status: "Under_Review" },
  { rank: 6, name: "Dirac_Spinor", points: 2190, streak: 5,  tasks: "9/12",  project: "Phase_Kickback", status: "Pending" },
  { rank: 7, name: "Bell_State_Mac", points: 2050, streak: 0,  tasks: "8/12",  project: "None", status: "Incomplete" },
  { rank: 8, name: "Hamiltonian_H", points: 1980, streak: 4,  tasks: "8/12",  project: "VQE_Simulation", status: "Verified" },
  { rank: 9, name: "Pauli_X_Chaser", points: 1840, streak: 8,  tasks: "7/12",  project: "Error_Mitigation", status: "Pending" },
  { rank: 10, name: "Eigen_Boss", points: 1710, streak: 2,  tasks: "6/12",  project: "None", status: "Incomplete" }
];


const CSV_SHEET_URL = "https://docs.google.com/spreadsheets/d/e/YOUR_PUBLISHED_CSV_URL_HERE/pub?output=csv";

export default function Leaderboard({ customData }) {
  const [dataPool, setDataPool] = useState(fallbackLeaderboard);
  const [isLoading, setIsLoading] = useState(false);

  
  const [isLocked, setIsLocked] = useState(() => {
    const savedLockState = localStorage.getItem('qc101_leaderboard_global_lock');
    return savedLockState ? JSON.parse(savedLockState) : true;
  });


  useEffect(() => {
    const handleStorageSync = () => {
      const savedLockState = localStorage.getItem('qc101_leaderboard_global_lock');
      if (savedLockState !== null) {
        setIsLocked(JSON.parse(savedLockState));
      }
    };

    window.addEventListener('storage', handleStorageSync);
    
    
    const interval = setInterval(handleStorageSync, 1000);

    return () => {
      window.removeEventListener('storage', handleStorageSync);
      clearInterval(interval);
    };
  }, []);

  useEffect(() => {
    if (customData && customData.length > 0) {
      setDataPool(customData);
      return;
    }

    const fetchSheetData = async () => {
      if (!CSV_SHEET_URL.includes('docs.google.com')) return; 
      try {
        setIsLoading(true);
        const response = await fetch(CSV_SHEET_URL);
        const csvText = await response.text();
        
        const lines = csvText.split('\n').map(line => line.trim()).filter(Boolean);
        if (lines.length <= 1) return;

        const headers = lines[0].split(',').map(h => h.trim().replace(/['"]/g, ''));
        
        const parsedRows = lines.slice(1).map((line, i) => {
          const columns = line.split(',').map(c => c.trim().replace(/['"]/g, ''));
          
          return {
            rank: Number(columns[headers.indexOf('rank')]) || i + 1,
            name: columns[headers.indexOf('name')] || 'Anonymous_Node',
            points: Number(columns[headers.indexOf('points')]) || 0,
            streak: Number(columns[headers.indexOf('streak')]) || 0,
            tasks: columns[headers.indexOf('tasks')] || '0/12',
            project: columns[headers.indexOf('project')] || 'None',
            status: columns[headers.indexOf('status')] || 'Pending'
          };
        });

        parsedRows.sort((a, b) => b.points - a.points);
        setDataPool(parsedRows);
      } catch (error) {
        console.error("Sheets sync failed, maintaining baseline layout parameters:", error);
        setDataPool(fallbackLeaderboard);
      } finally {
        setIsLoading(false);
      }
    };

    fetchSheetData();
  }, [customData]);

  return (
    <section id="leaderboard" className="py-2 bg-[#0a0a0a] text-[#e5e5e5] font-sans select-none w-full relative">
      <div className="w-full px-4 sm:px-8 lg:px-12">
        
        {}
        <div className="flex items-center justify-between mb-5 border-b border-[#1f1f1f] pb-3">
          <div className="flex items-center gap-2.5">
            <Terminal className="w-5 h-5 text-cyan-400" />
            <h2 className="text-2xl sm:text-3xl font-black tracking-tight text-white uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
              Leaderboard
            </h2>
          </div>
          {isLoading && <Loader2 className="w-4 h-4 text-cyan-400 animate-spin" />}
        </div>

        {}
        <div className="relative w-full">
          
          {}
          {isLocked && (
            <div className="absolute inset-0 z-30 flex flex-col items-center justify-center p-4 bg-black/45 rounded-xl border border-cyan-500/5 backdrop-blur-xs">
              <div className="flex flex-col items-center text-center space-y-4 animate-fadeIn">
                <div className="h-11 w-11 rounded-xl border border-cyan-500/20 bg-[#060b11] flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.25)]">
                  <Lock className="w-4 h-4 text-cyan-400" />
                </div>
                
                <div className="flex flex-col items-center gap-1.5 text-center uppercase tracking-wider" style={{ fontFamily: "'Inter', sans-serif" }}>
                  <span className="text-[13px] font-black text-slate-100 tracking-tight">
                    Initializing Matrix Register
                  </span>
                  <span className="text-[10.5px] font-bold text-cyan-400 tracking-wide font-mono opacity-90">
                    COMING SOON
                  </span>
                </div>
              </div>
            </div>
          )}

          {}
          <div className={`space-y-4 transition-all duration-300 ${isLocked ? 'blur-sm select-none pointer-events-none opacity-20' : ''}`}>
            
            {}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
              {dataPool.slice(0, 3).map((node, index) => {
                const themes = [
                  { border: "border-cyan-400/20 shadow-[0_0_20px_rgba(34,211,238,0.02)]", text: "text-cyan-400", badge: Trophy },
                  { border: "border-slate-500/15", text: "text-slate-400", badge: Medal },
                  { border: "border-blue-500/15", text: "text-blue-400", badge: Award }
                ][index] || { border: "border-slate-800", text: "text-slate-400", badge: Award };

                const Icon = themes.badge;

                return (
                  <div key={index} className={`bg-[#121212] border ${themes.border} rounded-xl p-4 flex items-center justify-between group hover:bg-[#161616] transition-colors`}>
                    <div className="space-y-1">
                      <div className="flex items-center gap-2">
                        <span className={`font-mono text-[10px] font-bold px-1.5 py-0.5 rounded bg-black border border-[#262626] ${themes.text}`}>
                          0{index + 1}
                        </span>
                        <span className="text-sm font-bold text-white tracking-tight">{node.name}</span>
                      </div>
                      <div className="flex items-center gap-3 pt-0.5">
                        <span className="text-xs font-mono text-cyan-400 font-bold">{node.points} pts</span>
                        <span className="text-[10px] font-mono text-slate-500 flex items-center gap-1">
                          <Flame className="w-3 h-3 text-orange-500 fill-orange-500" /> {node.streak}d
                        </span>
                      </div>
                    </div>
                    <Icon className={`w-6 h-6 ${themes.text} opacity-40 group-hover:opacity-70 transition-opacity`} />
                  </div>
                );
              })}
            </div>

            {}
            <div className="border border-[#262626] bg-[#121212] rounded-xl overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full text-left border-collapse text-xs font-mono">
                  <thead>
                    <tr className="border-b border-[#262626] bg-[#0d0d0d] text-slate-500 font-mono uppercase text-[9px] tracking-wider">
                      <th className="p-3.5 w-16 text-center">Rank</th>
                      <th className="p-3.5 font-sans">User Node Profile</th>
                      <th className="p-3.5">Calculated Points</th>
                      <th className="p-3.5">Lab Status Check</th>
                      <th className="p-3.5">Project Workspace Artifact</th>
                      <th className="p-3.5 text-right">Status</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-[#262626] text-slate-300">
                    {dataPool.map((row, i) => (
                      <tr key={i} className="hover:bg-[#161616]/60 transition-colors">
                        <td className="p-3.5 text-center font-bold text-slate-500">
                          #{row.rank || i + 1}
                        </td>
                        <td className="p-3.5 font-sans font-bold text-white text-sm">
                          {row.name}
                        </td>
                        <td className="p-3.5 text-cyan-400 font-bold">
                          {row.points}
                        </td>
                        <td className="p-3.5 text-slate-400">
                          {row.tasks} Labs Complete
                        </td>
                        <td className="p-3.5 text-slate-400 max-w-50 truncate">
                          {row.project === "None" ? (
                            <span className="text-slate-600 italic text-xs font-sans">No deployment</span>
                          ) : (
                            <span className="text-slate-300 inline-flex items-center gap-0.5">
                              {row.project} <ArrowUpRight className="w-3.5 h-3.5 text-slate-600" />
                            </span>
                          )}
                        </td>
                        <td className="p-3.5 text-right">
                          <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded text-[10px] font-bold border ${
                            row.status === 'Verified' ? 'bg-cyan-500/5 text-cyan-400 border-cyan-500/10' :
                            row.status === 'Under_Review' ? 'bg-amber-500/5 text-amber-400 border-amber-500/10' :
                            row.status === 'Pending' ? 'bg-blue-500/5 text-blue-400 border-blue-500/10' :
                            'bg-red-500/5 text-red-400 border-red-500/10'
                          }`}>
                            {row.status === 'Verified' && <CheckCircle2 className="w-3 h-3" />}
                            {row.status === 'Under_Review' && <ShieldAlert className="w-3 h-3" />}
                            {row.status.toUpperCase()}
                          </span>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
}