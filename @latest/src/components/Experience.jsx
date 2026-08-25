import React, { useState } from 'react';
import { 
  Briefcase, Calendar, Building2, CheckCircle, 
  Layers, Sparkles, ChevronRight, Award, TrendingUp
} from 'lucide-react';

const experiences = [
  {
    id: 'exp1',
    role: 'Full Stack Developer Intern',
    company: 'Tech Startup / Freelance Projects',
    location: 'Remote',
    duration: 'Jan 2024 – Present · 6+ months',
    isCurrent: true,
    summary: 'Spearheaded full-stack feature development, architecture design, and database schema implementation for client applications.',
    responsibilities: [
      'Developed and deployed end-to-end full-stack web applications using React.js, Tailwind CSS, Node.js, and Express.',
      'Designed and consumed robust RESTful APIs with secure token-based authentication and rate limiting.',
      'Optimized MongoDB and MySQL database queries, resulting in measurable improvements in page load speeds and API response times.',
      'Collaborated closely with cross-functional teams in agile sprint cycles to ship production-ready features on tight schedules.'
    ],
    tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'Git', 'Tailwind CSS']
  },
  {
    id: 'exp2',
    role: 'Frontend Developer',
    company: 'Personal & Open Source Projects',
    location: 'Remote',
    duration: '2023 – 2024 · 1 year',
    isCurrent: false,
    summary: 'Crafted responsive, mobile-first interfaces and reusable React component systems with high design fidelity.',
    responsibilities: [
      'Built 10+ responsive, accessible user interfaces following contemporary UI/UX principles and modern CSS layouts.',
      'Integrated third-party REST APIs and managed client-side state efficiently with modern React hooks.',
      'Conducted peer code reviews, utilized Git branching workflows, and actively contributed to developer communities.'
    ],
    tech: ['HTML5', 'CSS3', 'JavaScript (ES6+)', 'React', 'Tailwind CSS', 'Vite', 'GitHub']
  },
  {
    id: 'exp3',
    role: 'Full Stack & Software Foundations',
    company: 'Intensive Self-Directed Learning',
    location: 'Remote',
    duration: '2022 – 2023',
    isCurrent: false,
    summary: 'Mastered computer science fundamentals, data structures, algorithms, and full-stack software architecture.',
    responsibilities: [
      'Implemented fundamental data structures and algorithmic problem-solving techniques in Python and JavaScript.',
      'Engineered full-stack CRUD applications integrating relational (MySQL) and NoSQL (MongoDB) databases.',
      'Transformed Figma design concepts into production-grade interactive frontends.'
    ],
    tech: ['Python', 'JavaScript', 'MySQL', 'MongoDB', 'Data Structures', 'Figma']
  }
];

export default function Experience() {
  const [selectedExpId, setSelectedExpId] = useState(experiences[0].id);

  return (
    <div className="flex flex-col h-full bg-[#f8fafc] text-slate-800 font-sans">
      {/* Top Banner */}
      <div className="bg-gradient-to-r from-[#1e3a8a] via-[#1d4ed8] to-[#3b82f6] text-white p-5 border-b border-blue-400/40 relative overflow-hidden shadow-inner">
        <div className="relative z-10 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <Briefcase size={20} className="text-blue-200" />
              <h1 className="text-2xl font-bold tracking-tight text-white">Work Experience & Journey</h1>
            </div>
            <p className="text-blue-100 text-xs sm:text-sm">
              Professional history, internship roles, and technical project milestones.
            </p>
          </div>
          <div className="flex items-center gap-2">
            <span className="px-3 py-1 rounded-full bg-emerald-500/20 text-emerald-200 border border-emerald-400/40 text-xs font-semibold backdrop-blur-sm flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
              Available for New Roles
            </span>
          </div>
        </div>
      </div>

      {/* Main Experience Content */}
      <div className="flex-1 p-5 overflow-y-auto bg-white">
        <div className="max-w-4xl mx-auto space-y-6">
          {/* Experience Cards */}
          <div className="space-y-4">
            {experiences.map((exp, idx) => (
              <div 
                key={exp.id}
                className="p-5 rounded-xl border border-[#cbd5e1] bg-[#f8fafc] hover:border-blue-300 hover:shadow-md transition-all shadow-sm space-y-4"
              >
                {/* Header */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 pb-3 border-b border-slate-200">
                  <div>
                    <div className="flex items-center gap-2">
                      <h2 className="text-base sm:text-lg font-bold text-slate-800">{exp.role}</h2>
                      {exp.isCurrent && (
                        <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-blue-100 text-blue-800 border border-blue-300">
                          Current
                        </span>
                      )}
                    </div>
                    <div className="text-xs font-semibold text-blue-700 mt-0.5 flex items-center gap-1.5">
                      <Building2 size={13} />
                      <span>{exp.company}</span>
                      <span className="text-slate-400">·</span>
                      <span className="text-slate-500 font-normal">{exp.location}</span>
                    </div>
                  </div>

                  <div className="flex items-center gap-1 text-xs font-medium text-slate-600 bg-white px-2.5 py-1 rounded-md border border-slate-200 shadow-sm shrink-0">
                    <Calendar size={13} className="text-blue-600" />
                    <span>{exp.duration}</span>
                  </div>
                </div>

                {/* Summary */}
                <p className="text-xs sm:text-sm text-slate-700 font-medium leading-relaxed">
                  {exp.summary}
                </p>

                {/* Key Responsibilities */}
                <div className="space-y-1.5 bg-white p-3.5 rounded-lg border border-slate-200/80">
                  <div className="text-[11px] font-bold uppercase tracking-wider text-slate-500 mb-2 flex items-center gap-1">
                    <TrendingUp size={13} className="text-emerald-600" /> Key Impact & Deliverables
                  </div>
                  {exp.responsibilities.map((resp, rIdx) => (
                    <div key={rIdx} className="flex items-start gap-2 text-xs text-slate-600">
                      <CheckCircle size={13} className="text-blue-600 shrink-0 mt-0.5" />
                      <span>{resp}</span>
                    </div>
                  ))}
                </div>

                {/* Tech Stack */}
                <div className="flex flex-wrap items-center gap-1.5 pt-1">
                  <span className="text-[11px] font-bold text-slate-500 mr-1 flex items-center gap-1">
                    <Layers size={12} /> Tech:
                  </span>
                  {exp.tech.map((t) => (
                    <span 
                      key={t}
                      className="px-2 py-0.5 bg-blue-50 border border-blue-200 rounded text-[11px] font-medium text-blue-800"
                    >
                      {t}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
