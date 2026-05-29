import React, { useState, useEffect } from 'react';
import { Shield, Key, Lock, Unlock, RefreshCw, Check, AlertTriangle } from 'lucide-react';

const initialStudentsPool = [
  { id: 1, name: "Schrodinger_Cat", points: 2680, project: "Oracle_Core", status: "Pending" },
  { id: 2, name: "Tensor_Flow_01", points: 2320, project: "Partial_Trace_Lib", status: "Under_Review" },
  { id: 3, name: "Dirac_Spinor", points: 2190, project: "Phase_Kickback", status: "Pending" }
];

export default function AdminPanel() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [passkey, setPasskey] = useState('');
  const [authError, setAuthError] = useState(false);
  const [attempts, setAttempts] = useState(0);

  
  const [isLeaderboardLocked, setIsLeaderboardLocked] = useState(() => {
    const savedLockState = localStorage.getItem('qc101_leaderboard_global_lock');
    return savedLockState ? JSON.parse(savedLockState) : true;
  });

  const [phase2, setPhase2] = useState(() => localStorage.getItem('qc101_phase_02_unlocked') === 'true');
  const [phase3, setPhase3] = useState(() => localStorage.getItem('qc101_phase_03_unlocked') === 'true');
  const [phase4, setPhase4] = useState(() => localStorage.getItem('qc101_phase_04_unlocked') === 'true');

  const [pendingStudents, setPendingStudents] = useState(initialStudentsPool);
  const [syncNotice, setSyncNotice] = useState('');

  useEffect(() => {
    localStorage.setItem('qc101_leaderboard_global_lock', JSON.stringify(isLeaderboardLocked));
  }, [isLeaderboardLocked]);

  const handleAuthSubmit = (e) => {
    e.preventDefault();
    if (attempts >= 5) {
      alert("CRITICAL SECURITY VIOLATION: OPERATIONAL INTERFACE TERMINATED.");
      return;
    }

    const masterSecureToken = import.meta.env.VITE_ADMIN_PASSKEY;

    if (!masterSecureToken) {
      console.error("Security registry parameters are missing. Create a local .env configuration.");
      setAuthError(true);
      return;
    }

    if (passkey === masterSecureToken) {
      setIsAuthenticated(true);
      setAuthError(false);
      setAttempts(0);
    } else {
      setAuthError(true);
      setAttempts(prev => prev + 1);
    }
  };

  const toggleLeaderboardLock = () => {
    setIsLeaderboardLocked(prev => !prev);
    triggerNotification("Global leaderboard lock modified.");
  };

  const togglePhase = (phaseKey, currentValue, setter) => {
    const nextValue = !currentValue;
    setter(nextValue);
    localStorage.setItem(phaseKey, nextValue.toString());
    triggerNotification(`Phase access configuration state modified.`);
  };

  const handleStudentApproval = (id, newStatus) => {
    setPendingStudents(prev => prev.map(student => 
      student.id === id ? { ...student, status: newStatus } : student
    ));
    triggerNotification(`Profile status initialized: ${newStatus}`);
  };

  const triggerNotification = (message) => {
    setSyncNotice(message);
    setTimeout(() => setSyncNotice(''), 3500);
  };

  const flushUserProgressionCache = () => {
    localStorage.removeItem('qc101_progress_matrix');
    triggerNotification("User metrics cache successfully wiped clean.");
  };

  if (!isAuthenticated) {
    return (
      <section className="h-screen bg-[#050b0f] flex items-center justify-center font-sans px-4 select-none">
        <div className="w-full max-w-md p-6 rounded-2xl border border-[#122c3a] bg-[#07131a]/80 backdrop-blur-md shadow-2xl space-y-6">
          <div className="flex flex-col items-center text-center space-y-2">
            <div className="h-12 w-12 rounded-xl border border-cyan-500/20 bg-[#060b11] flex items-center justify-center shadow-[0_0_20px_rgba(6,182,212,0.15)] text-cyan-400">
              <Shield className="w-5 h-5" />
            </div>
            <h2 className="text-xl font-black text-white uppercase tracking-tight font-mono pt-2">System Gateway</h2>
            <p className="text-xs text-[#5e778c] font-mono tracking-wide">RESTRICTED CORE OVERRIDE PANEL</p>
          </div>

          <form onSubmit={handleAuthSubmit} className="space-y-4 font-mono">
            <div className="space-y-1.5 relative">
              <label className="text-[10px] font-bold text-slate-400 uppercase tracking-widest block">Authorization Credentials</label>
              <div className="relative flex items-center">
                <Key className="w-4 h-4 text-[#426175] absolute left-3.5" />
                <input 
                  type="password"
                  value={passkey}
                  onChange={(e) => setPasskey(e.target.value)}
                  placeholder="••••••••••••••••"
                  className={`w-full h-11 bg-black/60 rounded-xl border pl-10 pr-4 text-xs text-white placeholder-slate-700 outline-none transition-colors ${authError ? 'border-red-500/50 focus:border-red-500' : 'border-[#122c3a] focus:border-cyan-500/50'}`}
                />
              </div>
              {authError && (
                <p className="text-[10px] text-red-400 font-bold tracking-wide mt-1 flex items-center gap-1">
                  <AlertTriangle className="w-3 h-3" /> ACCESS REFUSED. ATTEMPTS REMAINING: {5 - attempts}
                </p>
              )}
            </div>

            <button type="submit" className="w-full h-11 bg-gradient-to-r from-cyan-500 to-[#139ab3] text-[#050b0f] font-bold text-xs rounded-xl transition-transform active:scale-[0.98] tracking-wider uppercase">
              Request Clearance Token
            </button>
          </form>
        </div>
      </section>
    );
  }

  return (
    <section className="min-h-screen bg-[#050b0f] text-[#e2e8f0] font-sans select-none pb-16 antialiased">
      <div className="w-full px-4 sm:px-8 xl:px-16 mx-auto pt-8 space-y-6">
        
        {/* Header Title Block */}
        <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center border-b border-[#122c3a] pb-5 gap-4">
          <div className="text-left space-y-1">
            <h1 className="text-2xl font-black text-white tracking-tighter uppercase leading-none">Master Control Framework</h1>
            <p className="font-mono text-[10px] text-[#5e778c] tracking-widest uppercase flex items-center gap-1.5">
              <Shield className="w-3.5 h-3.5 text-cyan-400" /> Security Token: Active Admin Session
            </p>
          </div>
          <button onClick={() => setIsAuthenticated(false)} className="font-mono text-[11px] font-bold px-4 py-2 rounded-xl bg-red-950/20 border border-red-900/30 text-red-400 hover:bg-red-500 hover:text-white transition-all flex items-center gap-1">
            Kill_Process
          </button>
        </div>

        {syncNotice && (
          <div className="p-3 bg-cyan-950/40 border border-cyan-500/20 rounded-xl text-center font-mono text-xs text-cyan-400 tracking-wide uppercase animate-pulse">
            ⚡ Action Confirmed // {syncNotice}
          </div>
        )}

        {}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          
          {}
          <div className="p-5 rounded-2xl border border-[#122c3a] bg-[#07131a]/60 backdrop-blur-md flex flex-col justify-between gap-4">
            <div className="space-y-1 text-left">
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#5e778c]">01 // State Controls</h3>
              <p className="text-sm font-bold text-white tracking-tight pt-0.5">Global System Gates</p>
              <p className="text-xs text-[#849db5] font-light leading-relaxed">Toggle baseline visibility and coming soon modules across active course endpoints.</p>
            </div>

            {}
            <div className="space-y-2.5 text-xs font-mono border-t border-[#122c3a]/60 pt-3 text-left">
              <button
                onClick={toggleLeaderboardLock}
                className={`w-full h-9 rounded-lg font-mono text-[11px] font-bold uppercase flex items-center justify-center gap-2 border transition-all ${isLeaderboardLocked ? 'bg-red-500/10 border-red-500/20 text-red-400' : 'bg-emerald-500/10 border-emerald-500/20 text-emerald-400'}`}
              >
                {isLeaderboardLocked ? <><Lock className="w-3.5 h-3.5" /> Leaderboard: Locked</> : <><Unlock className="w-3.5 h-3.5" /> Leaderboard: Open</>}
              </button>

              <div className="space-y-1.5 pt-1 text-slate-300">
                <label className="flex items-center justify-between cursor-pointer p-1.5 rounded hover:bg-white/5 transition-colors">
                  <span>Phase 02 (Algorithms)</span>
                  <input type="checkbox" checked={phase2} onChange={() => togglePhase('qc101_phase_02_unlocked', phase2, setPhase2)} className="accent-cyan-400 h-3.5 w-3.5" />
                </label>
                <label className="flex items-center justify-between cursor-pointer p-1.5 rounded hover:bg-white/5 transition-colors">
                  <span>Phase 03 (Quantum ML)</span>
                  <input type="checkbox" checked={phase3} onChange={() => togglePhase('qc101_phase_03_unlocked', phase3, setPhase3)} className="accent-cyan-400 h-3.5 w-3.5" />
                </label>
                <label className="flex items-center justify-between cursor-pointer p-1.5 rounded hover:bg-white/5 transition-colors">
                  <span>Phase 04 (QSVM Workshop)</span>
                  <input type="checkbox" checked={phase4} onChange={() => togglePhase('qc101_phase_04_unlocked', phase4, setPhase4)} className="accent-cyan-400 h-3.5 w-3.5" />
                </label>
              </div>
            </div>
          </div>

          {}
          <div className="p-5 rounded-2xl border border-[#122c3a] bg-[#07131a]/60 backdrop-blur-md flex flex-col justify-between gap-4">
            <div className="space-y-1 text-left">
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#5e778c]">02 // System Cleansing</h3>
              <p className="text-sm font-bold text-white tracking-tight pt-0.5">Flush Progress Registries</p>
              <p className="text-xs text-[#849db5] font-light leading-relaxed">Clear out client check progression cache databases cleanly to test fresh track loops from zero values.</p>
            </div>
            <button 
              onClick={flushUserProgressionCache}
              className="h-11 rounded-xl font-mono text-xs font-bold tracking-wider uppercase border border-red-900/30 bg-red-950/20 text-red-400 hover:bg-red-950/50 hover:border-red-500/40 flex items-center justify-center gap-2 transition-all"
            >
              <RefreshCw className="w-4 h-4" /> Reset_User_Progress_Caches
            </button>
          </div>

          {}
          <div className="p-5 rounded-2xl border border-[#122c3a] bg-[#07131a]/60 backdrop-blur-md flex flex-col justify-between gap-4">
            <div className="space-y-1 text-left">
              <h3 className="font-mono text-[11px] font-bold uppercase tracking-widest text-[#5e778c]">03 // Sync Telemetry</h3>
              <p className="text-sm font-bold text-white tracking-tight pt-0.5">CSV Sheet Runtime Metrics</p>
              <p className="text-xs text-[#849db5] font-light leading-relaxed">System monitoring parameter tracking target spreadsheet distribution links down to student layout rows.</p>
            </div>
            <div className="h-11 rounded-xl font-mono text-[10px] bg-black/40 border border-cyan-500/10 flex items-center justify-between px-4 font-bold text-cyan-400">
              <span>LOCAL SYNC INTEGRITY: HIGH</span>
              <span className="w-2 h-2 rounded-full bg-emerald-400 shadow-[0_0_10px_#34d399]" />
            </div>
          </div>
        </div>

        {}
        <div className="p-5 rounded-2xl border border-[#122c3a] bg-[#07131a]/40 backdrop-blur-sm space-y-4">
          <div className="text-left">
            <h3 className="text-base font-extrabold text-white tracking-tight uppercase">Leaderboard Profile Controls</h3>
          </div>
          <div className="border border-[#142d3c] rounded-xl overflow-hidden bg-black/20">
            <table className="w-full text-left text-xs font-mono border-collapse">
              <thead>
                <tr className="bg-[#040d14] text-[#5e778c] font-mono text-[9px] uppercase tracking-wider border-b border-[#142d3c]">
                  <th className="p-3.5">User Node Handle</th>
                  <th className="p-3.5">Points</th>
                  <th className="p-3.5">Artifact Repository Path</th>
                  <th className="p-3.5">Status</th>
                  <th className="p-3.5 text-right">System Action</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#142d3c] text-slate-300">
                {pendingStudents.map((student) => (
                  <tr key={student.id} className="hover:bg-[#07131a]/40 transition-colors">
                    <td className="p-3.5 font-sans font-bold text-white text-sm">{student.name}</td>
                    <td className="p-3.5 text-cyan-400 font-bold">{student.points} pts</td>
                    <td className="p-3.5 text-slate-400">{student.project}</td>
                    <td className="p-3.5">
                      <span className={`px-2 py-0.5 rounded text-[9px] font-bold border ${student.status === 'Verified' ? 'bg-emerald-500/5 text-emerald-400 border-emerald-500/20' : 'bg-amber-500/5 text-amber-400 border-amber-500/20'}`}>
                        {student.status.toUpperCase()}
                      </span>
                    </td>
                    <td className="p-3.5 text-right flex items-center justify-end gap-2">
                      {student.status !== 'Verified' && (
                        <button onClick={() => handleStudentApproval(student.id, 'Verified')} className="p-1.5 rounded-lg border border-emerald-500/20 text-emerald-400 hover:bg-emerald-500 hover:text-black transition-colors"><Check className="w-3.5 h-3.5" /></button>
                      )}
                      {student.status !== 'Under_Review' && (
                        <button onClick={() => handleStudentApproval(student.id, 'Under_Review')} className="px-2.5 py-1.5 rounded-lg border border-amber-500/20 text-amber-400 text-[10px] font-bold hover:bg-amber-400 hover:text-black transition-colors">Flag Review</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

      </div>
    </section>
  );
}