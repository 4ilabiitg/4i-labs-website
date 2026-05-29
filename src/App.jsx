
      /*
import React from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Curriculum from './components/Curriculum';
import Resources from './components/Resources';
import Leaderboard from './components/LeaderBoard';
import Footer from './components/Footer';

export default function App() {
  return (
    <div className="bg-[#0a0a0a] min-h-screen text-[#e5e5e5] antialiased">
      
      {/* Full-width Navbar sitting flush at the very top *}
      <Navbar />

      {/* Page Content Container with padding on the sides and bottom *}
      <div className="px-8 pb-8 pt-4">
        
        {/* Section IDs matching the updated Navbar link anchor tags *}
        <section id="home">
          <Hero />
        </section>

        <section id="curriculum">
          <Curriculum />
        </section>

        <section id="resources">
          <Resources />
        </section>

        <section id="leaderboard">
          <Leaderboard />
        </section>

        <Footer />
      </div>

    </div>
  );
} */
import React, { Suspense, lazy } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Curriculum from './components/Curriculum';
import Resources from './components/Resources';
import Leaderboard from './components/LeaderBoard';
import Footer from './components/Footer';

// PREMIUM SECURITY SHIFT: Lazy-load the admin code array. 
// The browser will only fetch this chunk if someone types the exact path.
const AdminPanel = lazy(() => import('./components/AdminPanel'));

export default function App() {
  return (
    <Router>
      <Routes>
        {/* Main student-facing landing screen */}
        <Route path="/" element={
          <div className="bg-[#0a0a0a] min-h-screen text-[#e5e5e5] antialiased">
            {/* Full-width Navbar sitting flush at the very top */}
            <Navbar />

            {/* Page Content Container with padding on the sides and bottom */}
            <div className="px-8 pb-8 pt-4">
              {/* Section IDs matching the updated Navbar link anchor tags */}
              <section id="home">
                <Hero />
              </section>

              <section id="curriculum">
                <Curriculum />
              </section>

              <section id="resources">
                <Resources />
              </section>

              <section id="leaderboard">
                <Leaderboard />
              </section>

              <Footer />
            </div>
          </div>
        } />
        
        {/* COMPLETELY HIDDEN BACKDOOR OPERATIONS ROUTE
          Only your team knows this exact parameter sequence. 
          Suspense protects the bundle layer during dynamic server compilation.
        */}
        <Route path="/alpha-secure-4ilabs-ops-management-2026" element={
          <Suspense fallback={
            <div className="h-screen bg-[#050b0f] flex items-center justify-center font-mono text-xs text-cyan-400">
              CONNECTING TO CORES...
            </div>
          }>
            <AdminPanel />
          </Suspense>
        } />

        {/* Catch-all safety net routing redirects unknown pathways back home */}
        <Route path="*" element={
          <div className="h-screen bg-[#050b0f] flex flex-col items-center justify-center font-mono text-center px-4">
            <h1 className="text-xl font-bold text-white mb-2">404 // NODE NOT FOUND</h1>
            <a href="/" className="text-xs text-cyan-400 hover:underline">Return_Home</a>
          </div>
        } />
      </Routes>
    </Router>
  );
}