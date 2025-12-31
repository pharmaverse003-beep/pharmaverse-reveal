"use client";

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  ShieldCheck, 
  Activity, 
  Zap, 
  ChevronRight, 
  Star, 
  Layers, 
  ClipboardCheck, 
  Clock 
} from 'lucide-react';

/**
 * ANIMATION PHYSICS CONSTANTS (SaaS Standard)
 */
const TRANSITION_SNAP = { type: "spring", stiffness: 100, damping: 20 };
const FADE_IN = { opacity: 0, y: 20 };
const FADE_STAY = { opacity: 1, y: 0 };

export default function PharmaversePremiumReveal() {
  const [scene, setScene] = useState(0);

  // AUTOMATED NARRATIVE SEQUENCER
  useEffect(() => {
    const timers = [
      setTimeout(() => setScene(1), 0),      // 0-6s: Silent Struggle
      setTimeout(() => setScene(2), 6000),   // 6-12s: The Problem
      setTimeout(() => setScene(3), 12000),  // 12-18s: Turning Point
      setTimeout(() => setScene(4), 18000),  // 18-35s: Hero Reveal
      setTimeout(() => setScene(5), 35000),  // 35-50s: Feature Deep Dive
      setTimeout(() => setScene(6), 50000),  // 50-70s: Social & Pricing
      setTimeout(() => setScene(7), 70000),  // 70s+: Final Statement
    ];
    return () => timers.forEach(t => clearTimeout(t));
  }, []);

  return (
    <div className="relative min-h-screen bg-[#020d0c] text-white overflow-hidden font-sans selection:bg-orange-500/30">
      
      {/* 🧬 GLOBAL MEDICAL ATMOSPHERE */}
      <div className="fixed inset-0 pointer-events-none">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_#05332B_0%,_transparent_70%)] opacity-30" />
        <div className="absolute top-[-20%] right-[-10%] w-[800px] h-[800px] bg-emerald-500/10 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] left-[-20%] w-[600px] h-[600px] bg-orange-500/5 blur-[120px] rounded-full" />
        <div className="absolute inset-0 opacity-[0.03]" style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, white 1px, transparent 0)', backgroundSize: '40px 40px' }} />
      </div>

      <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
        <AnimatePresence mode="wait">

          {/* SCENE 1 & 2: THE STRUGGLE & PROBLEM */}
          {(scene === 1 || scene === 2) && (
            <motion.div key="scene1" initial={FADE_IN} animate={FADE_STAY} exit={{ opacity: 0, scale: 1.1 }} transition={{ duration: 1.5 }} className="text-center max-w-3xl">
               <motion.span animate={{ opacity: [0.3, 0.6, 0.3] }} transition={{ duration: 3, repeat: Infinity }} className="text-xs tracking-[0.6em] uppercase font-bold text-emerald-400 block mb-12">System Status: Traditional Chaos</motion.span>
               <h2 className="text-4xl md:text-6xl font-light tracking-tight leading-relaxed text-slate-200">
                Pharmacy education was never <br /> meant to feel <span className="text-white italic opacity-100 underline decoration-white/20">this chaotic.</span>
               </h2>
               
               {scene === 2 && (
                 <div className="mt-20 flex justify-center gap-6">
                    {['Scattered Resources', 'Time Pressure', 'Clinical Overwhelm'].map((text, i) => (
                      <motion.div key={i} initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: i * 0.5 }} className="px-6 py-3 rounded-full border border-white/5 bg-white/[0.02] text-xs font-semibold text-slate-400">
                        {text}
                      </motion.div>
                    ))}
                 </div>
               )}
            </motion.div>
          )}

          {/* SCENE 3 & 4: TURNING POINT & REVEAL */}
          {(scene === 3 || scene === 4) && (
            <motion.div key="scene3" initial={FADE_IN} animate={FADE_STAY} exit={{ opacity: 0 }} className="text-center">
              {scene === 3 ? (
                <motion.h2 animate={{ opacity: [0, 1, 0] }} transition={{ duration: 3 }} className="text-5xl font-black tracking-tighter">What if everything worked together?</motion.h2>
              ) : (
                <div className="flex flex-col items-center">
                  <motion.div initial={{ scale: 0.8, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} transition={TRANSITION_SNAP} className="mb-8">
                    <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 rounded-3xl">
                      <ShieldCheck size={48} className="text-emerald-500" />
                    </div>
                  </motion.div>
                  <h1 className="text-7xl md:text-9xl font-black tracking-tighter mb-4 leading-none">PHARMA<span className="text-orange-500">VERSE</span></h1>
                  <p className="text-2xl text-white/40 font-medium tracking-tight">The Clinical Operating System for Pharm.D</p>
                </div>
              )}
            </motion.div>
          )}

          {/* SCENE 5: CORE PILLARS (The SaaS Standard) */}
          {scene === 5 && (
            <motion.div key="scene5" initial={FADE_IN} animate={FADE_STAY} className="w-full max-w-6xl grid grid-cols-1 md:grid-cols-3 gap-8">
               <FeatureCard icon={<Layers className="text-emerald-400"/>} title="High-Yield Notes" desc="Exam-ready. Clinically relevant. updated." delay={0.2} />
               <FeatureCard icon={<Zap className="text-orange-500"/>} title="PoC Clinical Tools" desc="Dosing & Interaction checkers for ward readiness." delay={0.4} active />
               <FeatureCard icon={<ClipboardCheck className="text-blue-400"/>} title="Learning Paths" desc="Classroom foundation to Hospital reality." delay={0.6} />
            </motion.div>
          )}

          {/* SCENE 6 & 7: CLOSING & CTA */}
          {scene >= 6 && (
            <motion.div key="scene6" initial={FADE_IN} animate={FADE_STAY} className="text-center">
              <h2 className="text-5xl font-black mb-12">Upgrade when you’re ready.</h2>
              <div className="bg-gradient-to-b from-white/10 to-transparent border border-white/10 p-12 rounded-[50px] shadow-2xl relative">
                <div className="text-orange-500 text-[10px] font-black uppercase tracking-[0.4em] mb-4">Elite Access</div>
                <div className="flex items-baseline justify-center gap-1">
                   <motion.span initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="text-8xl font-black text-white leading-none">99</motion.span>
                   <span className="text-3xl font-black text-orange-500">%</span>
                </div>
                <div className="text-white/40 text-sm mt-4 font-bold">Efficiency Increase Across Colleagues</div>
                <button className="mt-12 group bg-orange-600 hover:bg-orange-500 text-white px-12 py-5 rounded-2xl font-bold text-xl transition-all flex items-center gap-3 shadow-[0_20px_50px_-10px_rgba(234,88,12,0.4)]">
                   Start Your Success Journey <ChevronRight size={20} className="group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          )}

        </AnimatePresence>
      </div>

      {/* FOOTER LABEL */}
      <div className="fixed bottom-8 w-full flex justify-between px-12 opacity-20 pointer-events-none">
          <div className="text-[10px] font-black uppercase tracking-[0.4em]">Clinical Command Protocol v4.1</div>
          <div className="text-[10px] font-black uppercase tracking-[0.4em]">© 2025 PHARMAVERSE</div>
      </div>
    </div>
  );
}

function FeatureCard({ icon, title, desc, delay, active = false }) {
  return (
    <motion.div initial={{ opacity: 0, y: 30 }} animate={{ opacity: 1, y: 0 }} transition={{ ...TRANSITION_SNAP, delay }} className={`p-10 rounded-[40px] border transition-all ${active ? 'bg-white/5 border-orange-500/20 scale-105 shadow-2xl' : 'bg-white/[0.02] border-white/5 opacity-50'}`}>
       <div className="mb-6 w-14 h-14 bg-white/5 rounded-2xl flex items-center justify-center">{icon}</div>
       <h3 className="text-2xl font-bold text-white mb-4 tracking-tight">{title}</h3>
       <p className="text-slate-400 text-sm leading-relaxed">{desc}</p>
    </motion.div>
  );
}
