
import React from 'react';
import { ArrowRight } from 'lucide-react';

export default function Hero() {
  return (
    <section className="quantum-page relative bg-[#050b0f] text-[#849db5] border-b border-[#0c1b24] pt-4 pb-14 lg:pb-20 w-full overflow-hidden">
      
      {}
      <div className="absolute right-4 bottom-4 sm:right-8 sm:bottom-6 xl:right-16 z-30">
        <a 
          href={import.meta.env.VITE_WHATSAPP_GROUP_LINK || "#"}
          target="_blank" 
          rel="noopener noreferrer"
          className="inline-flex items-center gap-3 px-5 h-11 rounded-xl bg-[#03080c] border border-white/10 text-white hover:bg-white hover:text-black hover:border-white transition-all duration-200 group shadow-2xl"
          style={{
            animation: 'whatsapp-radar-glow 2.5s infinite'
          }}
        >
          <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
            <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946C.06 5.348 5.397.01 12.008.01c3.202.001 6.212 1.246 8.477 3.513 2.266 2.268 3.507 5.28 3.505 8.484-.004 6.657-5.34 11.997-11.953 11.997-2.005-.001-3.973-.503-5.714-1.458L0 24zm6.59-4.846c1.66 1.01 3.298 1.548 5.347 1.549 5.517 0 10.005-4.486 10.008-9.997.003-2.67-1.026-5.18-2.9-7.057C17.143 1.77 14.653.743 12.01.743c-5.525 0-10.01 4.487-10.013 10c-.001 2.024.529 4.004 1.532 5.7l-.995 3.633 3.723-.976zm12.181-7.141c-.326-.163-1.925-.949-2.221-1.055-.297-.108-.513-.162-.73.162-.216.324-.838 1.055-1.027 1.271-.19.216-.379.243-.705.082-.326-.162-1.378-.508-2.625-1.621-.969-.864-1.623-1.931-1.813-2.255-.19-.325-.02-.5-.183-.661-.147-.145-.327-.379-.49-.569-.163-.189-.217-.324-.326-.541-.109-.216-.055-.405-.027-.567.027-.162.216-.513.325-.676.108-.163.163-.27.244-.459.081-.189.041-.351-.014-.459-.054-.109-.513-1.236-.703-1.692-.186-.447-.372-.387-.512-.394-.132-.007-.284-.008-.437-.008-.153 0-.401.057-.611.286-.21.23-.8 0-.8 1.957 0 2.132 1.553 4.197 1.77 4.494.216.297 3.056 4.666 7.405 6.542 1.035.446 1.843.712 2.472.912 1.04.331 1.987.284 2.735.172.833-.124 1.925-.787 2.196-1.514.271-.727.271-1.352.19-1.486-.082-.136-.297-.217-.624-.38z"/>
          </svg>
          <span className="text-[12px] font-semibold tracking-tight font-sans">Join WhatsApp Group</span>
        </a>
      </div>

      <div className="w-full px-4 sm:px-8 xl:px-16 grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 xl:gap-16 items-center relative z-10 h-auto mx-auto max-w-[1500px]">
        
        {}
        <div className="lg:col-span-7 space-y-6 text-left py-2 w-full order-last lg:order-first">
          <span className="text-xs font-bold tracking-wider font-mono text-[#5e778c] uppercase block">
          
          </span>
          
          <h1 className="text-4xl sm:text-5xl lg:text-[3.2rem] xl:text-[4rem] font-black tracking-tighter text-white leading-[1.05] uppercase">
            Accelerate your transition <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#29cfea] via-[#139ab3] to-white">into the quantum state space</span>
          </h1>

          <p className="text-[#849db5] text-xs sm:text-sm lg:text-base font-normal leading-relaxed max-w-2xl">
            This intensive program bridges the gap between raw quantum mechanics and hardware-level circuit architecture. Dive deep into multi-qubit gates, design custom quantum oracles, and train high-dimensional Support Vector Machines (Q-SVM) to crack real-world data matrices.
          </p>

          <div className="flex flex-col sm:flex-row gap-3 sm:gap-4 pt-2">
            <a
              href="#resources"
              className="inline-flex items-center gap-2 rounded-full px-7 py-3.5 text-xs font-bold text-[#050b0f] transition-all duration-200 hover:opacity-90 justify-center sm:justify-start w-full sm:w-auto text-center shadow-[0_0_30px_rgba(41,207,234,0.2)]"
              style={{ background: 'linear-gradient(135deg, #29cfea, #ffffff)' }}
            >
              Explore Course Structure
              <ArrowRight className="w-4 h-4 stroke-[2.5]" />
            </a>
            <a 
              href="#curriculum" 
              className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-[#07131a] px-7 py-3.5 text-xs font-bold text-[#849db5] hover:text-white hover:border-white/30 transition-colors justify-center sm:justify-start w-full sm:w-auto text-center"
            >
              Explore Syllabus
            </a>
          </div>
        </div>

        {}
        <div className="lg:col-span-5 w-full flex justify-center lg:justify-end">
          <div className="w-full max-w-md border border-white/5 bg-[#090d12] rounded-xl relative flex items-center justify-center shadow-2xl overflow-hidden aspect-[4/3] md:aspect-[16/13]">
            <img 
              src="/qc1010_logo.png" 
              alt="Course Phase Matrix Chart Map" 
              className="w-full h-full object-cover"
            />
          </div>
        </div>

      </div>

      {}
      <style dangerouslySetInnerHTML={{ __html: `
        @keyframes whatsapp-radar-glow {
          0% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.2); }
          70% { box-shadow: 0 0 0 8px rgba(34, 197, 94, 0); }
          100% { box-shadow: 0 0 0 0 rgba(34, 197, 94, 0); }
        }
      `}} />
    </section>
  );
} 
