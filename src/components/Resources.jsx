import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Video, ExternalLink, Lock } from 'lucide-react';

const resourcesDatabaseMatrix = [
  {
    weekId: "Phase 01",
    weekTitle: "Quantum Foundations (Days 1 - 5)",
    themeClass: "border-[#134154] text-[#29cfea] bg-[#0c2533]/[0.02]",
    badgeBg: "bg-gradient-to-r from-[#139ab3]/30 to-transparent",
    glowBorder: "hover:border-[#29cfea]/40 shadow-[0_0_30px_rgba(41,207,234,0.02)]",
    modules: [
      {
        moduleId: "Day 1",
        moduleName: "Intro to Quantum Mechanics",
        assets: [
          { name: "Quantum Computing Fundamentals", type: "Video Lecture", url: "https://www.youtube.com/watch?v=lt4OsgmUTGI" },
          { name: "Understanding Quantum Systems", type: "Video Lecture", url: "https://www.youtube.com/watch?v=jk0jWzlvA5w" },
          { name: "Classical vs. Quantum Paradigms", type: "Video Lecture", url: "https://www.youtube.com/watch?v=wGsK1iAKEoA" },
          { name: "Comprehensive Guide to Quantum Computing", type: "Blog Reading", url: "https://medium.com/visionary-hub/a-full-overview-of-quantum-computing-6897ecb22004" }
        ]
      },
      {
        moduleId: "Day 2",
        moduleName: "Intro to Quantum Computing",
        assets: [
          { name: "Quantum Mechanics for Computing", type: "Video Lecture", url: "https://www.youtube.com/watch?v=iZ96TuP_veY" },
          { name: "Core Quantum Concepts (First 20 Mins Only)", type: "Video Lecture", url: "https://www.youtube.com/watch?v=tsbCSkvHhMo" },
          { name: "Foundations of Quantum Mechanics", type: "Video Lecture", url: "https://www.youtube.com/watch?v=-WSWz1H3mJg" },
          { name: "Advanced Quantum Mechanics Insights (optional)", type: "Video Lecture", url: "https://www.youtube.com/watch?v=xgA4Dx_7q34" }
        ]
      },
      {
        moduleId: "Day 3",
        moduleName: "Single-Qubit Gates",
        assets: [
          { name: "Understanding Single-Qubit Gates", type: "Video Lecture", url: "https://www.youtube.com/watch?v=3-c4xJa7Flk" },
          { name: "Qubit Visualization Techniques (Minutes 20 to 43)", type: "Video Lecture", url: "https://www.youtube.com/watch?v=tsbCSkvHhMo&t=1207s" },
          { name: "Quantum Gates and Unitary Operations", type: "Blog Reading", url: "https://jonathan-hui.medium.com/qc-control-quantum-computing-with-unitary-operators-interference-entanglement-7790c69f6e98" }
        ]
      },
      {
        moduleId: "Day 4",
        moduleName: "Multi-Qubit Gates + Quantum Circuits + Qiskit Setup",
        assets: [
          { name: "Multi-Qubit Gates Fundamentals", type: "Video Lecture", url: "https://www.youtube.com/watch?v=DfZZS8Spe7U" },
          { name: "Building Quantum Circuits", type: "Video Lecture", url: "https://www.youtube.com/watch?v=NTplT4WnNbk" },
          { name: "Entanglement in Quantum Systems", type: "Video Lecture", url: "https://www.youtube.com/watch?v=94pZPZ_nsW8" },
          { name: "Getting Started with Qiskit", type: "Video Lecture", url: "https://www.youtube.com/watch?v=Tk9LOL9--Y4" },
          { name: "Qiskit Programming Basics", type: "Video Lecture", url: "https://www.youtube.com/watch?v=dZWz4Gs_BuI" },
          { name: "First Steps in Quantum Coding", type: "Video Lecture", url: "https://www.youtube.com/watch?v=93-zLTppFZw" },
          { name: "Qiskit Environment Setup", type: "Video Lecture", url: "https://www.youtube.com/watch?v=35ykEg3fG4c" },
          { name: "Qiskit Basics Tutorial", type: "Video Lecture", url: "https://www.youtube.com/watch?v=QDPtcwhpQkE" }
        ]
      },
      {
        moduleId: "Day 5",
        moduleName: "Quantum Circuits Continued + Bell States + Qiskit",
        assets: [
          { name: "Quantum Circuits and Bell States Overview", type: "Video Lecture", url: "https://www.youtube.com/watch?v=dXvmCSfCPms" },
          { name: "Bell States and Entanglement Explained", type: "Video Lecture", url: "https://www.youtube.com/watch?v=pS69lqCMdy8" },
          { name: "In-Depth Bell States Analysis", type: "Video Lecture", url: "https://www.youtube.com/watch?v=4BRQsrh4oGw" },
          { name: "Bell States and Entanglement in Qiskit", type: "Blog Reading", url: "https://medium.com/a-bit-of-qubit/quantum-computing-bell-state-and-entanglement-with-qiskit-621489fb36bd" },
          { name: "Bell States Implementation in Qiskit (.ipynb Notebook)", type: "Blog Reading", url: "https://drive.google.com/file/d/1oZCmnVcotOsXQWzdMa83I_Cz8vkHNyQD/view" }
        ]
      }
    ]
  },
  {
    weekId: "Phase 02",
    weekTitle: "Quantum Algorithms (Days 6 - 10)",
    themeClass: "border-[#164459] text-white bg-[#133040]/[0.02]",
    badgeBg: "bg-gradient-to-r from-[#164459]/30 to-transparent",
    glowBorder: "hover:border-white/40 shadow-[0_0_30px_rgba(255,255,255,0.02)]",
    modules: [
      {
        moduleId: "Day 6",
        moduleName: "Deutsch-Jozsa + Grover's Algorithm",
        assets: [
          { name: "Introduction to the Deutsch-Jozsa Algorithm", type: "Video Lecture", url: "https://www.youtube.com/watch?v=QcK0GK7DUh8" },
          { name: "Deutsch's Algorithm: Introduction to Quantum Oracles", type: "Video Lecture", url: "https://www.youtube.com/watch?v=7MdEHsRZxvo" },
          { name: "Deutsch-Jozsa Algorithm: Exponential Speedup", type: "Video Lecture", url: "https://www.youtube.com/watch?v=jfJckA7Amik" },
          { name: "Deutsch-Jozsa Algorithm Implementation in Qiskit (.ipynb Notebook)", type: "Blog Reading", url: "https://drive.google.com/file/d/1ykGDvalXLAb5mjfGyNVJWIqtojwWzM4Y/view" },
          { name: "Introduction to Grover's Search Algorithm", type: "Video Lecture", url: "https://www.youtube.com/watch?v=RQWpF2Gb-gU" },
          { name: "Detailed Mathematical Analysis of Grover's Algorithm", type: "Video Lecture", url: "https://www.youtube.com/watch?v=hnpjC8WQVrQ" }
        ]
      },
      {
        moduleId: "Day 7",
        moduleName: "Grover's Algorithm Implementation",
        assets: [
          { name: "Grover's Algorithm Tutorial (IBM Quantum Docs)", type: "Blog Reading", url: "https://quantum.cloud.ibm.com/docs/en/tutorials/grovers-algorithm" },
          { name: "Implementing Grover's Algorithm with Qiskit (Older Version)", type: "Video Lecture", url: "https://www.youtube.com/watch?v=0RPFWZj7Jm0" },
          { name: "Application of Grover's Algorithm in Search Efficiency", type: "Blog Reading", url: "https://murshedsk135.medium.com/grovers-algorithm-quantum-leap-in-search-efficiency-996023862769" },
          { name: "Grover's Algorithm in Cybersecurity", type: "Blog Reading", url: "https://postquantum.com/post-quantum/grovers-algorithm/" },
          { name: "Fourier series", type: "video", url: "https://www.youtube.com/watch?v=r6sGWTCMz2k" },
          { name: "Fourier Transform", type: "video", url: "https://www.youtube.com/watch?v=spUNpyF58BY" },
          { name: "Shor's Algorithm Introduction", type: "video", url: "https://www.youtube.com/watch?v=mAHC1dWKNYE" }
        ]
      },
      {
        moduleId: "Day 8",
        moduleName: "Quantum Fourier Transform",
        assets: [
          { name: "Understanding Quantum Fourier Transform", type: "Video Lecture", url: "https://www.youtube.com/watch?v=pq2jkfJlLmY" },
          { name: "Quantum Phase Estimation", type: "Video Lecture", url: "https://www.youtube.com/watch?v=5kcoaanYyZw" }
        ]
      },
      {
        moduleId: "Day 9",
        moduleName: "Shor's Algorithm — Theory Part 1",
        assets: [
          { name: "Introduction to Shor's Algorithm", type: "Video Lecture", url: "https://www.youtube.com/watch?v=lvTqbM5Dq4Q" },
          { name: "Shor's Algorithm Continuation", type: "Video Lecture", url: "https://www.youtube.com/watch?v=FRZQ-efABeQ" },
          { name: "Factoring and Period-Finding", type: "Video Lecture", url: "https://www.youtube.com/watch?v=YpcT8u2a2jc" },
          { name: "Shor's Algorithm Overview", type: "Video Lecture", url: "https://www.youtube.com/watch?v=dscRoTBPeso" }
        ]
      },
      {
        moduleId: "Day 10",
        moduleName: "Shor's Algorithm — Theory Part 2",
        assets: [
          { name: "Shor's Algorithm: Advanced Concepts", type: "Video Lecture", url: "https://www.youtube.com/watch?v=IFmkzWF-S2k" },
          { name: "Peter Shor Interview Insights", type: "Video Lecture", url: "https://www.youtube.com/watch?v=wnhZPmB8KLg" },
          { name: "Quantum Expert Insight: Peter Shor", type: "Video Lecture", url: "https://www.youtube.com/watch?v=6qD9XElTpCE" }
        ]
      }
    ]
  },
  {
    weekId: "Phase 03",
    weekTitle: "Classical ML + Quantum ML (Days 11 - 15)",
    themeClass: "border-[#11384a] text-[#29cfea] bg-[#081d29]/[0.02]",
    badgeBg: "bg-gradient-to-r from-[#11384a]/30 to-transparent",
    glowBorder: "hover:border-[#29cfea]/40 shadow-[0_0_30px_rgba(41,207,234,0.02)]",
    modules: [
      {
        moduleId: "Day 11",
        moduleName: "Intro to ML + Logistic Regression",
        assets: [
          { name: "Machine Learning, Supervised Learning Fundamentals", type: "Video Lecture", url: "https://www.youtube.com/watch?v=vStJoetOxJg" },
          { name: "Linear Regression Introduction", type: "Video Lecture", url: "https://www.youtube.com/watch?v=dLc-lfEEYss" },
          { name: "Gradient Descent Parameters", type: "Video Lecture", url: "https://www.youtube.com/watch?v=WtlvKq_zxPI" },
          { name: "Multivariate Linear Regression", type: "Video Lecture", url: "https://www.youtube.com/watch?v=jXg0vU0y1ak" },
          { name: "Logistic Regression Core", type: "Video Lecture", url: "https://www.youtube.com/watch?v=p-ltr1C7u2o" },
          { name: "Cost Function and Gradient Descent in Logistic Regression", type: "Video Lecture", url: "https://www.youtube.com/watch?v=vq4Ie5xWhww" },
          { name: "Going Deeper into Linear Regression Models", type: "Video Lecture", url: "https://www.youtube.com/watch?v=YVtP5UGdgXg" },
          { name: "Overfitting and Regularization Techniques", type: "Video Lecture", url: "https://www.youtube.com/watch?v=8upNQi-40Q8" }
        ]
      },
      {
        moduleId: "Day 12",
        moduleName: "Classification + SVM + Implementation",
        assets: [
          { name: "Ridge Regression", type: "Video Lecture", url: "https://www.youtube.com/watch?v=Q81RR3yKn30" },
          { name: "Lasso Regression", type: "Video Lecture", url: "https://www.youtube.com/watch?v=Xm2C_gTAl8c" },
          { name: "Naive Bayes Classifiers", type: "Video Lecture", url: "https://www.youtube.com/watch?v=O2L2Uv9pdDA" },
          { name: "Gaussian Naive Bayes Structures", type: "Video Lecture", url: "https://www.youtube.com/watch?v=H3EjCKtlVog" },
          { name: "K-Nearest Neighbors (KNN)", type: "Video Lecture", url: "https://www.youtube.com/watch?v=HVXime0nQeI" },
          { name: "SVM Introduction ", type: "Video Lecture", url: "https://www.youtube.com/watch?v=efR1C6CvhmE" },
          { name: "SVM Introduction (continuation)", type: "Video Lecture", url: "https://www.youtube.com/watch?v=Toet3EiSFcM" },
          { name: "SVM Concepts", type: "Video Lecture", url: "https://www.youtube.com/watch?v=Qc5IyLW_hns" },
          { name: "SVM Implementaion", type: "Video Lecture", url: "https://www.youtube.com/watch?v=8A7L0GsBiLQ" }
        ]
      },
      {
        moduleId: "Day 13",
        moduleName: "Intro to QML + VQE",
        assets: [
          { name: "Introduction to Quantum Machine Learning", type: "Video Lecture", url: "https://www.youtube.com/watch?v=NqHKr9CGWJ0" },
          { name: "Quantum Machine Learning: A New Frontier in AI", type: "Blog Reading", url: "https://hdsr.mitpress.mit.edu/pub/cgmjzm3c/release/3" },
          { name: "Introduction to Variational Quantum Eigensolver (VQE)", type: "Video Lecture", url: "https://www.youtube.com/watch?v=TUFovZsBcW4" },
          { name: "VQE Mathematical Concepts", type: "Video Lecture", url: "https://www.youtube.com/watch?v=AhEnvYgoA34" },
          { name: "VQE Execution Implementation", type: "Video Lecture", url: "https://www.youtube.com/watch?v=qiRtUUZ5s9s" }
        ]
      },
      {
        moduleId: "Day 14",
        moduleName: "Quantum Classifiers",
        assets: [
          { name: "Quantum Classifiers", type: "Video Lecture", url: "https://www.youtube.com/watch?v=-sxlXNz7ZxU" },
          { name: "Quantum Approximate Optimization Algorithm (QAOA)", type: "Video Lecture", url: "https://www.youtube.com/watch?v=YpLzSQPrgSc" },
          { name: "Linear Classifiers in Quantum Machine Learning", type: "Video Lecture", url: "https://www.youtube.com/watch?v=m6EzmYsEOiI" }
        ]
      },
      {
        moduleId: "Day 15",
        moduleName: "Quantum Kernels + Q-SVM Theory",
        assets: [
          { name: "SVM  Recap", type: "Video Lecture", url: "https://www.youtube.com/watch?v=_YPScrckx28" },
          { name: "SVM Kernel Recap", type: "Video Lecture", url: "https://www.youtube.com/watch?v=2T2f--RgA9M" },
          { name: "Quantum Kernels", type: "Video Lecture", url: "https://www.youtube.com/watch?v=zw3JYUrS-v8" },
          { name: "Quantum Support Vector Machines", type: "Video Lecture", url: "https://www.youtube.com/watch?v=LmQcSxgINis" }
        ]
      }
    ]
  },
  {
    weekId: "Phase 04",
    weekTitle: "Q-SVM + Capstone Workspace Labs (Days 16 - 17+)",
    themeClass: "border-[#134154] text-[#29cfea] bg-[#0c2533]/[0.02]",
    badgeBg: "bg-gradient-to-r from-[#139ab3]/30 to-transparent",
    glowBorder: "hover:border-[#29cfea]/40 shadow-[0_0_30px_rgba(41,207,234,0.02)]",
    modules: [
      {
        moduleId: "Day 16",
        moduleName: "Q-SVM Implementation",
        assets: [
          { name: "QSVM Implementation Using Qiskit", type: "Video Lecture", url: "https://www.youtube.com/watch?v=GVhCOTzAkCM" },
          { name: "QSVM Recap", type: "Video Lecture", url: "https://www.youtube.com/watch?v=9m92WpcTdgs" },
          { name: "QSVM Using PennyLane and scikit-learn", type: "Video Lecture", url: "https://www.youtube.com/watch?v=aNZliwIIN-c" }
        ]
      },
      {
        moduleId: "Day 17",
        moduleName: "Preprocessing + Class Imbalance + Feature Engineering",
        assets: [
          { name: "Clustering", type: "Video Lecture", url: "https://www.youtube.com/watch?v=7xHsRkOdVwo" },
          { name: "K-Means Clustering", type: "Video Lecture", url: "https://www.youtube.com/watch?v=4b5d3muPQmA" },
          { name: "DBSCAN", type: "Video Lecture", url: "https://www.youtube.com/watch?v=RDZUdRSDOok" },
          { name: "Principal Component Analysis", type: "Video Lecture", url: "https://www.youtube.com/watch?v=FgakZw6K1QQ" },
          { name: "Handling Imbalanced Datasets", type: "Video Lecture", url: "https://www.youtube.com/watch?v=JnlM4yLFNuo" },
          { name: "Feature Engineering & Selection Introduction", type: "Video Lecture", url: "https://www.youtube.com/watch?v=pYVScuY-GPk" },
          { name: "Feature Engineering & Selection Continued", type: "Video Lecture", url: "https://www.youtube.com/watch?v=7sJaRHF03K8" },
          { name: "Exoplanet Detection — Kepler Dataset Matrix", type: "Blog Reading", url: "#" }
        ]
      }
    ]
  }
];

