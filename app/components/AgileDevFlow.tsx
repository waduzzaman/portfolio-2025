'use client';

import React, { useEffect, useState } from "react";
import { Code2, Search, Lightbulb, PencilRuler, TestTube, Rocket, RefreshCcw, CheckCircle2 } from "lucide-react";

const agileSteps = [
  { title: "Discovery", icon: <Lightbulb size={20} />, desc: "Identify problem & market need" },
  { title: "Planning", icon: <Search size={20} />, desc: "Define requirements & backlog" },
  { title: "Design", icon: <PencilRuler size={20} />, desc: "UI/UX & System Architecture" },
  { title: "Development", icon: <Code2 size={20} />, desc: "Sprints & Iterative Coding" },
  { title: "Testing", icon: <TestTube size={20} />, desc: "QA, UAT & Bug Fixing" },
  { title: "Deployment", icon: <Rocket size={20} />, desc: "CI/CD & Production Launch" },
  { title: "Maintenance", icon: <RefreshCcw size={20} />, desc: "Updates & Performance Tuning" },
  { title: "Evaluation", icon: <CheckCircle2 size={20} />, desc: "User Feedback & Analytics" },
] as const;

export default function AgileDevFlow() {
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
   <section id="work-flow" className="py-20 bg-white dark:bg-gray-800">
      <div className="w-full max-w-6xl mx-auto">        
        {/* --- MOBILE VIEW: VERTICAL STACK WITH SOLID LINE --- */}
        <div className="md:hidden flex flex-col items-center">
          <div className="text-center mb-12 dark:text-white">
            <h2 className="text-3xl font-bold text-white mb-2">Agile Lifecycle</h2>
            <p className="text-blue-400 font-medium tracking-wide">From Concept to Deployment</p>
          </div>

          <div className="relative w-full max-w-xs mx-auto">
            {/* Solid Vertical Connector */}
            <div 
              className="absolute left-1/2 -translate-x-1/2 bg-blue-500/30 z-0" 
              style={{ top: '40px', bottom: '40px', width: '2px' }} 
            />

            <div className="flex flex-col space-y-12">
              {agileSteps.map((step, i) => (
                <div key={i} className="relative z-10">
                  <div className="bg-slate-900 border border-slate-800 rounded-2xl p-5 shadow-2xl flex flex-col items-center group hover:border-blue-500/50 transition-all duration-300">
                    <div className="w-10 h-10 rounded-full bg-blue-600/20 text-blue-400 flex items-center justify-center mb-3 border border-blue-500/30 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                      {step.icon}
                    </div>
                    <h3 className="text-lg font-bold text-white mb-1">{step.title}</h3>
                    <p className="text-xs text-slate-400 text-center leading-relaxed italic">{step.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* --- DESKTOP VIEW: CIRCULAR ITERATIVE LOOP --- */}
         <h2 className="text-4xl font-bold text-center text-gray-900 dark:text-white mb-4">
          Agile Development Workflow
        </h2>
        <div className="w-20 h-1 bg-blue-600 mx-auto mb-12"></div>
        <div className="hidden md:flex relative w-full items-center justify-center h-[800px]">
          
          {/* Central Branding Hub */}
          <div className="z-20 text-center">
            <div className="bg-slate-900/80 backdrop-blur-md p-10 rounded-full shadow-[0_0_50px_rgba(59,130,246,0.2)] border border-slate-700 w-80 h-80 flex flex-col items-center justify-center">
              <div className="p-3 bg-blue-600 rounded-xl mb-4 shadow-lg shadow-blue-500/40">
                <Code2 className="text-white" size={32} />
              </div>
              <h2 className="text-2xl lg:text-3xl font-black text-white leading-tight uppercase tracking-tighter">
                Agile <br/> Software
              </h2>
              <p className="text-blue-400 font-bold text-xs mt-2 tracking-[0.2em]">DEV WORKFLOW</p>
              <div className="mt-4 flex gap-1">
                {[1, 2, 3].map(i => <div key={i} className="w-1.5 h-1.5 rounded-full bg-blue-500/50" />)}
              </div>
            </div>
          </div>

          {/* Background Iteration Ring */}
          <div className="absolute border-[2px] border-blue-500/10 rounded-full 
                        w-[550px] h-[550px] lg:w-[680px] lg:h-[680px] z-0" />

          {/* Interactive Nodes */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            {agileSteps.map((step, i) => {
              const radius = typeof window !== 'undefined' && window.innerWidth < 1024 ? 280 : 340;
              const angle = (i * 360) / agileSteps.length - 90;
              const x = radius * Math.cos((angle * Math.PI) / 180);
              const y = radius * Math.sin((angle * Math.PI) / 180);

              return (
                <div
                  key={i}
                  className="absolute pointer-events-auto group"
                  style={{ transform: `translate(${x}px, ${y}px)` }}
                >
                  <div className="w-44 lg:w-52 bg-slate-900 border border-slate-800 rounded-2xl shadow-xl hover:shadow-blue-500/20 hover:border-blue-500 transition-all duration-500 p-5 text-center relative">
                    {/* Index Number */}
                    <span className="absolute -top-3 left-6 bg-slate-800 text-blue-400 text-[10px] font-bold px-2 py-0.5 rounded border border-slate-700">
                      0{i + 1}
                    </span>
                    
                    <div className="text-blue-500 mb-2 flex justify-center group-hover:scale-110 transition-transform">
                      {step.icon}
                    </div>
                    <h3 className="text-sm font-bold text-white mb-1 group-hover:text-blue-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-[10px] text-slate-500 leading-tight">
                      {step.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
}