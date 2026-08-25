import React, { useState } from 'react';
import { 
  User, Code, Cpu, Award, FileText, CheckCircle2, 
  ExternalLink, Sparkles, Terminal, Layers, Database, Globe
} from 'lucide-react';

export default function About() {
  const [activeTab, setActiveTab] = useState('overview');

  const stats = [
    { number: '6+', label: 'Months Experience', detail: 'Hands-on production & freelance' },
    { number: '10+', label: 'Projects Built', detail: 'Full-stack & frontend solutions' },
    { number: '12+', label: 'Core Technologies', detail: 'Modern web & backend tools' },
    { number: '100%', label: 'Dedication', detail: 'Clean code & user-first design' },
  ];

  const skillCategories = [
    {
      title: 'Frontend Development',
      icon: Globe,
      skills: [
        { name: 'React.js', level: '90%' },
        { name: 'JavaScript (ES6+)', level: '92%' },
        { name: 'Tailwind CSS', level: '95%' },
        { name: 'HTML5 & CSS3', level: '98%' },
        { name: 'Vite & Webpack', level: '85%' },
      ]
    },
    {
      title: 'Backend & APIs',
      icon: Terminal,
      skills: [
        { name: 'Node.js', level: '88%' },
        { name: 'Express.js', level: '86%' },
        { name: 'RESTful APIs', level: '90%' },
        { name: 'Authentication (JWT)', level: '84%' },
      ]
    },
    {
      title: 'Databases & Storage',
      icon: Database,
      skills: [
        { name: 'MongoDB', level: '88%' },
        { name: 'MySQL', level: '80%' },
        { name: 'Mongoose ORM', level: '86%' },
      ]
    },
    {
      title: 'Tools & Workflow',
      icon: Layers,
      skills: [
        { name: 'Git & GitHub', level: '92%' },
        { name: 'Postman', level: '88%' },
        { name: 'VS Code', level: '95%' },
        { name: 'Figma to Code', level: '85%' },
      ]
    },
  ];

  return (
    <div className="flex flex-col h-full bg-[#f8fafc] text-slate-800 font-sans">
      {/* Top Banner / System Header */}
      <div className="bg-gradient-to-r from-[#1e3a8a]/90 via-[#2563eb]/80 to-[#3b82f6]/80 text-white p-5 border-b border-blue-400/40 relative overflow-hidden shadow-inner">
        {/* Glow effect */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none" />
        
        <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 relative z-10">
          {/* User Icon Avatar */}
          <div className="relative group">
            <div className="w-20 h-20 rounded-xl bg-gradient-to-tr from-amber-400 via-blue-200 to-white p-1 shadow-lg border border-white/60">
              <div className="w-full h-full rounded-lg bg-gradient-to-br from-blue-700 to-indigo-900 flex items-center justify-center text-white font-bold text-2xl shadow-inner">
                RL
              </div>
            </div>
            <div className="absolute -bottom-1 -right-1 w-5 h-5 bg-emerald-500 rounded-full border-2 border-white flex items-center justify-center" title="Online / Open for opportunities">
              <div className="w-1.5 h-1.5 bg-white rounded-full animate-ping" />
            </div>
          </div>

          {/* User Meta */}
          <div className="text-center sm:text-left flex-1">
            <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 mb-1">
              <h1 className="text-2xl font-bold text-white tracking-tight drop-shadow-sm">Rohan Lal</h1>
              <span className="px-2 py-0.5 rounded-full bg-white/20 text-blue-100 text-[11px] font-medium border border-white/30 backdrop-blur-sm">
                Full Stack Developer
              </span>
            </div>
            <p className="text-blue-100 text-xs sm:text-sm max-w-xl font-normal leading-relaxed">
              Crafting high-performance web applications with modern React, scalable Node.js architectures, and elegant user interfaces.
            </p>
          </div>
        </div>
      </div>

      {/* Windows Navigation Tabs */}
      <div className="flex items-center gap-1 px-4 pt-2 bg-[#e8eff7] border-b border-[#cbd7e4] text-xs font-medium">
        <button
          onClick={() => setActiveTab('overview')}
          className={`px-4 py-1.5 rounded-t border-t border-x transition-all flex items-center gap-1.5 ${
            activeTab === 'overview'
              ? 'bg-white border-[#cbd7e4] border-b-transparent text-blue-900 font-semibold shadow-sm -mb-[1px]'
              : 'border-transparent text-slate-600 hover:bg-white/50 hover:text-slate-900'
          }`}
        >
          <User size={13} className="text-blue-600" /> System Overview
        </button>
        <button
          onClick={() => setActiveTab('skills')}
          className={`px-4 py-1.5 rounded-t border-t border-x transition-all flex items-center gap-1.5 ${
            activeTab === 'skills'
              ? 'bg-white border-[#cbd7e4] border-b-transparent text-blue-900 font-semibold shadow-sm -mb-[1px]'
              : 'border-transparent text-slate-600 hover:bg-white/50 hover:text-slate-900'
          }`}
        >
          <Cpu size={13} className="text-indigo-600" /> Technical Skills
        </button>
        <button
          onClick={() => setActiveTab('bio')}
          className={`px-4 py-1.5 rounded-t border-t border-x transition-all flex items-center gap-1.5 ${
            activeTab === 'bio'
              ? 'bg-white border-[#cbd7e4] border-b-transparent text-blue-900 font-semibold shadow-sm -mb-[1px]'
              : 'border-transparent text-slate-600 hover:bg-white/50 hover:text-slate-900'
          }`}
        >
          <FileText size={13} className="text-emerald-600" /> Bio & Background
        </button>
      </div>

      {/* Content Panels */}
      <div className="flex-1 p-5 overflow-y-auto bg-white">
        {/* OVERVIEW TAB */}
        {activeTab === 'overview' && (
          <div className="space-y-6 max-w-4xl">
            {/* Quick Stats Grid */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              {stats.map((stat, i) => (
                <div 
                  key={i} 
                  className="p-3.5 rounded-lg bg-gradient-to-b from-[#f8fafc] to-[#f1f5f9] border border-[#e2e8f0] shadow-sm hover:border-blue-300 hover:shadow transition-all"
                >
                  <div className="text-2xl font-black text-blue-700 font-mono leading-none mb-1">
                    {stat.number}
                  </div>
                  <div className="text-xs font-bold text-slate-700">{stat.label}</div>
                  <div className="text-[10px] text-slate-500 mt-0.5">{stat.detail}</div>
                </div>
              ))}
            </div>

            {/* System Specs Style Info Box */}
            <div className="rounded-lg border border-[#cbd5e1] overflow-hidden shadow-sm">
              <div className="bg-[#f1f5f9] px-3.5 py-2 border-b border-[#cbd5e1] flex items-center justify-between text-xs font-bold text-slate-700">
                <span className="flex items-center gap-1.5">
                  <Terminal size={14} className="text-blue-600" /> Developer Environment & Specs
                </span>
                <span className="text-[10px] bg-emerald-100 text-emerald-800 px-2 py-0.5 rounded font-semibold border border-emerald-300">
                  Ready to Deploy
                </span>
              </div>
              <div className="p-4 grid grid-cols-1 md:grid-cols-2 gap-y-2.5 gap-x-6 text-xs divide-y md:divide-y-0 divide-slate-100">
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Primary Focus:</span>
                  <span className="font-semibold text-slate-800">Full Stack Web Engineering</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Frontend Stack:</span>
                  <span className="font-semibold text-slate-800">React.js, Tailwind, Next.js</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Backend Stack:</span>
                  <span className="font-semibold text-slate-800">Node.js, Express, REST APIs</span>
                </div>
                <div className="flex justify-between py-1 border-b border-slate-100">
                  <span className="text-slate-500 font-medium">Databases:</span>
                  <span className="font-semibold text-slate-800">MongoDB, MySQL, PostgreSQL</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Experience Level:</span>
                  <span className="font-semibold text-blue-700">6+ Months Professional Exp</span>
                </div>
                <div className="flex justify-between py-1">
                  <span className="text-slate-500 font-medium">Location:</span>
                  <span className="font-semibold text-slate-800">India · Remote Available</span>
                </div>
              </div>
            </div>

            {/* Core Highlights */}
            <div className="bg-blue-50/70 border border-blue-200/80 rounded-lg p-4 text-xs text-slate-700">
              <div className="font-semibold text-blue-900 mb-2 flex items-center gap-1.5">
                <Sparkles size={14} className="text-blue-600" /> What I Bring to Your Team
              </div>
              <ul className="space-y-1.5 text-slate-600 list-disc list-inside">
                <li>End-to-end full-stack capabilities from pixel-perfect UI to scalable backend architectures.</li>
                <li>Clean, maintainable, component-driven code adhering to industry standards.</li>
                <li>Quick turnaround on prototyping, responsive layouts, and API integrations.</li>
              </ul>
            </div>
          </div>
        )}

        {/* SKILLS TAB */}
        {activeTab === 'skills' && (
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 max-w-4xl">
            {skillCategories.map((cat, i) => {
              const CatIcon = cat.icon;
              return (
                <div key={i} className="p-4 rounded-lg border border-[#e2e8f0] bg-[#f8fafc] shadow-sm">
                  <div className="flex items-center gap-2 mb-3 text-xs font-bold text-slate-800 pb-2 border-b border-slate-200">
                    <CatIcon size={15} className="text-blue-600" />
                    <span>{cat.title}</span>
                  </div>
                  <div className="space-y-2.5">
                    {cat.skills.map((skill, sIdx) => (
                      <div key={sIdx} className="space-y-1">
                        <div className="flex justify-between text-[11px]">
                          <span className="font-medium text-slate-700">{skill.name}</span>
                          <span className="font-mono text-slate-500 text-[10px]">{skill.level}</span>
                        </div>
                        <div className="w-full bg-slate-200 h-1.5 rounded-full overflow-hidden">
                          <div 
                            className="h-full bg-gradient-to-r from-blue-500 to-indigo-600 rounded-full transition-all duration-500"
                            style={{ width: skill.level }}
                          />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        )}

        {/* BIO TAB */}
        {activeTab === 'bio' && (
          <div className="max-w-3xl space-y-4 text-xs sm:text-sm text-slate-700 leading-relaxed font-sans">
            <div className="p-4 bg-amber-50/70 border border-amber-200/80 rounded-lg flex items-start gap-3">
              <FileText size={20} className="text-amber-600 shrink-0 mt-0.5" />
              <div>
                <h4 className="font-bold text-amber-900 mb-1">About Rohan Lal</h4>
                <p className="text-slate-700 leading-relaxed text-xs">
                  A software developer driven by the excitement of building things that live on the web. Over the past 6+ months, I have focused on full-stack web applications, tackling challenges ranging from responsive state-of-the-art UI engineering to performant backend services.
                </p>
              </div>
            </div>

            <div className="p-4 bg-white border border-[#e2e8f0] rounded-lg shadow-sm space-y-3">
              <h4 className="font-bold text-slate-800 text-xs uppercase tracking-wider text-blue-900">
                Philosophy & Approach
              </h4>
              <p className="text-xs text-slate-600">
                I believe great software is the intersection of thoughtful design and solid architecture. Whether crafting responsive interfaces with React or writing scalable API services in Node.js, I take pride in writing readable, tested, and maintainable code.
              </p>
              <p className="text-xs text-slate-600">
                When I'm not coding, I'm exploring new web standards, optimizing workflows, and experimenting with creative UI patterns.
              </p>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
