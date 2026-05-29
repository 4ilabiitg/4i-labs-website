
import React from 'react';
import { Cpu, Code, Eye } from 'lucide-react';

const curriculumMatrix = [
  {
    phaseId: "Phase 01",
    phaseTag: "PH1_CORE",
    title: "Quantum Foundations",
    accentClass: "border-[#134154] bg-gradient-to-b from-[#0c2533]/40 via-[#050b0f] to-[#050b0f] hover:border-[#29cfea]/40 text-[#29cfea]",
    innerBoxClass: "border-[#0d2c3b]",
    icon: <Cpu className="w-3.5 h-3.5 text-[#29cfea]" />,
    topics: [
      "Quantum Mechanics & Axioms",
      "State Vectors & Dirac Notation",
      "Single-Qubit Rotations & Gates",
      "Multi-Qubit Matrix Operators",
      "Bell States & Simulators"
    ]
  },
  {
    phaseId: "Phase 02",
    phaseTag: "PH2_ALGO",
    title: "Quantum Algorithms",
    accentClass: "border-[#164459] bg-gradient-to-b from-[#133040]/40 via-[#050b0f] to-[#050b0f] hover:border-white/40 text-white",
    innerBoxClass: "border-[#14394c]",
    icon: <Code className="w-3.5 h-3.5 text-white" />,
    topics: [
      "Deutsch & Deutsch-Jozsa",
      "Grover's Search Oracles",
      "Quantum Fourier Transforms",
      "Phase Estimation (QPE)",
      "Shor's Factoring Models"
    ]
  },
  {
    phaseId: "Phase 03",
    phaseTag: "PH3_QML",
    title: "Quantum Machine Learning",
    accentClass: "border-[#11384a] bg-gradient-to-b from-[#081d29]/40 via-[#050b0f] to-[#050b0f] hover:border-[#29cfea]/40 text-[#29cfea]",
    innerBoxClass: "border-[#0f3447]",
    icon: <Eye className="w-3.5 h-3.5 text-[#29cfea]" />,
    topics: [
      "Supervised Gradient Descent",
      "Classical SVM Hyperplanes",
      "Variational Eigensolvers (VQE)",
      "QAOA Optimization Matrix",
      "Quantum Kernels & Q-SVM"
    ]
  },
  {
    phaseId: "Phase 04",
    phaseTag: "PH4_LIVE",
    title: "Deployments & Capstone",
    accentClass: "border-[#134154] bg-gradient-to-b from-[#0c2533]/40 via-[#050b0f] to-[#050b0f] hover:border-[#29cfea]/40 text-[#29cfea]",
    innerBoxClass: "border-[#0d2c3b]",
    icon: <Cpu className="w-3.5 h-3.5 text-[#29cfea]" />,
    topics: [
      "Qiskit & PennyLane Pipelines",
      "PCA Dimensionality Reductions",
      "Kepler Exoplanet Capstone"
    ]
  }
];

export default function Curriculum() {
  return (
    <section id="curriculum" className="quantum-page relative py-12 bg-[#050b0f] text-[#e2e8f0] select-none border-b border-[#0c1b24] w-screen left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] overflow-x-hidden">
      {}
      <div className="w-full px-4 sm:px-8 xl:px-16 mx-auto">
        
        {}
        <div className="mb-8 text-left max-w-5xl space-y-2">
          <h1 className="text-3xl sm:text-5xl lg:text-[3.2rem] font-black tracking-tighter uppercase leading-none">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29cfea] via-[#139ab3] to-white whitespace-nowrap">
              COURSE STRUCTURE
            </span>
          </h1>
          
          <p className="text-sm sm:text-base text-[#849db5] font-normal leading-relaxed max-w-4xl pt-1">
            Explore the comprehensive 4-Phase computational curriculum developed by <span className="text-white font-semibold">4i Labs</span>. This streamlined path scales systematically from raw physical mechanics to high-performance Quantum Support Vector Machine (Q-SVM) engineering pipelines.
          </p>
        </div>

        {}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {curriculumMatrix.map((section, idx) => {
            const dynamicTextColor = section.accentClass.split(' ').find(c => c.includes('text-')) || 'text-[#29cfea]';

            return (
              <div 
                key={idx} 
                className={`card-base ${section.accentClass.split(' ')[0]} ${section.accentClass.split(' ')[1]} rounded-xl border p-4 flex flex-col justify-between shadow-xl transition-all duration-300 w-full`}
              >
                <div>
                  {}
                  <div className="flex items-center justify-between mb-3 border-b border-[#0d2c3b] pb-2">
                    <span className="font-bold text-white flex flex-col">
                      <span className={`${dynamicTextColor} text-[10px] font-bold uppercase tracking-widest`}>
                        {section.phaseId}
                      </span>
                      <span className="text-[12.5px] font-black tracking-tight mt-0.5 text-slate-100 uppercase" style={{ fontFamily: "'Inter', sans-serif" }}>
                        {section.title}
                      </span>
                    </span>
                    <span className="mono-text text-[9px] text-[#426175] font-black tracking-wider" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                      {section.phaseTag}
                    </span>
                  </div>
                  
                  {}
                  <div className={`bg-[#03080c]/95 rounded-lg border ${section.innerBoxClass} p-3 relative overflow-hidden min-h-36 flex flex-col justify-between`}>
                    <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(41,207,234,0.01)_0%,transparent_85%)] pointer-events-none" />
                    
                    {}
                    <div className="space-y-2 grow flex flex-col justify-center">
                      {section.topics.map((topicName, tIdx) => (
                        <div key={tIdx} className="flex items-center gap-2 text-[11px] font-medium text-slate-300 leading-tight">
                          <span className="shrink-0 scale-90">{section.icon}</span>
                          <span className="tracking-wide text-slate-200 truncate">{topicName}</span>
                        </div>
                      ))}
                    </div>
                  </div>
                </div>

              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}