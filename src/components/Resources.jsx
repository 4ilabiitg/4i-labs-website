
/*import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Video, ExternalLink, Lock } from 'lucide-react';

const resourcesDatabaseMatrix = [
  {
    weekId: "Week 01",
    weekTitle: "Quantum Foundations & Basic Algorithms ",
    themeClass: "border-white/10 bg-[#03080c]",
    modules: [
      {
        moduleId: "Day 1",
        moduleName: "Intro to Quantum Mechanics",
        assets: [
          { name: "Heisenberg's Uncertainty Principle EXPLAINED ", type: "Video", url: "https://www.youtube.com/watch?v=iZ96TuP_veY&feature=youtu.be" },
          { name: "Quantum Computing – Math and Theory (first 20 minutes only) ", type: "Video", url: "https://www.youtube.com/watch?v=tsbCSkvHhMo" },
          { name: "Quantum Entanglement Explained  ", type: "Video", url: "https://www.youtube.com/watch?v=-WSWz1H3mJg" },
          { name: "Vector Spaces,Tensor Products,and Qubits (optional)", type: "Video", url: "https://www.youtube.com/watch?v=xgA4Dx_7q34" }
        ]
      },
      {
        moduleId: "Day 2",
        moduleName: "Intro to Quantum Computing",
        assets: [
          { name: "A Full Overview Of Quantum Computing", type: "Blog", url: "https://medium.com/visionary-hub/a-full-overview-of-quantum-computing-6897ecb22004" },
          { name: "What is quantum computing?", type: "Video", url: "https://www.youtube.com/watch?v=lt4OsgmUTGI" },
          { name: "What exactly does the word ‘Quantum’ mean??", type: "Video", url: "https://www.youtube.com/watch?v=jk0jWzlvA5w&feature=youtu.be" },
          { name: "Classical vs Quantum paradigm", type: "Video", url: "https://www.youtube.com/watch?v=wGsK1iAKEoA&feature=youtu.be" }
        ]
      },
      {
        moduleId: "Day 3",
        moduleName: "Single-Qubit Gates",
        assets: [
          { name: "Quantum gates and unitary operations", type: "Blog", url: "https://jonathan-hui.medium.com/qc-control-quantum-computing-with-unitary-operators-interference-entanglement-7790c69f6e98" },
          { name: "Single qubit gates", type: "Video ", url: "https://www.youtube.com/watch?v=3-c4xJa7Flk" },
          { name: "Qubit Visualisation techniques: Watch minutes 20-43 of this", type: "Video", url: "https://www.youtube.com/watch?v=tsbCSkvHhMo&t=1207s" }
        ]
      },
      {
        moduleId: "Day 4",
        moduleName: "Multi-Qubit Gates + Quantum Circuits + Qiskit Setup",
        assets: [
          { name: "QC-chapter5", type: "Blog", url: "https://cklixx.people.wm.edu/teaching/QC2021/QC-chapter5.pdf" },
          { name: "Multi qubit gates", type: "Video", url: "https://www.youtube.com/watch?v=DfZZS8Spe7U" },
          { name: "Building quantum circuits", type: "Video", url: "https://www.youtube.com/watch?feature=shared&v=NTplT4WnNbk" },
          { name: "Entanglement is quantum circuits explained", type: "Video", url: "https://www.youtube.com/watch?v=94pZPZ_nsW8" }
        ]
      },
      {
        moduleId: "Day 5",
        moduleName: "Quantum Circuits Continued + Bell States + Qiskit",
        assets: [
          { name: "Getting Started with Qiskit", type: "Video", url: "https://www.youtube.com/watch?v=Tk9LOL9--Y4&feature=youtu.be" },
          { name: "Qiskit Programming Basics", type: "Video", url: "https://www.youtube.com/watch?v=dZWz4Gs_BuI&feature=youtu.be" },
          { name: "First Step in Quantum coding", type: "Video", url: "https://www.youtube.com/watch?v=93-zLTppFZw" },
          { name: "Qiskit Environment Setup", type: "Video", url: "https://www.youtube.com/watch?v=35ykEg3fG4c&feature=youtu.be" },
          { name: "Qiskit Badics Tutorial", type: "Video", url: "https://www.youtube.com/watch?v=QDPtcwhpQkE&feature=youtu.be" },
          { name: "Quantum Circuits and Algorithms", type: "Video", url: "https://www.youtube.com/watch?v=dXvmCSfCPms" },
          { name: "Bell's Inequality ", type: "Video", url: "https://www.youtube.com/watch?feature=shared&v=pS69lqCMdy8" },
          { name: "In depth Bell States Analysis", type: "Video", url: "https://www.youtube.com/watch?feature=shared&v=4BRQsrh4oGw" },
          { name: "Bell Inequality with Qiskit Student.ipynb", type: "Jupyter Notebook", url: "https://drive.google.com/file/d/1oZCmnVcotOsXQWzdMa83I_Cz8vkHNyQD/view" }
        ]
      },
      {
        moduleId: "Day 6",
        moduleName: "Deutsch-Jozsa + Grover's Algorithm",
        assets: [
          { name: "Introduction to the Deutsch-Jozsa Algorithm", type: "Video", url: "https://www.youtube.com/watch?v=QcK0GK7DUh8" },
          { name: "Deutsch's Algorithm: Introduction to Quantum Oracles", type: "Video", url: "https://www.youtube.com/watch?v=7MdEHsRZxvo" },
          { name: "Deutsch-Jozsa Algorithm: Exponential Speedup", type: "Video", url: "https://www.youtube.com/watch?v=jfJckA7Amik" },
          { name: "Deutsch-Jozsa Algorithm Implementation in Qiskit (.ipynb Notebook)", type: "Jupyter Notebook", url: "https://drive.google.com/file/d/1ykGDvalXLAb5mjfGyNVJWIqtojwWzM4Y/view" },
          { name: "Introduction to Grover's Search Algorithm", type: "Video", url: "https://www.youtube.com/watch?v=RQWpF2Gb-gU" },
          { name: "Detailed Mathematical Analysis of Grover's Algorithm", type: "Video", url: "https://www.youtube.com/watch?v=hnpjC8WQVrQ" }
        ]
      },
      {
        moduleId: "Day 7",
        moduleName: "Grover's Algorithm Implementation",
        assets: [
          { name: "Grover's Algorithm Tutorial (IBM Quantum Docs)", type: "Blog", url: "https://quantum.cloud.ibm.com/docs/en/tutorials/grovers-algorithm" },
          { name: "Implementing Grover's Algorithm with Qiskit (Older Version)", type: "Video", url: "https://www.youtube.com/watch?v=0RPFWZj7Jm0" },
          { name: "Application of Grover's Algorithm in Search Efficiency", type: "Blog", url: "https://murshedsk135.medium.com/grovers-algorithm-quantum-leap-in-search-efficiency-996023862769" },
          { name: "Grover's Algorithm in Cybersecurity", type: "Blog", url: "https://postquantum.com/post-quantum/grovers-algorithm/" },
          { name: "Fourier series", type: "Video", url: "https://www.youtube.com/watch?v=r6sGWTCMz2k" },
          { name: "Fourier Transform", type: "Video", url: "https://www.youtube.com/watch?v=spUNpyF58BY" },
          { name: "Shor's Algorithm Introduction", type: "Video", url: "https://www.youtube.com/watch?v=mAHC1dWKNYE" }
        ]
      }
    ]
  },
  {
    weekId: "Week 02",
    weekTitle: "Advanced Math Transforms & Machine Learning ",
    themeClass: "border-white/10 bg-[#03080c]",
    modules: [
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
      },
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
      }
    ]
  },
  {
    weekId: "Week 03",
    weekTitle: "Quantum Kernels & Capstone Deployments ",
    themeClass: "border-white/10 bg-[#03080c]",
    modules: [
      {
        moduleId: "Day 15",
        moduleName: "Quantum Kernels + Q-SVM Theory",
        assets: [
          { name: "SVM  Recap", type: "Video Lecture", url: "https://www.youtube.com/watch?v=_YPScrckx28" },
          { name: "SVM Kernel Recap", type: "Video Lecture", url: "https://www.youtube.com/watch?v=2T2f--RgA9M" },
          { name: "Quantum Kernels", type: "Video Lecture", url: "https://www.youtube.com/watch?v=zw3JYUrS-v8" },
          { name: "Quantum Support Vector Machines", type: "Video Lecture", url: "https://www.youtube.com/watch?v=LmQcSxgINis" }
        ]
      },
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
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const [expandedModules, setExpandedModules] = useState({});

  const [unlockedWeeks, setUnlockedWeeks] = useState({
    "Week 01": true,
    "Week 02": false,
    "Week 03": false
  });

  useEffect(() => {
    const syncWeekVisibilityGating = () => {
      setUnlockedWeeks({
        "Week 01": true,
        "Week 02": localStorage.getItem('qc101_week_02_unlocked') === 'true',
        "Week 03": localStorage.getItem('qc101_week_03_unlocked') === 'true'
      });
    };

    syncWeekVisibilityGating();
    const listenerInterval = setInterval(syncWeekVisibilityGating, 1000);
    return () => clearInterval(listenerInterval);
  }, []);

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
    if (!unlockedWeeks[weekId]) return;
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

  return (
    <section id="resources" className="py-14 bg-[#050b0f] text-[#849db5] select-none border-b border-[#0c1b24] w-full antialiased font-sans">
      <div className="w-full px-4 sm:px-8 xl:px-16 mx-auto relative z-10">
        
        {}
        <div className="mb-8 flex flex-wrap justify-between items-center border-b border-white/10 pb-4 gap-4">
          <div className="text-left space-y-1">
            <h1 className="text-2xl font-black text-white tracking-tighter uppercase leading-none">
              RESOURCES
            </h1>
            <p className="font-mono text-[10px] text-[#5e778c] tracking-widest uppercase flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#5e778c]" />
            </p>
          </div>
        </div>

        {}
        <div className="mb-8 p-4 rounded-2xl border border-white/10 bg-[#07131a] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono">
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-full border-[3px] border-white/10 flex items-center justify-center font-bold text-xs text-white bg-black">
              {metricsPercentage}%
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Overall Material Progression</h3>
            </div>
          </div>
          <div className="flex gap-4 font-mono text-[10px] text-[#5e778c] font-bold tracking-wider uppercase">
            <span>● Sync Indexing: {checkedAssetsCount} Nodes Resolved Across 3 Weekly Core Matrices</span>
          </div>
        </div>

        {}
        <div className="space-y-4">
          {resourcesDatabaseMatrix.map((weekBlock, wIdx) => {
            const isWeekUnlocked = !!unlockedWeeks[weekBlock.weekId];
            const isWeekOpen = !!expandedWeeks[weekBlock.weekId] && isWeekUnlocked;

            return (
              <div 
                key={wIdx} 
                className={`border rounded-2xl bg-[#03080c] ${
                  isWeekUnlocked ? 'border-white/10' : 'border-white/5 opacity-60'
                }`}
              >
                
                {}
                <button
                  onClick={() => toggleWeek(weekBlock.weekId)}
                  className={`w-full flex items-center justify-between p-4 text-left relative z-20 ${
                    isWeekUnlocked ? 'hover:bg-white/[0.02] cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className={`text-[#5e778c] font-mono text-xs tracking-wider shrink-0 transition-transform duration-200 ${
                      isWeekOpen ? 'rotate-90' : 'rotate-0'
                    }`}>
                      ▶
                    </span>
                    <span className="text-sm font-bold tracking-tight flex items-center gap-2">
                      <span className="font-mono text-xs px-3 py-1 rounded-md border text-white bg-white/5 border-white/10">
                        {weekBlock.weekId}
                      </span>
                      <span className="font-extrabold text-[14px] tracking-wide uppercase text-white">
                        {weekBlock.weekTitle}
                      </span>
                    </span>
                  </div>

                  <div className="font-mono text-[11px] font-bold tracking-wider uppercase">
                    {isWeekUnlocked ? (
                      <span className="text-[#5e778c]">{getWeekCompletionString(weekBlock)}</span>
                    ) : (
                      <span className="text-[#5e778c] font-bold inline-flex items-center gap-1.5 bg-white/5 px-3 py-1 border border-white/5 rounded-lg text-[10px] tracking-widest font-mono">
                        <Lock className="w-3 h-3 text-[#5e778c]" /> COMING SOON
                      </span>
                    )}
                  </div>
                </button>

                { }
                {isWeekUnlocked && (
                  <div 
                    className={`grid grid-cols-1 ${
                      isWeekOpen ? 'p-4 border-t border-white/5' : 'max-h-0 p-0 overflow-hidden pointer-events-none'
                    } bg-black/20 gap-4`}
                  >
                    {weekBlock.modules.map((moduleItem, mIdx) => {
                      const moduleKey = `${weekBlock.weekId}-${mIdx}`;
                      const isModuleOpen = !!expandedModules[moduleKey];

                      return (
                        <div key={mIdx} className="rounded-xl border border-white/5 bg-[#03080c] overflow-hidden">
                          
                          <button
                            onClick={() => toggleModule(moduleKey)}
                            className="w-full flex items-center justify-between p-3.5 pl-4 text-left hover:bg-white/[0.01] border-b border-white/5 cursor-pointer"
                          >
                            <div className="flex items-center gap-3 text-xs font-bold text-white">
                              <span className={`text-[#5e778c] text-[10px] transition-transform duration-200 inline-block ${isModuleOpen ? 'rotate-90' : 'rotate-0'}`}>▶</span>
                              <span className="text-white font-mono text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                                {moduleItem.moduleId}
                              </span>
                              <span className="tracking-wide text-white font-bold uppercase">{moduleItem.moduleName}</span>
                            </div>
                            <div className="text-[9px] font-mono text-[#5e778c] font-bold uppercase tracking-widest shrink-0 hidden sm:block">
                              {getModuleCompletionString(moduleItem)}
                            </div>
                          </button>

                          {}
                          <div 
                            className={`${
                              isModuleOpen ? 'p-2.5 space-y-2' : 'max-h-0 p-0 overflow-hidden pointer-events-none'
                            } bg-black/10`}
                          >
                            {moduleItem.assets.map((asset, aIdx) => {
                              const isChecked = !!checkedAssets[asset.name];
                              const isVideo = asset.type.includes('Video');

                              return (
                                <div 
                                  key={aIdx}
                                  className={`flex flex-col md:flex-row md:items-center justify-between p-3.5 px-4 rounded-xl border transition-all duration-150 gap-4 ${
                                    isChecked ? 'border-white/20 bg-white/[0.02]' : 'border-white/5 bg-[#03080c] hover:border-white/10'
                                  }`}
                                >
                                  <div className="flex items-start gap-4 max-w-3xl">
                                    <button 
                                      type="button"
                                      onClick={() => toggleAssetCheck(asset.name)}
                                      className="relative w-4 h-4 rounded border border-white/20 bg-black/60 mt-0.5 flex items-center justify-center shrink-0 cursor-pointer focus:outline-none"
                                    >
                                      <svg 
                                        className={`w-2.5 h-2.5 text-white transition-all duration-150 transform ${isChecked ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        strokeWidth="4"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    </button>

                                    <div className="space-y-0.5">
                                      <p className="text-[12.5px] font-medium leading-snug tracking-wide text-white">
                                        {asset.name}
                                      </p>
                                      <div className="flex items-center gap-2 md:hidden pt-1.5 text-[8.5px] font-bold font-mono">
                                        <span className="px-1.5 py-0.5 rounded border bg-white/5 text-[#849db5] border-white/10">
                                          {isVideo ? 'VIDEO' : 'BLOG'}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between md:justify-end gap-6 font-mono text-[10px] tracking-wider font-bold shrink-0 border-t border-white/5 md:border-none pt-2.5 md:pt-0">
                                    <div className="hidden md:flex items-center gap-2.5">
                                      <span className="px-2 py-0.5 rounded border tracking-wider bg-white/5 text-[#849db5] border-white/10">
                                        {isVideo ? 'VIDEO' : 'BLOG'}
                                      </span>
                                    </div>

                                    <div className="flex items-center gap-4 text-[#849db5] font-semibold ml-auto md:ml-0">
                                      {isVideo ? (
                                        <a href={asset.url} target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1 transition-colors">
                                          <Video className="w-3.5 h-3.5 text-[#5e778c]" />
                                          <span>Watch_Video</span>
                                        </a>
                                      ) : (
                                        <a href={asset.url} target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1 transition-colors">
                                          <FileText className="w-3.5 h-3.5 text-[#5e778c]" />
                                          <span>Read_Blog</span>
                                          <ExternalLink className="w-2.5 h-2.5 text-[#5e778c]" />
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
    </section>
  );
} */

  import React, { useState, useEffect } from 'react';