export default function Resources() {
  const [isInsideDashboard, setIsInsideDashboard] = useState(false);
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const [expandedModules, setExpandedModules] = useState({});

  const [unlockedPhases, setUnlockedPhases] = useState({
    "Phase 01": true,
    "Phase 02": false,
    "Phase 03": false,
    "Phase 04": false
  });

  useEffect(() => {
    const syncPhaseVisibilityGating = () => {
      setUnlockedPhases({
        "Phase 01": true,
        "Phase 02": localStorage.getItem('qc101_phase_02_unlocked') === 'true',
        "Phase 03": localStorage.getItem('qc101_phase_03_unlocked') === 'true',
        "Phase 04": localStorage.getItem('qc101_phase_04_unlocked') === 'true'
      });
    };

    if (isInsideDashboard) {
      syncPhaseVisibilityGating();
      const listenerInterval = setInterval(syncPhaseVisibilityGating, 1000);
      return () => clearInterval(listenerInterval);
    }
  }, [isInsideDashboard]);

  const [checkedAssets, setCheckedAssets] = useState(() => {
    try {
      const savedProgressMatrix = localStorage.getItem('qc101_progress_matrix');
      return savedProgressMatrix ? JSON.parse(savedProgressMatrix) : {};
    } catch (e) {
      return {};
    }
  });

  useEffect(() => {
    localStorage.setItem('qc101_progress_matrix', JSON.stringify(checkedAssets));
  }, [checkedAssets]);

  const toggleWeek = (weekId) => {
    if (!unlockedPhases[weekId]) return;
    setExpandedWeeks(prev => ({ ...prev, [weekId]: !prev[weekId] }));
  };

  const toggleModule = (moduleKey) => {
    setExpandedModules(prev => ({ ...prev, [moduleKey]: !prev[moduleKey] }));
  };

  const toggleAssetCheck = (assetName) => {
    setCheckedAssets(prev => ({
      ...prev,
      [assetName]: !prev[assetName]
    }));
  };

  const totalAssetsCount = resourcesDatabaseMatrix.reduce((acc, curr) => acc + curr.modules.reduce((a, m) => a + m.assets.length, 0), 0);
  const checkedAssetsCount = Object.keys(checkedAssets).filter(key => checkedAssets[key] === true).length;
  const metricsPercentage = totalAssetsCount > 0 ? Math.round((checkedAssetsCount / totalAssetsCount) * 100) : 0;

  const getModuleCompletionString = (module) => {
    const total = module.assets.length;
    const completed = module.assets.filter(a => !!checkedAssets[a.name]).length;
    return `${completed} / ${total} Core Nodes`;
  };

  const getWeekCompletionString = (weekBlock) => {
    const totalModules = weekBlock.modules.length;
    const completedModules = weekBlock.modules.filter(m => {
      return m.assets.length > 0 && m.assets.every(a => !!checkedAssets[a.name]);
    }).length;
    return `${completedModules} / ${totalModules} Days Complete`;
  };

  
  const AdvancedQuantumSpin = () => {
    return (
      <div className="absolute inset-0 bg-[#060608] overflow-hidden flex items-center justify-center">
        <div className="relative w-150 h-150 flex items-center justify-center pointer-events-none scale-90 sm:scale-100">
          <div className="absolute w-24 h-24 rounded-full bg-cyan-400/20 blur-2xl" />
          <div className="absolute w-8 h-8 rounded-full bg-white blur-md" />
          
          <div className="absolute inset-0 star-lattice opacity-60 animate-pulse-slow">
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-30 border-l-transparent border-r-30 border-r-transparent border-b-80 border-b-cyan-400/40 dynamic-glow" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-0 h-0 border-l-30 border-l-transparent border-r-30 border-r-transparent border-t-80 border-t-cyan-400/40 dynamic-glow" />
            <div className="absolute left-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-30 border-t-transparent border-b-30 border-b-transparent border-r-80 border-r-cyan-400/40 dynamic-glow" />
            <div className="absolute right-0 top-1/2 -translate-y-1/2 w-0 h-0 border-t-30 border-t-transparent border-b-30 border-b-transparent border-l-80 border-l-cyan-400/40 dynamic-glow" />
          </div>

          <div className="absolute w-44 h-44 border-2 border-cyan-400/30 rotate-45 animate-spin-slow shadow-[0_0_50px_rgba(34,211,238,0.1)] flex items-center justify-center">
            <div className="w-28 h-28 border border-white/40 -rotate-45" />
          </div>
          <div className="absolute w-44 h-44 border-2 border-blue-500/20 -rotate-45 animate-spin-reverse shadow-[0_0_50px_rgba(59,130,246,0.1)]" />

          <div className="absolute w-125 h-45 border border-cyan-400/20 rounded-[50%] rotate-30 animate-orbit-1" />
          <div className="absolute w-125 h-45 border border-blue-400/20 rounded-[50%] rotate-[-30deg] animate-orbit-2" />
          <div className="absolute w-137.5 h-55 border border-cyan-500/10 rounded-[50%] rotate-90 animate-orbit-3" />

          {[...Array(16)].map((_, i) => (
            <div key={i} className="laser-strand" style={{ "--idx": i }} />
          ))}
        </div>
      </div>
    );
  };

  if (!isInsideDashboard) {
    return (
      <section id="resources" className="h-screen bg-[#060608] flex items-center justify-center text-center font-sans select-none relative overflow-hidden">
        <AdvancedQuantumSpin />
        <div className="max-w-3xl px-6 space-y-8 relative z-20 flex flex-col items-center justify-center">
          <div className="space-y-4 bg-[#060608]/40 backdrop-blur-[2px] p-8 rounded-3xl border border-white/2">
            <h2 className="text-4xl font-black tracking-tighter text-white sm:text-5xl leading-none uppercase">
              QC 101<br /> 
              <span className="text-transparent bg-clip-text bg-linear-to-r from-white via-cyan-200 to-[#29cfea] drop-shadow-[0_0_30px_rgba(6,182,212,0.4)]">
                Resource Kernel
              </span>
            </h2>
            <p className="text-sm sm:text-base text-[#a3a3a3] max-w-xl mx-auto leading-relaxed font-light">
              Activate the roadmap tracker to navigate and monitor video lecture notes, reference analysis papers, and workspace modules week-by-week.
            </p>
          </div>

          <button 
            onClick={() => setIsInsideDashboard(true)}
            className="inline-flex items-center gap-2.5 px-8 py-4 rounded-xl bg-[#0b0c10] border border-[#139ab3]/40 text-sm font-mono font-bold text-[#29cfea] shadow-[0_0_30px_rgba(34,211,238,0.15)] hover:bg-[#29cfea] hover:text-black hover:border-white hover:shadow-[0_0_40px_rgba(34,211,238,0.4)] transition-all duration-300 group active:scale-95 z-30"
          >
            <svg className="w-4 h-4 transition-transform group-hover:translate-x-0.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M8 9l3 3-3 3m5 0h3M5 20h14a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
            </svg>
            <span className="tracking-wider">ACTIVATE DASHBOARD</span>
          </button>
        </div>
      </section>
    );
  }

  return (
    <section id="resources" className="py-14 bg-[#050b0f] text-[#e2e8f0] select-none border-b border-[#0c1b24] w-full antialiased font-sans">
      <div className="w-full px-4 sm:px-8 xl:px-16 mx-auto relative z-10">
        
        {}
        <div className="mb-8 flex flex-wrap justify-between items-center border-b border-[#122c3a] pb-4 gap-4">
          <div className="text-left space-y-1">
            <h1 className="text-2xl font-black text-white tracking-tighter uppercase leading-none">
              Learning Material
            </h1>
            <p className="font-mono text-[10px] text-[#5e778c] tracking-widest uppercase flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#29cfea]" />Track, read, and verify distribution manifests
            </p>
          </div>
          <button 
            onClick={() => setIsInsideDashboard(false)}
            className="font-mono text-[11px] font-bold px-4 py-2 rounded-xl bg-[#07131a] border border-[#1e3442] text-[#849db5] hover:text-white hover:border-[#2b4b5e] transition-colors flex items-center gap-1"
          >
            <svg className="w-3.5 h-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg> 
            Return_Back
          </button>
        </div>

        {}
        <div className="mb-8 p-4 rounded-2xl border border-[#122c3a] bg-[#07131a]/80 backdrop-blur-md flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 shadow-xl font-mono">
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-full border-[3px] border-[#139ab3]/20 flex items-center justify-center font-bold text-xs text-[#29cfea] bg-black shadow-[0_0_15px_rgba(41,207,234,0.1)]">
              {metricsPercentage}%
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Overall Material Progression</h3>
            </div>
          </div>
          <div className="flex gap-4 font-mono text-[10px] text-[#849db5] font-bold tracking-wider uppercase">
            <span><span>●</span> Sync Indexing: {checkedAssetsCount} Nodes Resolved Across 4 Phased Matrices</span>
          </div>
        </div>

        {}
        <div className="space-y-4">
          {resourcesDatabaseMatrix.map((weekBlock, wIdx) => {
            const isPhaseUnlocked = !!unlockedPhases[weekBlock.weekId];
            const isWeekOpen = !!expandedWeeks[weekBlock.weekId] && isPhaseUnlocked;
            const dynamicTextColor = weekBlock.themeClass.split(' ').find(c => c.includes('text-')) || 'text-[#29cfea]';

            return (
              <div 
                key={wIdx} 
                className={`card-base border rounded-2xl transition-all duration-300 shadow-xl overflow-hidden bg-[#03080c]/30 backdrop-blur-sm ${
                  weekBlock.themeClass.split(' ')[0]
                } ${isPhaseUnlocked ? weekBlock.glowBorder : 'border-[#1b1f24]/60'}`}
              >
                
                {}
                <button
                  onClick={() => toggleWeek(weekBlock.weekId)}
                  className={`w-full flex items-center justify-between p-4 bg-[#03080c]/40 text-left relative z-20 transition-colors ${
                    isPhaseUnlocked ? 'hover:bg-[#07131a]/50 border-b border-slate-900/40 cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className={`${dynamicTextColor} font-mono text-xs tracking-wider shrink-0 transition-transform duration-200 ${
                      isWeekOpen ? 'rotate-90' : 'rotate-0'
                    } ${!isPhaseUnlocked ? 'text-slate-600' : ''}`}>
                      ▶
                    </span>
                    <span className="text-sm font-bold tracking-tight flex items-center gap-2">
                      <span 
                        className={`font-mono text-xs px-3 py-1 rounded-md border ${
                          isPhaseUnlocked 
                            ? `${dynamicTextColor} ${weekBlock.badgeBg} border-white/5` 
                            : 'text-slate-500 bg-neutral-900 border-neutral-800/60'
                        }`} 
                        style={{ fontFamily: "'Share Tech Mono', monospace" }}
                      >
                        {weekBlock.weekId}
                      </span>
                      <span className={`font-extrabold text-[14px] tracking-wide uppercase ${isPhaseUnlocked ? 'text-slate-200' : 'text-slate-400'}`}>
                        {weekBlock.weekTitle}
                      </span>
                    </span>
                  </div>

                  {}
                  <div className="font-mono text-[11px] font-bold tracking-wider uppercase">
                    {isPhaseUnlocked ? (
                      <span className="text-[#5e778c]">{getWeekCompletionString(weekBlock)}</span>
                    ) : (
                      <span className="text-red-400 font-bold inline-flex items-center gap-1.5 bg-red-950/15 px-3 py-1 border border-red-900/30 rounded-lg text-[10px] tracking-widest font-mono shadow-[0_0_15px_rgba(239,68,68,0.05)]">
                        <Lock className="w-3 h-3 text-red-500 opacity-80" /> COMING SOON
                      </span>
                    )}
                  </div>
                </button>

                {}
                {isPhaseUnlocked && (
                  <div 
                    className={`transition-all duration-300 ease-in-out grid grid-cols-1 ${
                      isWeekOpen ? 'max-h-[3500px] p-4 opacity-100' : 'max-h-0 p-0 opacity-0 pointer-events-none'
                    } bg-[#020409]/30 gap-4 overflow-hidden`}
                  >
                    {weekBlock.modules.map((moduleItem, mIdx) => {
                      const moduleKey = `${weekBlock.weekId}-${mIdx}`;
                      const isModuleOpen = !!expandedModules[moduleKey];

                      return (
                        <div key={mIdx} className="rounded-xl border border-[#0d2c3b] bg-[#03080c]/80 overflow-hidden shadow-lg">
                          
                          <button
                            onClick={() => toggleModule(moduleKey)}
                            className="w-full flex items-center justify-between p-3.5 pl-4 text-left hover:bg-white/1 transition-colors border-b border-[#0d2c3b]"
                          >
                            <div className="flex items-center gap-3 text-xs font-bold text-slate-200">
                              <span className={`text-[#5e778c] text-[10px] transition-transform duration-200 inline-block ${isModuleOpen ? 'rotate-90' : 'rotate-0'}`}>▶</span>
                              <span className={`${dynamicTextColor} font-mono text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded`} style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                                {moduleItem.moduleId}
                              </span>
                              <span className="tracking-wide text-slate-300 font-bold uppercase">{moduleItem.moduleName}</span>
                            </div>
                            <div className="text-[9px] font-mono text-[#5e778c] font-bold uppercase tracking-widest shrink-0 hidden sm:block">
                              {getModuleCompletionString(moduleItem)}
                            </div>
                          </button>

                          {}
                          <div 
                            className={`transition-all duration-300 ease-in-out space-y-2 bg-black/20 ${
                              isModuleOpen ? 'max-h-[1200px] p-2.5 opacity-100' : 'max-h-0 p-0 opacity-0 pointer-events-none'
                            } overflow-hidden`}
                          >
                            {moduleItem.assets.map((asset, aIdx) => {
                              const isChecked = !!checkedAssets[asset.name];
                              const isVideo = asset.type.includes('Video');

                              return (
                                <div 
                                  key={aIdx}
                                  className={`flex flex-col md:flex-row md:items-center justify-between p-3.5 px-4 rounded-xl border transition-all duration-200 gap-4 ${
                                    isChecked ? 'border-emerald-500/20 bg-emerald-950/5' : 'border-[#0d2c3b] bg-[#03080c] hover:bg-[#0c2533]/40'
                                  }`}
                                >
                                  <div className="flex items-start gap-4 max-w-3xl">
                                    <button 
                                      type="button"
                                      onClick={() => toggleAssetCheck(asset.name)}
                                      className="relative w-4 h-4 rounded border border-slate-800 bg-black/60 mt-0.5 flex items-center justify-center shrink-0 cursor-pointer focus:outline-none"
                                    >
                                      <svg 
                                        className={`w-2.5 h-2.5 text-cyan-400 transition-all duration-150 transform ${isChecked ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        strokeWidth="3.5"
                                        style={{ filter: 'drop-shadow(0 0 3px #00f2ff)' }}
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    </button>

                                    <div className="space-y-0.5">
                                      <p className="text-[12.5px] font-medium leading-snug tracking-wide text-slate-200">
                                        {asset.name}
                                      </p>
                                      <div className="flex items-center gap-2 md:hidden pt-1.5 text-[8.5px] font-bold font-mono">
                                        <span className={`px-1.5 py-0.5 rounded border ${isVideo ? 'bg-white/5 text-white border-white/10' : 'bg-[#139ab3]/5 text-[#29cfea] border-[#139ab3]/10'}`}>
                                          {isVideo ? 'VIDEO' : 'BLOG'}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between md:justify-end gap-6 font-mono text-[10px] tracking-wider font-bold shrink-0 border-t border-slate-900 md:border-none pt-2.5 md:pt-0" style={{ fontFamily: "'Share Tech Mono', monospace" }}>
                                    <div className="hidden md:flex items-center gap-2.5">
                                      <span className={`px-2 py-0.5 rounded border tracking-wider ${
                                        isVideo ? 'bg-white/5 text-white border-white/10' : 'bg-[#139ab3]/5 text-[#29cfea] border-[#139ab3]/10'
                                      }`}>
                                        {isVideo ? 'VIDEO' : 'BLOG'}
                                      </span>
                                    </div>

                                    <div className="flex items-center gap-4 text-slate-400 font-semibold ml-auto md:ml-0">
                                      {isVideo ? (
                                        <a href={asset.url} target="_blank" rel="noopener noreferrer" className="text-white hover:text-[#29cfea] flex items-center gap-1 transition-colors group/link">
                                          <Video className="w-3.5 h-3.5 text-[#5e778c] group-hover/link:text-[#29cfea]" />
                                          <span>Watch_Video</span>
                                          <span className="text-[#5e778c] text-[7px] scale-90 font-black group-hover/link:text-[#29cfea]">▶</span>
                                        </a>
                                      ) : (
                                        <a href={asset.url} target="_blank" rel="noopener noreferrer" className="text-[#849db5] hover:text-[#29cfea] flex items-center gap-1 transition-colors group/link">
                                          <FileText className="w-3.5 h-3.5 text-[#5e778c] group-hover/link:text-[#29cfea]" />
                                          <span>Read_Blog</span>
                                          <ExternalLink className="w-2.5 h-2.5 text-[#5e778c] opacity-40 group-hover/link:text-[#29cfea]" />
                                        </a>
                                      )}
                                    </div>
                                  </div>
                                </div>
                              );
                            })}
                          </div>

                        </div>
                      );
                    })}
                  </div>
                )}

              </div>
            );
          })}
        </div>

      </div>
      
      {}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes laser-spin {
          0% { transform: rotate(0deg); opacity: 0.15; }
          50% { opacity: 0.45; }
          100% { transform: rotate(360deg); opacity: 0.15; }
        }
        @keyframes spin-slow {
          0% { transform: rotate(45deg); }
          100% { transform: rotate(405deg); }
        }
        @keyframes spin-reverse {
          0% { transform: rotate(-45deg); }
          100% { transform: rotate(-405deg); }
        }
        @keyframes pulse-slow {
          0%, 100% { transform: scale(1); opacity: 0.5; }
          50% { transform: scale(1.05); opacity: 0.75; }
        }
        @keyframes orbit-rotate-1 {
          0% { transform: rotate(30deg) rotateZ(0deg); }
          100% { transform: rotate(30deg) rotateZ(360deg); }
        }
        @keyframes orbit-rotate-2 {
          0% { transform: rotate(-30deg) rotateZ(360deg); }
          100% { transform: rotate(-30deg) rotateZ(0deg); }
        }

        .animate-spin-slow { animation: spin-slow 25s linear infinite; }
        .animate-spin-reverse { animation: spin-reverse 30s linear infinite; }
        .animate-pulse-slow { animation: pulse-slow 6s ease-in-out infinite; }
        .animate-orbit-1 { animation: orbit-rotate-1 20s linear infinite; }
        .animate-orbit-2 { animation: orbit-rotate-2 25s linear infinite; }
        .animate-orbit-3 { animation: spin-slow 40s linear infinite; }

        .laser-strand {
          position: absolute;
          top: 50%; left: 50%;
          height: 1px;
          width: 45vw;
          transform-origin: left center;
          transform: rotate(calc(var(--idx) * 22.5deg)) translate(40px);
          animation: laser-spin 25s linear infinite;
          animation-delay: calc(var(--idx) * -0.9s);
        }

        .laser-strand:nth-child(even) { background: linear-gradient(90deg, rgba(19,154,179,0.4), transparent); }
        .laser-strand:nth-child(odd) { background: linear-gradient(90deg, rgba(255,255,255,0.15), transparent); }
        
        .dynamic-glow {
          filter: drop-shadow(0 0 15px rgba(41,207,234,0.3));
        }
      `}} />
    </section>
  );
}