import { Terminal, FileText, Video, ExternalLink, Lock } from 'lucide-react';

const resourcesDatabaseMatrix = [
  {
    weekId: "Week 01",
    weekTitle: "Quantum Foundations & Basic Algorithms ",
    themeClass: "border-white/10 bg-[#03080c]",
    modules: [
      {
        moduleId: "Day 1",
        moduleName: "Intro to Quantum Mechanics",
        assets: [
          { name: "Heisenberg's Uncertainty Principle EXPLAINED ", type: "Video", url: "https://www.youtube.com/watch?v=iZ96TuP_veY&feature=youtu.be" },
          { name: "Quantum Computing – Math and Theory (first 20 minutes only) ", type: "Video", url: "https://www.youtube.com/watch?v=tsbCSkvHhMo" },
          { name: "Quantum Entanglement Explained  ", type: "Video", url: "https://www.youtube.com/watch?v=-WSWz1H3mJg" },
          { name: "Vector Spaces,Tensor Products,and Qubits (optional)", type: "Video", url: "https://www.youtube.com/watch?v=xgA4Dx_7q34" }
        ]
      },
      {
        moduleId: "Day 2",
        moduleName: "Intro to Quantum Computing",
        assets: [
          { name: "A Full Overview Of Quantum Computing", type: "Blog", url: "https://medium.com/visionary-hub/a-full-overview-of-quantum-computing-6897ecb22004" },
          { name: "What is quantum computing?", type: "Video", url: "https://www.youtube.com/watch?v=lt4OsgmUTGI" },
          { name: "What exactly does the word ‘Quantum’ mean??", type: "Video", url: "https://www.youtube.com/watch?v=jk0jWzlvA5w&feature=youtu.be" },
          { name: "Classical vs Quantum paradigm", type: "Video", url: "https://www.youtube.com/watch?v=wGsK1iAKEoA&feature=youtu.be" }
        ]
      },
      {
        moduleId: "Day 3",
        moduleName: "Single-Qubit Gates",
        assets: [
          { name: "Quantum gates and unitary operations", type: "Blog", url: "https://jonathan-hui.medium.com/qc-control-quantum-computing-with-unitary-operators-interference-entanglement-7790c69f6e98" },
          { name: "Single qubit gates", type: "Video ", url: "https://www.youtube.com/watch?v=3-c4xJa7Flk" },
          { name: "Qubit Visualisation techniques: Watch minutes 20-43 of this", type: "Video", url: "https://www.youtube.com/watch?v=tsbCSkvHhMo&t=1207s" }
        ]
      },
      {
        moduleId: "Day 4",
        moduleName: "Multi-Qubit Gates + Quantum Circuits + Qiskit Setup",
        assets: [
          { name: "QC-chapter5", type: "Blog", url: "https://cklixx.people.wm.edu/teaching/QC2021/QC-chapter5.pdf" },
          { name: "Multi qubit gates", type: "Video", url: "https://www.youtube.com/watch?v=DfZZS8Spe7U" },
          { name: "Building quantum circuits", type: "Video", url: "https://www.youtube.com/watch?feature=shared&v=NTplT4WnNbk" },
          { name: "Entanglement is quantum circuits explained", type: "Video", url: "https://www.youtube.com/watch?v=94pZPZ_nsW8" }
        ]
      },
      {
        moduleId: "Day 5",
        moduleName: "Quantum Circuits Continued + Bell States + Qiskit",
        assets: [
          { name: "Getting Started with Qiskit", type: "Video", url: "https://www.youtube.com/watch?v=Tk9LOL9--Y4&feature=youtu.be" },
          { name: "Qiskit Programming Basics", type: "Video", url: "https://www.youtube.com/watch?v=dZWz4Gs_BuI&feature=youtu.be" },
          { name: "First Step in Quantum coding", type: "Video", url: "https://www.youtube.com/watch?v=93-zLTppFZw" },
          { name: "Qiskit Environment Setup", type: "Video", url: "https://www.youtube.com/watch?v=35ykEg3fG4c&feature=youtu.be" },
          { name: "Qiskit Badics Tutorial", type: "Video", url: "https://www.youtube.com/watch?v=QDPtcwhpQkE&feature=youtu.be" },
          { name: "Quantum Circuits and Algorithms", type: "Video", url: "https://www.youtube.com/watch?v=dXvmCSfCPms" },
          { name: "Bell's Inequality ", type: "Video", url: "https://www.youtube.com/watch?feature=shared&v=pS69lqCMdy8" },
          { name: "In depth Bell States Analysis", type: "Video", url: "https://www.youtube.com/watch?feature=shared&v=4BRQsrh4oGw" },
          { name: "Bell Inequality with Qiskit Student.ipynb", type: "Jupyter Notebook", url: "https://drive.google.com/file/d/1oZCmnVcotOsXQWzdMa83I_Cz8vkHNyQD/view" }
        ]
      },
      {
        moduleId: "Day 6",
        moduleName: "Deutsch-Jozsa + Grover's Algorithm",
        assets: [
          { name: "Introduction to the Deutsch-Jozsa Algorithm", type: "Video", url: "https://www.youtube.com/watch?v=QcK0GK7DUh8" },
          { name: "Deutsch's Algorithm: Introduction to Quantum Oracles", type: "Video", url: "https://www.youtube.com/watch?v=7MdEHsRZxvo" },
          { name: "Deutsch-Jozsa Algorithm: Exponential Speedup", type: "Video", url: "https://www.youtube.com/watch?v=jfJckA7Amik" },
          { name: "Deutsch-Jozsa Algorithm Implementation in Qiskit (.ipynb Notebook)", type: "Jupyter Notebook", url: "https://drive.google.com/file/d/1ykGDvalXLAb5mjfGyNVJWIqtojwWzM4Y/view" },
          { name: "Introduction to Grover's Search Algorithm", type: "Video", url: "https://www.youtube.com/watch?v=RQWpF2Gb-gU" },
          { name: "Detailed Mathematical Analysis of Grover's Algorithm", type: "Video", url: "https://www.youtube.com/watch?v=hnpjC8WQVrQ" }
        ]
      },
      {
        moduleId: "Day 7",
        moduleName: "Grover's Algorithm Implementation",
        assets: [
          { name: "Grover's Algorithm Tutorial (IBM Quantum Docs)", type: "Blog", url: "https://quantum.cloud.ibm.com/docs/en/tutorials/grovers-algorithm" },
          { name: "Implementing Grover's Algorithm with Qiskit (Older Version)", type: "Video", url: "https://www.youtube.com/watch?v=0RPFWZj7Jm0" },
          { name: "Application of Grover's Algorithm in Search Efficiency", type: "Blog", url: "https://murshedsk135.medium.com/grovers-algorithm-quantum-leap-in-search-efficiency-996023862769" },
          { name: "Grover's Algorithm in Cybersecurity", type: "Blog", url: "https://postquantum.com/post-quantum/grovers-algorithm/" },
          { name: "Fourier series", type: "Video", url: "https://www.youtube.com/watch?v=r6sGWTCMz2k" },
          { name: "Fourier Transform", type: "Video", url: "https://www.youtube.com/watch?v=spUNpyF58BY" },
          { name: "Shor's Algorithm Introduction", type: "Video", url: "https://www.youtube.com/watch?v=mAHC1dWKNYE" }
        ]
      }
    ]
  },
  {
    weekId: "Week 02",
    weekTitle: "Advanced Math Transforms & Machine Learning ",
    themeClass: "border-white/10 bg-[#03080c]",
    modules: [
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
      },
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
      }
    ]
  },
  {
    weekId: "Week 03",
    weekTitle: "Quantum Kernels & Capstone Deployments ",
    themeClass: "border-white/10 bg-[#03080c]",
    modules: [
      {
        moduleId: "Day 15",
        moduleName: "Quantum Kernels + Q-SVM Theory",
        assets: [
          { name: "SVM  Recap", type: "Video Lecture", url: "https://www.youtube.com/watch?v=_YPScrckx28" },
          { name: "SVM Kernel Recap", type: "Video Lecture", url: "https://www.youtube.com/watch?v=2T2f--RgA9M" },
          { name: "Quantum Kernels", type: "Video Lecture", url: "https://www.youtube.com/watch?v=zw3JYUrS-v8" },
          { name: "Quantum Support Vector Machines", type: "Video Lecture", url: "https://www.youtube.com/watch?v=LmQcSxgINis" }
        ]
      },
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
  const [expandedWeeks, setExpandedWeeks] = useState({});
  const [expandedModules, setExpandedModules] = useState({});

  const [unlockedWeeks, setUnlockedWeeks] = useState({
    "Week 01": true,
    "Week 02": false,
    "Week 03": false
  });

  useEffect(() => {
    const syncWeekVisibilityGating = () => {
      setUnlockedWeeks({
        "Week 01": true,
        "Week 02": localStorage.getItem('qc101_week_02_unlocked') === 'true',
        "Week 03": localStorage.getItem('qc101_week_03_unlocked') === 'true'
      });
    };

    syncWeekVisibilityGating();
    const listenerInterval = setInterval(syncWeekVisibilityGating, 1000);
    return () => clearInterval(listenerInterval);
  }, []);

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
    if (!unlockedWeeks[weekId]) return;
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

  return (
    <section id="resources" className="py-14 bg-[#050b0f] text-[#849db5] select-none border-b border-[#0c1b24] w-full antialiased font-sans">
      <div className="w-full px-4 sm:px-8 xl:px-16 mx-auto relative z-10">
        
        <div className="mb-8 flex flex-wrap justify-between items-center border-b border-white/10 pb-4 gap-4">
          <div className="text-left space-y-1">
            <h1 className="text-2xl font-black text-white tracking-tighter uppercase leading-none">
              RESOURCES
            </h1>
            <p className="font-mono text-[10px] text-[#5e778c] tracking-widest uppercase flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-[#5e778c]" />
            </p>
          </div>
        </div>

        <div className="mb-8 p-4 rounded-2xl border border-white/10 bg-[#07131a] flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 font-mono">
          <div className="flex items-center gap-3.5">
            <div className="h-10 w-10 rounded-full border-[3px] border-white/10 flex items-center justify-center font-bold text-xs text-white bg-black">
              {metricsPercentage}%
            </div>
            <div>
              <h3 className="text-xs font-bold text-white uppercase tracking-wider">Overall Material Progression</h3>
            </div>
          </div>
          <div className="flex gap-4 font-mono text-[10px] text-[#5e778c] font-bold tracking-wider uppercase">
            <span>● Sync Indexing: {checkedAssetsCount} Nodes Resolved Across 3 Weekly Core Matrices</span>
          </div>
        </div>

        <div className="space-y-4">
          {resourcesDatabaseMatrix.map((weekBlock, wIdx) => {
            const isWeekUnlocked = !!unlockedWeeks[weekBlock.weekId];
            const isWeekOpen = !!expandedWeeks[weekBlock.weekId] && isWeekUnlocked;

            return (
              <div 
                key={wIdx} 
                className={`border rounded-2xl bg-[#03080c] ${
                  isWeekUnlocked ? 'border-white/10' : 'border-white/5 opacity-60'
                }`}
              >
                
                <button
                  onClick={() => toggleWeek(weekBlock.weekId)}
                  className={`w-full flex items-center justify-between p-4 text-left relative z-20 ${
                    isWeekUnlocked ? 'hover:bg-white/[0.02] cursor-pointer' : 'cursor-default'
                  }`}
                >
                  <div className="flex items-center gap-3.5 pr-4">
                    <span className={`text-[#5e778c] font-mono text-xs tracking-wider shrink-0 transition-transform duration-200 ${
                      isWeekOpen ? 'rotate-90' : 'rotate-0'
                    }`}>
                      ▶
                    </span>
                    <span className="text-sm font-bold tracking-tight flex items-center gap-2">
                      <span className="font-mono text-xs px-3 py-1 rounded-md border text-white bg-white/5 border-white/10">
                        {weekBlock.weekId}
                      </span>
                      <span className="font-extrabold text-[14px] tracking-wide uppercase text-white">
                        {weekBlock.weekTitle}
                      </span>
                    </span>
                  </div>

                  <div className="font-mono text-[11px] font-bold tracking-wider uppercase">
                    {isWeekUnlocked ? (
                      <span className="text-[#5e778c]">{getWeekCompletionString(weekBlock)}</span>
                    ) : (
                      <span className="text-[#5e778c] font-bold inline-flex items-center gap-1.5 bg-white/5 px-3 py-1 border border-white/5 rounded-lg text-[10px] tracking-widest font-mono">
                        <Lock className="w-3 h-3 text-[#5e778c]" /> COMING SOON
                      </span>
                    )}
                  </div>
                </button>

                {isWeekUnlocked && (
                  <div 
                    className={`grid grid-cols-1 ${
                      isWeekOpen ? 'p-4 border-t border-white/5' : 'max-h-0 p-0 overflow-hidden pointer-events-none'
                    } bg-black/20 gap-4`}
                  >
                    {weekBlock.modules.map((moduleItem, mIdx) => {
                      const moduleKey = `${weekBlock.weekId}-${mIdx}`;
                      const isModuleOpen = !!expandedModules[moduleKey];

                      return (
                        <div key={mIdx} className="rounded-xl border border-white/5 bg-[#03080c] overflow-hidden">
                          
                          <button
                            onClick={() => toggleModule(moduleKey)}
                            className="w-full flex items-center justify-between p-3.5 pl-4 text-left hover:bg-white/[0.01] border-b border-white/5 cursor-pointer"
                          >
                            <div className="flex items-center gap-3 text-xs font-bold text-white">
                              <span className={`text-[#5e778c] text-[10px] transition-transform duration-200 inline-block ${isModuleOpen ? 'rotate-90' : 'rotate-0'}`}>▶</span>
                              <span className="text-white font-mono text-[11px] bg-white/5 border border-white/10 px-2 py-0.5 rounded">
                                {moduleItem.moduleId}
                              </span>
                              <span className="tracking-wide text-white font-bold uppercase">{moduleItem.moduleName}</span>
                            </div>
                            <div className="text-[9px] font-mono text-[#5e778c] font-bold uppercase tracking-widest shrink-0 hidden sm:block">
                              {getModuleCompletionString(moduleItem)}
                            </div>
                          </button>

                          <div 
                            className={`${
                              isModuleOpen ? 'p-2.5 space-y-2' : 'max-h-0 p-0 overflow-hidden pointer-events-none'
                            } bg-black/10`}
                          >
                            {moduleItem.assets.map((asset, aIdx) => {
                              const isChecked = !!checkedAssets[asset.name];
                              const isVideo = asset.type.includes('Video');
                              const isNotebook = asset.type.includes('Jupyter Notebook') || asset.name.toLowerCase().includes('.ipynb');

                              return (
                                <div 
                                  key={aIdx}
                                  className={`flex flex-col md:flex-row md:items-center justify-between p-3.5 px-4 rounded-xl border transition-all duration-150 gap-4 ${
                                    isChecked ? 'border-white/20 bg-white/[0.02]' : 'border-white/5 bg-[#03080c] hover:border-white/10'
                                  }`}
                                >
                                  <div className="flex items-start gap-4 max-w-3xl">
                                    <button 
                                      type="button"
                                      onClick={() => toggleAssetCheck(asset.name)}
                                      className="relative w-4 h-4 rounded border border-white/20 bg-black/60 mt-0.5 flex items-center justify-center shrink-0 cursor-pointer focus:outline-none"
                                    >
                                      <svg 
                                        className={`w-2.5 h-2.5 text-white transition-all duration-150 transform ${isChecked ? 'scale-100 opacity-100' : 'scale-50 opacity-0'}`} 
                                        fill="none" 
                                        viewBox="0 0 24 24" 
                                        stroke="currentColor" 
                                        strokeWidth="4"
                                      >
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                                      </svg>
                                    </button>

                                    <div className="space-y-0.5">
                                      <p className="text-[12.5px] font-medium leading-snug tracking-wide text-white">
                                        {asset.name}
                                      </p>
                                      <div className="flex items-center gap-2 md:hidden pt-1.5 text-[8.5px] font-bold font-mono">
                                        <span className="px-1.5 py-0.5 rounded border bg-white/5 text-[#849db5] border-white/10 uppercase">
                                          {isNotebook ? 'NOTEBOOK' : isVideo ? 'VIDEO' : 'BLOG'}
                                        </span>
                                      </div>
                                    </div>
                                  </div>

                                  <div className="flex items-center justify-between md:justify-end gap-6 font-mono text-[10px] tracking-wider font-bold shrink-0 border-t border-white/5 md:border-none pt-2.5 md:pt-0">
                                    <div className="hidden md:flex items-center gap-2.5">
                                      <span className="px-2 py-0.5 rounded border tracking-wider bg-white/5 text-[#849db5] border-white/10 uppercase">
                                        {isNotebook ? 'NOTEBOOK' : isVideo ? 'VIDEO' : 'BLOG'}
                                      </span>
                                    </div>

                                    <div className="flex items-center gap-4 text-[#849db5] font-semibold ml-auto md:ml-0">
                                      {isNotebook ? (
                                        <a href={asset.url} target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1 transition-colors">
                                          <Terminal className="w-3.5 h-3.5 text-[#5e778c]" />
                                          <span>Open Notebook</span>
                                          <ExternalLink className="w-2.5 h-2.5 text-[#5e778c]" />
                                        </a>
                                      ) : isVideo ? (
                                        <a href={asset.url} target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1 transition-colors">
                                          <Video className="w-3.5 h-3.5 text-[#5e778c]" />
                                          <span>Watch Video</span>
                                        </a>
                                      ) : (
                                        <a href={asset.url} target="_blank" rel="noopener noreferrer" className="text-white hover:underline flex items-center gap-1 transition-colors">
                                          <FileText className="w-3.5 h-3.5 text-[#5e778c]" />
                                          <span>Read Blog</span>
                                          <ExternalLink className="w-2.5 h-2.5 text-[#5e778c]" />
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
    </section>
  );
}